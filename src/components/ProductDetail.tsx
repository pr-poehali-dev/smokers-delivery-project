import { useState } from 'react';
import { Product, Review } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import ReviewForm from '@/components/ReviewForm';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onAddReview: (productId: number, review: Omit<Review, 'id' | 'date'>) => void;
}

export default function ProductDetail({ product, onClose, onAddToCart, onAddReview }: ProductDetailProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  
  const averageRating = product.reviews.length > 0
    ? (product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length).toFixed(1)
    : 0;

  const handleReviewSubmit = (review: { author: string; rating: number; comment: string }) => {
    onAddReview(product.id, review);
    setShowReviewForm(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto bg-background rounded-lg shadow-xl">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl font-bold font-heading">{product.name}</h1>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <Icon name="X" className="h-6 w-6" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
                    {product.inStock ? (
                      <Badge variant="default" className="flex items-center gap-1">
                        <Icon name="Check" className="h-4 w-4" />
                        В наличии
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Icon name="Clock" className="h-4 w-4" />
                        Под заказ
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon
                          key={star}
                          name="Star"
                          className={`h-5 w-5 ${
                            star <= Number(averageRating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {averageRating} ({product.reviews.length} отзывов)
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Icon name="Shield" className="h-5 w-5 text-primary" />
                    <span>Гарантия: {product.warranty}</span>
                  </div>

                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      onAddToCart(product);
                      onClose();
                    }}
                  >
                    <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                    Добавить в корзину
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Особенности</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Icon name="Check" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Характеристики</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Отзывы ({product.reviews.length})</CardTitle>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowReviewForm(!showReviewForm)}
                    >
                      <Icon name="Plus" className="h-4 w-4 mr-1" />
                      Добавить
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {product.reviews.length > 0 ? (
                      product.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-4 last:border-0">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-semibold">{review.author}</p>
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Icon
                                    key={star}
                                    name="Star"
                                    className={`h-4 w-4 ${
                                      star <= review.rating
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'text-muted-foreground'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {new Date(review.date).toLocaleDateString('ru-RU')}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{review.comment}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-muted-foreground py-8">Отзывов пока нет. Будьте первым!</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {showReviewForm && (
              <ReviewForm 
                productId={product.id} 
                onSubmit={handleReviewSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}