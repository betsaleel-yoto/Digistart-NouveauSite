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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">Solutions Digitales Premium</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
              Démarquez-vous.
              <br />
              <span className="text-accent">Gagnez en crédibilité.</span>
              <br />
              Captez des clients en continu.
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in-up delay-200 max-w-2xl mx-auto lg:mx-0">
              Dans un marché congolais ultra concurrentiel et en forte croissance, les entreprises qui gagnent sont celles qui inspirent confiance dès le premier contact.
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-8 animate-fade-in-up delay-300">
              {[
                'Sites web ultra premium',
                'Applications web sur mesure',
                'Applications mobiles professionnelles'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-primary-foreground/90">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-base sm:text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <Button 
                size="lg"
                onClick={() => scrollToSection('tarifs')}
                className="gradient-turquoise text-lg px-8 py-6 hover:shadow-glow transition-all duration-300 hover:scale-105 group"
              >
                Commander votre solution digitale
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="text-lg px-8 py-6 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-accent transition-all duration-300"
              >
                Découvrir nos services
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in delay-500">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src="https://images.unsplash.com/photo-1698669993523-bcf101a925ef"
                alt="Digital transformation"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass-strong rounded-xl p-6 shadow-large animate-float">
              <div className="text-3xl font-heading font-bold text-gradient-primary mb-1">10 000€</div>
              <div className="text-sm text-muted-foreground font-medium">Qualité premium garantie</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
