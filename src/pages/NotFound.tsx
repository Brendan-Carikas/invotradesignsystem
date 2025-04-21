
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-foreground">
      <div className="mx-auto w-full max-w-md text-center">
        <div className="mb-6 rounded-full bg-primary/10 p-6 inline-flex">
          <p className="text-6xl font-bold text-primary">404</p>
        </div>
        <h1 className="mb-2 text-3xl font-bold">Page not found</h1>
        <p className="mb-6 text-muted-foreground">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Button asChild className="inline-flex items-center gap-2">
          <Link to="/">
            <Home size={16} />
            <span>Back to home</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
