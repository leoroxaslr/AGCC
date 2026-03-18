import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CHURCH_CONFIG } from '../config';
import icon from '../{components,pages,assets}/assets/AGCC LOGO ICON.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-earth-800/95 backdrop-blur-sm shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={icon} alt="AGCC Icon" className="h-10 w-10 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-gold-400 text-base font-bold tracking-wide uppercase">
              Assembly of God
            </span>
            <span className="text-cream-100 text-xs font-semibold tracking-widest uppercase">
              Community Church Marikina
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {CHURCH_CONFIG.navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest uppercase font-body transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-gold-400 border-b border-gold-400 pb-0.5'
                  : 'text-cream-100 hover:text-gold-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-cream-100 flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-earth-800/98 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 py-4' : 'max-h-0'
        }`}
      >
        {CHURCH_CONFIG.navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block px-6 py-3 text-sm tracking-widest uppercase transition-colors ${
              location.pathname === link.path ? 'text-gold-400' : 'text-cream-100 hover:text-gold-400'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
