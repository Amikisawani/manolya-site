"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site, teamLoginUrl } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-mp-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <div className="font-display text-3xl leading-none text-mp-ink">
            {site.name}
          </div>
          <div className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-mp-faint">
            {site.tagline}
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(pathname, item.href)
                  ? "text-mp-accent"
                  : "text-mp-muted hover:text-mp-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={teamLoginUrl}
            className="inline-flex items-center border border-mp-line-strong px-4 py-2 text-sm font-semibold text-mp-ink transition-colors hover:border-mp-ink"
          >
            Espace équipe
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-mp-line-strong text-mp-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span className={`block h-px w-4 bg-current transition ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-4 bg-current transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-mp-line px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Navigation mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${
                  isActive(pathname, item.href) ? "text-mp-accent" : "text-mp-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={teamLoginUrl}
              className="mt-2 inline-flex w-fit items-center border border-mp-line-strong px-4 py-2 text-sm font-semibold"
            >
              Espace équipe
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
