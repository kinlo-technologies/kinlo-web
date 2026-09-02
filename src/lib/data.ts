export type Category = {
  slug: string;
  tone: "teal" | "clay" | "jungle";
};

// Order mirrors the icon set shipped in kinlo-icons/kinlo-category-icons.
// Labels live in the i18n dictionaries (src/i18n/en.ts, src/i18n/es.ts), keyed by slug.
export const categories: Category[] = [
  { slug: "wellness", tone: "teal" },
  { slug: "food", tone: "clay" },
  { slug: "music", tone: "jungle" },
  { slug: "adventure", tone: "teal" },
  { slug: "arts", tone: "clay" },
  { slug: "nightlife", tone: "jungle" },
  { slug: "networking", tone: "teal" },
  { slug: "outdoors", tone: "clay" },
  { slug: "learning", tone: "jungle" },
  { slug: "travel", tone: "teal" },
];

export type EventCard = {
  host: string;
  image: string;
  price: string;
  free?: boolean;
};

// Placeholder content for design review — replace with live data once the
// Explore API is wired up (see BondVibe Firestore `events` collection).
// Order mirrors dict.featured.events in the i18n dictionaries (title/meta/spots/category text).
export const featuredEvents: EventCard[] = [
  {
    host: "Flow Community",
    price: "Free",
    free: true,
    image: "/images/events/event-yoga.jpg",
  },
  {
    host: "Diego",
    price: "$700 MXN",
    image: "/images/events/event-dinner.jpg",
  },
  {
    host: "Lula Tulum",
    price: "$400 MXN",
    image: "/images/events/event-salsa.jpg",
  },
];

export type Testimonial = {
  name: string;
  initials: string;
  tone: "teal" | "clay" | "jungle";
};

// Illustrative content for design review — replace with real users post-launch.
// Order mirrors dict.community.testimonials in the i18n dictionaries (quote/location text).
export const testimonials: Testimonial[] = [
  { name: "Maya R.", initials: "MR", tone: "teal" },
  { name: "Dario S.", initials: "DS", tone: "clay" },
  { name: "Sofia L.", initials: "SL", tone: "jungle" },
];

// Order mirrors dict.community.stats in the i18n dictionaries (label text).
export const launchStats = [{ value: "Tulum" }, { value: "2" }, { value: "100%" }];
