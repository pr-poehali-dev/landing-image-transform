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
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-8xl md:text-[12rem] font-bold mb-8 tracking-tighter">
              AWG
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto font-light leading-relaxed">
              Атмосферные водогенераторы для экстремальных условий.<br />
              Производство питьевой воды из воздуха в любой точке мира.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-10 py-5 text-xl font-medium">
                Техническая документация
                <Icon name="Download" className="ml-3" size={24} />
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-5 text-xl font-medium">
                Связаться с нами
                <Icon name="Phone" className="ml-3" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center bg-card/60 backdrop-blur-sm border-border/40">
              <CardContent className="pt-10 pb-10">
                <div className="text-6xl font-bold text-primary mb-4">
                  <AnimatedCounter end={92} />%
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Эффективность</h3>
                <p className="text-muted-foreground text-sm">
                  Энергоэффективность производства воды
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/60 backdrop-blur-sm border-border/40">
              <CardContent className="pt-10 pb-10">
                <div className="text-6xl font-bold text-primary mb-4">
                  <AnimatedCounter end={300} />+
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Установок</h3>
                <p className="text-muted-foreground text-sm">
                  По всему миру в 45+ странах
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/60 backdrop-blur-sm border-border/40">
              <CardContent className="pt-10 pb-10">
                <div className="text-6xl font-bold text-primary mb-4">
                  <AnimatedCounter end={15} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Лет опыта</h3>
                <p className="text-muted-foreground text-sm">
                  В разработке и производстве
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/60 backdrop-blur-sm border-border/40">
              <CardContent className="pt-10 pb-10">
                <div className="text-6xl font-bold text-primary mb-4">
                  <AnimatedCounter end={50} />L
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">В час</h3>
                <p className="text-muted-foreground text-sm">
                  Производительность воды
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Geographic Coverage */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">География проектов</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Наши установки AWG работают в самых отдаленных и труднодоступных регионах планеты
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon name="Mountain" className="text-primary" size={28} />
                      <h3 className="text-lg font-semibold">Горные регионы</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Высота до 4500м над уровнем моря
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon name="Thermometer" className="text-primary" size={28} />
                      <h3 className="text-lg font-semibold">Пустыни</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Температуры от -40°C до +60°C
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon name="Waves" className="text-primary" size={28} />
                      <h3 className="text-lg font-semibold">Острова</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Автономные системы для островов
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon name="Building" className="text-primary" size={28} />
                      <h3 className="text-lg font-semibold">Города</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Решения для мегаполисов
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Ключевые проекты</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Гималаи, Непал</h4>
                      <p className="text-muted-foreground text-sm">Высокогорная станция на высоте 4200м</p>
                      <p className="text-xs text-muted-foreground mt-1">Производительность: 25L/час</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Сахара, Марокко</h4>
                      <p className="text-muted-foreground text-sm">Пустынная установка для бедуинского поселения</p>
                      <p className="text-xs text-muted-foreground mt-1">Производительность: 40L/час</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Мальдивы</h4>
                      <p className="text-muted-foreground text-sm">Система для курортного комплекса</p>
                      <p className="text-xs text-muted-foreground mt-1">Производительность: 100L/час</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Антарктида</h4>
                      <p className="text-muted-foreground text-sm">Полярная исследовательская станция</p>
                      <p className="text-xs text-muted-foreground mt-1">Производительность: 30L/час</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Технические характеристики</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Детальные спецификации наших водогенераторов для различных применений
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AWG-25 Compact */}
            <Card className="bg-card/60 backdrop-blur-sm border-border/40">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">AWG-25 Compact</h3>
                  <p className="text-muted-foreground">Портативное решение</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Производительность</span>
                    <span className="font-medium">25 л/день</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Потребляемая мощность</span>
                    <span className="font-medium">1.2 кВт</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Влажность воздуха</span>
                    <span className="font-medium">≥35%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Рабочая температура</span>
                    <span className="font-medium">5°C - 40°C</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Размеры (ДxШxВ)</span>
                    <span className="font-medium">80x60x120 см</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Вес</span>
                    <span className="font-medium">45 кг</span>
                  </div>
                </div>

                <Button className="w-full mt-6" variant="outline">
                  Скачать спецификацию
                  <Icon name="Download" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            {/* AWG-50 Standard */}
            <Card className="bg-card/60 backdrop-blur-sm border-primary/20 border-2">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-8 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-3">
                    ПОПУЛЯРНЫЙ
                  </div>
                  <h3 className="text-2xl font-bold mb-2">AWG-50 Standard</h3>
                  <p className="text-muted-foreground">Стандартное решение</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Производительность</span>
                    <span className="font-medium">50 л/день</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Потребляемая мощность</span>
                    <span className="font-medium">2.5 кВт</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Влажность воздуха</span>
                    <span className="font-medium">≥30%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Рабочая температура</span>
                    <span className="font-medium">-10°C - 50°C</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Размеры (ДxШxВ)</span>
                    <span className="font-medium">120x80x160 см</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Вес</span>
                    <span className="font-medium">85 кг</span>
                  </div>
                </div>

                <Button className="w-full mt-6">
                  Скачать спецификацию
                  <Icon name="Download" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            {/* AWG-100 Industrial */}
            <Card className="bg-card/60 backdrop-blur-sm border-border/40">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">AWG-100 Industrial</h3>
                  <p className="text-muted-foreground">Промышленное решение</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Производительность</span>
                    <span className="font-medium">100 л/день</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Потребляемая мощность</span>
                    <span className="font-medium">4.5 кВт</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Влажность воздуха</span>
                    <span className="font-medium">≥25%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Рабочая температура</span>
                    <span className="font-medium">-40°C - 60°C</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Размеры (ДxШxВ)</span>
                    <span className="font-medium">200x120x180 см</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Вес</span>
                    <span className="font-medium">150 кг</span>
                  </div>
                </div>

                <Button className="w-full mt-6" variant="outline">
                  Скачать спецификацию
                  <Icon name="Download" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact and Partnership */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Сотрудничество</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Станьте частью глобальной сети поставщиков чистой питьевой воды
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-8">Запрос коммерческого предложения</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Имя и фамилия"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50"
                    />
                  </div>
                  <Input
                    name="company"
                    placeholder="Название компании"
                    className="bg-background/50"
                  />
                  <Input
                    name="location"
                    placeholder="Локация проекта"
                    className="bg-background/50"
                  />
                  <Textarea
                    name="message"
                    placeholder="Описание проекта и требования"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 min-h-[120px]"
                  />
                  <Button type="submit" className="w-full" size="lg">
                    Отправить запрос
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon name="Building2" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Головной офис</h4>
                        <p className="text-muted-foreground text-sm">
                          г. Москва, Инновационный центр "Сколково"<br />
                          ул. Нобеля, д. 7, офис 156
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon name="Phone" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Телефоны</h4>
                        <p className="text-muted-foreground text-sm">
                          +7 (495) 232-15-47 — продажи<br />
                          +7 (800) 555-12-34 — техподдержка
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon name="Mail" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground text-sm">
                          sales@awg-russia.com<br />
                          support@awg-russia.com
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Партнеры и сертификаты</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                      <span className="font-medium">ISO 9001:2015</span>
                      <Icon name="CheckCircle" className="text-green-500" size={20} />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                      <span className="font-medium">CE Certification</span>
                      <Icon name="CheckCircle" className="text-green-500" size={20} />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                      <span className="font-medium">NSF International</span>
                      <Icon name="CheckCircle" className="text-green-500" size={20} />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                      <span className="font-medium">WHO Standards</span>
                      <Icon name="CheckCircle" className="text-green-500" size={20} />
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <p className="text-sm text-muted-foreground">
                      Партнеры: ЮНИСЕФ, Красный Крест, Международная организация миграции
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-border/30 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-4xl font-bold mb-4">AWG</div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Мировой лидер в области технологий извлечения воды из атмосферы. 
                Более 15 лет опыта и 300+ успешных проектов по всему миру.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Icon name="Linkedin" size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Twitter" size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Youtube" size={16} />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>AWG-25 Compact</li>
                <li>AWG-50 Standard</li>
                <li>AWG-100 Industrial</li>
                <li>Индивидуальные решения</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Техническая поддержка</li>
                <li>Документация</li>
                <li>Обучение персонала</li>
                <li>Сервисное обслуживание</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © 2024 AWG Technologies Russia. Все права защищены. | 
              <span className="ml-2">Политика конфиденциальности</span> | 
              <span className="ml-2">Условия использования</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;