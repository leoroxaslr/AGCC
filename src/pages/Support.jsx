import React, { useState } from 'react';
import { CHURCH_CONFIG } from '../config';

function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 text-sm uppercase tracking-widest font-semibold transition-all duration-200 border-b-2 ${
        active
          ? 'border-gold-500 text-gold-600'
          : 'border-transparent text-earth-700/50 hover:text-earth-700'
      }`}
    >
      {label}
    </button>
  );
}

function GivingSection() {
  const { giving } = CHURCH_CONFIG;
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div>
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <p className="font-display italic text-2xl text-earth-800 leading-relaxed mb-3">
          "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
          for God loves a cheerful giver."
        </p>
        <p className="text-gold-600 text-xs uppercase tracking-widest font-semibold">2 Corinthians 9:7</p>
      </div>

      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl text-earth-800 mb-3">{giving.headline}</h2>
        <p className="text-earth-700/70 max-w-xl mx-auto leading-relaxed">{giving.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {giving.methods.map((method, i) => (
          <div key={i} className="bg-white border border-earth-800/10 rounded-sm p-7 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">{method.icon}</div>
            <p className="font-display text-earth-800 text-lg mb-3">{method.label}</p>
            <p className="text-earth-700/70 text-sm leading-relaxed whitespace-pre-line">{method.detail}</p>
            {method.detail.length < 80 && (
              <button
                onClick={() => handleCopy(method.detail, i)}
                className="mt-4 text-xs text-gold-600 hover:text-gold-500 border border-gold-500/30 hover:border-gold-500 px-3 py-1.5 rounded transition-all"
              >
                {copied === i ? '✓ Copied!' : 'Copy Details'}
              </button>
            )}
          </div>
        ))}
      </div>

      {giving.onlineGivingUrl && (
        <div className="text-center mb-10">
          <a href={giving.onlineGivingUrl} target="_blank" rel="noreferrer"
            className="inline-block bg-gold-500 hover:bg-gold-400 text-earth-900 font-semibold px-10 py-4 rounded-sm tracking-widest uppercase text-sm transition-colors">
            Give Online →
          </a>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6 mb-14">
        <div className="bg-cream-100 border border-gold-500/20 rounded p-7">
          <p className="font-display text-earth-800 text-xl mb-3">Tithes</p>
          <p className="text-earth-700/70 text-sm leading-relaxed">
            A tithe is ten percent of your income given as an act of worship and obedience to God.
            It is the foundation of biblical giving and supports the ongoing work of the local church —
            from pastoral care to ministry programs.
          </p>
        </div>
        <div className="bg-cream-100 border border-gold-500/20 rounded p-7">
          <p className="font-display text-earth-800 text-xl mb-3">Offerings</p>
          <p className="text-earth-700/70 text-sm leading-relaxed">
            Offerings are given above and beyond the tithe as a free-will expression of gratitude and generosity.
            They fund special projects, missions, community outreach, and benevolence for those in need.
          </p>
        </div>
      </div>

      <div className="bg-earth-800 rounded p-10 text-center text-cream-100">
        <p className="font-display text-2xl mb-3">Thank You</p>
        <p className="text-cream-200/70 max-w-md mx-auto text-sm leading-relaxed">
          Every gift is a seed sown into the Kingdom. We are grateful for your partnership in this mission.
        </p>
      </div>
    </div>
  );
}

function VolunteerSection() {
  const { volunteering } = CHURCH_CONFIG;
  const [selected, setSelected] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', ministry: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleMinistryClick = (name) => {
    setSelected(selected === name ? null : name);
    setFormData((f) => ({ ...f, ministry: name }));
  };

  const handleChange = (e) => setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    const { name, email, ministry } = formData;
    if (!name || !email || !ministry) {
      alert('Please fill in your name, email, and ministry interest.');
      return;
    }
    const subject = encodeURIComponent('Volunteer Interest: ' + ministry);
    const body = encodeURIComponent(
      'Name: ' + formData.name + '\nEmail: ' + formData.email + '\nPhone: ' + formData.phone +
      '\nMinistry: ' + formData.ministry + '\n\nMessage:\n' + formData.message
    );
    window.location.href = 'mailto:' + volunteering.contactEmail + '?subject=' + subject + '&body=' + body;
    setSubmitted(true);
  };

  return (
    <div>
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <p className="font-display italic text-2xl text-earth-800 leading-relaxed mb-3">
          "For we are God's handiwork, created in Christ Jesus to do good works,
          which God prepared in advance for us to do."
        </p>
        <p className="text-gold-600 text-xs uppercase tracking-widest font-semibold">Ephesians 2:10</p>
      </div>

      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl text-earth-800 mb-3">{volunteering.headline}</h2>
        <p className="text-earth-700/70 max-w-xl mx-auto leading-relaxed">{volunteering.description}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {volunteering.ministries.map((m) => (
          <button key={m.name} onClick={() => handleMinistryClick(m.name)}
            className={'text-left p-6 rounded border transition-all duration-200 ' + (
              selected === m.name
                ? 'border-gold-500 bg-earth-800 text-cream-100 shadow-lg'
                : 'border-earth-800/10 bg-white hover:border-gold-400/50 hover:shadow-md'
            )}>
            <div className="text-3xl mb-3">{m.icon}</div>
            <p className={'font-display text-lg mb-2 ' + (selected === m.name ? 'text-gold-400' : 'text-earth-800')}>
              {m.name}
            </p>
            <p className={'text-sm leading-relaxed mb-3 ' + (selected === m.name ? 'text-cream-200/70' : 'text-earth-700/60')}>
              {m.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {m.roles.map((r) => (
                <span key={r} className={'text-xs px-2 py-0.5 rounded-full border ' + (
                  selected === m.name ? 'border-gold-500/40 text-gold-400' : 'border-earth-800/15 text-earth-700/50'
                )}>
                  {r}
                </span>
              ))}
            </div>
            {selected === m.name && (
              <p className="text-gold-400 text-xs mt-4 font-semibold tracking-widest uppercase">
                ✓ Selected — Fill the form below
              </p>
            )}
          </button>
        ))}
      </div>

      {!submitted ? (
        <div className="bg-cream-100 border border-gold-500/20 rounded p-8 max-w-2xl mx-auto">
          <h3 className="font-display text-2xl text-earth-800 mb-2">Express Your Interest</h3>
          <p className="text-earth-700/60 text-sm mb-6">Select a ministry above then fill in your details. We'll reach out to you soon.</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-earth-700/60 mb-1">Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange}
                className="w-full border border-earth-800/15 rounded bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="Your name" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-earth-700/60 mb-1">Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full border border-earth-800/15 rounded bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="your@email.com" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-earth-700/60 mb-1">Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                className="w-full border border-earth-800/15 rounded bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="0912 345 6789" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-earth-700/60 mb-1">Ministry Interest *</label>
              <select name="ministry" value={formData.ministry} onChange={handleChange}
                className="w-full border border-earth-800/15 rounded bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 transition-colors">
                <option value="">Select a ministry</option>
                {volunteering.ministries.map((m) => (
                  <option key={m.name} value={m.name}>{m.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs uppercase tracking-widest text-earth-700/60 mb-1">Message (optional)</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={3}
              className="w-full border border-earth-800/15 rounded bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 transition-colors resize-none"
              placeholder="Tell us about yourself or your availability..." />
          </div>

          <button onClick={handleSubmit}
            className="w-full bg-gold-500 hover:bg-gold-400 text-earth-900 font-semibold py-3 rounded-sm tracking-widest uppercase text-sm transition-colors">
            Send My Interest →
          </button>
          <p className="text-earth-700/40 text-xs mt-3 text-center">
            This will open your email app to send to {volunteering.contactEmail}
          </p>
        </div>
      ) : (
        <div className="bg-earth-800 text-cream-100 rounded p-10 text-center max-w-xl mx-auto">
          <p className="text-4xl mb-4">🙏</p>
          <p className="font-display text-2xl mb-2">Thank You!</p>
          <p className="text-cream-200/70 text-sm leading-relaxed">
            We've received your interest. A member of our team will be in touch soon.
            We're excited to serve alongside you!
          </p>
        </div>
      )}
    </div>
  );
}

export default function Support() {
  const [activeTab, setActiveTab] = useState('giving');

  return (
    <div className="font-body">
      <div className="pt-32 pb-16 text-center"
        style={{ background: 'linear-gradient(160deg, #1e1008 0%, #4f5d38 100%)' }}>
        <p className="text-gold-400/70 uppercase tracking-[0.4em] text-xs mb-3 font-semibold">Get Involved</p>
        <h1 className="font-display text-5xl text-cream-50 mb-4">Support Us</h1>
        <p className="text-cream-200/60 max-w-md mx-auto text-sm">
          Give generously. Serve faithfully. Build the Kingdom together.
        </p>
      </div>

      <div className="sticky top-[60px] z-40 bg-cream-50 border-b border-earth-800/10 flex justify-center gap-2">
        <Tab label="🤲 Tithes & Offerings" active={activeTab === 'giving'} onClick={() => setActiveTab('giving')} />
        <Tab label="🙌 Volunteer" active={activeTab === 'volunteer'} onClick={() => setActiveTab('volunteer')} />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {activeTab === 'giving' ? <GivingSection /> : <VolunteerSection />}
      </div>
    </div>
  );
}
