## Feuille de route

Ce que nous allons encore construire. Ce qui est déjà prêt se trouve dans [Fonctionnalités](#recursos).
Les dates sont des prévisions et peuvent changer. Les suggestions et les priorités sont discutées sur notre
Discord, et chaque élément devient une pull request ouverte sur GitHub.

Les priorités viennent de ce qui revient le plus sur les forums et dans les tests d’autres distributions :
la peur qu’une mise à jour casse le système, les pilotes, installer des logiciels sans terminal et
entretenir son ordinateur sans être technicien.

- [x] **Jeux natifs**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Installez depuis la boutique. Au premier lancement, fournissez la ROM de votre propre cartouche ; les paquets ne contiennent aucune donnée de jeu.

### 28/09 – 08/11 · Des logiciels sans complication

- [ ] **Logithèque** : Flathub et les dépôts d’Arch au même endroit, avec notes et captures ; paquets AUR uniquement avec un avertissement
- [ ] **Ouvrir les programmes Windows** : en cliquant sur un .exe, une alternative Linux est proposée ou le programme est lancé avec Bottles/Wine
- [ ] **Jeux en un clic** : Steam, Proton et mode jeu, avec un avertissement pour les jeux dont l’anti-triche ne fonctionne pas sous Linux

### 09/11 – 13/12 · Entretenir son ordinateur

- [ ] **Moniteur système** (Ctrl + Shift + Esc) : processeur, mémoire, disque, réseau et carte graphique, liste des applications et processus, et bouton « Terminer »
- [ ] **Nettoyage** : caches, corbeille, paquets inutilisés, cache des mises à jour et runtimes Flatpak inutilisés, avec l’espace libéré affiché avant de confirmer
- [ ] **Carte du disque** : ce qui occupe de la place et les gros fichiers oubliés
- [ ] **Informations système** avec un bouton « Copier le rapport » pour demander de l’aide sur Discord ou sur les forums
- [ ] Flou et arrière-plan de la caméra avec un détourage de qualité (cheveux, casque et épaules)

### 14/12 – 31/01/2027 · Mettre à jour sans crainte

- [ ] **Point de restauration automatique** avant chaque mise à jour (btrfs), avec la possibilité de revenir en arrière directement depuis le menu de démarrage
- [ ] Bouton **« Revenir à hier »** dans les Paramètres et dans l’outil de mise à jour
- [ ] L’outil de mise à jour affiche les actualités d’Arch en langage simple et retient les mises à jour qui demandent une intervention manuelle
- [ ] **Gestionnaire de pilotes** : détecte la carte graphique (NVIDIA, AMD, Intel) et installe le bon pilote, en le gardant à jour avec le noyau

### 01/02 – 31/03/2027 · Le matériel du quotidien

- [ ] **Imprimantes et scanners** reconnus automatiquement, avec un écran simple pour les ajouter
- [ ] **Casques Bluetooth** : choisir entre la qualité audio et le micro, avec retour à la qualité après les appels
- [ ] **Batterie** : limite de charge à 80 % pour durer plus longtemps, profils d’énergie et santé de la batterie
- [ ] Mise à l’échelle fractionnaire nette (125 %, 150 %) dans toutes les applications, par écran

### 01/04 – 31/05/2027 · Intégration et apparence

- [ ] **Changer de disposition** en un clic : style macOS, style Windows ou Lingmo
- [ ] **Versions précédentes** des fichiers dans le gestionnaire de fichiers, comme avec Time Machine
- [ ] **Téléphone intégré** : notifications, fichiers et presse-papiers avec Android et iPhone (KDE Connect)
- [ ] **Comptes cloud** : Google Drive et OneDrive dans le gestionnaire de fichiers
- [ ] Copier le texte d’une capture d’écran (OCR)
- [ ] Installateur qui prévient au sujet de BitLocker et de Secure Boot lors d’une installation à côté de Windows

### À partir de juin 2027

- [ ] Assistant IA facultatif et privé (modèle local) : résumer, traduire et expliquer le texte sélectionné
- [ ] Contrôle parental : temps d’écran et heure du coucher
- [ ] Session Wayland
- [ ] ISO générée et testée automatiquement à chaque version
- [ ] Office et Adobe avec Windows intégré (WinBoat), pour ceux qui en ont besoin
