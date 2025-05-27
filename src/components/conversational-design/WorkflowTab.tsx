import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import workflowImage from "@/assets/images/ConvAIWorkflow.png";

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

const WorkflowTab = () => {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const renderSteps = (steps: { id: string; title: string; description: string }[]) => {
    return (
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <WorkflowStep
              title={step.title}
              isActive={activeStep === step.id}
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
            />
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-border mx-2 relative">
                <ArrowRight className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-muted-foreground" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const stage1Steps = [
    { id: "1.1", title: "Research", description: "Gather user needs, business requirements, and technical constraints. Understand the problem space and identify opportunities for conversational AI." },
    { id: "1.2", title: "Define", description: "Establish clear goals, success metrics, and scope for the conversational experience. Define the target audience and key use cases." },
    { id: "1.3", title: "Plan", description: "Create a project roadmap, allocate resources, and establish timelines. Identify key stakeholders and communication channels." }
  ];

  const stage2Steps = [
    { id: "2.1", title: "Design", description: "Create conversation flows, define the bot persona, and establish design principles. Focus on natural language patterns and user-centered design." },
    { id: "2.2", title: "Prototype", description: "Build lightweight conversation simulations to test flow and usability. Use tools like Wizard of Oz testing to validate concepts before implementation." },
    { id: "2.3", title: "Test", description: "Conduct usability testing with target users, gather feedback, and iterate on the design. Identify and address potential issues early." }
  ];

  const stage3Steps = [
    { id: "3.1", title: "Develop", description: "Implement the conversational AI solution using appropriate platforms and technologies. Build NLU models, dialog management, and integration points." },
    { id: "3.2", title: "Deploy", description: "Launch the conversational AI in a controlled environment. Establish monitoring and logging for performance tracking." },
    { id: "3.3", title: "Measure", description: "Track key performance indicators and user engagement metrics. Analyze conversation logs to identify patterns and improvement areas." }
  ];

  const stage4Steps = [
    { id: "4.1", title: "Optimize", description: "Refine the conversational experience based on real-world usage data. Improve NLU models and conversation flows." },
    { id: "4.2", title: "Scale", description: "Expand the conversational AI to additional channels, languages, or use cases. Ensure infrastructure can handle increased load." },
    { id: "4.3", title: "Evolve", description: "Continuously enhance capabilities based on emerging technologies and changing user needs. Maintain and update the system regularly." }
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Conversational AI Development Workflow</CardTitle>
          <CardDescription>
            A comprehensive framework for designing, building, and optimizing conversational experiences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <WorkflowStage
              stageNumber="1"
              title="Discovery & Planning"
              steps={stage1Steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              renderSteps={renderSteps}
            />
            <WorkflowStage
              stageNumber="2"
              title="Design & Validation"
              steps={stage2Steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              renderSteps={renderSteps}
            />
            <WorkflowStage
              stageNumber="3"
              title="Development & Deployment"
              steps={stage3Steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              renderSteps={renderSteps}
            />
            <WorkflowStage
              stageNumber="4"
              title="Optimization & Growth"
              steps={stage4Steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              renderSteps={renderSteps}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workflow Visualization</CardTitle>
          <CardDescription>
            Visual representation of the conversational AI development lifecycle
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <img src={workflowImage} alt="Conversational AI Workflow" className="max-w-full h-auto rounded-md" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkflowTab;
