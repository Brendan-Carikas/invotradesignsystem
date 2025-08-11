import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { UserRound, ArrowRightLeft, Clock, MessageSquare, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HumanHandoffTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserRound className="h-5 w-5 text-primary" />
          Human Handoff Guidelines
        </CardTitle>
        <CardDescription>
          Best practices for managing transitions between AI and human agents
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="protocol" className="flex items-center gap-2">
              <ArrowRightLeft className="h-4 w-4" />
              Triggers
            </TabsTrigger>
            <TabsTrigger value="transition" className="flex items-center gap-2">
              <ArrowRightLeft className="h-4 w-4" />
              Transitions
            </TabsTrigger>
            <TabsTrigger value="availability" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Availability
            </TabsTrigger>
            <TabsTrigger value="feedback" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Feedback
            </TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Human Handoff Overview</h3>
              <p className="text-black/70">
                Human handoff is the process of transitioning a conversation from an AI assistant to a human agent. Effective handoffs maintain context, set clear expectations, and provide a seamless experience for users.
              </p>
              
              <div className="mt-4 space-y-3">
                <h4 className="font-medium text-md mt-4">Key principles:</h4>
                <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
                  <li><strong>Transparency</strong>: Clearly communicate when and why a handoff is occurring</li>
                  <li><strong>Continuity</strong>: Preserve conversation context and history</li>
                  <li><strong>Expectation management</strong>: Set realistic expectations about wait times and next steps</li>
                  <li><strong>Flexibility</strong>: Allow users to choose between continuing with AI or waiting for human assistance</li>
                  <li><strong>Follow-through</strong>: Ensure proper closure and feedback collection after human interaction</li>
                </ul>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-black/70">
                  Navigate through the tabs to explore specific aspects of the human handoff process, from identifying appropriate triggers to managing transitions, agent availability, and collecting feedback.
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* Triggers Tab */}
          <TabsContent value="protocol" className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Trigger Conditions</h3>
              <p className="text-black/70">
                Specific conditions that should initiate a handoff to a human agent, including complex queries, emotional situations, sensitive topics, explicit user requests, and repeated misunderstandings.
              </p>
              
              <div className="mt-4 space-y-3">
                <h4 className="font-medium text-md mt-4">Triggers based on system instructions:</h4>
                <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
                  <li>User requests that fall outside the AI's defined scope of capabilities</li>
                  <li>Detection of sensitive or regulated topics requiring human expertise</li>
                  <li>Scenarios requiring human judgment or authorization (e.g., financial decisions above thresholds)</li>
                  <li>Compliance-related inquiries that require certified human responses</li>
                  <li>Multiple failed attempts at resolving a user query</li>
                </ul>
                
                <div className="bg-muted p-3 rounded-md border border-border mt-2">
                  <h5 className="text-xs font-medium mb-1">Example system instruction:</h5>
                  <pre className="text-xs overflow-x-auto whitespace-pre-wrap text-black/70 p-2 bg-background rounded">
                    {`// System instruction for human handoff triggers

You are an AI assistant for Invotra's customer support. When interacting with users, initiate a human handoff in the following scenarios:

1. If a user asks about pricing or contract negotiations
2. If a user reports a security incident or data breach
3. If a user requests to speak with a manager or human agent directly
4. If the conversation involves legal matters or compliance requirements
5. If you've attempted to resolve a technical issue twice without success

When initiating handoff, use the format: "I'll connect you with a human support agent who can better assist with [specific topic]. They'll have full context of our conversation."`}
                  </pre>
                </div>
              </div>
              
              <div className="mt-4 space-y-3">
                <h4 className="font-medium text-md mt-4">Triggers based on starter prompts (Suggestions):</h4>
                <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
                  <li>"Would you like to speak with a human agent about this issue?"</li>
                  <li>"This seems complex. I can connect you with a specialist who can help further."</li>
                  <li>"For personalized assistance with this matter, our support team is available."</li>
                  <li>"I notice we've been going back and forth on this. Would you prefer to speak with a human agent?"</li>
                  <li>"For security reasons, this request requires verification by our team."</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          {/* Transition Design Tab */}
          <TabsContent value="transition" className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Transition Design</h3>
              <p className="text-black/70">
                Best practices for creating smooth transitions between AI and human agents, including clear communication about the handoff, managing user expectations about wait times, and ensuring context preservation throughout the transition.
              </p>
              
              <div className="mt-4 space-y-3">
                <h4 className="font-medium text-md mt-4">Key elements of effective transitions:</h4>
                <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
                  <li>Clear communication about why the handoff is occurring</li>
                  <li>Setting accurate expectations about wait times and next steps</li>
                  <li>Seamless transfer of conversation context and history</li>
                  <li>Maintaining consistent tone and experience between AI and human interactions</li>
                  <li>Providing users with options to return to AI assistance if appropriate</li>
                </ul>
                
                <div className="mt-6">
                  <h4 className="font-medium text-md mt-4 mb-2">How to write system instructions for human handoff:</h4>
                  <ol className="list-decimal pl-5 text-sm text-black/70 space-y-2">
                    <li>
                      <strong>Initial notification</strong> - Provide clear language for informing users about the handoff and why it's occurring
                    </li>
                    <li>
                      <strong>Set wait expectations</strong> - Include guidance on communicating queue position and estimated wait times
                    </li>
                    <li>
                      <strong>User preparation</strong> - Suggest ways for users to make the waiting time productive by providing additional information
                    </li>
                    <li>
                      <strong>Alternative options</strong> - Offer choices for users who prefer not to wait for a human agent
                    </li>
                    <li>
                      <strong>Context transfer</strong> - Specify what conversation information should be summarized and passed to the human agent
                    </li>
                    <li>
                      <strong>Handoff confirmation</strong> - Provide language for confirming the successful transfer to a specific human agent
                    </li>
                  </ol>
                </div>
                
                <div className="bg-muted p-3 rounded-md border border-border mt-6">
                  <h5 className="text-xs font-medium mb-1">Example system instruction:</h5>
                  <pre className="text-xs overflow-x-auto whitespace-pre-wrap text-black/70 p-2 bg-background rounded">
                    {`// System instruction for handling transitions to human agents

When transitioning a conversation to a human agent, follow these steps:

1. Inform the user clearly: "I'll be connecting you with a human specialist who can better assist with [specific issue]."

2. Set expectations: "The current wait time is approximately [X minutes]. Your position in queue is [position]."

3. Prepare the user: "While waiting, you can [add more details/review information/etc.] to help the agent assist you faster."

4. Provide options: "If you prefer not to wait, you can [continue with me/schedule a callback/etc.]."

5. When transferring: Generate a conversation summary including:
   - Key user needs and context
   - Solutions already attempted
   - Relevant account information (without sensitive data)
   - Reason for handoff

6. After transfer, send: "I've shared all conversation details with [Agent Name]. You're now connected with them."`}
                  </pre>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <h4 className="font-medium text-md mt-4">Example transition messages:</h4>
                <div className="space-y-4">
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <p className="text-sm italic">"I'll be connecting you with a human specialist who can better assist with your account permissions issue. They'll have access to our conversation history so you won't need to repeat yourself."</p>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <p className="text-sm italic">"The current wait time is approximately 3-5 minutes. Your position in queue is 2. While waiting, you can add any additional details about which specific permissions you need, which would help the agent assist you faster."</p>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <p className="text-sm italic">"If you prefer not to wait, you can continue troubleshooting with me or schedule a callback from our support team at a more convenient time."</p>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <p className="text-sm italic">"I've shared all conversation details with Sarah from our Technical Support team. You're now connected with her."</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <h4 className="font-medium text-md mt-4">UI elements for transitions:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <h5 className="text-xs font-medium mb-2">Status indicators</h5>
                    <ul className="list-disc pl-4 text-xs text-black/70 space-y-1">
                      <li>Animated "connecting" indicators</li>
                      <li>Queue position displays</li>
                      <li>Estimated wait time counters</li>
                      <li>Agent preparation notifications</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <h5 className="text-xs font-medium mb-2">User controls</h5>
                    <ul className="list-disc pl-4 text-xs text-black/70 space-y-1">
                      <li>"Continue with AI" option</li>
                      <li>"Add more details" field</li>
                      <li>Urgency level selectors</li>
                      <li>Callback scheduling options</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <h4 className="font-medium text-md mt-4">Status messages in conversation:</h4>
                <div className="space-y-2">
                  <div className="bg-accent/30 py-1.5 px-3 rounded-md flex items-center justify-center">
                    <p className="text-xs text-center text-black/70">Sarah (Human Agent) has joined the conversation</p>
                  </div>
                  
                  <div className="bg-accent/30 py-1.5 px-3 rounded-md flex items-center justify-center">
                    <p className="text-xs text-center text-black/70">Conversation transferred from Invotra Assistant to Sarah</p>
                  </div>
                  
                  <div className="bg-accent/30 py-1.5 px-3 rounded-md flex items-center justify-center">
                    <p className="text-xs text-center text-black/70">User rated the conversation: ★★★★☆</p>
                  </div>
                  
                  <div className="bg-accent/30 py-1.5 px-3 rounded-md flex items-center justify-center">
                    <p className="text-xs text-center text-black/70">Sarah has assigned this conversation to Technical Support</p>
                  </div>
                  
                  <div className="bg-accent/30 py-1.5 px-3 rounded-md flex items-center justify-center">
                    <p className="text-xs text-center text-black/70">Michael (Technical Support) has joined the conversation</p>
                  </div>
                  
                  <div className="bg-accent/30 py-1.5 px-3 rounded-md flex items-center justify-center">
                    <p className="text-xs text-center text-black/70">Sarah has left the conversation</p>
                  </div>
                  
                  <div className="bg-accent/30 py-1.5 px-3 rounded-md flex items-center justify-center">
                    <p className="text-xs text-center text-black/70">Conversation returned to Invotra Assistant</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Availability Tab */}
          <TabsContent value="availability" className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Human Availability</h3>
              <p className="text-secondary-foreground">
                Strategies for communicating agent availability to users, including real-time status indicators, estimated wait times, and queue position information to set appropriate expectations.
              </p>
              
              <div className="mt-4 space-y-3">
                <h4 className="font-medium text-md mt-4">UI elements for availability:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <h5 className="text-xs font-medium mb-2">Status indicators</h5>
                    <ul className="list-disc pl-4 text-xs text-black/70 space-y-1">
                      <li>Online/offline status badges</li>
                      <li>Agent count indicators (e.g., "5 agents available")</li>
                      <li>Busy/available color coding</li>
                      <li>Department availability breakdowns</li>
                      <li>Operating hours displays with timezone</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <h5 className="text-xs font-medium mb-2">Wait time elements</h5>
                    <ul className="list-disc pl-4 text-xs text-black/70 space-y-1">
                      <li>Dynamic countdown timers</li>
                      <li>Queue position indicators</li>
                      <li>Average response time displays</li>
                      <li>Visual queue length representations</li>
                      <li>Priority status indicators</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 space-y-4">
                  <h5 className="text-xs font-medium">Examples:</h5>
                  <div className="space-y-3">
                    <div className="bg-background p-3 rounded-md border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-medium">Support Team: Available</span>
                        <span className="text-xs text-black/70 ml-auto">3 agents online</span>
                      </div>
                      <p className="text-xs text-black/70">Current wait time: ~2 minutes</p>
                    </div>
                    
                    <div className="bg-background p-3 rounded-md border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <span className="text-xs font-medium">Technical Team: Busy</span>
                        <span className="text-xs text-black/70 ml-auto">1 agent online</span>
                      </div>
                      <p className="text-xs text-black/70">Current wait time: ~15 minutes</p>
                      <div className="mt-2 w-full bg-muted rounded-full h-1.5">
                        <div className="bg-amber-500 h-1.5 rounded-full w-3/4"></div>
                      </div>
                      <p className="text-xs text-black/70 mt-1">Queue position: 3 of 4</p>
                    </div>
                    
                    <div className="bg-background p-3 rounded-md border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                        <span className="text-xs font-medium">Billing Team: Offline</span>
                      </div>
                      <p className="text-xs text-black/70">Available: 9:00 AM - 5:00 PM EST (Returns in 10 hours)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-medium mb-2">Fallback Options When Humans Are Offline</h3>
              <p className="text-black/70">
                Alternative solutions when human agents are unavailable, such as scheduling callbacks, offering asynchronous communication channels, enhanced self-service options, and clear communication about when agents will be available.
              </p>
              
              <div className="mt-4 space-y-3">
                <h4 className="font-medium text-md mt-4">UI elements for fallback options:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <h5 className="text-xs font-medium mb-2">Scheduling elements</h5>
                    <ul className="list-disc pl-4 text-xs text-black/70 space-y-1">
                      <li>Calendar date/time pickers</li>
                      <li>Callback request forms</li>
                      <li>Timezone selectors</li>
                      <li>Availability slot visualizations</li>
                      <li>Confirmation notifications</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <h5 className="text-xs font-medium mb-2">Alternative contact methods</h5>
                    <ul className="list-disc pl-4 text-xs text-black/70 space-y-1">
                      <li>Email submission forms</li>
                      <li>Ticket creation interfaces</li>
                      <li>Self-service knowledge base links</li>
                      <li>Community forum redirects</li>
                      <li>Enhanced AI assistance options</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 space-y-4">
                  <h5 className="text-xs font-medium">Examples:</h5>
                  <div className="space-y-3">
                    <div className="bg-background p-3 rounded-md border border-border">
                      <h6 className="text-xs font-medium mb-2">Schedule a callback</h6>
                      <div className="flex flex-col space-y-2">
                        <div className="flex gap-2">
                          <div className="bg-muted p-1.5 rounded text-xs text-center w-20 hover:bg-primary/10 cursor-pointer">Today</div>
                          <div className="bg-muted p-1.5 rounded text-xs text-center w-20 hover:bg-primary/10 cursor-pointer">Tomorrow</div>
                          <div className="bg-primary/20 p-1.5 rounded text-xs text-center w-20 border border-primary/30 cursor-pointer">Wed, Jul 3</div>
                        </div>
                        <div className="flex gap-2">
                          <div className="bg-muted p-1.5 rounded text-xs text-center w-20 hover:bg-primary/10 cursor-pointer">9:00 AM</div>
                          <div className="bg-primary/20 p-1.5 rounded text-xs text-center w-20 border border-primary/30 cursor-pointer">11:30 AM</div>
                          <div className="bg-muted p-1.5 rounded text-xs text-center w-20 hover:bg-primary/10 cursor-pointer">2:00 PM</div>
                        </div>
                        <p className="text-xs text-black/70 mt-1">Selected: Wednesday, July 3 at 11:30 AM (Your local time)</p>
                      </div>
                    </div>
                    
                    <div className="bg-background p-3 rounded-md border border-border">
                      <h6 className="text-xs font-medium mb-2">Alternative options</h6>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 p-1.5 bg-muted/50 rounded cursor-pointer hover:bg-muted">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                          <span className="text-xs">Email our support team</span>
                        </div>
                        <div className="flex items-center gap-2 p-1.5 bg-muted/50 rounded cursor-pointer hover:bg-muted">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                          <span className="text-xs">Create a support ticket</span>
                        </div>
                        <div className="flex items-center gap-2 p-1.5 bg-muted/50 rounded cursor-pointer hover:bg-muted">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                          <span className="text-xs">Browse knowledge base</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-background p-3 rounded-md border border-border">
                      <h6 className="text-xs font-medium mb-2">Information collection example</h6>
                      <div className="space-y-3">
                        <div className="flex">
                          <div className="bg-muted/50 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"></path></svg>
                          </div>
                          <div className="bg-muted/50 p-2 rounded-lg rounded-tl-none text-xs max-w-[80%]">
                            I understand you need help with your account permissions. Unfortunately, our support team is offline right now. I'd be happy to have someone from our team contact you when they're back online tomorrow. Could you provide your first name so we can address you properly?
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <div className="bg-primary/10 p-2 rounded-lg rounded-tr-none text-xs max-w-[80%]">
                            Sarah
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="bg-muted/50 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"></path></svg>
                          </div>
                          <div className="bg-muted/50 p-2 rounded-lg rounded-tl-none text-xs max-w-[80%]">
                            Thanks, Sarah. Could you also provide an email address where our team can reach you?
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <div className="bg-primary/10 p-2 rounded-lg rounded-tr-none text-xs max-w-[80%]">
                            sarah.johnson@example.com
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="bg-muted/50 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"></path></svg>
                          </div>
                          <div className="bg-muted/50 p-2 rounded-lg rounded-tl-none text-xs max-w-[80%]">
                            Perfect! I've recorded your information. A member of our support team will contact you at sarah.johnson@example.com within the next 24 hours to help resolve your account permissions issue. Is there anything else you'd like me to note for the support team?
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <div className="bg-primary/10 p-2 rounded-lg rounded-tr-none text-xs max-w-[80%]">
                            No, that's all. Thank you!
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="bg-muted/50 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"></path></svg>
                          </div>
                          <div className="bg-muted/50 p-2 rounded-lg rounded-tl-none text-xs max-w-[80%]">
                            You're welcome, Sarah! You'll receive a confirmation email shortly. Have a great day, and our team will be in touch soon.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Follow-up Prompts</h3>
              <p className="text-black/70">
                Options for users to choose from after human interaction is completed and they are optionally returned to the AI assistant, including continuing the previous conversation, starting a new topic, or ending the session.
              </p>
              
              <div className="mt-4 space-y-3">
                <h4 className="font-medium text-md mt-4">UI elements for Follow-up Prompts:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <h5 className="text-xs font-medium mb-2">Button options</h5>
                    <ul className="list-disc pl-4 text-xs text-black/70 space-y-1">
                      <li>Continue conversation buttons</li>
                      <li>Start new topic options</li>
                      <li>End conversation controls</li>
                      <li>Feedback request prompts</li>
                      <li>Help/support shortcuts</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <h5 className="text-xs font-medium mb-2">Contextual suggestions</h5>
                    <ul className="list-disc pl-4 text-xs text-black/70 space-y-1">
                      <li>Related topic chips</li>
                      <li>Common follow-up questions</li>
                      <li>Suggested actions based on history</li>
                      <li>Quick reply templates</li>
                      <li>Conversation summary options</li>
                    </ul>
                  </div>
                </div>
                
                <h4 className="font-medium text-md mt-6">Examples:</h4>
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-md border border-border">
                    <p className="text-sm mb-3 text-black/70">After human handoff completion:</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1.5 text-xs rounded-md">Continue with previous topic</button>
                        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-3 py-1.5 text-xs rounded-md">Start new conversation</button>
                      </div>
                      <div className="flex gap-2 mt-1">
                        <button className="bg-muted hover:bg-muted/80 px-3 py-1.5 text-xs rounded-md">End conversation</button>
                        <button className="bg-muted hover:bg-muted/80 px-3 py-1.5 text-xs rounded-md flex items-center gap-1">
                          <span>Rate your experience</span>
                          <span>★★★★★</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background p-4 rounded-md border border-border">
                    <p className="text-sm mb-3 text-black/70">Suggested follow-up topics:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/50 px-2 py-1 text-xs rounded-full cursor-pointer hover:bg-accent/70">Account settings</span>
                      <span className="bg-accent/50 px-2 py-1 text-xs rounded-full cursor-pointer hover:bg-accent/70">Billing options</span>
                      <span className="bg-accent/50 px-2 py-1 text-xs rounded-full cursor-pointer hover:bg-accent/70">User permissions</span>
                      <span className="bg-accent/50 px-2 py-1 text-xs rounded-full cursor-pointer hover:bg-accent/70">Integration help</span>
                      <span className="bg-accent/50 px-2 py-1 text-xs rounded-full cursor-pointer hover:bg-accent/70">Documentation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-medium mb-2">Feedback Collection</h3>
              <p className="text-black/70">
                Prompts and mechanisms for users to share their experience after human interaction is completed, designed to gather actionable insights while minimizing friction in the user experience.
              </p>
              
              <div className="mt-4 space-y-3">
                <h4 className="font-medium text-md mt-4">UI elements for Feedback Collection:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <h5 className="text-xs font-medium mb-2">Rating elements</h5>
                    <ul className="list-disc pl-4 text-xs text-black/70 space-y-1">
                      <li>Star rating systems (1-5)</li>
                      <li>Emoji reaction selectors</li>
                      <li>Numeric scale indicators (NPS)</li>
                      <li>Binary satisfaction options</li>
                      <li>Visual slider controls</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-md border border-border">
                    <h5 className="text-xs font-medium mb-2">Comment collection</h5>
                    <ul className="list-disc pl-4 text-xs text-black/70 space-y-1">
                      <li>Open-ended comment fields</li>
                      <li>Guided feedback questions</li>
                      <li>Issue categorization options</li>
                      <li>Improvement suggestion prompts</li>
                      <li>Follow-up contact permission</li>
                    </ul>
                  </div>
                </div>
                
                <h4 className="font-medium text-md mt-6">Examples:</h4>
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-md border border-border">
                    <p className="text-sm mb-3 text-black/70">Star rating with comment:</p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs mb-2">How would you rate your experience with our support team?</p>
                        <div className="flex gap-1">
                          <span className="text-xl cursor-pointer text-amber-500">★</span>
                          <span className="text-xl cursor-pointer text-amber-500">★</span>
                          <span className="text-xl cursor-pointer text-amber-500">★</span>
                          <span className="text-xl cursor-pointer text-amber-500">★</span>
                          <span className="text-xl cursor-pointer text-muted">★</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs mb-1">What could we improve? (optional)</p>
                        <div className="border border-input rounded-md p-2 bg-background/50 text-xs text-black/50">The agent was helpful but took a while to understand my issue...</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background p-4 rounded-md border border-border">
                    <p className="text-sm mb-3 text-black/70">Quick reaction options:</p>
                    <div className="space-y-3">
                      <p className="text-xs">How was your experience today?</p>
                      <div className="flex justify-between max-w-md">
                        <div className="flex flex-col items-center gap-1 cursor-pointer">
                          <div className="text-xl">😞</div>
                          <span className="text-xs">Poor</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 cursor-pointer">
                          <div className="text-xl">😐</div>
                          <span className="text-xs">Okay</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 cursor-pointer">
                          <div className="text-xl">🙂</div>
                          <span className="text-xs">Good</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 cursor-pointer">
                          <div className="text-xl">😀</div>
                          <span className="text-xs">Great</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 cursor-pointer bg-accent/20 p-1 rounded">
                          <div className="text-xl">😍</div>
                          <span className="text-xs">Excellent</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default HumanHandoffTab;
