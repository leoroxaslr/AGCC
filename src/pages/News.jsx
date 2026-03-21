import { useEffect } from 'react';
import { CHURCH_CONFIG } from '../config';

export default function News() {
  const { facebookPageId, facebookPageUrl } = CHURCH_CONFIG.social;

  // Load the Facebook SDK once
  useEffect(() => {
    if (!facebookPageId) return;

    // If SDK already loaded, just re-parse
    if (window.FB) {
      window.FB.XFBML.parse();
      return;
    }

    // Inject the SDK script
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
        <h1 className="font-display text-5xl text-cream-50 mb-6">News & Updates</h1>
        <p className="text-cream-100 max-w-2xl mx-auto text-base leading-relaxed">
          Follow along with what God is doing in our community. Latest announcements,
          events, and updates from AGCC Marikina.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">

        {facebookPageId ? (
          <>
            <div className="mb-10">
              <p className="text-gold-600 uppercase tracking-[0.3em] text-xs mb-2 font-semibold">Latest From Us</p>
              <h2 className="font-display text-3xl text-earth-800 mb-4">Facebook Feed</h2>
              <p className="text-earth-700/70 text-sm">
                See our latest posts, announcements, and updates directly from our Facebook page.
              </p>
            </div>

            {/* Facebook Page Plugin */}
            <div className="flex justify-center mb-16">
              <div id="fb-root"></div>
              <div
                className="fb-page"
                data-href={facebookPageUrl}
                data-tabs="timeline"
                data-width="500"
                data-height="700"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              ></div>
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
