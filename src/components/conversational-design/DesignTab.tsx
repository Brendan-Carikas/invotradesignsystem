import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { GuidanceCard } from "@/components/guidance-card";
import { BlockquoteCard } from "@/components/blockquote";
import TabHeader from './TabHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DesignTab: React.FC = () => {
  return (
    <Card>
      <TabHeader
        icon={Lightbulb}
        title="Stage 02: Design"
        description="Create conversation flows, scripts, and user journeys"
      />
      <CardContent>
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="flows">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Conversation Flows</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="Design the conversation, not just the interface."
                    author="Conversation Design Institute"
                  />
                  
                  <GuidanceCard 
                    title="Flow design principles"
                    checklist={[
                      { text: "Keep it simple and intuitive" },
                      { text: "Design for errors and edge cases" },
                      { text: "Consider the user's context and goals" },
                      { text: "Test with real users early and often" }
                    ]}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Add more accordion items as needed */}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
};

export default DesignTab;
