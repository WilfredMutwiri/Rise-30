import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ImpactSection from '@/components/ImpactSection';
import JoinSection from '@/components/JoinSection';
import COP30Section from '@/components/COP30Section';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <ImpactSection />
        <JoinSection />
        <COP30Section />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
