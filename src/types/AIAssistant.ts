import { ReactElement } from 'react';

export interface AIAssistant {
  id: string;
  name: string;
  description: string;
  botPersona: string;
  flow: string;
  systemPrompt: string;
  icon: ReactElement;
  createdAt: string;
}

export interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}
