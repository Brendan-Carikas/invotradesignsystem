import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Target, Lightbulb, Hammer, ArrowRight } from "lucide-react";
import workflowImage from "@/assets/images/ConvAIWorkflow.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ConversationalAIWorkflowTab = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <div className="space-y-6">
      <Card>
      <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Conversational AI workflow
          </CardTitle>
          <CardDescription>
            Visualization of the conversational AI design and development process
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="strategize">
                <Target className="h-4 w-4 mr-2" />
                01: Strategise
              </TabsTrigger>
              <TabsTrigger value="design">
                <Lightbulb className="h-4 w-4 mr-2" />
                02: Design
              </TabsTrigger>
              <TabsTrigger value="build">
                <Hammer className="h-4 w-4 mr-2" />
                03: Build
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
            <div className="flex flex-col items-left">
            <div className="relative">
              <img 
                src={workflowImage} 
                alt="Conversational AI Workflow Diagram" 
                className="max-w-full h-auto rounded-md shadow-md"
                style={{ filter: 'grayscale(100%)' }}
              />
              <div 
                className="absolute inset-0 bg-[#005EA5] mix-blend-color opacity-60 rounded-md"
              ></div>
            </div>
            <div className="mt-6 text-sm text-muted-foreground max-w-3xl">
              <p>The workflow diagram illustrates the three key stages of conversational AI development:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Stage 01: Strategize</strong> - Define the operational, technical, audience, and persona aspects of your conversational AI solution.</li>
                <li><strong>Stage 02: Design</strong> - Create and refine conversation flows through an iterative process of empathizing, verbalizing, drafting, elevating, and validating.</li>
                <li><strong>Stage 03: Build</strong> - Implement the solution through training, testing, connecting to systems, deploying, and monitoring performance.</li>
              </ul>
            </div>
          </div>
            </TabsContent>

            <TabsContent value="strategize" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Stage 01: Strategize
                  </CardTitle>
                  <CardDescription>
                    Define the operational, technical, audience, and persona aspects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>The strategize phase focuses on establishing the foundation for your conversational AI solution:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-2">Business Objectives</h3>
                        <p className="text-sm text-muted-foreground">Define clear goals and success metrics for your conversational AI solution.</p>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-2">Audience Analysis</h3>
                        <p className="text-sm text-muted-foreground">Identify and understand your target users and their specific needs.</p>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-2">Technical Requirements</h3>
                        <p className="text-sm text-muted-foreground">Assess technical constraints and integration points for your solution.</p>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-2">Resource Planning</h3>
                        <p className="text-sm text-muted-foreground">Allocate resources and establish project timelines and milestones.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="design" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Stage 02: Design
                  </CardTitle>
                  <CardDescription>
                    Create and refine conversation flows through an iterative process
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>The design phase focuses on creating effective conversational experiences:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-2">Conversation Mapping</h3>
                        <p className="text-sm text-muted-foreground">Design conversation flows and decision trees for different user scenarios.</p>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-2">Bot Persona Development</h3>
                        <p className="text-sm text-muted-foreground">Create a consistent and appropriate personality for your conversational AI.</p>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-2">Prototype Testing</h3>
                        <p className="text-sm text-muted-foreground">Test conversation flows with real users and gather feedback for improvement.</p>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-2">Content Creation</h3>
                        <p className="text-sm text-muted-foreground">Develop responses, prompts, and content for different conversation paths.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="build" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hammer className="h-5 w-5 text-primary" />
                    Stage 03: Build
                  </CardTitle>
                  <CardDescription>
                    Implement the solution through training, testing, connecting to systems, deploying, and monitoring
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>The build phase focuses on implementing and deploying your conversational AI solution:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-2">NLU Development</h3>
                        <p className="text-sm text-muted-foreground">Train natural language understanding models with intents and entities.</p>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-2">Integration</h3>
                        <p className="text-sm text-muted-foreground">Connect your conversational AI to backend systems, databases, and APIs.</p>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-2">Testing & QA</h3>
                        <p className="text-sm text-muted-foreground">Perform comprehensive testing across different scenarios and edge cases.</p>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-2">Deployment & Monitoring</h3>
                        <p className="text-sm text-muted-foreground">Launch your solution and implement analytics for continuous improvement.</p>
                      </div>
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

export default ConversationalAIWorkflowTab;
