import { WaitlistForm } from "@/components/sections/WaitlistForm";
import type { Dictionary } from "@/i18n/dictionaries";

function appleIcon() {
  return (
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  );
}

function playIcon() {
  return (
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
  );
}

export function Waitlist({ dict }: { dict: Dictionary }) {
  const badges = [
    { label: dict.waitlist.appStore, icon: appleIcon() },
    { label: dict.waitlist.googlePlay, icon: playIcon() },
  ];

  return (
    <section id="download" className="py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-8">
        <div className="rounded-(--radius-lg) bg-(--color-limestone) p-6 text-center sm:p-11">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-(--color-surface) px-4 py-2 text-[13px] font-semibold text-(--color-text-secondary) shadow-(--shadow-soft)">
            <span className="h-[7px] w-[7px] rounded-full bg-(--color-sunset-clay)" />
            {dict.waitlist.badge}
          </span>
          <h2 className="font-display mx-auto mb-3.5 max-w-2xl text-[36px] leading-tight font-bold">
            {dict.waitlist.title}
          </h2>
          <p className="mx-auto mb-8 max-w-[520px] text-[17px] text-(--color-text-secondary)">
            {dict.waitlist.description}
          </p>

          <WaitlistForm dict={dict} />

          <div className="flex justify-center gap-2.5 sm:gap-3.5">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex cursor-not-allowed items-center gap-2 rounded-[10px] bg-(--color-charcoal) px-3 py-2 text-white opacity-50 sm:gap-2.5 sm:px-5 sm:py-2.5"
                aria-disabled
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
                  {badge.icon}
                </svg>
                <div className="text-left whitespace-nowrap">
                  <small className="block text-[10px] text-white/60">{dict.waitlist.comingTo}</small>
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
