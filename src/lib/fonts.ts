import localFont from "next/font/local";

// Domine — serif, editorial display face. Used for headlines only.
export const domine = localFont({
  src: "../fonts/Domine.ttf",
  variable: "--font-domine",
  display: "swap",
  weight: "400 700",
});

// Public Sans — grotesk workhorse for body copy and UI.
export const publicSans = localFont({
  src: "../fonts/PublicSans.ttf",
  variable: "--font-public-sans",
  display: "swap",
  weight: "100 900",
});
