import React from 'react';
import AppShell from "@/components/layout/AppShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, BarChart, PieChart, BarChart3 } from 'lucide-react';
import TitleDescription from "@/components/TitleDescription";

const Analytics = () => {
  return (
    <AppShell>
      <TitleDescription
        title="Chatbot AI Assistant Analytics"
        description="Comprehensive metrics to track and improve conversational AI performance"
        titleSize="h1"
      />

      <Tabs defaultValue="overview" className="w-full mt-8">
        <TabsList className="mb-8 flex flex-wrap h-auto justify-start">
          <TabsTrigger value="overview" className="mb-1 mr-1">Overview</TabsTrigger>
          <TabsTrigger value="interaction" className="mb-1 mr-1">User Interaction</TabsTrigger>
          <TabsTrigger value="experience" className="mb-1 mr-1">User Experience</TabsTrigger>
          <TabsTrigger value="performance" className="mb-1 mr-1">Performance</TabsTrigger>
          <TabsTrigger value="operational" className="mb-1 mr-1">Operational</TabsTrigger>
          <TabsTrigger value="business" className="mb-1 mr-1">Business Impact</TabsTrigger>
          <TabsTrigger value="ai" className="mb-1 mr-1">Advanced AI</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
                <div className="h-4 w-4 text-primary">
                  <LineChart className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,350</div>
                <p className="text-xs text-muted-foreground">+15.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Accuracy Rate</CardTitle>
                <div className="h-4 w-4 text-primary">
                  <BarChart className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92.7%</div>
                <p className="text-xs text-muted-foreground">+3.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">User Satisfaction</CardTitle>
                <div className="h-4 w-4 text-primary">
                  <PieChart className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8/5</div>
                <p className="text-xs text-muted-foreground">+0.3 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <div className="h-4 w-4 text-primary">
                  <PieChart className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32.4%</div>
                <p className="text-xs text-muted-foreground">+5.7% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Chatbot Performance Summary
              </CardTitle>
              <CardDescription>
                Key metrics across all categories for the current period
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-2">User Engagement</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Unique Users</span>
                      <span className="text-sm font-medium">8,742</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Returning Users</span>
                      <span className="text-sm font-medium">63%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Avg. Session Duration</span>
                      <span className="text-sm font-medium">4m 12s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Avg. Messages per Session</span>
                      <span className="text-sm font-medium">8.3</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Performance Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Completion Rate</span>
                      <span className="text-sm font-medium">87.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Fallback Rate</span>
                      <span className="text-sm font-medium">7.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Avg. Response Time</span>
                      <span className="text-sm font-medium">1.2s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Intent Recognition Rate</span>
                      <span className="text-sm font-medium">94.5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="interaction" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-primary" />
                User Interaction Metrics
              </CardTitle>
              <CardDescription>
                Detailed breakdown of how users engage with the chatbot
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-4">Conversation Volume</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Number of Conversations</span>
                        <span className="text-sm font-medium">12,350</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '78%' }}></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>+15.2% from last month</span>
                        <span>Target: 15,000</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Messages per Session</span>
                        <span className="text-sm font-medium">8.3</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '83%' }}></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>+0.7 from last month</span>
                        <span>Target: 10</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Session Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Average Session Duration</span>
                        <span className="text-sm font-medium">4m 12s</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '70%' }}></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>+42s from last month</span>
                        <span>Target: 6m</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Returning Users</span>
                        <span className="text-sm font-medium">63%</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '63%' }}></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>+5% from last month</span>
                        <span>Target: 75%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">User Engagement Trends</h3>
                <div className="h-[300px] flex items-center justify-center border border-dashed rounded-md">
                  <p className="text-muted-foreground">Engagement trend visualization would appear here</p>
                </div>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-4">User Distribution</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Unique Users</span>
                      <span className="text-sm font-medium">8,742</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">New Users</span>
                      <span className="text-sm font-medium">3,235</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Returning Users</span>
                      <span className="text-sm font-medium">5,507</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Active Daily Users</span>
                      <span className="text-sm font-medium">1,245</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Peak Usage Times</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Most Active Day</span>
                      <span className="text-sm font-medium">Tuesday</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Most Active Time</span>
                      <span className="text-sm font-medium">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Least Active Day</span>
                      <span className="text-sm font-medium">Sunday</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Avg. Weekend Usage</span>
                      <span className="text-sm font-medium">-42% vs weekday</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="experience" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-primary" />
                User Experience Metrics
              </CardTitle>
              <CardDescription>
                Measurements of user satisfaction and experience quality
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-4">Satisfaction Scores</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">User Satisfaction (CSAT)</span>
                        <span className="text-sm font-medium">4.8/5</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '96%' }}></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>+0.3 from last month</span>
                        <span>Target: 4.5/5</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Net Promoter Score (NPS)</span>
                        <span className="text-sm font-medium">42</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '84%' }}></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>+6 from last month</span>
                        <span>Target: 50</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Response Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Average Response Time</span>
                        <span className="text-sm font-medium">1.2s</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '90%' }}></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>-0.3s from last month</span>
                        <span>Target: 1.0s</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Resolution Time</span>
                        <span className="text-sm font-medium">1m 45s</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '85%' }}></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>-15s from last month</span>
                        <span>Target: 1m 30s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Feedback Analysis</h3>
                <div className="h-[200px] flex items-center justify-center border border-dashed rounded-md">
                  <p className="text-muted-foreground">Feedback sentiment visualization would appear here</p>
                </div>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-4">Issue Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Fallback Rate</span>
                      <span className="text-sm font-medium">7.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Confusion Rate</span>
                      <span className="text-sm font-medium">4.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Human Handoff Rate</span>
                      <span className="text-sm font-medium">3.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Repeated Questions</span>
                      <span className="text-sm font-medium">5.1%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Feedback Breakdown</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Positive Feedback</span>
                      <span className="text-sm font-medium">76%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Neutral Feedback</span>
                      <span className="text-sm font-medium">18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Negative Feedback</span>
                      <span className="text-sm font-medium">6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Feedback Response Rate</span>
                      <span className="text-sm font-medium">32%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-primary" />
                Performance Metrics
              </CardTitle>
              <CardDescription>
                Technical performance and accuracy measurements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-4">Accuracy Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Accuracy Rate</span>
                        <span className="text-sm font-medium">92.7%</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '92.7%' }}></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>+3.5% from last month</span>
                        <span>Target: 95%</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Intent Recognition Rate</span>
                        <span className="text-sm font-medium">94.5%</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '94.5%' }}></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>+2.1% from last month</span>
                        <span>Target: 97%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Completion Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Completion Rate</span>
                        <span className="text-sm font-medium">87.2%</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '87.2%' }}></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>+4.3% from last month</span>
                        <span>Target: 90%</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Error Rate</span>
                        <span className="text-sm font-medium">3.8%</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '20%' }}></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>-1.2% from last month</span>
                        <span>Target: &lt; 3%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Performance Trends</h3>
                <div className="h-[200px] flex items-center justify-center border border-dashed rounded-md">
                  <p className="text-muted-foreground">Performance trend visualization would appear here</p>
                </div>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-4">Error Analysis</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Misunderstood Intents</span>
                      <span className="text-sm font-medium">5.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Incorrect Responses</span>
                      <span className="text-sm font-medium">3.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Confusion Rate</span>
                      <span className="text-sm font-medium">4.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">System Errors</span>
                      <span className="text-sm font-medium">0.5%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Top Performing Intents</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Greetings</span>
                      <span className="text-sm font-medium">99.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Information Requests</span>
                      <span className="text-sm font-medium">97.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Help Requests</span>
                      <span className="text-sm font-medium">96.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Navigation</span>
                      <span className="text-sm font-medium">95.2%</span>
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

export default Analytics;
