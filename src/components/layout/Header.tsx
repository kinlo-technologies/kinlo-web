import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "#explore", label: "Explore" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#organizers", label: "For Organizers" },
  { href: "#community", label: "Community" },
  { href: "#about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-(--color-warm-sand)/85 backdrop-blur-md">
      <div className="mx-auto flex h-[84px] max-w-6xl items-center justify-between px-8">
        <Link href="#top" className="flex items-center gap-2.5">
          <Image src="/images/kinlo-logo-icon.png" alt="Kinlo" width={30} height={30} priority />
          <span className="font-display text-xl font-bold tracking-[0.06em]">KINLO</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-(--color-text-secondary) transition-colors hover:text-(--color-text-primary)"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a href="#" className="text-[15px] font-semibold text-(--color-text-primary)">
            Log In
          </a>
          <Button href="#download" size="sm">
            Get the App
          </Button>
        </div>
      </div>
    </header>
  );
}
