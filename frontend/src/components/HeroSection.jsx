import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 animate-fade-in">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#3BDDDC]" />
              <span className="text-xs sm:text-sm font-medium text-white">Solutions Digitales Premium</span>
            </div>

            {/* Main Heading - Responsive */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up leading-tight">
              Démarquez-vous.
              <br />
              <span className="text-[hsl(180_70%_55%)]">Gagnez en crédibilité.</span>
              <br />
              <span className="hidden sm:inline">Captez des clients en continu.</span>
              <span className="sm:hidden">Captez des clients.</span>
            </h1>

            {/* Description - Responsive */}
            <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 leading-relaxed animate-fade-in-up delay-200 max-w-2xl mx-auto lg:mx-0">
              Dans un marché congolais ultra concurrentiel, les entreprises qui gagnent sont celles qui inspirent confiance dès le premier contact.
              Nous concevons des solutions digitales sur mesure sites web ultra premium, applications web et applications mobiles pensées pour :
            </p>

            {/* Features List - Responsive */}
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 animate-fade-in-up delay-300">
              {[
                'renforcer votre image professionnelle',
                'asseoir votre crédibilité face à vos concurrents',
                'transformer votre présence digitale en machine d’acquisition automatique de clients'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 text-white justify-center lg:justify-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[hsl(180_70%_55%)] flex-shrink-0" />
                  <span className="text-sm sm:text-base lg:text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Responsive */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up delay-400">
              <Button 
                size="lg"
                onClick={() => scrollToSection('tarifs')}
                className="gradient-turquoise text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:shadow-glow transition-all duration-300 hover:scale-105 group lightning-btn relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center text-white">
                  Commander votre solution digitale
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 border-primary-foreground/30 text-white hover:bg-primary-foreground/10 transition-all duration-300 ease-in-out
         hover:border-[hsl(180_70%_55%)]
         hover:bg-[#ffffff1a]
         hover:text-[#1d2530]"
              >
                Découvrir nos services
              </Button>
            </div>
          </div>

          {/* Right Image - Responsive */}
          <div className="relative animate-fade-in delay-500 mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src="https://images.unsplash.com/photo-1698669993523-bcf101a925ef"
                alt="Digital transformation"
                className="w-full h-64 sm:h-80 lg:h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
            </div>
            
            {/* Floating badge - Responsive */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 glass-strong rounded-xl p-4 sm:p-6 shadow-large animate-float">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-gradient-primary mb-1">10 000€</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Qualité premium garantie</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
