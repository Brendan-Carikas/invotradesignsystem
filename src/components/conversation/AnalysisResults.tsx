import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { ConversationAnalysisResult } from "../../lib/openai";
import { AlertTriangle, Bot, CheckCircle2, FileText, MessageSquare, ThumbsUp } from "lucide-react";

interface AnalysisResultsProps {
  analysis: ConversationAnalysisResult | null;
  onMessageReferenceClick?: (messageId: number) => void;
  isLoading: boolean;
}

export function AnalysisResults({ analysis, isLoading, onMessageReferenceClick }: AnalysisResultsProps) {
  if (isLoading) {
    return (
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Analyzing conversation...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-10">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p className="mt-4 text-sm text-muted-foreground">
              This may take a few moments
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!analysis) {
    return null;
  }

  // Helper function to get color based on score
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-amber-500";
    return "bg-red-500";
  };

  // Helper function to get quality badge color
  const getQualityColor = (quality: string) => {
    switch (quality.toLowerCase()) {
      case "excellent":
        return "bg-green-500";
      case "good":
        return "bg-blue-500";
      case "average":
        return "bg-amber-500";
      case "poor":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Conversation Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6">
          {/* Summary */}
          <div>
            <h3 className="text-lg font-medium mb-2">Summary</h3>
            <p className="text-muted-foreground text-sm">{analysis.summary}</p>
          </div>

          {/* User Satisfaction */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-md font-medium flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" /> User Satisfaction
              </h3>
              <span className="text-sm font-bold">{analysis.userSatisfactionScore}%</span>
            </div>
            <Progress value={analysis.userSatisfactionScore} className="h-2 mb-2" />
            <p className="text-xs text-muted-foreground">
              Based on sentiment analysis and conversation flow
            </p>
          </div>

          {/* Response Effectiveness */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-md font-medium flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" /> Response Effectiveness
              </h3>
              <span className="text-sm font-bold">{analysis.responseEffectiveness}%</span>
            </div>
            <Progress value={analysis.responseEffectiveness} className="h-2 mb-2" />
            <p className="text-xs text-muted-foreground">
              Measures how well the assistant addressed user queries
            </p>
          </div>

          {/* Overall Sentiment & Quality */}
          <div>
            <h3 className="text-md font-medium mb-2 flex items-center gap-1">
              <MessageSquare className="h-4 w-4" /> Conversation Metrics
            </h3>
            <div className="flex flex-wrap gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Sentiment</span>
                <span className="font-medium">{analysis.overallSentiment}</span>
              </div>
              <div className="mx-2 border-l"></div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Quality</span>
                <Badge className={getQualityColor(analysis.conversationQuality)}>
                  {analysis.conversationQuality}
                </Badge>
              </div>
            </div>
          </div>

          {/* Key Topics */}
          <div>
            <h3 className="text-md font-medium mb-2">Key Topics</h3>
            <div className="flex flex-wrap gap-2">
              {analysis.keyTopics.map((topic, index) => (
                <Badge key={index} variant="outline">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          {/* Suggested Improvements */}
          <div>
            <h3 className="text-md font-medium mb-2 flex items-center gap-1">
              <AlertTriangle className="h-4 w-4" /> Suggested Improvements
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {analysis.suggestedImprovements.map((suggestion, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>

          {/* Suggested Prompts */}
          <div>
            <h3 className="text-md font-medium mb-2 flex items-center gap-1">
              <MessageSquare className="h-4 w-4" /> Suggested Prompts
            </h3>
            <div className="flex flex-wrap gap-2">
              {analysis.suggestedPrompts?.map((prompt, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1 bg-slate-50">
                  {prompt}
                </Badge>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Prompts that could improve conversation quality and user satisfaction
            </p>
          </div>

          {/* Discourse Markers */}
          <div>
            <h3 className="text-md font-medium mb-2 flex items-center gap-1">
              <MessageSquare className="h-4 w-4" /> Use discourse markers
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {analysis.discourseMarkers?.map((marker, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {marker.text}
                  {marker.messageIds && marker.messageIds.length > 0 && (
                    <span className="ml-1 text-xs">
                      {marker.messageIds.map((id, idx) => (
                        <React.Fragment key={idx}>
                          {idx > 0 && ', '}
                          <button 
                            onClick={() => onMessageReferenceClick?.(id)}
                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-1.5 py-0.5 rounded-md cursor-pointer transition-colors"
                          >
                            Message #{id}
                          </button>
                        </React.Fragment>
                      ))}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-2">
              Words or phrases that organize, manage, and guide the flow of conversation in a natural, human-like way
            </p>
          </div>

          {/* Bot Response Analysis */}
          <div className="mt-4 border-t pt-4">
            <h3 className="text-md font-medium mb-3 flex items-center gap-1">
              <Bot className="h-4 w-4" /> Assistant Response Analysis
            </h3>
            
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">ACP Format:</span>
                {analysis.botResponseAnalysis?.followsAcpFormat ? (
                  <Badge className="bg-green-500">Follows Format</Badge>
                ) : (
                  <Badge className="bg-amber-500">Needs Improvement</Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Acknowledgment, Confirmation, Prompt format adherence
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Strengths</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {analysis.botResponseAnalysis?.strengths.map((strength, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {strength.text}
                      {strength.messageIds && strength.messageIds.length > 0 && (
                        <span className="ml-1 text-xs">
                          {strength.messageIds.map((id, idx) => (
                            <React.Fragment key={idx}>
                              {idx > 0 && ', '}
                              <button 
                                onClick={() => onMessageReferenceClick?.(id)}
                                className="bg-slate-100 hover:bg-slate-200 px-1.5 py-0.5 rounded-md cursor-pointer transition-colors"
                              >
                                Message #{id}
                              </button>
                            </React.Fragment>
                          ))}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Areas for Improvement</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {analysis.botResponseAnalysis?.weaknesses.map((weakness, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {weakness.text}
                      {weakness.messageIds && weakness.messageIds.length > 0 && (
                        <span className="ml-1 text-xs">
                          {weakness.messageIds.map((id, idx) => (
                            <React.Fragment key={idx}>
                              {idx > 0 && ', '}
                              <button 
                                onClick={() => onMessageReferenceClick?.(id)}
                                className="bg-amber-50 text-amber-700 hover:bg-amber-100 px-1.5 py-0.5 rounded-md cursor-pointer transition-colors"
                              >
                                Message #{id}
                              </button>
                            </React.Fragment>
                          ))}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Improvement Tips</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {analysis.botResponseAnalysis?.improvementTips.map((tip, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {tip.text}
                      {tip.messageIds && tip.messageIds.length > 0 && (
                        <span className="ml-1 text-xs">
                          {tip.messageIds.map((id, idx) => (
                            <React.Fragment key={idx}>
                              {idx > 0 && ', '}
                              <button 
                                onClick={() => onMessageReferenceClick?.(id)}
                                className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-1.5 py-0.5 rounded-md cursor-pointer transition-colors"
                              >
                                Message #{id}
                              </button>
                            </React.Fragment>
                          ))}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
