import Image from "next/image";
import Link from "next/link";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
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
];

export function Footer() {
  return (
    <footer className="bg-(--color-charcoal) py-[72px] text-white/85">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid grid-cols-2 gap-10 pb-14 md:grid-cols-5 md:gap-10">
          <div className="col-span-2">
            <Link href="#top" className="flex items-center gap-2.5">
              <Image
                src="/images/kinlo-logo-icon-white.png"
                alt="Kinlo"
                width={26}
                height={26}
              />
              <span className="font-display text-xl font-bold tracking-[0.06em] text-white">
                KINLO
              </span>
            </Link>
            <p className="mt-3.5 max-w-[240px] text-sm text-white/50">
              Kinlo is more than an app. It&apos;s your community, anywhere.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="mb-4 text-xs font-bold tracking-[0.06em] text-white/45 uppercase">
                {col.title}
              </h5>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14.5px] text-white/78 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-white/12 pt-6 text-[13px] text-white/42 sm:flex-row sm:justify-between">
          <span>© 2026 Kinlo. All rights reserved.</span>
          <span>Made for people who belong anywhere.</span>
        </div>
      </div>
    </footer>
  );
}
