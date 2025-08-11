import React, { useState, useRef } from "react";
import AppShell from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bot, User, ThumbsUp, ThumbsDown, AlertCircle, CheckCircle2, Clock, Download, Upload, AlertTriangle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { sampleConversation } from "@/data/conversations";

// Message component for displaying individual messages
const Message = ({ message, showStarterPrompts = false }) => {
  const isUser = message.role === "user";
  
  return (
    <div className={`mb-6 ${isUser ? 'pl-14' : 'pr-14'}`}>
      <div className={`flex gap-4 ${isUser ? 'flex-row-reverse' : ''}`}>
        <div className={`flex-shrink-0 ${isUser ? 'mr-0' : 'ml-0'}`}>
          <Avatar className={`h-10 w-10 ${isUser ? 'bg-blue-100' : 'bg-green-100'}`}>
            {isUser ? <User className="m-2 h-5 text-blue-800" /> : <Bot className="m-2 h-5 text-green-800" />}
          </Avatar>
        </div>
        <div className={`flex-1 max-w-[80%] ${isUser ? 'ml-auto' : 'mr-auto'}`}>
          <div className={`p-4 pb-2 rounded-lg ${isUser ? 'text-sm bg-blue-50 text-primary-900' : 'text-sm bg-green-50 text-primary-900'}`}>
            <p className="whitespace-pre-wrap mb-3">{message.content}</p>
            {!isUser && message.starterPrompts && showStarterPrompts && (
              <div className="flex flex-wrap gap-2 mb-3">
                {message.starterPrompts.map((prompt, index) => (
                  <div key={index} className="px-3 py-1 bg-white rounded-full text-xs border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer">
                    {prompt}
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-end items-center text-xs text-muted-foreground border-t pt-2">
              <span>{message.timestamp}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Intent/Sentiment below the message, aligned with the message bubble */}
      <div className={`mt-1 text-xs text-muted-foreground ${isUser ? 'text-right pr-14' : 'text-left pl-14'}`}>
        {isUser ? `Intent: ${message.intent}` : `Sentiment: ${message.sentiment}`}
      </div>
    </div>
  );
};

// Conversation metadata component
const ConversationMetadata = ({ conversation }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Duration</p>
            <p className="text-lg">{conversation.duration}</p>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-2">
          {conversation.status === "completed" ? 
            <CheckCircle2 className="h-5 w-5 text-green-500" /> : 
            <AlertCircle className="h-5 w-5 text-amber-500" />}
          <div>
            <p className="text-sm font-medium">Status</p>
            <p className="text-lg capitalize">{conversation.status}</p>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-2">
          {conversation.userSatisfaction === "positive" ? 
            <ThumbsUp className="h-5 w-5 text-green-500" /> : 
            <ThumbsDown className="h-5 w-5 text-red-500" />}
          <div>
            <p className="text-sm font-medium">User Satisfaction</p>
            <p className="text-lg capitalize">{conversation.userSatisfaction}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default function ConversationAnalyser() {
  const [conversation, setConversation] = useState(sampleConversation);
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [importError, setImportError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showStarterPrompts, setShowStarterPrompts] = useState(true);

  // Function to handle exporting conversation as JSON
  const handleExportConversation = () => {
    const dataStr = JSON.stringify(conversation, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const exportFileDefaultName = `conversation-${conversation.id}-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast({
      title: "Conversation exported",
      description: `Saved as ${exportFileDefaultName}`,
    });
  };

  // Function to trigger file input click
  const handleImportClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Function to handle file selection for import
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const parsedData = JSON.parse(content);
        
        // Validate the imported data has the required structure
        if (!parsedData.id || !parsedData.title || !Array.isArray(parsedData.messages)) {
          setImportError("Invalid conversation format. The file must contain a valid conversation structure.");
          setImportDialogOpen(true);
          return;
        }
        
        // Process the imported data to ensure it has starter prompts for assistant messages
        const processedData = {
          ...parsedData,
          messages: parsedData.messages.map(message => {
            // If it's an assistant message without starter prompts, add default ones
            if (message.role === "assistant" && !message.starterPrompts) {
              // Default starter prompts based on message position
              const isFirstAssistant = parsedData.messages.findIndex(m => m.role === "assistant") === parsedData.messages.indexOf(message);
              
              return {
                ...message,
                starterPrompts: isFirstAssistant ? 
                  ["Tell me more", "How does this work?", "I need help with something else"] :
                  ["That's helpful", "Can you explain further?", "I have another question"]
              };
            }
            return message;
          })
        };
        
        setConversation(processedData);
        toast({
          title: "Conversation imported",
          description: `Successfully imported ${processedData.title}`,
        });
        
        // Reset the file input
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } catch (error) {
        setImportError("Failed to parse the JSON file. Please ensure it's a valid JSON format.");
        setImportDialogOpen(true);
      }
    };
    reader.readAsText(file);
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Conversation Analyser</h1>
            <p className="text-muted-foreground">
              Review and analyze conversations between AI assistants and users
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleImportClick} className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Import
            </Button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept=".json" 
              className="hidden" 
            />
            <Button onClick={handleExportConversation} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>{conversation.title}</span>
              <span className="text-sm font-normal text-muted-foreground">{conversation.date}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ConversationMetadata conversation={conversation} />
            
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium mb-4">Conversation Thread</h3>
              <div className="space-y-6">
                {conversation.messages.map((message, index, allMessages) => {
                  // Determine if this is a welcome message or first response that should show prompts
                  // For welcome message: first assistant message in the conversation
                  // For response: first assistant message after a user message
                  const isFirstAssistantMessage = message.role === "assistant" && 
                    allMessages.findIndex(m => m.role === "assistant") === index;
                  
                  // Find if this is the first assistant response after a user message
                  const isResponseToUser = message.role === "assistant" && index > 0 && 
                    allMessages.slice(0, index).some(m => m.role === "user") && 
                    allMessages.slice(0, index).filter(m => m.role === "assistant").length === 1;
                  
                  const shouldShowPrompts = 
                    message.role === "assistant" && 
                    message.starterPrompts && 
                    (isFirstAssistantMessage || isResponseToUser) &&
                    showStarterPrompts;
                  
                  return (
                    <Message 
                      key={message.id} 
                      message={message} 
                      showStarterPrompts={shouldShowPrompts}
                    />
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Import Error Dialog */}
        <Dialog open={importDialogOpen} onOpenChange={setImportDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Import Error
              </DialogTitle>
              <DialogDescription>
                {importError}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setImportDialogOpen(false)}>
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AppShell>
  );
}
