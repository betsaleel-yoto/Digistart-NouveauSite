import React from 'react';
import { Check, Mail, Server, FileText } from 'lucide-react';
import { Button } from './ui/button';

export const BenefitsSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const benefits = [
    {
      icon: Server,
      title: 'Hébergement professionnel inclus',
      description: '1 an d’hébergement premium avec performance optimale'
    },
    {
      icon: Mail,
      title: 'Jusqu’à 5 adresses email professionnelles',
      description: 'nom@votreentreprise.cd pour renforcer votre crédibilité'
    },
    {
      icon: FileText,
      title: 'Formulaires intelligents',
      description: 'Capture automatique des leads et demandes clients'
    },
    {
      icon: Check,
      title: 'Architecture premium haut de gamme',
      description: 'Conçue pour la conversion, la crédibilité et la différenciation'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-reveal">
            Ce que vous obtenez
            <span className="text-gradient-primary"> concrètement</span>
          </h2>
          <p className="text-lg text-muted-foreground scroll-reveal">
            Chaque solution est livrée clé en main, prête à performer
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group scroll-reveal bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-lg gradient-turquoise flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center scroll-reveal">
          <p className="text-lg text-foreground mb-6 font-medium">
            👉 Des solutions pensées spécialement pour les secteurs les plus concurrentiels et les plus porteurs en RDC.
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToSection('services')}
            className="gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-white"
          >
            Commander une solution clé en main
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
