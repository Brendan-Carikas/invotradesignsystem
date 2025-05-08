import { generateCSSVariables } from '../utils/colorUtils';

/**
 * Theme Configuration
 * 
 * This file defines the design tokens and styles based on the Foundation components.
 * It provides a centralized place for managing colors, typography, and other design variables.
 */

/**
 * Helper function to ensure text follows Sentence case convention
 * Capitalizes only the first letter of the string and keeps the rest lowercase
 * Example: "create new project" becomes "Create new project"
 */
export const toSentenceCase = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const theme = {
  /**
   * Color System
   * Organized by primary, secondary, neutral, and state colors
   */
  colors: {
    // Primary Colors
    primary: {
      main: "#0e092e",  // Updated primary color
      light: "#2d2660",
      dark: "#07051a",
    },
    
    // Secondary Colors
    secondary: {
      main: "#6c757d",
      light: "#8d959c",
      dark: "#4e555b",
    },
    
    // Neutral Colors
    neutral: {
      background: "#ffffff",
      muted: "#f8f9fa",
      card: "#ffffff",
    },
    
    // State Colors based on MUI Alert variants
    // https://mui.com/material-ui/react-alert/#variants
    state: {
      info: "#0288d1",
      error: "#d32f2f",
      warning: "#ed6c02",
      success: "#2e7d32",
    },
  },
  
  /**
   * Typography System
   * Defines text styles for headings, subtitles, and body text
   * 
   * Text Casing Rule: Use Sentence case (not Title Case) for buttons, titles, and headings
   * Example: "Create new project" instead of "Create New Project"
   */
  typography: {
    // Headings
    headings: {
      h1: {
        fontSize: "2.25rem", // text-4xl
        fontWeight: "700", // font-bold
        lineHeight: "1.2",
      },
      h2: {
        fontSize: "1.875rem", // text-3xl
        fontWeight: "700", // font-bold
        lineHeight: "1.2",
      },
      h3: {
        fontSize: "1.5rem", // text-2xl
        fontWeight: "700", // font-bold
        lineHeight: "1.2",
      },
      h4: {
        fontSize: "1.25rem", // text-xl
        fontWeight: "700", // font-bold
        lineHeight: "1.2",
      },
      h5: {
        fontSize: "1.125rem", // text-lg
        fontWeight: "700", // font-bold
        lineHeight: "1.2",
      },
      h6: {
        fontSize: "1rem", // text-base
        fontWeight: "700", // font-bold
        lineHeight: "1.2",
      },
    },
    
    // Subtitles
    subtitles: {
      subtitle1: {
        fontSize: "1.125rem", // text-lg
        fontWeight: "500", // font-medium
        lineHeight: "1.5",
      },
      subtitle2: {
        fontSize: "1rem", // text-base
        fontWeight: "500", // font-medium
        lineHeight: "1.5",
      },
    },
    
    // Body Text
    body: {
      body1: {
        fontSize: "1rem", // text-base
        fontWeight: "400", // normal
        lineHeight: "1.5",
      },
      body2: {
        fontSize: "0.875rem", // text-sm
        fontWeight: "400", // normal
        lineHeight: "1.5",
      },
      caption: {
        fontSize: "0.75rem", // text-xs
        fontWeight: "400", // normal
        lineHeight: "1.5",
      },
      overline: {
        fontSize: "0.75rem", // text-xs
        fontWeight: "400", // normal
        lineHeight: "1.5",
        textTransform: "uppercase",
        letterSpacing: "0.05em", // tracking-wider
      },
    },
  },
  
  /**
   * Spacing System
   * Based on a 4px grid system (0.25rem increments)
   */
  spacing: {
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem",  // 8px
    3: "0.75rem", // 12px
    4: "1rem",    // 16px
    5: "1.25rem", // 20px
    6: "1.5rem",  // 24px
    8: "2rem",    // 32px
    10: "2.5rem", // 40px
    12: "3rem",   // 48px
    16: "4rem",   // 64px
    20: "5rem",   // 80px
    24: "6rem",   // 96px
  },
  
  /**
   * Border Radius
   * Consistent rounding for UI elements
   */
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    DEFAULT: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },
  
  /**
   * Transition
   * Standard animation durations and easing functions
   */
  /**
   * Text Casing
   * Defines the casing rules for text elements
   */
  textCase: {
    button: 'sentence',  // Use Sentence case for buttons
    heading: 'sentence', // Use Sentence case for headings
    title: 'sentence',   // Use Sentence case for titles
  },
  
  transition: {
    duration: {
      fast: "150ms",
      normal: "250ms",
      slow: "350ms",
    },
    timing: {
      ease: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeOut: "cubic-bezier(0, 0, 0.2, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
};

/**
 * CSS Variables Map
 * Maps theme tokens to CSS variables for use in styled components or CSS
 * Automatically generates both HEX and HSL formats from the theme colors
 */
export const cssVariables = {
  ...generateCSSVariables(theme),
  
  // Typography
  "--font-size-h1": theme.typography.headings.h1.fontSize,
  "--font-size-h2": theme.typography.headings.h2.fontSize,
  "--font-size-h3": theme.typography.headings.h3.fontSize,
  "--font-size-h4": theme.typography.headings.h4.fontSize,
  "--font-size-h5": theme.typography.headings.h5.fontSize,
  "--font-size-h6": theme.typography.headings.h6.fontSize,
  
  "--font-size-subtitle1": theme.typography.subtitles.subtitle1.fontSize,
  "--font-size-subtitle2": theme.typography.subtitles.subtitle2.fontSize,
  
  "--font-size-body1": theme.typography.body.body1.fontSize,
  "--font-size-body2": theme.typography.body.body2.fontSize,
  "--font-size-caption": theme.typography.body.caption.fontSize,
  "--font-size-overline": theme.typography.body.overline.fontSize,
};

export default theme;
