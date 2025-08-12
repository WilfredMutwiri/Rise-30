import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Globe } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import heroImage from '@/assets/hero-amazon.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/80 via-ocean-blue/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Globe className="w-4 h-4" />
                <span>30 Countries • 1 Million Youth</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                Youth-Led Climate Action.
                <span className="block text-warm-gold">Globally Connected.</span>
                <span className="block">Impact-Driven.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                Join RISE30 — the global movement of young climate leaders protecting the Amazon and shaping COP30 climate policy.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Join the Movement
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-light" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Start a Local Action Cell
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-gold">30+</div>
                <div className="text-sm text-white/80">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-gold">1M</div>
                <div className="text-sm text-white/80">Target Youth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-gold">1000+</div>
                <div className="text-sm text-white/80">Actions Planned</div>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center lg:justify-end">
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;