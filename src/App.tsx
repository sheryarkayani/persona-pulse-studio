import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Onboarding from "./pages/auth/Onboarding";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/dashboard";
import CreatePost from "./pages/CreatePost";
import ContentCreation from "./pages/ContentCreation";
import LeadMagnetAI from "./pages/LeadMagnetAI";
import PostLibrary from "./pages/PostLibrary";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Insights from "./pages/Insights";
import Integrations from "./pages/Integrations";
import Workflow from "./pages/Workflow";
import Templates from "./pages/Templates";
import Community from "./pages/Community";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding" element={<Onboarding />} />
          
          {/* Protected routes with main layout */}
          <Route path="/app" element={<MainLayout />}>
            <Route index element={<CreatePost />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create-post" element={<CreatePost />} />
            <Route path="content-creation" element={<ContentCreation />} />
            <Route path="lead-magnet" element={<LeadMagnetAI />} />
            <Route path="lead-magnet-ai" element={<LeadMagnetAI />} />
            <Route path="library" element={<PostLibrary />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="settings" element={<Settings />} />
            <Route path="support" element={<Support />} />
            <Route path="insights" element={<Insights />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="workflows" element={<Workflow />} />
            <Route path="workflow" element={<Workflow />} />
            <Route path="templates" element={<Templates />} />
            <Route path="community" element={<Community />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
