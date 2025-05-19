import React from 'react';
import AppShell from "@/components/layout/AppShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Download, FileText, Filter, FileBarChart } from 'lucide-react';
import TitleDescription from "@/components/TitleDescription";

const Reports = () => {
  // Sample report data
  const recentReports = [
    { id: 1, name: 'Monthly Usage Summary', date: '2025-05-01', type: 'System', status: 'Complete' },
    { id: 2, name: 'User Engagement Analysis', date: '2025-04-28', type: 'Analytics', status: 'Complete' },
    { id: 3, name: 'Performance Metrics', date: '2025-04-15', type: 'System', status: 'Complete' },
    { id: 4, name: 'Conversation Flow Effectiveness', date: '2025-04-10', type: 'Conversational', status: 'Complete' },
    { id: 5, name: 'Knowledge Base Coverage', date: '2025-04-05', type: 'Content', status: 'Complete' },
  ];

  return (
    <AppShell>
      <TitleDescription
        title="Reports and documentation"
        description="Access and generate system reports and analytics documents"
        titleSize="h1"
      />

      <Tabs defaultValue="recent" className="w-full">
        <TabsList className="mb-4 flex flex-wrap h-auto justify-start">
          <TabsTrigger value="recent" className="mb-1 mr-1">Recent Reports</TabsTrigger>
          <TabsTrigger value="scheduled" className="mb-1 mr-1">Scheduled Reports</TabsTrigger>
          <TabsTrigger value="custom" className="mb-1 mr-1">Custom Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recent" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileBarChart className="h-5 w-5 text-primary" />
                Recent Reports
              </CardTitle>
              <CardDescription>
                A list of recently generated reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">{report.name}</TableCell>
                      <TableCell>{report.date}</TableCell>
                      <TableCell>{report.type}</TableCell>
                      <TableCell>{report.status}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Scheduled Reports
              </CardTitle>
              <CardDescription>
                Reports that are generated on a regular schedule
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border border-dashed rounded-md">
                <p className="text-muted-foreground">Scheduled reports would be listed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="custom" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-primary" />
                Custom Report Builder
              </CardTitle>
              <CardDescription>
                Create custom reports based on specific parameters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border border-dashed rounded-md">
                <p className="text-muted-foreground">Custom report builder interface would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppShell>
  );
};

export default Reports;
