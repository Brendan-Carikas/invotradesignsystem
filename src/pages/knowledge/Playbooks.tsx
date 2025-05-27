import React from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import TitleDescription from "@/components/TitleDescription";
import { Book, MessageSquare, Users, CheckCircle, FileText, Code } from "lucide-react";

const Playbooks = () => {
  return (
    <AppShell>
      <TitleDescription
        title="Conversational design playbooks"
        description="Practical guides and templates for implementing effective conversational experiences"
        titleSize="h1"
      />

      <Tabs defaultValue="systeminstructions" className="mt-8">
        <TabsList className="mb-8 flex flex-wrap h-auto justify-start">
        <TabsTrigger value="systeminstructions" className="mb-1 mr-1">Extract System instructions</TabsTrigger>
          <TabsTrigger value="onboarding" className="mb-1 mr-1">Onboarding</TabsTrigger>
          <TabsTrigger value="support" className="mb-1 mr-1">Customer support</TabsTrigger>
          <TabsTrigger value="sales" className="mb-1 mr-1">Sales & marketing</TabsTrigger>
          <TabsTrigger value="templates" className="mb-1 mr-1">Templates</TabsTrigger>
          <TabsTrigger value="bestpractices" className="mb-1 mr-1">Checklists</TabsTrigger>
        </TabsList>

        {/* Onboarding Playbook */}
        <TabsContent value="onboarding" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5 text-primary" />
                Onboarding playbook
              </CardTitle>
              <CardDescription>
                Guide for designing effective onboarding conversations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Introduction & Welcome</h3>
                <p className="text-muted-foreground">
                  Best practices for creating welcoming, informative introductions that set the right tone and expectations.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Keep initial messages brief and friendly</li>
                  <li>Clearly communicate the value proposition</li>
                  <li>Set expectations about capabilities</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Feature Discovery</h3>
                <p className="text-muted-foreground">
                  Techniques for introducing features through conversation without overwhelming users.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Progressive disclosure of features</li>
                  <li>Contextual introduction of capabilities</li>
                  <li>Interactive tutorials and guided experiences</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">User Profiling</h3>
                <p className="text-muted-foreground">
                  Conversational approaches to gathering user preferences and needs.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Ask focused, relevant questions</li>
                  <li>Explain why information is being collected</li>
                  <li>Offer personalized suggestions based on responses</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Customer Support Playbook */}
        <TabsContent value="support" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Customer support playbook
              </CardTitle>
              <CardDescription>
                Strategies for effective customer support conversations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Issue Identification</h3>
                <p className="text-muted-foreground">
                  Techniques for efficiently identifying customer issues through conversation.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Ask clarifying questions to pinpoint problems</li>
                  <li>Use categorization to streamline troubleshooting</li>
                  <li>Confirm understanding before proceeding to solutions</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Resolution Paths</h3>
                <p className="text-muted-foreground">
                  Structured approaches for guiding users to solutions.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Start with simple, common solutions</li>
                  <li>Provide step-by-step guidance</li>
                  <li>Confirm resolution and offer additional help</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Escalation Framework</h3>
                <p className="text-muted-foreground">
                  Guidelines for when and how to escalate issues to human agents.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Recognize escalation triggers</li>
                  <li>Manage transitions smoothly with context preservation</li>
                  <li>Set expectations for escalation process</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sales & Marketing Playbook */}
        <TabsContent value="sales" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Sales & marketing playbook
              </CardTitle>
              <CardDescription>
                Conversational strategies for engaging potential customers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Qualification Conversations</h3>
                <p className="text-muted-foreground">
                  Techniques for qualifying leads through natural conversation.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Ask open-ended discovery questions</li>
                  <li>Identify needs and pain points conversationally</li>
                  <li>Determine fit without feeling like an interrogation</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Product Education</h3>
                <p className="text-muted-foreground">
                  Approaches for educating users about products and services.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Focus on benefits relevant to user needs</li>
                  <li>Use conversational explanations with examples</li>
                  <li>Provide interactive demonstrations when possible</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Conversion Optimization</h3>
                <p className="text-muted-foreground">
                  Strategies for guiding users toward conversion actions.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Identify appropriate moments for calls-to-action</li>
                  <li>Address objections conversationally</li>
                  <li>Provide clear next steps and guidance</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Conversation templates
              </CardTitle>
              <CardDescription>
                Ready-to-use templates for common conversation scenarios
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Welcome & Onboarding</h3>
                <div className="bg-muted p-4 rounded-md text-sm">
                  <p className="font-medium">Template:</p>
                  <p className="mt-2">"Hi there! 👋 I'm [Bot Name], your [purpose] assistant. I can help you with [key capabilities]. Would you like to:</p>
                  <p className="mt-1">1️⃣ Learn what I can do</p>
                  <p className="mt-1">2️⃣ Get started with [key feature]</p>
                  <p className="mt-1">3️⃣ Ask me a specific question"</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Issue Resolution</h3>
                <div className="bg-muted p-4 rounded-md text-sm">
                  <p className="font-medium">Template:</p>
                  <p className="mt-2">"I understand you're having an issue with [problem area]. To help you best, could you tell me:</p>
                  <p className="mt-1">1. When did you first notice this issue?</p>
                  <p className="mt-1">2. What steps have you already tried?</p>
                  <p className="mt-1">3. Are you seeing any error messages?"</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Feature Introduction</h3>
                <div className="bg-muted p-4 rounded-md text-sm">
                  <p className="font-medium">Template:</p>
                  <p className="mt-2">"Great news! We've just launched [feature name], which helps you [benefit]. Would you like to:</p>
                  <p className="mt-1">✨ See how it works</p>
                  <p className="mt-1">🚀 Try it right now</p>
                  <p className="mt-1">📅 Remind me later"</p>
                </div>
              </div>
            </CardContent>
          </Card>


        </TabsContent>

        {/* Best Practices Tab */}
        <TabsContent value="bestpractices" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Best practices checklist
              </CardTitle>
              <CardDescription>
                Checklist for evaluating conversation designs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Clear Purpose</p>
                    <p className="text-sm text-muted-foreground">Each conversation has a clear purpose and user benefit</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Natural Language</p>
                    <p className="text-sm text-muted-foreground">Conversations use natural, conversational language</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Error Handling</p>
                    <p className="text-sm text-muted-foreground">Includes graceful handling of misunderstandings</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Context Awareness</p>
                    <p className="text-sm text-muted-foreground">Maintains and uses conversation context appropriately</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Accessibility</p>
                    <p className="text-sm text-muted-foreground">Designed to be accessible to users with diverse needs</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System Instructions Tab */}
        <TabsContent value="systeminstructions" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Extract system instructions
              </CardTitle>
              <CardDescription>
                Guide for creating effective system prompts for AI assistants
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Prompting ChatGPT to Create System Prompts for an AI Assistant</h3>
                <p className="text-muted-foreground">
                  This guide outlines the steps you can follow to create system prompts/instructions for an AI assistant using ChatGPT.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Step 1: Identify the Assistant Role and Use Case</h3>
                <p className="text-muted-foreground">
                  Clearly define the purpose and functional context of the assistant.
                </p>
                <p className="text-sm text-muted-foreground mt-2 italic">
                  Example: "Sales Associate Assistant for a B2B SaaS company."
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Step 2: Write a Sample Interaction (Happy Path)</h3>
                <p className="text-muted-foreground">
                  Create a basic, ideal flow of conversation between the assistant and a user.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Use clear roles (Assistant/Visitor)</li>
                  <li>Focus on the optimal user journey</li>
                  <li>Include actionable prompts and user responses</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Step 3: Enhance with Starter Prompts (Optional)</h3>
                <p className="text-muted-foreground">
                  Add starter prompts at the beginning of the interaction to offer users predefined choices.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  This improves onboarding and helps direct users quickly.
                </p>
                <p className="text-sm text-muted-foreground mt-2 italic">
                  Example: "Here are some quick options: Learn about product features, Schedule a demo, etc."
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Step 4: Apply Happy-Path Design Principles</h3>
                <p className="text-muted-foreground">
                  Ensure the flow:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Has minimal friction</li>
                  <li>Leads users quickly to their goal</li>
                  <li>Offers smooth transitions and graceful exits</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Step 5: Convert Interaction to Branching Flow (Optional)</h3>
                <p className="text-muted-foreground">
                  If relevant, convert the conversation into a branching format for decision trees.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  This is useful for complex assistants or those with multiple use cases.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Step 6: Prompt ChatGPT to Generate System Prompts/Instructions</h3>
                <p className="text-muted-foreground">
                  Request structured system-level guidance based on the interaction.
                </p>
                <div className="mt-2 p-3 bg-muted rounded-md relative group">
                  <pre className="text-sm whitespace-pre-wrap overflow-x-auto">Create system prompts/instructions for an AI assistant based on the above flow. This includes tone, behavioural rules, error handling, starter prompts, and more.</pre>
                  <button 
                    className="absolute top-2 right-2 p-1 rounded-md bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => {
                      navigator.clipboard.writeText('Create system prompts/instructions for an AI assistant based on the above flow. This includes tone, behavioural rules, error handling, starter prompts, and more.');
                    }}
                    title="Copy to clipboard"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  </button>
                </div>
                <div className="mt-2 p-3 bg-muted rounded-md relative group">
                  <pre className="text-sm whitespace-pre-wrap overflow-x-auto">Create system prompts/instructions for an AI assistant. This should define how the behaviour and dialog of the AI assistant. This should be based on the Sales Associate Assistant above.</pre>
                  <button 
                    className="absolute top-2 right-2 p-1 rounded-md bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => {
                      navigator.clipboard.writeText('Create system prompts/instructions for an AI assistant. This should define how the behaviour and dialog of the AI assistant. This should be based on the Sales Associate Assistant above.');
                    }}
                    title="Copy to clipboard"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  </button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Outcome</h3>
                <p className="text-muted-foreground">
                  By following these steps, you'll generate clear, structured, and effective system prompts to govern your AI assistant's tone, behavior, and logic. This is ideal for developers, designers, and AI trainers building conversational experiences.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Example Output</h3>
                <p className="text-muted-foreground mb-4">
                  Here's an example of the system prompts that might be generated using this process:
                </p>
                <div className="bg-muted p-4 rounded-md relative group">
                  <h4 className="font-medium mb-3">System Prompts for Sales Associate Assistant</h4>
                  
                  <h5 className="font-medium mt-4 mb-2">Objective:</h5>
                  <p className="text-sm text-muted-foreground">
                    The AI Assistant's primary objective is to facilitate user interactions by providing sales-related information, collecting contact details, and guiding the user toward specific resources such as demos, product overviews, and sales representatives.
                  </p>
                  
                  <h5 className="font-medium mt-4 mb-2">Tone and Personality:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Friendly, approachable, and professional.</li>
                    <li>Clear and concise in communication.</li>
                    <li>Focused on user needs while subtly guiding toward desired actions (e.g., scheduling a demo, downloading a brochure).</li>
                  </ul>
                  
                  <h5 className="font-medium mt-4 mb-2">Behavioral Guidelines:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Always greet the user and provide clear, actionable options upfront.</li>
                    <li>Use open-ended questions to assess the user's needs initially, then narrow down to specific paths.</li>
                    <li>Maintain a positive, solution-oriented tone, even when the user is uncertain.</li>
                    <li>Offer multiple options but keep them limited to three choices to avoid overwhelming the user.</li>
                  </ul>
                  
                  <h5 className="font-medium mt-4 mb-2">Example Starter Prompts:</h5>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>"Hi there! How can I assist you today? Here are some quick options to get started: Learn about product features, Connect with a sales representative, or Schedule a demo."</li>
                    <li>"I can help you with information about our CRM features, reporting tools, or customer segmentation. Which one would you like to explore first?"</li>
                    <li>"Would you like to receive a product overview via email, download the brochure from our website, or schedule a quick demo to see the product in action?"</li>
                  </ul>
                  
                  <h5 className="font-medium mt-4 mb-2">Data Collection Prompts:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>"To proceed, may I have your first name?"</li>
                    <li>"Thanks! And your last name?"</li>
                    <li>"Lastly, could you provide your email address so our sales team can connect with you?"</li>
                  </ul>
                  
                  <h5 className="font-medium mt-4 mb-2">Transition Prompts:</h5>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>"That's great to hear! While you wait for our sales team to reach out, would you like to: Download a product brochure, Schedule a demo, or Visit our website for more information?"</li>
                    <li>"You're all set, John! The sales representative will be in touch shortly. Meanwhile, here's a link to schedule a demo if you're interested: [Calendly Link]"</li>
                  </ul>
                  
                  <h5 className="font-medium mt-4 mb-2">Error Handling Prompts:</h5>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>"I didn't quite catch that. Could you please clarify if you'd like to learn about features, connect with a representative, or schedule a demo?"</li>
                    <li>"It seems that the email address provided is incomplete. Could you please double-check and provide the correct one?"</li>
                  </ul>
                  
                  <h5 className="font-medium mt-4 mb-2">Closing Prompts:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>"Thank you for reaching out, John! You'll hear from us soon. Have a wonderful day!"</li>
                    <li>"You're all set! If you need further assistance, feel free to return anytime. Goodbye for now!"</li>
                  </ul>
                  
                  <button 
                    className="absolute top-2 right-2 p-1 rounded-md bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => {
                      navigator.clipboard.writeText(`System Prompts for Sales Associate Assistant

Objective:
The AI Assistant's primary objective is to facilitate user interactions by providing sales-related information, collecting contact details, and guiding the user toward specific resources such as demos, product overviews, and sales representatives.

Tone and Personality:
- Friendly, approachable, and professional.
- Clear and concise in communication.
- Focused on user needs while subtly guiding toward desired actions (e.g., scheduling a demo, downloading a brochure).

Behavioral Guidelines:
- Always greet the user and provide clear, actionable options upfront.
- Use open-ended questions to assess the user's needs initially, then narrow down to specific paths.
- Maintain a positive, solution-oriented tone, even when the user is uncertain.
- Offer multiple options but keep them limited to three choices to avoid overwhelming the user.

Example Starter Prompts:
- "Hi there! How can I assist you today? Here are some quick options to get started: Learn about product features, Connect with a sales representative, or Schedule a demo."
- "I can help you with information about our CRM features, reporting tools, or customer segmentation. Which one would you like to explore first?"
- "Would you like to receive a product overview via email, download the brochure from our website, or schedule a quick demo to see the product in action?"

Data Collection Prompts:
- "To proceed, may I have your first name?"
- "Thanks! And your last name?"
- "Lastly, could you provide your email address so our sales team can connect with you?"

Transition Prompts:
- "That's great to hear! While you wait for our sales team to reach out, would you like to: Download a product brochure, Schedule a demo, or Visit our website for more information?"
- "You're all set, John! The sales representative will be in touch shortly. Meanwhile, here's a link to schedule a demo if you're interested: [Calendly Link]"

Error Handling Prompts:
- "I didn't quite catch that. Could you please clarify if you'd like to learn about features, connect with a representative, or schedule a demo?"
- "It seems that the email address provided is incomplete. Could you please double-check and provide the correct one?"

Closing Prompts:
- "Thank you for reaching out, John! You'll hear from us soon. Have a wonderful day!"
- "You're all set! If you need further assistance, feel free to return anytime. Goodbye for now!"`)
                    }}
                    title="Copy to clipboard"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppShell>
  );
};

export default Playbooks;
