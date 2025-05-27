import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users } from "lucide-react";

const PersonasTab = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            User personas
          </CardTitle>
          <CardDescription>
            Representative user archetypes to guide conversational design decisions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">The Efficiency Seeker</CardTitle>
                <CardDescription>"I need quick answers and solutions with minimal effort"</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Characteristics</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Values speed and directness</li>
                    <li>Low patience for lengthy interactions</li>
                    <li>Task-focused rather than relationship-focused</li>
                    <li>Prefers concise, structured responses</li>
                    <li>Often uses chatbots for practical, specific needs</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Design Considerations</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Minimize steps to complete common tasks</li>
                    <li>Provide clear, concise responses</li>
                    <li>Offer shortcuts and quick options</li>
                    <li>Remember preferences to reduce repetition</li>
                    <li>Focus on functional over social elements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">The Cautious Navigator</CardTitle>
                <CardDescription>"I'm uncertain about technology and need guidance"</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Characteristics</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Limited experience with conversational AI</li>
                    <li>Concerned about making mistakes</li>
                    <li>Prefers explicit instructions and confirmation</li>
                    <li>May be hesitant to share information</li>
                    <li>Values reassurance and clarity</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Design Considerations</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Provide clear guidance at each step</li>
                    <li>Offer explicit confirmation and feedback</li>
                    <li>Use simple, non-technical language</li>
                    <li>Explain why information is needed</li>
                    <li>Include help options prominently</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">The Curious Explorer</CardTitle>
                <CardDescription>"I want to discover what this can do and learn from it"</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Characteristics</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Enjoys exploring capabilities and features</li>
                    <li>Asks diverse and sometimes unexpected questions</li>
                    <li>Interested in how the technology works</li>
                    <li>Willing to try new features and provide feedback</li>
                    <li>Values learning and discovery</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Design Considerations</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Highlight capabilities and suggest explorations</li>
                    <li>Provide interesting facts and educational content</li>
                    <li>Design for serendipitous discovery</li>
                    <li>Include "did you know" elements</li>
                    <li>Balance information depth with engagement</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">The Relationship Builder</CardTitle>
                <CardDescription>"I want a personalized experience that feels human"</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Characteristics</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Values personalization and recognition</li>
                    <li>Prefers conversational, natural interactions</li>
                    <li>May engage in small talk and social exchanges</li>
                    <li>Appreciates empathy and emotional intelligence</li>
                    <li>Returns to assistants they feel connected with</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Design Considerations</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Incorporate personalization and memory</li>
                    <li>Design for natural conversation flow</li>
                    <li>Include appropriate social responses</li>
                    <li>Express empathy and understanding</li>
                    <li>Balance efficiency with relationship building</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Persona development
          </CardTitle>
          <CardDescription>
            Guidelines for creating effective user personas for conversational design
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Research-Based</h3>
            <p className="text-muted-foreground">
              Develop personas based on real user research and data rather than assumptions. Use interviews, surveys, analytics, and user testing to inform persona creation.
            </p>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Conversationally Relevant</h3>
            <p className="text-muted-foreground">
              Focus on aspects of users that specifically impact conversational interactions, such as communication preferences, technical comfort, patience levels, and vocabulary.
            </p>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Actionable</h3>
            <p className="text-muted-foreground">
              Create personas that directly inform design decisions. Each persona should suggest specific conversation strategies, tone adjustments, or feature priorities.
            </p>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Evolving</h3>
            <p className="text-muted-foreground">
              Regularly update personas based on new data and changing user behaviors. Conversational AI interactions provide rich data to continuously refine your understanding of users.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonasTab;
