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
                Свежие продукты каждый день рядом с домом
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ежедневные поставки фермерских овощей, фруктов и молочных продуктов прямо к вашему столу
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                  Зайдите сегодня
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Наши адреса
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/6700c310-abde-4d91-9320-7d98747260e7/files/2ac7b523-f31a-4e20-b36e-d2f20017ecec.jpg"
                alt="Свежие овощи и фрукты"
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
              Почему нас выбирают
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы создаём доверие через качество и честность
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Leaf" size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Свежие овощи и фрукты</h3>
                <p className="text-muted-foreground">
                  Ежедневные поставки с ферм. Продукты попадают на полки в день сбора урожая
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="ShieldCheck" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Проверенные поставщики</h3>
                <p className="text-muted-foreground">
                  Работаем только с сертифицированными поставщиками. Каждый продукт проходит контроль качества
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Tag" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Честные цены</h3>
                <p className="text-muted-foreground">
                  Без наценок и скрытых платежей. Справедливые цены на качественные продукты для вашей семьи
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
                src="https://cdn.poehali.dev/projects/6700c310-abde-4d91-9320-7d98747260e7/files/6f82a4cb-f275-4c47-b447-ffe627dd5050.jpg"
                alt="Доставка продуктов"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full font-semibold mb-4">
                Бесплатная доставка
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Привезём продукты прямо домой
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оформите заказ онлайн или по телефону — доставим свежие продукты в удобное для вас время
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Clock" size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Доставка за 2 часа</h4>
                    <p className="text-muted-foreground">Привезём ваш заказ в течение 2 часов после оформления</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="ShoppingBag" size={18} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Минимальная сумма заказа</h4>
                    <p className="text-muted-foreground">Доставка бесплатно от 1500 рублей</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Smile" size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Гарантия свежести</h4>
                    <p className="text-muted-foreground">Не подошёл продукт — вернём деньги или заменим</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Заказать доставку
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Зайдите к нам сегодня!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Мы работаем каждый день с 8:00 до 22:00. Приходите за свежими продуктами и убедитесь в нашем качестве
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
