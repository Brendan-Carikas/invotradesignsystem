
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ComponentDetail from "./pages/ComponentDetail";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <div className="min-h-screen">
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/components/:componentType" element={<ComponentDetail />} />
              <Route path="/components/foundation" element={<Foundation />} />
              <Route path="/components/iconography" element={<Iconography />} />
              <Route path="/components/layout/shells" element={<ContentShells />} />
              <Route path="/components/application-shells" element={<ApplicationShells />} />
              <Route path="/components/layout/shells/user-profile" element={<UserProfile />} />
              <Route path="/components/layout/shells/dashboard" element={<Dashboard />} />
              <Route path="/components/application-shells/vertical" element={<VerticalShellDemo />} />
              <Route path="/components/chatbot" element={<ChatbotIndex />} />
              <Route path="/pages/chatbot/basic" element={<BasicChatbotInterface />} />
              <Route path="/pages/chatbot/variants" element={<ChatbotVariants />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
