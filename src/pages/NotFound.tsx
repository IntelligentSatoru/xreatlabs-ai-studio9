import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
            <span className="text-4xl font-bold text-primary-foreground">404</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 gradient-text">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist in our codebase
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-glow text-primary-foreground rounded-lg transition-all duration-300 glow-primary hover:glow-secondary"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
