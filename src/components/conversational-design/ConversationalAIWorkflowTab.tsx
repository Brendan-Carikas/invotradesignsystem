import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Lightbulb, Hammer } from "lucide-react";
import workflowImage from "@/assets/images/ConvAIWorkflow.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabHeader from './TabHeader';
import StrategizeTab from './StrategizeTab';
import DesignTab from './DesignTab';
import BuildTab from './BuildTab';

const ConversationalAIWorkflowTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <div className="space-y-6">
      <Card>
        <TabHeader
          icon={Brain}
          title="Conversational AI workflow"
          description="Visualization of the conversational AI design and development process"
        />
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
              <DesignTab />
            </TabsContent>

            <TabsContent value="build" className="space-y-4">
              <BuildTab />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConversationalAIWorkflowTab;
