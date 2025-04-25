import React, { useState } from "react";
import { 
  Sparkles, 
  Settings, 
  Save, 
  Share2, 
  Download, 
  Upload, 
  Copy, 
  RotateCcw, 
  Zap, 
  ChevronDown,
  Sliders,
  Bot,
  MessageSquare,
  Code,
  ImageIcon,
  FileText,
  History
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AIPlaygroundShellProps {
  children?: React.ReactNode;
}

const AIPlaygroundShell = ({ children }: AIPlaygroundShellProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeModel, setActiveModel] = useState("gpt-4");
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(2048);
  const [history, setHistory] = useState([
    { id: 1, name: "Product description", date: "Today, 2:30 PM" },
    { id: 2, name: "Code explanation", date: "Today, 11:15 AM" },
    { id: 3, name: "Marketing copy", date: "Yesterday, 4:45 PM" },
  ]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI response
    setTimeout(() => {
      setResponse(
        "This is a simulated AI response. In a real implementation, this would connect to an AI model API and return the actual response based on the prompt and parameters you've set.\n\nThe playground allows you to experiment with different models, adjust parameters like temperature and max tokens, and see how these changes affect the AI's output.\n\nYou can save interesting prompts, share your experiments, and iterate on your designs in this safe environment."
      );
      setIsGenerating(false);
    }, 1500);
  };

  const handleClearPrompt = () => {
    setPrompt("");
    setResponse("");
  };

  const handleSavePrompt = () => {
    // In a real implementation, this would save the prompt to a database or local storage
    alert("Prompt saved!");
  };

  const models = [
    { id: "gpt-4", name: "GPT-4", description: "Most capable model for complex tasks" },
    { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", description: "Fast and efficient for most tasks" },
    { id: "claude-2", name: "Claude 2", description: "Anthropic's conversational AI assistant" },
    { id: "llama-2", name: "Llama 2", description: "Meta's open source large language model" },
    { id: "mistral", name: "Mistral", description: "Efficient open-source language model" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Left sidebar - Models & History */}
      <aside 
        className={cn(
          "w-64 border-r border-border bg-muted/30 transition-all duration-300",
          !sidebarOpen && "w-0 -ml-64"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-semibold">AI Playground</span>
          </div>
        </div>
        
        <Tabs defaultValue="models" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="models">Models</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="models" className="p-4">
            <ScrollArea className="h-[calc(100vh-120px)]">
              <div className="space-y-4">
                {models.map((model) => (
                  <div 
                    key={model.id}
                    className={cn(
                      "rounded-lg border border-border p-3 cursor-pointer transition-colors",
                      activeModel === model.id ? "bg-primary/10 border-primary/50" : "hover:bg-muted"
                    )}
                    onClick={() => setActiveModel(model.id)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{model.name}</h3>
                      {activeModel === model.id && (
                        <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                          Active
                        </Badge>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{model.description}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="history" className="p-4">
            <ScrollArea className="h-[calc(100vh-120px)]">
              <div className="space-y-2">
                {history.map((item) => (
                  <div 
                    key={item.id}
                    className="rounded-lg border border-border p-3 cursor-pointer hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            <span>Duplicate</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="mr-2 h-4 w-4" />
                            <span>Share</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{item.date}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </aside>
      
      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navigation bar */}
        <header className="flex h-16 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleSidebar}
              className="h-8 w-8"
            >
              <Sparkles className="h-4 w-4" />
            </Button>
            <Select value={activeModel} onValueChange={setActiveModel}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                {models.map((model) => (
                  <SelectItem key={model.id} value={model.id}>
                    {model.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1">
                  <Sliders className="h-4 w-4" />
                  <span>Parameters</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Model Parameters</SheetTitle>
                  <SheetDescription>
                    Adjust settings to control the AI's behavior.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="temperature">Temperature: {temperature}</Label>
                      <span className="text-xs text-muted-foreground">Controls randomness</span>
                    </div>
                    <Slider 
                      id="temperature"
                      min={0} 
                      max={2} 
                      step={0.1} 
                      value={[temperature]} 
                      onValueChange={(value) => setTemperature(value[0])} 
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Lower values make output more focused and deterministic. Higher values make output more random and creative.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="max-tokens">Max Tokens: {maxTokens}</Label>
                      <span className="text-xs text-muted-foreground">Maximum length</span>
                    </div>
                    <Slider 
                      id="max-tokens"
                      min={1} 
                      max={4096} 
                      step={1} 
                      value={[maxTokens]} 
                      onValueChange={(value) => setMaxTokens(value[0])} 
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Controls the maximum length of the generated response.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Advanced Settings</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="top-p">Top P Sampling</Label>
                        <p className="text-xs text-muted-foreground">Controls diversity via nucleus sampling</p>
                      </div>
                      <Switch id="top-p" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="frequency-penalty">Frequency Penalty</Label>
                        <p className="text-xs text-muted-foreground">Reduces repetition of token sequences</p>
                      </div>
                      <Switch id="frequency-penalty" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="presence-penalty">Presence Penalty</Label>
                        <p className="text-xs text-muted-foreground">Reduces repetition of topics</p>
                      </div>
                      <Switch id="presence-penalty" />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Settings className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Save className="mr-2 h-4 w-4" />
                  <span>Save Prompt</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Share2 className="mr-2 h-4 w-4" />
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  <span>Export</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Upload className="mr-2 h-4 w-4" />
                  <span>Import</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <ThemeToggle />
          </div>
        </header>
        
        {/* Main playground area */}
        <div className="flex-1 overflow-hidden p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            {/* Input area */}
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-medium">Prompt</h2>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleClearPrompt}
                    className="h-8 px-2"
                  >
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Clear
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleSavePrompt}
                    className="h-8 px-2"
                  >
                    <Save className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <Tabs defaultValue="text" className="flex-1 flex flex-col">
                  <TabsList className="w-fit">
                    <TabsTrigger value="text" className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>Text</span>
                    </TabsTrigger>
                    <TabsTrigger value="code" className="flex items-center gap-1">
                      <Code className="h-4 w-4" />
                      <span>Code</span>
                    </TabsTrigger>
                    <TabsTrigger value="image" className="flex items-center gap-1">
                      <ImageIcon className="h-4 w-4" />
                      <span>Image</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="text" className="flex-1 mt-2">
                    <Textarea 
                      placeholder="Enter your prompt here..."
                      className="h-full resize-none"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                  </TabsContent>
                  
                  <TabsContent value="code" className="flex-1 mt-2">
                    <Textarea 
                      placeholder="Enter code or code-related prompts here..."
                      className="h-full resize-none font-mono"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                  </TabsContent>
                  
                  <TabsContent value="image" className="flex-1 mt-2">
                    <div className="h-full border border-border rounded-md flex flex-col items-center justify-center p-6">
                      <ImageIcon className="h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-center text-muted-foreground mb-4">
                        Describe the image you want to generate
                      </p>
                      <Textarea 
                        placeholder="A detailed description of the image you want to create..."
                        className="resize-none"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="mt-4">
                <Button 
                  onClick={handleGenerate} 
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full"
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Zap className="h-4 w-4 mr-2" />
                      Generate
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            {/* Output area */}
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-medium">Response</h2>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 px-2"
                    disabled={!response}
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 px-2"
                    disabled={!response}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 border border-border rounded-md p-4 overflow-auto">
                {isGenerating ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <Sparkles className="h-8 w-8 text-primary animate-pulse mb-4" />
                      <p className="text-muted-foreground">Generating response...</p>
                    </div>
                  </div>
                ) : response ? (
                  <div className="whitespace-pre-wrap">{response}</div>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <Bot className="h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground text-center max-w-xs">
                        Enter a prompt and click Generate to see the AI response here
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPlaygroundShell;
