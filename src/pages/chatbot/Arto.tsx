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

const Arto: React.FC = () => {
  // Create initial messages for the chatbot
  const initialMessages: ChatMessage[] = [
    {
      id: "init-1",
      role: "bot",
      content: "Hello! I'm ArtoBot, your creative assistant. How can I help you today?",
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
    },
    {
      id: "init-2",
      role: "user",
      content: "Hi! I'd like to learn about Arto's features.",
      timestamp: new Date(Date.now() - 60000), // 1 minute ago
    },
    {
      id: "init-3",
      role: "bot",
      content: "Great! Arto is a creative platform that helps you design and develop digital experiences. It provides tools for ideation, prototyping, and collaboration. Feel free to ask about any specific feature you're interested in!",
      timestamp: new Date(Date.now() - 30000), // 30 seconds ago
    },
  ];
  
  return (
    <AppShell>
      <TitleDescription
        title="Arto Chatbot Interface"
        description="An interactive Arto assistant chatbot with message history and creative suggestions."
        titleSize="h1"
      />
      
      <div className="space-y-10">
        <Card>
          <CardHeader>
            <CardTitle>Arto Chatbot</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-muted-foreground">
              This is an implementation of the Arto chatbot assistant with features including message history, typing indicators, and creative suggestion chips.
            </p>
            <div className="mt-8">
              <FunctionalChatbot
                botName="ArtoBot"
                botAvatar={"/artobot-avatar.png"}
                userAvatar={"/user-avatar.png"}
                initialMessages={initialMessages}
                initialSuggestions={[
                  { id: "s1", text: "What can Arto do?" },
                  { id: "s2", text: "Tell me about creative features" },
                  { id: "s3", text: "Show me available tools" },
                  { id: "s4", text: "How do I start a new project?" }
                ]}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
};

export default Arto;
