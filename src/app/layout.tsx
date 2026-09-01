import type { Metadata } from "next";
import { domine, publicSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinlo — Belong anywhere.",
  description:
    "Kinlo helps you discover local experiences, meet like-minded people, and become part of real communities — wherever you are.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${domine.variable} ${publicSans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
