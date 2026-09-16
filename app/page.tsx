import Link from "next/link";
import { categories } from "@/lib/products";
import { site, teamLoginUrl } from "@/lib/site";

const pillars = [
  {
    title: "Conseil à l’officine",
    body: "Chaque délivrance est expliquée : posologie, interactions, et alternatives quand c’est possible.",
  },
  {
    title: "Médicaments suivis",
    body: "Lots, dates et disponibilité sont gérés en interne. Vous retirez à la pharmacie, pas en ligne.",
  },
  {
    title: "Quartier Bandalungwa",
    body: "Une officine de proximité à Kinshasa, ouverte du lundi au dimanche avec des horaires clairs.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mp-faint">
          Pharmacie · {site.neighborhood}
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] text-mp-ink sm:text-7xl">
          Le conseil d’une officine, au rythme de Kinshasa.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-mp-muted">
          {site.fullName} accueille patients et familles à Bandalungwa : ordonnances,
          médicaments du quotidien et écoute du pharmacien.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/produits"
            className="inline-flex items-center bg-mp-accent px-5 py-2.5 text-sm font-semibold text-[#f7f4ef] transition-colors hover:bg-mp-accent-hover"
          >
            Voir les produits
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center border border-mp-line-strong px-5 py-2.5 text-sm font-semibold text-mp-ink transition-colors hover:border-mp-ink"
          >
            Nous contacter
          </Link>
        </div>
      </section>

      <section className="border-y border-mp-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-3 lg:px-8">
          {pillars.map((pillar) => (
            <article key={pillar.title}>
              <h2 className="font-display text-2xl">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mp-muted">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mp-faint">
              Rayons
            </p>
            <h2 className="font-display mt-2 text-4xl">Ce que vous trouvez ici</h2>
          </div>
          <Link href="/produits" className="text-sm font-semibold text-mp-accent">
            Catalogue public
          </Link>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li
              key={category}
              className="border border-mp-line bg-[rgba(255,252,247,0.72)] px-5 py-6"
            >
              <p className="font-display text-xl">{category}</p>
              <p className="mt-2 text-sm text-mp-muted">
                Disponible à retirer à l’officine, avec conseil.
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-mp-line bg-mp-bg-accent/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mp-faint">
              Horaires
            </p>
            <h2 className="font-display mt-2 text-4xl">Venez à l’officine</h2>
            <p className="mt-4 text-sm leading-relaxed text-mp-muted">
              Les médicaments se retirent sur place. L’espace équipe (caisse et
              gestion) est réservé au personnel.
            </p>
            <dl className="mt-8 space-y-3">
              {site.hours.map((slot) => (
                <div
                  key={slot.days}
                  className="flex justify-between gap-6 border-b border-mp-line py-3 text-sm"
                >
                  <dt className="text-mp-muted">{slot.days}</dt>
                  <dd className="font-medium">{slot.hours}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-6 border-b border-mp-line py-3 text-sm">
                <dt className="text-mp-muted">Adresse</dt>
                <dd className="font-medium">{site.address}</dd>
              </div>
            </dl>
          </div>
          <div className="border border-mp-line bg-[rgba(255,252,247,0.72)] p-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mp-faint">
              Équipe
            </p>
            <h2 className="font-display mt-2 text-3xl">Espace interne</h2>
            <p className="mt-4 text-sm leading-relaxed text-mp-muted">
              Caissiers, pharmaciens et gestion accèdent à l’application interne
              depuis un lien dédié — pas depuis cette vitrine.
            </p>
            <a
              href={teamLoginUrl}
              className="mt-8 inline-flex items-center bg-mp-ink px-5 py-2.5 text-sm font-semibold text-[#f7f4ef] transition-colors hover:bg-mp-accent"
            >
              Espace équipe
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
