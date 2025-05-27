import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, Users, Clock, ArrowUpRight } from 'lucide-react';

const BusinessImpactTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
            <div className="h-4 w-4 text-success">
              <DollarSign className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$125,450</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-success" />
              12% from last quarter
            </p>
            <CardDescription className="mt-2 text-xs">Estimated savings from reduced support costs</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ROI</CardTitle>
            <div className="h-4 w-4 text-success">
              <TrendingUp className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">348%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-success" />
              42% from last quarter
            </p>
            <CardDescription className="mt-2 text-xs">Return on investment for chatbot implementation</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Agent Time Saved</CardTitle>
            <div className="h-4 w-4 text-primary">
              <Clock className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245 hrs</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-success" />
              18% from last quarter
            </p>
            <CardDescription className="mt-2 text-xs">Human agent hours saved through automation</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Support Volume Handled</CardTitle>
            <div className="h-4 w-4 text-primary">
              <Users className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68.5%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-success" />
              7.2% from last quarter
            </p>
            <CardDescription className="mt-2 text-xs">Percentage of support volume handled by chatbot</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <div className="h-4 w-4 text-success">
              <TrendingUp className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.8%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-success" />
              2.1% from last quarter
            </p>
            <CardDescription className="mt-2 text-xs">Percentage of chatbot interactions leading to conversions</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Operating Cost</CardTitle>
            <div className="h-4 w-4 text-warning">
              <DollarSign className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$0.12</div>
            <p className="text-xs text-muted-foreground">Per conversation</p>
            <CardDescription className="mt-2 text-xs">Average cost to operate the chatbot per conversation</CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Cost Comparison: Human vs. Chatbot</CardTitle>
            <CardDescription>Cost per interaction comparison between human agents and chatbot</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">Human Agent</p>
                  <p className="text-sm font-medium">$8.50 per interaction</p>
                </div>
                <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-destructive h-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">Chatbot</p>
                  <p className="text-sm font-medium">$0.12 per interaction</p>
                </div>
                <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-success h-full" style={{ width: '1.4%' }}></div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">The chatbot costs approximately 1.4% of what a human agent costs per interaction, resulting in significant cost savings while maintaining high customer satisfaction rates.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BusinessImpactTab;
