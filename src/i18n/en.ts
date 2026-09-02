const en = {
  metadata: {
    title: "Kinlo — Belong anywhere.",
    description:
      "Kinlo helps you discover local experiences, meet like-minded people, and become part of real communities — wherever you are.",
  },
  nav: {
    explore: "Explore",
    howItWorks: "How It Works",
    forOrganizers: "For Organizers",
    community: "Community",
    about: "About",
    getTheApp: "Get the App",
  },
  hero: {
    imageAlt: "Kinlo — Discover experiences. Meet your people. Belong anywhere.",
    ctaPrimary: "Explore Experiences",
    ctaSecondary: "How It Works",
    caption: "Now welcoming early hosts & communities in Tulum, Mexico",
  },
  howItWorks: {
    eyebrow: "How Kinlo Works",
    title: "Experiences worth sharing. People worth finding.",
    description:
      "Kinlo helps you discover local experiences, meet like-minded people, and become part of real communities — wherever you are.",
    steps: [
      {
        title: "Discover",
        description: "Find events and communities that inspire you, curated by city.",
      },
      {
        title: "Connect",
        description: "Meet like-minded people and make real connections, matched to you.",
      },
      {
        title: "Join",
        description: "Become part of communities where you belong, on your terms.",
      },
      {
        title: "Belong",
        description: "No matter where you are, you will find your people.",
      },
    ],
  },
  categories: {
    eyebrow: "Browse by Category",
    title: "Something for every kind of people-finder.",
    labels: {
      wellness: "Wellness",
      food: "Food",
      music: "Music",
      adventure: "Adventure",
      arts: "Arts",
      nightlife: "Nightlife",
      networking: "Networking",
      outdoors: "Outdoors",
      learning: "Learning",
      travel: "Travel",
    } as Record<string, string>,
  },
  featured: {
    eyebrow: "Today's Top Picks",
    title: "Featured experiences.",
    description: "A sample of what's live on Kinlo in Tulum right now.",
    hostedBy: "Hosted by",
    events: [
      {
        category: "Wellness",
        title: "Sunset Beach Yoga Flow",
        meta: "Sat, Oct 3 · 6:00 PM · Tulum Beach",
        spots: "8 spots left",
      },
      {
        category: "Food",
        title: "Community Supper Club",
        meta: "Sun, Oct 4 · 7:30 PM · Playa del Carmen",
        spots: "2 spots left",
      },
      {
        category: "Nightlife",
        title: "Salsa Night at Lula",
        meta: "Mon, Oct 5 · 8:00 PM · Lula, Zona Hotelera",
        spots: "12 spots left",
      },
    ],
  },
  forOrganizers: {
    eyebrow: "For Organizers",
    title: "Run your community. We'll handle the rest.",
    description:
      "Stop stitching together group chats, spreadsheets, and payment links. Kinlo gives hosts and organizers one place to list experiences, manage guests, and get paid — with real people finding you through belonging, not just a feed.",
    ctaPrimary: "Become an Organizer",
    ctaSecondary: "See host perks",
    perks: [
      {
        title: "Bookings & payments, handled",
        description: "Calendar holds, deposits, and payouts through Stripe — you just say yes.",
      },
      {
        title: "Real numbers, not vanity stats",
        description: "See what's converting and which experiences your community loves.",
      },
      {
        title: "Verified & safety-first",
        description:
          "Every host is manually reviewed and approved, with reporting and moderation built in from day one.",
      },
    ],
  },
  community: {
    eyebrow: "Real Stories",
    title: "People who found their people.",
    testimonials: [
      {
        quote:
          "I moved to a new city knowing no one. Three months on Kinlo and I have a running group I'd call family.",
        location: "Austin, TX",
      },
      {
        quote: "As a remote worker, Kinlo is how I find my people in every city I land in.",
        location: "Mexico City, Mexico",
      },
      {
        quote:
          "It doesn't feel like an events app. It feels like it actually wants you to belong somewhere.",
        location: "Barcelona, Spain",
      },
    ],
    stats: ["Launch city — Oct 2026", "Languages at launch (EN·ES)", "Hosts verified"],
  },
  faq: {
    eyebrow: "Good to Know",
    title: "Kinlo, answered.",
    items: [
      {
        question: "What is Kinlo?",
        answer:
          "Kinlo is a community discovery platform — not just an events app. We help people discover local experiences, connect with like-minded people, and become part of real communities, wherever they are.",
      },
      {
        question: "Who is Kinlo for?",
        answer:
          "Anyone who wants to feel at home somewhere — whether you just moved, you're passing through, or you've lived there for years and are ready to find your people. If you're looking for real connection, not just a place to check off a list, Kinlo is for you.",
      },
      {
        question: "How do I become a host or organizer?",
        answer:
          'Apply through the "Become an Organizer" flow. Once verified, you can list experiences, manage bookings, and get paid directly — no spreadsheets or third-party tools required.',
      },
      {
        question: "Is Kinlo available where I live?",
        answer:
          "Kinlo is launching first in Tulum, Mexico, with more cities to follow. Join the waitlist to be notified when we land in your city.",
      },
    ],
  },
  waitlist: {
    badge: "Coming soon to Tulum, Mexico",
    title: "Every place has your people. Go find them.",
    description:
      "Kinlo isn't live yet — join the waitlist for early access and be first to know when we launch in your city.",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    cityLabel: "City",
    cityPlaceholder: "Which city are you in?",
    submit: "Join Waitlist",
    submitting: "Joining…",
    successMessage: "You're on the list — we'll email you when Kinlo lands in your city.",
    errorGeneric: "Something went wrong. Try again.",
    errorNetwork: "Network error. Check your connection and try again.",
    errorCity: "Tell us which city you're in.",
    comingTo: "Coming to",
    appStore: "App Store",
    googlePlay: "Google Play",
  },
  footer: {
    tagline: "Kinlo is more than an app. It's your community, anywhere.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Explore", href: "#explore" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "Communities", href: "#community" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Careers", href: "#" },
          { label: "Press", href: "#" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", href: "#" },
          { label: "Contact Us", href: "#" },
          { label: "Safety", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
          { label: "Cookies", href: "#" },
        ],
      },
    ],
    copyright: "© 2026 Kinlo. All rights reserved.",
    madeFor: "Made for people who belong anywhere.",
  },
};

export default en;
export type Dictionary = typeof en;
