import React from "react";
import AppShell from "@/components/layout/AppShell";
import { ComponentCard } from "@/components/ui/component-card";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { 
  FileText,
  Book,
  Library,
  Bot,
  MessageSquare,
  Users,
  Brain,
  Sparkles
} from "lucide-react";

const ConversationalIndex = () => {
  const { userRole } = useAuth();
  
  // Redirect non-conversational users away from this page
  if (userRole !== 'conversational') {
    return <Navigate to="/home" replace />;
  }

  const components = [
    {
      title: "Conversational design fundamentals",
      description: "Core principles and guidelines for effective conversational experiences",
      icon: <FileText size={24} />,
      to: "/knowledge/conversational-design",
      status: "stable" as const,
    },
    {
      title: "Playbooks",
      description: "Practical guides and templates for conversational scenarios",
      icon: <Book size={24} />,
      to: "/knowledge/playbooks",
      status: "stable" as const,
    },
    {
      title: "Resources",
      description: "Curated collection of tools, articles, and examples",
      icon: <Library size={24} />,
      to: "/knowledge/resources",
      status: "stable" as const,
    },
    {
      title: "Chatbot components",
      description: "Interactive chat interfaces for user communication",
      icon: <Bot size={24} />,
      to: "/components/chatbot",
      status: "stable" as const,
    },
    {
      title: "Conversation patterns",
      description: "Reusable conversation flows for different scenarios",
      icon: <MessageSquare size={24} />,
      to: "/knowledge/conversational-design?tab=patterns",
      status: "stable" as const,
    },
    {
      title: "User personas",
      description: "Understanding different user types and their needs",
      icon: <Users size={24} />,
      to: "/knowledge/conversational-design?tab=personas",
      status: "stable" as const,
    },
    {
      title: "AI guidelines",
      description: "Best practices for designing with AI-powered systems",
      icon: <Sparkles size={24} />,
      to: "/knowledge/conversational-design?tab=ai",
      status: "stable" as const,
    },
    {
      title: "Prompt engineering",
      description: "Techniques for creating effective AI prompts",
      icon: <Brain size={24} />,
      to: "/knowledge/conversational-design?tab=ai",
      status: "stable" as const,
    }
  ];

  return (
    <AppShell>
      <section className="mb-12">
        <div className="mx-auto max-w-4xl text-center">
          
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Conversational interface design
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive resource for designing effective, human-centered conversational experiences.
            Access guides, templates, and best practices for creating engaging conversations.
          </p>
        </div>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {components
          .map((component) => (
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

export default ConversationalIndex;
