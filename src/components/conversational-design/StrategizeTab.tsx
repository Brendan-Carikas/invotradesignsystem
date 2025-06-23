import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";
import { GuidanceCard } from "@/components/guidance-card";
import { BlockquoteCard } from "@/components/blockquote";
import conversationTaxonomySvg from "@/assets/images/ConversationTaxonomy.svg";
import audiencePersonasImg from "@/assets/images/audience-personas.png";
import TabHeader from './TabHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const StrategizeTab: React.FC = () => {
  return (
    <Card>
      <TabHeader
        icon={Target}
        title="Stage 01: Strategise"
        description="Define the operational, technical, audience, and persona aspects"
      />
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
                
                <div className="flex justify-center my-6">
                  <img 
                    src={conversationTaxonomySvg} 
                    alt="Conversation Taxonomy Diagram" 
                    className="max-w-full h-auto"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
                
                

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

                  <GuidanceCard
                    title="Thinking about channels"
                    checklist={[
                      { text: 'Create overview of which channels are appropriate for which use cases' }
                    ]}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="audience">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Technology</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="To what extent are we even capable of automating these conversations?"
                    author="Conversation Design Institute"
                  />

                  <GuidanceCard 
                    title="Things to consider when exploring tech"
                    checklist={[
                      { text: 'Conversational AI tech you currently have' },
                      { text: 'Your current ecosystem' },
                      { text: 'Technical landscape outside your organization' }
                    ]}
                    description="You need to be strategic with your choices here."
                  />

                  <GuidanceCard 
                    title="Some questions to ask about tech..."
                    checklist={[
                      { text: "What's the total cost of ownership?" },
                      { text: 'Do we need this?' },
                      { text: 'How does it integrate with our other channels?' },
                      { text: 'Are we going to be able to use this 2, 3, 4... years from now?' },
                      { text: 'Does this tech make sense for the kind of organization we are?' }
                    ]}
                  />

<h4 className="text-sm font-bold mt-6 mb-2">How</h4>
<GuidanceCard 
                    title="Tech considerations"
                    checklist={[
                      { text: "Legacy systems vs future tech" },
                      { text: "Total cost of ownership" },
                      { text: "How many FTE will you need? With what skill sets?" },
                      { text: "Build or buy?" }
                    ]}
                  />

                  <GuidanceCard 
                    title="Deliverable"
                    checklist={[
                      { text: "Overview of your IT infrastructure" },
                      { text: "Components you need for conversations now and in the future" },
                      { text: "What needs to be bought vs built" },
                      { text: "Operational overview" }
                    ]}
                  />

                </div>
                
                
                
                
             



              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="technical">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Audience and Channels</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="Don’t think of them as users. Think of them as actual people."
                    author="Conversation Design Institute"
                  />
                  <GuidanceCard 
                    title="Some questions to ask about audience..."
                    checklist={[
                      { text: "Who are we talking to?" },
                      { text: "How do they see the world?" },
                      { text: "What kind of problems do they have?" },
                      { text: "How do they navigate our brand?" },
                      { text: "Which channels do they want to talk to us on?" },
                      { text: "Which channels are appropriate for which conversations?" }
                    ]}
                  />

                  <GuidanceCard 
                    title="Inclusivity and bias"
                    checklist={[
                      { text: "Think about everyone" },
                      { text: "Consider identity characteristics" },
                      { text: "Understand what your audience needs" },
                      { text: "Be aware of your biases" },
                      { text: "Have a diverse team" }
                    ]}
                  /> 

<h4 className="text-sm font-bold mt-6 mb-2">How</h4>

<BlockquoteCard
                    quote="Inclusivity increases adoption. Thus, it contributes to the bottom line."
                    author="Conversation Design Institute"
                  />

<GuidanceCard 
                    title="Audience persona"
                    checklist={[
                      { text: "Complete the audience persona form with one audience member in mind, and create a fleshed out character." },
                      { text: "Then repeat until you have an inclusive set of characters that represent your audience." },
                      { text: "These can be found under 'Audience Personas' in the left navigation." },
                      { text: "See more comprehensive guidance in the Playbooks section." }
                    ]}
                  />

                  <div className="flex justify-center my-6">
                    <img 
                      src={audiencePersonasImg} 
                      alt="Audience Personas" 
                      className="max-w-full h-auto"
                      style={{ maxHeight: '200px' }}
                    />
                  </div>

                  <GuidanceCard 
                    title="Deliverables"
                    checklist={[
                      { text: "Filled in audience canvases" },
                      { text: "Overview of channels you want to deploy on" },
                      { text: "Limitations for each channel" },
                      { text: "What kind of conversations we want to have on each channel" }
                    ]}
                  />


                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="technical">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Bot Personas</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="If we want to have long and meaningful conversations with people, we need to design for empathy and trust."
                    author="Conversation Design Institute"
                  />
                  <GuidanceCard 
                    title="Pareidolia"
                    checklist={[
                      { text: "The tendency to perceive a specific, often meaningful image in a random or ambiguous visual pattern. E.g., seeing faces in inanimate objects." },
                  
                    ]}
                    hideCheckIcons
                  />

                  <GuidanceCard 
                    title="Risks of writing without persona"
                    checklist={[
                      { text: "⚠️ Inconsistent" },
                      { text: "⚠️ Less likable" },
                      { text: "⚠️ Less trustworthy" }
                    ]}
                    hideCheckIcons
                  />


<BlockquoteCard
                    quote="Trust is a comfortable relationship with the unknown."
                    author="Rachel Botsman"
                  />

                  <GuidanceCard 
                    title="Trust markers in conversational AI"
                    checklist={[
                      { text: "➤ Bot persona as an ethical framework" },
                      { text: "➤ Explainability" },
                      { text: "➤ Personality content – jokes, chitchat, etc." }
                    ]}
                    hideCheckIcons
                  />                 

<h4 className="text-sm font-bold mt-6 mb-2">How</h4>



<GuidanceCard 
                    title="Bot persona"
                    checklist={[
                      { text: "Complete the Bot persona" },
                      { text: "These can be found under 'Bot Personas' in the left navigation." },
                      { text: "See more comprehensive guidance in the Playbooks section." }
                    ]}
                  />

                  <div className="flex justify-center my-6">
                    <img 
                      src={audiencePersonasImg} 
                      alt="Audience Personas" 
                      className="max-w-full h-auto"
                      style={{ maxHeight: '200px' }}
                    />
                  </div>

                  <GuidanceCard 
                    title="Deliverables"
                    checklist={[
                      { text: "Filled in audience canvases" },
                      { text: "Overview of channels you want to deploy on" },
                      { text: "Limitations for each channel" },
                      { text: "What kind of conversations we want to have on each channel" }
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
