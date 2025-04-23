import React from "react";
import AppShell from "@/components/layout/AppShell";
import TitleDescription from "@/components/TitleDescription";
import FunctionalChatbot from "@/components/chatbot/FunctionalChatbot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define the types needed for the chat messages
type MessageRole = "user" | "bot";

interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

const BasicChatbotInterface: React.FC = () => {
  // Create initial messages for the chatbot
  const initialMessages: ChatMessage[] = [
    {
      id: "init-1",
      role: "bot",
      content: "Hello! I'm DesignBot, your design system assistant. How can I help you today?",
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
    },
    {
      id: "init-2",
      role: "user",
      content: "Hi! I'd like to learn about this design system.",
      timestamp: new Date(Date.now() - 60000), // 1 minute ago
    },
    {
      id: "init-3",
      role: "bot",
      content: "Great! This design system provides a collection of reusable components for building consistent user interfaces. It includes elements like buttons, cards, typography, and more, all with a consistent visual language. Feel free to ask about any specific component you're interested in!",
      timestamp: new Date(Date.now() - 30000), // 30 seconds ago
    },
  ];
  
  return (
    <AppShell>
      <TitleDescription
        title="Basic Chatbot Interface"
        description="A simple, interactive chatbot component with message history and suggestions."
        titleSize="h1"
      />
      
      <div className="space-y-10">
        <Card>
          <CardHeader>
            <CardTitle>Basic Chatbot Example</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-muted-foreground">
              This is a basic implementation of the chatbot component with standard features including message history, typing indicators, and suggestion chips.
            </p>
            <div className="mt-8">
              <FunctionalChatbot
                botName="DesignBot"
                botAvatar={"/designbot-avatar.png"}
                userAvatar={"/user-avatar.png"}
                initialMessages={initialMessages}
                initialSuggestions={[
                  { id: "s1", text: "What can you do?" },
                  { id: "s2", text: "Tell me about this design system" },
                  { id: "s3", text: "Show me available components" },
                  { id: "s4", text: "How do I use the Button component?" }
                ]}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
};

export default BasicChatbotInterface;
