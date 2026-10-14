import { BotPersona } from '@/types/BotPersona';
import { AudiencePersona } from '@/types/AudiencePersona';

/**
 * Local (browser) persistence for bot and audience personas.
 *
 * Replaces the former Supabase backend (src/lib/supabase.ts, retired Oct 2026 while the
 * project is paused). Data lives in localStorage, so it is per-browser and not shared.
 * The function signatures match the old Supabase helpers so components are unchanged.
 * See docs/SUPABASE_RETIREMENT.md for how to bring Supabase back.
 */

const BOT_KEY = 'ids.botPersonas';
const AUDIENCE_KEY = 'ids.audiencePersonas';

const read = <T>(key: string): T[] => {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return [];
  }
};

const write = <T>(key: string, items: T[]): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(items));
    return true;
  } catch (error) {
    console.error(`Error writing ${key} to localStorage:`, error);
    return false;
  }
};

const newId = () => crypto.randomUUID();

// Bot Persona related functions
export const getBotPersonas = async (): Promise<BotPersona[]> => read<BotPersona>(BOT_KEY);

export const createBotPersona = async (persona: Omit<BotPersona, 'id'>): Promise<BotPersona | null> => {
  if (!persona.name) {
    console.error('Error creating bot persona: Name is required');
    return null;
  }
  const now = new Date().toISOString();
  const created = { ...persona, id: newId(), createdAt: now, updatedAt: now } as BotPersona;
  return write(BOT_KEY, [...read<BotPersona>(BOT_KEY), created]) ? created : null;
};

export const updateBotPersona = async (id: string, persona: Partial<BotPersona>): Promise<BotPersona | null> => {
  if (!id) {
    console.error('Error updating bot persona: ID is required');
    return null;
  }
  const items = read<BotPersona>(BOT_KEY);
  const index = items.findIndex(p => p.id === id);
  if (index === -1) {
    console.error(`Error updating bot persona: ${id} not found`);
    return null;
  }
  const updated = { ...items[index], ...persona, id, updatedAt: new Date().toISOString() } as BotPersona;
  items[index] = updated;
  return write(BOT_KEY, items) ? updated : null;
};

export const deleteBotPersona = async (id: string): Promise<boolean> => {
  if (!id) {
    console.error('Error deleting bot persona: ID is required');
    return false;
  }
  return write(BOT_KEY, read<BotPersona>(BOT_KEY).filter(p => p.id !== id));
};

// Audience Persona related functions
export const getAudiencePersonas = async (): Promise<AudiencePersona[]> => read<AudiencePersona>(AUDIENCE_KEY);

export const createAudiencePersona = async (persona: Omit<AudiencePersona, 'id'>): Promise<AudiencePersona | null> => {
  if (!persona.name) {
    console.error('Error creating audience persona: Name is required');
    return null;
  }
  const now = new Date().toISOString();
  const created = { ...persona, id: newId(), created_at: now, updated_at: now } as AudiencePersona;
  return write(AUDIENCE_KEY, [...read<AudiencePersona>(AUDIENCE_KEY), created]) ? created : null;
};

export const updateAudiencePersona = async (id: string, persona: Partial<AudiencePersona>): Promise<AudiencePersona | null> => {
  if (!id) {
    console.error('Error updating audience persona: ID is required');
    return null;
  }
  const items = read<AudiencePersona>(AUDIENCE_KEY);
  const index = items.findIndex(p => p.id === id);
  if (index === -1) {
    console.error(`Error updating audience persona: ${id} not found`);
    return null;
  }
  const updated = { ...items[index], ...persona, id, updated_at: new Date().toISOString() } as AudiencePersona;
  items[index] = updated;
  return write(AUDIENCE_KEY, items) ? updated : null;
};

export const deleteAudiencePersona = async (id: string): Promise<boolean> => {
  if (!id) {
    console.error('Error deleting audience persona: ID is required');
    return false;
  }
  return write(AUDIENCE_KEY, read<AudiencePersona>(AUDIENCE_KEY).filter(p => p.id !== id));
};
