import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-heading mb-4">Контакты</h2>
        <p className="text-lg text-muted-foreground">Свяжитесь с нами удобным способом</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Phone" className="h-5 w-5 text-primary" />
              Телефон
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a href="tel:+78001234567" className="text-2xl font-bold text-primary hover:underline">
              +7 (800) 123-45-67
            </a>
            <p className="text-sm text-muted-foreground mt-2">Бесплатно по России</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Mail" className="h-5 w-5 text-primary" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a href="mailto:info@grillmaster.ru" className="text-2xl font-bold text-primary hover:underline break-all">
              info@grillmaster.ru
            </a>
            <p className="text-sm text-muted-foreground mt-2">Ответим в течение часа</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="MapPin" className="h-5 w-5 text-primary" />
              Адрес
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">г. Москва</p>
            <p className="text-muted-foreground">ул. Примерная, д. 123, офис 45</p>
            <p className="text-sm text-muted-foreground mt-2">Пн-Пт: 9:00 - 18:00</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="MessageCircle" className="h-5 w-5 text-primary" />
              Мессенджеры
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Icon name="MessageCircle" className="h-5 w-5" />
              Telegram
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Icon name="MessageSquare" className="h-5 w-5" />
              WhatsApp
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
