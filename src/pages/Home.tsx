import { ArrowRight, Play, Github, Zap, Code, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import GitHubStats from '@/components/GitHubStats';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Animated Logo */}
            <div className="mb-8 inline-block">
              <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center animate-float glow-primary">
                <Github className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text">XreatLabs</span>
              <br />
              <span className="text-foreground">Where Minecraft meets</span>
              <br />
              <span className="text-primary">Xreat</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Expert Minecraft coders and scripters crafting the future of gaming with innovative solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg glow-primary hover:glow-secondary transition-all duration-300"
                asChild
              >
                <Link to="/projects">
                  <Play className="w-5 h-5 mr-2" />
                  Explore Our Projects
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-button border-primary/30 px-8 py-4 text-lg hover:glow-primary"
                onClick={() => window.open('https://github.com/xreatlabs', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                View Latest Code
              </Button>
            </div>

            {/* GitHub Stats */}
            <GitHubStats />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Why Choose XreatLabs?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with deep Minecraft expertise to create extraordinary gaming experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Expert Coding",
                description: "Years of Minecraft modding experience with clean, efficient code that scales.",
                color: "text-primary"
              },
              {
                icon: Bot,
                title: "AI Integration",
                description: "Seamlessly integrate AI features into your Minecraft servers and mods.",
                color: "text-secondary"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized solutions that don't compromise on performance or functionality.",
                color: "text-accent"
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-card hover-lift hover:glow-primary transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4 animate-float`} />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                See Our Code in Action
              </h2>
              <p className="text-xl text-muted-foreground">
                Real Minecraft plugin code from our latest projects
              </p>
            </div>

            <div className="terminal">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-muted-foreground">XreatLabs → minecraft-ai-plugin</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-primary">$</span>
                  <span className="ml-2 text-terminal-green">plugin.initialize()</span>
                  <span className="animate-terminal-cursor">|</span>
                </div>
                <div className="text-muted-foreground">
                  <span className="text-primary">[INFO]</span> Loading XreatLabs AI Plugin v2.1.0
                </div>
                <div className="text-muted-foreground">
                  <span className="text-primary">[INFO]</span> Connecting to AI service...
                </div>
                <div className="text-muted-foreground">
                  <span className="text-secondary">[SUCCESS]</span> AI chatbot initialized
                </div>
                <div className="text-muted-foreground">
                  <span className="text-secondary">[SUCCESS]</span> Plugin ready! 🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Ready to Transform Your Minecraft Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your Minecraft vision to life with our expertise and innovation
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg glow-primary hover:glow-secondary transition-all duration-300"
            asChild
          >
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;