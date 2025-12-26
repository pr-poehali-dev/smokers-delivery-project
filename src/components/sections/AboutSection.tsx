import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
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
  );
}
