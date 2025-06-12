import React, { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import TitleDescription from "@/components/TitleDescription";
import { ComponentCard } from "@/components/ui/component-card";
import { Calendar, Bot, Sparkles, MessageSquare, Eye, Edit, Trash2, User, Layers, Lightbulb, ThumbsUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Import the extracted components
import AIAssistantEditForm from "@/components/conversational-design/AIAssistantEditForm";
import AIAssistantViewDialog from "@/components/conversational-design/AIAssistantViewDialog";
import { AIAssistant, Message } from "@/types/AIAssistant";

// Interface moved to @/types/AIAssistant.ts

const ChatbotIndex = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentAssistant, setCurrentAssistant] = useState<AIAssistant | undefined>(undefined);
  const [assistantToDelete, setAssistantToDelete] = useState<AIAssistant | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    botPersona: "",
    flow: "",
    systemPrompt: "",
  });
  const [assistants, setAssistants] = useState<AIAssistant[]>([]);
  const { toast } = useToast();

  // Load assistants from local storage on component mount
  useEffect(() => {
    const savedAssistants = localStorage.getItem("aiAssistants");
    if (savedAssistants) {
      try {
        // Parse the saved data but we need to re-add the icon JSX element
        const parsedAssistants = JSON.parse(savedAssistants);
        const assistantsWithIcons = parsedAssistants.map((assistant: Omit<AIAssistant, 'icon'>) => ({
          ...assistant,
          icon: <Bot className="h-5 w-5" />
        }));
        setAssistants(assistantsWithIcons);
      } catch (error) {
        console.error("Error parsing assistants from localStorage:", error);
      }
    }
  }, []);

  // Save assistants to local storage whenever they change
  useEffect(() => {
    if (assistants.length > 0) {
      // Remove the icon property before saving to localStorage as JSX can't be serialized
      const assistantsToSave = assistants.map(({ icon, ...rest }) => rest);
      localStorage.setItem("aiAssistants", JSON.stringify(assistantsToSave));
    }
  }, [assistants]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to handle creating a new assistant
  const handleCreate = () => {
    setCurrentAssistant(undefined);
    setFormData({
      name: "",
      description: "",
      botPersona: "",
      flow: "",
      systemPrompt: "",
    });
    setIsCreateDialogOpen(true);
  };

  // Function to handle viewing an assistant's details
  const handleView = (assistant: AIAssistant) => {
    setCurrentAssistant(assistant);
    setIsViewDialogOpen(true);
  };

  // Function to handle editing an existing assistant
  const handleEdit = (assistant: AIAssistant) => {
    setCurrentAssistant(assistant);
    setFormData({
      name: assistant.name,
      description: assistant.description,
      botPersona: assistant.botPersona,
      flow: assistant.flow,
      systemPrompt: assistant.systemPrompt || "",
    });
    setIsCreateDialogOpen(true);
  };

  // Function to handle deleting an assistant
  const handleDelete = (assistant: AIAssistant) => {
    setAssistantToDelete(assistant);
    setIsDeleteDialogOpen(true);
  };

  // Function to confirm deletion of an assistant
  const confirmDelete = () => {
    if (assistantToDelete) {
      setAssistants(prev => prev.filter(a => a.id !== assistantToDelete.id));
      setIsDeleteDialogOpen(false);
      toast({
        title: "Success",
        description: "AI Assistant deleted successfully.",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name?.trim()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Assistant name is required.",
      });
      return;
    }

    if (!formData.description?.trim()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Description is required.",
      });
      return;
    }

    if (!formData.botPersona?.trim()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Bot persona is required.",
      });
      return;
    }

    if (!formData.flow?.trim()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Flow is required.",
      });
      return;
    }

    if (currentAssistant) {
      // Update existing assistant
      setAssistants(prev => prev.map(a => {
        if (a.id === currentAssistant.id) {
          return {
            ...a,
            name: formData.name,
            description: formData.description,
            botPersona: formData.botPersona,
            flow: formData.flow,
            systemPrompt: formData.systemPrompt,
          };
        }
        return a;
      }));

      toast({
        title: "Success",
        description: "AI Assistant updated successfully.",
      });
    } else {
      // Create a new AI assistant with the form data
      const newAssistant: AIAssistant = {
        id: `assistant-${Date.now()}`,
        name: formData.name,
        description: formData.description,
        botPersona: formData.botPersona,
        flow: formData.flow,
        systemPrompt: formData.systemPrompt,
        createdAt: new Date().toISOString(),
        icon: <Bot className="h-5 w-5" />
      };

      // Add the new assistant to the state
      setAssistants(prevAssistants => [...prevAssistants, newAssistant]);

      toast({
        title: "Success",
        description: "AI Assistant created successfully.",
      });
    }

    // Close the dialog and reset form
    setIsCreateDialogOpen(false);
    setFormData({
      name: "",
      description: "",
      botPersona: "",
      flow: "",
      systemPrompt: "",
    });
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      description: "",
      botPersona: "",
      flow: "",
      systemPrompt: "",
    });
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

  const chatbotComponents = [
    {
      title: "Basic Chatbot Interface",
      description: "A simple, interactive chatbot component with message history and suggestions.",
      icon: <Bot className="h-5 w-5" />,
      to: "/components/chatbot/basic",
      status: "stable" as const,
    },
    {
      title: "Chatbot Variants",
      description: "Different styles and configurations of the chatbot component for various use cases.",
      icon: <Layers className="h-5 w-5" />,
      to: "/components/chatbot/variants",
      status: "stable" as const,
    },
    {
      title: "Chatbot Suggestions",
      description: "Explore different types of chatbot suggestions to enhance user experience.",
      icon: <Lightbulb className="h-5 w-5" />,
      to: "/components/chatbot/suggestions",
      status: "stable" as const,
    },
    {
      title: "Chatbot Feedback",
      description: "Different feedback mechanisms to improve chatbot interactions.",
      icon: <ThumbsUp className="h-5 w-5" />,
      to: "/components/chatbot/feedback",
      status: "stable" as const,
    }
  ];

  return (
    <AppShell>
      <TitleDescription
        title="AI Assistants"
        description="Interactive chat interfaces for user communication and assistance."
        titleSize="h1"
      />
      
      {/* Display section for custom AI assistants */}
      {assistants.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Your AI Assistants</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {assistants.map((assistant) => (
              <Card key={assistant.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{assistant.name}</CardTitle>
                  <CardDescription className="text-xs pt-2">
                    {assistant.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Bot Persona:</span> {assistant.botPersona}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Flow:</span> {assistant.flow}
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <Calendar className="h-3 w-3" /> Created {new Date(assistant.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 pt-2">
                  <Button variant="outline" size="sm" onClick={() => handleView(assistant)} title="View">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleEdit(assistant)} title="Edit">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(assistant)}
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Display section for component examples - HIDDEN PER REQUEST
      <h2 className="text-2xl font-semibold mt-8 mb-4">Component Examples</h2>
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
      */}

      {/* Create/Edit AI Assistant Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <AIAssistantEditForm 
            assistant={currentAssistant} 
            onSave={(formData) => {
              if (currentAssistant) {
                // Update existing assistant
                setAssistants(prev => prev.map(a => {
                  if (a.id === currentAssistant.id) {
                    return {
                      ...a,
                      name: formData.name || a.name,
                      description: formData.description || a.description,
                      botPersona: formData.botPersona || a.botPersona,
                      flow: formData.flow || a.flow,
                      systemPrompt: formData.systemPrompt || a.systemPrompt,
                    };
                  }
                  return a;
                }));

                toast({
                  title: "Success",
                  description: "AI Assistant updated successfully.",
                });
              } else {
                // Create a new AI assistant with the form data
                const newAssistant: AIAssistant = {
                  id: Date.now().toString(),
                  name: formData.name || '',
                  description: formData.description || '',
                  botPersona: formData.botPersona || '',
                  flow: formData.flow || '',
                  systemPrompt: formData.systemPrompt || '',
                  icon: <Bot />,
                  createdAt: new Date().toISOString(),
                };

                setAssistants(prev => [...prev, newAssistant]);

                toast({
                  title: "Success",
                  description: "AI Assistant created successfully.",
                });
              }
              
              // Reset form and close dialog
              setFormData({
                name: "",
                description: "",
                botPersona: "",
                flow: "",
                systemPrompt: "",
              });
              setCurrentAssistant(undefined);
              setIsCreateDialogOpen(false);
            }}
            onCancel={() => {
              setFormData({
                name: "",
                description: "",
                botPersona: "",
                flow: "",
                systemPrompt: "",
              });
              setCurrentAssistant(undefined);
              setIsCreateDialogOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>

      {/* View AI Assistant Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <AIAssistantViewDialog 
            assistant={currentAssistant} 
            onClose={() => setIsViewDialogOpen(false)}
            onEdit={(assistant) => {
              setIsViewDialogOpen(false);
              handleEdit(assistant);
            }}
          />
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the AI Assistant
              {assistantToDelete ? ` "${assistantToDelete.name}"` : ''}.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          onClick={handleCreate}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </AppShell>
  );
};

export default ChatbotIndex;
