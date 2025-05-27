import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Zap, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const PerformanceTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
            <div className="h-4 w-4 text-primary">
              <Clock className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.8s</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="h-3 w-3 mr-1 text-success" />
              0.3s from last month
            </p>
            <CardDescription className="mt-2 text-xs">Time taken for the chatbot to respond to user queries</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversation Duration</CardTitle>
            <div className="h-4 w-4 text-primary">
              <Activity className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3m 42s</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="h-3 w-3 mr-1 text-success" />
              18s from last month
            </p>
            <CardDescription className="mt-2 text-xs">Average length of a complete conversation</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Latency</CardTitle>
            <div className="h-4 w-4 text-primary">
              <Zap className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245ms</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="h-3 w-3 mr-1 text-success" />
              32ms from last month
            </p>
            <CardDescription className="mt-2 text-xs">Time taken for API calls to complete</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">First Response Time</CardTitle>
            <div className="h-4 w-4 text-primary">
              <Clock className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.9s</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="h-3 w-3 mr-1 text-success" />
              0.1s from last month
            </p>
            <CardDescription className="mt-2 text-xs">Time to first response in a conversation</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Token Usage</CardTitle>
            <div className="h-4 w-4 text-warning">
              <Activity className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.25M</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-destructive" />
              12% from last month
            </p>
            <CardDescription className="mt-2 text-xs">Total tokens used across all conversations</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Tokens per Conversation</CardTitle>
            <div className="h-4 w-4 text-warning">
              <Activity className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,850</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-destructive" />
              5% from last month
            </p>
            <CardDescription className="mt-2 text-xs">Average token usage per conversation</CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Performance by Time of Day</CardTitle>
            <CardDescription>Response times and success rates across different hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full flex items-end justify-between px-2">
              {Array.from({ length: 24 }).map((_, i) => {
                // Generate a height between 30% and 90% based on the hour
                const height = 30 + Math.sin((i / 24) * Math.PI * 2) * 30 + Math.random() * 30;
                return (
                  <div key={i} className="relative group">
                    <div 
                      className="w-4 bg-primary rounded-t transition-all duration-300 group-hover:bg-primary/80"
                      style={{ height: `${height}%` }}
                    ></div>
                    <div className="absolute bottom-[-20px] left-[-8px] text-xs text-muted-foreground">
                      {i}
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-background border border-border rounded px-2 py-1 text-xs whitespace-nowrap">
                      {i}:00 - {(i+1) % 24}:00: {(1 + Math.sin((i / 24) * Math.PI * 2) * 0.5).toFixed(1)}s
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 text-xs text-center text-muted-foreground">Hour of Day (24h format)</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PerformanceTab;
