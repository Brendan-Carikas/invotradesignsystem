import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, ArrowRight, User, Bot, MessagesSquare, GitBranch, GitFork, GitMerge } from "lucide-react";

const FlowsTab = () => {
  const [activeSubTab, setActiveSubTab] = useState("overview");

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-primary" />
            Conversational Flows
          </CardTitle>
          <CardDescription>
            Design and implement effective conversation patterns for different user scenarios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="overview"
            value={activeSubTab}
            onValueChange={setActiveSubTab}
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

            {/* Overview Sub-Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="space-y-6">
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
              </div>

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

            {/* Flow Patterns Sub-Tab */}
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
                  </div>
                  
                  <div className="p-4 border rounded-lg space-y-4">
                    <h3 className="text-lg font-medium">Information gathering flow</h3>
                    <p className="text-sm text-muted-foreground">
                      A systematic approach to collecting necessary information from users through a series of questions.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg space-y-4">
                    <h3 className="text-lg font-medium">Decision tree flow</h3>
                    <p className="text-sm text-muted-foreground">
                      A branching conversation that helps users make decisions by narrowing down options based on their responses.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg space-y-4">
                    <h3 className="text-lg font-medium">Troubleshooting flow</h3>
                    <p className="text-sm text-muted-foreground">
                      A diagnostic conversation that helps users identify and solve problems through a series of questions and suggestions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Examples Sub-Tab */}
            <TabsContent value="examples" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Example flows</CardTitle>
                  <CardDescription>
                    Real-world examples of effective conversational flows
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 border rounded-lg space-y-4">
                    <h3 className="text-lg font-medium">Customer support flow</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      A flow designed to help users troubleshoot common issues and connect with human support when needed.
                    </p>
                    <div className="bg-muted p-4 rounded-md">
                      <pre className="text-sm whitespace-pre-wrap">
                        <span className="font-bold text-primary">Bot:</span> Hi there! I'm here to help with any issues you might be having. What can I assist you with today?<br/><br/>
                        <span className="font-bold">User:</span> I can't log into my account<br/><br/>
                        <span className="font-bold text-primary">Bot:</span> I'm sorry to hear you're having trouble logging in. Let me help you troubleshoot. Have you forgotten your password?<br/><br/>
                        <span className="font-bold">User:</span> No, it says my account is locked<br/><br/>
                        <span className="font-bold text-primary">Bot:</span> I understand. Accounts can be locked after multiple failed login attempts for security reasons. Would you like me to help you unlock your account?<br/><br/>
                        <span className="font-bold">User:</span> Yes please<br/><br/>
                        <span className="font-bold text-primary">Bot:</span> Great. I'll need to verify your identity first. Could you please provide the email address associated with your account?
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Templates Sub-Tab */}
            <TabsContent value="templates" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Flow templates</CardTitle>
                  <CardDescription>
                    Ready-to-use templates for common conversational scenarios
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 border rounded-lg space-y-4">
                    <h3 className="text-lg font-medium">Onboarding template</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      A template for creating effective first-time user experiences.
                    </p>
                    <div className="bg-muted p-4 rounded-md">
                      <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li><strong>Welcome message:</strong> Introduce the bot and its purpose</li>
                        <li><strong>Capability overview:</strong> Explain what the bot can help with</li>
                        <li><strong>Example interactions:</strong> Show examples of how to interact</li>
                        <li><strong>First task prompt:</strong> Guide user to their first interaction</li>
                        <li><strong>Feedback request:</strong> Ask for initial feedback</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlowsTab;
