import { Link } from 'react-router-dom';
import { CHURCH_CONFIG } from '../config';

// Rising particles — like prayers/incense ascending
const PARTICLES = [
  { left: '8%',  top: '85%', size: 2, dur: 9,  delay: 0   },
  { left: '15%', top: '75%', size: 3, dur: 12, delay: 1.5 },
  { left: '23%', top: '90%', size: 2, dur: 10, delay: 3   },
  { left: '32%', top: '80%', size: 2, dur: 14, delay: 0.8 },
  { left: '40%', top: '88%', size: 3, dur: 11, delay: 4   },
  { left: '48%', top: '78%', size: 2, dur: 13, delay: 2   },
  { left: '56%', top: '92%', size: 3, dur: 9,  delay: 5   },
  { left: '63%', top: '82%', size: 2, dur: 15, delay: 1   },
  { left: '71%', top: '86%', size: 2, dur: 10, delay: 3.5 },
  { left: '79%', top: '72%', size: 3, dur: 12, delay: 2.5 },
  { left: '87%', top: '94%', size: 2, dur: 11, delay: 0.3 },
  { left: '12%', top: '60%', size: 2, dur: 14, delay: 6   },
  { left: '52%', top: '65%', size: 2, dur: 10, delay: 4.5 },
  { left: '73%', top: '58%', size: 3, dur: 13, delay: 1.8 },
  { left: '28%', top: '68%', size: 2, dur: 11, delay: 7   },
];

// Twinkling stars in the upper sky
const STARS = [
  { left: '5%', top: '8%', size: 1.5, delay: 0 },
  { left: '14%', top: '18%', size: 1, delay: 1.2 },
  { left: '24%', top: '6%', size: 1.5, delay: 2.5 },
  { left: '38%', top: '14%', size: 1, delay: 0.7 },
  { left: '50%', top: '4%', size: 1.5, delay: 3.1 },
  { left: '62%', top: '16%', size: 1, delay: 1.8 },
  { left: '74%', top: '9%', size: 1.5, delay: 0.3 },
  { left: '84%', top: '20%', size: 1, delay: 2.2 },
  { left: '93%', top: '11%', size: 1.5, delay: 1.5 },
  { left: '44%', top: '22%', size: 1, delay: 4.0 },
  { left: '19%', top: '30%', size: 1, delay: 0.9 },
  { left: '68%', top: '27%', size: 1.5, delay: 3.5 },
];

function ServiceCard({ service }) {
  return (
    <div className="border border-gold-500/30 bg-earth-800/40 px-6 py-5 rounded text-center backdrop-blur-sm">
      <p className="font-display text-gold-400 text-xl">{service.day}</p>
      <p className="text-cream-100 text-2xl font-light mt-1">{service.time}</p>
      <p className="text-cream-200/60 text-xs uppercase tracking-widest mt-2">{service.label}</p>
    </div>
  );
}


export default function Home() {
  return (
    <div className="font-body">
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #060e1e 0%, #0c2048 50%, #162d66 100%)',
        }}
      >
        {/* ── All decorative layers fade in together ── */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{ animation: 'fadeIn 3s ease forwards', opacity: 0 }}
        >
          {/* Twinkling Stars */}
          <div className="absolute inset-0">
            {STARS.map((s, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: s.left,
                  top: s.top,
                  width: `${s.size}px`,
                  height: `${s.size}px`,
                  background: 'rgba(255,255,240,0.9)',
                  boxShadow: '0 0 3px 1px rgba(255,255,220,0.5)',
                  animation: `star-twinkle ${3 + s.delay}s ease-in-out ${s.delay}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Rising Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {PARTICLES.map((p, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: p.left,
                  top: p.top,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  background: 'rgba(213,183,143,0.95)',
                  boxShadow: '0 0 8px 3px rgba(213,183,143,0.6)',
                  animation: `float-up ${p.dur}s cubic-bezier(0.4,0,0.6,1) ${p.delay}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Glowing Cross */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              style={{
                width: '1px',
                height: '70vh',
                background: 'linear-gradient(to bottom, transparent 0%, rgba(213,183,143,0.35) 30%, rgba(213,183,143,0.35) 70%, transparent 100%)',
                boxShadow: '0 0 8px 3px rgba(213,183,143,0.15)',
                animation: 'cross-glow 7s ease-in-out infinite',
                animationFillMode: 'backwards',
              }}
            />
            <div
              className="absolute"
              style={{
                width: '38vw',
                maxWidth: '480px',
                height: '1px',
                background: 'linear-gradient(to right, transparent 0%, rgba(213,183,143,0.35) 25%, rgba(213,183,143,0.35) 75%, transparent 100%)',
                boxShadow: '0 0 8px 3px rgba(213,183,143,0.15)',
                animation: 'cross-glow 7s ease-in-out infinite',
                animationFillMode: 'backwards',
                marginTop: '-18vh',
              }}
            />
          </div>
        </div>

        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
            backgroundSize: '256px'
          }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-20 animate-fade-in">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        <div className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 animate-bounce">
          <span className="w-px h-8 bg-gold-400/40 block" />
          <span className="text-gold-400/40 text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── SERVICE TIMES ── */}
      <section className="bg-earth-800 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gold-400/80 uppercase tracking-[0.3em] text-xs mb-3 font-semibold">Join Us</p>
          <h2 className="font-display text-3xl text-cream-100 mb-10">Service Schedule</h2>
          <div className="flex flex-wrap justify-center gap-5 mx-auto">
            {CHURCH_CONFIG.services.map((s, i) => (
              <div key={i} className="w-64">
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
          <p className="text-cream-200/50 mt-8 text-sm">{CHURCH_CONFIG.address}</p>
        </div>
      </section>

      {/* ── WELCOME MESSAGE ── */}
      <section className="bg-cream-50 py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-gold-600 uppercase tracking-[0.3em] text-xs mb-3 font-semibold">Our Heart</p>
          <h2 className="font-display text-4xl text-earth-800 mb-8 leading-snug">
            You Are Welcome Here
          </h2>
          <p className="text-earth-700/80 text-lg leading-relaxed mb-10">
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
