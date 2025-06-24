// Re-export functions from our API implementation
export { analyzeConversation } from '../api/openai';

// Re-export types with the correct syntax for isolatedModules
export type { ConversationAnalysisResult, AnalysisOptions } from '../api/openai';
