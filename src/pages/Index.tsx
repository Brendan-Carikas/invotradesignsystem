import React from "react";
import AppShell from "@/components/layout/AppShell";
import { ComponentCard } from "@/components/ui/component-card";
import { 
  LayoutPanelTop,
  Layout,
  Package,
  AlertCircle,
  Heading,
  PanelTop,
  Grid,
  LineChart,
  FormInput,
  Bot
} from "lucide-react";

const Index = () => {
  const components = [
    {
      title: "Application Shells",
      description: "Complete application structures and layouts",
      icon: <LayoutPanelTop size={24} />,
      to: "/components/application-shells",
      status: "stable" as const,
    },
    {
      title: "Layout",
      description: "Components for organizing content on the page",
      icon: <Layout size={24} />,
      to: "/components/layout",
      status: "stable" as const,
    },
    {
      title: "Foundation",
      description: "Core UI elements and design fundamentals",
      icon: <Package size={24} />,
      to: "/components/foundation",
      status: "stable" as const,
    },
    {
      title: "Feedback",
      description: "Components for informing users about application status",
      icon: <AlertCircle size={24} />,
      to: "/components/feedback",
      status: "beta" as const,
    },
    {
      title: "Headings",
      description: "Typographic components for page titles and sections",
      icon: <Heading size={24} />,
      to: "/components/headings",
      status: "stable" as const,
    },
    {
      title: "Iconography",
      description: "Icon library and usage guidelines",
      icon: <Package size={24} />,
      to: "/components/iconography",
      status: "stable" as const,
    },
    {
      title: "Overlays",
      description: "Components that display over other content",
      icon: <PanelTop size={24} />,
      to: "/components/overlays",
      status: "beta" as const,
    },
    {
      title: "Grid Data Display",
      description: "Components for displaying tabular data",
      icon: <Grid size={24} />,
      to: "/components/grid-data-display",
      status: "beta" as const,
    },
    {
      title: "Data Visualization",
      description: "Charts, graphs, and other data visualization components",
      icon: <LineChart size={24} />,
      to: "/components/data-visualization",
      status: "experimental" as const,
    },
    {
      title: "Forms",
      description: "Input components for collecting user data",
      icon: <FormInput size={24} />,
      to: "/components/forms",
      status: "beta" as const,
    },
    {
      title: "Chatbot",
      description: "Interactive chat interfaces for user communication",
      icon: <Bot size={24} />,
      to: "/components/chatbot",
      status: "stable" as const,
    }
  ];

  return (
    <AppShell>
      <section className="mb-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Design System
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Beautiful UI Components
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A professionally designed component library with a dark theme and baby blue accents.
            Build beautiful interfaces with ease.
          </p>
        </div>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {components.map((component) => (
          <ComponentCard
            key={component.title}
            title={component.title}
            description={component.description}
            icon={component.icon}
            to={component.to}
            status={component.status}
          />
        ))}
      </div>
    </AppShell>
  );
};

export default Index;
