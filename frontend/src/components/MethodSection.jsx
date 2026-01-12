import React, { useState, useEffect, useRef } from 'react';
import { Ear, Layout, Palette, Code, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

export const MethodSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const steps = [
    {
      icon: Ear,
      title: 'Écoute & Analyse',
      description: 'Nous débutons chaque projet par un échange profond de lancement où nous prenons le temps de comprendre vos besoins, vos objectifs et l’ADN de votre marque.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Layout,
      title: 'Planification Personnalisée',
      description: 'Sur la base de nos échanges, nous élaborons un plan de projet détaillé avec des étapes claires et des points de contrôle réguliers.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'Design Créatif et Itératif',
      description: 'Nos designers conçoivent des maquettes innovantes qui reflètent l’identité de votre marque, avec des cycles d’itération basés sur vos retours.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Code,
      title: 'Développement Agile',
      description: 'Nos développeurs travaillent de manière itérative en utilisant des méthodes agiles pour ajuster rapidement le projet selon vos besoins.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: CheckCircle2,
      title: 'Contrôle Qualité Rigoureux',
      description: 'Chaque composant est soumis à des tests approfondis pour vous assurer un produit sans faille et performant.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        const relativeScroll = scrollPosition - sectionTop;
        const stepHeight = sectionHeight / steps.length;
        const currentStep = Math.min(Math.floor(relativeScroll / stepHeight), steps.length - 1);
        setActiveStep(Math.max(0, currentStep));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section id="methode" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-reveal">
            Notre méthode
            <span className="text-gradient-primary"> qui fait la différence</span>
          </h2>
          <p className="text-lg text-muted-foreground scroll-reveal">
            Un processus éprouvé pour garantir l'excellence à chaque étape
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-border hidden sm:block">
            {/* Animated Progress Line */}
            <div 
              className="absolute top-0 left-0 w-full gradient-primary transition-all duration-500"
              style={{ 
                height: `${((activeStep + 1) / steps.length) * 100}%`,
                boxShadow: '0 0 20px rgba(22, 163, 184, 0.5)'
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= activeStep;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => (stepsRef.current[index] = el)}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-0 gap-6`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-8'
                  } transition-all duration-700`}>
                    <div className="glass-strong rounded-xl p-6 lg:p-8 shadow-medium hover:shadow-large transition-all duration-300 group hover:-translate-y-1">
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-heading text-xl lg:text-2xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 hidden sm:flex items-center justify-center z-10">
                    <div className={`w-16 h-16 rounded-full border-4 border-background flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? 'gradient-hero scale-110 shadow-glow' 
                        : 'bg-muted scale-100'
                    }`}>
                      <span className={`font-heading text-lg font-bold transition-colors ${
                        isActive ? 'text-white' : 'text-muted-foreground'
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="w-full md:w-5/12 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 scroll-reveal">
          <Button 
            size="lg"
            onClick={() => scrollToSection('portfolio')}
            className="gradient-turquoise hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Lancer mon projet maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
