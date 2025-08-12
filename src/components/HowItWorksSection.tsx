import React, { useState } from 'react';
import { Users, Smartphone, Megaphone, Award, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Users,
    title: 'Local Youth Cells',
    description: 'Form local action groups of 10-50 youth activists',
    details: 'Create grassroots networks in your community with training, resources, and ongoing support. Each cell becomes a hub for local climate action while connecting to the global movement.',
    color: 'forest-green'
  },
  {
    icon: Smartphone,
    title: 'Digital Platform',
    description: 'Connect, coordinate, and amplify through our app',
    details: 'Use our AI-powered platform to share stories, coordinate actions, access resources, and connect with youth activists worldwide. Real-time updates and gamified engagement keep momentum high.',
    color: 'ocean-blue'
  },
  {
    icon: Megaphone,
    title: 'Global Campaigns',
    description: 'Join synchronized campaigns like #ProtectTheAmazonNow',
    details: 'Participate in coordinated global actions that create maximum impact. From social media campaigns to local demonstrations, every action contributes to building unstoppable momentum.',
    color: 'warm-gold'
  },
  {
    icon: Award,
    title: 'Recognition & Delegates',
    description: 'Top activists become COP30 youth delegates',
    details: 'Outstanding activists earn recognition and the opportunity to represent youth voices directly at COP30. Develop leadership skills while shaping international climate policy.',
    color: 'forest-green'
  }
];

const HowItWorksSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            How RISE30 Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive platform connecting local action with global impact through 
            four key pillars of youth climate engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <Card
                  key={index}
                  className={`cursor-pointer transition-smooth hover-lift ${
                    isActive ? 'ring-2 ring-primary shadow-elegant' : 'hover:shadow-card'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${feature.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                      <ChevronRight 
                        className={`w-5 h-5 text-muted-foreground transition-transform ${
                          isActive ? 'rotate-90' : ''
                        }`} 
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Active Feature Details */}
          <div className="lg:sticky lg:top-8">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-${features[activeFeature].color}`}>
                      {React.createElement(features[activeFeature].icon, {
                        className: "w-8 h-8 text-white"
                      })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-primary">
                        {features[activeFeature].title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {features[activeFeature].details}
                  </p>

                  <div className="pt-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>Step {activeFeature + 1} of {features.length}</span>
                      <div className="flex space-x-1">
                        {features.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === activeFeature ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;