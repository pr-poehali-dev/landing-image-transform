import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const current = Math.floor(progress * end);
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/5373b948-61a8-4263-ad75-312c45ad4d62.jpg" 
            alt="Mountain landscape" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight">
              AWG
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
              Технология нового поколения для создания устойчивых решений в экстремальных условиях
            </p>
            <Button size="lg" className="px-8 py-4 text-lg font-medium">
              Узнать больше
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-primary mb-4">
                  <AnimatedCounter end={99} />%
                </div>
                <h3 className="text-xl font-semibold mb-2">Эффективность</h3>
                <p className="text-muted-foreground">
                  Максимальная производительность в любых условиях
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-primary mb-4">
                  <AnimatedCounter end={24} />/<AnimatedCounter end={7} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Надежность</h3>
                <p className="text-muted-foreground">
                  Круглосуточная работа без перебоев
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-primary mb-4">
                  -<AnimatedCounter end={40} />°C
                </div>
                <h3 className="text-xl font-semibold mb-2">Устойчивость</h3>
                <p className="text-muted-foreground">
                  Работа в экстремальных температурах
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О продукте</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AWG представляет собой революционное решение, созданное для работы в самых сложных условиях
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Mountain" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Горные условия</h3>
                  <p className="text-muted-foreground">
                    Специально адаптирован для работы в высокогорной местности
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Settings" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Автоматизация</h3>
                  <p className="text-muted-foreground">
                    Полностью автоматизированные процессы управления
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="TrendingUp" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Высокая производительность</h3>
                  <p className="text-muted-foreground">
                    Оптимизирован для максимальной эффективности
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Технические характеристики</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Рабочая температура</span>
                    <span className="font-medium">-40°C до +60°C</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Мощность</span>
                    <span className="font-medium">2.5 кВт</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Производительность</span>
                    <span className="font-medium">50 л/час</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Размеры</span>
                    <span className="font-medium">120×80×160 см</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Вес</span>
                    <span className="font-medium">85 кг</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Связаться с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы обсудить ваш проект? Свяжитесь с нашей командой
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background/50 min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить сообщение
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Инновационная, 42<br />
                    БЦ "Технопарк", офис 15
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">
                    +7 (495) 123-45-67<br />
                    +7 (800) 555-01-23
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    info@awg-tech.ru<br />
                    support@awg-tech.ru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold mb-4">AWG</div>
          <p className="text-muted-foreground mb-6">
            Инновационные решения для экстремальных условий
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 AWG Technologies. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;