import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  href?: string | null;
  size?: "sm" | "lg";
  onClick?: () => void;
};

export function Logo({ href = "/", size = "sm", onClick }: LogoProps) {
  const mark = size === "lg" ? 56 : 40;
  const titleClass = size === "lg" ? "text-5xl" : "text-3xl";

  const markAndWord = (
    <span className="inline-flex items-center gap-3">
      <img
        src="/logo.svg"
        alt=""
        width={mark}
        height={mark}
        className="shrink-0"
      />
      <span className="leading-none">
        <span className={`font-display block text-mp-ink ${titleClass}`}>
          {site.name}
        </span>
        <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-mp-faint">
          {site.tagline}
        </span>
      </span>
    </span>
  );

  if (!href) {
    return markAndWord;
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className="shrink-0"
      aria-label={site.fullName}
    >
      {markAndWord}
    </Link>
  );
}
