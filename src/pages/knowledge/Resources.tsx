import React from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import TitleDescription from "@/components/TitleDescription";
import { Library, BookOpen, Video, FileText, ExternalLink } from "lucide-react";

const Resources = () => {
  return (
    <AppShell>
      <TitleDescription
        title="Conversational design resources"
        description="Curated resources to help you learn and implement effective conversational design"
        titleSize="h1"
      />

      <Tabs defaultValue="books" className="mt-8">
        <TabsList className="mb-8 flex flex-wrap h-auto">
          <TabsTrigger value="books" className="mb-1">Books & articles</TabsTrigger>
          <TabsTrigger value="courses" className="mb-1">Courses & videos</TabsTrigger>
          <TabsTrigger value="tools" className="mb-1">Tools & templates</TabsTrigger>
          <TabsTrigger value="examples" className="mb-1">Examples & case studies</TabsTrigger>
        </TabsList>

        {/* Books & Articles Tab */}
        <TabsContent value="books" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Essential reading
              </CardTitle>
              <CardDescription>
                Key books and articles on conversational design
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Books</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Designing Voice User Interfaces</p>
                      <p className="text-sm text-muted-foreground">By Cathy Pearl (O'Reilly Media)</p>
                      <p className="text-sm text-muted-foreground mt-1">Principles and practices for creating effective voice user interfaces.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Conversational Design</p>
                      <p className="text-sm text-muted-foreground">By Erika Hall (A Book Apart)</p>
                      <p className="text-sm text-muted-foreground mt-1">How to create human-centered conversations in digital products.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Designing Bots</p>
                      <p className="text-sm text-muted-foreground">By Amir Shevat (O'Reilly Media)</p>
                      <p className="text-sm text-muted-foreground mt-1">Creating conversational experiences that solve problems.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Articles & Papers</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">The Principles of Conversational Design</p>
                      <p className="text-sm text-muted-foreground">By Google Assistant Team</p>
                      <p className="text-sm text-muted-foreground mt-1">Core principles for creating effective conversational interfaces.</p>
                      <a href="#" className="text-sm text-primary flex items-center gap-1 mt-1">
                        <ExternalLink className="h-3 w-3" /> Read article
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Conversation Design: Speaking the Same Language</p>
                      <p className="text-sm text-muted-foreground">By Nielsen Norman Group</p>
                      <p className="text-sm text-muted-foreground mt-1">How to design conversations that feel natural and effective.</p>
                      <a href="#" className="text-sm text-primary flex items-center gap-1 mt-1">
                        <ExternalLink className="h-3 w-3" /> Read article
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">The Future of Conversation Design</p>
                      <p className="text-sm text-muted-foreground">By Voiceflow Research</p>
                      <p className="text-sm text-muted-foreground mt-1">Emerging trends and future directions in conversational interfaces.</p>
                      <a href="#" className="text-sm text-primary flex items-center gap-1 mt-1">
                        <ExternalLink className="h-3 w-3" /> Read article
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Courses & Videos Tab */}
        <TabsContent value="courses" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                Learning resources
              </CardTitle>
              <CardDescription>
                Courses, videos, and tutorials on conversational design
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Online Courses</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Video className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Conversation Design Fundamentals</p>
                      <p className="text-sm text-muted-foreground">By Google Assistant University</p>
                      <p className="text-sm text-muted-foreground mt-1">Comprehensive introduction to conversation design principles and practices.</p>
                      <a href="#" className="text-sm text-primary flex items-center gap-1 mt-1">
                        <ExternalLink className="h-3 w-3" /> View course
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Video className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Designing Conversational Interfaces</p>
                      <p className="text-sm text-muted-foreground">By Interaction Design Foundation</p>
                      <p className="text-sm text-muted-foreground mt-1">User-centered approaches to designing effective conversational experiences.</p>
                      <a href="#" className="text-sm text-primary flex items-center gap-1 mt-1">
                        <ExternalLink className="h-3 w-3" /> View course
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Video Tutorials</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Video className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Conversation Design Workshop</p>
                      <p className="text-sm text-muted-foreground">By Design+AI Conference</p>
                      <p className="text-sm text-muted-foreground mt-1">Practical workshop on designing effective conversational flows.</p>
                      <a href="#" className="text-sm text-primary flex items-center gap-1 mt-1">
                        <ExternalLink className="h-3 w-3" /> Watch video
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Video className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Building AI Assistants That Users Love</p>
                      <p className="text-sm text-muted-foreground">By UX Design Institute</p>
                      <p className="text-sm text-muted-foreground mt-1">Creating engaging and helpful AI assistants with good conversation design.</p>
                      <a href="#" className="text-sm text-primary flex items-center gap-1 mt-1">
                        <ExternalLink className="h-3 w-3" /> Watch video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Webinars & Talks</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Video className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">The Art and Science of Conversation Design</p>
                      <p className="text-sm text-muted-foreground">By Conversational AI Summit</p>
                      <p className="text-sm text-muted-foreground mt-1">Expert panel discussing best practices and future trends.</p>
                      <a href="#" className="text-sm text-primary flex items-center gap-1 mt-1">
                        <ExternalLink className="h-3 w-3" /> Watch webinar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tools & Templates Tab */}
        <TabsContent value="tools" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Library className="h-5 w-5 text-primary" />
                Practical resources
              </CardTitle>
              <CardDescription>
                Tools, templates, and frameworks for conversation design
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Design Tools</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Library className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Voiceflow</p>
                      <p className="text-sm text-muted-foreground">Visual conversation design platform for creating and prototyping conversational experiences.</p>
                      <a href="https://www.voiceflow.com/" className="text-sm text-primary flex items-center gap-1 mt-1" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" /> Visit website
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Library className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Botmock</p>
                      <p className="text-sm text-muted-foreground">Collaborative design tool for conversational interfaces with testing capabilities.</p>
                      <a href="https://botmock.com/" className="text-sm text-primary flex items-center gap-1 mt-1" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" /> Visit website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Templates & Frameworks</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Conversation Design Template Kit</p>
                      <p className="text-sm text-muted-foreground">Comprehensive template kit for designing conversational flows, including user personas, sample dialogs, and testing frameworks.</p>
                      <a href="#" className="text-sm text-primary flex items-center gap-1 mt-1">
                        <ExternalLink className="h-3 w-3" /> Download template
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Conversational UX Design Framework</p>
                      <p className="text-sm text-muted-foreground">Structured framework for designing, testing, and iterating on conversational experiences.</p>
                      <a href="#" className="text-sm text-primary flex items-center gap-1 mt-1">
                        <ExternalLink className="h-3 w-3" /> View framework
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Examples & Case Studies Tab */}
        <TabsContent value="examples" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Real-world examples
              </CardTitle>
              <CardDescription>
                Case studies and examples of effective conversational design
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Case Studies</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Reimagining Customer Support with Conversational AI</p>
                      <p className="text-sm text-muted-foreground">How a financial services company transformed their customer support experience with conversational design.</p>
                      <a href="#" className="text-sm text-primary flex items-center gap-1 mt-1">
                        <ExternalLink className="h-3 w-3" /> Read case study
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Designing for Voice: Lessons from Building a Voice Assistant</p>
                      <p className="text-sm text-muted-foreground">Key learnings and challenges from designing a voice-first experience.</p>
                      <a href="#" className="text-sm text-primary flex items-center gap-1 mt-1">
                        <ExternalLink className="h-3 w-3" /> Read case study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Example Flows</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Onboarding Conversation Flow</p>
                      <p className="text-sm text-muted-foreground">Example of an effective onboarding conversation with annotations explaining design decisions.</p>
                      <a href="#" className="text-sm text-primary flex items-center gap-1 mt-1">
                        <ExternalLink className="h-3 w-3" /> View example
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Troubleshooting Assistant Flow</p>
                      <p className="text-sm text-muted-foreground">Example of a technical support conversation with effective error handling and recovery.</p>
                      <a href="#" className="text-sm text-primary flex items-center gap-1 mt-1">
                        <ExternalLink className="h-3 w-3" /> View example
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppShell>
  );
};

export default Resources;
