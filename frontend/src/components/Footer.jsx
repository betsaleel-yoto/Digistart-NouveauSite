import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const footerLinks = {
    services: [
      { label: 'Sites web premium', id: 'services' },
      { label: 'Applications web', id: 'services' },
      { label: 'Applications mobile', id: 'services' },
      { label: 'Consulting digital', id: 'services' }
    ],
    company: [
      { label: 'Notre méthode', id: 'methode' },
      { label: 'Portfolio', id: 'portfolio' },
      { label: 'Équipe', id: 'equipe' },
      { label: 'Tarifs', id: 'tarifs' }
    ],
    sectors: [
      { label: 'IT & Digital', id: 'services' },
      { label: 'Mines & Industrie', id: 'services' },
      { label: 'Transport & Logistique', id: 'services' },
      { label: 'Énergie & Solaire', id: 'services' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-[#0B3B79] text-[white] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-heading font-bold mb-4 text-[#3BDDDC]">
                DigistartExpress
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Votre partenaire pour des solutions digitales premium qui transforment votre présence en ligne en avantage concurrentiel.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a href="tel:+243" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+243 98 870 0603</span>
                </a>
                <a href="mailto:contact@digistartexpress.cd" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>contact@digistartexpress.com</span>
                </a>
                <div className="flex items-start gap-3 text-primary-foreground/80">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Kinshasa, République Démocratique du Congo</span>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Entreprise</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sectors Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Secteurs</h4>
              <ul className="space-y-2">
                {footerLinks.sectors.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} DigistartExpress. Tous droits réservés.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
              <button className="hover:text-accent transition-colors">
                Mentions légales
              </button>
              <button className="hover:text-accent transition-colors">
                Confidentialité
              </button>
              <button className="hover:text-accent transition-colors">
                CGV
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
