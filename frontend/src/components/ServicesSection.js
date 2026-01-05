import React from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

export const ServicesSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    {
      id: 'it',
      emoji: '🟦',
      title: 'IT, Digital & Services technologiques',
      image: 'https://images.unsplash.com/photo-1576272531110-2a342fe22342',
      services: [
        'Sites web corporate pour ESN & agences',
        'Portfolios techniques & pages de cas clients',
        'Plateformes de prise de rendez-vous et devis',
        'Applications web SaaS internes',
        'Espaces clients sécurisés',
        'Landing pages de génération de leads B2B'
      ]
    },
    {
      id: 'mines',
      emoji: '⛏️',
      title: 'Mines & Industrie',
      subtitle: '(secteur à forte exigence de crédibilité)',
      image: 'https://images.unsplash.com/photo-1603516270950-26e4f5004ffd',
      services: [
        'Sites web corporate miniers (image institutionnelle forte)',
        'Présentation de capacités techniques & certifications',
        'Portails de soumission de contrats et appels d\'offres',
        'Plateformes RH pour recrutement terrain',
        'Applications web de gestion de sous-traitance',
        'Tableaux de bord internes (reporting, opérations)'
      ]
    },
    {
      id: 'logistique',
      emoji: '🚚',
      title: 'Transport & Logistique',
      image: 'https://images.unsplash.com/photo-1753579167765-d88ba3719f96',
      services: [
        'Sites web professionnels pour transporteurs',
        'Présentation de flotte & capacités logistiques',
        'Formulaires de demande de devis automatisés',
        'Applications web de gestion de clients',
        'Portails de suivi des demandes',
        'Pages institutionnelles pour partenariats B2B'
      ]
    },
    {
      id: 'energie',
      emoji: '☀️',
      title: 'Énergies & Solaire',
      image: 'https://images.unsplash.com/photo-1668097613572-40b7c11c8727',
      services: [
        'Sites web premium pour installateurs & prestataires solaires',
        'Pages de présentation de projets réalisés',
        'Simulateurs de demandes de devis solaires',
        'Portails clients (maintenance, SAV, tickets)',
        'Applications web de gestion de projets énergétiques'
      ]
    },
    {
      id: 'btp',
      emoji: '🏗️',
      title: 'Génie civil & BTP',
      image: 'https://images.unsplash.com/photo-1650630718105-497674381f3c',
      services: [
        'Sites web corporate BTP',
        'Présentation de chantiers & références',
        'Portails de soumission de projets',
        'Espaces partenaires & sous-traitants',
        'Applications web de suivi de projets',
        'Pages institutionnelles pour marchés publics et privés'
      ]
    },
    {
      id: 'utilites',
      emoji: '⚡',
      title: 'Énergies & Utilités',
      image: 'https://images.pexels.com/photos/4320449/pexels-photo-4320449.jpeg',
      services: [
        'Sites institutionnels à forte crédibilité',
        'Portails de relation clients & partenaires',
        'Formulaires de demandes techniques',
        'Applications web de gestion de services',
        'Plateformes internes d\'information et reporting'
      ]
    },
    {
      id: 'finance',
      emoji: '💼',
      title: 'Finance, Assurance & Conseil',
      image: 'https://images.unsplash.com/photo-1758518726324-62bef7c815b0',
      services: [
        'Sites web corporate à image institutionnelle forte',
        'Pages de présentation de services financiers',
        'Formulaires sécurisés de prise de contact',
        'Portails clients confidentiels',
        'Applications web de gestion de dossiers',
        'Landing pages pour offres premium'
      ]
    },
    {
      id: 'rh',
      emoji: '👥',
      title: 'RH & Recrutement',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      services: [
        'Sites web RH & cabinets de recrutement',
        'Portails de soumission de candidatures',
        'Bases de données CV sécurisées',
        'Applications web de gestion des talents',
        'Espaces entreprises / candidats',
        'Automatisation des processus RH'
      ]
    },
    {
      id: 'hotellerie',
      emoji: '🏨',
      title: 'Hôtellerie & Tourisme',
      subtitle: '(services professionnels)',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      services: [
        'Sites web premium pour hôtels & lodges',
        'Présentation d\'offres et services',
        'Formulaires de réservation / demande',
        'Applications web de gestion client',
        'Pages multilingues pour clientèle internationale'
      ]
    },
    {
      id: 'facility',
      emoji: '🔧',
      title: 'Services professionnels & Facility Management',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      services: [
        'Sites web corporate pour entreprises de services',
        'Présentation claire des prestations',
        'Formulaires de demandes de devis',
        'Portails clients et contrats',
        'Applications web de gestion d\'interventions'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-reveal">
            Nos services
            <span className="text-gradient-primary"> – Solutions digitales par secteur</span>
          </h2>
          <p className="text-lg text-muted-foreground scroll-reveal">
            Nous ne proposons pas des solutions génériques. Chaque offre est pensée pour les réalités, contraintes et objectifs business de votre secteur.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="scroll-reveal glass-strong rounded-2xl overflow-hidden shadow-medium hover:shadow-large transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-64 md:h-auto overflow-hidden order-2 md:order-1">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-transparent" />
                  
                  {/* Emoji Badge */}
                  <div className="absolute top-4 left-4 w-16 h-16 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-3xl shadow-lg">
                    {service.emoji}
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 lg:p-8 order-1 md:order-2">
                  {/* Title */}
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  
                  {/* Subtitle if exists */}
                  {service.subtitle && (
                    <p className="text-sm text-muted-foreground mb-4 italic">
                      {service.subtitle}
                    </p>
                  )}

                  {/* Services Specific Label */}
                  <p className="text-sm font-semibold text-primary mb-3">
                    Services spécifiques
                  </p>

                  {/* Services List */}
                  <ul className="space-y-2 mb-6">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    onClick={() => scrollToSection('tarifs')}
                    className="w-full gradient-turquoise hover:shadow-glow transition-all duration-300 lightning-btn"
                  >
                    <span className="relative z-10">
                      👉 Commander une solution digitale {service.title.split(' ')[0]}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="glass-strong rounded-xl p-8 text-center hover:scale-105 transition-all duration-300 scroll-reveal">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
              Applications mobiles professionnelles
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Solutions mobiles natives pour iOS et Android
            </p>
            <Button 
              onClick={() => scrollToSection('tarifs')}
              className="w-full gradient-primary hover:shadow-glow transition-all duration-300"
            >
              👉 Commander une application mobile
            </Button>
          </div>

          <div className="glass-strong rounded-xl p-8 text-center hover:scale-105 transition-all duration-300 scroll-reveal">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
              Systèmes de génération de leads
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Outils d'acquisition et conversion optimisés
            </p>
            <Button 
              onClick={() => scrollToSection('tarifs')}
              className="w-full gradient-primary hover:shadow-glow transition-all duration-300"
            >
              👉 Commander un système d'acquisition
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="glass-strong rounded-2xl p-8 text-center max-w-3xl mx-auto mt-12 scroll-reveal">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Vous ne voyez pas encore votre secteur ?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Nos solutions sont entièrement personnalisables.
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToSection('tarifs')}
            className="gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 lightning-btn"
          >
            <span className="relative z-10">
              👉 Commander une solution digitale sur mesure
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
