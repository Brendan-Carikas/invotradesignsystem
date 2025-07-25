
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import ConversationalIndex from "./pages/ConversationalIndex";
import ComponentDetail from "./pages/ComponentDetail";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";
// Import the AuthProvider from the context file
import { AuthProvider } from "./contexts/AuthContext";
// Import the login component
import IDSLogin from "./pages/invauth/IDSLogin";
import ContentShells from "./pages/layout/ContentShells";
import ApplicationShells from "./pages/layout/ApplicationShells";
import UserProfile from "./pages/layout/shells/UserProfile";
import VerticalShellDemo from "./pages/layout/shells/VerticalShellDemo";
import Dashboard from "./pages/layout/shells/Dashboard";
import Foundation from "./pages/Foundation";
import Iconography from "./pages/Iconography";
import ChatbotIndex from "./pages/chatbot/ChatbotIndex";
import BasicChatbotInterface from "./pages/chatbot/BasicChatbotInterface";
import ChatbotVariants from "./pages/chatbot/ChatbotVariants";
import ChatbotSuggestions from "./pages/chatbot/ChatbotSuggestions";
import ChatbotFeedback from "./pages/chatbot/ChatbotFeedback";
import AIPlaygroundDemo from "./pages/layout/shells/AIPlaygroundDemo";
// Import Conversation Analyser
import ConversationAnalyser from "./pages/conversation/analyser";
// Import Knowledge Base pages
import { ConversationalDesign, Playbooks, Analytics, Reports, AudiencePersonas, BotPersonas } from "./pages/knowledge";
// import Resources from "./pages/knowledge/Resources";
// Flows functionality now integrated into ConversationalDesign
// Import Email Templates page
import EmailTemplates from "./pages/templates/emails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <div className="min-h-screen">
            <Toaster />
            <Sonner />
            <BrowserRouter basename="/">
              <Routes>
              {/* Public route - Login */}
              <Route path="/" element={<IDSLogin />} />
              
              {/* Protected routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<Index />} />
                <Route path="/conversational" element={<ConversationalIndex />} />
                <Route path="/conversations" element={<ChatbotIndex />} />
                <Route path="/components/:componentType" element={<ComponentDetail />} />
                <Route path="/components/foundation" element={<Foundation />} />
                <Route path="/components/iconography" element={<Iconography />} />
                <Route path="/components/layout/shells" element={<ContentShells />} />
                <Route path="/components/application-shells" element={<ApplicationShells />} />
                <Route path="/components/layout/shells/user-profile" element={<UserProfile />} />
                <Route path="/components/layout/shells/dashboard" element={<Dashboard />} />
                <Route path="/components/application-shells/vertical" element={<VerticalShellDemo />} />
                <Route path="/components/application-shells/ai-playground" element={<AIPlaygroundDemo />} />
                <Route path="/components/chatbot" element={<ChatbotIndex />} />
                <Route path="/components/chatbot/basic" element={<BasicChatbotInterface />} />
                <Route path="/components/chatbot/variants" element={<ChatbotVariants />} />
                <Route path="/components/chatbot/suggestions" element={<ChatbotSuggestions />} />
                <Route path="/components/chatbot/feedback" element={<ChatbotFeedback />} />
                
                {/* Knowledge Base Routes */}
                <Route path="/knowledge/conversational-design" element={<ConversationalDesign />} />
                <Route path="/knowledge/playbooks" element={<Playbooks />} />
                {/* <Route path="/knowledge/resources" element={<Resources />} /> */}
                <Route path="/knowledge/analytics" element={<Analytics />} />
                <Route path="/knowledge/reports" element={<Reports />} />
                <Route path="/knowledge/audience-personas" element={<AudiencePersonas />} />
                <Route path="/knowledge/bot-personas" element={<BotPersonas />} />
                
                {/* Conversation Analyser Route */}
                <Route path="/conversation/analyser" element={<ConversationAnalyser />} />
                
                {/* Email Templates Route */}
                <Route path="/templates/emails" element={<EmailTemplates />} />
                
                {/* Flows functionality now integrated into ConversationalDesign */}
              </Route>
              {/* Redirect any unknown routes to login for unauthenticated users */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
