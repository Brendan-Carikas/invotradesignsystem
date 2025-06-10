import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabHeader from './TabHeader';
import { Grid3X3 } from "lucide-react";
import technologyQuadrantSvg from "@/assets/images/TechnologyQuadrant.svg";

const QuadrantsTab: React.FC = () => {
  return (
    <Card>
      <TabHeader
        icon={Grid3X3}
        title="Quadrants"
        description="Frameworks for understanding different aspects of conversational AI"
      />
      <CardContent>
        <Tabs defaultValue="technology" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="organization">Organization</TabsTrigger>
          </TabsList>
          
          <TabsContent value="technology" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Technology Quadrant</h3>
              <p className="text-muted-foreground">
                The Technology Quadrant framework helps understand the different dimensions of technology implementation in conversational AI projects.
              </p>
              
              <div className="flex justify-center my-6">
                <img 
                  src={technologyQuadrantSvg} 
                  alt="Technology Quadrant Diagram" 
                  className="max-w-full h-auto"
                  style={{ maxHeight: '500px' }}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                  <h4 className="font-medium">Mindset</h4>
                  <p className="text-sm text-muted-foreground">
                    The attitudes, beliefs, and approaches that teams bring to technology implementation. This includes openness to innovation, willingness to experiment, and understanding of technological possibilities.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Skillset</h4>
                  <p className="text-sm text-muted-foreground">
                    The technical capabilities and expertise needed to implement conversational AI solutions. This includes programming, prompt engineering, data analysis, and understanding of AI models.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Culture</h4>
                  <p className="text-sm text-muted-foreground">
                    The organizational environment that supports technology adoption. This includes collaboration patterns, knowledge sharing, learning opportunities, and how failure and experimentation are handled.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Systems</h4>
                  <p className="text-sm text-muted-foreground">
                    The technical infrastructure, tools, and processes that enable conversational AI. This includes integration capabilities, development environments, and operational frameworks.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="experience" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Experience Quadrant</h3>
              <p className="text-muted-foreground">
                Coming soon: A framework for understanding the user experience dimensions of conversational AI.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="organization" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Organization Quadrant</h3>
              <p className="text-muted-foreground">
                Coming soon: A framework for understanding organizational aspects of implementing conversational AI.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default QuadrantsTab;
