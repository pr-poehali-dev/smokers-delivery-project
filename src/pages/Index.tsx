import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Мангал-гриль премиум',
    price: 15900,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/1be17ce2-be65-443a-9fd8-77484c983597.jpg',
    category: 'Мангалы',
    description: 'Профессиональный мангал-гриль из нержавеющей стали',
    features: ['Нержавеющая сталь', 'Регулировка высоты', 'Решетка в комплекте']
  },
  {
    id: 2,
    name: 'Дымогенератор компакт',
    price: 8500,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/3db84a65-c933-4a08-aae3-9cb0e8949bb4.jpg',
    category: 'Дымогенераторы',
    description: 'Компактный дымогенератор для холодного копчения',
    features: ['Холодное копчение', 'Регулировка дыма', 'Простота использования']
  },
  {
    id: 3,
    name: 'Коптильня профессиональная',
    price: 22000,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/6dfeef68-9f46-4bd6-8e7b-e36451281d84.jpg',
    category: 'Коптильни',
    description: 'Вместительная коптильня для горячего и холодного копчения',
    features: ['Большой объем', 'Термометр', '2 яруса']
  },
  {
    id: 4,
    name: 'Мангал складной турист',
    price: 3200,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/1be17ce2-be65-443a-9fd8-77484c983597.jpg',
    category: 'Мангалы',
    description: 'Компактный складной мангал для путешествий',
    features: ['Складной', 'Легкий', 'Чехол в комплекте']
  },
  {
    id: 5,
    name: 'Дымогенератор усиленный',
    price: 12500,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/3db84a65-c933-4a08-aae3-9cb0e8949bb4.jpg',
    category: 'Дымогенераторы',
    description: 'Мощный дымогенератор с расширенным функционалом',
    features: ['Автоматика', 'Большая камера', 'Датчик температуры']
  },
  {
    id: 6,
    name: 'Коптильня домашняя',
    price: 9800,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/6dfeef68-9f46-4bd6-8e7b-e36451281d84.jpg',
    category: 'Коптильни',
    description: 'Компактная коптильня для дачи',
    features: ['Компактность', 'Простота', 'Надежность']
  }
];

export default function Index() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Flame" className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ГрильМастер
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setActiveSection('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveSection('catalog')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'catalog' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Каталог
            </button>
            <button
              onClick={() => setActiveSection('delivery')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'delivery' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Доставка
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              О компании
            </button>
            <button
              onClick={() => setActiveSection('contacts')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Контакты
            </button>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Icon name="ShoppingCart" className="h-5 w-5" />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-secondary">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg">
              <SheetHeader>
                <SheetTitle className="font-heading">Корзина</SheetTitle>
                <SheetDescription>
                  {cart.length === 0 ? 'Ваша корзина пуста' : `Товаров в корзине: ${cart.length}`}
                </SheetDescription>
              </SheetHeader>
              
              <div className="mt-8 space-y-4">
                {cart.map(item => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.price.toLocaleString()} ₽</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Icon name="Minus" className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Icon name="Plus" className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-destructive"
                            >
                              <Icon name="Trash2" className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {cart.length > 0 && (
                <>
                  <Separator className="my-6" />
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <span>Итого:</span>
                      <span className="text-primary">{getTotalPrice().toLocaleString()} ₽</span>
                    </div>
                    <Button className="w-full" size="lg">
                      Оформить заказ
                      <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
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
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
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
                        <Button onClick={() => addToCart(product)} className="gap-2">
                          <Icon name="ShoppingCart" className="h-4 w-4" />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
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
        )}

        {activeSection === 'catalog' && (
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
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
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
                      <Button onClick={() => addToCart(product)} className="gap-2">
                        <Icon name="ShoppingCart" className="h-4 w-4" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'delivery' && (
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
        )}

        {activeSection === 'about' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-4xl font-bold font-heading mb-4">О компании</h2>
              <p className="text-lg text-muted-foreground">Ваш надежный партнер в мире барбекю и копчения</p>
            </div>

            <Card>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-4">ГрильМастер</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы специализируемся на продаже профессионального оборудования для копчения, барбекю и гриля. 
                    Наша команда имеет многолетний опыт работы в этой области и готова помочь вам выбрать идеальное 
                    оборудование для ваших нужд.
                  </p>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">лет на рынке</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-sm text-muted-foreground">довольных клиентов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">товаров в каталоге</div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xl font-semibold mb-4">Наши ценности</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Качество продукции и надежность оборудования</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Индивидуальный подход к каждому клиенту</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Быстрая доставка по всей России</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Профессиональная консультация и поддержка</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'contacts' && (
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
        )}
      </main>

      <footer className="mt-20 border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Flame" className="h-6 w-6 text-primary" />
              <span className="font-bold font-heading">ГрильМастер</span>
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
