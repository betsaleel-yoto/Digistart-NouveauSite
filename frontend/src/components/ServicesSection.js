import React, { useState } from 'react';
import { Button } from './ui/button';
import { 
  Code, 
  Pickaxe, 
  Truck, 
  Sun, 
  HardHat, 
  Zap, 
  Briefcase, 
  Users, 
  Hotel,
  Wrench,
  Smartphone,
  Target,
  ChevronRight
} from 'lucide-react';

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    {
      id: 'it',
      icon: Code,
      title: 'IT, Digital & Services technologiques',
      image: 'https://images.unsplash.com/photo-1576272531110-2a342fe22342',
      color: 'from-blue-500 to-cyan-500',
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
      icon: Pickaxe,
      title: 'Mines & Industrie',
      image: 'https://images.unsplash.com/photo-1603516270950-26e4f5004ffd',
      color: 'from-orange-500 to-red-500',
      services: [
        'Sites web corporate miniers (image institutionnelle forte)',
        'Présentation de capacités techniques & certifications',
        'Portails de soumission de contrats et appels d’offres',
        'Plateformes RH pour recrutement terrain',
        'Applications web de gestion de sous-traitance',
        'Tableaux de bord internes (reporting, opérations)'
      ]
    },
    {
      id: 'logistique',
      icon: Truck,
      title: 'Transport & Logistique',
      image: 'https://images.unsplash.com/photo-1753579167765-d88ba3719f96',
      color: 'from-green-500 to-emerald-500',
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
      icon: Sun,
      title: 'Énergies & Solaire',
      image: 'https://images.unsplash.com/photo-1668097613572-40b7c11c8727',
      color: 'from-yellow-500 to-orange-500',
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
      icon: HardHat,
      title: 'Génie civil & BTP',
      image: 'https://images.unsplash.com/photo-1650630718105-497674381f3c',
      color: 'from-slate-500 to-zinc-500',
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
      icon: Zap,
      title: 'Énergies & Utilités',
      image: 'https://images.pexels.com/photos/4320449/pexels-photo-4320449.jpeg',
      color: 'from-purple-500 to-pink-500',
      services: [
        'Sites institutionnels à forte crédibilité',
        'Portails de relation clients & partenaires',
        'Formulaires de demandes techniques',
        'Applications web de gestion de services',
        'Plateformes internes d’information et reporting'
      ]
    },
    {
      id: 'finance',
      icon: Briefcase,
      title: 'Finance, Assurance & Conseil',
      image: 'https://images.unsplash.com/photo-1758518726324-62bef7c815b0',
      color: 'from-indigo-500 to-blue-500',
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
      icon: Users,
      title: 'RH & Recrutement',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      color: 'from-teal-500 to-cyan-500',
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
      icon: Hotel,
      title: 'Hôtellerie & Tourisme',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      color: 'from-rose-500 to-pink-500',
      services: [
        'Sites web premium pour hôtels & lodges',
        'Présentation d’offres et services',
        'Formulaires de réservation / demande',
        'Applications web de gestion client',
        'Pages multilingues pour clientèle internationale'
      ]
    },
    {
      id: 'services',
      icon: Wrench,
      title: 'Services professionnels & Facility',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      color: 'from-amber-500 to-orange-500',
      services: [
        'Sites web corporate pour entreprises de services',
        'Présentation claire des prestations',
        'Formulaires de demandes de devis',
        'Portails clients et contrats',
        'Applications web de gestion d’interventions'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Smartphone,
      title: 'Applications mobiles professionnelles',
      description: 'Solutions mobiles natives pour iOS et Android'
    },
    {
      icon: Target,
      title: 'Systèmes de génération de leads',
      description: 'Outils d’acquisition et conversion optimisés'
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
            <span className="text-gradient-primary"> par secteur</span>
          </h2>
          <p className="text-lg text-muted-foreground scroll-reveal">
            Nous ne proposons pas des solutions génériques. Chaque offre est pensée pour les réalités, contraintes et objectifs business de votre secteur.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;
            
            return (
              <div
                key={service.id}
                className="group scroll-reveal"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div 
                  className={`relative bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 cursor-pointer border border-border ${
                    isActive ? 'ring-2 ring-primary scale-105' : 'hover:-translate-y-2'
                  }`}
                  onClick={() => setActiveService(isActive ? null : service.id)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-50 transition-opacity`} />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Services List - Show when active */}
                    {isActive && (
                      <ul className="space-y-2 mb-4 animate-fade-in">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    <Button 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToSection('tarifs');
                      }}
                      className="w-full gradient-turquoise hover:shadow-glow transition-all duration-300 mt-4"
                    >
                      Commander une solution {service.title.split(' ')[0]}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          {additionalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="glass-strong rounded-xl p-8 text-center hover:scale-105 transition-all duration-300 scroll-reveal"
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('tarifs')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Commander
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="glass-strong rounded-2xl p-8 text-center max-w-3xl mx-auto scroll-reveal">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Vous ne voyez pas encore votre secteur ?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Nos solutions sont entièrement personnalisables.
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToSection('tarifs')}
            className="gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Commander une solution digitale sur mesure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
