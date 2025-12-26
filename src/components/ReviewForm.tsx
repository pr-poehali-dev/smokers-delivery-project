import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ReviewFormProps {
  productId: number;
  onSubmit: (review: { author: string; rating: number; comment: string }) => void;
}

export default function ReviewForm({ productId, onSubmit }: ReviewFormProps) {
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!author.trim() || rating === 0 || !comment.trim()) {
      return;
    }

    onSubmit({ author, rating, comment });
    
    setAuthor('');
    setRating(0);
    setComment('');
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Оставить отзыв</CardTitle>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <Icon name="Check" className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Спасибо за отзыв!</h3>
            <p className="text-sm text-muted-foreground">Ваш отзыв был успешно добавлен</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="author" className="block text-sm font-medium mb-2">
                Ваше имя
              </label>
              <Input
                id="author"
                type="text"
                placeholder="Иван Иванов"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Ваша оценка
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Icon
                      name="Star"
                      className={`h-8 w-8 ${
                        star <= (hoveredRating || rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-muted-foreground'
                      }`}
                    />
                  </button>
                ))}
              </div>
              {rating === 0 && (
                <p className="text-xs text-muted-foreground mt-1">Выберите количество звёзд</p>
              )}
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-medium mb-2">
                Ваш отзыв
              </label>
              <Textarea
                id="comment"
                placeholder="Расскажите о вашем опыте использования этого товара..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={!author.trim() || rating === 0 || !comment.trim()}
            >
              Отправить отзыв
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
