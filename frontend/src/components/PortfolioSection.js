import React, { useState } from 'react';
import { Button } from './ui/button';
import { Filter } from 'lucide-react';

export const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'it', label: 'IT & Digital' },
    { id: 'mines', label: 'Mines' },
    { id: 'logistique', label: 'Logistique' },
    { id: 'energie', label: 'Énergie' },
    { id: 'btp', label: 'BTP' }
  ];

  const projects = [
    {
      title: 'Plateforme Corporate IT',
      category: 'it',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      description: 'Site web premium pour entreprise technologique'
    },
    {
      title: 'Portail Minier Institutionnel',
      category: 'mines',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      description: 'Présentation de capacités et certifications'
    },
    {
      title: 'Plateforme Logistique B2B',
      category: 'logistique',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
      description: 'Gestion de flotte et demandes de devis'
    },
    {
      title: 'Site Solaire Premium',
      category: 'energie',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
      description: 'Présentation de projets et simulateur'
    },
    {
      title: 'Portail BTP Corporate',
      category: 'btp',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
      description: 'Showcase de chantiers et références'
    },
    {
      title: 'Application RH Digitale',
      category: 'it',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
      description: 'Gestion de candidatures et talents'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-reveal">
            Nos
            <span className="text-gradient-primary"> réalisations</span>
          </h2>
          <p className="text-lg text-muted-foreground scroll-reveal">
            Découvrez quelques-uns des projets que nous avons réalisés pour nos clients
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 scroll-reveal">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'gradient-turquoise text-white shadow-glow'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group scroll-reveal bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <Button 
                      size="sm"
                      variant="outline"
                      className="w-full bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                      onClick={() => scrollToSection('tarifs')}
                    >
                      Obtenir un résultat similaire
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center scroll-reveal">
          <Button 
            size="lg"
            onClick={() => scrollToSection('tarifs')}
            className="gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Commander votre projet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
