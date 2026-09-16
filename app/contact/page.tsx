import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site, teamLoginUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Adresse, horaires et message pour ${site.fullName}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mp-faint">
        Contact
      </p>
      <h1 className="font-display mt-3 max-w-3xl text-5xl leading-[1.08] sm:text-6xl">
        Une question, une ordonnance, un passage.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mp-muted">
        Écrivez-nous ou venez à {site.neighborhood}. Pour la caisse et la gestion
        interne, utilisez l’espace équipe.
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />
        <aside className="space-y-8">
          <div className="border border-mp-line bg-[rgba(255,252,247,0.72)] p-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mp-faint">
              Officine
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mp-muted">
              {site.address}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block text-sm font-semibold text-mp-accent"
            >
              {site.email}
            </a>
            <dl className="mt-6 space-y-2 text-sm">
              {site.hours.map((slot) => (
                <div key={slot.days} className="flex justify-between gap-4">
                  <dt className="text-mp-muted">{slot.days}</dt>
                  <dd className="font-medium">{slot.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="border border-mp-line p-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mp-faint">
              Personnel
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mp-muted">
              Accès caisse, stocks et rapports — hors vitrine publique.
            </p>
            <a
              href={teamLoginUrl}
              className="mt-5 inline-flex items-center border border-mp-line-strong px-4 py-2 text-sm font-semibold hover:border-mp-ink"
            >
              Espace équipe
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
