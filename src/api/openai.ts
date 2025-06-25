import OpenAI from 'openai';

// Types
export interface ConversationAnalysisResult {
  overallSentiment: string;
  userSatisfactionScore: number; // 0-100
  keyTopics: string[];
  conversationQuality: string; // poor, average, good, excellent
  responseEffectiveness: number; // 0-100
  suggestedImprovements: string[];
  suggestedPrompts: string[]; // New field for suggested prompts
  botResponseAnalysis: {
    followsAcpFormat: boolean; // Follows Acknowledgment, Confirmation, Prompt format
    strengths: { text: string; messageIds?: number[] }[];
    weaknesses: { text: string; messageIds?: number[] }[];
    improvementTips: { text: string; messageIds?: number[] }[];
  };
  summary: string;
}

export interface AnalysisOptions {
  includeTopics?: boolean;
  includeSuggestions?: boolean;
  detailedAnalysis?: boolean;
}

// Initialize OpenAI client
// For development, we're using a client-side approach
// In production, this should be moved to a secure server-side API
const createOpenAIClient = () => {
  return new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
    dangerouslyAllowBrowser: true // Only for development
  });
};

// Create the client only when needed to avoid initialization during build
let openai: OpenAI | null = null;

/**
 * Analyzes a conversation using OpenAI
 * @param conversation The conversation to analyze
 * @param options Analysis options
 * @returns Analysis results
 */
export async function analyzeConversation(
  conversation: any,
  options: AnalysisOptions = {}
): Promise<ConversationAnalysisResult> {
  try {
    // Initialize the OpenAI client if it hasn't been created yet
    if (!openai) {
      openai = createOpenAIClient();
    }
    
    // Check if API key is configured
    if (!openai.apiKey) {
      throw new Error('OpenAI API key is not configured. Please add VITE_OPENAI_API_KEY to your .env file.');
    }

    // Format conversation for analysis
    const messages = conversation.messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content
    }));

    // Build system prompt based on options
    let systemPrompt = `
      Analyze this conversation between a user and an AI assistant.
      Provide the following:
      - Overall sentiment of the conversation
      - User satisfaction score (0-100)
      - Quality assessment (poor, average, good, excellent)
      - Response effectiveness score (0-100)
      - A brief summary of the conversation
    `;

    if (options.includeTopics) {
      systemPrompt += `- Key topics discussed\n`;
    }

    if (options.includeSuggestions) {
      systemPrompt += `
        - Suggested improvements for the assistant
        - Suggested follow-up prompts the user might find helpful
      `;
    }

    if (options.detailedAnalysis) {
      systemPrompt += `
        - Detailed analysis of the bot's responses including:
          - Whether responses follow Acknowledgment, Confirmation, Prompt format
          - Strengths of the responses (with message references)
          - Weaknesses of the responses (with message references)
          - Specific tips for improvement (with message references)
      `;
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
        {
          role: 'user',
          content: 'Please provide your analysis in JSON format that matches the ConversationAnalysisResult type.'
        }
      ],
      response_format: { type: 'json_object' }
    });

    // Parse the result
    const result = JSON.parse(completion.choices[0].message.content || '{}');
    return result as ConversationAnalysisResult;
  } catch (error) {
    console.error('Error analyzing conversation:', error);
    throw error;
  }
}
