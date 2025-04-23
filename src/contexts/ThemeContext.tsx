
import React, { createContext, useContext, useEffect, useState } from "react";
import { theme as designTokens, cssVariables } from "../styles/theme";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  theme: typeof designTokens;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Check if theme preference is stored in localStorage
    const savedTheme = localStorage.getItem("theme") as ThemeMode;
    // If not in localStorage, use system preference or fallback to dark
    return savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  useEffect(() => {
    // Add or remove the "dark" class on the document element
    const root = window.document.documentElement;
    
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    // Apply theme CSS variables to the document root
    // We don't need to manually set CSS variables here since they're defined in index.css
    // and will be applied automatically based on the dark class
    
    // Store the current theme preference in localStorage
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  // Provide the theme context with both the mode and the design tokens
  const themeContext = {
    mode,
    toggleTheme,
    theme: designTokens,
    isDarkMode: mode === "dark"
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
