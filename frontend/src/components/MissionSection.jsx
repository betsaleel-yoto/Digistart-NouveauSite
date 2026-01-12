import React from 'react';
import { Target, Shield, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

export const MissionSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const missions = [
    {
      icon: Shield,
      title: 'Renforcer votre autorité',
      description: 'Inspirez confiance avec une présence digitale professionnelle'
    },
    {
      icon: Target,
      title: 'Rassurer partenaires et clients',
      description: 'Démontrez votre sérieux dès le premier contact digital'
    },
    {
      icon: TrendingUp,
      title: 'Structurer votre acquisition',
      description: 'Transformez votre présence en machine d’acquisition automatique'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="scroll-reveal">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Notre mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Face à cette réalité, notre mission est claire :
            </p>
            <div className="bg-card border-l-4 border-[#0B3B79] rounded-r-lg p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.15)]
 mb-8">
              <p className="text-lg text-foreground font-medium leading-relaxed">
                Permettre aux entreprises opérant dans les secteurs les plus concurrentiels de RDC de se démarquer nettement, grâce à des outils digitaux premium.
              </p>
            </div>
            <div className="space-y-6 mb-8">
              {missions.map((mission, index) => {
                const Icon = mission.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg gradient-turquoise flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                        {mission.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Construire mon actif digital
            </Button>
          </div>

          {/* Right Content */}
          <div className="scroll-reveal relative">
            <div className="glass-strong rounded-2xl p-8 lg:p-12 shadow-large">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary mb-4">
                  <Target className="w-10 h-10 text-[white]" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Notre approche
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E7EBF1] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-[hsl(215_85%_25%)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Pas de solutions génériques</h4>
                    <p className="text-sm text-muted-foreground">Chaque projet est conçu sur mesure pour votre secteur</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E7EBF1] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-[hsl(185_75%_45%)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Actifs digitaux stratégiques</h4>
                    <p className="text-sm text-muted-foreground">Nous construisons des outils qui génèrent des résultats concrets</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E7EBF1] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-[hsl(185_75%_45%)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Performance mesurable</h4>
                    <p className="text-sm text-muted-foreground">Chaque solution est optimisée pour la conversion</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-lg font-semibold text-gradient-primary">
                  Nous ne faisons pas juste &quot;des simples sites web&quot;.
                </p>
                <p className="text-muted-foreground mt-2">
                  Nous construisons des actifs digitaux stratégiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
