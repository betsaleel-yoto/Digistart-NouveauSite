import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, suffix = '', duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span className="font-heading text-4xl sm:text-5xl font-bold text-gradient-primary">
      {count}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: 24, label: 'IT, Digital & services technologiques', suffix: '%' },
    { value: 20, label: 'Mines & Industrie', suffix: '%' },
    { value: 15, label: 'Transport & Logistique', suffix: '%' },
    { value: 10, label: 'Énergies & Solaire', suffix: '%' },
    { value: 7, label: 'Génie civil & BTP', suffix: '%' },
    { value: 6, label: 'Énergies & Utilités', suffix: '%' },
    { value: 5, label: 'Finance, Assurance & Conseil', suffix: '%' },
    { value: 5, label: 'RH & Recrutement', suffix: '%' },
    { value: 2, label: 'Hôtellerie & Tourisme', suffix: '%' },
    { value: 6, label: 'Autres secteurs minoritaires', suffix: '%' }
  ];

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Pourquoi le digital est devenu
            <span className="text-accent"> stratégique en RDC</span>
          </h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Après analyse du tissu entrepreneurial congolais en 2026, nous avons constaté la répartition suivante :
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass text-center p-6 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-3">
                {isVisible ? (
                  <Counter end={stat.value} suffix={stat.suffix} />
                ) : (
                  <span className="font-heading text-4xl sm:text-5xl font-bold text-gradient-primary">
                    0{stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-sm text-primary-foreground/80 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Insight */}
        <div className="glass-strong rounded-2xl p-8 text-center max-w-4xl mx-auto">
          <p className="text-lg text-foreground leading-relaxed">
            <span className="font-semibold">📌 Ces 9 secteurs concentrent l’essentiel de la concurrence, des opportunités et des budgets.</span>
            <br /><br />
            Avec cette multitude d’entreprises des mêmes domaines, les clients sont très vigilants quant à quelle entreprise collaborer.
            <br />
            <span className="text-primary font-semibold">Se différencier de la concurrence pour gagner la confiance des clients devient indispensable.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
