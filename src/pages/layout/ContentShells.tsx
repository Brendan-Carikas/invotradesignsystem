
import React from "react";
import AppShell from "@/components/layout/AppShell";
import { ComponentCard } from "@/components/ui/component-card";
import TitleDescription from "@/components/TitleDescription";
import {
  Calendar,
  FileText,
  Receipt,
  Briefcase,
  Mail,
  MessageSquare,
  Package,
  Grid3x3,
  ShoppingBag,
  ListTodo,
  UserRound,
  LayoutDashboard
} from "lucide-react";

const ContentShells = () => {
  const shells = [
    {
      title: "Calendar",
      description: "An interactive interface for event tracking and scheduling.",
      icon: <Calendar size={24} />,
      to: "/components/layout/shells/calendar",
      status: "beta" as const,
    },
    {
      title: "Dashboard",
      description: "A metrics dashboard for monitoring chatbot AI assistant data.",
      icon: <LayoutDashboard size={24} />,
      to: "/components/layout/shells/dashboard",
    },
    {
      title: "File Manager",
      description: "A system for organizing and accessing documents efficiently.",
      icon: <FileText size={24} />,
      to: "/components/layout/shells/file-manager",
      status: "beta" as const,
    },
    {
      title: "Invoice Details",
      description: "A layout to display comprehensive billing information.",
      icon: <Receipt size={24} />,
      to: "/components/layout/shells/invoice-details",
      status: "beta" as const,
    },
    {
      title: "Jobs Platform",
      description: "A framework for job listings and recruitment processes.",
      icon: <Briefcase size={24} />,
      to: "/components/layout/shells/jobs-platform",
      status: "beta" as const,
    },
    {
      title: "Mailbox",
      description: "An email interface for managing messages.",
      icon: <Mail size={24} />,
      to: "/components/layout/shells/mailbox",
      status: "beta" as const,
    },
    {
      title: "Messenger",
      description: "A real-time communication tool for instant messaging.",
      icon: <MessageSquare size={24} />,
      to: "/components/layout/shells/messenger",
      status: "beta" as const,
    },
    {
      title: "Product Details",
      description: "A detailed presentation layout for product features and specifications.",
      icon: <Package size={24} />,
      to: "/components/layout/shells/product-details",
      status: "beta" as const,
    },
    {
      title: "Projects Board",
      description: "A project management tool for tracking progress and collaboration.",
      icon: <Grid3x3 size={24} />,
      to: "/components/layout/shells/projects-board",
      status: "beta" as const,
    },
    {
      title: "Storefront",
      description: "An e-commerce layout for showcasing products and services.",
      icon: <ShoppingBag size={24} />,
      to: "/components/layout/shells/storefront",
      status: "beta" as const,
    },
    {
      title: "Tasks",
      description: "A task manager for creating, organizing, and tracking to-dos.",
      icon: <ListTodo size={24} />,
      to: "/components/layout/shells/tasks",
      status: "beta" as const,
    },
    {
      title: "User Profile",
      description: "A layout for displaying individual user information and settings",
      icon: <UserRound className="h-5 w-5" />,
      to: "/components/layout/shells/user-profile",
    }
  ];

  return (
    <AppShell>
      <TitleDescription
        title="Content Shells"
        description="A collection of pre-built layout templates for common application interfaces."
        titleSize="h1"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shells.map((shell) => (
          <ComponentCard
            key={shell.title}
            title={shell.title}
            description={shell.description}
            icon={shell.icon}
            to={shell.to}
            status={shell.status}
          />
        ))}
      </div>
    </AppShell>
  );
};

export default ContentShells;
