# melody

Landing page statique (HTML/CSS/JS) pour un service de chansons personnalisées, en français.

## Structure

- `index.html`: page unique (hero, étapes, comparatif, avis, lecteur d'exemple, FAQ, formulaire de commande)
- `css/style.css`: styles
- `js/main.js`: lecteur audio, formulaire (front-end uniquement), année du pied de page
- `assets/exemple.mp3`: à ajouter, fichier audio de l'exemple

## Lancer en local

Ouvrez `index.html` dans un navigateur, ou lancez un serveur statique :

```
npx serve .
```

## À compléter avant la mise en ligne

- Les logos « Comme vu dans » et les avis clients sont des **emplacements réservés**. Remplacez-les uniquement par de vraies mentions presse et de vrais avis.
- Ajoutez `assets/exemple.mp3`.
- Branchez le formulaire de commande à votre backend ou à un paiement (Stripe, PayPal).
- Rédigez les pages CGV et mentions légales.
