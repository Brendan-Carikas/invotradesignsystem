import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Hammer } from "lucide-react";
import { GuidanceCard } from "@/components/guidance-card";
import { BlockquoteCard } from "@/components/blockquote";
import TabHeader from './TabHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BuildTab: React.FC = () => {
  return (
    <Card>
      <TabHeader
        icon={Hammer}
        title="Stage 03: Build"
        description="Implement, test, and deploy your conversational AI solution"
      />
      <CardContent>
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="implementation">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Implementation</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="The best conversational experiences are built iteratively with continuous testing and improvement."
                    author="Conversation Design Institute"
                  />
                  
                  <GuidanceCard 
                    title="Implementation best practices"
                    checklist={[
                      { text: "Start with a minimum viable conversation (MVC)" },
                      { text: "Implement robust error handling" },
                      { text: "Monitor conversation metrics" },
                      { text: "Continuously improve based on user feedback" }
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

export default BuildTab;
