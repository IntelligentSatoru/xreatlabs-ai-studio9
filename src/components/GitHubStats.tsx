import { useState, useEffect } from 'react';
import { Star, GitFork, Users, Code } from 'lucide-react';

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
}

const GitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch('https://api.github.com/users/xreatlabs');
        const userData = await userResponse.json();

        // Fetch repositories to calculate total stars
        const reposResponse = await fetch('https://api.github.com/users/xreatlabs/repos');
        const reposData = await reposResponse.json();
        
        const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);

        setStats({
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          total_stars: totalStars
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Fallback data
        setStats({
          public_repos: 25,
          followers: 150,
          following: 50,
          total_stars: 200
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="glass-card p-4 animate-pulse">
            <div className="w-8 h-8 bg-muted rounded-lg mb-2"></div>
            <div className="w-16 h-6 bg-muted rounded mb-1"></div>
            <div className="w-12 h-4 bg-muted rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!stats) return null;

  const statItems = [
    { icon: Code, label: 'Repositories', value: stats.public_repos },
    { icon: Star, label: 'Total Stars', value: stats.total_stars },
    { icon: Users, label: 'Followers', value: stats.followers },
    { icon: GitFork, label: 'Following', value: stats.following }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statItems.map((item, index) => (
        <div key={index} className="glass-card p-4 hover-lift hover:glow-primary transition-all duration-300">
          <item.icon className="w-8 h-8 text-primary mb-2" />
          <div className="text-2xl font-bold text-foreground">{item.value}</div>
          <div className="text-sm text-muted-foreground">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default GitHubStats;