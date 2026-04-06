import { useEffect, useRef } from 'react';
import { CHURCH_CONFIG } from '../config';

export default function News() {
  const { facebookPageId, facebookPageUrl } = CHURCH_CONFIG.social;
  const containerRef = useRef(null);

  // Load the Facebook SDK and render at correct width
  useEffect(() => {
    if (!facebookPageId) return;

    const fbDiv = containerRef.current?.querySelector('.fb-page');
    if (fbDiv && containerRef.current) {
      const w = Math.min(containerRef.current.offsetWidth, 500);
      fbDiv.setAttribute('data-width', String(w));
    }

    if (window.FB) {
      window.FB.XFBML.parse();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    window.fbAsyncInit = () => {
      window.FB.init({ xfbml: true, version: 'v19.0' });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [facebookPageId]);

  return (
    <div className="font-body">
      {/* Page Header */}
      <div
        className="pt-32 pb-20 text-center"
        style={{ background: 'linear-gradient(160deg, #0a1e3d 0%, #122f5d 100%)' }}
      >
        <p className="text-gold-400/70 uppercase tracking-[0.4em] text-xs mb-3 font-semibold">Stay Connected</p>
        <h1 className="font-display text-4xl md:text-5xl text-cream-50 mb-6">News & Updates</h1>
        <p className="text-cream-100 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-4">
          Follow along with what God is doing in our community. Latest announcements,
          events, and updates from AGCC Marikina.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        {facebookPageId ? (
          <>
            <div className="mb-10">
              <p className="text-gold-600 uppercase tracking-[0.3em] text-xs mb-2 font-semibold">Latest From Us</p>
              <h2 className="font-display text-3xl text-earth-800 mb-4">Facebook Feed</h2>
              <p className="text-earth-700/70 text-sm">
                See our latest posts, announcements, and updates directly from our Facebook page.
              </p>
            </div>

            {/* Facebook Page Plugin — centered card on desktop */}
            <div id="fb-root"></div>
            <div className="flex flex-col lg:flex-row gap-10 mb-16 items-start">
              {/* Feed */}
              <div ref={containerRef} className="w-full lg:w-auto lg:flex-shrink-0 overflow-hidden">
                <div
                  className="fb-page"
                  data-href={facebookPageUrl}
                  data-tabs="timeline"
                  data-height="900"
                  data-width="500"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                ></div>
              </div>

              {/* Sidebar — visible on desktop */}
              <div className="hidden lg:flex flex-col gap-6 flex-1">
                <div className="bg-earth-800 rounded p-8">
                  <p className="text-gold-400 uppercase tracking-widest text-xs mb-3 font-semibold">Service Schedule</p>
                  {CHURCH_CONFIG.services.map((s, i) => (
                    <div key={i} className="border-b border-gold-500/10 py-3 last:border-0">
                      <p className="text-cream-50 font-display text-lg">{s.label}</p>
                      <p className="text-cream-200/60 text-sm">{s.day} · {s.time}</p>
                    </div>
                  ))}
                  <p className="text-cream-200/40 text-xs mt-4">{CHURCH_CONFIG.address}</p>
                </div>

                <div className="bg-cream-100 border border-gold-500/20 rounded p-8">
                  <p className="text-gold-600 uppercase tracking-widest text-xs mb-3 font-semibold">Follow Us</p>
                  <p className="text-earth-700/70 text-sm leading-relaxed mb-4">
                    Stay connected with AGCC Marikina for announcements, events, and encouragement.
                  </p>
                  <a
                    href={CHURCH_CONFIG.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-gold-500 hover:bg-gold-400 text-earth-900 font-semibold px-6 py-2.5 rounded-sm tracking-widest uppercase text-xs transition-colors"
                  >
                    Follow on Facebook →
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20 border border-dashed border-earth-800/20 rounded">
            <p className="text-gold-600 uppercase tracking-widest text-xs mb-3 font-semibold">Coming Soon</p>
            <p className="font-display text-2xl text-earth-800 mb-3">Facebook Feed</p>
            <p className="text-earth-700/60 text-sm max-w-md mx-auto leading-relaxed">
              To enable the live Facebook feed, add your <code className="bg-cream-100 px-1 rounded text-xs">facebookPageId</code> and{' '}
              <code className="bg-cream-100 px-1 rounded text-xs">facebookPageUrl</code> to{' '}
              <code className="bg-cream-100 px-1 rounded text-xs">src/config.js</code>.
            </p>
          </div>
        )}

        {/* Follow CTA */}
        {CHURCH_CONFIG.social.facebook && (
          <div className="bg-earth-800 rounded p-8 text-center">
            <p className="text-gold-400 uppercase tracking-widest text-xs mb-3 font-semibold">Follow Us</p>
            <p className="font-display text-cream-50 text-xl mb-5">
              Stay up to date with everything happening at AGCC Marikina.
            </p>
            <a
              href={CHURCH_CONFIG.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gold-500 hover:bg-gold-400 text-earth-900 font-semibold px-8 py-3 rounded-sm tracking-widest uppercase text-sm transition-colors"
            >
              Follow on Facebook →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
