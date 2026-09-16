import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description: `Histoire et mission de ${site.fullName}, officine à ${site.neighborhood}, ${site.city}.`,
};

const values = [
  {
    title: "Clarté",
    body: "Posologies expliquées, ordonnances vérifiées, pas de vente en ligne de médicaments.",
  },
  {
    title: "Traçabilité",
    body: "Lots et dates sont suivis en interne pour limiter ruptures et expirations.",
  },
  {
    title: "Proximité",
    body: "Une pharmacie de quartier à Bandalungwa, pensée pour les familles de Kinshasa.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mp-faint">
        À propos
      </p>
      <h1 className="font-display mt-3 max-w-3xl text-5xl leading-[1.08] sm:text-6xl">
        Une officine, pas une boutique en ligne.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mp-muted">
        {site.fullName} est une pharmacie de proximité à {site.neighborhood},{" "}
        {site.city}. Cette vitrine présente l’officine, nos rayons et comment nous
        joindre. La caisse, les stocks et les dossiers restent dans l’espace
        équipe.
      </p>

      <section className="mt-16 grid gap-10 border-t border-mp-line pt-12 lg:grid-cols-3">
        {values.map((value) => (
          <article key={value.title}>
            <h2 className="font-display text-2xl">{value.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-mp-muted">
              {value.body}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-16 max-w-3xl border-t border-mp-line pt-12">
        <h2 className="font-display text-3xl">Comment ça se passe</h2>
        <ol className="mt-8 space-y-6">
          <li className="border-b border-mp-line pb-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mp-faint">
              01
            </p>
            <h3 className="mt-2 text-lg font-semibold">Vous venez à l’officine</h3>
            <p className="mt-2 text-sm leading-relaxed text-mp-muted">
              Ordonnance ou besoin du quotidien : le pharmacien vérifie, conseille
              et délivre. Les antibiotiques et traitements prescrits ne partent
              que sur ordonnance.
            </p>
          </li>
          <li className="border-b border-mp-line pb-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mp-faint">
              02
            </p>
            <h3 className="mt-2 text-lg font-semibold">Le catalogue public oriente</h3>
            <p className="mt-2 text-sm leading-relaxed text-mp-muted">
              La page Produits montre les familles disponibles. Les prix, lots et
              stocks se confirment au comptoir — pas sur ce site.
            </p>
          </li>
          <li>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mp-faint">
              03
            </p>
            <h3 className="mt-2 text-lg font-semibold">L’équipe gère en interne</h3>
            <p className="mt-2 text-sm leading-relaxed text-mp-muted">
              Caisse, stocks et rapports restent sur manolya-pharma.site, accessibles
              uniquement au personnel.
            </p>
          </li>
        </ol>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center bg-mp-accent px-5 py-2.5 text-sm font-semibold text-[#f7f4ef] hover:bg-mp-accent-hover"
        >
          Nous écrire
        </Link>
      </section>
    </div>
  );
}
