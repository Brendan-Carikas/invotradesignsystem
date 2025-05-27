import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Brain } from "lucide-react";

const AIGuidelinesTab = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            AI capabilities and limitations
          </CardTitle>
          <CardDescription>
            Guidelines for working with AI models in conversational interfaces
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Understanding AI Models</h3>
            <p className="text-muted-foreground">
              Modern conversational AI models are trained on vast datasets of text and code, allowing them to generate human-like responses. However, they have fundamental limitations that must be considered in design.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
              <li>Models don't truly "understand" content; they predict likely responses based on patterns</li>
              <li>Knowledge is limited to training data and may become outdated</li>
              <li>Models can generate plausible-sounding but incorrect information (hallucinations)</li>
              <li>Performance varies across different domains and types of tasks</li>
            </ul>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Designing with AI Capabilities</h3>
            <p className="text-muted-foreground">
              Effective conversational design leverages AI strengths while mitigating weaknesses.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
              <li>Natural language understanding for flexible user inputs</li>
              <li>Context retention across conversation turns</li>
              <li>Personalization based on user preferences and history</li>
              <li>Multimodal capabilities (text, images, etc. depending on model)</li>
              <li>Knowledge integration from various sources</li>
            </ul>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Mitigating AI Limitations</h3>
            <p className="text-muted-foreground">
              Implement safeguards and design patterns that address common AI challenges.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
              <li>Fact-checking mechanisms for critical information</li>
              <li>Clear indication of AI-generated content</li>
              <li>Transparent confidence levels for responses</li>
              <li>Human oversight for sensitive or high-stakes scenarios</li>
              <li>Regular updates to knowledge bases and training data</li>
            </ul>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Ethical Considerations</h3>
            <p className="text-muted-foreground">
              Responsible AI implementation requires attention to ethical implications.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
              <li>Privacy protection and data minimization</li>
              <li>Bias detection and mitigation in AI responses</li>
              <li>Accessibility for diverse user groups</li>
              <li>Transparency about AI use and limitations</li>
              <li>Appropriate content filtering and safety measures</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Prompt engineering
          </CardTitle>
          <CardDescription>
            Techniques for effective communication with AI models
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">System Messages</h3>
            <p className="text-muted-foreground">
              Define the AI's role, capabilities, and constraints through well-crafted system messages that establish the foundation for the conversation.
            </p>
            <div className="mt-2 p-3 bg-muted rounded-md">
              <p className="text-sm italic">Example:</p>
              <p className="text-sm mt-1">"You are a helpful customer service assistant for a telecommunications company. You can help with account inquiries, technical support for internet and mobile services, and billing questions. If asked about services we don't offer or competitor information, politely explain that you don't have that information."</p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Context Management</h3>
            <p className="text-muted-foreground">
              Maintain relevant context throughout the conversation while managing context window limitations.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
              <li>Summarize important information periodically</li>
              <li>Prioritize recent and relevant context</li>
              <li>Use structured formats for critical data</li>
              <li>Implement context compression techniques for longer conversations</li>
            </ul>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Response Formatting</h3>
            <p className="text-muted-foreground">
              Guide the AI to produce consistently structured, usable responses.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
              <li>Specify desired output formats (lists, paragraphs, JSON, etc.)</li>
              <li>Request specific sections or components in responses</li>
              <li>Define length constraints for appropriate response sizing</li>
              <li>Establish consistent terminology and naming conventions</li>
            </ul>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Evaluation and Iteration</h3>
            <p className="text-muted-foreground">
              Continuously improve AI interactions through systematic testing and refinement.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
              <li>Test prompts with diverse inputs and edge cases</li>
              <li>Analyze failure modes and refine instructions</li>
              <li>Collect user feedback on AI responses</li>
              <li>Maintain a library of effective prompts and patterns</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIGuidelinesTab;
