
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, FileText, ShoppingCart, ArrowRight } from "lucide-react";
import VerticalShell from "@/components/layout/VerticalShell";

const VerticalShellDemo = () => {
  const stats = [
    { title: "Total Revenue", icon: <BarChart3 className="h-5 w-5" />, value: "$45,231.89", change: "+20.1%", trend: "up" },
    { title: "Active Users", icon: <Users className="h-5 w-5" />, value: "2,338", change: "+12.3%", trend: "up" },
    { title: "New Documents", icon: <FileText className="h-5 w-5" />, value: "432", change: "-8.4%", trend: "down" },
    { title: "Sales", icon: <ShoppingCart className="h-5 w-5" />, value: "1,203", change: "+33.8%", trend: "up" },
  ];

  const recentActivity = [
    { user: "Alice Cooper", action: "created a new document", time: "2 minutes ago" },
    { user: "Bob Smith", action: "completed task #423", time: "48 minutes ago" },
    { user: "Carol Davis", action: "updated project settings", time: "2 hours ago" },
    { user: "Dave Wilson", action: "submitted a new proposal", time: "5 hours ago" },
  ];

  return (
    <VerticalShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your application statistics and recent activity.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <Badge variant={stat.trend === "up" ? "default" : "destructive"} className="mt-1">
                  {stat.change}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Content */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Recent Activity */}
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions across your team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 border-b border-border pb-4 last:border-none">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      {activity.user.charAt(0)}
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Call to action */}
          <Card>
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
              <CardDescription>Quick actions to help you get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-between">
                Complete your profile 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                View documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="secondary" className="w-full justify-between">
                Invite team members
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </VerticalShell>
  );
};

export default VerticalShellDemo;
