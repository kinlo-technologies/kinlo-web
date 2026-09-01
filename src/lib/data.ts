export type Category = {
  slug: string;
  label: string;
  tone: "teal" | "clay" | "jungle";
};

// Order mirrors the icon set shipped in kinlo-icons/kinlo-category-icons.
export const categories: Category[] = [
  { slug: "wellness", label: "Wellness", tone: "teal" },
  { slug: "food", label: "Food", tone: "clay" },
  { slug: "music", label: "Music", tone: "jungle" },
  { slug: "adventure", label: "Adventure", tone: "teal" },
  { slug: "arts", label: "Arts", tone: "clay" },
  { slug: "nightlife", label: "Nightlife", tone: "jungle" },
  { slug: "networking", label: "Networking", tone: "teal" },
  { slug: "outdoors", label: "Outdoors", tone: "clay" },
  { slug: "learning", label: "Learning", tone: "jungle" },
  { slug: "travel", label: "Travel", tone: "teal" },
];

export type EventCard = {
  category: string;
  title: string;
  host: string;
  meta: string;
  spots: string;
  price: string;
  free?: boolean;
};

// Placeholder content for design review — replace with live data once the
// Explore API is wired up (see BondVibe Firestore `events` collection).
export const featuredEvents: EventCard[] = [
  {
    category: "Wellness",
    title: "Sunset Beach Yoga Flow",
    host: "Flow Community",
    meta: "Sat, Aug 22 · 6:00 PM · Tulum Beach",
    spots: "8 spots left",
    price: "Free",
    free: true,
  },
  {
    category: "Food",
    title: "Community Supper Club",
    host: "Diego",
    meta: "Sun, Aug 23 · 7:30 PM · Playa del Carmen",
    spots: "2 spots left",
    price: "$35",
  },
  {
    category: "Networking",
    title: "Coworking + Coffee Meetup",
    host: "Alex",
    meta: "Mon, Aug 24 · 9:00 AM · Zona Hotelera",
    spots: "12 spots left",
    price: "Free",
    free: true,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  initials: string;
  tone: "teal" | "clay" | "jungle";
};

// Illustrative content for design review — replace with real users post-launch.
export const testimonials: Testimonial[] = [
  {
    quote:
      "I moved to a new city knowing no one. Three months on Kinlo and I have a running group I'd call family.",
    name: "Priya M.",
    location: "Lisbon, Portugal",
    initials: "PM",
    tone: "teal",
  },
  {
    quote: "As a remote worker, Kinlo is how I find my people in every city I land in.",
    name: "Dario S.",
    location: "Mexico City, Mexico",
    initials: "DS",
    tone: "clay",
  },
  {
    quote:
      "It doesn't feel like an events app. It feels like it actually wants you to belong somewhere.",
    name: "Aisha K.",
    location: "Nairobi, Kenya",
    initials: "AK",
    tone: "jungle",
  },
];

export const launchStats = [
  { value: "Tulum", label: "Launch city — Aug 2026" },
  { value: "4", label: "Languages at launch (EN·ES·DE·FR)" },
  { value: "$15–50", label: "Typical experience price" },
  { value: "100%", label: "Hosts ID-verified" },
];

export const faqs = [
  {
    question: "What is Kinlo?",
    answer:
      "Kinlo is a community discovery platform — not just an events app. We help people discover local experiences, connect with like-minded people, and become part of real communities, wherever they are.",
  },
  {
    question: "Who is Kinlo for?",
    answer:
      "Remote workers, travelers, digital nomads, expats, creatives and entrepreneurs — plus wellness, fitness, food, and art communities looking for their people in a new place.",
  },
  {
    question: "How do I become a host or organizer?",
    answer:
      "Apply through the \"Become an Organizer\" flow. Once verified, you can list experiences, manage bookings, and get paid directly — no spreadsheets or third-party tools required.",
  },
  {
    question: "Is Kinlo available where I live?",
    answer:
      "Kinlo is launching first in Tulum, Mexico, with more cities to follow. Join the waitlist to be notified when we land in your city.",
  },
];

export const hostPerks = [
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
    description: "ID verification, reporting, and moderation built in from day one.",
  },
];
