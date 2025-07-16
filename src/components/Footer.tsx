import { Github, MessageCircle, Mail, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-card border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold gradient-text">XreatLabs</span>
            </div>
            <p className="text-muted-foreground">
              Where Minecraft meets lovable AI magic. Expert coders crafting the future of gaming.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Custom Minecraft Mods</span></li>
              <li><span className="text-muted-foreground">Server Plugins</span></li>
              <li><span className="text-muted-foreground">AI Integration</span></li>
              <li><span className="text-muted-foreground">Code Consulting</span></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="glass-button border-primary/30 hover:glow-primary"
                onClick={() => window.open('https://github.com/xreatlabs', '_blank')}
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="glass-button border-primary/30 hover:glow-secondary"
                onClick={() => window.open('https://discord.gg/xreatlabs', '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="glass-button border-primary/30 hover:glow-primary"
                onClick={() => window.open('mailto:hello@xreatlabs.com', '_blank')}
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} XreatLabs. All rights reserved. Built with 💜 and AI magic.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;