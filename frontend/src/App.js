import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import StatsSection from './components/StatsSection';
import MissionSection from './components/MissionSection';
import ServicesSection from './components/ServicesSection';
import MethodSection from './components/MethodSection';
import ClientsSection from './components/ClientsSection';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import TeamSection from './components/TeamSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <StatsSection />
        <MissionSection />
        <ServicesSection />
        <MethodSection />
        <ClientsSection />
        <PortfolioSection />
        <PricingSection />
        <TeamSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
