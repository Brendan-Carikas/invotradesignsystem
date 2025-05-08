import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronLeft, Copy, Check, Bot, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FunctionalChatbot from "@/components/chatbot/FunctionalChatbot";

const ButtonsDemo = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('<Button>Click me</Button>');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <section>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Button Variants</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCopy}
                className="h-8 w-8"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </Button>
            </div>
            <CardDescription>
              Different button styles for various contexts
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </CardContent>
          <CardFooter className="border-t bg-muted/50 px-6 py-4">
            <code className="text-sm text-muted-foreground">
              &lt;Button variant="default"&gt;Default&lt;/Button&gt;
            </code>
          </CardFooter>
        </Card>
      </section>
      
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Button Sizes</CardTitle>
            <CardDescription>
              Buttons in different sizes for various UI requirements
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" className="h-9 w-9"><Copy size={16} /></Button>
          </CardContent>
          <CardFooter className="border-t bg-muted/50 px-6 py-4">
            <code className="text-sm text-muted-foreground">
              &lt;Button size="default"&gt;Default&lt;/Button&gt;
            </code>
          </CardFooter>
        </Card>
      </section>
      
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Button States</CardTitle>
            <CardDescription>
              Buttons in different states
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button className="relative">
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
              With Notification
            </Button>
            <Button>
              <Copy className="mr-2 h-4 w-4" />
              With Icon
            </Button>
          </CardContent>
          <CardFooter className="border-t bg-muted/50 px-6 py-4">
            <code className="text-sm text-muted-foreground">
              &lt;Button disabled&gt;Disabled&lt;/Button&gt;
            </code>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

const TypographyDemo = () => {
  return (
    <div className="space-y-8">
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Typography Scale</CardTitle>
            <CardDescription>
              A consistent type scale for readability and hierarchy
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Heading 1</h1>
              <p className="text-sm text-muted-foreground">text-4xl font-bold tracking-tight</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Heading 2</h2>
              <p className="text-sm text-muted-foreground">text-3xl font-semibold tracking-tight</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Heading 3</h3>
              <p className="text-sm text-muted-foreground">text-2xl font-semibold tracking-tight</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold tracking-tight">Heading 4</h4>
              <p className="text-sm text-muted-foreground">text-xl font-semibold tracking-tight</p>
            </div>
            <div>
              <p className="text-lg">Large Text</p>
              <p className="text-sm text-muted-foreground">text-lg</p>
            </div>
            <div>
              <p className="text-base">Body Text</p>
              <p className="text-sm text-muted-foreground">text-base</p>
            </div>
            <div>
              <p className="text-sm">Small Text</p>
              <p className="text-sm text-muted-foreground">text-sm</p>
            </div>
            <div>
              <p className="text-xs">Extra Small Text</p>
              <p className="text-sm text-muted-foreground">text-xs</p>
            </div>
          </CardContent>
        </Card>
      </section>
      
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Text Styles</CardTitle>
            <CardDescription>
              Different text styles and formatting options
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="font-bold">Bold Text</p>
              <p className="text-sm text-muted-foreground">font-bold</p>
            </div>
            <div>
              <p className="font-semibold">Semibold Text</p>
              <p className="text-sm text-muted-foreground">font-semibold</p>
            </div>
            <div>
              <p className="font-medium">Medium Text</p>
              <p className="text-sm text-muted-foreground">font-medium</p>
            </div>
            <div>
              <p className="font-normal">Normal Text</p>
              <p className="text-sm text-muted-foreground">font-normal</p>
            </div>
            <div>
              <p className="italic">Italic Text</p>
              <p className="text-sm text-muted-foreground">italic</p>
            </div>
            <div>
              <p className="underline">Underlined Text</p>
              <p className="text-sm text-muted-foreground">underline</p>
            </div>
            <div>
              <p className="text-gradient">Gradient Text</p>
              <p className="text-sm text-muted-foreground">text-gradient</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

const CardsDemo = () => {
  return (
    <div className="space-y-8">
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Card Variations</CardTitle>
            <CardDescription>
              Different card styles for various use cases
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Standard Card</CardTitle>
                <CardDescription>Basic card with header and content</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the content of a basic card component.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost">Cancel</Button>
                <Button>Submit</Button>
              </CardFooter>
            </Card>
            
            <Card className="border-primary/20 bg-primary/5 shadow-sm">
              <CardHeader>
                <CardTitle className="text-primary">Highlighted Card</CardTitle>
                <CardDescription>Card with primary color accent</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card has primary color accents to draw attention.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost">Cancel</Button>
                <Button>Submit</Button>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>
      </section>
      
      <section className="grid gap-6 sm:grid-cols-3">
        <Card className="glass-morphism">
          <CardHeader>
            <CardTitle>Glass Card</CardTitle>
            <CardDescription>With glassmorphism effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card uses a glassmorphism style for a modern look.</p>
          </CardContent>
        </Card>
        
        <Card className="neo-blur">
          <CardHeader>
            <CardTitle className="text-white">Neo Blur</CardTitle>
            <CardDescription className="text-white/70">Dark glass effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-white/90">A darker glass effect with higher contrast.</p>
          </CardContent>
        </Card>
        
        <Card className="border-dashed border-2">
          <CardHeader>
            <CardTitle>Dashed Border</CardTitle>
            <CardDescription>Alternative border style</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Using a dashed border style for a different visual appearance.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

const BadgesDemo = () => {
  return (
    <div className="space-y-8">
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Badge Variants</CardTitle>
            <CardDescription>
              Different badge styles for various contexts
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </CardContent>
          <CardFooter className="border-t bg-muted/50 px-6 py-4">
            <code className="text-sm text-muted-foreground">
              &lt;Badge variant="default"&gt;Default&lt;/Badge&gt;
            </code>
          </CardFooter>
        </Card>
      </section>
      
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Custom Badges</CardTitle>
            <CardDescription>
              Badges with custom styling
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20">
              Success
            </Badge>
            <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/20">
              Warning
            </Badge>
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20">
              Error
            </Badge>
            <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500/20">
              Info
            </Badge>
            <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 hover:bg-purple-500/20">
              Beta
            </Badge>
          </CardContent>
          <CardFooter className="border-t bg-muted/50 px-6 py-4">
            <code className="text-sm text-muted-foreground">
              &lt;Badge className="bg-green-500/10 text-green-500 border-green-500/20"&gt;Success&lt;/Badge&gt;
            </code>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

const ChatbotDemo = () => {
  const [messages, setMessages] = React.useState([
    {
      role: "bot",
      content: "Hello! How can I help you today?",
      timestamp: new Date(),
    },
    {
      role: "user",
      content: "Can you tell me about the design system?",
      timestamp: new Date(),
    },
    {
      role: "bot",
      content: "This design system provides a collection of reusable components for building consistent user interfaces. It includes elements like buttons, cards, typography, and more, all with a consistent visual language.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = {
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        role: "bot",
        content: "Thanks for your message! This is a demo chatbot for the design system.",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="space-y-12">
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Basic Chatbot Interface</CardTitle>
            <CardDescription>
              A simple chatbot interface with message history
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col h-[400px]">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4 rounded-md bg-muted/50">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-start gap-3 max-w-[80%]",
                      message.role === "user" ? "ml-auto" : ""
                    )}
                  >
                    {message.role === "bot" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot size={16} />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "rounded-lg px-4 py-2 text-sm",
                        message.role === "bot"
                          ? "bg-muted text-foreground"
                          : "bg-primary text-primary-foreground"
                      )}
                    >
                      {message.content}
                      <div
                        className={cn(
                          "text-xs mt-1 opacity-70",
                          message.role === "user" ? "text-right" : ""
                        )}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-secondary">U</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t bg-muted/50 px-6 py-4">
            <code className="text-sm text-muted-foreground">
              {`<ChatbotInterface messages={messages} onSendMessage={handleSendMessage} />`}
            </code>
          </CardFooter>
        </Card>
      </section>
      
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Chatbot Variants</CardTitle>
            <CardDescription>
              Different styles for chatbot bubbles
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 sm:grid-cols-2">
            <Card className="overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-sm">Minimal Style</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="flex items-start gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <Bot size={16} />
                  </div>
                  <div className="bg-muted rounded-md p-3 text-sm">
                    Hello! How can I help you?
                  </div>
                </div>
                <div className="flex items-start gap-2 justify-end">
                  <div className="bg-primary rounded-md p-3 text-sm text-primary-foreground">
                    I have a question about the design system.
                  </div>
                  <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                    U
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-sm">Modern Style</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4 bg-muted/30">
                <div className="ml-2">
                  <div className="inline-block bg-background rounded-xl p-3 text-sm shadow-sm">
                    <p>Hello! How can I help you?</p>
                    <span className="block text-xs text-muted-foreground mt-1">10:32 AM</span>
                  </div>
                </div>
                <div className="mr-2 text-right">
                  <div className="inline-block bg-primary text-primary-foreground rounded-xl p-3 text-sm shadow-sm">
                    <p>I have a question about the design system.</p>
                    <span className="block text-xs text-primary-foreground/70 mt-1">10:33 AM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </section>
      
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Functional Chatbot</CardTitle>
            <CardDescription>
              A fully functional chatbot with typing indicators and suggestions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FunctionalChatbot 
              initialMessages={[
                {
                  id: "welcome",
                  role: "bot",
                  content: "👋 Hello! I'm your design system assistant. How can I help you today?",
                  timestamp: new Date(),
                }
              ]}
            />
          </CardContent>
          <CardFooter className="border-t bg-muted/50 px-6 py-4">
            <code className="text-sm text-muted-foreground">
              {`<FunctionalChatbot initialMessages={messages} />`}
            </code>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

const componentDemos: Record<string, React.ReactNode> = {
  buttons: <ButtonsDemo />,
  typography: <TypographyDemo />,
  cards: <CardsDemo />,
  badges: <BadgesDemo />,
  chatbot: <ChatbotDemo />,
};

const ComponentDetail = () => {
  const { componentType } = useParams<{ componentType: string }>();
  const navigate = useNavigate();

  const demo = componentType && componentDemos[componentType] ? (
    componentDemos[componentType]
  ) : (
    <div className="text-center py-12">
      <h2 className="text-2xl font-semibold mb-4">Component Not Found</h2>
      <p className="text-muted-foreground mb-6">
        The requested component doesn't have a demo yet.
      </p>
      <Button onClick={() => navigate("/")}>
        Return to Home
      </Button>
    </div>
  );

  const displayName = componentType 
    ? componentType.charAt(0).toUpperCase() + componentType.slice(1) 
    : "Component";

  return (
    <AppShell>
      <div className="mb-8 flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="h-8 w-8 rounded-full"
        >
          <ChevronLeft size={16} />
        </Button>
        <h1 className="text-3xl font-bold">{displayName}</h1>
      </div>

      {demo}
    </AppShell>
  );
};

export default ComponentDetail;
