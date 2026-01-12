import React from 'react';
import { Button } from './ui/button';

export const ClientsSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Mock client logos - in production, replace with real client logos
  const clients = [
    { name: 'TechCorp RDC', industry: 'IT' },
    { name: 'Mining Solutions', industry: 'Mines' },
    { name: 'TransLog Express', industry: 'Logistique' },
    { name: 'Solar Power Co', industry: 'Énergie' },
    { name: 'BuildPro', industry: 'BTP' },
    { name: 'FinanceConsult', industry: 'Finance' },
    { name: 'HR Partners', industry: 'RH' },
    { name: 'Luxury Hotels', industry: 'Hôtellerie' }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-reveal">
            Ils nous ont déjà
            <span className="text-gradient-primary"> fait confiance</span>
          </h2>
          <p className="text-lg text-muted-foreground scroll-reveal">
            Des entreprises leaders dans leurs secteurs nous font confiance pour leur présence digitale
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group scroll-reveal bg-card rounded-xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Mock logo - replace with actual logo */}
              <div className="w-full aspect-square flex items-center justify-center mb-3">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-muted-foreground/40 group-hover:text-primary transition-colors">
                    {client.name.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground text-center font-medium">
                {client.industry}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center scroll-reveal">
          <p className="text-lg text-foreground mb-6 font-medium">
            Rejoignez les entreprises qui se démarquent dans leur secteur
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToSection('tarifs')}
            className="gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Rejoindre nos clients
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
