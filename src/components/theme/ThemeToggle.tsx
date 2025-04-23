
import { Button } from "../ui/button";
import { useTheme } from "../../contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { cn } from "../../lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { mode, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={cn("rounded-full", className)}
      aria-label="Toggle theme"
    >
      {mode === "dark" ? (
        <Sun className="h-5 w-5 text-primary transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
