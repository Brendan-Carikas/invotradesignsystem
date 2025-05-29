import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Target, Lightbulb, Hammer } from "lucide-react";
import { GuidanceCard } from "@/components/guidance-card";
import workflowImage from "@/assets/images/ConvAIWorkflow.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StrategizeTab from './StrategizeTab';

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
              <StrategizeTab />
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
                      <GuidanceCard 
                        title="Conversation Mapping"
                        description="Design conversation flows and decision trees for different user scenarios."
                      />
                      
                      <GuidanceCard 
                        title="Bot Persona Development"
                        description="Create a consistent and appropriate personality for your conversational AI."
                      />
                      
                      <GuidanceCard 
                        title="Prototype Testing"
                        description="Test conversation flows with real users and gather feedback for improvement."
                      />
                      
                      <GuidanceCard 
                        title="Content Creation"
                        description="Develop responses, prompts, and content for different conversation paths."
                      />
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
                      <GuidanceCard 
                        title="NLU Development"
                        description="Train natural language understanding models with intents and entities."
                      />
                      
                      <GuidanceCard 
                        title="Integration"
                        description="Connect your conversational AI with backend systems and APIs."
                      />
                      
                      <GuidanceCard 
                        title="Deployment"
                        description="Deploy your solution to production environments."
                      />
                      
                      <GuidanceCard 
                        title="Monitoring & Analytics"
                        description="Track performance and user interactions to continuously improve your solution."
                      />
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
