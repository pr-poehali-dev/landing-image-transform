import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-12">
              <h1 className="text-2xl font-bold text-primary">COSMETIC STAR</h1>
              <nav className="hidden md:flex items-center gap-8">
                <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
                <a href="#brands" className="text-sm font-medium hover:text-primary transition-colors">Бренды</a>
                <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
                <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">3</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://cdn.poehali.dev/projects/bf1b0781-b5e0-4801-b05a-dce86bab9479/files/386e1484-3317-4786-973b-de8bd41c92a7.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Профессиональная косметика для вашей красоты
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Эксклюзивные линейки косметики от ведущих мировых брендов. Профессиональный уход для салонов и домашнего использования.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="px-8">
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Truck" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Доставка по России</h3>
              <p className="text-sm text-muted-foreground">Быстрая доставка в любой регион</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Shield" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">100% оригинал</h3>
              <p className="text-sm text-muted-foreground">Только сертифицированная продукция</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Gift" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Пробники в подарок</h3>
              <p className="text-sm text-muted-foreground">К каждому заказу</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Headphones" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Консультация</h3>
              <p className="text-sm text-muted-foreground">Помощь косметолога онлайн</p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные категории</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент профессиональной косметики для ухода за лицом, телом и волосами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/bf1b0781-b5e0-4801-b05a-dce86bab9479/files/fa897afe-9b1a-495e-a9c1-463d1e81bcf4.jpg"
                  alt="Уход за лицом"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Уход за лицом</h3>
                <p className="text-sm text-muted-foreground mb-4">Сыворотки, кремы, маски и пилинги для профессионального ухода</p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Смотреть категорию <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <Icon name="Sparkles" size={80} className="text-primary/30" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Уход за телом</h3>
                <p className="text-sm text-muted-foreground mb-4">Скрабы, масла, кремы для тела и антицеллюлитные средства</p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Смотреть категорию <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/bf1b0781-b5e0-4801-b05a-dce86bab9479/files/c0885d49-6f17-4157-89f6-f236b07933a6.jpg"
                  alt="Уход за волосами"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Уход за волосами</h3>
                <p className="text-sm text-muted-foreground mb-4">Шампуни, бальзамы, маски и сыворотки для волос</p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Смотреть категорию <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="brands" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Бренды в нашем каталоге</h2>
            <p className="text-muted-foreground">Официальный дистрибьютор ведущих производителей косметики</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Christina', 'Holy Land', 'Anna Lotan', 'GiGi', 'Dermalogica', 'Ericson Laboratoire'].map((brand) => (
              <Card key={brand} className="p-6 flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
                <p className="font-semibold text-lg">{brand}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании Cosmetic Star</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Мы являемся официальным дистрибьютором ведущих мировых брендов профессиональной косметики. 
                Наша миссия — предоставить косметологам и салонам красоты доступ к лучшим продуктам для ухода за кожей и волосами.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                С 2010 года мы успешно работаем на российском рынке, обеспечивая высокое качество продукции и сервиса. 
                Все товары сертифицированы и имеют необходимые документы.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">15+</p>
                  <p className="text-sm text-muted-foreground">Лет на рынке</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">5000+</p>
                  <p className="text-sm text-muted-foreground">Довольных клиентов</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">30+</p>
                  <p className="text-sm text-muted-foreground">Брендов</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/bf1b0781-b5e0-4801-b05a-dce86bab9479/files/fa897afe-9b1a-495e-a9c1-463d1e81bcf4.jpg"
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Подпишитесь на рассылку</h2>
            <p className="text-white/90 mb-8">
              Получайте информацию о новинках, акциях и специальных предложениях первыми
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Ваш e-mail" 
                className="bg-white text-foreground border-0"
              />
              <Button variant="secondary" size="lg" className="whitespace-nowrap">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">COSMETIC STAR</h3>
              <p className="text-sm text-background/70 mb-4">
                Профессиональная косметика для салонов красоты и домашнего ухода
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-background">Уход за лицом</a></li>
                <li><a href="#" className="hover:text-background">Уход за телом</a></li>
                <li><a href="#" className="hover:text-background">Уход за волосами</a></li>
                <li><a href="#" className="hover:text-background">Декоративная косметика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-background">О компании</a></li>
                <li><a href="#" className="hover:text-background">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-background">Гарантии</a></li>
                <li><a href="#" className="hover:text-background">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>8 800 333-03-45</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@cosmeticstar.ru</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1" />
                  <span>Москва, ул. Примерная, д. 1</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
            <p>© 2025 Cosmetic Star. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
