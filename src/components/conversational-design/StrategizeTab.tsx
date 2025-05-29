import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";
import { GuidanceCard } from "@/components/guidance-card";
import { BlockquoteCard } from "@/components/blockquote";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const StrategizeTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Target className="h-5 w-5 text-primary" />
          Stage 01: Strategize
        </CardTitle>
        <CardDescription>
          Define the operational, technical, audience, and persona aspects
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="operations">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Operations</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="What conversations are worth having?"
                    author="Conversation Design Institute"
                  />

                  <GuidanceCard 
                    title="Explore operations"
                    checklist={[
                      { text: 'Analyse the organisation', checked: true },
                      { text: 'Find opportunities for conversational AI', checked: true },
                    ]}
                  />

                  <GuidanceCard 
                    title="External and Internal"
                    checklist={[
                      { text: 'Some conversations we automate are external facing-wth customers, patients, etc.', checked: true },
                      { text: 'Sometimes we employ conversational AI in existing conversations', checked: true },
                    ]}
                  />
                  
                  <GuidanceCard 
                    title="Productivity and Savings"
                    checklist={[
                      { text: 'Some conversations we automate are external facing-wth customers, patients, etc.', checked: true },
                      { text: 'Sometimes we employ conversational AI in existing conversations', checked: true },
                    ]}
                  />

<h4 className="text-sm font-bold mt-6 mb-2">How</h4>
                <GuidanceCard 
                    title="Taxonomy of use cases"
                    checklist={[
                      { text: 'An overview of all the different types of conversations that you want to create an AI assistant for' },
                    ]}
                  />

<GuidanceCard 
                    title="Finding worthwhile use cases"
                    checklist={[
                      { text: 'An overview of all the different types of conversations that you want to create an AI assistant for' },
                    ]}
                  />

                  <GuidanceCard
                    title="Finding worthwhile use cases"
                    checklist={[
                      { text: 'Start by identifying all existing conversations (internal and external)' },
                      { text: 'Identify journeys with friction' },
                      { text: 'Benchmark these against organizational goals' }
                    ]}
                  />

                  <GuidanceCard
                    title="Deliverables"
                    checklist={[
                      { text: 'Taxonomy of current conversations in organization (an overview of all possible use cases)' },
                      { text: 'Roadmap for AI assistant based on organizational goals (use cases that are worth automating)' }
                    ]}
                  />

                  <h4 className="text-sm font-bold mt-6 mb-2">Examples</h4>

                  <GuidanceCard
                    title="Identify existing internal journeys"
                    checklist={[
                      { text: 'Scheduling questions' },
                      { text: 'Vacations' },
                      { text: 'IT support' },
                      { text: 'Meal questions' },
                      { text: 'Commute questions' }
                    ]}
                  />

                  <GuidanceCard
                    title="Identify existing internal journeys"
                    checklist={[
                      { text: 'Scheduling questions' },
                      { text: 'Vacations' },
                      { text: 'IT support' },
                      { text: 'Meal questions' },
                      { text: 'Commute questions' },
                      { text: 'HR' }
                    ]}
                  />

                  <GuidanceCard
                    title="Identify existing external journeys"
                    checklist={[
                      { text: 'Map out the entire customer journey' },
                      { text: 'Discovery' },
                      { text: 'Purchase' },
                      { text: 'FAQ' },
                      { text: 'Bookings at Moonshot' }
                    ]}
                  />

                  <GuidanceCard
                    title="Explore possible external journeys"
                    checklist={[
                      { text: 'Ordering food through a chatbot instead of waiting in line' },
                      { text: 'Games while waiting in necessary lines' },
                      { text: 'Alien robots to answer FAQs or make bookings' }
                    ]}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="audience">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Audience Analysis</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="What conversations are worth having?"
                    author="Conversation Design Institute"
                  />

                  <GuidanceCard 
                    title="Explore operations"
                    checklist={[
                      { text: 'Analyse the organisation', checked: true },
                      { text: 'Find opportunities for conversational AI', checked: true },
                    ]}
                  />

                  <GuidanceCard 
                    title="External and Internal"
                    checklist={[
                      { text: 'Some conversations we automate are external facing-wth customers, patients, etc.', checked: true },
                      { text: 'Sometimes we employ conversational AI in existing conversations', checked: true },
                    ]}
                  />
                  
                  <GuidanceCard 
                    title="Productivity and Savings"
                    checklist={[
                      { text: 'Some conversations we automate are external facing-wth customers, patients, etc.', checked: true },
                      { text: 'Sometimes we employ conversational AI in existing conversations', checked: true },
                    ]}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="technical">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Technical Requirements</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="What conversations are worth having?"
                    author="Conversation Design Institute"
                  />

                  <GuidanceCard 
                    title="Explore operations"
                    checklist={[
                      { text: 'Analyse the organisation', checked: true },
                      { text: 'Find opportunities for conversational AI', checked: true },
                    ]}
                  />

                  <GuidanceCard 
                    title="External and Internal"
                    checklist={[
                      { text: 'Some conversations we automate are external facing-wth customers, patients, etc.', checked: true },
                      { text: 'Sometimes we employ conversational AI in existing conversations', checked: true },
                    ]}
                  />
                  
                  <GuidanceCard 
                    title="Productivity and Savings"
                    checklist={[
                      { text: 'Some conversations we automate are external facing-wth customers, patients, etc.', checked: true },
                      { text: 'Sometimes we employ conversational AI in existing conversations', checked: true },
                    ]}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
};

export default StrategizeTab;
