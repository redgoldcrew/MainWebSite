import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import AayiramPage from './pages/AayiramPage';
import HomePage from './pages/HomePage';
import IndruHomePage from './pages/IndruHomePage';
import UllaPage from './pages/UllaPage';
import ProductLegalPage from './pages/ProductLegalPage';
import AayiramPrivacyPage from './pages/AayiramPrivacyPage';
import UllaDeletionPage from './pages/UllaDeletionPage';
import ParticleBackground from './components/ParticleBackground';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const { pathname } = useLocation();
  const isStandaloneProductRoute = pathname.startsWith('/indru') || pathname.startsWith('/ulla');
  const [loading, setLoading] = useState(!isStandaloneProductRoute);

  useEffect(() => {
    setLoading(!isStandaloneProductRoute);
  }, [isStandaloneProductRoute]);

  useEffect(() => {
    if (!isStandaloneProductRoute) {
      const timer = window.setTimeout(() => setLoading(false), 1800);
      return () => window.clearTimeout(timer);
    }
  }, [isStandaloneProductRoute]);

  return (
    <>
      {!isStandaloneProductRoute && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div className={`relative min-h-screen transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <CustomCursor />

        <div className="fixed inset-0 pointer-events-none z-[0] bg-navy-darkest">
          <div className="absolute inset-x-0 -top-[300px] h-[600px] bg-red-primary/10 rounded-[100%] blur-[120px] mix-blend-screen opacity-50" />
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gold-primary/10 rounded-full blur-[100px] mix-blend-screen opacity-30" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-red-primary/10 rounded-full blur-[100px] mix-blend-screen opacity-40" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSJub25lIi8+CgkJPHBhdGggZD0iTTAgMGg0MHYxSDBWMHptMCAzOWg0MHYxSDBWMzl6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+CgkJPHBhdGggZD0iTTAgMmgxdjM4SDBWMnptMzkgMGgxdjM4aC0xVjJ6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-30 mix-blend-overlay" />
          <ParticleBackground />
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-80" />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aayiram" element={<AayiramPage />} />
          <Route path="/aayiram/privacy" element={<AayiramPrivacyPage />} />
          <Route path="/aayiram/:document" element={<ProductLegalPage product="aayiram" />} />
          <Route path="/ulla" element={<UllaPage />} />
          <Route path="/ulla/:document" element={<ProductLegalPage product="ulla" />} />
          <Route path="/ulla/account-deletion" element={<UllaDeletionPage />} />
          <Route path="/indru" element={<IndruHomePage />} />
          <Route path="/indru/:document" element={<ProductLegalPage product="indru" />} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
