import React from 'react';
import { CHURCH_CONFIG } from '../config';

function Section({ label, title, children }) {
  return (
    <div className="mb-16">
      <p className="text-gold-600 uppercase tracking-[0.3em] text-xs mb-2 font-semibold">{label}</p>
      <h2 className="font-display text-3xl text-earth-800 mb-6">{title}</h2>
      {children}
    </div>
  );
}

export default function About() {
  const { about } = CHURCH_CONFIG;

  return (
    <div className="font-body">
      {/* Page Header */}
      <div
        className="pt-32 pb-20 text-center"
        style={{ background: 'linear-gradient(160deg, #0a1e3d 0%, #122f5d 100%)' }}
      >
        <p className="text-gold-400/70 uppercase tracking-[0.4em] text-xs mb-3 font-semibold">Who We Are</p>
        <h1 className="font-display text-5xl text-cream-50 mb-6">About Us</h1>
        <p className="text-cream-100 max-w-2xl mx-auto text-base leading-relaxed">
          Welcome to our community! We are a church rooted in the truth of Scripture, honoring God the Father
          and the divinity of Jesus Christ. We believe that through the power of the Holy Spirit, every life
          can be beautifully transformed.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* Our Story */}
        <Section label="Our History" title="Our Story">
          <p className="text-earth-700/80 text-lg leading-relaxed">{about.story}</p>
        </Section>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-earth-800 rounded p-8 text-cream-100">
            <p className="text-gold-400 uppercase tracking-widest text-xs mb-3 font-semibold">Vision</p>
            <p className="font-display italic text-xl leading-relaxed">{about.vision}</p>
          </div>
          <div className="bg-cream-100 rounded p-8 border border-gold-500/20">
            <p className="text-gold-600 uppercase tracking-widest text-xs mb-3 font-semibold">Mission</p>
            <p className="font-display italic text-xl leading-relaxed text-earth-800">{about.mission}</p>
          </div>
        </div>

        {/* Values */}
        <Section label="What We Believe" title="Our Core Values">
          <div className="grid sm:grid-cols-2 gap-5">
            {about.values.map((v, i) => (
              <div key={i} className="border-l-4 border-gold-500 pl-5 py-2">
                <p className="font-display text-earth-800 text-lg mb-1">{v.title}</p>
                <p className="text-earth-700/70 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Service Times */}
        <Section label="Come & Worship" title="Service Schedule">
          <div className="divide-y divide-earth-800/10">
            {CHURCH_CONFIG.services.map((s, i) => (
              <div key={i} className="flex justify-between items-center py-4">
                <div>
                  <p className="font-display text-earth-800 text-lg">{s.label}</p>
                  <p className="text-earth-700/60 text-sm">{s.day}</p>
                </div>
                <p className="text-gold-600 font-semibold text-lg">{s.time}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-earth-700/60 text-sm">{CHURCH_CONFIG.address}</p>
        </Section>
      </div>
    </div>
  );
}
