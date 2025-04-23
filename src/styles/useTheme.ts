import { theme, cssVariables } from './theme';

/**
 * useTheme Hook
 * 
 * A utility to access theme values throughout the application.
 * Provides type-safe access to theme properties.
 */
export const useTheme = () => {
  /**
   * Get a color value from the theme
   * @param path - Dot notation path to the color (e.g., 'primary.main', 'neutral.background')
   * @returns The color value or undefined if not found
   */
  const getColor = (path: string): string | undefined => {
    const parts = path.split('.');
    let result: any = theme.colors;
    
    for (const part of parts) {
      if (result && result[part] !== undefined) {
        result = result[part];
      } else {
        return undefined;
      }
    }
    
    return typeof result === 'string' ? result : undefined;
  };

  /**
   * Get a typography value from the theme
   * @param path - Dot notation path to the typography value (e.g., 'headings.h1.fontSize')
   * @returns The typography value or undefined if not found
   */
  const getTypography = (path: string): string | undefined => {
    const parts = path.split('.');
    let category = parts[0];
    let type = parts[1];
    let property = parts[2];
    
    if (theme.typography[category] && 
        theme.typography[category][type] && 
        theme.typography[category][type][property]) {
      return theme.typography[category][type][property];
    }
    
    return undefined;
  };

  /**
   * Get a spacing value from the theme
   * @param key - The spacing key (e.g., 4, 8)
   * @returns The spacing value or undefined if not found
   */
  const getSpacing = (key: number | string): string | undefined => {
    return theme.spacing[key];
  };

  /**
   * Get a border radius value from the theme
   * @param key - The border radius key (e.g., 'sm', 'lg')
   * @returns The border radius value or undefined if not found
   */
  const getBorderRadius = (key: string): string | undefined => {
    return theme.borderRadius[key];
  };

  /**
   * Get a transition value from the theme
   * @param category - The transition category ('duration' or 'timing')
   * @param key - The specific key within that category
   * @returns The transition value or undefined if not found
   */
  const getTransition = (category: 'duration' | 'timing', key: string): string | undefined => {
    return theme.transition[category][key];
  };

  /**
   * Apply theme as CSS variables to an element
   * @param element - The DOM element to apply variables to (defaults to document.documentElement)
   */
  const applyThemeToDOM = (element: HTMLElement = document.documentElement) => {
    Object.entries(cssVariables).forEach(([variable, value]) => {
      element.style.setProperty(variable, value);
    });
  };

  return {
    theme,
    cssVariables,
    getColor,
    getTypography,
    getSpacing,
    getBorderRadius,
    getTransition,
    applyThemeToDOM
  };
};

export default useTheme;
