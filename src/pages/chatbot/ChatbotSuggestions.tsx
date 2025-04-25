import React from "react";
import AppShell from "@/components/layout/AppShell";
import TitleDescription from "@/components/TitleDescription";
import FunctionalChatbot from "@/components/chatbot/FunctionalChatbot";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Lightbulb, Zap } from "lucide-react";

// Define the types needed for the chat messages
type MessageRole = "user" | "bot";

interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

const ChatbotSuggestions: React.FC = () => {
  // Create initial messages for the chatbot
  const initialMessages: ChatMessage[] = [
    {
      id: "init-1",
      role: "bot",
      content: "Hello! I'm DesignBot, your design system assistant. How can I help you today?",
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
    }
  ];
  
  // Different suggestion sets for demonstration
  const basicSuggestions = [
    { id: "b1", text: "What can you do?" },
    { id: "b2", text: "Tell me about this design system" },
    { id: "b3", text: "Show me available components" },
    { id: "b4", text: "How do I use the Button component?" }
  ];
  
  const productSuggestions = [
    { id: "p1", text: "Show me product features" },
    { id: "p2", text: "How do I create a new project?" },
    { id: "p3", text: "What's new in the latest update?" },
    { id: "p4", text: "Can you explain the pricing plans?" }
  ];
  
  const supportSuggestions = [
    { id: "s1", text: "I need help with my account" },
    { id: "s2", text: "How do I reset my password?" },
    { id: "s3", text: "Report a bug" },
    { id: "s4", text: "Contact customer support" }
  ];

  return (
    <AppShell>
      <section className="mb-8">
        <TitleDescription
          title="Chatbot Suggestions"
          description="Explore different types of chatbot suggestions to enhance user experience."
        />
      </section>
      
      <Tabs defaultValue="basic" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="basic"><MessageCircle className="h-4 w-4 mr-2" /> Basic</TabsTrigger>
          <TabsTrigger value="product"><Lightbulb className="h-4 w-4 mr-2" /> Product</TabsTrigger>
          <TabsTrigger value="support"><Zap className="h-4 w-4 mr-2" /> Support</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle>Basic Suggestions</CardTitle>
              <CardDescription>General-purpose suggestions for introducing users to the chatbot.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px]">
                <FunctionalChatbot
                  botName="DesignBot"
                  botAvatar={"/designbot-avatar.png"}
                  userAvatar={"/user-avatar.png"}
                  initialMessages={initialMessages}
                  initialSuggestions={basicSuggestions}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="product">
          <Card>
            <CardHeader>
              <CardTitle>Product Suggestions</CardTitle>
              <CardDescription>Suggestions focused on product features and capabilities.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px]">
                <FunctionalChatbot
                  botName="DesignBot"
                  botAvatar={"/designbot-avatar.png"}
                  userAvatar={"/user-avatar.png"}
                  initialMessages={initialMessages}
                  initialSuggestions={productSuggestions}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="support">
          <Card>
            <CardHeader>
              <CardTitle>Support Suggestions</CardTitle>
              <CardDescription>Suggestions for customer support and troubleshooting.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px]">
                <FunctionalChatbot
                  botName="DesignBot"
                  botAvatar={"/designbot-avatar.png"}
                  userAvatar={"/user-avatar.png"}
                  initialMessages={initialMessages}
                  initialSuggestions={supportSuggestions}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

    </AppShell>
  );
};

export default ChatbotSuggestions;
