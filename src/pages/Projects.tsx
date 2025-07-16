import { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink, Code, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/xreatlabs/repos?sort=updated&per_page=100');
        const data = await response.json();
        setRepos(data);
        setFilteredRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        // Fallback data
        const fallbackRepos = [
          {
            id: 1,
            name: 'ai-minecraft-plugin',
            description: 'Revolutionary AI-powered Minecraft plugin for intelligent server management',
            html_url: 'https://github.com/xreatlabs/ai-minecraft-plugin',
            stargazers_count: 127,
            forks_count: 23,
            language: 'Java',
            updated_at: '2024-01-15T10:30:00Z',
            topics: ['minecraft', 'ai', 'plugin', 'server']
          },
          {
            id: 2,
            name: 'smart-npc-system',
            description: 'Advanced NPC system with AI-driven conversations and dynamic behavior',
            html_url: 'https://github.com/xreatlabs/smart-npc-system',
            stargazers_count: 89,
            forks_count: 15,
            language: 'Java',
            updated_at: '2024-01-10T14:20:00Z',
            topics: ['minecraft', 'npc', 'ai', 'chat']
          },
          {
            id: 3,
            name: 'world-generation-tool',
            description: 'Procedural world generation tool with AI-enhanced terrain algorithms',
            html_url: 'https://github.com/xreatlabs/world-generation-tool',
            stargazers_count: 156,
            forks_count: 31,
            language: 'Python',
            updated_at: '2024-01-08T09:15:00Z',
            topics: ['minecraft', 'worldgen', 'procedural', 'tool']
          },
          {
            id: 4,
            name: 'server-analytics-dashboard',
            description: 'Real-time analytics dashboard for Minecraft server performance monitoring',
            html_url: 'https://github.com/xreatlabs/server-analytics-dashboard',
            stargazers_count: 67,
            forks_count: 12,
            language: 'TypeScript',
            updated_at: '2024-01-05T16:45:00Z',
            topics: ['minecraft', 'analytics', 'dashboard', 'monitoring']
          },
          {
            id: 5,
            name: 'mod-compatibility-checker',
            description: 'Automated tool to check mod compatibility and prevent conflicts',
            html_url: 'https://github.com/xreatlabs/mod-compatibility-checker',
            stargazers_count: 43,
            forks_count: 8,
            language: 'Java',
            updated_at: '2024-01-03T11:30:00Z',
            topics: ['minecraft', 'mod', 'compatibility', 'tool']
          },
          {
            id: 6,
            name: 'chatbot-integration',
            description: 'Seamless AI chatbot integration for Discord and Minecraft server communication',
            html_url: 'https://github.com/xreatlabs/chatbot-integration',
            stargazers_count: 78,
            forks_count: 19,
            language: 'JavaScript',
            updated_at: '2024-01-01T08:00:00Z',
            topics: ['discord', 'minecraft', 'chatbot', 'ai']
          }
        ];
        setRepos(fallbackRepos);
        setFilteredRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    let filtered = repos;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(repo => {
        const topics = repo.topics.join(' ').toLowerCase();
        switch (selectedType) {
          case 'mods':
            return topics.includes('mod') || topics.includes('plugin');
          case 'tools':
            return topics.includes('tool') || topics.includes('utility');
          case 'ai':
            return topics.includes('ai') || topics.includes('chatbot');
          default:
            return true;
        }
      });
    }

    setFilteredRepos(filtered);
  }, [searchTerm, selectedType, repos]);

  const projectTypes = [
    { value: 'all', label: 'All Projects' },
    { value: 'mods', label: 'Our Projects & Plugins' },
    { value: 'tools', label: 'Tools & Utilities' },
    { value: 'ai', label: 'AI & Chatbots' }
  ];

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'Java': 'bg-orange-500',
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-500',
      'Python': 'bg-green-500',
      'C++': 'bg-purple-500',
      'C#': 'bg-indigo-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our collection of innovative Minecraft projects, plugins, and development tools
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass-card border-primary/30"
                />
              </div>
              <div className="flex gap-2">
                {projectTypes.map((type) => (
                  <Button
                    key={type.value}
                    variant={selectedType === type.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type.value)}
                    className={selectedType === type.value ? "bg-primary text-primary-foreground" : "glass-button border-primary/30"}
                  >
                    {type.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="glass-card animate-pulse">
                    <CardHeader>
                      <div className="w-3/4 h-6 bg-muted rounded mb-2"></div>
                      <div className="w-full h-16 bg-muted rounded"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="w-20 h-4 bg-muted rounded"></div>
                        <div className="w-16 h-4 bg-muted rounded"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : filteredRepos.length === 0 ? (
              <div className="text-center py-20">
                <Code className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRepos.map((repo) => (
                  <Card
                    key={repo.id}
                    className="glass-card hover-lift hover:glow-primary transition-all duration-300 group"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                            {repo.name}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                            {repo.description}
                          </p>
                        </div>
                        <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Language and Stats */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            {repo.language && (
                              <div className="flex items-center space-x-1">
                                <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                                <span className="text-sm text-muted-foreground">{repo.language}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm text-muted-foreground">{repo.stargazers_count}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <GitFork className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{repo.forks_count}</span>
                            </div>
                          </div>
                        </div>

                        {/* Topics */}
                        {repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {repo.topics.slice(0, 3).map((topic, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                            {repo.topics.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{repo.topics.length - 3}
                              </Badge>
                            )}
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 glass-button border-primary/30 hover:glow-primary"
                            onClick={() => window.open(repo.html_url, '_blank')}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="glass-button border-primary/30 hover:glow-secondary"
                            onClick={() => window.open(`${repo.html_url}/releases`, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Last Updated */}
                        <div className="text-xs text-muted-foreground">
                          Updated {new Date(repo.updated_at).toLocaleDateString()}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Have a Project Idea?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your Minecraft vision to life with our expertise
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg glow-primary hover:glow-secondary transition-all duration-300"
            onClick={() => window.location.href = '/contact'}
          >
            <Code className="w-5 h-5 mr-2" />
            Start a Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;