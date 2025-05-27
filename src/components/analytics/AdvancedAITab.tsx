import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Lightbulb, MessageSquare, Zap, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const AdvancedAITab = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Intent Recognition Accuracy</CardTitle>
            <div className="h-4 w-4 text-primary">
              <Brain className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.8%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-success" />
              2.1% from last month
            </p>
            <CardDescription className="mt-2 text-xs">Accuracy in identifying user intent</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Entity Recognition Accuracy</CardTitle>
            <div className="h-4 w-4 text-primary">
              <Lightbulb className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.3%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-success" />
              1.8% from last month
            </p>
            <CardDescription className="mt-2 text-xs">Accuracy in identifying entities in user queries</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Context Retention Score</CardTitle>
            <div className="h-4 w-4 text-primary">
              <MessageSquare className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.5%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-success" />
              3.2% from last month
            </p>
            <CardDescription className="mt-2 text-xs">Ability to maintain context across conversation turns</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Knowledge Retrieval Accuracy</CardTitle>
            <div className="h-4 w-4 text-primary">
              <Brain className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89.2%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-success" />
              2.4% from last month
            </p>
            <CardDescription className="mt-2 text-xs">Accuracy in retrieving relevant knowledge</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hallucination Rate</CardTitle>
            <div className="h-4 w-4 text-destructive">
              <Zap className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="h-3 w-3 mr-1 text-success" />
              0.8% from last month
            </p>
            <CardDescription className="mt-2 text-xs">Rate of generating incorrect or made-up information</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Coherence Score</CardTitle>
            <div className="h-4 w-4 text-primary">
              <MessageSquare className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.6/5</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-success" />
              0.2 from last month
            </p>
            <CardDescription className="mt-2 text-xs">Rating of response clarity and coherence</CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Top Misunderstood Intents</CardTitle>
            <CardDescription>Intents with the highest failure rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Complex Policy Questions</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-destructive h-full" style={{ width: '18%' }}></div>
                  </div>
                  <span className="text-sm font-medium">18% failure</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Multi-step Processes</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-destructive h-full" style={{ width: '14%' }}></div>
                  </div>
                  <span className="text-sm font-medium">14% failure</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Technical Troubleshooting</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-destructive h-full" style={{ width: '12%' }}></div>
                  </div>
                  <span className="text-sm font-medium">12% failure</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Ambiguous Requests</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-destructive h-full" style={{ width: '10%' }}></div>
                  </div>
                  <span className="text-sm font-medium">10% failure</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Contextual Follow-ups</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-destructive h-full" style={{ width: '8%' }}></div>
                  </div>
                  <span className="text-sm font-medium">8% failure</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdvancedAITab;
