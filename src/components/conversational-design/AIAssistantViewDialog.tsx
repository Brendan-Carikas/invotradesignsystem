import React, { useState } from "react";
import { AIAssistant, Message } from "@/types/AIAssistant";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface AIAssistantViewDialogProps {
  assistant: AIAssistant | undefined;
  onClose: () => void;
  onEdit: (assistant: AIAssistant) => void;
}

const AIAssistantViewDialog: React.FC<AIAssistantViewDialogProps> = ({ 
  assistant, 
  onClose, 
  onEdit 
}) => {
  const { toast } = useToast();
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard",
        description: "System prompt has been copied to clipboard.",
        duration: 2000,
      });
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      toast({
        title: "Copy failed",
        description: "Could not copy to clipboard.",
        variant: "destructive",
      });
    });
  };
  return (
    <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>{assistant?.name}</DialogTitle>
        <DialogDescription>
          {assistant?.description}
        </DialogDescription>
      </DialogHeader>
      
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Conversation Preview</TabsTrigger>
          <TabsTrigger value="details">Assistant Details</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview" className="py-4">
          <div className="border rounded-lg p-4 bg-muted/30">
            <div className="space-y-4">
              {generateConversationPreview(assistant).map((message, index) => (
                <div key={index} className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`flex gap-3 max-w-[80%] ${message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <Avatar className={message.role === 'assistant' ? 'bg-primary/20' : 'bg-secondary'}>
                      <AvatarFallback>{message.role === 'assistant' ? 'AI' : 'U'}</AvatarFallback>
                    </Avatar>
                    <div className={`rounded-lg p-3 ${message.role === 'assistant' ? 'bg-primary/10' : 'bg-secondary/20'}`}>
                      <div className="text-sm">{message.content}</div>
                      <div className="text-xs text-muted-foreground mt-1">{message.timestamp}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-xs text-muted-foreground mt-2 text-center">This is a simulated conversation based on the assistant's configuration.</div>
        </TabsContent>
        
        <TabsContent value="details" className="py-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Bot Persona</h3>
              <p className="text-muted-foreground">{assistant?.botPersona}</p>
            </div>
            <div>
              <h3 className="font-medium">Flow</h3>
              <p className="text-muted-foreground">{assistant?.flow}</p>
            </div>
            {assistant?.systemPrompt && (
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">System Prompt</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0" 
                    onClick={() => copyToClipboard(assistant.systemPrompt)}
                    title="Copy to clipboard"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-muted p-3 rounded-md mt-1 text-sm">
                  <p className="whitespace-pre-wrap">{assistant.systemPrompt}</p>
                </div>
              </div>
            )}
            <div>
              <h3 className="font-medium">Created</h3>
              <p className="text-muted-foreground">{assistant?.createdAt ? new Date(assistant.createdAt).toLocaleString() : ''}</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <DialogFooter>
        <Button variant="outline" onClick={onClose}>Close</Button>
        <Button onClick={() => {
          if (assistant) {
            onEdit(assistant);
          }
        }}>Edit</Button>
      </DialogFooter>
    </DialogContent>
  );
};

// Generate a simulated conversation based on assistant configuration
const generateConversationPreview = (assistant: AIAssistant | undefined): Message[] => {
  if (!assistant) return [];
  
  const currentTime = new Date();
  const formatTime = (minutesAgo: number) => {
    const time = new Date(currentTime.getTime() - minutesAgo * 60000);
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Generate appropriate messages based on assistant type and configuration
  const messages: Message[] = [];
  
  // Initial greeting from assistant based on persona
  let greeting = "Hello! How can I help you today?";
  if (assistant.botPersona === "friendly") {
    greeting = "Hi there! 👋 I'm here to help with anything you need. How are you doing today?";
  } else if (assistant.botPersona === "professional") {
    greeting = "Good day. I'm your professional assistant. How may I be of service today?";
  } else if (assistant.botPersona === "technical") {
    greeting = "Hello. I'm your technical assistant. What technical issue would you like help with today?";
  } else if (assistant.botPersona === "casual") {
    greeting = "Hey! What's up? How can I help you out today?";
  }
  
  messages.push({
    role: "assistant",
    content: greeting,
    timestamp: formatTime(15)
  });
  
  // User query based on assistant type
  let userQuery = "I need some information.";
  if (assistant.flow === "standard") {
    userQuery = "Can you tell me more about your services?";
  } else if (assistant.flow === "guided") {
    userQuery = "I'd like some help with getting started.";
  } else if (assistant.flow === "interactive") {
    userQuery = "I have a problem that needs solving.";
  } else if (assistant.flow === "custom") {
    userQuery = "I have a specific request for you.";
  }
  
  messages.push({
    role: "user",
    content: userQuery,
    timestamp: formatTime(14)
  });
  
  // Assistant response based on system prompt and persona
  let assistantResponse = "I'd be happy to help you with that.";
  
  // If system prompt exists, customize response based on it
  if (assistant.systemPrompt) {
    if (assistant.systemPrompt.toLowerCase().includes("knowledge") || 
        assistant.systemPrompt.toLowerCase().includes("information")) {
      assistantResponse = "Based on my knowledge, I can provide you with detailed information about our services. What specific aspect would you like to know more about?";
    } else if (assistant.systemPrompt.toLowerCase().includes("help") || 
              assistant.systemPrompt.toLowerCase().includes("assist")) {
      assistantResponse = "I'm specifically designed to assist you with any questions or issues you might have. Could you provide more details about what you need help with?";
    } else if (assistant.systemPrompt.toLowerCase().includes("guide") || 
              assistant.systemPrompt.toLowerCase().includes("step")) {
      assistantResponse = "I'll guide you through this process step by step. First, let me understand what you're trying to accomplish.";
    }
  } else {
    // Default responses based on persona if no system prompt
    if (assistant.botPersona === "friendly") {
      assistantResponse = "I'd be delighted to help you with that! What would you like to know specifically?";
    } else if (assistant.botPersona === "professional") {
      assistantResponse = "Certainly. I can provide you with comprehensive information about our services. Please specify what aspects you're interested in.";
    } else if (assistant.botPersona === "technical") {
      assistantResponse = "I can provide technical details about our services. Which specific technical aspects would you like me to elaborate on?";
    } else if (assistant.botPersona === "casual") {
      assistantResponse = "Sure thing! I can tell you all about what we offer. What are you curious about?";
    }
  }
  
  messages.push({
    role: "assistant",
    content: assistantResponse,
    timestamp: formatTime(13)
  });
  
  // Additional user question
  messages.push({
    role: "user",
    content: "That's helpful. Can you give me an example?",
    timestamp: formatTime(12)
  });
  
  // Final assistant response with example
  let exampleResponse = "Here's an example of how this works...";
  
  if (assistant.flow === "standard") {
    exampleResponse = "Certainly! For example, our premium service includes 24/7 support, personalized recommendations, and priority access to new features. Many of our customers find the priority support particularly valuable when they need immediate assistance.";
  } else if (assistant.flow === "guided") {
    exampleResponse = "Of course! Let me walk you through an example: First, you'd create an account on our platform. Then, you'd set up your preferences in your profile. Finally, you'd be able to access all features. Would you like me to guide you through setting up an account now?";
  } else if (assistant.flow === "interactive") {
    exampleResponse = "Here's a practical example: If you're experiencing slow performance, you might try clearing your cache first. If that doesn't work, updating your browser often resolves the issue. Have you tried either of these solutions yet?";
  } else if (assistant.flow === "custom") {
    exampleResponse = "Absolutely! For instance, if you need a custom report, you can specify the data points you need, the time period, and your preferred format. I can prepare this for you within 24 hours. Would you like me to create a custom report for you?";
  }
  
  messages.push({
    role: "assistant",
    content: exampleResponse,
    timestamp: formatTime(10)
  });
  
  return messages;
};

export default AIAssistantViewDialog;
