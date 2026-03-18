import React, { useState } from 'react';

const TRUTHS = [
  {
    number: 1,
    title: "The Scriptures Inspired",
    summary: "The Scriptures, both the Old and New Testaments, are verbally inspired of God and are the revelation of God to man, the infallible, authoritative rule of faith and conduct.",
    scripture: "2 Tim. 3:15–17; 1 Thess. 2:13; 2 Pet. 1:21",
  },
  {
    number: 2,
    title: "The One True God",
    summary: "The one true God has revealed Himself as the eternally self-existent \"I AM,\" the Creator of heaven and earth and the Redeemer of mankind. He has further revealed Himself as embodying the principles of relationship and association as Father, Son, and Holy Spirit.",
    scripture: "Deut. 6:4; Isa. 43:10,11; Matt. 28:19; Luke 3:22",
  },
  {
    number: 3,
    title: "The Deity of the Lord Jesus Christ",
    summary: "The Lord Jesus Christ is the eternal Son of God. The Scriptures declare: His virgin birth, His sinless life, His miracles, His substitutionary work on the cross, His bodily resurrection from the dead, His exaltation to the right hand of God.",
    scripture: "Matt. 1:23; Luke 1:31,35; Heb. 7:26; 1 Pet. 2:22; Acts 2:22; 10:38; 1 Cor. 15:3; 2 Cor. 5:21; Matt. 28:6; Luke 24:39; 1 Cor. 15:4; Acts 1:9,11; 2:33; Phil. 2:9–11; Heb. 1:3",
  },
  {
    number: 4,
    title: "The Fall of Man",
    summary: 'Man was created good and upright; for God said, "Let us make man in our image, after our likeness." But man, by voluntary transgression, fell and thereby incurred not only physical death but also spiritual death, which is separation from God.',
    scripture: "Gen. 1:26,27; 2:17; 3:6; Rom. 5:12–19",
  },
  {
    number: 5,
    title: "The Salvation of Man",
    summary: "Man's only hope of redemption is through the shed blood of Jesus Christ the Son of God. Salvation is received through repentance toward God and faith toward the Lord Jesus Christ.",
    scripture: "Luke 24:47; John 3:3; Rom. 10:13–15; Eph. 2:8; Titus 2:11; 3:5–7",
  },
  {
    number: 6,
    title: "The Ordinances of the Church",
    summary: "Baptism in Water and Holy Communion are the two ordinances of the Church. Baptism in water is by immersion and is a direct commandment of our Lord. The Lord's Supper is a memorial of the Lord's death until He comes.",
    scripture: "Matt. 28:19; Mark 16:16; Acts 10:47,48; Rom. 6:4; 1 Cor. 11:23–26",
  },
  {
    number: 7,
    title: "The Baptism in the Holy Spirit",
    summary: "All believers are entitled to and should ardently expect and earnestly seek the promise of the Father, the baptism in the Holy Spirit and fire, according to the command of our Lord Jesus Christ. This was the normal experience of all in the early Christian Church. With it comes the enduement of power for life and service, the bestowment of the gifts and their uses in the work of the ministry. This experience is distinct from and subsequent to the experience of the new birth. With the baptism in the Holy Spirit comes such experiences as: an overflowing fullness of the Spirit, a deepened reverence for God, an intensified consecration to God and dedication to His work, and a more active love for Christ, for His Word, and for the lost. The initial physical evidence of the baptism in the Holy Spirit is speaking with other tongues as the Spirit of God gives utterance.",
    scripture: "Luke 24:49; Acts 1:4,8; 2:4; 10:44–46; 11:14–16; 15:7–9",
  },
  {
    number: 8,
    title: "The Initial Physical Evidence of the Baptism in the Holy Spirit",
    summary: "The baptism of believers in the Holy Spirit is witnessed by the initial physical sign of speaking with other tongues as the Spirit of God gives them utterance.",
    scripture: "Acts 2:4; 10:44–46; 19:6",
  },
  {
    number: 9,
    title: "Sanctification",
    summary: "Sanctification is an act of separation from that which is evil, and of dedication unto God. The Scriptures teach a life of holiness without which no man shall see the Lord. By the power of the Holy Spirit we are able to obey the command, 'Be ye holy, for I am holy.'",
    scripture: "Rom. 12:1,2; 1 Thess. 5:23; Heb. 2:11; 13:12; 1 Pet. 1:15,16; 1 John 2:6",
  },
  {
    number: 10,
    title: "The Church and Its Mission",
    summary: "The Church is the Body of Christ, the habitation of God through the Spirit, with divine appointments for the fulfillment of her great commission. Each believer, born of the Spirit, is an integral part of the general assembly and Church of the firstborn, which are written in heaven.",
    scripture: "Eph. 1:22,23; 2:22; Heb. 12:23",
  },
  {
    number: 11,
    title: "The Ministry",
    summary: "A divinely called and scripturally ordained ministry has been provided by our Lord for the fourfold purpose of evangelism, worship, edification of the body of Christ, and social compassion.",
    scripture: "Mark 16:15–20; Eph. 4:11–13",
  },
  {
    number: 12,
    title: "Divine Healing",
    summary: "Divine healing is an integral part of the gospel. Deliverance from sickness is provided for in the atonement, and is the privilege of all believers.",
    scripture: "Isa. 53:4,5; Matt. 8:16,17; James 5:14–16",
  },
  {
    number: 13,
    title: "The Blessed Hope",
    summary: "The resurrection of those who have fallen asleep in Christ and their translation together with those who are alive and remain unto the coming of the Lord is the imminent and blessed hope of the Church.",
    scripture: "1 Thess. 4:16,17; Rom. 8:23; Titus 2:13; 1 Cor. 15:51,52",
  },
  {
    number: 14,
    title: "The Millennial Reign of Christ",
    summary: "The second coming of Christ includes the rapture of the saints, which is our blessed hope, followed by the visible return of Christ with His saints to reign on the earth for one thousand years. This millennial reign will bring the salvation of national Israel and the establishment of universal peace.",
    scripture: "Zech. 14:5; Matt. 24:27,30; Rev. 1:7; 19:11–14; 20:1–6",
  },
  {
    number: 15,
    title: "The Final Judgment",
    summary: "There will be a final judgment in which the wicked dead will be raised and judged according to their works. Whosoever is not found written in the Book of Life, together with the devil and his angels, the beast and the false prophet, will be consigned to the everlasting punishment in the lake which burneth with fire and brimstone, which is the second death.",
    scripture: "Matt. 25:46; Mark 9:43–48; Rev. 19:20; 20:11–15; 21:8",
  },
  {
    number: 16,
    title: "The New Heavens and the New Earth",
    summary: "We, according to His promise, look for new heavens and a new earth wherein dwelleth righteousness.",
    scripture: "2 Pet. 3:13; Rev. 21,22",
  },
];

export default function Beliefs() {
  const [open, setOpen] = useState(null);

  return (
    <div className="font-body">
      {/* Page Header */}
      <div
        className="pt-32 pb-20 text-center"
        style={{ background: 'linear-gradient(160deg, #0a1e3d 0%, #122f5d 100%)' }}
      >
        <p className="text-gold-400/70 uppercase tracking-[0.4em] text-xs mb-3 font-semibold">What We Believe</p>
        <h1 className="font-display text-5xl text-cream-50 mb-6">Our Beliefs</h1>
        <p className="text-cream-100 max-w-2xl mx-auto text-base leading-relaxed">
          As a member church of the Assemblies of God, we hold to the 16 Fundamental Truths —
          a summary of the core doctrines drawn from Scripture that define our faith and practice.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-gold-600 uppercase tracking-[0.3em] text-xs mb-2 font-semibold">Foundation of Faith</p>
          <h2 className="font-display text-3xl text-earth-800 mb-4">The 16 Fundamental Truths</h2>
          <p className="text-earth-700/70 text-base leading-relaxed max-w-2xl">
            These truths represent what we believe the Bible teaches on the foundational matters of
            the Christian faith. Tap any truth to read more.
          </p>
        </div>

        <div className="divide-y divide-earth-800/10 border-t border-earth-800/10">
          {TRUTHS.map((truth) => (
            <div key={truth.number}>
              <button
                className="w-full text-left py-5 flex items-start gap-4 group"
                onClick={() => setOpen(open === truth.number ? null : truth.number)}
              >
                <span className="font-display text-gold-500 text-lg w-7 shrink-0 pt-0.5">
                  {truth.number}.
                </span>
                <div className="flex-1">
                  <span className="font-display text-earth-800 text-lg group-hover:text-gold-700 transition-colors">
                    {truth.title}
                  </span>
                </div>
                <span className={`text-gold-500 text-xl shrink-0 transition-transform duration-200 ${open === truth.number ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {open === truth.number && (
                <div className="pb-6 pl-11 pr-4 -mt-2">
                  <p className="text-earth-700/80 text-base leading-relaxed mb-3">{truth.summary}</p>
                  <p className="text-gold-600 text-xs font-semibold uppercase tracking-wider">{truth.scripture}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-earth-800 rounded p-8 text-center">
          <p className="text-gold-400 uppercase tracking-widest text-xs mb-3 font-semibold">Learn More</p>
          <p className="font-display text-cream-50 text-xl mb-4">
            "Faith comes from hearing, and hearing through the word of Christ."
          </p>
          <p className="text-cream-100/60 text-sm">— Romans 10:17</p>
        </div>
      </div>
    </div>
  );
}
