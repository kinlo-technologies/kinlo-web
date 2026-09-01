import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "clay" | "ghost-on-dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[12px] font-semibold whitespace-nowrap transition-all duration-150 ease-out hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-ocean-teal)";

const variants: Record<Variant, string> = {
  primary:
    "bg-(--color-deep-jungle) text-white hover:bg-[#163a34] hover:shadow-[0_6px_20px_rgba(30,77,69,0.28)]",
  secondary:
    "bg-transparent text-(--color-text-primary) border-[1.5px] border-black/20 hover:border-(--color-charcoal) hover:bg-black/[0.04]",
  clay: "bg-(--color-sunset-clay) text-white hover:bg-[#b45f3f] hover:shadow-[0_6px_20px_rgba(200,109,74,0.3)]",
  "ghost-on-dark": "bg-transparent text-white border-[1.5px] border-white/30 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  sm: "h-[38px] px-[18px] text-sm",
  md: "h-10 px-6 text-[15px]",
  lg: "h-12 px-[26px] text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; type?: never };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "lg", children, className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
