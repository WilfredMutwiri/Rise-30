import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Users, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const countries = [
  'Brazil', 'United States', 'Canada', 'Mexico', 'Argentina', 'Chile', 'Colombia',
  'United Kingdom', 'Germany', 'France', 'Spain', 'Italy', 'Netherlands',
  'Australia', 'New Zealand', 'Japan', 'South Korea', 'India', 'Philippines',
  'Kenya', 'South Africa', 'Nigeria', 'Ghana', 'Other'
];

const JoinSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    country: '',
    interests: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to RISE30!",
      description: "Thank you for joining our movement. You'll receive an email with next steps soon.",
    });
    // Reset form
    setFormData({ name: '', email: '', age: '', country: '', interests: '' });
  };

  return (
    <section id="join" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Join & Participate
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to make history? Join the global youth movement that will shape COP30 
            and protect our planet's future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Registration Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Join the Movement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      min="13"
                      max="30"
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="interests">Areas of Interest (Optional)</Label>
                  <Input
                    id="interests"
                    type="text"
                    placeholder="e.g., Renewable energy, Indigenous rights, Policy advocacy..."
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Join RISE30 Movement
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Toolkit Preview & Info */}
          <div className="space-y-6">
            <Card className="shadow-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-warm-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                      Toolkit Preview
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Get instant access to our comprehensive action toolkit including campaign guides, 
                      social media templates, and organizing resources.
                    </p>
                    <Button variant="outline" size="sm">
                      Download Toolkit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 forest-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p className="text-muted-foreground">Receive welcome email with platform access</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-ocean-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p className="text-muted-foreground">Join your local action cell or start one</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p className="text-muted-foreground">Begin taking action with global campaigns</p>
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

export default JoinSection;