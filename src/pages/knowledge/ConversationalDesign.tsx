import React, { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import TitleDescription from "@/components/TitleDescription";
import { FileText, MessageSquare, Users, Brain, Sparkles, ArrowRight } from "lucide-react";
import workflowImage from "@/assets/images/ConvAIWorkflow.png";
import ValueExperienceMatrix from "@/components/ValueExperienceMatrix";

// Import tab components
import BotPersonaTab from "@/components/conversational-design/BotPersonaTab";
import AudiencePersonaTab from "@/components/conversational-design/AudiencePersonaTab";

interface WorkflowStepProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-16 h-16 rounded-full border-4 ${isActive ? 'border-primary bg-primary/10' : 'border-primary bg-white'} transition-all duration-300 hover:bg-primary/5`}
    >
      <span className="text-sm font-medium">{title}</span>
    </button>
  );
};

interface WorkflowStageProps {
  stageNumber: string;
  title: string;
  steps: { id: string; title: string; description: string }[];
  activeStep: string | null;
  setActiveStep: (step: string | null) => void;
  renderSteps: (steps: { id: string; title: string; description: string }[]) => React.ReactNode;
}

const WorkflowStage: React.FC<WorkflowStageProps> = ({ 
  stageNumber, 
  title, 
  steps, 
  activeStep, 
  setActiveStep,
  renderSteps 
}) => {
  return (
    <div className="relative mb-12">
      <div className="flex items-center">
        <div className="w-1/4 pr-4">
          <div className="text-sm text-muted-foreground">Workflow stage {stageNumber}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="w-3/4 relative">
          {renderSteps(steps)}
        </div>
      </div>
      {activeStep && steps.find(step => step.id === activeStep) && (
        <div className="mt-4 ml-[25%] pl-8 pr-4 py-3 bg-muted rounded-md">
          <h4 className="font-medium mb-1">{steps.find(step => step.id === activeStep)?.title}</h4>
          <p className="text-sm text-muted-foreground">{steps.find(step => step.id === activeStep)?.description}</p>
        </div>
      )}
    </div>
  );
};

const ConversationalDesign = () => {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  return (
    <AppShell>
      <TitleDescription
        title="Conversational design fundamentals"
        description="A comprehensive knowledge base for designing effective conversational experiences"
        titleSize="h1"
      />

      <Tabs defaultValue="workflow" className="mt-8">
        <TabsList className="mb-8 flex flex-wrap h-auto justify-start">
          <TabsTrigger value="workflow" className="mb-1 mr-1">Conversational AI workflow</TabsTrigger>
          <TabsTrigger value="integralperspective" className="mb-1 mr-1">Integral Perspective</TabsTrigger>

          <TabsTrigger value="principles" className="mb-1 mr-1">Design principles</TabsTrigger>
          <TabsTrigger value="patterns" className="mb-1 mr-1">Conversation patterns</TabsTrigger>
          <TabsTrigger value="personas" className="mb-1 mr-1">User personas</TabsTrigger>
          <TabsTrigger value="audiencepersona" className="mb-1 mr-1">Audience Personas</TabsTrigger>
          <TabsTrigger value="botpersona" className="mb-1 mr-1">Bot Personas</TabsTrigger>
          <TabsTrigger value="ai" className="mb-1 mr-1">AI guidelines</TabsTrigger>
        </TabsList>

        {/* Design Principles Tab */}
        <TabsContent value="principles" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Core principles
              </CardTitle>
              <CardDescription>
                Fundamental principles that guide effective conversational design
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">1. Human-Centered</h3>
                <p className="text-muted-foreground">
                  Design conversations that feel natural, empathetic, and focused on user needs. Avoid robotic or overly technical language unless appropriate for the context.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">2. Context-Aware</h3>
                <p className="text-muted-foreground">
                  Maintain and utilize conversation context to provide relevant responses. Remember previous interactions and user preferences to create a coherent experience.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">3. Transparent</h3>
                <p className="text-muted-foreground">
                  Be clear about capabilities and limitations. Set appropriate expectations and provide feedback when the system doesn't understand or can't fulfill a request.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">4. Efficient</h3>
                <p className="text-muted-foreground">
                  Help users accomplish their goals with minimal effort. Balance conversational elements with efficient task completion.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">5. Accessible</h3>
                <p className="text-muted-foreground">
                  Design for users with diverse abilities, needs, and preferences. Ensure conversations are accessible across different devices and contexts.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Conversation flow
              </CardTitle>
              <CardDescription>
                Guidelines for structuring effective conversation flows
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Introduction</h3>
                <p className="text-muted-foreground">
                  Start with a clear, concise greeting that establishes the purpose and capabilities of the conversational interface. Set appropriate expectations for what the system can and cannot do.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Turn-Taking</h3>
                <p className="text-muted-foreground">
                  Design for natural turn-taking in the conversation. Provide clear indicators when the system is processing or waiting for user input. Avoid overwhelming users with too much information at once.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Error Handling</h3>
                <p className="text-muted-foreground">
                  Gracefully handle misunderstandings and errors. Provide helpful recovery options and avoid repetitive error messages. Use clarification questions when appropriate.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Closing</h3>
                <p className="text-muted-foreground">
                  End conversations appropriately with clear closure and next steps if applicable. Provide a summary of what was accomplished and offer additional assistance if needed.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Conversation Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Common patterns
              </CardTitle>
              <CardDescription>
                Reusable conversation patterns for different scenarios
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Information Gathering</h3>
                <p className="text-muted-foreground">
                  Techniques for collecting information from users in a conversational way. Includes progressive disclosure, chunking questions, and providing context for why information is needed.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Decision Support</h3>
                <p className="text-muted-foreground">
                  Patterns for helping users make decisions through conversation. Includes comparing options, providing recommendations, and explaining trade-offs.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Task Completion</h3>
                <p className="text-muted-foreground">
                  Structures for guiding users through completing tasks. Includes step-by-step guidance, progress indicators, and confirmation of actions.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Educational Dialogs</h3>
                <p className="text-muted-foreground">
                  Patterns for teaching and explaining concepts conversationally. Includes scaffolding information, checking understanding, and providing examples.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Handling complexity
              </CardTitle>
              <CardDescription>
                Strategies for managing complex conversations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Multi-turn Conversations</h3>
                <p className="text-muted-foreground">
                  Techniques for maintaining context across multiple turns in a conversation. Includes summarizing, referencing previous information, and managing topic transitions.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Disambiguation</h3>
                <p className="text-muted-foreground">
                  Approaches for clarifying ambiguous user inputs. Includes asking clarifying questions, offering choices, and confirming understanding.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Handling Digressions</h3>
                <p className="text-muted-foreground">
                  Strategies for managing when users go off-topic or change the subject. Includes graceful topic switching, bringing conversations back on track, and handling multiple intents.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* User Personas Tab */}
        <TabsContent value="personas" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                User personas
              </CardTitle>
              <CardDescription>
                Understanding different user types and their conversational needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Novice Users</h3>
                <p className="text-muted-foreground">
                  First-time or infrequent users who need more guidance and explanation. Design for discovery, learning, and building confidence with the system.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Expert Users</h3>
                <p className="text-muted-foreground">
                  Frequent users who value efficiency and advanced capabilities. Design for shortcuts, power features, and minimizing unnecessary conversation.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Task-Focused Users</h3>
                <p className="text-muted-foreground">
                  Users with specific goals who want to complete tasks quickly. Design for efficiency, clear pathways, and minimal friction.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Exploratory Users</h3>
                <p className="text-muted-foreground">
                  Users who are browsing or exploring without a specific goal. Design for discovery, suggestions, and engaging interactions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Conversation styles
              </CardTitle>
              <CardDescription>
                Adapting conversation style to different contexts and users
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Formal vs. Casual</h3>
                <p className="text-muted-foreground">
                  Guidelines for when to use formal or casual language based on context, user preferences, and brand voice. Includes examples and considerations for different domains.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Concise vs. Detailed</h3>
                <p className="text-muted-foreground">
                  Balancing brevity with thoroughness based on user needs and context. Includes techniques for progressive disclosure and user-controlled verbosity.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Personality Elements</h3>
                <p className="text-muted-foreground">
                  Considerations for incorporating appropriate personality traits into conversational interfaces. Includes guidance on humor, empathy, and maintaining consistency.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audience Personas Tab */}
        <TabsContent value="audiencepersona">
          <AudiencePersonaTab />
        </TabsContent>

        {/* Bot Persona Tab */}
        <TabsContent value="botpersona">
          <BotPersonaTab />
        </TabsContent>

        {/* AI Guidelines Tab */}
        <TabsContent value="ai" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI capabilities and limitations
              </CardTitle>
              <CardDescription>
                Guidelines for working with AI models in conversational interfaces
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Setting Expectations</h3>
                <p className="text-muted-foreground">
                  Clearly communicate what the AI can and cannot do. Be transparent about limitations and avoid creating unrealistic expectations about capabilities.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Handling Uncertainty</h3>
                <p className="text-muted-foreground">
                  Strategies for when the AI is uncertain about user intent or the correct response. Includes techniques for graceful fallbacks, asking for clarification, and being transparent about confidence levels.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Responsible AI Design</h3>
                <p className="text-muted-foreground">
                  Ethical considerations for AI-powered conversations. Includes guidelines for avoiding bias, ensuring fairness, protecting privacy, and maintaining appropriate boundaries.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Human-AI Collaboration</h3>
                <p className="text-muted-foreground">
                  Designing for effective handoffs between AI and human agents. Includes triggers for escalation, smooth transitions, and maintaining context across handoffs.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Prompt engineering
              </CardTitle>
              <CardDescription>
                Best practices for designing effective prompts for AI systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Prompt Structure</h3>
                <p className="text-muted-foreground">
                  Guidelines for creating clear, effective prompts that elicit the desired responses from AI systems. Includes techniques for providing context, specifying format, and guiding tone.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">System Messages</h3>
                <p className="text-muted-foreground">
                  Best practices for crafting system messages that effectively guide AI behavior. Includes examples for different use cases and considerations for maintaining consistent AI behavior.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Few-Shot Learning</h3>
                <p className="text-muted-foreground">
                  Techniques for using examples to guide AI responses. Includes strategies for selecting effective examples and structuring them for optimal results.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Iterative Refinement</h3>
                <p className="text-muted-foreground">
                  Approaches for testing and refining prompts to improve AI responses over time. Includes methodologies for evaluation, common pitfalls, and strategies for addressing them.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integral Perspective Tab */}
        <TabsContent value="integralperspective" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Value-Experience Matrix
              </CardTitle>
              <CardDescription>
                A progressive framework for elevating conversational experiences from function to delight
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ValueExperienceMatrix />
              
              <div>
                <h3 className="text-lg font-medium mb-2">01: Founding Value (Function)</h3>
                <p className="text-muted-foreground">
                  The essential foundation of any conversational experience, focused on basic functionality.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium text-sm mb-1">Characteristics</h4>
                    <p className="text-sm text-muted-foreground">Nothing but potential, basic functionality</p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium text-sm mb-1">Design Principles</h4>
                    <p className="text-sm text-muted-foreground">Be inclusive, human-centric, empathetic, and goal-driven</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">02: Function</h3>
                <p className="text-muted-foreground">
                  Building on the foundation with basic integrations and practical utility.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium text-sm mb-1">Characteristics</h4>
                    <p className="text-sm text-muted-foreground">FAQ bot with some integrations</p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium text-sm mb-1">Design Principles</h4>
                    <p className="text-sm text-muted-foreground">Acknowledgment, confirmation, clear prompts, discourse markers, active language, simple language, never dead-end street, repair</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">03: Trust</h3>
                <p className="text-muted-foreground">
                  Establishing reliability and consistency across multiple channels.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium text-sm mb-1">Characteristics</h4>
                    <p className="text-sm text-muted-foreground">Integrated bot on multiple channels</p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium text-sm mb-1">Design Principles</h4>
                    <p className="text-sm text-muted-foreground">Detailed persona, consistency, personality content, onboarding content, explainability, accountability</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">04: Behavior</h3>
                <p className="text-muted-foreground">
                  Creating proactive, contextual experiences across multiple channels.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium text-sm mb-1">Characteristics</h4>
                    <p className="text-sm text-muted-foreground">Proactive contextual & omnichannel bot</p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium text-sm mb-1">Design Principles</h4>
                    <p className="text-sm text-muted-foreground">BJ Fogg Model, Cialdini principles, reciprocity, commitment, social proof, authority, liking, scarcity</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">05: Delight</h3>
                <p className="text-muted-foreground">
                  Creating exceptional experiences that surprise and delight users.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium text-sm mb-1">Characteristics</h4>
                    <p className="text-sm text-muted-foreground">Delightful bot, first point of contact, can help with almost everything</p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium text-sm mb-1">Design Principles</h4>
                    <p className="text-sm text-muted-foreground">Visual design, custom voices, sonic design, virtual beings, seamless (consolidated experience)</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Implementation Strategy</h3>
                <p className="text-muted-foreground">
                  For effective implementation of the value-experience matrix:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Assess your current position on the matrix</li>
                  <li>Set clear objectives for progression to the next level</li>
                  <li>Implement design principles appropriate for your target level</li>
                  <li>Measure user satisfaction and engagement at each stage</li>
                  <li>Iterate based on user feedback and performance metrics</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Conversational AI Workflow Tab */}
        <TabsContent value="workflow" className="space-y-8">
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
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppShell>
  );
};

export default ConversationalDesign;
