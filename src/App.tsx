import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import CorporateServicesPage from './pages/CorporateServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PageTransition from './components/common/PageTransition';
import { SkipToMainContent } from './components/common/Accessibility';

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      <SkipToMainContent />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/properties" element={<PageTransition><PropertiesPage /></PageTransition>} />
            <Route path="/property/:id" element={<PageTransition><PropertyDetailPage /></PageTransition>} />
            <Route path="/corporate-services" element={<PageTransition><CorporateServicesPage /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;