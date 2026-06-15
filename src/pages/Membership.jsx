import React from 'react';
import { CHURCH_CONFIG } from '../config';
import MembershipForm from '../components/MembershipForm';

export default function Membership() {
  const siteUrl = CHURCH_CONFIG.membership?.siteUrl || 'https://agccph.org';
  const formUrl = `${siteUrl}/#/membership`;

  return (
    <div className="font-body">

      {/* ── Page Header ── */}
      <div
        className="pt-32 pb-20 text-center"
        style={{ background: 'linear-gradient(160deg, #0a1e3d 0%, #122f5d 100%)' }}
      >
        <p className="text-gold-400/70 uppercase tracking-[0.4em] text-xs mb-3 font-semibold">
          Join Our Community
        </p>
        <h1 className="font-display text-5xl text-cream-50 mb-4">Membership Form</h1>
        <p className="text-cream-200/60 max-w-md mx-auto text-sm">
          We'd love to welcome you as an official member of {CHURCH_CONFIG.name}.
          Fill out the form below to get started.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* ── Form ── */}
        <div className="md:col-span-2">
          <MembershipForm />
        </div>

        {/* ── Sidebar: QR Code & Info ── */}
        <div className="space-y-8">
          <div className="bg-earth-800 rounded-2xl p-6 text-center">
            <p className="text-gold-400 text-xs uppercase tracking-widest font-semibold mb-4">
              Scan to Open Form
            </p>
            <div className="bg-white rounded-xl p-3 inline-block">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(formUrl)}`}
                alt="QR Code for Membership Form"
                className="w-44 h-44"
              />
            </div>
            <p className="text-cream-200/50 text-xs mt-4 break-all">{formUrl}</p>
          </div>

          <div className="bg-cream-100 rounded p-6 space-y-3 border border-earth-800/10">
            <h3 className="font-display text-lg text-earth-800">Questions?</h3>
            <p className="text-earth-600 text-sm leading-relaxed">
              Reach out to us anytime and we'll be glad to help you through the process.
            </p>
            <p className="text-sm text-earth-700">
              <span className="font-semibold">Email:</span>{' '}
              <a href={`mailto:${CHURCH_CONFIG.email}`} className="text-gold-600 hover:underline">
                {CHURCH_CONFIG.email}
              </a>
            </p>
            <p className="text-sm text-earth-700">
              <span className="font-semibold">Address:</span> {CHURCH_CONFIG.address}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
