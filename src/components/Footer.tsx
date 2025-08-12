import React from 'react';
import { Twitter, Instagram, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-warm-gold rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">R30</span>
                </div>
                <span className="text-2xl font-heading font-bold">RISE30</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Youth-led global climate action movement mobilizing 1 million young people 
                across 30+ countries to protect the Amazon and influence COP30 climate policy.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-warm-gold">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-warm-gold">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-warm-gold">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-warm-gold">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-primary-foreground/80 hover:text-warm-gold transition-colors">About RISE30</a></li>
                <li><a href="#how-it-works" className="text-primary-foreground/80 hover:text-warm-gold transition-colors">How It Works</a></li>
                <li><a href="#impact" className="text-primary-foreground/80 hover:text-warm-gold transition-colors">Our Impact</a></li>
                <li><a href="#join" className="text-primary-foreground/80 hover:text-warm-gold transition-colors">Join Movement</a></li>
                <li><a href="#cop30" className="text-primary-foreground/80 hover:text-warm-gold transition-colors">COP30 Info</a></li>
              </ul>
            </div>

            {/* Contact & Legal */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <Mail className="w-4 h-4" />
                  <span>contact@rise30.org</span>
                </div>
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <MapPin className="w-4 h-4" />
                  <span>Global Movement, Local Action</span>
                </div>
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-RISE</span>
                </div>
              </div>
              
              <div className="mt-6 space-y-2">
                <a href="/privacy" className="block text-primary-foreground/80 hover:text-warm-gold transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="/terms" className="block text-primary-foreground/80 hover:text-warm-gold transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="/accessibility" className="block text-primary-foreground/80 hover:text-warm-gold transition-colors text-sm">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="py-8 border-t border-primary-foreground/20">
          <h3 className="font-heading font-semibold text-lg mb-6 text-center">Global Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {['UN Environment', 'Greenpeace', 'WWF', '350.org'].map((partner) => (
              <div key={partner} className="partner-logo">
                <div className="bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg p-4 w-24 h-16 flex items-center justify-center transition-smooth">
                  <span className="text-xs font-medium text-center">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © {currentYear} RISE30. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
              <span>🌍 Available in 4 languages</span>
              <span>♿ WCAG 2.1 Compliant</span>
              <span>📱 Mobile-First Design</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;