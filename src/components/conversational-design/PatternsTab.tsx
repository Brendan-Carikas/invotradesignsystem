import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MessageSquare } from "lucide-react";

const PatternsTab = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Common patterns
          </CardTitle>
          <CardDescription>
            Reusable conversation patterns for effective user interactions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Progressive Disclosure</h3>
            <p className="text-muted-foreground">
              Provide information gradually, starting with essential details and revealing more complex information as needed. This prevents overwhelming users and helps them focus on the most relevant information.
            </p>
            <div className="mt-2 p-3 bg-muted rounded-md">
              <p className="text-sm italic">Example:</p>
              <p className="text-sm mt-1"><span className="font-medium">Bot:</span> "I found 3 flights matching your criteria. The shortest flight is 2h15m with AirCo for $320. Would you like to see more details about this flight or view all options?"</p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Guided Navigation</h3>
            <p className="text-muted-foreground">
              Help users navigate complex processes by breaking them into manageable steps and providing clear guidance at each stage. Offer context and direction to keep users oriented.
            </p>
            <div className="mt-2 p-3 bg-muted rounded-md">
              <p className="text-sm italic">Example:</p>
              <p className="text-sm mt-1"><span className="font-medium">Bot:</span> "Let's set up your account. First, I'll need your name and email. Then we'll create a password and set your preferences. We're on step 1 of 4."</p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Disambiguation</h3>
            <p className="text-muted-foreground">
              When user input is ambiguous, present clear options to clarify their intent. Avoid making assumptions that could lead to frustration or errors.
            </p>
            <div className="mt-2 p-3 bg-muted rounded-md">
              <p className="text-sm italic">Example:</p>
              <p className="text-sm mt-1"><span className="font-medium">User:</span> "Show me Apple products."</p>
              <p className="text-sm mt-1"><span className="font-medium">Bot:</span> "I can help with that. Are you interested in: 1) Apple electronics (iPhone, iPad, etc.) or 2) Apple fruit products (juices, snacks, etc.)?"</p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Graceful Recovery</h3>
            <p className="text-muted-foreground">
              When errors occur, acknowledge them clearly and provide constructive paths forward. Avoid technical jargon and focus on solutions rather than problems.
            </p>
            <div className="mt-2 p-3 bg-muted rounded-md">
              <p className="text-sm italic">Example:</p>
              <p className="text-sm mt-1"><span className="font-medium">Bot:</span> "I'm sorry, I couldn't process your payment due to an expired card. You can update your card details or try a different payment method. Would you like me to guide you through either option?"</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Conversation structures
          </CardTitle>
          <CardDescription>
            Organizational patterns for different types of conversational interactions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Task-Oriented</h3>
            <p className="text-muted-foreground">
              Focused on helping users complete specific tasks efficiently. Uses direct questions, clear confirmations, and minimal but sufficient information exchange.
            </p>
            <div className="mt-2 p-3 bg-muted rounded-md">
              <p className="text-sm italic">Suitable for:</p>
              <p className="text-sm mt-1">Booking appointments, placing orders, submitting forms, technical support</p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Information-Seeking</h3>
            <p className="text-muted-foreground">
              Designed to help users find and understand information. Emphasizes comprehensive answers, related suggestions, and educational elements.
            </p>
            <div className="mt-2 p-3 bg-muted rounded-md">
              <p className="text-sm italic">Suitable for:</p>
              <p className="text-sm mt-1">FAQ bots, knowledge bases, educational contexts, research assistance</p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Social/Engagement</h3>
            <p className="text-muted-foreground">
              Focuses on creating engaging, personable interactions. Incorporates personality, humor when appropriate, and relationship-building elements.
            </p>
            <div className="mt-2 p-3 bg-muted rounded-md">
              <p className="text-sm italic">Suitable for:</p>
              <p className="text-sm mt-1">Brand engagement, entertainment bots, community building, long-term user relationships</p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Mixed-Initiative</h3>
            <p className="text-muted-foreground">
              Balances system guidance with user freedom. Allows both the system and user to direct the conversation flow as needed, creating a collaborative experience.
            </p>
            <div className="mt-2 p-3 bg-muted rounded-md">
              <p className="text-sm italic">Suitable for:</p>
              <p className="text-sm mt-1">Complex problem-solving, consultative services, personalized recommendations, coaching</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatternsTab;
