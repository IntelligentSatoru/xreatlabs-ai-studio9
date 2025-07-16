import { useState, useEffect } from 'react';
import { Github, Users, Calendar, MapPin, Code, Star, GitFork } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface GitHubProfile {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
  location: string;
  blog: string;
  company: string;
}

const About = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('https://api.github.com/users/xreatlabs');
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching GitHub profile:', error);
        // Fallback data
        setProfile({
          login: 'xreatlabs',
          name: 'XreatLabs',
          bio: 'Expert Minecraft coders and scripters crafting the future of gaming with AI-powered solutions',
          avatar_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
          followers: 150,
          following: 75,
          public_repos: 25,
          created_at: '2020-01-01T00:00:00Z',
          location: 'Global',
          blog: 'https://xreatlabs.com',
          company: 'XreatLabs'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const milestones = [
    {
      year: '2020',
      title: 'XreatLabs Founded',
      description: 'Started as a small team of passionate Minecraft developers',
      icon: '🚀'
    },
    {
      year: '2021',
      title: 'First Major Plugin',
      description: 'Released our breakthrough AI-powered chat plugin',
      icon: '🤖'
    },
    {
      year: '2022',
      title: 'Community Growth',
      description: 'Reached 10,000+ downloads across all our projects',
      icon: '📈'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Pioneered AI-powered Minecraft server management',
      icon: '🧠'
    },
    {
      year: '2024',
      title: 'Global Recognition',
      description: 'Featured in top Minecraft development communities',
      icon: '🌟'
    }
  ];

  const teamValues = [
    {
      icon: Code,
      title: 'Code Quality',
      description: 'We write clean, maintainable code that stands the test of time'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Everything we build is designed to enhance the player experience'
    },
    {
      icon: Star,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible in Minecraft'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Meet XreatLabs
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert Minecraft coders & scripters pushing the boundaries of gaming with AI
            </p>
          </div>
        </div>
      </section>

      {/* GitHub Profile Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6 animate-pulse">
                    <div className="w-24 h-24 bg-muted rounded-full"></div>
                    <div className="flex-1 space-y-4">
                      <div className="w-48 h-8 bg-muted rounded"></div>
                      <div className="w-96 h-6 bg-muted rounded"></div>
                      <div className="w-32 h-6 bg-muted rounded"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : profile ? (
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    <div className="relative">
                      <img
                        src={profile.avatar_url}
                        alt={profile.name}
                        className="w-32 h-32 rounded-full border-4 border-primary/30 animate-pulse-glow"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop';
                        }}
                      />
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Github className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-3xl font-bold mb-2 text-foreground">{profile.name}</h2>
                      <p className="text-muted-foreground mb-4 text-lg">{profile.bio}</p>
                      
                      <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                        {profile.location && (
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {profile.location}
                          </div>
                        )}
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          Joined {new Date(profile.created_at).getFullYear()}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{profile.public_repos}</div>
                          <div className="text-sm text-muted-foreground">Repositories</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{profile.followers}</div>
                          <div className="text-sm text-muted-foreground">Followers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{profile.following}</div>
                          <div className="text-sm text-muted-foreground">Following</div>
                        </div>
                      </div>

                      <Button
                        className="bg-primary hover:bg-primary-glow text-primary-foreground glow-primary"
                        onClick={() => window.open('https://github.com/xreatlabs', '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View GitHub Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                What drives us to create exceptional Minecraft experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamValues.map((value, index) => (
                <Card key={index} className="glass-card hover-lift hover:glow-primary transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <value.icon className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in our mission to transform Minecraft gaming
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="ml-16">
                      <Card className="glass-card hover-lift">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-2">
                            <span className="text-2xl mr-3">{milestone.icon}</span>
                            <div>
                              <span className="text-primary font-semibold">{milestone.year}</span>
                              <h3 className="text-xl font-semibold text-foreground">{milestone.title}</h3>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Want to Work With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our mission to push the boundaries of Minecraft gaming with AI-powered solutions
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg glow-primary hover:glow-secondary transition-all duration-300"
            onClick={() => window.location.href = '/contact'}
          >
            <Users className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;