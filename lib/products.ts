export type ProductCategory =
  | "Antalgiques"
  | "Antibiotiques"
  | "Vitamines"
  | "Hygiène"
  | "Maman & bébé"
  | "Premiers soins";

export type CatalogProduct = {
  slug: string;
  name: string;
  generic?: string;
  category: ProductCategory;
  summary: string;
  prescription: boolean;
};

export const categories: ProductCategory[] = [
  "Antalgiques",
  "Antibiotiques",
  "Vitamines",
  "Hygiène",
  "Maman & bébé",
  "Premiers soins",
];

export const products: CatalogProduct[] = [
  {
    slug: "paracetamol-500",
    name: "Paracétamol 500 mg",
    generic: "Paracétamol",
    category: "Antalgiques",
    summary: "Douleurs et fièvre du quotidien, sur conseil du pharmacien.",
    prescription: false,
  },
  {
    slug: "ibuprofene-400",
    name: "Ibuprofène 400 mg",
    generic: "Ibuprofène",
    category: "Antalgiques",
    summary: "Anti-inflammatoire pour douleurs et fièvre, selon indication.",
    prescription: false,
  },
  {
    slug: "amoxicilline-500",
    name: "Amoxicilline 500 mg",
    generic: "Amoxicilline",
    category: "Antibiotiques",
    summary: "Antibiotique délivré uniquement sur ordonnance valide.",
    prescription: true,
  },
  {
    slug: "vitamine-c-1000",
    name: "Vitamine C 1000 mg",
    generic: "Acide ascorbique",
    category: "Vitamines",
    summary: "Complément pour soutenir les défenses, à l’officine.",
    prescription: false,
  },
  {
    slug: "multivitamines",
    name: "Complexe multivitaminé",
    category: "Vitamines",
    summary: "Apport quotidien de vitamines et minéraux essentiels.",
    prescription: false,
  },
  {
    slug: "sro",
    name: "Sels de réhydratation orale",
    category: "Premiers soins",
    summary: "Réhydratation en cas de diarrhée, particulièrement chez l’enfant.",
    prescription: false,
  },
  {
    slug: "antiseptique",
    name: "Antiseptique cutané",
    category: "Premiers soins",
    summary: "Nettoyage des plaies superficielles et petite chirurgie.",
    prescription: false,
  },
  {
    slug: "savon-dermato",
    name: "Savon dermatologique",
    category: "Hygiène",
    summary: "Hygiène quotidienne des peaux sensibles, sans parfum agressif.",
    prescription: false,
  },
  {
    slug: "protection-solaire",
    name: "Écran solaire",
    category: "Hygiène",
    summary: "Protection cutanée contre le soleil, visages et corps.",
    prescription: false,
  },
  {
    slug: "lait-infantile",
    name: "Lait infantile",
    category: "Maman & bébé",
    summary: "Alimentation du nourrisson : nous vous orientons selon l’âge.",
    prescription: false,
  },
  {
    slug: "paracetamol-sirop",
    name: "Paracétamol sirop enfant",
    generic: "Paracétamol",
    category: "Maman & bébé",
    summary: "Fièvre et douleurs pédiatriques, dosage à valider à l’officine.",
    prescription: false,
  },
  {
    slug: "pansements",
    name: "Pansements et compresses",
    category: "Premiers soins",
    summary: "Trousse de premiers soins pour la maison et les déplacements.",
    prescription: false,
  },
];
