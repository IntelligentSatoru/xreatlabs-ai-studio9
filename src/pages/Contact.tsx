import { useState } from 'react';
import { Mail, MessageCircle, Github, MapPin, Send, CheckCircle, Shield, ExternalLink, Globe, Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nexAuthLinks, setNexAuthLinks] = useState({
    modrinth: 'https://modrinth.com/user/xreatlabs',
    github: 'https://github.com/xreatlabs',
    spigotmc: 'https://www.spigotmc.org/members/xreatlabs.1234567',
    discord: 'https://discord.gg/xreatlabs'
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Get in touch via email',
      value: 'official@xreatlabs.space',
      action: () => window.open('mailto:official@xreatlabs.space', '_blank'),
      color: 'text-primary'
    },
    {
      icon: MessageCircle,
      title: 'Discord',
      description: 'Join our community',
      value: 'discord.gg/xreatlabs',
      action: () => window.open('https://discord.gg/xreatlabs', '_blank'),
      color: 'text-secondary'
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Follow our projects',
      value: 'github.com/xreatlabs',
      action: () => window.open('https://github.com/xreatlabs', '_blank'),
      color: 'text-accent'
    }
  ];

  const projectTypes = [
    'Custom Minecraft Mod',
    'Server Plugin',
    'AI Integration',
    'Development Tools',
    'Consulting',
    'Other'
  ];

  const nexAuthPlatforms = [
    {
      icon: Globe,
      title: 'Modrinth',
      description: 'Discover our mods',
      value: nexAuthLinks.modrinth,
      action: () => window.open(nexAuthLinks.modrinth, '_blank'),
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'View our repositories',
      value: nexAuthLinks.github,
      action: () => window.open(nexAuthLinks.github, '_blank'),
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Gamepad2,
      title: 'SpigotMC',
      description: 'Check our plugins',
      value: nexAuthLinks.spigotmc,
      action: () => window.open(nexAuthLinks.spigotmc, '_blank'),
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: MessageCircle,
      title: 'Discord',
      description: 'Join our community',
      value: nexAuthLinks.discord,
      action: () => window.open(nexAuthLinks.discord, '_blank'),
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to bring your Minecraft vision to life? Let's start the conversation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="glass-card hover-lift hover:glow-primary transition-all duration-300 cursor-pointer"
                  onClick={method.action}
                >
                  <CardContent className="p-6 text-center">
                    <method.icon className={`w-12 h-12 ${method.color} mx-auto mb-4 animate-float`} />
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                    <p className="text-sm text-primary font-mono">{method.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NexAuth Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">NexAuth</h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Connect with us across all major platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nexAuthPlatforms.map((platform, index) => (
                <Card
                  key={index}
                  className="glass-card hover-lift hover:glow-primary transition-all duration-300 cursor-pointer group"
                  onClick={platform.action}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${platform.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                      <platform.icon className={`w-8 h-8 ${platform.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{platform.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{platform.description}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-xs text-primary font-mono truncate max-w-[120px]">
                        {platform.value.replace('https://', '')}
                      </span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="glass-card inline-block">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">All platforms actively maintained</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Send us a message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 glass-card border-primary/30"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 glass-card border-primary/30"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="projectType" className="text-foreground">Project Type</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-2 glass-card border border-primary/30 rounded-lg bg-transparent text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a project type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type} className="bg-card text-card-foreground">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1 glass-card border-primary/30"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="mt-1 glass-card border-primary/30 resize-none"
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-glow text-primary-foreground py-3 glow-primary hover:glow-secondary transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Info */}
              <div className="space-y-8">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Why Choose XreatLabs?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Expert Team</h4>
                          <p className="text-sm text-muted-foreground">Years of Minecraft development experience</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">AI Integration</h4>
                          <p className="text-sm text-muted-foreground">Cutting-edge AI solutions for gaming</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">24/7 Support</h4>
                          <p className="text-sm text-muted-foreground">Ongoing support and maintenance</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Fast Delivery</h4>
                          <p className="text-sm text-muted-foreground">Quick turnaround without compromising quality</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Project Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Simple Plugin</span>
                        <span className="text-primary font-semibold">1-2 weeks</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Custom Mod</span>
                        <span className="text-primary font-semibold">3-6 weeks</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">AI Integration</span>
                        <span className="text-primary font-semibold">4-8 weeks</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Complex Project</span>
                        <span className="text-primary font-semibold">2-3 months</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-3 animate-float" />
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Global Team</h3>
                      <p className="text-sm text-muted-foreground">
                        Working with clients worldwide across all time zones
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary from 1-2 weeks for simple plugins to 2-3 months for complex AI integrations."
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes, we offer 24/7 support and maintenance packages for all our projects."
                },
                {
                  question: "Can you work with existing code?",
                  answer: "Absolutely! We can enhance, optimize, or integrate with your existing Minecraft projects."
                },
                {
                  question: "What's your refund policy?",
                  answer: "We offer a 30-day money-back guarantee if you're not satisfied with our work."
                }
              ].map((faq, index) => (
                <Card key={index} className="glass-card hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;