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
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true // Only for development
});

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
    // Check if API key is configured
    if (!openai.apiKey) {
      throw new Error('OpenAI API key is not configured. Please add VITE_OPENAI_API_KEY to your .env file.');
    }
    
    // Extract just the messages for analysis
    const messages = conversation.messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content,
      ...(msg.intent ? { intent: msg.intent } : {}),
      ...(msg.sentiment ? { sentiment: msg.sentiment } : {})
    }));

    // Create system prompt for analysis
    const systemPrompt = `
      You are an expert conversation analyst. Analyze the following conversation between a user and an AI assistant.
      Focus on these key aspects:
      - Overall sentiment and tone
      - User satisfaction level
      - Key topics discussed
      - Quality of the conversation flow
      - Effectiveness of the assistant's responses
      - Areas for improvement
      - Suggested prompts that could improve the conversation
      - Analysis of bot responses, especially whether they follow the Acknowledgment, Confirmation, Prompt (ACP) format
      
      ${options.detailedAnalysis ? 'Provide detailed analysis with specific examples.' : 'Provide a concise analysis.'}
      ${options.includeTopics ? 'Include a comprehensive list of key topics discussed.' : ''}
      ${options.includeSuggestions ? 'Provide specific suggestions for improving the conversation.' : ''}
      
      Format your response as a JSON object with the following structure:
      {
        "overallSentiment": "string",
        "userSatisfactionScore": number (0-100),
        "keyTopics": ["topic1", "topic2", ...],
        "conversationQuality": "poor|average|good|excellent",
        "responseEffectiveness": number (0-100),
        "suggestedImprovements": ["suggestion1", "suggestion2", ...],
        "suggestedPrompts": ["prompt1", "prompt2", ...],
        "botResponseAnalysis": {
          "followsAcpFormat": boolean,
          "strengths": [
            { "text": "strength description", "messageIds": [message number] },
            ...
          ],
          "weaknesses": [
            { "text": "weakness description", "messageIds": [message number] },
            ...
          ],
          "improvementTips": [
            { "text": "improvement tip", "messageIds": [message number] },
            ...
          ]
        },
        "summary": "string"
      }
    `;
    
    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: JSON.stringify(messages) }
      ],
      response_format: { type: 'json_object' }
    });

    // Parse and return the analysis
    const analysisText = response.choices[0]?.message?.content || '{}';
    const analysis = JSON.parse(analysisText) as ConversationAnalysisResult;
    
    return analysis;
  } catch (error) {
    console.error('Error analyzing conversation:', error);
    throw new Error('Failed to analyze conversation: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}
