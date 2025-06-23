import { ReactElement } from 'react';

export interface AIAssistant {
  id: string;
  name: string;
  description: string;
  botPersona: string;
  botPersonaName?: string; // Added to store the name of the bot persona
  flow: string;
  systemPrompt: string;
  createdAt: string;
  icon: ReactNode;
}

export interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}
