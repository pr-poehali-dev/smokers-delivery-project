import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  index?: number;
}

export default function ProductCard({ product, onAddToCart, index = 0 }: ProductCardProps) {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" 
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <Badge className="absolute top-4 right-4 bg-secondary">
            {product.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-2 font-heading">{product.name}</CardTitle>
        <CardDescription className="mb-4">{product.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.map((feature, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
          <Button onClick={() => onAddToCart(product)} className="gap-2">
            <Icon name="ShoppingCart" className="h-4 w-4" />
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
