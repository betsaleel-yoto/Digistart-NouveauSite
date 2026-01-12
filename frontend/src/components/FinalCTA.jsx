import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Rocket } from 'lucide-react';

export const FinalCTA = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-[#0B3B79] text-[white] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-turquoise mb-8 animate-pulse-soft">
            <Rocket className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 scroll-reveal">
            Prêt à prendre une longueur d&apos;avance
            <br />
            <span className="text-[#3BDDDC]">sur votre marché ?</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-10 leading-relaxed scroll-reveal max-w-3xl mx-auto">
            Ne laissez pas vos concurrents capter la confiance, les contrats et la visibilité avant vous.
            <br />
            <span className="font-semibold">Agissez maintenant et transformez votre présence digitale en avantage stratégique.</span>
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-reveal">
            <Button 
              size="lg"
              onClick={() => scrollToSection('tarifs')}
              className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-7 shadow-large hover:shadow-glow transition-all duration-300 hover:scale-105 group font-semibold lightning-btn relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center text-[#0A3776]">
                Commander votre solution digitale maintenant
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-12 border-t border-primary-foreground/20">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-heading font-bold text-[#3BDDDC] mb-2">100+</div>
                <div className="text-sm text-primary-foreground/80">Projets réalisés</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-[#3BDDDC] mb-2">9</div>
                <div className="text-sm text-primary-foreground/80">Secteurs d'expertise</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-[#3BDDDC] mb-2">98%</div>
                <div className="text-sm text-primary-foreground/80">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
