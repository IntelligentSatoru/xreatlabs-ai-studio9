import { Check, Code, Bot, Server, Wrench, Zap, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Minecraft Mods',
      description: 'Tailored modifications that enhance gameplay with unique features and mechanics',
      features: [
        'Custom block and item creation',
        'New gameplay mechanics',
        'Performance optimization',
        'Cross-platform compatibility',
        'Regular updates and support'
      ],
      price: 'Starting at $500',
      color: 'text-primary'
    },
    {
      icon: Server,
      title: 'Server Plugins',
      description: 'Powerful plugins to enhance server management and player experience',
      features: [
        'Admin management tools',
        'Player economy systems',
        'Custom commands and events',
        'Anti-griefing protection',
        'Database integration'
      ],
      price: 'Starting at $300',
      color: 'text-secondary'
    },
    {
      icon: Bot,
      title: 'AI Integration',
      description: 'Revolutionary AI-powered features for intelligent server management',
      features: [
        'Smart NPC conversations',
        'Automated moderation',
        'Dynamic content generation',
        'Predictive analytics',
        'Natural language processing'
      ],
      price: 'Starting at $800',
      color: 'text-accent'
    },
    {
      icon: Wrench,
      title: 'Development Tools',
      description: 'Custom tools and utilities to streamline your development workflow',
      features: [
        'Build automation scripts',
        'Testing frameworks',
        'Debugging utilities',
        'Performance profilers',
        'Documentation generators'
      ],
      price: 'Starting at $200',
      color: 'text-primary'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We discuss your vision, requirements, and technical specifications',
      icon: Users
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Detailed project planning with timeline, milestones, and deliverables',
      icon: Code
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with regular updates and testing cycles',
      icon: Zap
    },
    {
      step: '04',
      title: 'Deployment',
      description: 'Seamless deployment with documentation and ongoing support',
      icon: Server
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Server Owner',
      content: 'XreatLabs transformed our server with their AI plugin. Player engagement increased by 300%!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Mod Developer',
      content: 'Their custom mod exceeded all expectations. Clean code and exceptional performance.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b78a2b4e?w=100&h=100&fit=crop'
    },
    {
      name: 'David Chen',
      role: 'Gaming Community',
      content: 'Professional, responsive, and incredibly talented. Best investment we made for our community.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your Minecraft experience with our expert development and AI-powered solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="glass-card hover-lift hover:glow-primary transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <service.icon className={`w-12 h-12 ${service.color} animate-float`} />
                      <div>
                        <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                        <p className="text-muted-foreground mt-1">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                      <Button
                        variant="outline"
                        className="glass-button border-primary/30 hover:glow-primary"
                        onClick={() => window.location.href = '/contact'}
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Our Development Process
              </h2>
              <p className="text-xl text-muted-foreground">
                From concept to deployment, we follow a proven methodology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <Card key={index} className="glass-card hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                      </div>
                      <step.icon className="w-8 h-8 text-primary mx-auto animate-float" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Experience AI in Action
              </h2>
              <p className="text-xl text-muted-foreground">
                Try our AI assistant to see how we can enhance your Minecraft experience
              </p>
            </div>

            <Card className="glass-card hover:glow-secondary transition-all duration-300">
              <CardContent className="p-8">
                <div className="terminal">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">XreatLabs AI Assistant</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-primary">AI:</span>
                      <span className="ml-2 text-foreground">Hello! I'm XreatLabs AI. Ask me about our services!</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-secondary">You:</span>
                      <span className="ml-2 text-muted-foreground">What kind of Minecraft mods can you create?</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-primary">AI:</span>
                      <span className="ml-2 text-foreground">We create custom mods, plugins, AI integrations, and development tools.</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-primary">AI:</span>
                      <span className="ml-2 text-foreground">Would you like to know more about our AI-powered features?</span>
                      <span className="animate-terminal-cursor ml-1">|</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Button
                    className="bg-secondary hover:bg-secondary-glow text-secondary-foreground px-6 py-3 glow-secondary"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Bot className="w-4 h-4 mr-2" />
                    Chat with Our AI
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Don't just take our word for it
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="glass-card hover-lift">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop';
                        }}
                      />
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg glow-primary hover:glow-secondary transition-all duration-300"
            onClick={() => window.location.href = '/contact'}
          >
            <Bot className="w-5 h-5 mr-2" />
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;