# Pharmacie Manolya — vitrine publique

Site vitrine de l’officine Manolya à Kinshasa. Pages : accueil, à propos, produits, contact. L’espace équipe ouvre la caisse interne sur [manolya-pharma.site/login](https://manolya-pharma.site/login).

Ce dépôt ne contient **pas** l’application caisse.

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Identité

Même langage visuel que Manolya Pharma : papier chaud, vert officine, typographies Syne et DM Sans.

## Déploiement Render

Web Service Node (nécessaire pour `next/image` du hero) :

1. Pousser le code sur GitHub (`Amikisawani/manolya-site`).
2. [New Web Service](https://dashboard.render.com/select-repo?type=web) → ce dépôt.
3. Render lit `render.yaml` : build `npm ci && npm run build`, start `npm start`.

Ou New Blueprint Instance depuis le même fichier. URL du type `https://manolya-site.onrender.com`.
