// AudiencePersonas component
import React from 'react';
import AppShell from '@/components/layout/AppShell';
import TitleDescription from '@/components/TitleDescription';
import { AudiencePersonaTab } from '@/components/conversational-design/AudiencePersonaTab';

const AudiencePersonas = () => {
  return (
    <AppShell>
      <TitleDescription
        title="Audience Personas"
        description="Create and manage audience personas for your conversational experiences"
        titleSize="h1"
      />
      
      <div className="mt-8">
        <AudiencePersonaTab />
      </div>
    </AppShell>
  );
};

export default AudiencePersonas;
