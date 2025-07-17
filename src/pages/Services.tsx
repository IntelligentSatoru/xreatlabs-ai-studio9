import { Check, Code, Bot, Server, Wrench, Zap, Users, ArrowRight, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Minecraft Projects',
      description: 'Tailored modifications that enhance gameplay with unique features and mechanics',
      features: [
        'Custom block and item creation',
        'New gameplay mechanics',
        'Performance optimization',
        'Cross-platform compatibility',
        'Regular updates and support'
      ],
      price: 'Free',
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
      price: 'Free',
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
      price: 'Free',
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
      price: 'Free',
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
    <div className="min-h-screen mesh-gradient">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.4),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.3),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-card mb-8 animate-bounce-in">
              <span className="text-sm font-medium gradient-text-static">✨ Free Premium Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text leading-tight">
              Transform Your
              <span className="block text-cyber">Minecraft World</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Unleash the power of AI-driven development with our cutting-edge solutions for the modern Minecraft ecosystem
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="btn-primary group">
                <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Start Building
              </button>
              <button className="btn-secondary group">
                <Bot className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Try AI Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Premium Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to create exceptional Minecraft experiences, powered by next-generation technology
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="card-premium hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-6 mb-8">
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color.split('-')[1]}/20 to-${service.color.split('-')[1]}/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className={`w-8 h-8 ${service.color} animate-float`} />
                        </div>
                        <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-${service.color.split('-')[1]}/30 to-transparent blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-center space-x-4 p-3 rounded-xl glass-card hover:glow-primary/20 transition-all duration-200"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold gradient-text-static mb-1">Free</div>
                        <div className="text-sm text-muted-foreground">Always and forever</div>
                      </div>
                      <button 
                        className="glass-button group px-8 py-4 rounded-xl"
                        onClick={() => window.location.href = '/contact'}
                      >
                        Get Started
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Our Development Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From initial concept to deployment, we follow a meticulously crafted process that ensures excellence at every step
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0"></div>
                  )}
                  
                  <div className="glass-card-elevated hover-lift text-center relative z-10 group-hover:glow-primary/30 transition-all duration-300">
                    <div className="p-8">
                      <div className="mb-6 relative">
                        <div className="w-20 h-20 bg-gradient-hero rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                        </div>
                        <div className="absolute -inset-2 bg-gradient-hero rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <step.icon className="w-10 h-10 text-primary mx-auto animate-float-delayed" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced AI Demo Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Experience AI in Action
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Witness the future of Minecraft development with our intelligent assistant that understands your vision
              </p>
            </div>

            <div className="glass-card-elevated hover:glow-secondary/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
              <div className="relative p-12">
                <div className="terminal group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-glow-pulse"></div>
                      <div className="w-4 h-4 bg-yellow-500 rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bot className="w-5 h-5 text-primary animate-float" />
                      <span className="text-sm text-muted-foreground font-mono">XreatLabs AI Assistant v2.0</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6 font-mono">
                    <div className="flex items-start space-x-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <span className="text-primary font-semibold">AI Assistant:</span>
                        <p className="text-foreground mt-1">Hello! I'm your XreatLabs AI development partner. I can help you create custom Minecraft solutions, from simple plugins to complex AI integrations. What would you like to build today?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 opacity-0 animate-slide-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <span className="text-secondary font-semibold">Developer:</span>
                        <p className="text-muted-foreground mt-1">I need an AI-powered chat system for my survival server with smart NPCs that can help players dynamically.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 opacity-0 animate-slide-up" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <span className="text-primary font-semibold">AI Assistant:</span>
                        <p className="text-foreground mt-1">Perfect! I can create an intelligent NPC system with context-aware responses, player behavior analysis, and adaptive storytelling. Would you like real-time quest generation or focus on interactive guidance?</p>
                        <span className="animate-terminal-cursor text-primary">|</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <button
                    className="btn-secondary group text-lg px-12 py-6"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Bot className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                    Start AI Conversation
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Developer Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join thousands of developers who have transformed their Minecraft projects with XreatLabs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="glass-card-elevated hover-lift group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-8">
                    <div className="mb-6">
                      <div className="flex text-accent mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-foreground text-lg font-medium leading-relaxed italic">
                        "{testimonial.content}"
                      </blockquote>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all duration-300"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop';
                          }}
                        />
                        <div className="absolute -inset-1 rounded-full bg-gradient-hero opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                        <div className="text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/15 to-accent/20"></div>
        <div className="absolute inset-0 bg-gradient-mesh"></div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
              Ready to Revolutionize
              <span className="block text-cyber">Your Minecraft World?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the next generation of Minecraft developers and transform your creative vision into reality with our AI-powered development platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button 
                className="btn-primary text-xl px-12 py-6 group"
                onClick={() => window.location.href = '/contact'}
              >
                <Zap className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                Start Your Project
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary text-xl px-12 py-6 group">
                <Bot className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Schedule AI Demo
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-muted-foreground">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span>100% Free Services</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span>AI-Powered Development</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span>Open Source Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;