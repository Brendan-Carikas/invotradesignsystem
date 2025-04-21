
import React, { useState, useRef, useEffect } from "react";
import { Bot, Send, CircleArrowUp, CircleArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
// TitleDescription is used in the page component, not needed here
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

// Define types for our messages and suggestions
type MessageRole = "user" | "bot";

interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

interface ChatSuggestion {
  id: string;
  text: string;
}

interface FunctionalChatbotProps {
  initialMessages?: ChatMessage[];
  initialSuggestions?: ChatSuggestion[];
  botName?: string;
  userAvatar?: string;
  botAvatar?: string;
}

const FunctionalChatbot: React.FC<FunctionalChatbotProps> = ({
  initialMessages = [],
  initialSuggestions = [
    { id: "s1", text: "What can you do?" },
    { id: "s2", text: "Tell me about this design system" },
    { id: "s3", text: "Show me available components" },
    { id: "s4", text: "How do I use the Button component?" },
  ],
  botName = "DesignBot",
  userAvatar,
  botAvatar,
}) => {
  // State for managing messages, input, typing status, and suggestions
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<ChatSuggestion[]>(initialSuggestions);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<number>(-1);
  
  // Refs for auto-scrolling and input focus
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Generate a unique ID for messages
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  // Handle sending a new message
  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: generateId(),
      role: "user",
      content: content.trim(),
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: generateId(),
        role: "bot",
        content: getBotResponse(content.trim()),
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random response time between 1-3 seconds
  };

  // Get a response from the bot based on user input
  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("button") || lowerInput.includes("buttons")) {
      return "Buttons are interactive elements that trigger actions when clicked. Our design system includes various button variants such as default, secondary, destructive, outline, ghost, and link styles.";
    } else if (lowerInput.includes("typography") || lowerInput.includes("text")) {
      return "Our typography system provides a consistent type scale for readability and hierarchy. It includes various text styles for headings, body text, and more.";
    } else if (lowerInput.includes("card") || lowerInput.includes("cards")) {
      return "Cards are containers for organizing related content and actions. They typically include a header, content area, and optional footer.";
    } else if (lowerInput.includes("what can you do") || lowerInput.includes("help")) {
      return "I can help you learn about this design system. You can ask about specific components like buttons, typography, cards, badges, or the chatbot interface itself!";
    } else if (lowerInput.includes("design system") || lowerInput.includes("about")) {
      return "This design system provides a collection of reusable components for building consistent user interfaces. It includes elements like buttons, cards, typography, and more, all with a consistent visual language.";
    } else if (lowerInput.includes("available") || lowerInput.includes("components")) {
      return "This design system includes components such as buttons, typography, cards, badges, and chatbot interfaces. Each component comes with multiple variants and options.";
    } else {
      return "Thanks for your message! I'm a demo chatbot for the design system. Try asking about specific components or features.";
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: ChatSuggestion) => {
    handleSendMessage(suggestion.text);
    // Remove the clicked suggestion
    setSuggestions(prev => prev.filter(s => s.id !== suggestion.id));
  };

  // Handle keyboard navigation for suggestions
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // If suggestions are available
    if (suggestions.length > 0) {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedSuggestionIndex(prev => 
          prev <= 0 ? suggestions.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedSuggestionIndex(prev => 
          prev >= suggestions.length - 1 ? 0 : prev + 1
        );
      } else if (e.key === "Enter" && selectedSuggestionIndex >= 0) {
        e.preventDefault();
        const selectedSuggestion = suggestions[selectedSuggestionIndex];
        handleSuggestionClick(selectedSuggestion);
        setSelectedSuggestionIndex(-1);
      }
    }
  };

  // Format timestamp for display
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>DesignBot</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col h-[500px]">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-3 max-w-[85%] animate-fade-in",
                    message.role === "user" ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  {message.role === "bot" ? (
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot size={16} />
                      </AvatarFallback>
                      {botAvatar && <AvatarImage src={botAvatar} alt={botName} />}
                    </Avatar>
                  ) : (
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarFallback className="bg-secondary">U</AvatarFallback>
                      {userAvatar && <AvatarImage src={userAvatar} alt="User" />}
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "rounded-lg px-4 py-2 text-sm shadow-sm",
                      message.role === "bot"
                        ? "bg-muted text-foreground"
                        : "bg-primary text-primary-foreground"
                    )}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <div
                      className={cn(
                        "text-xs mt-1 opacity-70",
                        message.role === "user" ? "text-right" : ""
                      )}
                    >
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start gap-3 max-w-[85%] animate-fade-in">
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot size={16} />
                    </AvatarFallback>
                    {botAvatar && <AvatarImage src={botAvatar} alt={botName} />}
                  </Avatar>
                  <div className="bg-muted rounded-lg px-4 py-3 text-sm">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse delay-150"></div>
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div 
              ref={suggestionsRef}
              className="px-4 py-3 border-t border-border"
            >
              <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={suggestion.id}
                    className={cn(
                      "text-sm px-3 py-1.5 rounded-full border transition-colors",
                      selectedSuggestionIndex === index
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background hover:bg-muted border-input"
                    )}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.text}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Input area */}
          <div className="p-4 border-t border-border mt-auto">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={!inputValue.trim() || isTyping}>
                <Send size={16} />
              </Button>
            </form>
            
            {/* Navigation hints */}
            {selectedSuggestionIndex >= 0 && (
              <div className="flex items-center justify-center mt-2 text-xs text-muted-foreground gap-4">
                <div className="flex items-center gap-1">
                  <CircleArrowUp size={12} />
                  <CircleArrowDown size={12} />
                  Navigate
                </div>
                <div className="flex items-center gap-1">
                  Enter
                  <span>Select</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FunctionalChatbot;
