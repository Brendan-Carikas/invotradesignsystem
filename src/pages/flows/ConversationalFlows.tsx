import React, { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ArrowRight, User, Bot, MessagesSquare, GitBranch, GitFork, GitMerge } from "lucide-react";

const ConversationalFlows = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Conversational flows</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Design and implement effective conversation patterns for different user scenarios.
          </p>
        </div>

        <Tabs
          defaultValue="overview"
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="w-full justify-start border-b bg-transparent p-0">
            <TabsTrigger
              value="overview"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="patterns"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Flow patterns
            </TabsTrigger>
            <TabsTrigger
              value="examples"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Examples
            </TabsTrigger>
            <TabsTrigger
              value="templates"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Templates
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What are conversational flows?</CardTitle>
                <CardDescription>
                  Structured conversation patterns that guide users through a specific task or interaction
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p>
                  Conversational flows define the structure and sequence of interactions between a user and a conversational interface. 
                  They map out the possible paths a conversation can take, including decision points, branching logic, and error handling.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <MessageCircle className="h-5 w-5 text-primary" />
                        Linear flows
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Simple, sequential conversations with a clear beginning and end. Useful for straightforward tasks like form filling or simple information gathering.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <GitBranch className="h-5 w-5 text-primary" />
                        Branching flows
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Conversations that adapt based on user responses, creating multiple possible paths through the interaction. Useful for decision trees and personalized experiences.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <GitMerge className="h-5 w-5 text-primary" />
                        Contextual flows
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Conversations that maintain context across multiple interactions, allowing users to reference previous parts of the conversation or switch between topics.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <GitFork className="h-5 w-5 text-primary" />
                        Mixed-initiative flows
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Conversations where both the user and system can take initiative, allowing for more natural interactions and flexibility in how tasks are completed.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key components of effective flows</CardTitle>
                <CardDescription>
                  Essential elements for designing successful conversational experiences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Clear user goals</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Each flow should address a specific user need or goal. The purpose of the conversation should be clear to the user from the beginning.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Logical progression</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Conversations should follow a natural and logical sequence, with each step building on previous interactions and moving toward the goal.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MessagesSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Contextual awareness</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      The system should remember previous interactions and maintain context throughout the conversation, avoiding repetitive questions or irrelevant responses.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Error handling</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Flows should gracefully handle unexpected user inputs, misunderstandings, or errors, providing clear guidance on how to get back on track.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Flow Patterns Tab */}
          <TabsContent value="patterns" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Common flow patterns</CardTitle>
                <CardDescription>
                  Reusable conversation structures for different scenarios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 border rounded-lg space-y-4">
                  <h3 className="text-lg font-medium">Onboarding flow</h3>
                  <p className="text-sm text-muted-foreground">
                    A structured introduction to welcome new users, explain capabilities, and set expectations.
                  </p>
                  <div className="bg-muted p-4 rounded-md">
                    <pre className="text-xs overflow-x-auto">
                      <code>
{`Bot: Welcome to [Service]! I'm here to help you with [primary functions].
Bot: Would you like me to explain what I can do for you?
User: Yes
Bot: Great! I can help you with [function 1], [function 2], and [function 3].
Bot: What would you like to do first?
User: [Selection]
Bot: [Proceeds with selected function]`}
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="p-4 border rounded-lg space-y-4">
                  <h3 className="text-lg font-medium">Information gathering flow</h3>
                  <p className="text-sm text-muted-foreground">
                    A systematic approach to collecting necessary information from users while maintaining a conversational feel.
                  </p>
                  <div className="bg-muted p-4 rounded-md">
                    <pre className="text-xs overflow-x-auto">
                      <code>
{`Bot: To help you with [task], I'll need to ask a few questions.
Bot: First, could you tell me [question 1]?
User: [Answer 1]
Bot: Thanks! And [question 2]?
User: [Answer 2]
Bot: Almost done. Finally, [question 3]?
User: [Answer 3]
Bot: Great! Based on what you've told me, I can now [proceed with task].`}
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="p-4 border rounded-lg space-y-4">
                  <h3 className="text-lg font-medium">Troubleshooting flow</h3>
                  <p className="text-sm text-muted-foreground">
                    A diagnostic conversation that helps users identify and resolve problems through a series of questions and solutions.
                  </p>
                  <div className="bg-muted p-4 rounded-md">
                    <pre className="text-xs overflow-x-auto">
                      <code>
{`User: I'm having a problem with [issue]
Bot: I'm sorry to hear that. Let's figure this out together. Could you tell me when you first noticed this issue?
User: [Details]
Bot: Thanks. Have you tried [common solution 1]?
User: Yes, that didn't work
Bot: Let's try something else. What happens when you [diagnostic question]?
User: [Observation]
Bot: Based on that, I think the problem might be [diagnosis]. Try [solution] and let me know if that resolves it.`}
                      </code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Real-world flow examples</CardTitle>
                <CardDescription>
                  Practical implementations of conversational flows for different use cases
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 border rounded-lg space-y-4">
                  <h3 className="text-lg font-medium">Customer support flow</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A flow designed to help users resolve common issues with products or services.
                  </p>
                  <div className="bg-muted p-4 rounded-md space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-sm">Hi there! I'm your support assistant. How can I help you today?</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-secondary/10 p-2 rounded-full flex-shrink-0">
                        <User className="h-4 w-4 text-secondary" />
                      </div>
                      <p className="text-sm">I can't log into my account.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-sm">I'm sorry to hear that. Let's get you back into your account. First, could you tell me if you're getting any specific error message when trying to log in?</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-secondary/10 p-2 rounded-full flex-shrink-0">
                        <User className="h-4 w-4 text-secondary" />
                      </div>
                      <p className="text-sm">It says "incorrect password" but I'm sure I'm using the right one.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm space-y-2">
                        <p>Thanks for that information. Here are a few things we can try:</p>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>Make sure your caps lock is off</li>
                          <li>Try resetting your password</li>
                          <li>Check if you're using the correct email address</li>
                        </ol>
                        <p>Would you like to try resetting your password?</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg space-y-4">
                  <h3 className="text-lg font-medium">Product recommendation flow</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A flow that helps users discover products based on their preferences and needs.
                  </p>
                  <div className="bg-muted p-4 rounded-md space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-sm">Welcome to our product finder! I can help you find the perfect product for your needs. What type of product are you looking for today?</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-secondary/10 p-2 rounded-full flex-shrink-0">
                        <User className="h-4 w-4 text-secondary" />
                      </div>
                      <p className="text-sm">I need a new laptop for work.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-sm">Great! To help you find the right laptop, could you tell me what kind of work you'll be using it for? For example, are you doing graphic design, programming, writing, or something else?</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-secondary/10 p-2 rounded-full flex-shrink-0">
                        <User className="h-4 w-4 text-secondary" />
                      </div>
                      <p className="text-sm">Mostly programming and some video editing.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-sm">Thanks for sharing that. For programming and video editing, you'll need a laptop with good processing power and RAM. What's your budget range for this purchase?</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Templates Tab */}
          <TabsContent value="templates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Flow templates</CardTitle>
                <CardDescription>
                  Ready-to-use conversation templates for common scenarios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-2 border-dashed hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-base">Appointment scheduling</CardTitle>
                      <CardDescription>Guide users through booking an appointment or meeting</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        A structured flow for collecting date, time, and purpose information for appointments.
                      </p>
                      <div className="flex justify-end">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Download template</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-dashed hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-base">Feedback collection</CardTitle>
                      <CardDescription>Gather structured feedback from users</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        A conversational approach to collecting qualitative and quantitative feedback.
                      </p>
                      <div className="flex justify-end">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Download template</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-dashed hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-base">Order status inquiry</CardTitle>
                      <CardDescription>Help users check on their orders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        A flow for authenticating users and providing order status information.
                      </p>
                      <div className="flex justify-end">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Download template</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-dashed hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-base">FAQ navigation</CardTitle>
                      <CardDescription>Guide users to relevant information</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        A flow for helping users find answers to common questions through conversation.
                      </p>
                      <div className="flex justify-end">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Download template</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default ConversationalFlows;
