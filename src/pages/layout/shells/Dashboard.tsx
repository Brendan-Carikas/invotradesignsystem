
import React from "react";
import AppShell from "@/components/layout/AppShell";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { 
  LineChart, 
  Line, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { CircleUser, MessagesSquare, Zap, MessageSquare, Gauge, Clock } from "lucide-react";

// Sample data for the dashboard charts
const dailyMetricsData = [
  { date: "Mon", conversations: 320, users: 240, queries: 400 },
  { date: "Tue", conversations: 300, users: 139, queries: 380 },
  { date: "Wed", conversations: 350, users: 180, queries: 430 },
  { date: "Thu", conversations: 420, users: 250, queries: 510 },
  { date: "Fri", conversations: 380, users: 210, queries: 470 },
  { date: "Sat", conversations: 250, users: 142, queries: 305 },
  { date: "Sun", conversations: 190, users: 100, queries: 240 }
];

const topQueriesData = [
  { name: "Product questions", value: 35 },
  { name: "Technical support", value: 25 },
  { name: "Account issues", value: 20 },
  { name: "Pricing inquiries", value: 15 },
  { name: "Other", value: 5 },
];

const responseTimeData = [
  { name: "< 2s", count: 245 },
  { name: "2-5s", count: 184 },
  { name: "5-10s", count: 76 },
  { name: "10-30s", count: 42 },
  { name: "30s+", count: 12 },
];

const recentInteractionsData = [
  {
    id: 1,
    user: "user2854",
    query: "How do I reset my password?",
    intent: "Account Support",
    time: "2 mins ago",
    satisfaction: "High"
  },
  {
    id: 2,
    user: "customer451",
    query: "What are the shipping options?",
    intent: "Product Information",
    time: "15 mins ago",
    satisfaction: "Medium"
  },
  {
    id: 3,
    user: "visitor921",
    query: "Is there a free trial available?",
    intent: "Pricing",
    time: "28 mins ago",
    satisfaction: "High"
  },
  {
    id: 4,
    user: "member109",
    query: "The chatbot isn't answering my question",
    intent: "Technical Issue",
    time: "42 mins ago",
    satisfaction: "Low"
  },
  {
    id: 5,
    user: "guest3388",
    query: "How do I contact customer support?",
    intent: "General Question",
    time: "1 hour ago",
    satisfaction: "High"
  }
];

// Colors for the pie chart
const COLORS = ['#9b87f5', '#7E69AB', '#6E59A5', '#D6BCFA', '#E5DEFF'];

const satisfactionColors = {
  "High": "text-green-500",
  "Medium": "text-yellow-500",
  "Low": "text-red-500"
};

const Dashboard = () => {
  return (
    <AppShell>
      <section className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">AI Assistant Dashboard</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Monitor and analyze your AI chatbot's performance metrics and user interactions.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
            <MessagesSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,210</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <CircleUser className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,265</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2s</div>
            <p className="text-xs text-muted-foreground">-0.5s from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Gauge className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mb-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="queries">Queries</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Daily Metrics</CardTitle>
              <CardDescription>
                Conversations, users, and queries tracked over the past week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={dailyMetricsData}
                    margin={{
                      top: 5,
                      right: 10,
                      left: 10,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="conversations"
                      stroke="#9b87f5"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="users" stroke="#7E69AB" strokeWidth={2} />
                    <Line type="monotone" dataKey="queries" stroke="#6E59A5" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="queries" className="space-y-4 mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Query Categories</CardTitle>
                <CardDescription>
                  Distribution of user queries by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <ChartContainer 
                    config={{
                      product: {
                        label: "Product Questions",
                        theme: {
                          light: "#9b87f5",
                          dark: "#9b87f5"
                        }
                      },
                      support: {
                        label: "Technical Support",
                        theme: {
                          light: "#7E69AB",
                          dark: "#7E69AB"
                        }
                      },
                      account: {
                        label: "Account Issues",
                        theme: {
                          light: "#6E59A5",
                          dark: "#6E59A5"
                        }
                      },
                      pricing: {
                        label: "Pricing Inquiries",
                        theme: {
                          light: "#D6BCFA",
                          dark: "#D6BCFA"
                        }
                      },
                      other: {
                        label: "Other",
                        theme: {
                          light: "#E5DEFF",
                          dark: "#E5DEFF"
                        }
                      }
                    }}
                  >
                    <PieChart>
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Pie
                        data={topQueriesData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {topQueriesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Legend />
                    </PieChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Time Distribution</CardTitle>
                <CardDescription>
                  Breakdown of chatbot response times
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={responseTimeData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" fill="#9b87f5" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Interactions</CardTitle>
              <CardDescription>
                The latest user interactions with the AI assistant
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Query</TableHead>
                    <TableHead>Intent</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Satisfaction</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentInteractionsData.map((interaction) => (
                    <TableRow key={interaction.id}>
                      <TableCell>{interaction.user}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{interaction.query}</TableCell>
                      <TableCell>{interaction.intent}</TableCell>
                      <TableCell>{interaction.time}</TableCell>
                      <TableCell className={satisfactionColors[interaction.satisfaction as keyof typeof satisfactionColors]}>
                        {interaction.satisfaction}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="border-t px-6 py-3">
              <p className="text-xs text-muted-foreground">
                Showing 5 of 125 recent interactions
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </AppShell>
  );
};

export default Dashboard;
