import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'poetry' | 'gallery'>('poetry');

  const poems = [
    {
      id: 1,
      title: 'Осенний вечер',
      author: 'Автор неизвестен',
      text: `Листья падают, кружась,
В золотистом свете дня.
Осень шепчет, не таясь,
О печали бытия.

Ветер песни напевает,
Дождь стучится в окна вновь.
Сердце тихо замирает,
Вспоминая про любовь.`,
      year: '1875'
    },
    {
      id: 2,
      title: 'Зимняя ночь',
      author: 'Автор неизвестен',
      text: `Снег ложится на поля,
Тишина кругом царит.
Спит усталая земля,
Месяц в небе золотит.

Звёзды светят, как огни,
В этой долгой тьме ночной.
Сладкий сон приходит в дни,
Укрывая нас собой.`,
      year: '1892'
    },
    {
      id: 3,
      title: 'Весенний рассвет',
      author: 'Автор неизвестен',
      text: `Птицы вновь запели песни,
Солнце греет с высоты.
Мир становится чудесней,
Распускаются цветы.

Ручейки бегут, журчат,
Пробуждая всё вокруг.
Души радостно звучат
В этот светлый майский круг.`,
      year: '1868'
    }
  ];

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      title: 'Старинная библиотека',
      year: '1880'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
      title: 'Винтажная книга',
      year: '1892'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800',
      title: 'Чернильница и перо',
      year: '1875'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800',
      title: 'Антикварный стол',
      year: '1868'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFAF0] via-[#F5DEB3] to-[#D2B48C]">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Feather" className="text-primary mr-3" size={48} />
            <h1 className="text-6xl font-bold text-primary">Поэтический Архив</h1>
          </div>
          <p className="text-xl text-muted-foreground italic">Собрание стихов и воспоминаний</p>
        </header>

        <nav className="flex justify-center gap-6 mb-12">
          <Button
            variant={activeSection === 'poetry' ? 'default' : 'outline'}
            onClick={() => setActiveSection('poetry')}
            className="text-lg px-8 py-6 font-['Playfair_Display'] border-2 border-primary"
          >
            Стихи
          </Button>
          <Button
            variant={activeSection === 'gallery' ? 'default' : 'outline'}
            onClick={() => setActiveSection('gallery')}
            className="text-lg px-8 py-6 font-['Playfair_Display'] border-2 border-primary"
          >
            Галерея
          </Button>
        </nav>

        {activeSection === 'poetry' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poems.map((poem) => (
              <Card 
                key={poem.id} 
                className="border-4 border-primary/30 bg-[#FFFAF0] shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6 pb-4 border-b-2 border-primary/20">
                    <div className="flex justify-center mb-3">
                      <div className="w-16 h-1 bg-primary/40"></div>
                      <Icon name="Sparkles" className="mx-2 text-primary" size={20} />
                      <div className="w-16 h-1 bg-primary/40"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2 font-['Playfair_Display']">
                      {poem.title}
                    </h3>
                    <p className="text-sm text-muted-foreground italic">{poem.author}</p>
                    <p className="text-xs text-muted-foreground mt-1">({poem.year})</p>
                  </div>
                  
                  <div className="whitespace-pre-line text-foreground/90 leading-relaxed mb-6">
                    {poem.text}
                  </div>

                  <div className="flex justify-center">
                    <div className="w-16 h-1 bg-primary/40"></div>
                    <Icon name="BookOpen" className="mx-2 text-primary" size={20} />
                    <div className="w-16 h-1 bg-primary/40"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <Card 
                key={image.id} 
                className="border-4 border-primary/30 bg-[#FFFAF0] overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 object-cover sepia"
                />
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-px bg-primary/40"></div>
                    <Icon name="Camera" className="mx-2 text-primary" size={16} />
                    <div className="w-12 h-px bg-primary/40"></div>
                  </div>
                  <h4 className="font-bold text-primary font-['Playfair_Display']">{image.title}</h4>
                  <p className="text-sm text-muted-foreground">({image.year})</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <footer className="mt-20 text-center pb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="w-32 h-px bg-primary/30"></div>
            <Icon name="Scroll" className="mx-4 text-primary" size={32} />
            <div className="w-32 h-px bg-primary/30"></div>
          </div>
          <p className="text-muted-foreground italic font-['Playfair_Display']">
            Сохраняя наследие прошлого для будущих поколений
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
