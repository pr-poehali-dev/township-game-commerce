import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const products = [
  {
    id: 1,
    category: 'currency',
    name: 'Township Кэш',
    description: 'Премиум валюта игры',
    icon: '💎',
    offers: [
      { amount: '100', price: '99₽', popular: false },
      { amount: '500', price: '449₽', popular: true },
      { amount: '1000', price: '799₽', popular: false },
    ]
  },
  {
    id: 2,
    category: 'coins',
    name: 'Монеты',
    description: 'Основная игровая валюта',
    icon: '🪙',
    offers: [
      { amount: '50,000', price: '199₽', popular: false },
      { amount: '150,000', price: '499₽', popular: true },
      { amount: '500,000', price: '1,499₽', popular: false },
    ]
  },
  {
    id: 3,
    category: 'bucks',
    name: 'Баксы',
    description: 'Зелёные долларики для ускорения',
    icon: '💵',
    offers: [
      { amount: '200', price: '149₽', popular: false },
      { amount: '600', price: '399₽', popular: true },
      { amount: '1,500', price: '899₽', popular: false },
    ]
  },
  {
    id: 4,
    category: 'resources',
    name: 'Ресурсы',
    description: 'Материалы для строительства',
    icon: '📦',
    offers: [
      { amount: 'Набор S', price: '249₽', popular: false },
      { amount: 'Набор M', price: '549₽', popular: true },
      { amount: 'Набор L', price: '999₽', popular: false },
    ]
  },
];

const reviews = [
  { id: 1, name: 'Алексей', avatar: 'A', rating: 5, text: 'Быстрая доставка, всё пришло за 5 минут! Рекомендую!', date: '2 дня назад' },
  { id: 2, name: 'Мария', avatar: 'M', rating: 5, text: 'Отличные цены, купила кэш и монеты. Всё честно!', date: '5 дней назад' },
  { id: 3, name: 'Дмитрий', avatar: 'Д', rating: 5, text: 'Поддержка ответила сразу, помогли с заказом. Супер!', date: '1 неделю назад' },
];

const paymentMethods = [
  { name: 'Банковская карта', icon: 'CreditCard', desc: 'Visa, MasterCard, МИР' },
  { name: 'СБП', icon: 'Smartphone', desc: 'Быстрый перевод' },
  { name: 'Электронные кошельки', icon: 'Wallet', desc: 'ЮMoney, QIWI' },
  { name: 'Криптовалюта', icon: 'Bitcoin', desc: 'BTC, ETH, USDT' },
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-purple-50 to-green-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl animate-bounce-subtle">🏘️</div>
              <div>
                <h1 className="text-2xl font-bold text-purple-600">Township Shop</h1>
                <p className="text-sm text-gray-600">Магазин валюты и ресурсов</p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-lg"
              onClick={() => setIsChatOpen(true)}
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Поддержка
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-orange-500 to-green-500 bg-clip-text text-transparent">
            Пополни Township быстро и безопасно
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Выбирай нужную валюту, оплачивай удобным способом и получай товары моментально!
          </p>
        </section>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-5 bg-white shadow-md h-auto p-2">
            <TabsTrigger value="all" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white py-3">
              <Icon name="Grid3x3" className="mr-2" size={18} />
              Всё
            </TabsTrigger>
            <TabsTrigger value="currency" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white py-3">
              💎 Кэш
            </TabsTrigger>
            <TabsTrigger value="coins" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white py-3">
              🪙 Монеты
            </TabsTrigger>
            <TabsTrigger value="bucks" className="data-[state=active]:bg-green-500 data-[state=active]:text-white py-3">
              💵 Баксы
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white py-3">
              📦 Ресурсы
            </TabsTrigger>
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, idx) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-200 animate-scale-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-6 text-center">
                    <div className="text-6xl mb-3">{product.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                    <p className="text-purple-100 text-sm mt-1">{product.description}</p>
                  </div>
                  <div className="p-6 space-y-3">
                    {product.offers.map((offer, offerIdx) => (
                      <div 
                        key={offerIdx} 
                        className={`flex items-center justify-between p-3 rounded-lg border-2 transition-all hover:scale-105 cursor-pointer ${
                          offer.popular 
                            ? 'border-orange-400 bg-orange-50' 
                            : 'border-gray-200 hover:border-purple-300'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-lg">{offer.amount}</div>
                          {offer.popular && (
                            <Badge className="bg-orange-500 text-white mt-1">
                              <Icon name="Star" size={12} className="mr-1" />
                              Популярное
                            </Badge>
                          )}
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                        >
                          {offer.price}
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mb-16 bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="CreditCard" size={32} className="text-purple-600" />
            <h3 className="text-3xl font-bold">Методы оплаты</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {paymentMethods.map((method, idx) => (
              <Card key={idx} className="p-5 hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-purple-300">
                <Icon name={method.icon} size={32} className="text-purple-600 mb-3" />
                <h4 className="font-bold text-lg mb-1">{method.name}</h4>
                <p className="text-sm text-gray-600">{method.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Icon name="Truck" size={32} className="text-green-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl mb-2 text-green-700">Как получить товар?</h4>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">1.</span>
                    <span>Выбери нужный товар и оплати любым удобным способом</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">2.</span>
                    <span>После оплаты напиши свой ID игрока в Township в чат поддержки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">3.</span>
                    <span>Получи товары прямо в игру в течение 5-15 минут!</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Star" size={32} className="text-orange-500" />
            <h3 className="text-3xl font-bold">Отзывы игроков</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={review.id} className="p-6 hover:shadow-xl transition-shadow border-2 border-gray-200 animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="border-2 border-purple-300">
                    <AvatarFallback className="bg-purple-100 text-purple-600 font-bold">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-bold">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{review.text}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-3xl">🏘️</div>
            <span className="text-xl font-bold">Township Shop</span>
          </div>
          <p className="text-purple-200 mb-4">Быстро • Безопасно • Выгодно</p>
          <div className="flex justify-center gap-6 text-sm text-purple-200">
            <a href="#" className="hover:text-white transition-colors">Правила</a>
            <a href="#" className="hover:text-white transition-colors">Гарантии</a>
            <a href="#" className="hover:text-white transition-colors">Контакты</a>
          </div>
        </div>
      </footer>

      <Sheet open={isChatOpen} onOpenChange={setIsChatOpen}>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Icon name="Headphones" size={24} className="text-purple-600" />
              Чат с поддержкой
            </SheetTitle>
            <SheetDescription>
              Ответим на любые вопросы по заказам и доставке
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            <Card className="p-4 bg-purple-50 border-purple-200">
              <div className="flex items-start gap-3">
                <Avatar className="bg-purple-500">
                  <AvatarFallback className="text-white">П</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-sm mb-1">Поддержка Township Shop</div>
                  <div className="text-sm text-gray-700 bg-white p-3 rounded-lg">
                    Привет! 👋 Чем могу помочь? Напиши свой вопрос или ID игрока после оплаты.
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="space-y-3">
              <div className="text-sm font-semibold text-gray-700">Часто спрашивают:</div>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Icon name="Clock" size={16} className="mr-2" />
                Как долго ждать доставку?
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Icon name="Shield" size={16} className="mr-2" />
                Это безопасно?
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Icon name="HelpCircle" size={16} className="mr-2" />
                Как найти свой ID?
              </Button>
            </div>

            <div className="pt-4 border-t">
              <textarea 
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:outline-none resize-none"
                placeholder="Напишите ваш вопрос..."
                rows={3}
              />
              <Button className="w-full mt-3 bg-gradient-to-r from-purple-500 to-purple-600">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
