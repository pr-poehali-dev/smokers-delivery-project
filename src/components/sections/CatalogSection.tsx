import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

interface CatalogSectionProps {
  filteredProducts: Product[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  addToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export default function CatalogSection({ 
  filteredProducts, 
  selectedCategory, 
  setSelectedCategory, 
  addToCart,
  onViewDetails
}: CatalogSectionProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-heading mb-4">Каталог товаров</h2>
        <p className="text-lg text-muted-foreground">Выберите категорию или просмотрите весь ассортимент</p>
      </div>

      <Tabs defaultValue="all" onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
          <TabsTrigger value="all">Все</TabsTrigger>
          <TabsTrigger value="Мангалы">Мангалы</TabsTrigger>
          <TabsTrigger value="Коптильни">Коптильни</TabsTrigger>
          <TabsTrigger value="Дымогенераторы">Дымогенераторы</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={addToCart}
            onViewDetails={onViewDetails}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}