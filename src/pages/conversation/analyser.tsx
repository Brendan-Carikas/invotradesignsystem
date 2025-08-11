import React, { useState, useRef } from "react";
import AppShell from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, User, ThumbsUp, ThumbsDown, AlertCircle, CheckCircle2, Clock, Download, Upload, AlertTriangle, BarChart, X } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { sampleConversation } from "@/data/conversations";
import { analyzeConversation, ConversationAnalysisResult } from "@/lib/openai";
import { AnalysisResults } from "@/components/conversation/AnalysisResults";

// Message component for displaying individual messages
const Message = ({ 
  message, 
  showStarterPrompts = false,
  isHighlighted = false,
  messageRef
}: { 
  message: any, 
  showStarterPrompts?: boolean,
  isHighlighted?: boolean,
  messageRef?: (node: HTMLDivElement | null) => void
}) => {
  const isUser = message.role === "user";
  
  return (
    <div 
      ref={messageRef}
      className={`mb-6 ${isUser ? 'pl-14' : 'pr-14'} ${isHighlighted ? "ring-2 ring-blue-500 shadow-lg animate-pulse" : ""}`}>
      <div className={`flex gap-4 ${isUser ? 'flex-row-reverse' : ''}`}>
        <div className={`flex-shrink-0 ${isUser ? 'mr-0' : 'ml-0'}`}>
          <Avatar className={`h-10 w-10 ${isUser ? 'bg-blue-100' : 'bg-green-100'}`}>
            {isUser ? <User className="m-2 h-5 text-blue-800" /> : <Bot className="m-2 h-5 text-green-800" />}
          </Avatar>
        </div>
        <div className={`flex-1 max-w-[80%] ${isUser ? 'ml-auto' : 'mr-auto'}`}>
          <div className={`p-4 pb-2 rounded-lg ${isUser ? 'text-sm bg-blue-50 text-primary-900' : 'text-sm bg-green-50 text-primary-900'}`}>
            <div className="flex justify-between items-center mb-1">
              <div className="font-medium">
                {isUser ? "User" : "Assistant"}
                {isHighlighted && (
                  <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                    Referenced in analysis
                  </span>
                )}
              </div>
              <div className="text-xs text-muted-foreground">
                {message.id && <span className="mr-2 text-xs">#{message.id}</span>}
              </div>
            </div>
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
  const [analysis, setAnalysis] = useState<ConversationAnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isAnalysisDrawerOpen, setIsAnalysisDrawerOpen] = useState(false);
  
  // State and refs for message highlighting and scrolling
  const [highlightedMessageId, setHighlightedMessageId] = useState<number | null>(null);
  const messageRefs = useRef<Record<number, HTMLDivElement | null>>({});

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

  // Function to handle clicking on a message reference in the analysis
  const handleMessageReferenceClick = (messageId: number) => {
    // Keep the analysis drawer open
    // Highlight the referenced message
    setHighlightedMessageId(messageId);
    
    // Scroll to the message
    setTimeout(() => {
      const messageElement = messageRefs.current[messageId];
      if (messageElement) {
        messageElement.scrollIntoView({ behavior: "smooth", block: "center" });
        
        // Remove highlight after a few seconds
        setTimeout(() => {
          setHighlightedMessageId(null);
        }, 3000);
      }
    }, 100);
  };

  // Function to analyze conversation using server-side API
  const handleAnalyzeConversation = async () => {
    try {
      setIsAnalyzing(true);
      
      const analysisResult = await analyzeConversation(conversation, {
        includeTopics: true,
        includeSuggestions: true,
        detailedAnalysis: true
      });
      
      setAnalysis(analysisResult);
      
      // Open the analysis drawer when analysis is complete
      setIsAnalysisDrawerOpen(true);
      
      toast({
        title: "Analysis Complete",
        description: "Conversation analysis has been generated successfully."
      });
    } catch (error) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
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
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={handleImportClick}
            >
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
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={handleExportConversation}
            >
              <Download className="h-4 w-4" />
              Export
            </Button>

            <Button 
              onClick={analysis ? () => setIsAnalysisDrawerOpen(true) : handleAnalyzeConversation} 
              disabled={isAnalyzing}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <BarChart className="h-4 w-4" />
              {isAnalyzing ? "Analyzing..." : analysis ? "View Analysis" : "Analyze"}
            </Button>
          </div>
        </div>

        <div className="flex gap-6 h-[calc(100vh-12rem)]">
          {/* Conversation Card */}
          <Card className="flex-1 flex flex-col">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{conversation.title}</span>
                <span className="text-sm font-normal text-muted-foreground">{conversation.date}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto">
              <ConversationMetadata conversation={conversation} />
              
              <div className="mt-6 border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Conversation Thread</h3>
                <div className="space-y-6">
                  {conversation.messages.map((message, index, allMessages) => {
                    // Determine if this is a welcome message or first response that should show prompts
                    // For welcome message: first assistant message in the conversation
                    // For response: first assistant message after a user message
                    const isFirstAssistantMessage = message.role === "assistant" && 
                      allMessages.findIndex(m => m.role === "assistant") === index;
                    
                    const isResponseToUser = message.role === "assistant" && 
                      index > 0 && 
                      allMessages[index - 1].role === "user";
                    
                    const shouldShowPrompts = 
                      message.role === "assistant" && 
                      message.starterPrompts && 
                      (isFirstAssistantMessage || isResponseToUser) &&
                      showStarterPrompts;
                    
                    // Check if this message should be highlighted
                    const isHighlighted = message.id === highlightedMessageId;
                    
                    return (
                      <Message 
                        key={message.id || index} 
                        message={message} 
                        showStarterPrompts={shouldShowPrompts}
                        isHighlighted={isHighlighted}
                        messageRef={(node) => {
                          if (message.id) {
                            messageRefs.current[message.id] = node;
                          }
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Analysis Panel */}
          {isAnalysisDrawerOpen && (
            <Card className="w-[450px] max-w-[40%] flex flex-col relative">
              <CardHeader className="border-b bg-white z-20 sticky top-0">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart className="h-5 w-5 text-blue-600" />
                  Conversation Analysis
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full ml-auto"
                    onClick={() => setIsAnalysisDrawerOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <div className="flex-1 overflow-y-auto" style={{ maxHeight: 'calc(100% - 140px)' }}>
                <CardContent className="pb-24">
                  <AnalysisResults 
                    analysis={analysis} 
                    isLoading={isAnalyzing} 
                    onMessageReferenceClick={handleMessageReferenceClick}
                  />
                </CardContent>
              </div>
              <div className="border-t p-4 bg-white sticky bottom-0 z-20 shadow-md">
                <div className="flex justify-between items-center">
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      setIsAnalysisDrawerOpen(false);
                      setAnalysis(null);
                    }}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    Clear Analysis
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsAnalysisDrawerOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>

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
