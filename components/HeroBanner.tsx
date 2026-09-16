"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "@/lib/hero";

const INTERVAL_MS = 6500;

export function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = heroSlides[index];

  const go = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="relative overflow-hidden border-b border-mp-line"
      aria-roledescription="carousel"
      aria-label="Présentation de l’officine"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[28rem] sm:min-h-[34rem] lg:min-h-[38rem]">
        {heroSlides.map((item, i) => (
          <div
            key={item.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141816]/80 via-[#141816]/45 to-transparent" />

        <div className="relative mx-auto flex min-h-[28rem] max-w-6xl flex-col justify-end px-6 py-12 sm:min-h-[34rem] lg:min-h-[38rem] lg:px-8 lg:py-16">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#e8f5ef]">
            {slide.kicker}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] text-[#f7f4ef] sm:text-6xl">
            {slide.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#f7f4ef]/80 sm:text-lg">
            {slide.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/produits"
              className="inline-flex items-center bg-mp-accent px-5 py-2.5 text-sm font-semibold text-[#f7f4ef] transition-colors hover:bg-mp-accent-hover"
            >
              Voir les produits
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border border-[#f7f4ef]/40 px-5 py-2.5 text-sm font-semibold text-[#f7f4ef] transition-colors hover:border-[#f7f4ef]"
            >
              Nous contacter
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              className="border border-[#f7f4ef]/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#f7f4ef] hover:border-[#f7f4ef]"
              onClick={() => go(index - 1)}
            >
              Précédent
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Slides">
              {heroSlides.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Image ${i + 1} : ${item.kicker}`}
                  className={`h-2 w-8 ${i === index ? "bg-[#f7f4ef]" : "bg-[#f7f4ef]/30"}`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="border border-[#f7f4ef]/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#f7f4ef] hover:border-[#f7f4ef]"
              onClick={() => go(index + 1)}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
