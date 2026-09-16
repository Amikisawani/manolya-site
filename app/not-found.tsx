import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mp-faint">
        404
      </p>
      <h1 className="font-display mt-3 text-5xl">Page introuvable</h1>
      <p className="mt-4 max-w-md text-mp-muted">
        Cette adresse n’existe pas sur la vitrine Manolya.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center bg-mp-accent px-5 py-2.5 text-sm font-semibold text-[#f7f4ef] hover:bg-mp-accent-hover"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}
