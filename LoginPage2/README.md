# Challenge CTF : Login Page2

Ce challenge consiste à réussir à accéder à une page protégée par un système de mot de passe. Le défi est de trouver le mot de passe correct en comprenant le fonctionnement du code JavaScript.

## Description du challenge

- L'utilisateur est présenté avec une page de connexion contenant un champ de mot de passe et un bouton "Submit".
- Le mot de passe requis pour accéder à la page protégée est généré de manière dynamique en utilisant un algorithme basé sur l'heure actuelle et des valeurs existantes.
- L'heure actuelle est utilisée pour calculer une combinaison unique de l'heure et des valeurs existantes afin de générer le mot de passe.
- L'utilisateur doit saisir le mot de passe correct dans le champ de mot de passe pour valider son accès.

## Instructions

1. Ouvrez la page de connexion `index.html` dans un navigateur.
2. Remarquez que le mot de passe change en temps réel en fonction de l'heure actuelle.
3. Analysez le code JavaScript dans le fichier `script.js` pour comprendre comment le mot de passe est généré.
4. Utilisez vos connaissances du code et l'heure actuelle pour déterminer le mot de passe correct.
5. Saisissez le mot de passe dans le champ de mot de passe et cliquez sur "Submit".
6. Si le mot de passe est correct, vous serez redirigé vers la page `success.html` où vous trouverez le flag.
7. Si le mot de passe est incorrect, vous serez redirigé vers la page `error.html`.

## Conseils

- Observez attentivement le code JavaScript pour comprendre les étapes de génération du mot de passe.
- Utilisez la console du navigateur pour afficher l'heure actuelle et effectuer des tests pendant le défi.
- Pensez à la façon dont les valeurs existantes sont combinées avec l'heure pour obtenir le mot de passe.

## Flag

Le flag à trouver est : `01253{Flag_here}`


Bonne chance et amusez-vous bien !
