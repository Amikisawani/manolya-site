import type { Metadata } from "next";
import { ProductCatalog } from "@/components/ProductCatalog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Produits",
  description: `Rayons et produits disponibles à ${site.fullName}, ${site.city}.`,
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mp-faint">
        Produits
      </p>
      <h1 className="font-display mt-3 max-w-3xl text-5xl leading-[1.08] sm:text-6xl">
        Un catalogue pour s’orienter, une délivrance au comptoir.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mp-muted">
        Ces références illustrent ce que l’officine délivre. Pas de panier en
        ligne : le pharmacien confirme disponibilité, posologie et, le cas
        échéant, l’ordonnance.
      </p>
      <div className="mt-12">
        <ProductCatalog />
      </div>
    </div>
  );
}
