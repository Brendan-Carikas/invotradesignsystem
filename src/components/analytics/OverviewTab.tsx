import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, BarChart, PieChart, TrendingUp, Users, AlertCircle } from 'lucide-react';

const OverviewTab = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversation Abandonment Rate</CardTitle>
            <div className="h-4 w-4 text-destructive">
              <TrendingUp className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.5%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
            <CardDescription className="mt-2 text-xs">Percentage of users who leave the chat before completion</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Task Success Rate</CardTitle>
            <div className="h-4 w-4 text-primary">
              <LineChart className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76.3%</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
            <CardDescription className="mt-2 text-xs">Percentage of users who successfully complete their task</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Escalation Rate</CardTitle>
            <div className="h-4 w-4 text-warning">
              <Users className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.8%</div>
            <p className="text-xs text-muted-foreground">-1.5% from last month</p>
            <CardDescription className="mt-2 text-xs">Percentage of conversations handed off to human agents</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fallback Rate</CardTitle>
            <div className="h-4 w-4 text-destructive">
              <AlertCircle className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.7%</div>
            <p className="text-xs text-muted-foreground">-0.9% from last month</p>
            <CardDescription className="mt-2 text-xs">Percentage of times the bot fails to understand queries</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Satisfaction Score</CardTitle>
            <div className="h-4 w-4 text-primary">
              <BarChart className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2/5</div>
            <p className="text-xs text-muted-foreground">+0.3 from last month</p>
            <CardDescription className="mt-2 text-xs">Average CSAT score from post-chat surveys</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Feedback Engagement</CardTitle>
            <div className="h-4 w-4 text-primary">
              <PieChart className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,254</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
            <CardDescription className="mt-2 text-xs">Total count of chatbot interactions with feedback</CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewTab;
