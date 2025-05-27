import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ValueExperienceMatrix from "@/components/ValueExperienceMatrix";

const IntegralPerspectiveTab = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Integral Perspective Framework</CardTitle>
          <CardDescription>
            A holistic approach to conversational design considering multiple dimensions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              The Integral Perspective provides a comprehensive framework for designing conversational experiences
              that address all dimensions of human interaction and organizational needs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Individual Experience (Upper Left)</h3>
                <p className="text-muted-foreground">
                  Focuses on the subjective experience of users interacting with the conversational AI.
                  Considers emotions, perceptions, and personal meaning.
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>User emotions and satisfaction</li>
                  <li>Perceived usefulness and ease of use</li>
                  <li>Trust and comfort with the AI</li>
                  <li>Personal preferences and expectations</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Behavioral Systems (Upper Right)</h3>
                <p className="text-muted-foreground">
                  Addresses the observable behaviors and interactions between users and the conversational system.
                  Focuses on measurable actions and outcomes.
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>User interaction patterns</li>
                  <li>Task completion rates</li>
                  <li>Conversation efficiency metrics</li>
                  <li>Usage frequency and retention</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Cultural Context (Lower Left)</h3>
                <p className="text-muted-foreground">
                  Examines the shared cultural meanings, values, and norms that influence how
                  conversational AI is perceived and used within communities.
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Organizational or community values</li>
                  <li>Language and communication norms</li>
                  <li>Shared expectations about AI</li>
                  <li>Ethical considerations and social impact</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Social Systems (Lower Right)</h3>
                <p className="text-muted-foreground">
                  Considers the broader systems, processes, and structures that support and are
                  affected by conversational AI implementation.
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Business processes and workflows</li>
                  <li>Technical infrastructure and integration</li>
                  <li>Organizational policies and governance</li>
                  <li>Economic and resource considerations</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Value-Experience Matrix</CardTitle>
          <CardDescription>
            Mapping conversational AI features to user experience and business value
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ValueExperienceMatrix />
        </CardContent>
      </Card>
    </div>
  );
};

export default IntegralPerspectiveTab;
