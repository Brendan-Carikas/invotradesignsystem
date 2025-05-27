import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Shield, AlertTriangle, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const OperationalTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
            <div className="h-4 w-4 text-success">
              <Server className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.98%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-success" />
              0.03% from last month
            </p>
            <CardDescription className="mt-2 text-xs">Percentage of time the chatbot system was operational</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
            <div className="h-4 w-4 text-destructive">
              <AlertTriangle className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.42%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="h-3 w-3 mr-1 text-success" />
              0.08% from last month
            </p>
            <CardDescription className="mt-2 text-xs">Percentage of requests resulting in system errors</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Incidents</CardTitle>
            <div className="h-4 w-4 text-success">
              <Shield className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Same as last month</p>
            <CardDescription className="mt-2 text-xs">Number of security incidents or breaches</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Load Time</CardTitle>
            <div className="h-4 w-4 text-primary">
              <Clock className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245ms</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="h-3 w-3 mr-1 text-success" />
              18ms from last month
            </p>
            <CardDescription className="mt-2 text-xs">Average time to load the chatbot interface</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Call Volume</CardTitle>
            <div className="h-4 w-4 text-primary">
              <Server className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.82M</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-warning" />
              14% from last month
            </p>
            <CardDescription className="mt-2 text-xs">Total number of API calls made by the chatbot</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Processing Time</CardTitle>
            <div className="h-4 w-4 text-primary">
              <Clock className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128ms</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="h-3 w-3 mr-1 text-success" />
              12ms from last month
            </p>
            <CardDescription className="mt-2 text-xs">Average time to process user input data</CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>System Health Timeline</CardTitle>
            <CardDescription>Operational status over the past 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <span className="text-sm">Fully Operational</span>
                <div className="w-3 h-3 rounded-full bg-warning ml-4"></div>
                <span className="text-sm">Degraded Performance</span>
                <div className="w-3 h-3 rounded-full bg-destructive ml-4"></div>
                <span className="text-sm">Service Disruption</span>
              </div>
              
              <div className="w-full h-12 bg-gray-100 rounded-lg overflow-hidden flex">
                {Array.from({ length: 30 }).map((_, i) => {
                  // Generate a status for each day (mostly success, occasional warning, rare error)
                  const rand = Math.random();
                  let bgColor = "bg-success";
                  if (rand > 0.95) bgColor = "bg-destructive";
                  else if (rand > 0.9) bgColor = "bg-warning";
                  
                  return (
                    <div 
                      key={i} 
                      className={`flex-1 ${bgColor} border-r border-background group relative`}
                    >
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-background border border-border rounded px-2 py-1 text-xs whitespace-nowrap">
                        Day {i+1}: {bgColor === "bg-success" ? "Operational" : bgColor === "bg-warning" ? "Degraded" : "Disruption"}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>30 days ago</span>
                <span>Today</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OperationalTab;
