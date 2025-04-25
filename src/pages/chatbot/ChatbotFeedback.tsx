import React, { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import TitleDescription from "@/components/TitleDescription";
import FunctionalChatbot from "@/components/chatbot/FunctionalChatbot";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThumbsUp, ThumbsDown, MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Define the types needed for the chat messages
type MessageRole = "user" | "bot";

interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

const ChatbotFeedback: React.FC = () => {
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
      content: "Can you explain how to use the Button component?",
      timestamp: new Date(Date.now() - 60000), // 1 minute ago
    },
    {
      id: "init-3",
      role: "bot",
      content: "The Button component is a fundamental UI element for triggering actions. It comes in various variants like primary, secondary, outline, and ghost. You can import it using `import { Button } from '@/components/ui/button'` and then use it in your component. Would you like to see some examples?",
      timestamp: new Date(Date.now() - 30000), // 30 seconds ago
    }
  ];
  
  // Demo feedback components
  const BinaryFeedback = () => {
    const [feedback, setFeedback] = useState<string | null>(null);
    
    return (
      <div className="flex items-center gap-2 mt-2">
        <span className="text-sm text-muted-foreground mr-2">Was this helpful?</span>
        <Button 
          variant={feedback === "positive" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setFeedback("positive")}
          className="h-8"
        >
          <ThumbsUp className="h-4 w-4 mr-1" />
          Yes
        </Button>
        <Button 
          variant={feedback === "negative" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setFeedback("negative")}
          className="h-8"
        >
          <ThumbsDown className="h-4 w-4 mr-1" />
          No
        </Button>
        {feedback && (
          <Badge variant="outline" className="ml-2">
            {feedback === "positive" ? "Thank you for your feedback!" : "We'll try to improve."}
          </Badge>
        )}
      </div>
    );
  };
  
  const StarRating = () => {
    const [rating, setRating] = useState<number | null>(null);
    
    return (
      <div className="flex flex-col gap-2 mt-2">
        <span className="text-sm text-muted-foreground">Rate this response:</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Button
              key={star}
              variant="ghost"
              size="sm"
              onClick={() => setRating(star)}
              className="p-1 h-8 w-8"
            >
              <Star 
                className={`h-6 w-6 ${rating && star <= rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} 
              />
            </Button>
          ))}
        </div>
        {rating && (
          <Badge variant="outline" className="self-start mt-1">
            {rating === 5 ? "Excellent!" : rating >= 3 ? "Thank you!" : "We'll improve."}
          </Badge>
        )}
      </div>
    );
  };
  
  const DetailedFeedback = () => {
    const [showForm, setShowForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    
    return (
      <div className="mt-2">
        {!showForm && !submitted ? (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowForm(true)}
            className="h-8"
          >
            <MessageSquare className="h-4 w-4 mr-1" />
            Provide detailed feedback
          </Button>
        ) : submitted ? (
          <Badge variant="outline">Thank you for your detailed feedback!</Badge>
        ) : (
          <div className="border rounded-md p-3 mt-2 space-y-3">
            <textarea 
              className="w-full p-2 border rounded-md text-sm" 
              rows={3} 
              placeholder="Please share your thoughts about this response..."
            />
            <div className="flex gap-2">
              <Button 
                size="sm" 
                onClick={() => setSubmitted(true)}
              >
                Submit
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <AppShell>
      <section className="mb-8">
        <TitleDescription
          title="Chatbot Feedback"
          description="Explore different feedback mechanisms to improve chatbot interactions."
        />
      </section>
      
      <Tabs defaultValue="binary" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="binary"><ThumbsUp className="h-4 w-4 mr-2" /> Binary Feedback</TabsTrigger>
          <TabsTrigger value="star"><Star className="h-4 w-4 mr-2" /> Star Rating</TabsTrigger>
          <TabsTrigger value="detailed"><MessageSquare className="h-4 w-4 mr-2" /> Detailed Feedback</TabsTrigger>
        </TabsList>
        
        <TabsContent value="binary">
          <Card>
            <CardHeader>
              <CardTitle>Binary Feedback</CardTitle>
              <CardDescription>Simple yes/no feedback to quickly gauge response helpfulness.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] flex flex-col">
                <div className="flex-grow border rounded-md p-4 mb-4 overflow-auto">
                  <div className="space-y-4">
                    {initialMessages.map((message) => (
                      <div key={message.id} className={`flex ${message.role === "bot" ? "justify-start" : "justify-end"}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${message.role === "bot" ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
                          {message.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  {initialMessages.length > 0 && initialMessages[initialMessages.length - 1].role === "bot" && (
                    <BinaryFeedback />
                  )}
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground">
                    Binary feedback is simple to implement and provides a quick way for users to indicate whether a response was helpful.
                    It's best used when you want to minimize friction and collect basic satisfaction metrics.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="star">
          <Card>
            <CardHeader>
              <CardTitle>Star Rating</CardTitle>
              <CardDescription>Collect nuanced feedback with a 5-star rating system.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] flex flex-col">
                <div className="flex-grow border rounded-md p-4 mb-4 overflow-auto">
                  <div className="space-y-4">
                    {initialMessages.map((message) => (
                      <div key={message.id} className={`flex ${message.role === "bot" ? "justify-start" : "justify-end"}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${message.role === "bot" ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
                          {message.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  {initialMessages.length > 0 && initialMessages[initialMessages.length - 1].role === "bot" && (
                    <StarRating />
                  )}
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground">
                    Star ratings provide more granular feedback than binary options, allowing users to express varying levels of satisfaction.
                    This can help identify responses that are adequate but could be improved.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="detailed">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Feedback</CardTitle>
              <CardDescription>Collect qualitative feedback with free-form text input.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] flex flex-col">
                <div className="flex-grow border rounded-md p-4 mb-4 overflow-auto">
                  <div className="space-y-4">
                    {initialMessages.map((message) => (
                      <div key={message.id} className={`flex ${message.role === "bot" ? "justify-start" : "justify-end"}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${message.role === "bot" ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
                          {message.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  {initialMessages.length > 0 && initialMessages[initialMessages.length - 1].role === "bot" && (
                    <DetailedFeedback />
                  )}
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground">
                    Detailed feedback provides the richest insights but requires more effort from users.
                    It's best used selectively for important interactions or when you need specific improvement suggestions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppShell>
  );
};

export default ChatbotFeedback;
