import { createClient } from '@supabase/supabase-js';
import { BotPersona, RegisterOptions } from '@/types/BotPersona';
import { AudiencePersona } from '@/types/AudiencePersona';

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
  try {
    // Validate required fields
    if (!persona.name) {
      throw new Error('Name is required');
    }
    
    // Sanitize and prepare data for Supabase
    const sanitizedData = {
      name: persona.name || '',
      organization: persona.organization || '',
      audience_personas: persona.audiencePersonas || [], // Array of audience persona IDs
      brand_tone: persona.brandTone || '',
      service_tasks: persona.serviceTasks || '',
      persuasive_tasks: persona.persuasiveTasks || '',
      channels: persona.channels || '',
      register: persona.register || {
        formal: false,
        sincere: false,
        serious: false,
        subjective: false,
        casual: false,
        humorous: false
      },
      age: persona.age || null,
      gender: persona.gender || null,
      personality: persona.personality || '',
      backstory: persona.backstory || null,
      geography: persona.geography || null,
      bot_tone: persona.botTone || '',
      sounds_like: persona.soundsLike || null,
      chats_like: persona.chatsLike || null,
      other_identity: persona.otherIdentity || null,
      typical_phrases: persona.typicalPhrases || '',
      introductions: persona.introductions || '',
      acknowledgements: persona.acknowledgements || '',
      confirmations: persona.confirmations || '',
      apologies: persona.apologies || '',
      other_vocabulary: persona.otherVocabulary || null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    // Insert into Supabase
    const { data, error } = await supabase
      .from('bot_personas')
      .insert([sanitizedData])
      .select()
      .single();
    
    if (error) {
      console.error('Error creating bot persona:', error);
      throw new Error(`Failed to create bot persona: ${error.message}`);
    }
    
    if (!data) {
      throw new Error('No data returned after creating bot persona');
    }
    
    // Transform back to camelCase for the application
    return camelCaseKeys(data) as BotPersona;
  } catch (error) {
    console.error('Error creating bot persona:', error);
    return null;
  }
};

export const updateBotPersona = async (id: string, persona: Partial<BotPersona>): Promise<BotPersona | null> => {
  try {
    if (!id) {
      throw new Error('ID is required for updating a bot persona');
    }
    
    // Sanitize and prepare data for Supabase
    const sanitizedData: Record<string, any> = {
      updated_at: new Date().toISOString()
    };
    
    // Only include fields that are provided
    if (persona.name !== undefined) sanitizedData.name = persona.name;
    if (persona.organization !== undefined) sanitizedData.organization = persona.organization;
    if (persona.audiencePersonas !== undefined) sanitizedData.audience_personas = persona.audiencePersonas; // Array of audience persona IDs
    if (persona.brandTone !== undefined) sanitizedData.brand_tone = persona.brandTone;
    if (persona.serviceTasks !== undefined) sanitizedData.service_tasks = persona.serviceTasks;
    if (persona.persuasiveTasks !== undefined) sanitizedData.persuasive_tasks = persona.persuasiveTasks;
    if (persona.channels !== undefined) sanitizedData.channels = persona.channels;
    if (persona.register !== undefined) sanitizedData.register = persona.register;
    if (persona.age !== undefined) sanitizedData.age = persona.age;
    if (persona.gender !== undefined) sanitizedData.gender = persona.gender;
    if (persona.personality !== undefined) sanitizedData.personality = persona.personality;
    if (persona.backstory !== undefined) sanitizedData.backstory = persona.backstory;
    if (persona.geography !== undefined) sanitizedData.geography = persona.geography;
    if (persona.botTone !== undefined) sanitizedData.bot_tone = persona.botTone;
    if (persona.soundsLike !== undefined) sanitizedData.sounds_like = persona.soundsLike;
    if (persona.chatsLike !== undefined) sanitizedData.chats_like = persona.chatsLike;
    if (persona.otherIdentity !== undefined) sanitizedData.other_identity = persona.otherIdentity;
    if (persona.typicalPhrases !== undefined) sanitizedData.typical_phrases = persona.typicalPhrases;
    if (persona.introductions !== undefined) sanitizedData.introductions = persona.introductions;
    if (persona.acknowledgements !== undefined) sanitizedData.acknowledgements = persona.acknowledgements;
    if (persona.confirmations !== undefined) sanitizedData.confirmations = persona.confirmations;
    if (persona.apologies !== undefined) sanitizedData.apologies = persona.apologies;
    if (persona.otherVocabulary !== undefined) sanitizedData.other_vocabulary = persona.otherVocabulary;
    
    // Update in Supabase
    const { data, error } = await supabase
      .from('bot_personas')
      .update(sanitizedData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error updating bot persona:', error);
      throw new Error(`Failed to update bot persona: ${error.message}`);
    }
    
    if (!data) {
      throw new Error(`Bot persona with id ${id} not found`);
    }
    
    // Transform back to camelCase for the application
    return camelCaseKeys(data) as BotPersona;
  } catch (error) {
    console.error('Error updating bot persona:', error);
    return null;
  }
};

export const deleteBotPersona = async (id: string): Promise<boolean> => {
  try {
    if (!id) {
      throw new Error('ID is required for deleting a bot persona');
    }
    
    const { error } = await supabase
      .from('bot_personas')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error deleting bot persona:', error);
      throw new Error(`Failed to delete bot persona: ${error.message}`);
    }
    
    return true;
  } catch (error) {
    console.error('Error deleting bot persona:', error);
    return false;
  }
};

// Audience Persona related functions
export const getAudiencePersonas = async (): Promise<AudiencePersona[]> => {
  try {
    const { data, error } = await supabase
      .from('audience_personas')
      .select('*');
    
    if (error) {
      console.error('Error fetching audience personas:', error);
      throw new Error(`Failed to fetch audience personas: ${error.message}`);
    }
    
    return data || [];
  } catch (error) {
    console.error('Error fetching audience personas:', error);
    return [];
  }
};

export const createAudiencePersona = async (persona: Omit<AudiencePersona, 'id'>): Promise<AudiencePersona | null> => {
  try {
    // Validate required fields
    if (!persona.name) {
      throw new Error('Name is required');
    }
    
    // Sanitize and prepare data for Supabase
    const sanitizedData = {
      name: persona.name || '',
      description: persona.description || '',
      // Include old fields with empty values to satisfy NOT NULL constraints
      demographics: '',  // Empty string for NOT NULL constraint
      goals: '',         // Empty string for NOT NULL constraint
      pain_points: persona.turn_offs_challenges || null,
      behaviors: null,
      preferences: null,
      tech_proficiency: null,
      // New fields
      age: persona.age || null,
      gender: persona.gender || null,
      personality: persona.personality || null,
      geography: persona.geography || null,
      culture: persona.culture || null,
      family_life: persona.family_life || null,
      backstory: persona.backstory || null,
      education: persona.education || null,
      occupation: persona.occupation || null,
      income: persona.income || null,
      living_situation: persona.living_situation || null,
      interests_hobbies: persona.interests_hobbies || null,
      turn_offs_challenges: persona.turn_offs_challenges || null,
      motivations: persona.motivations || null,
      devices: persona.devices || null,
      preferred_channels: persona.preferred_channels || null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    // Insert into Supabase
    const { data, error } = await supabase
      .from('audience_personas')
      .insert([sanitizedData])
      .select()
      .single();
    
    if (error) {
      console.error('Error creating audience persona:', error);
      throw new Error(`Failed to create audience persona: ${error.message}`);
    }
    
    if (!data) {
      throw new Error('No data returned after creating audience persona');
    }
    
    return data as AudiencePersona;
  } catch (error) {
    console.error('Error creating audience persona:', error);
    return null;
  }
};

export const updateAudiencePersona = async (id: string, persona: Partial<AudiencePersona>): Promise<AudiencePersona | null> => {
  try {
    if (!id) {
      throw new Error('ID is required for updating an audience persona');
    }
    
    // Sanitize and prepare data for Supabase
    const sanitizedData: Record<string, any> = {
      updated_at: new Date().toISOString()
    };
    
    // Only include fields that are provided
    if (persona.name !== undefined) sanitizedData.name = persona.name;
    if (persona.description !== undefined) sanitizedData.description = persona.description;
    
    // Handle old fields - keep them in the update for backward compatibility
    // We'll map turn_offs_challenges to pain_points to maintain some data consistency
    if (persona.turn_offs_challenges !== undefined) {
      sanitizedData.pain_points = persona.turn_offs_challenges;
    }
    
    // Handle new fields
    if (persona.age !== undefined) sanitizedData.age = persona.age;
    if (persona.gender !== undefined) sanitizedData.gender = persona.gender;
    if (persona.personality !== undefined) sanitizedData.personality = persona.personality;
    if (persona.geography !== undefined) sanitizedData.geography = persona.geography;
    if (persona.culture !== undefined) sanitizedData.culture = persona.culture;
    if (persona.family_life !== undefined) sanitizedData.family_life = persona.family_life;
    if (persona.backstory !== undefined) sanitizedData.backstory = persona.backstory;
    if (persona.education !== undefined) sanitizedData.education = persona.education;
    if (persona.occupation !== undefined) sanitizedData.occupation = persona.occupation;
    if (persona.income !== undefined) sanitizedData.income = persona.income;
    if (persona.living_situation !== undefined) sanitizedData.living_situation = persona.living_situation;
    if (persona.interests_hobbies !== undefined) sanitizedData.interests_hobbies = persona.interests_hobbies;
    if (persona.turn_offs_challenges !== undefined) sanitizedData.turn_offs_challenges = persona.turn_offs_challenges;
    if (persona.motivations !== undefined) sanitizedData.motivations = persona.motivations;
    if (persona.devices !== undefined) sanitizedData.devices = persona.devices;
    if (persona.preferred_channels !== undefined) sanitizedData.preferred_channels = persona.preferred_channels;
    
    // Update in Supabase
    const { data, error } = await supabase
      .from('audience_personas')
      .update(sanitizedData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error updating audience persona:', error);
      throw new Error(`Failed to update audience persona: ${error.message}`);
    }
    
    if (!data) {
      throw new Error(`Audience persona with id ${id} not found`);
    }
    
    return data as AudiencePersona;
  } catch (error) {
    console.error('Error updating audience persona:', error);
    return null;
  }
};

export const deleteAudiencePersona = async (id: string): Promise<boolean> => {
  try {
    if (!id) {
      throw new Error('ID is required for deleting an audience persona');
    }
    
    const { error } = await supabase
      .from('audience_personas')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error deleting audience persona:', error);
      throw new Error(`Failed to delete audience persona: ${error.message}`);
    }
    
    return true;
  } catch (error) {
    console.error('Error deleting audience persona:', error);
    return false;
  }
};
