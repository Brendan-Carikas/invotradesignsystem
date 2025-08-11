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
            <AccordionItem value="backlog">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Backlog (Use case selection)</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why and How</h4>
                  
                  <GuidanceCard 
                    title="Important questions in use case selection"
                    checklist={[
                      { text: "What is the return on investment?" },
                      { text: "How viable is it?" },
                      { text: "Why are people asking for it?" },
                      { text: "Will there be enough adoption to justify the investment?" },
                      { text: "Do you have the skill set needed?" }
                    ]}
                  />
                  
                  <GuidanceCard 
                    title="Value-Irritation Model"
                    checklist={[
                      { text: "Simplify → Encourage" },
                      { text: "Eliminate → Automate" }
                    ]}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mentalise">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Mentalise the Conversation</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="Before writing a single line of dialogue, understand the mental model of both participants in the conversation."
                    author="Conversation Design Institute"
                  />
                  
                  <GuidanceCard 
                    title="Mentalisation techniques"
                    checklist={[
                      { text: "Map out user expectations and knowledge" },
                      { text: "Define system capabilities and limitations" },
                      { text: "Identify potential misalignments" },
                      { text: "Consider emotional states and contexts" }
                    ]}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="have-conversation">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Have the Conversation</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="Role-playing conversations helps identify natural dialogue patterns and potential breakdowns."
                    author="Google Conversation Design"
                  />
                  
                  <GuidanceCard 
                    title="Conversation role-playing guidelines"
                    checklist={[
                      { text: "Use real-world scenarios" },
                      { text: "Record and transcribe the conversations" },
                      { text: "Switch roles between system and user" },
                      { text: "Test with different user personas" },
                      { text: "Note where clarification is needed" }
                    ]}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="first-draft">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">First Draft</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="The first draft is where you translate your conversation design into concrete dialogue."
                    author="Voice User Interface Design"
                  />
                  
                  <GuidanceCard 
                    title="First draft writing tips"
                    checklist={[
                      { text: "Focus on the happy path first" },
                      { text: "Write in a conversational, not technical, style" },
                      { text: "Keep system responses brief and clear" },
                      { text: "Include contextual cues and transitions" },
                      { text: "Mark areas that need refinement" }
                    ]}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="validate">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Validate the Conversation</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="Validation ensures your conversation design meets user needs and business requirements."
                    author="Nielsen Norman Group"
                  />
                  
                  <GuidanceCard 
                    title="Conversation validation methods"
                    checklist={[
                      { text: "Conduct usability testing with prototypes" },
                      { text: "Review against conversation design principles" },
                      { text: "Check for coherence across different paths" },
                      { text: "Verify technical feasibility" },
                      { text: "Test with diverse user groups" }
                    ]}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="long-tail">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Long Tail and Handover Design</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="Planning for edge cases and handovers is crucial for a robust conversational experience."
                    author="UX Collective"
                  />
                  
                  <GuidanceCard 
                    title="Long tail and handover strategies"
                    checklist={[
                      { text: "Document less common user requests" },
                      { text: "Design graceful fallbacks" },
                      { text: "Create smooth transitions to human agents" },
                      { text: "Maintain context during handovers" },
                      { text: "Plan for conversation resumption" }
                    ]}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="repair">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Repair</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="Effective repair strategies help recover from misunderstandings and keep conversations on track."
                    author="Conversation Design Institute"
                  />
                  
                  <GuidanceCard 
                    title="Conversation repair techniques"
                    checklist={[
                      { text: "Design explicit confirmation for critical actions" },
                      { text: "Create helpful error messages" },
                      { text: "Implement progressive disclosure for complex topics" },
                      { text: "Provide escape hatches when stuck" },
                      { text: "Use context to guide repair strategies" }
                    ]}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="stakeholder">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Stakeholder Signoff</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Why</h4>

                  <BlockquoteCard
                    quote="Securing stakeholder approval ensures alignment with business goals and brand guidelines."
                    author="Enterprise Conversation Design"
                  />
                  
                  <GuidanceCard 
                    title="Stakeholder review process"
                    checklist={[
                      { text: "Prepare concise presentation of key flows" },
                      { text: "Highlight alignment with business objectives" },
                      { text: "Document technical and resource requirements" },
                      { text: "Address compliance and legal considerations" },
                      { text: "Establish clear approval criteria" }
                    ]}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="checklist">
              <AccordionTrigger>
                <h3 className="text-lg font-medium text-gray-500">Design Checklist (Fundamentals)</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold">Tips for better conversational design</h4>
                  
                  <GuidanceCard 
                    title="Conversational design fundamentals"
                    checklist={[
                      { text: "Use 'you' over passive third-person" },
                      { text: "Prefer active voice over passive" },
                      { text: "Use fewer adverbs, stronger verbs" },
                      { text: "Favor simple words" },
                      { text: "Prioritize clarity over detail" },
                      { text: "Anticipate user needs for clarification" }
                    ]}
                  />
                  
                  <GuidanceCard 
                    title="Conversational best practices"
                    checklist={[
                      { text: "Conversational mantra (Acknowledge, Confirm, Prompt)" },
                      { text: "Use discourse markers" },
                      { text: "If it sounds written, rewrite it" },
                      { text: "Set clear desired behavior" },
                      { text: "Be consistent with language" },
                      { text: "One breath test" }
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

export default DesignTab;
