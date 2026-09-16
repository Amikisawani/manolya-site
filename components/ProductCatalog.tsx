"use client";

import { useMemo, useState } from "react";
import { categories, products, type ProductCategory } from "@/lib/products";

type Filter = "Tous" | ProductCategory;

export function ProductCatalog() {
  const [filter, setFilter] = useState<Filter>("Tous");
  const visible = useMemo(
    () =>
      filter === "Tous"
        ? products
        : products.filter((product) => product.category === filter),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Catégories">
        {(["Tous", ...categories] as Filter[]).map((item) => {
          const active = filter === item;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item)}
              className={`border px-3 py-1.5 text-sm font-medium transition-colors ${
                active
                  ? "border-mp-accent bg-mp-accent-soft text-mp-accent"
                  : "border-mp-line text-mp-muted hover:border-mp-ink hover:text-mp-ink"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {visible.map((product) => (
          <li
            key={product.slug}
            className="border border-mp-line bg-[rgba(255,252,247,0.72)] p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mp-faint">
                {product.category}
              </p>
              {product.prescription ? (
                <span className="border border-[#e8d4a8] bg-[#faf3e2] px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-mp-warn">
                  Ordonnance
                </span>
              ) : (
                <span className="border border-[#a8d5c0] bg-mp-accent-soft px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-mp-accent">
                  Conseil
                </span>
              )}
            </div>
            <h2 className="font-display mt-3 text-2xl">{product.name}</h2>
            {product.generic ? (
              <p className="mt-1 text-sm text-mp-muted">{product.generic}</p>
            ) : null}
            <p className="mt-3 text-sm leading-relaxed text-mp-muted">
              {product.summary}
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-mp-faint">
              Disponible à l’officine
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
