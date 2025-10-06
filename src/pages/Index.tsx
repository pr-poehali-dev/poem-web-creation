import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'poetry' | 'gallery'>('poetry');

  const poems = [
    {
      id: 1,
      title: 'Признание',
      author: '',
      text: `Где звёзды в закате рассеяли небо,
Сумрак лесов и одно лишь мгновение,
Тайны в карманах и звонкий запах —
То, что с тобою нас и связало.

Ответ на вопрос, что еле услышан,
О мыслях, сомненьях и чувствах всевышних,
От лица далёкого друга и товарища:
Поверь, для меня ты целое капище.

Во взгляде твоём я вижу надежду,
В улыбке и смехе видна принадлежность
К этой земле и к этим домам,
И даже к тем самым таинственным снам.

Не гложет меня одиночество больше,
И красные волосы стали дороже,
Тот запах пространства встреч наших частых,
И даже если разнообразие частно —

Минута и час, проведённые с тобой,
От меня как признанье, связанное с луной.`,
      year: '2025'
    }
  ];

  const galleryImages = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/files/6f8a3858-c4aa-4b23-9ca0-ce8ad4f1517a.jpeg',
      title: '',
      year: ''
    },
    {
      id: 2,
      url: 'https://cdn.poehali.dev/files/c1e428bd-b8ec-4bb3-b66b-d3a281a48a81.jpeg',
      title: '',
      year: ''
    },
    {
      id: 3,
      url: 'https://cdn.poehali.dev/files/c3a8122e-7fcd-4f7e-87f4-fb3f972130b5.jpeg',
      title: '',
      year: ''
    },
    {
      id: 4,
      url: 'https://cdn.poehali.dev/files/3a7b3fca-946e-4a80-af08-7b4553f63f42.jpeg',
      title: '',
      year: ''
    },
    {
      id: 5,
      url: 'https://cdn.poehali.dev/files/60b03809-0c1c-4dce-a185-2416e1513cc8.jpeg',
      title: '',
      year: ''
    }
  ];

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.innerHTML = '💖';
      heart.className = 'floating-heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
      heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
      heart.style.animationDelay = Math.random() * 2 + 's';
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 7000);
    };

    const interval = setInterval(createHeart, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0F5] via-[#FFE4E9] to-[#FFB6C8] relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="text-primary mr-3 text-5xl">🌿</span>
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
          <div className="flex justify-center">
            {poems.map((poem) => (
              <Card 
                key={poem.id} 
                className="border-4 border-primary/30 bg-[#FFF5F7] shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6 pb-4 border-b-2 border-primary/20">
                    <div className="flex justify-center mb-3">
                      <div className="w-16 h-1 bg-primary/40"></div>
                      <span className="mx-2 text-primary text-lg">🌿</span>
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
                    <span className="mx-2 text-primary text-lg">🍃</span>
                    <div className="w-16 h-1 bg-primary/40"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <Card 
                key={image.id} 
                className="border-4 border-primary/30 bg-[#FFF5F7] overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img 
                  src={image.url} 
                  alt={image.title || `Фото ${image.id}`}
                  className="w-full h-80 object-cover"
                />
                {(image.title || image.year) && (
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-px bg-primary/40"></div>
                      <span className="mx-2 text-primary">🌿</span>
                      <div className="w-12 h-px bg-primary/40"></div>
                    </div>
                    {image.title && <h4 className="font-bold text-primary font-['Playfair_Display']">{image.title}</h4>}
                    {image.year && <p className="text-sm text-muted-foreground">({image.year})</p>}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}

        <footer className="mt-20 text-center pb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="w-32 h-px bg-primary/30"></div>
            <span className="mx-4 text-primary text-3xl">🍃</span>
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