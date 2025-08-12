import React from 'react';
import { Calendar, FileText, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import cop30Image from '@/assets/cop30-summit.jpg';

const COP30Section = () => {
  const timeline = [
    { date: 'Jan 2025', event: 'Global Campaign Launch', status: 'active' },
    { date: 'Mar 2025', event: 'Youth Cell Formation', status: 'upcoming' },
    { date: 'Jun 2025', event: 'Mid-Year Action Summit', status: 'upcoming' },
    { date: 'Sep 2025', event: 'Pre-COP30 Youth Conference', status: 'upcoming' },
    { date: 'Nov 2025', event: 'COP30 in Belém, Brazil', status: 'target' },
  ];

  return (
    <section id="cop30" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Road to COP30
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The most important climate summit of our generation happens in Brazil, 2025. 
            Youth voices will be central to the negotiations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-8">
              Timeline to COP30
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                    item.status === 'active' ? 'bg-warm-gold animate-pulse-glow' :
                    item.status === 'target' ? 'forest-gradient' :
                    'bg-muted'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-primary">{item.event}</span>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COP30 Image */}
          <div className="relative">
            <img
              src={cop30Image}
              alt="COP30 Climate Summit"
              className="w-full h-80 object-cover rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-green/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">Belém, Brazil • November 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Focus Areas */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-card hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 forest-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-heading font-semibold text-primary mb-3">
                Youth Delegation
              </h4>
              <p className="text-muted-foreground">
                Top activists become official youth delegates at COP30 negotiations
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-ocean-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-heading font-semibold text-primary mb-3">
                Youth Demands
              </h4>
              <p className="text-muted-foreground">
                Comprehensive policy document representing global youth priorities
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-heading font-semibold text-primary mb-3">
                Global Actions
              </h4>
              <p className="text-muted-foreground">
                Synchronized worldwide demonstrations during COP30 negotiations
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="mr-4">
            Read Youth Demands Document
          </Button>
          <Button variant="outline" size="lg">
            Join COP30 Campaign
          </Button>
        </div>
      </div>
    </section>
  );
};

export default COP30Section;