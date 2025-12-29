import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🥕</span>
            <h1 className="text-2xl font-bold text-primary">Три морковки</h1>
          </div>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            <Icon name="Phone" size={20} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-accent/10 via-background to-secondary/10 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Всё для семьи — в одном магазине
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Свежие продукты, любимые детские лакомства и тёплая атмосфера для всей семьи
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                  Приходите всей семьёй
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Наши адреса
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/6700c310-abde-4d91-9320-7d98747260e7/files/0299b2b5-eb62-42cc-a675-f06284b5a2cc.jpg"
                alt="Семейные покупки"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Почему семьи выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы заботимся о здоровье и комфорте каждого члена вашей семьи
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Baby" size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Продукты для детей</h3>
                <p className="text-muted-foreground">
                  Детское питание, полезные снеки и лакомства. Всё проверено педиатрами и безопасно для малышей
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Cookie" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Свежая выпечка</h3>
                <p className="text-muted-foreground">
                  Ароматный хлеб, круассаны и печенье каждое утро. Выпекаем прямо в магазине из натуральных ингредиентов
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="MapPin" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Удобное расположение</h3>
                <p className="text-muted-foreground">
                  Рядом с детскими садами и школами. Парковка и детская площадка перед магазином
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Категории товаров
            </h2>
            <p className="text-xl text-muted-foreground">
              Всё необходимое для вашей кухни в одном месте
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-7xl">🥕</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">Овощи</h3>
                  <p className="text-muted-foreground">Свежие сезонные овощи с ферм</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-7xl">🍎</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">Фрукты</h3>
                  <p className="text-muted-foreground">Спелые и ароматные фрукты</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-7xl">🧀</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">Молочные продукты</h3>
                  <p className="text-muted-foreground">Натуральное молоко и сыры</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-red-500/20 to-red-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-7xl">🥩</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">Мясо</h3>
                  <p className="text-muted-foreground">Свежее фермерское мясо</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://cdn.poehali.dev/projects/6700c310-abde-4d91-9320-7d98747260e7/files/c486fc96-cbef-4f57-adb0-839075663691.jpg"
                alt="Свежая выпечка"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full font-semibold mb-4">
                Выпекаем ежедневно
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ароматная выпечка каждое утро
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Свежий хлеб, круассаны и пирожки. Дети обожают наши печенья и булочки с корицей
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Clock" size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Свежая выпечка с 6:00</h4>
                    <p className="text-muted-foreground">Каждое утро выпекаем в нашей пекарне</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Wheat" size={18} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Без искусственных добавок</h4>
                    <p className="text-muted-foreground">Только натуральные ингредиенты</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Heart" size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Детские любимчики</h4>
                    <p className="text-muted-foreground">Сладкие булочки и печенья для малышей</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                <Icon name="Cookie" size={20} className="mr-2" />
                Посмотреть ассортимент
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full font-semibold mb-4">
              Нам доверяют
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Контроль качества на каждом этапе
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы отвечаем за качество каждого продукта
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="ShieldCheck" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Проверка сертификатов</h3>
                    <p className="text-muted-foreground">
                      Все поставщики проходят строгий отбор. Работаем только с сертифицированными производителями
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Microscope" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Лабораторные исследования</h3>
                    <p className="text-muted-foreground">
                      Каждая партия проходит проверку на безопасность. Содержание нитратов и пестицидов под контролем
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Truck" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Локальные поставщики</h3>
                    <p className="text-muted-foreground">
                      Работаем с фермерами из вашего региона. Минимальный путь от поля до прилавка — максимальная свежесть
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="ThermometerSnowflake" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Холодная цепь</h3>
                    <p className="text-muted-foreground">
                      Соблюдаем температурный режим на всех этапах. Молочные продукты и мясо хранятся правильно
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <img
              src="https://cdn.poehali.dev/projects/6700c310-abde-4d91-9320-7d98747260e7/files/c38144e6-0e64-4609-a66c-d817d51194a8.jpg"
              alt="Детские продукты"
              className="rounded-2xl shadow-2xl w-full max-w-3xl mx-auto h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Приходите всей семьёй!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Детская площадка, удобная парковка и тёплая атмосфера ждут вас. Работаем ежедневно с 8:00 до 22:00
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="MapPin" size={20} className="mr-2" />
              Адреса магазинов
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🥕</span>
                <h3 className="text-xl font-bold">Три морковки</h3>
              </div>
              <p className="text-white/70">
                Свежие продукты каждый день для вашей семьи
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Каталог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@trimorkovki.ru</li>
                <li>Ежедневно 8:00 — 22:00</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>© 2024 Три морковки. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}