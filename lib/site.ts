export const teamLoginUrl = "https://manolya-pharma.site/login";

export const site = {
  name: "Manolya",
  fullName: "Pharmacie Manolya",
  tagline: "Pharma",
  description:
    "Conseil pharmaceutique, médicaments de qualité et accueil soigné à Kinshasa.",
  neighborhood: "Bandalungwa",
  city: "Kinshasa",
  country: "République démocratique du Congo",
  address: "Bandalungwa, Kinshasa, RDC",
  email: "contact@manolya-pharma.site",
  hours: [
    { days: "Lundi — Samedi", hours: "8h00 — 20h00" },
    { days: "Dimanche", hours: "9h00 — 13h00" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/produits", label: "Produits" },
  { href: "/contact", label: "Contact" },
] as const;
