import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function DeliverySection() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-heading mb-4">Доставка и оплата</h2>
        <p className="text-lg text-muted-foreground">Удобные способы доставки по всей России</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Truck" className="h-6 w-6 text-primary" />
            Способы доставки
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
            <Icon name="Package" className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-2">Курьерская доставка</h4>
              <p className="text-sm text-muted-foreground">Доставка по Москве и Санкт-Петербургу в течение 1-2 дней. Стоимость от 500 ₽.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
            <Icon name="Home" className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-2">Пункты выдачи</h4>
              <p className="text-sm text-muted-foreground">Более 2000 пунктов выдачи по всей России. Доставка 3-7 дней. Стоимость от 300 ₽.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
            <Icon name="MapPin" className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-2">Почта России</h4>
              <p className="text-sm text-muted-foreground">Доставка в любой населенный пункт. Сроки 5-14 дней. Стоимость от 400 ₽.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="CreditCard" className="h-6 w-6 text-primary" />
            Способы оплаты
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2">Онлайн оплата</h4>
              <p className="text-sm text-muted-foreground">Банковские карты, электронные кошельки</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2">Наличными</h4>
              <p className="text-sm text-muted-foreground">При получении курьеру или в пункте выдачи</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
