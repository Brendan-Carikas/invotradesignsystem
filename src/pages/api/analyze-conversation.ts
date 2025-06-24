import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

// Types
interface ConversationAnalysisResult {
  overallSentiment: string;
  userSatisfactionScore: number; // 0-100
  keyTopics: string[];
  conversationQuality: string; // poor, average, good, excellent
  responseEffectiveness: number; // 0-100
  suggestedImprovements: string[];
  summary: string;
}

interface AnalysisOptions {
  includeTopics?: boolean;
  includeSuggestions?: boolean;
  detailedAnalysis?: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { conversation, options = {} } = req.body;

    if (!conversation || !conversation.messages) {
      return res.status(400).json({ error: 'Invalid conversation data' });
    }

    // Get API key from environment variable (securely on the server)
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: apiKey
    });

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
    
    return res.status(200).json(analysis);
  } catch (error) {
    console.error('Error analyzing conversation:', error);
    return res.status(500).json({ 
      error: 'Failed to analyze conversation',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
