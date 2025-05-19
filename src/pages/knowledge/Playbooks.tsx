import React from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import TitleDescription from "@/components/TitleDescription";
import { Book, MessageSquare, Users, CheckCircle, FileText } from "lucide-react";

const Playbooks = () => {
  return (
    <AppShell>
      <TitleDescription
        title="Conversational design playbooks"
        description="Practical guides and templates for implementing effective conversational experiences"
        titleSize="h1"
      />

      <Tabs defaultValue="onboarding" className="mt-8">
        <TabsList className="mb-8 flex flex-wrap h-auto justify-start">
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
      </Tabs>
    </AppShell>
  );
};

export default Playbooks;
