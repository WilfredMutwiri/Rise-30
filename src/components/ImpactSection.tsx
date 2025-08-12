import React from 'react';
import { MapPin, Brain, Trophy, MessageSquare } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { Card, CardContent } from '@/components/ui/card';

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our Impact Goals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Measurable targets that will reshape global climate action and give youth 
            unprecedented influence at COP30.
          </p>
        </div>

        {/* Animated Counters */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center shadow-card hover-lift">
            <CardContent className="p-8">
              <AnimatedCounter end={1000000} suffix="" prefix="" />
              <h3 className="text-xl font-heading font-semibold text-primary mt-4 mb-2">
                Youth Mobilized
              </h3>
              <p className="text-muted-foreground">
                Across 30+ countries by COP30
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-card hover-lift">
            <CardContent className="p-8">
              <AnimatedCounter end={30} suffix="+" prefix="" />
              <h3 className="text-xl font-heading font-semibold text-primary mt-4 mb-2">
                Countries Engaged
              </h3>
              <p className="text-muted-foreground">
                Global network of local action cells
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-card hover-lift">
            <CardContent className="p-8">
              <AnimatedCounter end={1000} suffix="+" prefix="" />
              <h3 className="text-xl font-heading font-semibold text-primary mt-4 mb-2">
                Climate Actions
              </h3>
              <p className="text-muted-foreground">
                Coordinated global campaigns
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Features & Innovations */}
        <div>
          <h3 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            Key Features & Innovations
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 forest-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-heading font-semibold text-primary mb-3">
                  AI Storytelling
                </h4>
                <p className="text-muted-foreground">
                  AI-powered platform amplifies local climate stories for global impact
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-ocean-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-heading font-semibold text-primary mb-3">
                  Geo-Tagged Map
                </h4>
                <p className="text-muted-foreground">
                  Interactive global map showcasing youth action cells and activities
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-heading font-semibold text-primary mb-3">
                  Leaderboards
                </h4>
                <p className="text-muted-foreground">
                  Gamified engagement tracking and recognizing top climate activists
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 forest-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-heading font-semibold text-primary mb-3">
                  COP30 Advocacy Hub
                </h4>
                <p className="text-muted-foreground">
                  Direct channel for youth voices to influence climate negotiations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;