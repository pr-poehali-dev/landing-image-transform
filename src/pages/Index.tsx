import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-5">
            <div className="text-3xl font-light tracking-wider text-primary">
              COSMETIC STAR
            </div>
            <nav className="hidden lg:flex items-center gap-10">
              <a href="#new" className="text-sm tracking-wide hover:text-primary transition-colors">Новинки</a>
              <a href="#catalog" className="text-sm tracking-wide hover:text-primary transition-colors">Каталог</a>
              <a href="#brands" className="text-sm tracking-wide hover:text-primary transition-colors">Бренды</a>
              <a href="#about" className="text-sm tracking-wide hover:text-primary transition-colors">О нас</a>
              <a href="#delivery" className="text-sm tracking-wide hover:text-primary transition-colors">Доставка</a>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="User" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="relative hover:text-primary">
                <Icon name="ShoppingBag" size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">0</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full">
                <span className="text-xs tracking-widest text-primary uppercase">Космецевтика для избирательных</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-light leading-tight">
                Профессиональная косметика
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                На страже вашей привлекательности с 2010 года. Официальный дистрибьютор ведущих мировых брендов.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="px-8 rounded-full">
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="px-8 rounded-full">
                  Консультация
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-8 border-t border-border/50">
                <div>
                  <p className="text-3xl font-light text-primary">5000+</p>
                  <p className="text-sm text-muted-foreground">довольных клиентов</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-primary">30+</p>
                  <p className="text-sm text-muted-foreground">брендов в каталоге</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-primary">15</p>
                  <p className="text-sm text-muted-foreground">лет на рынке</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/bf1b0781-b5e0-4801-b05a-dce86bab9479/files/0e550adc-19ba-432d-8518-94cab5bb1cfa.jpg"
                alt="Cosmetic products"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/5">
                <Icon name="Package" size={24} className="text-primary" />
              </div>
              <h3 className="font-medium">Доставка по РФ</h3>
              <p className="text-sm text-muted-foreground font-light">Бесплатная доставка от 5000₽</p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/5">
                <Icon name="BadgeCheck" size={24} className="text-primary" />
              </div>
              <h3 className="font-medium">100% оригинал</h3>
              <p className="text-sm text-muted-foreground font-light">Сертифицированная продукция</p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/5">
                <Icon name="Gift" size={24} className="text-primary" />
              </div>
              <h3 className="font-medium">Пробники в подарок</h3>
              <p className="text-sm text-muted-foreground font-light">К каждому заказу</p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/5">
                <Icon name="MessageCircle" size={24} className="text-primary" />
              </div>
              <h3 className="font-medium">Помощь косметолога</h3>
              <p className="text-sm text-muted-foreground font-light">Бесплатная консультация</p>
            </div>
          </div>
        </div>
      </section>

      <section id="new" className="py-24 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs tracking-widest text-primary uppercase">Эксклюзив</span>
            <h2 className="text-5xl font-light">Новинки коллекции</h2>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">
              Инновационные формулы для профессионального ухода
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
                  <img 
                    src="https://cdn.poehali.dev/projects/bf1b0781-b5e0-4801-b05a-dce86bab9479/files/fa897afe-9b1a-495e-a9c1-463d1e81bcf4.jpg"
                    alt="Product"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs tracking-wider">NEW</span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Christina</span>
                    <span>•</span>
                    <span>Уход за лицом</span>
                  </div>
                  <h3 className="text-xl font-light">Интенсивная сыворотка</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    С витамином C и гиалуроновой кислотой
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-light">5 890 ₽</span>
                    <Button size="sm" className="rounded-full">
                      <Icon name="ShoppingBag" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs tracking-widest text-primary uppercase">Каталог</span>
            <h2 className="text-5xl font-light">Категории товаров</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group relative h-96 overflow-hidden border-0 cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/bf1b0781-b5e0-4801-b05a-dce86bab9479/files/372e4f6e-4f10-47f3-93f9-1f586b4dc52b.jpg"
                alt="Уход за лицом"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-light mb-2">Уход за лицом</h3>
                <p className="text-sm text-white/80 font-light mb-4">Сыворотки, кремы, маски</p>
                <Button variant="secondary" size="sm" className="rounded-full">
                  Смотреть
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </Card>

            <Card className="group relative h-96 overflow-hidden border-0 cursor-pointer">
              <div className="w-full h-full bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50 flex items-center justify-center">
                <Icon name="Sparkles" size={80} className="text-primary/20" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-light mb-2">Уход за телом</h3>
                <p className="text-sm text-muted-foreground font-light mb-4">Скрабы, масла, кремы</p>
                <Button variant="outline" size="sm" className="rounded-full">
                  Смотреть
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </Card>

            <Card className="group relative h-96 overflow-hidden border-0 cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/bf1b0781-b5e0-4801-b05a-dce86bab9479/files/c0885d49-6f17-4157-89f6-f236b07933a6.jpg"
                alt="Уход за волосами"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-light mb-2">Уход за волосами</h3>
                <p className="text-sm text-white/80 font-light mb-4">Шампуни, маски, сыворотки</p>
                <Button variant="secondary" size="sm" className="rounded-full">
                  Смотреть
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 via-purple-50/30 to-pink-50/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-light leading-tight">
              Профессиональная косметика с доставкой по России
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Cosmetic Star — официальный дистрибьютор более 30 ведущих мировых брендов профессиональной косметики. 
              Мы работаем с 2010 года и предлагаем только сертифицированную продукцию с гарантией качества.
            </p>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Подробнее о компании
            </Button>
          </div>
        </div>
      </section>

      <section id="brands" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs tracking-widest text-primary uppercase">Партнеры</span>
            <h2 className="text-5xl font-light">Бренды в нашем каталоге</h2>
            <p className="text-muted-foreground font-light">Официальный дистрибьютор</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Christina', 'Holy Land', 'Anna Lotan', 'GiGi', 'Dermalogica', 'Ericson Lab'].map((brand) => (
              <Card key={brand} className="p-8 flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer border-0 bg-muted/20">
                <p className="font-light text-lg tracking-wide">{brand}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/bf1b0781-b5e0-4801-b05a-dce86bab9479/files/a4c379fc-31fb-4374-934f-1de43167afbe.jpg"
                alt="Beauty"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <span className="text-xs tracking-widest text-primary uppercase">Преимущества</span>
              <h2 className="text-5xl font-light leading-tight">
                Почему выбирают Cosmetic Star
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Award" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">15 лет опыта</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Более 15 лет успешной работы на рынке профессиональной косметики
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="ShieldCheck" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Гарантия качества</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Все товары сертифицированы и имеют необходимые документы
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Users" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Более 5000 клиентов</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Салоны красоты и косметологи по всей России доверяют нам
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Headphones" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Консультация косметолога</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Бесплатная помощь в подборе средств для вашего типа кожи
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-light">Будьте в курсе новинок</h2>
            <p className="text-white/90 font-light text-lg">
              Подпишитесь на рассылку и получайте информацию о новых поступлениях и специальных предложениях
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Ваш e-mail" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-full"
              />
              <Button variant="secondary" size="lg" className="rounded-full whitespace-nowrap px-8">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light mb-6">COSMETIC STAR</h3>
              <p className="text-sm text-background/70 mb-6 font-light leading-relaxed">
                Профессиональная косметика для салонов красоты и домашнего ухода
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="text-background hover:text-background/80 hover:bg-background/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-background/80 hover:bg-background/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-background/80 hover:bg-background/10">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-6 tracking-wide">Каталог</h4>
              <ul className="space-y-3 text-sm text-background/70 font-light">
                <li><a href="#" className="hover:text-background transition-colors">Уход за лицом</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Уход за телом</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Уход за волосами</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Декоративная косметика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6 tracking-wide">Информация</h4>
              <ul className="space-y-3 text-sm text-background/70 font-light">
                <li><a href="#" className="hover:text-background transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6 tracking-wide">Контакты</h4>
              <ul className="space-y-3 text-sm text-background/70 font-light">
                <li className="flex items-center gap-3">
                  <Icon name="Phone" size={16} />
                  <span>8 800 333-03-45</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Mail" size={16} />
                  <span>info@cosmeticstar.ru</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="MapPin" size={16} className="mt-0.5" />
                  <span>Москва, ул. Примерная, д. 1</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 pt-8 text-center text-sm text-background/50 font-light">
            <p>© 2025 Cosmetic Star. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
