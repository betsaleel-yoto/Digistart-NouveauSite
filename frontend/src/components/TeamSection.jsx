import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export const TeamSection = () => {
  const team = [
    {
      name: 'Betsaleel Yoto',
      role: 'CEO & Strategie Digitale',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      linkedin: '#',
      email: 'jb@digistartexpress.cd'
    },
    {
      name: 'Grace Nkulu',
      role: 'Directrice Design & UX',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      linkedin: '#',
      email: 'grace@digistartexpress.cd'
    },
    {
      name: 'Patrick Kabongo',
      role: 'Lead Développeur',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      linkedin: '#',
      email: 'patrick@digistartexpress.cd'
    },
    {
      name: 'Sarah Ilunga',
      role: 'Chef de Projet',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      linkedin: '#',
      email: 'sarah@digistartexpress.cd'
    }
  ];

  return (
    <section id="equipe" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-reveal">
            Notre
            <span className="text-gradient-primary"> équipe</span>
          </h2>
          <p className="text-lg text-muted-foreground scroll-reveal">
            Des profils techniques et stratégiques, orientés résultats
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group scroll-reveal text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6">
                {/* Image */}
                <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-medium group-hover:shadow-large transition-all duration-300">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    <a 
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Info */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-muted-foreground">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
