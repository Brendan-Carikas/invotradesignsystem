import { createClient } from '@supabase/supabase-js';
import { BotPersona, RegisterOptions } from '@/types/BotPersona';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper functions to convert between camelCase and snake_case for Supabase
const toCamelCase = (str: string) => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const toSnakeCase = (str: string) => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const transformKeys = (obj: any, transformer: (key: string) => string) => {
  if (obj === null || typeof obj !== 'object') return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(item => transformKeys(item, transformer));
  }
  
  return Object.keys(obj).reduce((result, key) => {
    const transformedKey = transformer(key);
    const value = obj[key];
    
    // Handle Date objects
    if (value instanceof Date) {
      result[transformedKey] = value.toISOString();
    } else if (typeof value === 'object' && value !== null) {
      // For nested objects, recursively transform keys
      // But don't transform register object which should be stored as JSON
      result[transformedKey] = key === 'register' ? value : transformKeys(value, transformer);
    } else {
      result[transformedKey] = value;
    }
    
    return result;
  }, {} as Record<string, any>);
};

const snakeCaseKeys = (obj: any) => transformKeys(obj, toSnakeCase);
const camelCaseKeys = (obj: any) => transformKeys(obj, toCamelCase);

// Bot Persona related functions
export const getBotPersonas = async (): Promise<BotPersona[]> => {
  const { data, error } = await supabase
    .from('bot_personas')
    .select('*');
  
  if (error) {
    console.error('Error fetching bot personas:', error);
    return [];
  }
  
  // Transform snake_case to camelCase
  return data ? data.map((item: any) => {
    const camelCaseItem = camelCaseKeys(item);
    
    // Parse register JSON if it's a string
    if (typeof camelCaseItem.register === 'string') {
      try {
        camelCaseItem.register = JSON.parse(camelCaseItem.register);
      } catch (e) {
        console.error('Error parsing register JSON:', e);
        camelCaseItem.register = {
          formal: false,
          sincere: false,
          serious: false,
          subjective: false,
          casual: false,
          humorous: false
        };
      }
    }
    
    return camelCaseItem as BotPersona;
  }) : [];
};

export const createBotPersona = async (persona: Omit<BotPersona, 'id'>): Promise<BotPersona | null> => {
  // Prepare data for Supabase - convert to snake_case and handle dates
  const preparedData = {
    ...snakeCaseKeys(persona),
    // Ensure register is stored as a JSON object
    register: persona.register || {
      formal: false,
      sincere: false,
      serious: false,
      subjective: false,
      casual: false,
      humorous: false
    },
    // Add timestamps if not present
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  
  const { data, error } = await supabase
    .from('bot_personas')
    .insert([preparedData])
    .select()
    .single();
  
  if (error) {
    console.error('Error creating bot persona:', error);
    return null;
  }
  
  // Transform back to camelCase for the application
  return camelCaseKeys(data) as BotPersona;
};

export const updateBotPersona = async (id: string, persona: Partial<BotPersona>): Promise<BotPersona | null> => {
  // Prepare data for Supabase - convert to snake_case and handle dates
  const preparedData = {
    ...snakeCaseKeys(persona),
    // Update timestamp
    updated_at: new Date().toISOString()
  };
  
  // If register is being updated, ensure it's properly formatted
  if (persona.register) {
    preparedData.register = persona.register;
  }
  
  const { data, error } = await supabase
    .from('bot_personas')
    .update(preparedData)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error('Error updating bot persona:', error);
    return null;
  }
  
  // Transform back to camelCase for the application
  return camelCaseKeys(data) as BotPersona;
};

export const deleteBotPersona = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('bot_personas')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting bot persona:', error);
    return false;
  }
  
  return true;
};
