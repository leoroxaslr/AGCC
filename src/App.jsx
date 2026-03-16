import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home    from './pages/Home';
import About   from './pages/About';
import Support from './pages/Support';

// ── ADD NEW PAGES HERE ──────────────────────────────────────
// import Sermons from './pages/Sermons';
// import Events  from './pages/Events';
// ────────────────────────────────────────────────────────────

function ScrollToTop() {
  // Scroll to top on route change
  const { pathname } = window.location;
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/about"   element={<About />} />
          <Route path="/support" element={<Support />} />

          {/* ── ADD NEW ROUTES HERE ─────────────────────── */}
          {/* <Route path="/sermons" element={<Sermons />} /> */}
          {/* <Route path="/events"  element={<Events />} />  */}
          {/* ─────────────────────────────────────────────── */}

          {/* 404 fallback */}
          <Route path="*" element={
            <div className="min-h-screen flex flex-col items-center justify-center font-body text-center px-6">
              <p className="font-display text-6xl text-gold-500 mb-4">404</p>
              <p className="text-earth-700 text-xl mb-6">Page not found</p>
              <a href="/" className="text-gold-600 hover:text-gold-500 border-b border-gold-500 pb-0.5 text-sm">
                ← Back to Home
              </a>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
