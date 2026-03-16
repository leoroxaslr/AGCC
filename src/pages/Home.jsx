import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CHURCH_CONFIG } from '../config';

function ServiceCard({ service }) {
  return (
    <div className="border border-gold-500/30 bg-earth-800/40 px-6 py-5 rounded text-center backdrop-blur-sm">
      <p className="font-display text-gold-400 text-xl">{service.day}</p>
      <p className="text-cream-100 text-2xl font-light mt-1">{service.time}</p>
      <p className="text-cream-200/60 text-xs uppercase tracking-widest mt-2">{service.label}</p>
    </div>
  );
}

function ProgramAccordion({ title, subtitle, program, bgClass }) {
  const [open, setOpen] = useState(false);
  return (
    <section className={`${bgClass} py-16`}>
      <div className="max-w-2xl mx-auto px-6">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-center group focus:outline-none"
        >
          <p className="text-gold-400/80 uppercase tracking-[0.3em] text-xs mb-3 font-semibold">{subtitle}</p>
          <h2 className="font-display text-3xl text-cream-100 mb-2">{title}</h2>
          <span className="inline-block text-gold-400/60 text-lg transition-transform duration-300" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            &#8964;
          </span>
        </button>
        {open && (
          <div className="mt-6 space-y-0">
            {program.map((item, i) => (
              <div key={i} className="flex items-center gap-6 border-b border-gold-500/10 py-4">
                <span className="text-gold-400 text-xs font-mono w-28 shrink-0">{item.time}</span>
                <span className="text-cream-100 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="font-body">
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #0a1e3d 0%, #122f5d 45%, #1a3d78 100%)',
        }}
      >
        {/* Decorative cross overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <div className="w-1 bg-gold-500/10 h-96 rounded-full" />
          <div className="absolute w-64 h-1 bg-gold-500/10 rounded-full" />
        </div>

        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
            backgroundSize: '256px' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6 animate-fade-in">
          <p className="text-gold-400/80 uppercase tracking-[0.4em] text-xs mb-6 font-body font-semibold">
            Welcome Home
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-cream-50 leading-tight mb-6">
            {CHURCH_CONFIG.name}
          </h1>
          <p className="font-display italic text-gold-300 text-xl md:text-2xl mb-8 opacity-90">
            "{CHURCH_CONFIG.tagline}"
          </p>
          <p className="text-cream-200/70 max-w-xl mx-auto text-base leading-relaxed mb-10">
            {CHURCH_CONFIG.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-gold-500 hover:bg-gold-400 text-earth-900 font-semibold px-8 py-3 rounded-sm tracking-widest uppercase text-xs transition-colors duration-200"
            >
              Our Story
            </Link>
            <Link
              to="/support"
              className="border border-gold-500/60 hover:border-gold-400 text-gold-400 hover:text-gold-300 px-8 py-3 rounded-sm tracking-widest uppercase text-xs transition-colors duration-200"
            >
              Support Us
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="w-px h-8 bg-gold-400/40 block" />
          <span className="text-gold-400/40 text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── SERVICE TIMES ── */}
      <section className="bg-earth-800 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gold-400/80 uppercase tracking-[0.3em] text-xs mb-3 font-semibold">Join Us</p>
          <h2 className="font-display text-3xl text-cream-100 mb-10">Service Schedule</h2>
          <div className="flex flex-wrap justify-center gap-5">
            {CHURCH_CONFIG.services.map((s, i) => (
              <div key={i} className="w-64">
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
          <p className="text-cream-200/50 mt-8 text-sm">{CHURCH_CONFIG.address}</p>
        </div>
      </section>

      {/* ── ORDER OF SERVICE ── */}
      <ProgramAccordion
        subtitle="Sunday Worship Service"
        title="Order of Service"
        program={CHURCH_CONFIG.sundayProgram}
        bgClass="bg-earth-900"
      />

      {/* ── FRIDAY PRAYER MEETING ── */}
      <ProgramAccordion
        subtitle="Friday Prayer Meeting"
        title="Program"
        program={CHURCH_CONFIG.fridayProgram}
        bgClass="bg-earth-800"
      />

      {/* ── WELCOME MESSAGE ── */}
      <section className="bg-cream-50 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-600 uppercase tracking-[0.3em] text-xs mb-3 font-semibold">Our Heart</p>
          <h2 className="font-display text-4xl text-earth-800 mb-8 leading-snug">
            You Are Welcome Here
          </h2>
          <p className="text-earth-700/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you've been following Jesus your whole life or you're just beginning to ask the big questions —
            this is a place where you belong. Come as you are. You'll find a community ready to walk with you.
          </p>
          <Link
            to="/about"
            className="inline-block border-b-2 border-gold-500 text-earth-800 hover:text-gold-600 font-semibold tracking-wide text-sm transition-colors pb-0.5"
          >
            Learn More About Us →
          </Link>
        </div>
      </section>

      {/* ── VALUES STRIP ── */}
      <section className="bg-earth-900 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold-500/10">
            {CHURCH_CONFIG.about.values.map((v, i) => (
              <div key={i} className="bg-earth-900 p-8 text-center">
                <p className="font-display text-gold-400 text-lg mb-2">{v.title}</p>
                <p className="text-cream-200/50 text-xs leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
