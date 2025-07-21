import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VoiceAIWidget } from "@/components/VoiceAIWidget";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/dashboard";
import Pricing from "./pages/Pricing";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Onboarding from "./pages/auth/Onboarding";
import Integrations from "./pages/Integrations";
import Community from "./pages/Community";
import Workflow from "./pages/Workflow";
import Insights from "./pages/Insights";
import TemplatesPage from "./pages/Templates";
import ContentCreationPage from "./pages/ContentCreation";
import FollowerChat from "./pages/FollowerChat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/community" element={<Community />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/content-creation" element={<ContentCreationPage />} />
          <Route path="/follower-chat" element={<FollowerChat />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Global Voice AI Widget - appears on all pages */}
        <VoiceAIWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
