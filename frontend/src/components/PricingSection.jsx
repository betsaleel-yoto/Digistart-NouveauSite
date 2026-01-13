import React from 'react';
import { Button } from './ui/button';
import { Check, Globe, Smartphone, Zap } from 'lucide-react';

export const PricingSection = () => {
  const pricingPlans = [
    {
      icon: Globe,
      title: 'Site web haut de gamme',
      price: '500',
      currency: '$',
      features: [
        'Design premium sur mesure',
        'Responsive (mobile, tablette, desktop)',
        'Hébergement 1 an inclus',
        'Jusqu’à 5 emails professionnels',
        'Formulaires intelligents',
        'Optimisation SEO de base',
        'Maintenance 3 mois',
        'Formation à la gestion du site'
      ],
      popular: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Applications web',
      price: '500',
      currency: '$',
      subtitle: 'A partir de',
      features: [
        'Architecture personnalisée',
        'Interface utilisateur premium',
        'Base de données sécurisée',
        'Système d’authentification',
        'Tableaux de bord interactifs',
        'Intégrations API',
        'Hébergement cloud',
        'Support technique 6 mois'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Applications mobile',
      price: '1000',
      currency: '$',
      subtitle: 'A partir de',
      features: [
        'Applications iOS et Android',
        'Design natif premium',
        'Performance optimisée',
        'Notifications push',
        'Mode hors ligne',
        'Intégrations natives',
        'Publication sur stores',
        'Maintenance 6 mois'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="tarifs" className="py-20 lg:py-32 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-reveal">
            Nos
            <span className="text-gradient-primary"> tarifs</span>
          </h2>
          <p className="text-lg text-muted-foreground scroll-reveal">
            Des solutions premium à prix transparents. Investissez dans votre succès digital.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto mb-12">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative scroll-reveal ${
                  plan.popular ? 'md:-translate-y-4' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="gradient-turquoise px-6 py-2 rounded-full text-white text-sm font-semibold shadow-glow">
                      Plus populaire
                    </div>
                  </div>
                )}

                <div className={`glass-strong rounded-2xl p-8 h-full flex flex-col shadow-large hover:shadow-glow transition-all duration-300 ${
                  plan.popular ? 'border-2 border-[#0A3776]' : 'border border-border'
                }`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    {plan.title}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    {plan.subtitle && (
                      <p className="text-sm text-muted-foreground mb-1">{plan.subtitle}</p>
                    )}
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-heading font-bold text-gradient-primary">
                        {plan.price}
                      </span>
                      <span className="text-2xl font-semibold text-muted-foreground">
                        {plan.currency}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a href="https://wa.me/243988700603"><Button 
                    size="lg"
                    className={`w-full ${
                      plan.popular 
                        ? 'gradient-turquoise hover:shadow-glow lightning-btn' 
                        : 'gradient-primary hover:shadow-medium'
                    } transition-all duration-300 hover:scale-105 mt-auto`}
                  >
                    <span className="relative z-10"> Commander maintenant </span>
                  </Button></a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="glass-strong rounded-2xl p-8 text-center max-w-3xl mx-auto scroll-reveal">
          <p className="text-lg text-foreground">
            <span className="font-semibold">Besoin d&apos;une solution personnalisée ?</span>
            <br />
            Contactez-nous pour un devis sur mesure adapté à vos besoins spécifiques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
