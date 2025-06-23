import React from "react";
import AppShell from "@/components/layout/AppShell";
import { emailTemplates } from "@/components/emails/emailTemplateData";
import TemplateCard from "@/components/emails/TemplateCard";

// Email templates data is imported from emailTemplateData.ts

// TemplateCard component is imported from @/components/emails/TemplateCard

export default function EmailTemplates() {
  return (
    <AppShell>
      <div className="container mx-auto py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Email templates</h1>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mt-6">
          {emailTemplates.map(template => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
