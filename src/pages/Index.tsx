import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import HomeSection from '@/components/sections/HomeSection';
import CatalogSection from '@/components/sections/CatalogSection';
import DeliverySection from '@/components/sections/DeliverySection';
import AboutSection from '@/components/sections/AboutSection';
import ContactsSection from '@/components/sections/ContactsSection';
import ProductDetail from '@/components/ProductDetail';
import { Product, CartItem, Review, products } from '@/types/product';

export default function Index() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productList, setProductList] = useState<Product[]>(products);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const addReview = (productId: number, reviewData: Omit<Review, 'id' | 'date'>) => {
    setProductList(prevProducts => 
      prevProducts.map(product => {
        if (product.id === productId) {
          const newReview: Review = {
            id: product.reviews.length > 0 
              ? Math.max(...product.reviews.map(r => r.id)) + 1 
              : 1,
            ...reviewData,
            date: new Date().toISOString().split('T')[0]
          };
          return {
            ...product,
            reviews: [...product.reviews, newReview]
          };
        }
        return product;
      })
    );

    if (selectedProduct && selectedProduct.id === productId) {
      setSelectedProduct(prevProduct => {
        if (!prevProduct) return null;
        const newReview: Review = {
          id: prevProduct.reviews.length > 0 
            ? Math.max(...prevProduct.reviews.map(r => r.id)) + 1 
            : 1,
          ...reviewData,
          date: new Date().toISOString().split('T')[0]
        };
        return {
          ...prevProduct,
          reviews: [...prevProduct.reviews, newReview]
        };
      });
    }
  };

  const filteredProducts = selectedCategory === 'all'
    ? productList
    : productList.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        getTotalPrice={getTotalPrice}
      />

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <HomeSection 
            setActiveSection={setActiveSection}
            addToCart={addToCart}
            onViewDetails={setSelectedProduct}
          />
        )}

        {activeSection === 'catalog' && (
          <CatalogSection 
            filteredProducts={filteredProducts}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            addToCart={addToCart}
            onViewDetails={setSelectedProduct}
          />
        )}

        {activeSection === 'delivery' && <DeliverySection />}

        {activeSection === 'about' && <AboutSection />}

        {activeSection === 'contacts' && <ContactsSection />}
      </main>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
          onAddReview={addReview}
        />
      )}

      <footer className="mt-20 border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Flame" className="h-6 w-6 text-primary" />
              <span className="font-bold font-heading">Hot-Ok</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 ГрильМастер. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Send" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}