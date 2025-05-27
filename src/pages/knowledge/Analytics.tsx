import React from 'react';
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TitleDescription from "@/components/TitleDescription";

// Import tab components
import OverviewTab from '@/components/analytics/OverviewTab';
import UserFeedbackTab from '@/components/analytics/UserFeedbackTab';
import PerformanceTab from '@/components/analytics/PerformanceTab';
import OperationalTab from '@/components/analytics/OperationalTab';
import BusinessImpactTab from '@/components/analytics/BusinessImpactTab';
import AdvancedAITab from '@/components/analytics/AdvancedAITab';

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
          <TabsTrigger value="feedback" className="mb-1 mr-1">User Feedback</TabsTrigger>
          <TabsTrigger value="performance" className="mb-1 mr-1">Performance</TabsTrigger>
          <TabsTrigger value="operational" className="mb-1 mr-1">Operational</TabsTrigger>
          <TabsTrigger value="business" className="mb-1 mr-1">Business Impact</TabsTrigger>
          <TabsTrigger value="ai" className="mb-1 mr-1">Advanced AI</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>

        <TabsContent value="feedback">
          <UserFeedbackTab />
        </TabsContent>

        <TabsContent value="performance">
          <PerformanceTab />
        </TabsContent>

        <TabsContent value="operational">
          <OperationalTab />
        </TabsContent>

        <TabsContent value="business">
          <BusinessImpactTab />
        </TabsContent>

        <TabsContent value="ai">
          <AdvancedAITab />
        </TabsContent>
      </Tabs>
    </AppShell>
  );
};

export default Analytics;
