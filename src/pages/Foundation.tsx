
import React from "react";
import AppShell from "@/components/layout/AppShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const Foundation = () => {
  // Define colors based on MUI theme fundamentals
  const primaryColors = [
    { name: "primary", hex: "#4287f5", label: "Primary", className: "bg-primary" },
    { name: "primary-light", hex: "#69a9ff", label: "Light", className: "bg-primary/80" },
    { name: "primary-dark", hex: "#2b5cb2", label: "Dark", className: "bg-primary/120" },
  ];

  const secondaryColors = [
    { name: "secondary", hex: "#6c757d", label: "Secondary", className: "bg-secondary" },
    { name: "secondary-light", hex: "#8d959c", label: "Light", className: "bg-secondary/80" },
    { name: "secondary-dark", hex: "#4e555b", label: "Dark", className: "bg-secondary/120" },
  ];

  const neutralColors = [
    { name: "background", hex: "#ffffff", label: "Background", className: "bg-background border border-border" },
    { name: "foreground", hex: "#111827", label: "Foreground", className: "bg-foreground" },
    { name: "muted", hex: "#f8f9fa", label: "Muted", className: "bg-muted" },
    { name: "muted-foreground", hex: "#6c757d", label: "Muted Foreground", className: "bg-muted-foreground" },
    { name: "card", hex: "#ffffff", label: "Card", className: "bg-card border border-border" },
    { name: "card-foreground", hex: "#111827", label: "Card Foreground", className: "bg-card-foreground" },
  ];

  const stateColors = [
    { name: "destructive", hex: "#dc3545", label: "Destructive", className: "bg-destructive" },
    { name: "destructive-foreground", hex: "#ffffff", label: "Destructive Foreground", className: "bg-destructive-foreground border border-border" },
    { name: "accent", hex: "#f1f5f9", label: "Accent", className: "bg-accent" },
    { name: "accent-foreground", hex: "#0f172a", label: "Accent Foreground", className: "bg-accent-foreground" },
    { name: "border", hex: "#e9ecef", label: "Border", className: "bg-border" },
    { name: "input", hex: "#e9ecef", label: "Input", className: "bg-input" },
    { name: "ring", hex: "#4287f5", label: "Ring", className: "bg-ring" },
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

  // Elevation values (shadows)
  const elevations = [
    { level: 0, className: "shadow-none" },
    { level: 1, className: "shadow-sm" },
    { level: 2, className: "shadow" },
    { level: 3, className: "shadow-md" },
    { level: 4, className: "shadow-lg" },
    { level: 6, className: "shadow-xl" },
    { level: 8, className: "shadow-2xl" },
    { level: 12, className: "shadow-2xl shadow-gray-400/20" },
    { level: 16, className: "shadow-2xl shadow-gray-400/40" },
    { level: 24, className: "shadow-2xl shadow-gray-500/50" },
  ];

  const ColorPalette = ({ colors, title }) => (
    <div className="space-y-3">
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {colors.map((color) => (
          <div key={color.name} className="flex flex-col">
            <div
              className={cn(
                "h-16 rounded-md",
                color.className
              )}
            />
            <div className="mt-1.5">
              <p className="font-medium">{color.label}</p>
              <p className="text-sm text-muted-foreground">{color.name}</p>
              <p className="text-xs text-muted-foreground">{color.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

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
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <AppShell>
      <section className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Foundation</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Core UI elements and design fundamentals based on Material UI principles
        </p>
      </section>

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
