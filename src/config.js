// ============================================================
//  CHURCH WEBSITE CONFIGURATION
//  Edit this file to update your church's information.
// ============================================================

export const CHURCH_CONFIG = {
  // --- GENERAL ---
  name: "Assembly of God Community Church",
  tagline: "A Place to Belong. A Faith to Live By.",
  description:
    "We are a welcoming community of believers committed to worship, fellowship, and serving our neighbors in the love of Christ.",

  // --- CONTACT ---
  address: "2nd Floor, 17 V. Gomez St. San Roque, Marikina",
  phone: "+63 (0) 912 345 6789",
  email: "hello@agccph.org",

  // --- SERVICE SCHEDULE ---
  services: [
    { day: "Sunday", time: "8:00 AM", label: "Sunday Worship Service" },
    { day: "Friday", time: "7:30 PM", label: "Friday Prayer Meeting" },
  ],

  // --- FRIDAY PRAYER MEETING PROGRAM (archived) ---
  // fridayProgram: [
  //   { time: "7:15 – 7:30", label: "Preparation" },
  //   { time: "7:30 – 7:45", label: "Praise and Worship" },
  //   { time: "7:45 – 7:50", label: "Opening Prayer" },
  //   { time: "7:50 – 8:05", label: "Word" },
  //   { time: "8:05 – 8:25", label: "Prayer Leads" },
  //   { time: "8:25 – 8:30", label: "Closing Prayer" },
  // ],

  // --- SUNDAY ORDER OF SERVICE (archived) ---
  // sundayProgram: [
  //   { time: "8:00 – 8:15", label: "Grace Period" },
  //   { time: "8:15 – 8:30", label: "Devotion" },
  //   { time: "8:30 – 8:55", label: "Welcoming" },
  //   { time: "8:55 – 9:00", label: "Countdown" },
  //   { time: "9:00 – 9:20", label: "Worship" },
  //   { time: "9:20 – 9:25", label: "Announcement & New Comers Welcome" },
  //   { time: "9:25 – 9:30", label: "Bible Reading" },
  //   { time: "9:30 – 9:35", label: "Opening Prayer" },
  //   { time: "9:35 – 10:25", label: "Word" },
  //   { time: "10:25 – 10:30", label: "Benediction" },
  // ],

  // --- SOCIAL LINKS (leave blank "" to hide) ---
  social: {
    facebook: "https://www.facebook.com/AGCCMarikina",
    youtube: "https://youtube.com/@yourchurch",
    instagram: "",
    // --- FACEBOOK PAGE FEED ---
    // To enable the live Facebook feed on the News page:
    // 1. Set facebookPageId to your numeric Facebook Page ID
    // 2. Set facebookPageUrl to your full Facebook Page URL
    facebookPageId: "",        // e.g. "123456789012345"
    facebookPageUrl: "https://www.facebook.com/AGCCMarikina",
  },

  // --- SUPPORT / GIVING ---
  giving: {
    headline: "Support the Work of the Church",
    description:
      "Your generous gifts enable us to serve our congregation and community. Every contribution, big or small, makes a difference.",
    methods: [
      {
        label: "GCash",
        detail: "0912 345 6789",
        icon: "📱",
      },
      {
        label: "Bank Transfer",
        detail: "BDO Savings — Acct No. 1234-5678-90\nAccount Name: Assembly of God Community Church",
        icon: "🏦",
      },
      {
        label: "In-Person",
        detail: "Drop your offering envelope during any Sunday service.",
        icon: "⛪",
      },
    ],
    onlineGivingUrl: "", // Add a link (e.g. PayMongo) to show a "Give Online" button
  },

  // --- VOLUNTEERING ---
  volunteering: {
    headline: "Serve With Us",
    description:
      "The church is built by willing hearts. Whether you're gifted in music, hospitality, teaching, or technology — there's a place for you to serve.",
    contactEmail: "serve@agccph.org", // Volunteer inquiry email
    ministries: [
      {
        name: "Worship & Music",
        icon: "🎵",
        description:
          "Join our worship team as a vocalist, musician, or sound engineer. We serve during Sunday services and special events.",
        roles: ["Vocalist", "Guitarist", "Drummer", "Keyboardist", "Sound Engineer"],
      },
      {
        name: "Ushers & Greeters",
        icon: "🤝",
        description:
          "Be the first face people see. Welcome guests, guide congregants, and create a warm atmosphere every Sunday.",
        roles: ["Door Greeter", "Seat Usher", "Parking Assistant", "Information Desk"],
      },
      {
        name: "Children's Ministry",
        icon: "👦",
        description:
          "Help shape the faith of the next generation. Teach, mentor, and create a safe, fun environment for kids.",
        roles: ["Sunday School Teacher", "Kids Church Helper", "Nursery Care", "VBS Volunteer"],
      },
      {
        name: "Media & Tech",
        icon: "🎥",
        description:
          "Use your technical skills to support worship. Handle live streaming, graphics, presentation slides, and social media.",
        roles: ["Live Stream Operator", "Presentation Slides", "Social Media", "Photography"],
      },
      {
        name: "Kitchen & Hospitality",
        icon: "🍽️",
        description:
          "Serve through meals, snacks, and fellowship. Help coordinate church events, lunches, and community gatherings.",
        roles: ["Meal Preparation", "Event Setup", "Fellowship Coordinator", "Cleanup Crew"],
      },
      {
        name: "Prayer Ministry",
        icon: "🙏",
        description:
          "Intercede for the church, city, and world. Join our prayer team for weekly prayer meetings and altar ministry.",
        roles: ["Altar Minister", "Prayer Chain", "Intercessory Team", "Counseling Support"],
      },
    ],
  },

  // --- ABOUT ---
  about: {
    vision: "To see every person transformed by the grace of God and equipped to make disciples.",
    mission:
      "We exist to worship God wholeheartedly, build authentic community, and serve our city and the world with the love of Jesus.",
    values: [
      { title: "Scripture", description: "The Bible is our foundation and guide for all of life." },
      { title: "Grace", description: "Every person is welcome, loved, and valued here." },
      { title: "Community", description: "Life is better together — we do faith in family." },
      { title: "Service", description: "We are called to love and serve our neighbors." },
    ],
    story:
      "Founded on March 15, 2026, Assembly of God Community Church began with nine surrendered hearts and one unshakeable conviction — that God had called them to build a place where broken lives are made whole. Though young in years, this church carries the weight of decades of combined faith, prayer, and service. We remain anchored in our original calling: to lift high the name of Jesus Christ, and to make His grace known and felt in every life that walks through our doors.",
  },

  // --- NAV: Add more pages here ---
  // Each item becomes a navigation link.
  // Built-in pages: "home", "about", "support"
  // To add a new page, add an entry and create a matching component in src/pages/
  navLinks: [
    { label: "Home",        path: "/" },
    { label: "About",       path: "/about" },
    { label: "Beliefs",     path: "/beliefs" },
    { label: "News",        path: "/news" },
    { label: "Support Us",  path: "/support" },
    // { label: "Sermons",  path: "/sermons" },   // ← Uncomment & create src/pages/Sermons.jsx
    // { label: "Events",   path: "/events" },
    // { label: "Connect",  path: "/connect" },
  ],
};
