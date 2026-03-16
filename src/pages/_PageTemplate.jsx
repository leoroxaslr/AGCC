// ============================================================
//  NEW PAGE TEMPLATE
//  Copy this file to src/pages/YourPageName.jsx and edit.
//  Then add a route in App.jsx and a nav link in config.js
// ============================================================

import React from 'react';
import { CHURCH_CONFIG } from '../config';

export default function NewPage() {
  return (
    <div className="font-body">

      {/* ── Page Header ── */}
      <div
        className="pt-32 pb-20 text-center"
        style={{ background: 'linear-gradient(160deg, #1e1008 0%, #3e2414 100%)' }}
      >
        <p className="text-gold-400/70 uppercase tracking-[0.4em] text-xs mb-3 font-semibold">
          Section Label
        </p>
        <h1 className="font-display text-5xl text-cream-50 mb-4">Page Title</h1>
        <p className="text-cream-200/60 max-w-md mx-auto text-sm">
          A short description of this page.
        </p>
      </div>

      {/* ── Page Content ── */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-earth-700/80 text-lg leading-relaxed">
          Add your content here. Use Tailwind classes for styling.
        </p>
      </div>

    </div>
  );
}
