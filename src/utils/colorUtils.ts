/**
 * Color Utilities
 * 
 * Helper functions for color conversion and manipulation
 */

/**
 * Convert a hex color to HSL format
 * @param hex - Hex color code (e.g., "#ff0000")
 * @returns HSL color string in the format "hue saturation% lightness%"
 */
export function hexToHSL(hex: string): string {
  // Remove the # if present
  hex = hex.replace(/^#/, '');
  
  // Parse the hex values
  let r = 0, g = 0, b = 0;
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }
  
  // Convert RGB to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    
    h /= 6;
  }
  
  // Format the HSL values
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  
  return `${h} ${s}% ${l}%`;
}

/**
 * Convert HSL color to hex format
 * @param hsl - HSL color string (e.g., "120 100% 50%")
 * @returns Hex color code
 */
export function hslToHex(hsl: string): string {
  // Parse the HSL values
  const [h, s, l] = hsl.split(' ').map((val, index) => {
    if (index === 0) return parseInt(val) / 360;
    return parseInt(val.replace('%', '')) / 100;
  });
  
  // Convert HSL to RGB
  let r, g, b;
  
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  
  // Convert RGB to hex
  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Generate CSS variables from a theme object
 * @param theme - The theme object
 * @returns Object with CSS variable mappings
 */
export function generateCSSVariables(theme: any) {
  // We don't need to generate CSS variables dynamically anymore
  // as they are defined in index.css for both light and dark modes
  // This function is kept for backward compatibility
  return {};
}

/**
 * Get the appropriate color value based on the current theme mode
 * @param lightColor - Color value for light mode
 * @param darkColor - Color value for dark mode
 * @returns The appropriate color based on the current theme
 */
export function getThemeAwareColor(lightColor: string, darkColor: string): string {
  // Check if dark mode is active
  const isDarkMode = document.documentElement.classList.contains('dark');
  return isDarkMode ? darkColor : lightColor;
}
