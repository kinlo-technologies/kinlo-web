"use client";

import { useState } from "react";

export function MobileNav({
  links,
  ariaLabel,
}: {
  links: { href: string; label: string }[];
  ariaLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`block h-[1.5px] w-5 bg-(--color-text-primary) transition-transform duration-150 ${
            open ? "translate-y-[6.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-[1.5px] w-5 bg-(--color-text-primary) transition-opacity duration-150 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-[1.5px] w-5 bg-(--color-text-primary) transition-transform duration-150 ${
            open ? "-translate-y-[6.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {open ? (
        <nav className="absolute inset-x-0 top-full border-b border-black/[0.08] bg-(--color-warm-sand) px-5 pt-2 pb-6 shadow-(--shadow-card)">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-[10px] px-3 py-3 text-[15px] font-semibold text-(--color-text-secondary) transition-colors hover:bg-black/[0.04] hover:text-(--color-text-primary)"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
