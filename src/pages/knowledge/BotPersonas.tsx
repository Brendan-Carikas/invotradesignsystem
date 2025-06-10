import React from 'react';
import AppShell from '@/components/layout/AppShell';
import TitleDescription from '@/components/TitleDescription';
import BotPersonaTab from '@/components/conversational-design/BotPersonaTab';

const BotPersonas = () => {
  return (
    <AppShell>
      <TitleDescription
        title="Bot Personas"
        description="Create and manage bot personas for your conversational experiences"
        titleSize="h1"
      />
      
      <div className="mt-8">
        <BotPersonaTab />
      </div>
    </AppShell>
  );
};

export default BotPersonas;
