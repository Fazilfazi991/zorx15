import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WebDevelopment from "./pages/WebDevelopment";
import SEO from "./pages/services/SEO";
import SocialMedia from "./pages/services/SocialMedia";
import GoogleAds from "./pages/services/GoogleAds";
import PerformanceMarketing from "./pages/services/PerformanceMarketing";
import VideoProduction from "./pages/services/VideoProduction";
import AIAutomation from "./pages/services/AIAutomation";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/google-ads" element={<GoogleAds />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/services/video-production" element={<VideoProduction />} />
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
