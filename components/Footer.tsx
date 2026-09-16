import Link from "next/link";
import { nav, site, teamLoginUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-mp-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="font-display text-3xl leading-none">{site.name}</div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mp-muted">
            {site.description}
          </p>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mp-faint">
            Pages
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-mp-ink hover:text-mp-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={teamLoginUrl} className="text-mp-ink hover:text-mp-accent">
                Espace équipe
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mp-faint">
            Officine
          </p>
          <ul className="mt-4 space-y-2 text-sm text-mp-muted">
            <li>{site.address}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-mp-accent">
                {site.email}
              </a>
            </li>
            {site.hours.map((slot) => (
              <li key={slot.days}>
                {slot.days} · {slot.hours}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-mp-line">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-mp-faint lg:px-8">
          © {new Date().getFullYear()} {site.fullName}. Vitrine publique — la caisse et
          l’espace interne restent sur manolya-pharma.site.
        </p>
      </div>
    </footer>
  );
}
