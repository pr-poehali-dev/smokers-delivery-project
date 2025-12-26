import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  index?: number;
}

export default function ProductCard({ product, onAddToCart, onViewDetails, index = 0 }: ProductCardProps) {
  const averageRating = product.reviews.length > 0
    ? (product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length).toFixed(1)
    : 0;

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in cursor-pointer" 
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onViewDetails(product)}
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
          {!product.inStock && (
            <Badge className="absolute top-4 left-4 bg-yellow-500">
              Под заказ
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <CardTitle className="font-heading flex-1">{product.name}</CardTitle>
        </div>
        
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Icon
              key={star}
              name="Star"
              className={`h-4 w-4 ${
                star <= Number(averageRating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-muted-foreground'
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">
            ({product.reviews.length})
          </span>
        </div>

        <CardDescription className="mb-4 line-clamp-2">{product.description}</CardDescription>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.slice(0, 3).map((feature, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }} 
            className="gap-2"
          >
            <Icon name="ShoppingCart" className="h-4 w-4" />
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}