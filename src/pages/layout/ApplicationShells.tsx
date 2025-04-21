
import React from "react";
import AppShell from "@/components/layout/AppShell";
import { ComponentCard } from "@/components/ui/component-card";
import { Sidebar } from "lucide-react";

const ApplicationShells = () => {
  const shells = [
    {
      title: "Vertical Shell",
      description: "A vertical application shell with sidebar navigation",
      icon: <Sidebar className="h-5 w-5" />,
      to: "/components/application-shells/vertical",
    }
  ];

  return (
    <AppShell>
      <section className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Application Shells</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Application shells that provide structure and navigation for your application.
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shells.map((shell) => (
          <ComponentCard
            key={shell.title}
            title={shell.title}
            description={shell.description}
            icon={shell.icon}
            to={shell.to}
          />
        ))}
      </div>
    </AppShell>
  );
};

export default ApplicationShells;
