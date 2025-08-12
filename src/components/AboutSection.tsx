import React from 'react';
import { Target, Eye, Zap } from 'lucide-react';
import youthLeadersImage from '@/assets/youth-leaders.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                About RISE30
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                RISE30 is a youth-led global climate action movement building toward COP30. 
                We're mobilizing 1 million young people across 30+ countries to protect the Amazon 
                rainforest and influence international climate policy through coordinated action, 
                digital engagement, and direct advocacy.
              </p>
            </div>

            {/* Vision, Mission, Strategy */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 forest-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Vision</h3>
                  <p className="text-muted-foreground">
                    A world where youth voices lead the global transition to climate justice, 
                    with the Amazon preserved as the lungs of our planet.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-ocean-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Mission</h3>
                  <p className="text-muted-foreground">
                    To mobilize, connect, and amplify youth climate action globally, creating 
                    coordinated pressure for Amazon protection and ambitious climate policy at COP30.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warm-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Strategy</h3>
                  <p className="text-muted-foreground">
                    Combine grassroots organizing, digital campaigns, and direct policy advocacy 
                    to create unprecedented youth influence on global climate negotiations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={youthLeadersImage}
                alt="Youth climate leaders from around the world"
                className="w-full h-96 object-cover hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-green/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-card">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2025</div>
                <div className="text-sm text-muted-foreground">COP30 in Brazil</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;