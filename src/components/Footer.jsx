import React from 'react';
import { Link } from 'react-router-dom';
import { CHURCH_CONFIG } from '../config';
import logo from '../{components,pages,assets}/assets/Church Logo.jpg';

export default function Footer() {
  const year = new Date().getFullYear();
  const { social } = CHURCH_CONFIG;

  return (
    <footer className="bg-earth-900 text-cream-200/60 font-body">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Identity */}
        <div>
          <img src={logo} alt={CHURCH_CONFIG.name} className="h-12 w-auto object-contain mb-3" />
          <p className="text-sm leading-relaxed">{CHURCH_CONFIG.tagline}</p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-cream-200/90 uppercase tracking-widest text-xs mb-4 font-semibold">Quick Links</p>
          <ul className="space-y-2">
            {CHURCH_CONFIG.navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm hover:text-gold-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-cream-200/90 uppercase tracking-widest text-xs mb-4 font-semibold">Find Us</p>
          <p className="text-sm mb-1">{CHURCH_CONFIG.address}</p>
          <p className="text-sm mb-1">{CHURCH_CONFIG.phone}</p>
          <p className="text-sm mb-4">{CHURCH_CONFIG.email}</p>

          {/* Social Links */}
          <div className="flex gap-3">
            {social.facebook && (
              <a href={social.facebook} target="_blank" rel="noreferrer"
                className="text-xs border border-cream-200/20 px-3 py-1 rounded hover:border-gold-400 hover:text-gold-400 transition-colors">
                Facebook
              </a>
            )}
            {social.youtube && (
              <a href={social.youtube} target="_blank" rel="noreferrer"
                className="text-xs border border-cream-200/20 px-3 py-1 rounded hover:border-gold-400 hover:text-gold-400 transition-colors">
                YouTube
              </a>
            )}
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noreferrer"
                className="text-xs border border-cream-200/20 px-3 py-1 rounded hover:border-gold-400 hover:text-gold-400 transition-colors">
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-cream-200/10 py-4 text-center text-xs text-cream-200/30">
        © {year} {CHURCH_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  );
}
