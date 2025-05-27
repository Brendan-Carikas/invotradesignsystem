import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, MessageSquare } from "lucide-react";

const PrinciplesTab = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Core principles
          </CardTitle>
          <CardDescription>
            Fundamental principles that guide effective conversational design
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">1. Human-Centered</h3>
            <p className="text-muted-foreground">
              Design conversations that feel natural, empathetic, and focused on user needs. Avoid robotic or overly technical language unless appropriate for the context.
            </p>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">2. Context-Aware</h3>
            <p className="text-muted-foreground">
              Maintain and utilize conversation context to provide relevant responses. Remember previous interactions and user preferences to create a coherent experience.
            </p>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">3. Transparent</h3>
            <p className="text-muted-foreground">
              Be clear about capabilities and limitations. Set appropriate expectations and provide feedback when the system doesn't understand or can't fulfill a request.
            </p>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">4. Efficient</h3>
            <p className="text-muted-foreground">
              Help users accomplish their goals with minimal effort. Balance conversational elements with efficient task completion.
            </p>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">5. Accessible</h3>
            <p className="text-muted-foreground">
              Design for users with diverse abilities, needs, and preferences. Ensure conversations are accessible across different devices and contexts.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Conversation flow
          </CardTitle>
          <CardDescription>
            Guidelines for structuring effective conversation flows
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Introduction</h3>
            <p className="text-muted-foreground">
              Start with a clear, concise greeting that establishes the purpose and capabilities of the conversational interface. Set appropriate expectations for what the system can and cannot do.
            </p>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Turn-Taking</h3>
            <p className="text-muted-foreground">
              Design for natural turn-taking in the conversation. Provide clear indicators when the system is processing or waiting for user input. Avoid overwhelming users with too much information at once.
            </p>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Error Handling</h3>
            <p className="text-muted-foreground">
              Gracefully handle misunderstandings and errors. Provide helpful recovery options and avoid repetitive error messages. Use clarification questions when appropriate.
            </p>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Closing</h3>
            <p className="text-muted-foreground">
              End conversations appropriately with clear closure and next steps if applicable. Provide a summary of what was accomplished and offer additional assistance if needed.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrinciplesTab;
