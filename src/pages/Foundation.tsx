import React from "react";
import AppShell from "../components/layout/AppShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { theme } from "../styles/theme";
import { cn } from "../lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { getThemeAwareColor } from "../utils/colorUtils";
import TitleDescription from "../components/TitleDescription";
import { Separator } from "../components/ui/separator";
import { useTheme } from "../contexts/ThemeContext";

const Foundation = () => {
  // Get the current theme mode
  const { isDarkMode } = useTheme();
  
  // Define colors based on theme values with HEX format only
  const primaryColors = [
    { name: "primary", hex: theme.colors.primary.main, className: "bg-primary" },
    { name: "primary-light", hex: theme.colors.primary.light, className: "bg-primary/80" },
  ];

  const secondaryColors = [
    { name: "secondary", hex: theme.colors.secondary.main, className: "bg-secondary" },
    { name: "secondary-light", hex: theme.colors.secondary.light, className: "bg-secondary/80" },
  ];

  const neutralColors = [
    { name: "background", hex: theme.colors.neutral.background, className: "bg-background border border-border" },
    { name: "muted", hex: theme.colors.neutral.muted, className: "bg-muted" },
    { name: "card", hex: theme.colors.neutral.card, className: "bg-card border border-border" },
  ];

  // State colors based on MUI Alert variants
  // https://mui.com/material-ui/react-alert/#variants
  const stateColors = [
    { name: "info", hex: theme.colors.state.info, className: "bg-info" },
    { name: "error", hex: theme.colors.state.error, className: "bg-error" },
    { name: "warning", hex: theme.colors.state.warning, className: "bg-warning" },
    { name: "success", hex: theme.colors.state.success, className: "bg-success" },
  ];

  // Typography scale
  const typographyHeadings = [
    { name: "h1", label: "Heading 1", className: "text-4xl font-bold" },
    { name: "h2", label: "Heading 2", className: "text-3xl font-bold" },
    { name: "h3", label: "Heading 3", className: "text-2xl font-bold" },
    { name: "h4", label: "Heading 4", className: "text-xl font-bold" },
    { name: "h5", label: "Heading 5", className: "text-lg font-bold" },
    { name: "h6", label: "Heading 6", className: "text-base font-bold" },
  ];

  const typographySubtitles = [
    { name: "subtitle1", label: "Subtitle 1", className: "text-lg font-medium" },
    { name: "subtitle2", label: "Subtitle 2", className: "text-base font-medium" },
  ];

  const typographyBody = [
    { name: "body1", label: "Body 1", className: "text-base" },
    { name: "body2", label: "Body 2", className: "text-sm" },
    { name: "caption", label: "Caption", className: "text-xs" },
    { name: "overline", label: "Overline", className: "text-xs uppercase tracking-wider" },
  ];

  // Elevation values (shadows) based on Material UI Paper elevation
  // https://mui.com/material-ui/react-paper/#elevation
  const elevations = [
    { 
      level: 0, 
      className: "shadow-none",
      muiStyle: "none"
    },
    { 
      level: 1, 
      className: "shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]",
      muiStyle: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    },
    { 
      level: 2, 
      className: "shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]",
      muiStyle: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
    },
    { 
      level: 3, 
      className: "shadow-[0px_3px_3px_-2px_rgba(0,0,0,0.2),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_1px_8px_0px_rgba(0,0,0,0.12)]",
      muiStyle: "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)"
    },
    { 
      level: 4, 
      className: "shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.2),0px_4px_5px_0px_rgba(0,0,0,0.14),0px_1px_10px_0px_rgba(0,0,0,0.12)]",
      muiStyle: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
    },
    { 
      level: 6, 
      className: "shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.2),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_1px_18px_0px_rgba(0,0,0,0.12)]",
      muiStyle: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
    },
    { 
      level: 8, 
      className: "shadow-[0px_5px_5px_-3px_rgba(0,0,0,0.2),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_3px_14px_2px_rgba(0,0,0,0.12)]",
      muiStyle: "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)"
    },
    { 
      level: 12, 
      className: "shadow-[0px_7px_8px_-4px_rgba(0,0,0,0.2),0px_12px_17px_2px_rgba(0,0,0,0.14),0px_5px_22px_4px_rgba(0,0,0,0.12)]",
      muiStyle: "0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)"
    },
    { 
      level: 16, 
      className: "shadow-[0px_8px_10px_-5px_rgba(0,0,0,0.2),0px_16px_24px_2px_rgba(0,0,0,0.14),0px_6px_30px_5px_rgba(0,0,0,0.12)]",
      muiStyle: "0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)"
    },
    { 
      level: 24, 
      className: "shadow-[0px_11px_15px_-7px_rgba(0,0,0,0.2),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_9px_46px_8px_rgba(0,0,0,0.12)]",
      muiStyle: "0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)"
    },
  ];

  const ColorPalette = ({ colors, title }) => {
    return (
      <div className="space-y-3">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {colors.map((color) => {
            // Determine the correct color value based on theme mode
            const hexValue = isDarkMode && color.name === 'primary' ? '#ffffff' : color.hex;
            
            return (
              <div key={color.name} className="flex flex-col">
                <div
                  className={cn(
                    "h-16 rounded-md",
                    color.className
                  )}
                />
                <div className="mt-1.5">
                  <p className="font-medium">{color.name}</p>
                  <p className="text-xs text-muted-foreground">HEX: {hexValue}</p>
                  <p className="text-xs text-muted-foreground font-medium">{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const TypographyDisplay = ({ items, title }) => (
    <div className="space-y-3">
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b pb-2">
            <div className={cn(item.className)}>The quick brown fox jumps over the lazy dog</div>
            <div className="text-sm text-muted-foreground md:min-w-[150px] md:text-right">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const ElevationDisplay = () => (
    <div className="space-y-3">
      <h3 className="text-lg font-medium">Elevation (0-24)</h3>
      <p className="text-sm text-muted-foreground mb-4">Based on Material UI Paper elevation</p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {elevations.map((elevation) => (
          <div key={elevation.level} className="flex flex-col items-center">
            <div
              className={cn(
                "flex h-16 w-16 items-center justify-center rounded-md bg-card",
                elevation.className
              )}
            >
              {elevation.level}
            </div>
            <p className="mt-1.5 text-sm text-muted-foreground">Elevation {elevation.level}</p>
            {elevation.level > 0 && (
              <div className="mt-1 text-xs text-muted-foreground hidden md:block">
                <span className="opacity-70 hover:opacity-100 cursor-help transition-opacity" title={elevation.muiStyle}>MUI shadow</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <AppShell>
      <TitleDescription 
        title="Foundation"
        description="Core UI elements and design fundamentals based on Material UI principles"
        titleSize="h1"
      />

      <div className="space-y-10">
        <Card>
          <CardHeader>
            <CardTitle>Color System</CardTitle>
            <CardDescription>
              The color system helps create meaningful and consistent UI by providing a structured approach to applying color.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <ColorPalette colors={primaryColors} title="Primary Colors" />
            <Separator />
            <ColorPalette colors={secondaryColors} title="Secondary Colors" />
            <Separator />
            <ColorPalette colors={neutralColors} title="Neutral Colors" />
            <Separator />
            <ColorPalette colors={stateColors} title="State Colors" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>
              A systematic way of organizing and styling text to make content readable, accessible, and visually cohesive.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <TypographyDisplay items={typographyHeadings} title="Headings" />
            <Separator />
            <TypographyDisplay items={typographySubtitles} title="Subtitles" />
            <Separator />
            <TypographyDisplay items={typographyBody} title="Body Text, Caption & Overline" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Elevation</CardTitle>
            <CardDescription>
              The elevation system uses shadows to indicate the distance between surfaces. Higher elevation numbers indicate a greater distance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ElevationDisplay />
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
};

export default Foundation;
