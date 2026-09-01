export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-14 max-w-xl text-center">
      <span
        className={`mb-3.5 block text-[13px] font-bold tracking-[0.08em] uppercase ${
          light ? "text-(--color-ocean-teal)" : "text-(--color-ocean-teal)"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-[40px] leading-[1.15] font-bold ${
          light ? "text-white" : "text-(--color-text-primary)"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-[14px] text-lg ${
            light ? "text-white/70" : "text-(--color-text-secondary)"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
