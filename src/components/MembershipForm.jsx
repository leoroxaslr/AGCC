import React, { useState } from 'react';
import { CHURCH_CONFIG } from '../config';

const INITIAL = {
  firstName: '',
  middleName: '',
  lastName: '',
  birthday: '',
  age: '',
  gender: '',
  civilStatus: '',
  address: '',
  mobile: '',
  email: '',
  baptized: '',
  attendingDuration: '',
  heardFrom: '',
  ministryInterest: '',
};

function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs uppercase tracking-widest text-earth-700/60 font-semibold">
        {label}{required && <span className="text-gold-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  'w-full border border-earth-800/15 rounded bg-white px-4 py-2.5 text-sm text-earth-800 focus:outline-none focus:border-gold-500 transition-colors';

export default function MembershipForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const scriptUrl = CHURCH_CONFIG.membership?.googleScriptUrl || '';

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!scriptUrl) {
      setStatus('error');
      setErrorMsg('Form submission is not configured yet. Please contact the church office.');
      return;
    }
    setStatus('submitting');
    try {
      const params = new URLSearchParams({ ...form, submittedAt: new Date().toISOString() });
      await fetch(scriptUrl, { method: 'POST', body: params });
      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or contact the church office.');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-20 px-6 bg-cream-100 rounded border border-earth-800/10">
        <div className="text-5xl mb-4">🙌</div>
        <h2 className="font-display text-3xl text-earth-800 mb-3">Thank You!</h2>
        <p className="text-earth-700/70 text-sm max-w-sm mx-auto leading-relaxed">
          Your membership form has been submitted. A church representative will
          be in touch with you soon. God bless you!
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 px-6 py-2.5 bg-gold-500 hover:bg-gold-400 text-cream-50 text-sm font-semibold rounded-sm tracking-widest uppercase transition"
        >
          Submit Another Response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Personal Info */}
      <div>
        <h3 className="font-display text-xl text-earth-800 mb-4 pb-2 border-b border-earth-800/10">
          Personal Information
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <Field label="First Name" required>
            <input name="firstName" value={form.firstName} onChange={handleChange}
              required className={inputClass} placeholder="Juan" />
          </Field>
          <Field label="Middle Name">
            <input name="middleName" value={form.middleName} onChange={handleChange}
              className={inputClass} placeholder="Santos" />
          </Field>
          <Field label="Last Name" required>
            <input name="lastName" value={form.lastName} onChange={handleChange}
              required className={inputClass} placeholder="dela Cruz" />
          </Field>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="Birthday" required>
          <input type="date" name="birthday" value={form.birthday} onChange={handleChange}
            required className={inputClass} />
        </Field>
        <Field label="Age" required>
          <input type="number" name="age" value={form.age} onChange={handleChange}
            required min="1" max="120" className={inputClass} placeholder="25" />
        </Field>
        <Field label="Gender" required>
          <select name="gender" value={form.gender} onChange={handleChange}
            required className={inputClass}>
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Civil Status" required>
          <select name="civilStatus" value={form.civilStatus} onChange={handleChange}
            required className={inputClass}>
            <option value="">Select</option>
            <option>Single</option>
            <option>Married</option>
            <option>Widowed</option>
            <option>Separated</option>
          </select>
        </Field>
        <Field label="Mobile Number" required>
          <input type="tel" name="mobile" value={form.mobile} onChange={handleChange}
            required className={inputClass} placeholder="+63 912 345 6789" />
        </Field>
      </div>

      <Field label="Email Address">
        <input type="email" name="email" value={form.email} onChange={handleChange}
          className={inputClass} placeholder="juan@email.com" />
      </Field>

      <Field label="Home Address" required>
        <textarea name="address" value={form.address} onChange={handleChange}
          required rows={2} className={inputClass + ' resize-none'}
          placeholder="House No., Street, Barangay, City" />
      </Field>

      {/* Faith Background */}
      <div>
        <h3 className="font-display text-xl text-earth-800 mb-4 pb-2 border-b border-earth-800/10">
          Faith Background
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Have you been water baptized?">
            <select name="baptized" value={form.baptized} onChange={handleChange}
              className={inputClass}>
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
              <option>I'd like to be</option>
            </select>
          </Field>
          <Field label="How long have you been attending?">
            <select name="attendingDuration" value={form.attendingDuration} onChange={handleChange}
              className={inputClass}>
              <option value="">Select</option>
              <option>Less than 1 month</option>
              <option>1–3 months</option>
              <option>3–6 months</option>
              <option>6 months – 1 year</option>
              <option>More than 1 year</option>
            </select>
          </Field>
          <Field label="How did you hear about us?">
            <select name="heardFrom" value={form.heardFrom} onChange={handleChange}
              className={inputClass}>
              <option value="">Select</option>
              <option>Friend or Family</option>
              <option>Facebook</option>
              <option>Walked in</option>
              <option>Church event</option>
              <option>Other</option>
            </select>
          </Field>
        </div>
      </div>

      <Field label="Ministry you're interested to serve in">
        <select name="ministryInterest" value={form.ministryInterest} onChange={handleChange}
          className={inputClass}>
          <option value="">Select (optional)</option>
          {CHURCH_CONFIG.volunteering.ministries.map((m) => (
            <option key={m.name}>{m.name}</option>
          ))}
        </select>
      </Field>

      {status === 'error' && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3 bg-gold-500 hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed
          text-cream-50 font-semibold text-sm rounded-sm tracking-widest uppercase transition-colors"
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Membership Form →'}
      </button>
    </form>
  );
}
