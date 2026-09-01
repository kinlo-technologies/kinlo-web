import type { ReactNode } from "react";

// Inline stroke icons, sourced 1:1 from /kinlo-icons/kinlo-category-icons (currentColor stroke).
const paths: Record<string, ReactNode> = {
  wellness: <circle cx="12" cy="12" r="7" />,
  food: (
    <>
      <path d="M6 3v6.5a2.5 2.5 0 0 0 5 0V3M8.5 9.5V21" />
      <path d="M17 3c-1.7 0-3 2-3 5s1.3 5 3 5v8" />
    </>
  ),
  music: (
    <>
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
      <path d="M9 18V5l12-2v13" />
    </>
  ),
  adventure: (
    <>
      <path d="M4 21 12 4l8 17" />
      <path d="m8.5 13 3.5-1 3.5 1" />
    </>
  ),
  arts: (
    <>
      <path d="M8 2v3M16 2v3M4 8h16" />
      <rect width="16" height="16" x="4" y="5" rx="3" />
      <path d="M9 12.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
      <path d="m13 16 3-4 3 5" />
    </>
  ),
  nightlife: (
    <>
      <circle cx="12" cy="5" r="3" />
      <path d="M12 8v6M8 21l4-7 4 7M6 18h12" />
    </>
  ),
  networking: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.2 7.5 10.5 16M15.8 7.5 13.5 16M8.5 6h7" />
    </>
  ),
  outdoors: (
    <>
      <path d="M4 20 10 8l4 6 2-3 4 9z" />
      <path d="M2 20h20" />
    </>
  ),
  learning: (
    <>
      <path d="M12 4 2 8l10 4 10-4z" />
      <path d="M6 10v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    </>
  ),
  travel: <path d="M3 16.5V15l8-3V6a1.5 1.5 0 0 1 3 0v6l8 3v1.5l-8-2v3l2 1.5V19l-3.5-1-3.5 1v-1l2-1.5v-3z" />,
};

export function CategoryIcon({ slug, className }: { slug: string; className?: string }) {
  const content = paths[slug];
  if (!content) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {content}
    </svg>
  );
}
