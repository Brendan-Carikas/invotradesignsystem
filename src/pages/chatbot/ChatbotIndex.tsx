import React from "react";
import AppShell from "@/components/layout/AppShell";
import TitleDescription from "@/components/TitleDescription";
import { ComponentCard } from "@/components/ui/component-card";
import { Bot, Layers, MessageSquare, Lightbulb, ThumbsUp } from "lucide-react";

const ChatbotIndex = () => {
  const chatbotComponents = [
    {
      title: "Basic Chatbot Interface",
      description: "A simple, interactive chatbot component with message history and suggestions.",
      icon: <Bot className="h-5 w-5" />,
      to: "/pages/chatbot/basic",
      status: "stable" as const,
    },
    {
      title: "Chatbot Variants",
      description: "Different styles and configurations of the chatbot component for various use cases.",
      icon: <Layers className="h-5 w-5" />,
      to: "/pages/chatbot/variants",
      status: "stable" as const,
    },
    {
      title: "Chatbot Suggestions",
      description: "Explore different types of chatbot suggestions to enhance user experience.",
      icon: <Lightbulb className="h-5 w-5" />,
      to: "/pages/chatbot/suggestions",
      status: "stable" as const,
    },
    {
      title: "Chatbot Feedback",
      description: "Different feedback mechanisms to improve chatbot interactions.",
      icon: <ThumbsUp className="h-5 w-5" />,
      to: "/pages/chatbot/feedback",
      status: "stable" as const,
    }
  ];

  return (
    <AppShell>
      <TitleDescription
        title="Chatbot Components"
        description="Interactive chat interfaces for user communication and assistance."
        titleSize="h1"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {chatbotComponents.map((component) => (
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

export default ChatbotIndex;
