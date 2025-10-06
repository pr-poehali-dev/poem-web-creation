import { useState } from 'react';
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

  const galleryImages: { id: number; url: string; title: string; year: string; }[] = [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0F5] via-[#FFE4E9] to-[#FFB6C8]">
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
          <div className="flex justify-center items-center min-h-[400px]">
            <p className="text-2xl text-muted-foreground italic font-['Playfair_Display']">Галерея пуста</p>
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