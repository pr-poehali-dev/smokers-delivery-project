import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import ProductCard from '@/components/ProductCard';
import { Product, products } from '@/types/product';

interface HomeSectionProps {
  setActiveSection: (section: string) => void;
  addToCart: (product: Product) => void;
}

export default function HomeSection({ setActiveSection, addToCart }: HomeSectionProps) {
  return (
    <div className="space-y-16 animate-fade-in">
      <section className="relative py-20 overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <Badge className="mb-4 animate-scale-in">Качество • Надежность • Доставка</Badge>
          <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Всё для идеального копчения и гриля
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Профессиональное оборудование с доставкой по всей России
          </p>
          <Button size="lg" className="gap-2" onClick={() => setActiveSection('catalog')}>
            Смотреть каталог
            <Icon name="ArrowRight" className="h-5 w-5" />
          </Button>
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-bold font-heading mb-8 text-center">Популярные товары</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="bg-muted/50 rounded-3xl p-8 md:p-12">
        <h3 className="text-3xl font-bold font-heading mb-8 text-center">Наши преимущества</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Truck" className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Доставка по России</h4>
            <p className="text-muted-foreground">Быстрая и надежная доставка в любой регион</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Shield" className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Гарантия качества</h4>
            <p className="text-muted-foreground">Только проверенное оборудование</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Headphones" className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Поддержка 24/7</h4>
            <p className="text-muted-foreground">Всегда на связи для ваших вопросов</p>
          </div>
        </div>
      </section>
    </div>
  );
}
