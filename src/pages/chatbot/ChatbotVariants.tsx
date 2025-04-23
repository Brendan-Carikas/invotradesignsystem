import React from "react";
import AppShell from "@/components/layout/AppShell";
import TitleDescription from "@/components/TitleDescription";
import FunctionalChatbot from "@/components/chatbot/FunctionalChatbot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define the types needed for the chat messages
type MessageRole = "user" | "bot";

interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

const ChatbotVariants: React.FC = () => {
  // Simple initial messages for minimal variant
  const minimalMessages: ChatMessage[] = [
    {
      id: "min-1",
      role: "bot",
      content: "Hello! How can I help you today?",
      timestamp: new Date(),
    }
  ];

  // More detailed messages for the support variant
  const supportMessages: ChatMessage[] = [
    {
      id: "sup-1",
      role: "bot",
      content: "Welcome to support! I'm here to help you troubleshoot any issues with our design system.",
      timestamp: new Date(Date.now() - 120000),
    },
    {
      id: "sup-2",
      role: "user",
      content: "I'm having trouble with the Button component.",
      timestamp: new Date(Date.now() - 90000),
    },
    {
      id: "sup-3",
      role: "bot",
      content: "I'm sorry to hear that. Could you tell me more about the issue you're experiencing with the Button component?",
      timestamp: new Date(Date.now() - 60000),
    }
  ];
  
  // Product recommendation messages
  const productMessages: ChatMessage[] = [
    {
      id: "prod-1",
      role: "bot",
      content: "Welcome to our product assistant! I can help you find the perfect components for your project.",
      timestamp: new Date(Date.now() - 120000),
    },
    {
      id: "prod-2",
      role: "user",
      content: "I need components for a dashboard interface.",
      timestamp: new Date(Date.now() - 90000),
    },
    {
      id: "prod-3",
      role: "bot",
      content: "Great! For dashboard interfaces, I recommend our Card, Chart, and DataTable components. Would you like to see examples of these?",
      timestamp: new Date(Date.now() - 60000),
    }
  ];
  
  return (
    <AppShell>
      <TitleDescription
        title="Chatbot Variants"
        description="Different styles and configurations of the chatbot component for various use cases."
        titleSize="h1"
      />
      
      <div className="space-y-10">
        <Tabs defaultValue="minimal">
          <TabsList className="mb-4">
            <TabsTrigger value="minimal">Minimal</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
            <TabsTrigger value="product">Product Assistant</TabsTrigger>
          </TabsList>
          
          <TabsContent value="minimal">
            <Card>
              <CardHeader>
                <CardTitle>Minimal Chatbot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  A streamlined chatbot interface with minimal initial messages and a clean design.
                </p>
                <FunctionalChatbot
                  botName="MinimalBot"
                  initialMessages={minimalMessages}
                  initialSuggestions={[
                    { id: "m1", text: "Get started" },
                    { id: "m2", text: "How does this work?" }
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="support">
            <Card>
              <CardHeader>
                <CardTitle>Support Chatbot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  A support-focused chatbot designed to help users troubleshoot issues.
                </p>
                <FunctionalChatbot
                  botName="SupportBot"
                  botAvatar={"/support-avatar.png"}
                  initialMessages={supportMessages}
                  initialSuggestions={[
                    { id: "s1", text: "It's not rendering correctly" },
                    { id: "s2", text: "The styles are inconsistent" },
                    { id: "s3", text: "I need help with props" }
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="product">
            <Card>
              <CardHeader>
                <CardTitle>Product Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  A product-focused chatbot that helps users discover and choose components.
                </p>
                <FunctionalChatbot
                  botName="ProductBot"
                  botAvatar={"/product-avatar.png"}
                  initialMessages={productMessages}
                  initialSuggestions={[
                    { id: "p1", text: "Show me examples" },
                    { id: "p2", text: "What other components do you recommend?" },
                    { id: "p3", text: "How do these components work together?" }
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default ChatbotVariants;
