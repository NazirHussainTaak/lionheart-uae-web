import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguageDetection } from "@/hooks/useLanguageDetection";
import Layout from "./components/layout/Layout";
import LionBot from "@/components/LionBot";
import Preloader from "@/components/Preloader";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Vendors from "./pages/Vendors";

// Solution Pages
import DataCenter from "./pages/solutions/DataCenter";
import Cloud from "./pages/solutions/Cloud";
import DataProtection from "./pages/solutions/DataProtection";
import ConvergedSystems from "./pages/solutions/ConvergedSystems";
import Storage from "./pages/solutions/Storage";
import NetworkingSecurity from "./pages/solutions/NetworkingSecurity";
import Migration from "./pages/solutions/Migration";
import BCDR from "./pages/solutions/BCDR";
import Deployment from "./pages/solutions/Deployment";
import EDRXDRNDR from "./pages/solutions/EDRXDRNDR";

// Technology Pages
// import IdentityManagement from "./pages/technologies/IdentityManagement";
import ThreatIntelligence from "./pages/technologies/ThreatIntelligence";
import SOC from "./pages/technologies/SOC";
import NOC from "./pages/technologies/NOC";
import HybridIT from "./pages/technologies/HybridIT";

// Technology Pages
import IdentityManagement from "./pages/technologies/01-IdentityManagement";
// import ThreatIntelligence from "./pages/technologies/02-ThreatIntelligence";
// import SOC from "./pages/technologies/03-SOC";
// import NOC from "./pages/technologies/04-NOC";
// import HybridIT from "./pages/technologies/05-HybridIT";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { i18n } = useTranslation();
  useLanguageDetection();

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Preloader />
      <LionBot />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="vendors" element={<Vendors />} />
          
          {/* Solution Routes */}
          <Route path="solutions/data-center" element={<DataCenter />} />
          <Route path="solutions/cloud" element={<Cloud />} />
          <Route path="solutions/data-protection" element={<DataProtection />} />
          <Route path="solutions/converged-systems" element={<ConvergedSystems />} />
          <Route path="solutions/storage" element={<Storage />} />
          <Route path="solutions/networking-security" element={<NetworkingSecurity />} />
          <Route path="solutions/migration" element={<Migration />} />
          <Route path="solutions/bcdr" element={<BCDR />} />
          <Route path="solutions/deployment" element={<Deployment />} />
          <Route path="solutions/edr-xdr-ndr" element={<EDRXDRNDR />} />
          
          {/* Technology Routes */}
          <Route path="technologies/identity-management" element={<IdentityManagement />} />
          <Route path="technologies/threat-intelligence" element={<ThreatIntelligence />} />
          <Route path="technologies/soc" element={<SOC />} />
          <Route path="technologies/noc" element={<NOC />} />
          <Route path="technologies/hybrid-it" element={<HybridIT />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppContent />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
