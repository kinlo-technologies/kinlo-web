import { WaitlistForm } from "@/components/sections/WaitlistForm";

const badges = [
  { label: "App Store", icon: appleIcon() },
  { label: "Google Play", icon: playIcon() },
];

function appleIcon() {
  return (
    <path d="M16.5 3c.1 1.2-.4 2.4-1.1 3.2-.7.9-1.9 1.6-3 1.5-.1-1.1.5-2.4 1.1-3.1.8-.9 2-1.5 3-1.6zM20.6 17c-.5 1.2-.8 1.7-1.5 2.7-1 1.4-2.3 3.2-4 3.2-1.5 0-1.9-1-3.9-1s-2.5 1-4 1c-1.7 0-3-1.6-4-3-1.4-2-2.4-5.7-1-8.2.7-1.2 1.9-2 3.2-2 1.4 0 2.2 1 3.4 1 1.1 0 1.8-1 3.4-1 1.3 0 2.7.7 3.6 1.9-3.2 1.8-2.7 6.4.8 5.4z" />
  );
}

function playIcon() {
  return (
    <path d="M3.6 2.6a1 1 0 0 0-.6.9v17a1 1 0 0 0 .6.9l9.6-9.4-9.6-9.4zM15 12l2.6-2.6 3.4 2c.6.3.6 1.2 0 1.5l-3.4 2L15 12zM4 3l9.5 8.3L4 21V3z" />
  );
}

export function Waitlist() {
  return (
    <section id="download" className="py-24">
      <div className="mx-auto max-w-6xl px-8">
        <div className="rounded-(--radius-lg) bg-(--color-limestone) p-11 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-(--color-surface) px-4 py-2 text-[13px] font-semibold text-(--color-text-secondary) shadow-(--shadow-soft)">
            <span className="h-[7px] w-[7px] rounded-full bg-(--color-sunset-clay)" />
            Coming soon to Tulum, Mexico
          </span>
          <h2 className="font-display mx-auto mb-3.5 max-w-2xl text-[36px] leading-tight font-bold">
            Every place has your people. Go find them.
          </h2>
          <p className="mx-auto mb-8 max-w-[520px] text-[17px] text-(--color-text-secondary)">
            Kinlo isn&apos;t live yet — join the waitlist for early access and be first to know
            when we launch in your city.
          </p>

          <WaitlistForm />

          <div className="flex justify-center gap-3.5">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex cursor-not-allowed items-center gap-2.5 rounded-[10px] bg-(--color-charcoal) px-5 py-2.5 text-white opacity-50"
                aria-disabled
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  {badge.icon}
                </svg>
                <div className="text-left">
                  <small className="block text-[10px] text-white/60">Coming to</small>
                  <strong className="text-sm">{badge.label}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
