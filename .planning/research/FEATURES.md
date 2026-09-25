# Feature Research

**Domain:** Portfolio personnel audiovisuel / créatif — profil « vidéo d'abord, polyvalent MMI », cible recruteurs FR pour une alternance de chargée de communication
**Researched:** 2026-09-21
**Confidence:** MEDIUM-HIGH (pratiques métier convergentes sur plusieurs sources indépendantes ; faible sur les chiffres précis de temps d'attention recruteur, très variables selon les sources)

> Doc rédigé en français (cohérence avec `PROJECT.md`). Les libellés de catégorie restent en anglais (`Table Stakes` / `Differentiators` / `Anti-Features`) pour le consommateur aval.

---

## Contexte de décision (le « brief » implicite)

Trois faits structurent tout le reste :

1. **Le temps d'examen est très court.** Les estimations publiées vont de 7 s (section héro seule) à ~30 s (premier tri) et ~55 s pour décider d'un entretien en combinant CV + portfolio. Les chiffres exacts sont peu fiables (sources LinkedIn/blogs, pas d'étude arbitrée) — mais la convergence directionnelle est nette : **le positionnement doit être lisible sans scroll et sans clic** (confiance MEDIUM sur les chiffres, HIGH sur la direction).
2. **En France, sur un profil junior, le recruteur cherche des preuves, pas des promesses.** « Ton diplôme ouvre la porte, mais tes réalisations te font entrer » — les guides FR insistent sur : contexte/brief, rôle personnel dans l'équipe, méthode et outils, et une sélection resserrée (5 à 10 projets) plutôt qu'un dépôt exhaustif. (CESACOM, MEDIUM)
3. **Le poste visé est polyvalent, la spécialité est vidéo.** Les offres d'alternance chargé·e de com' FR 2026 demandent explicitement : création de contenus courts (reels, interviews, reportages), adaptation multi-plateformes, suite Adobe + Canva, réseaux sociaux, rédaction multi-supports. La spécialisation vidéo n'est donc pas un hors-sujet à cacher : **c'est le différenciateur exploitable**, à condition que la polyvalence reste visible. (Narratiiv / offres Indeed-LBA, MEDIUM)

**Conséquence pour l'architecture de features :** le site doit répondre à 4 questions dans l'ordre, chacune « au-dessus » de la suivante — *Qui ? → Qu'est-ce qu'elle sait faire ? → Est-ce bon ? → Comment je la contacte ?* Toute feature qui ne sert pas une de ces 4 questions est candidate à la suppression.

---

## Feature Landscape

### Table Stakes (Users Expect These)

Sans ça, le recruteur part ou disqualifie. Aucun bonus à les avoir, pénalité forte à les rater.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| **Ligne de positionnement au-dessus de la ligne de flottaison** (nom + rôle visé + spécialité, sans scroll) | C'est la seule chose lue dans les 7 premières secondes. Un héro « joli mais muet » = le recruteur ne sait pas quoi faire d'elle | LOW | Texte, pas de code. Formule recommandée : `[Rôle] + [type de travail] + [pour qui]`. Slot `hero.positioning` (voir § Text slots) |
| **Mention d'objectif explicite « recherche une alternance »** (poste + rentrée + rythme + mobilité) | Spécifique FR : sans rythme ni dates, le recruteur ne peut pas évaluer la compatibilité et passe au candidat suivant | LOW | Micro-bloc 1 ligne dans le héro ou juste sous le portrait. Coût quasi nul, valeur très haute |
| **Showreel / vidéo signature immédiatement visible et identifiée comme telle** | Sur un profil vidéo, le reel *est* le CV. Les sources métier sont unanimes : au-dessus de la ligne de flottaison, bouton play large, libellé explicite (« Showreel 2026 »), pas une vignette muette | MEDIUM | Durée cible 60–90 s (Vimeo, Modulify) ; 30–75 s pour un « trailer » d'après OlafMotion. Existant : `hero.mp4` 17 s — c'est une **ambiance**, pas un reel. Voir § Reel : décision |
| **Contrôle utilisateur sur la vidéo de fond** (pause/play accessible au clavier, jamais de son au chargement) | WCAG 2.2.2 : toute animation/vidéo > 5 s doit pouvoir être stoppée. Autoplay sonore = rebond immédiat | MEDIUM | `autoplay muted loop playsinline` + `poster` + bouton pause atteignable en ≤ 2 tabulations |
| **`poster` sur chaque `<video>`** | Sans poster, une vidéo non chargée = rectangle noir ; sur mobile 4G c'est l'état par défaut | LOW | Dépend du ré-encodage (extraction d'une frame nette par vidéo) |
| **Rôle explicite par projet** (« Réalisation & montage », pas « Membre du groupe ») | Sur des projets de groupe (SAE), le recruteur doit savoir *ce qu'elle* a fait. Les DA considèrent la revendication floue d'un projet collectif comme un signal négatif | LOW | Le champ `role` existe déjà ; `sae-1` dit « Membre du groupe » → à réécrire |
| **Contexte / brief par projet** (commanditaire, contrainte, objectif) | Sans contexte, impossible d'évaluer la compétence : « le portfolio montre le résultat, le contexte montre la personne » | LOW | 2–4 lignes suffisent (OlafMotion : *quoi / pourquoi / mon rôle / où ça vit*) |
| **Outils utilisés, affichés par projet** | Les offres FR listent les outils comme critère de filtrage ; le recruteur cherche « Premiere », « Adobe », « Canva » à l'œil | LOW | Existant (`tools`). Passage texte → logos = amélioration, pas prérequis |
| **Grille de projets avec vraies vignettes** (poster frame du film, pas une icône générique) | 4 projets partagent aujourd'hui la même vignette générique `portfolio-thumbnail-0X` → lecture « projets interchangeables » | LOW | Une image représentative par projet. Impact perçu très supérieur au coût |
| **Page projet avec URL propre et partageable** | Les recruteurs transfèrent des liens en interne (« regarde ce profil ») | LOW | Déjà en place (`/projects/$projectId`). Ne pas revenir à un modal sans URL |
| **Contact en clair : email textuel + LinkedIn + formulaire** | Un formulaire seul bloque le recruteur qui veut copier l'adresse dans son ATS ou faire suivre. Le contact introuvable est l'erreur n°1 citée dans les revues de portfolio | LOW | Formulaire EmailJS existant → ajouter l'adresse en texte sélectionnable + LinkedIn |
| **CV PDF téléchargeable** | En France, l'alternance passe par un dossier : le recruteur a besoin d'un PDF à joindre/transmettre (souvent à l'OPCO/CFA aussi). La vidéo CV ne le remplace pas, elle le complète | LOW | 1 lien, < 1 Mo. Nommer le fichier `CV_Lyna_Rebahi_Alternance_Communication.pdf` — convention explicitement recommandée côté FR pour qu'il se retrouve parmi des dizaines de candidatures. Prévoir aussi téléphone + LinkedIn (oublis fréquents cités) |
| **Lisibilité mobile** | Les liens de candidature s'ouvrent majoritairement sur téléphone ; les guides FR citent explicitement « vérifier la lisibilité sur mobile » | MEDIUM | Inclut : vidéos qui ne débordent pas, texte ≥ 16 px, cibles tactiles, pas de hover-only |
| **Aucun lien / média cassé** | « Broken demo links = instant red flag » ; embeds morts = crédibilité détruite | LOW | Existant à corriger : `extraitpubSAE1.mp4`, `festival-flyer.jpg`, `festival-goodies.jpg` |
| **Chargement rapide** | Un portfolio vidéo qui met 20 s à s'afficher a déjà perdu sa fenêtre de 7 s. C'est le cœur du milestone (525 Mo → < 60 Mo) | HIGH | Lazy-load hors écran, `preload` limité au héro, images en WebP/AVIF dimensionnées |
| **Métadonnées OG correctes** (titre, description, image) | Le lien est partagé en DM/Slack/mail : l'aperçu est parfois la *vraie* première impression | LOW | Existant partiellement dans `__root.tsx` → vérifier l'image OG (une frame de reel, pas un logo) |
| **Orthographe et cohérence graphique irréprochables** | Cité comme erreur rédhibitoire dans le guide FR : une faute sur un portfolio de chargée de com' = signal de non-rigueur | LOW | Relecture. `projects.ts` contient au moins une coquille (« ombrestion », « j'ai voulu exploré ») |

### Differentiators (Competitive Advantage)

Ce qui la distingue des 40 autres portfolios MMI reçus le même mois.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Mise en scène « générique de film » assumée** (métadonnées en coins, cartons de section, grain, cadre écran) | *Le médium est le message* : un portfolio qui ressemble à un film prouve la spécialité vidéo avant même qu'on lise une ligne. C'est la traduction directe de la Core Value « comprendre en 3 secondes » | MEDIUM | Danger : si c'est décoratif et non informatif, ça bascule en anti-feature. Règle : **chaque ornement porte une information réelle** (année, durée, rôle, format, lieu) |
| **Bloc crédits type fin de film par projet** — `Réalisation · Cadre · Montage · Étalonnage · Son · Durée · Année · Contexte` | Répond exactement à la demande métier « soyez explicite sur votre contribution » avec un habillage qui appartient au métier visé | LOW | Données structurées, pas du décor. Nécessite d'étendre le type `Project` |
| **Vignettes projet animées** (boucle silencieuse 3–8 s au survol / à l'entrée dans le viewport) | Rend une grille de portfolio vidéo « vivante » ; pratique explicitement recommandée pour les grilles de projets motion | MEDIUM-HIGH | Coût poids réel. Version lite : 1 seule carte animée (le projet phare), les autres en poster. Doit être désactivé sous `prefers-reduced-motion` et sur mobile |
| **Bande « process » par projet vidéo** : storyboard → tournage/BTS → montage → final | C'est *la* chose qui distingue un étudiant crédible d'un étudiant qui a un joli rendu. Les guides FR et motion convergent : les recruteurs veulent voir la démarche, les obstacles, les solutions | MEDIUM | Elle a déjà les assets SkøllRub (empattage, filtration, mise en bouteille). Nécessite un modèle de données `sections[]` |
| **Slot « Ce que j'ai appris / ce que je referais autrement »** par projet | Sur un profil junior, le recruteur achète une trajectoire, pas un track record. L'auto-critique lucide est le signal de maturité le moins coûteux à produire | LOW | 20–40 mots. Puissant *seulement* si sincère — interdit de générer ce texte |
| **Projets vidéo en tête + filtre par défaut sur « Vidéo »** | Hiérarchise la spécialité sans supprimer la polyvalence : le recruteur voit vidéo d'abord, découvre le reste en un clic | LOW | Décision déjà actée dans `PROJECT.md`. Attention à ne pas enterrer branding/web : ce sont eux qui vendent le poste de chargée de com' |
| **Grille de logiciels groupée par métier** (Vidéo · Design · Web) sans indicateur de niveau | Lecture instantanée « elle couvre la chaîne » ; le groupement raconte la polyvalence mieux qu'une liste alphabétique de 13 icônes | LOW-MEDIUM | Voir § Logos & niveaux pour la décision détaillée. Dépend des assets logos fournis par Lyna |
| **Vidéo CV cadrée et légendée** (« Ma candidature en 60 secondes », durée affichée, sous-titrée) | Une vidéo CV *étiquetée* est un atout sur un poste de com' vidéo ; une vidéo CV non étiquetée est un risque (le recruteur ne sait pas s'il doit investir 3 min) | LOW | Existant (23,1 Mo) → ré-encodage + poster + libellé + durée affichée. Sous-titres incrustés ou `.vtt` : beaucoup regardent en muet |
| **Embed YouTube en façade** (image cliquable → iframe chargée à la demande) | Un embed YouTube standard charge **~1,3 Mo compressés sur ~22 requêtes vers 8–10 domaines, avant même le clic sur play**, et ne partage rien entre embeds. La façade garde le player officiel sans le coût | MEDIUM | Motif `lite-youtube` (Paul Irish) : poster `<img>` + bouton play → injection de l'iframe au clic ; ~100 Ko et ressources partagées. Gains mesurés publiés : LCP 8,8 s → 3,8 s, TTI 6,3 s → 3,3 s. Confiance HIGH sur le principe, à re-mesurer au build |
| **Planches de charte graphique en galerie légendée** (Tafsut) | Transforme un PDF que personne n'ouvre en preuve consultable en 5 s ; montre la rigueur « charte » attendue en com' | MEDIUM | Extraction PDF → 6–8 images légères + légende par planche (logo / palette / typo / affiche / billets / goodies / signalétique) |
| **Export Adobe Animate en « bonus interactif » click-to-load** | Une expérience interactive dans un portfolio étudiant est rare et mémorable — à condition qu'elle ne bloque pas la page | MEDIUM | Poster + bouton « Lancer l'animation » → iframe. Prévoir un fallback vidéo (capture écran de l'animation) pour mobile/iOS |
| **Respect de `prefers-reduced-motion`** | Différenciateur *narratif* : elle a un projet « prototype accessible » — le site doit prouver qu'elle applique ce qu'elle a appris. Sinon le projet accessibilité se retourne contre elle | LOW | Poster statique + arrêt des boucles. Argument à mentionner dans le texte du projet accessibilité |
| **Un « angle » assumé dans le reel** (une ambiance, un rythme, une signature de montage) | Les sources reel-first sont catégoriques : un reel qui mélange tout dit « je ne suis le spécialiste de personne ». Un reel de 60 s avec une identité bat un best-of hétéroclite de 3 min | MEDIUM | Choix éditorial de Lyna, pas une feature technique — mais le site doit offrir l'emplacement |

### Anti-Features (Commonly Requested, Often Problematic)

À **ne pas construire**. Les 6 premières sont les « tells » 2026 d'un site généré/templaté.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| **Barres de niveau / pourcentages / étoiles par logiciel** (« Premiere 90 % ») | Ça « remplit » la section compétences et ça fait pro | Échelle inventée sans référentiel ; les recruteurs le lisent comme du remplissage et comme « plus concernée par le design que par le fond » ; auto-déclaratif donc sans valeur probante | Logos groupés par métier, **sans niveau**. La preuve du niveau est dans les crédits projet (« montage 4 min, étalonnage DaVinci ») |
| **Mur de 13+ badges d'outils sur une seule ligne** | « Je maîtrise tout » | Lu comme de l'exagération (red flag documenté) ; dilue les 3 outils qui comptent vraiment | 2 niveaux : `Outils principaux` (4–5 : Premiere, After Effects, Photoshop, Illustrator, DaVinci) et `Aussi à l'aise avec` (le reste, plus petit, en gris) |
| **Copy « passionnée / créative / polyvalente »** | Ça se dit partout, ça semble obligatoire | Formulation n°1 identifiée comme vide par les hiring managers ; indiscernable d'un texte généré ; ne différencie de rien | Formule `Rôle + type de travail + pour qui` (§ Text slots). « Étudiante passionnée par le digital » → « Je réalise et je monte — des formats courts aux clips » |
| **Badges flottants décoratifs (« 20 ans »), pétales, particules, curseur personnalisé, ornements de coins** | « Ça donne de la personnalité » | Exactement l'inventaire des tells d'un template 2026 ; coût perf et accessibilité (re-render sur `mousemove`) ; le curseur custom casse l'affordance et le tactile ; ne porte aucune information | Suppression (déjà actée). Remplacer par des **métadonnées réelles** en coins : `RÉAL · MONTAGE — PARIS — 2026` façon générique |
| **Métriques inventées sur des projets étudiants** (« +300 % d'engagement ») | Les guides « portfolio qui convertit » réclament des chiffres | Sur un projet de cours il n'y a pas de KPI réel ; un recruteur com' détecte le chiffre creux instantanément → perte de confiance sur tout le reste | Contexte réel et vérifiable : « brief UPEC, campagne éco-citoyenne, affiche A2 300 dpi » — la précision remplace le chiffre |
| **Témoignages / logos clients fabriqués ou « fictifs »** | Preuve sociale | Faux = disqualifiant ; « festival imaginaire » présenté comme client réel crée le doute | Étiqueter honnêtement : `Projet académique — commanditaire fictif` / `Commanditaire : UPEC`. L'honnêteté est un signal positif à ce niveau d'expérience |
| **Écran de chargement / animation d'intro avant le reel** | « Effet cinéma » | Dépense la fenêtre d'attention de 7 s sur du vide ; sur mobile 4G c'est un mur | Le générique se joue *sur* la vidéo qui tourne déjà, jamais avant |
| **Autoplay avec son, ou vidéo de fond sans pause** | Immersif | WCAG 2.2.2 ; rebond immédiat si le recruteur est en open space | Muet + `playsinline` + bouton pause + bouton son optionnel |
| **Carrousel de plusieurs vidéos dans le héro** | Montrer plusieurs facettes | Divise l'attention, multiplie le poids par N, et aucune des vidéos n'est vue en entier | Une vidéo héro, une seule. La variété vit dans la grille de projets |
| **Scroll-jacking / transitions lourdes « pellicule » pilotées au scroll** | Codes cinéma | Casse le scroll natif, insupportable sur trackpad/mobile, pénalise l'INP, et empêche le recruteur pressé d'atteindre le contact | Transitions CSS courtes (< 300 ms) sur l'entrée des sections uniquement ; le scroll reste natif |
| **Dépôt exhaustif de tous les projets de la formation** | « Plus il y en a, mieux c'est » | Erreur explicitement citée côté FR : la surcharge dilue les meilleures pièces ; le lecteur juge sur la plus faible | 5 à 10 projets max, les 3 meilleurs en premier. Parquer les autres (ne pas les supprimer du data, juste ne pas les publier) |
| **Modal de projet sans URL** | Navigation « fluide » | Non partageable, non indexable, non retour-arrière ; or les recruteurs transfèrent des liens | Pages `/projects/$id` (déjà le cas). `ProjectModal.tsx` → supprimé |
| **PDF lourd embarqué (charte 23 Mo) ou téléchargement forcé** | « La charte complète est dedans » | Personne ne télécharge 23 Mo depuis un mobile ; dépasse aussi la logique poids du milestone | Planches extraites en images légères + lien PDF optionnel hébergé ailleurs si vraiment nécessaire |
| **Formulaire de contact comme seul moyen de contact** | Anti-spam | Le recruteur veut copier l'email dans son outil ou répondre depuis sa boîte | Email en texte + LinkedIn + formulaire (les trois) |
| **Dark mode toggle, version EN, blog, CMS, chatbot / « IA qui répond à ma place »** | Ça fait moderne / technique | Coût élevé, zéro valeur pour le recruteur FR ciblé, et le chatbot est en 2026 un marqueur fort de site généré | Hors périmètre (déjà acté dans `PROJECT.md` pour EN/CMS) |
| **Section « Services » / grille tarifaire freelance** | Copié des portfolios freelance | Contresens de cible : elle cherche une alternance, pas des clients. Brouille le message | Bloc « Ce que je cherche » : poste, rythme, dates, mobilité |

---

## Décisions de conception détaillées

### Reel : que faire de `hero.mp4` (17 s) ?

Les sources métier demandent un reel de **60–90 s** identifié comme tel. Le site actuel a une vidéo d'ambiance de 17 s en fond.

**Recommandation (confiance MEDIUM-HIGH) : séparer les deux rôles.**

| Élément | Rôle | Traitement |
|---------|------|------------|
| Vidéo de fond héro (17 s, ré-encodée ~3 Mo) | **Ambiance** — prouve « c'est une vidéaste » en 1 s | Muette, bouclée, `poster`, pause accessible, texte lisible par-dessus (voile/gradient) |
| Showreel 60–90 s | **Preuve** — prouve « elle sait monter » | Slot dédié, bouton play explicite « Showreel — 1:12 », sonore au clic. À produire par Lyna |

Si le showreel n'existe pas encore : **prévoir l'emplacement, ne pas le simuler**. Un slot vide est corrigeable en 10 min quand la vidéo arrive ; un site sans emplacement demande une refonte. Fallback intermédiaire acceptable : promouvoir le projet vidéo le plus fort au rang de « pièce d'ouverture » juste sous le héro.

### Logos logiciels : grille globale, chips par projet, ou les deux ?

**Les deux, avec des rôles distincts** (confiance MEDIUM — pratique observée, pas de source normative) :

| Emplacement | Contenu | Pourquoi |
|-------------|---------|----------|
| Section « Compétences » (page d'accueil) | Grille groupée en 3 colonnes : **Vidéo** (Premiere, After Effects, DaVinci, CapCut) · **Design** (Photoshop, Illustrator, InDesign, Lightroom, Animate, Canva) · **Web & UX** (Figma, HTML/CSS, VS Code) | Le groupement raconte la polyvalence ; la 1ʳᵉ colonne affirme la spécialité |
| Fiche projet | 2 à 5 logos, uniquement ceux réellement utilisés, en petit, à côté du rôle | C'est là que le logo devient une preuve et non une déclaration |

**Sans aucun indicateur de niveau** (ni barre, ni %, ni étoiles, ni « débutant/confirmé »). Si un niveau doit transparaître : par l'**ordre** (outils principaux d'abord) et par la **taille** (secondaires plus petits/gris) — pas par un chiffre.

**Contrainte d'assets :** les logos Adobe ne sont pas librement redistribuables. Prévoir des placeholders nommés (`/assets/logos/premiere-pro.svg`, …) avec un rendu dégradé propre (monogramme « Pr » dans un carré aux couleurs de la palette) pour que le site reste présentable même si Lyna n'a pas encore fourni les fichiers. **Ne jamais afficher un carré vide ou une icône cassée.**

### Fiche projet audiovisuel : ordre canonique des blocs

Ordre recommandé (convergence OlafMotion / School of Motion / guides FR — confiance MEDIUM-HIGH) :

```
1. Titre + méta (année · durée · catégorie · contexte)      ← 1 ligne, façon carton
2. LE MÉDIA PRINCIPAL (vidéo, plein cadre, poster + play)   ← jamais sous le texte
3. Crédits / rôle (Réalisation · Montage · …) + logos       ← 1 bloc compact
4. Le brief en 2–4 lignes (quoi / pourquoi / pour qui)
5. Process : storyboard → BTS → stills, en galerie légendée
6. « Ce que j'ai appris » (2–3 lignes)
7. Lien externe (YouTube, Figma, site) + retour aux projets
```

Règle : **le média avant le texte, toujours.** Un recruteur qui doit lire avant de voir sur un portfolio vidéo est déjà parti.

Variantes par type de média :
- **YouTube** → façade click-to-load, ratio 16:9 réservé (pas de layout shift)
- **MP4 auto-hébergé** → `<video controls preload="none" poster=…>`, jamais d'autoplay hors héro
- **Galerie d'images** → mosaïque + légende par image (la légende fait le travail de preuve)
- **Animate interactif** → carte « bonus » avec poster + bouton, iframe injectée au clic, hauteur fixée
- **Planches de charte** → galerie horizontale scrollable, 1 légende par planche

---

## Text slots (emplacements rédactionnels)

Lyna rédige. Le code livre des emplacements **nommés, contraints et accompagnés d'une consigne courte visible en dev** (placeholder + commentaire dans `projects.ts` / le composant). Objectif : la consigne guide sans écrire à sa place.

| Slot | Longueur cible | Consigne (à afficher en placeholder) | À bannir |
|------|----------------|--------------------------------------|----------|
| `hero.name` | 2–3 mots | Prénom + nom | — |
| `hero.positioning` | **8–14 mots, 1 ligne** | `[Ce que je fais] + [sur quels formats] + [pour qui]`. Doit pouvoir se dire à voix haute | « passionnée », « créative », « polyvalente », « univers » |
| `hero.availability` | 1 ligne, ~12 mots | Poste visé · rentrée · rythme · mobilité. Ex. type : `Alternance chargée de communication — rentrée 2026 · rythme 3j/2j · Île-de-France` | Formulations vagues (« à la recherche d'opportunités ») |
| `hero.reelLabel` | 3–5 mots + durée | `Showreel — 1:12` | « Voir plus », « Découvrir » |
| `about.intro` | **40–70 mots** | Qui je suis, d'où je viens (MMI), ce qui m'a menée à la vidéo. 1ʳᵉ personne, phrases courtes | Le récit d'enfance, la liste de matières |
| `about.specialisation` | **25–40 mots** | Ce que je fais le mieux et ce que ça donne concrètement (réalisation, montage, rythme, narration) | L'énumération de logiciels (ils sont déjà affichés) |
| `about.polyvalence` | **20–35 mots** | Ce que j'apporte en plus sur un poste de com' : design, branding, web, rédaction | « touche-à-tout » |
| `about.projection` | **15–30 mots** | Où je vais (master cinéma) et pourquoi ça sert l'entreprise maintenant | Un projet qui ressemble à « je pars dans 1 an » |
| `project.hook` (= `shortDescription`) | **10–16 mots** | Une phrase qui donne envie de cliquer. Concret, au présent | « Un projet réalisé dans le cadre de… » |
| `project.context` | **30–50 mots** | Commanditaire (ou « commanditaire fictif »), objectif, contrainte principale | Le nom du cours sans l'objectif |
| `project.role` | **3–8 mots** | Verbes de métier : réalisation, cadre, montage, étalonnage, DA, illustration | « Membre du groupe », « Participation » |
| `project.process` | **40–80 mots** | Comment je m'y suis prise, et le moment où ça a coincé | Le tutoriel technique |
| `project.learned` | **20–40 mots** | Ce que j'en retire / ce que je referais autrement | Le bilan flatteur sans aspérité |
| `project.credits` | liste | `Réalisation · Cadre · Montage · Étalonnage · Son · Musique` + qui a fait quoi sur les projets de groupe | S'attribuer le projet entier |
| `contact.cta` | 1 phrase, ≤ 20 mots | Ce que je propose + comment me joindre | « N'hésitez pas à me contacter » |
| `meta.description` | **140–160 caractères** | Reprend `hero.positioning` + « alternance » (c'est ce qui s'affiche dans un partage de lien) | Le nom du site seul |

**Règle d'implémentation :** chaque slot est une constante nommée, commentée avec sa consigne et sa longueur cible, groupée dans un seul fichier de contenu (ou dans `projects.ts` pour le per-projet) — Lyna doit pouvoir tout réécrire sans ouvrir un composant React.

---

## Feature Dependencies

```
[Ligne de positionnement + dispo]
    └──alimente──> [Métadonnées OG] ──> [Aperçu de lien partagé]

[Pipeline de ré-encodage médias]
    ├──requiert──> [Extraction de poster frames]
    │                  ├──requiert──> [Vidéo héro avec poster + pause]
    │                  ├──requiert──> [Vignettes projet réelles]
    │                  ├──requiert──> [Façade YouTube click-to-load]
    │                  └──requiert──> [Image OG]
    └──requiert──> [Vidéo CV < 25 Mio]  (contrainte Cloudflare, bloquante)

[Vignettes projet réelles]
    └──requiert──> [Vignettes animées au survol]   (boucles courtes dérivées)

[Modèle de données étendu : Project.sections[] + credits[]]
    ├──requiert──> [Suppression des branches project.id === "..." dans $projectId.tsx]
    ├──permet────> [Bande process storyboard → BTS → final]
    ├──permet────> [Bloc crédits type générique]
    └──permet────> [Galerie planches de charte (Tafsut)]

[Extraction du PDF charte graphique]
    └──débloque──> [Projet festival passé en "terminé"]  (2 médias manquants aujourd'hui)

[Assets logos logiciels fournis par Lyna]
    ├──requiert──> [Placeholders nommés avec rendu dégradé]
    ├──permet────> [Grille compétences groupée par métier]
    └──permet────> [Chips logos par projet]  (remplace les tags texte)

[prefers-reduced-motion]
    ──conflit──> [Vidéo de fond en autoplay]
    ──conflit──> [Vignettes animées]
        → résolution : chemin poster statique obligatoire

[Suppression des effets déco (pétales, curseur, particules, badge)]
    ──débloque──> [Budget de perf pour les vignettes animées]
    ──débloque──> [Suppression des re-render sur mousemove]
```

### Dependency Notes

- **Poster frames → presque tout le reste.** L'extraction des posters est la dépendance la plus transverse (héro, vignettes, façade YouTube, OG, Animate). À traiter comme une étape unique du pipeline médias, pas comme 5 tâches séparées.
- **`Project.sections[]` → process / crédits / galeries.** Les trois différenciateurs les plus forts (process, crédits, planches de charte) sont bloqués par le même refactor du modèle de données. Si le temps manque, ce refactor est le meilleur investissement unitaire — mais il est risqué en fin de semaine (665 lignes à démonter). Alternative de repli : ajouter les champs **en plus** des branches existantes et ne migrer que les 2 projets vidéo.
- **Logos ↔ assets externes.** La grille compétences dépend d'un livrable humain (Lyna). Le rendu dégradé (monogramme) n'est pas un « nice to have » : c'est ce qui rend la feature livrable sans elle.
- **Reduced-motion conflit autoplay.** Impossible de satisfaire les deux : le chemin « poster statique + bouton play » doit exister de toute façon (il sert aussi au fallback réseau lent et à iOS basse consommation). Le construire une fois, le réutiliser partout.
- **Vignettes animées vs poids.** Elles ne sont acceptables **qu'après** le ré-encodage global. Les activer avant = annuler le gain du milestone.
- **Filtre par défaut « Vidéo » ↔ message polyvalence.** Si le filtre masque branding/web par défaut, le recruteur com' peut conclure « elle ne fait que de la vidéo ». Résolution : ne pas filtrer par défaut — **ordonner** (vidéo en premier) et laisser tout visible.

---

## MVP Definition

### Launch With (v1 — présentable cette semaine)

- [ ] **Ligne de positionnement + bloc disponibilité dans le héro** — sans ça, le reste ne sert à rien ; coût quasi nul
- [ ] **Vidéo héro ré-encodée, poster, muette, pause accessible** — la promesse « vidéo en 3 secondes »
- [ ] **Ré-encodage global images + vidéos, suppression des doublons** — < 60 Mo, aucun asset > 25 Mio
- [ ] **Correction de tous les médias/liens cassés + relecture orthographique** — crédibilité binaire
- [ ] **Vraies vignettes par projet + projets vidéo en tête** — lisibilité de la spécialité dans la grille
- [ ] **Rôle explicite réécrit sur chaque projet (dont `sae-1`)** — le champ existe, c'est du texte
- [ ] **Contact : email en clair + LinkedIn + formulaire + CV PDF** — le recruteur doit pouvoir agir
- [ ] **Suppression des effets déco (pétales, curseur, badge, ornements, particules) et du code mort** — retire les tells + libère le budget perf
- [ ] **Text slots nommés avec consignes** — Lyna peut écrire sans toucher au React
- [ ] **Lazy-load hors écran + `preload` limité au héro** — le chargement rapide fait partie de la première impression
- [ ] **Métadonnées OG avec image = frame de vidéo** — le lien sera partagé

### Add After Validation (v1.x — semaine suivante)

- [ ] **Slot showreel 60–90 s** — dès que Lyna a monté le reel ; prévoir l'emplacement en v1
- [ ] **Grille de logos groupée par métier + chips logos par projet** — dès que les assets logos arrivent
- [ ] **Bloc crédits type générique** — déclenché par l'extension du type `Project`
- [ ] **Façade YouTube click-to-load** — dès qu'il y a ≥ 3 embeds sur une même page
- [ ] **Planches de charte Tafsut extraites + projet passé en terminé** — déclenché par l'extraction PDF
- [ ] **Bande process sur les 2 projets vidéo** — déclenché par `Project.sections[]`
- [ ] **Slot « ce que j'ai appris »** — texte, à remplir après les projets prioritaires
- [ ] **Vidéo CV relabellisée + sous-titrée + durée affichée**
- [ ] **Mini-book PDF (6–10 pages) généré depuis les mêmes contenus** — les guides FR décrivent le couple « version en ligne + version PDF » comme le standard de candidature alternance (à joindre au mail, à montrer en entretien hors connexion). Sur un profil vidéo c'est un support secondaire : planches + QR/liens vers les films, **jamais** un remplacement du site. Confiance LOW-MEDIUM sur la nécessité — à arbitrer avec Lyna selon ce que son CFA demande

### Future Consideration (v2+)

- [ ] **Vignettes animées au survol** — différenciateur réel mais coût poids/perf ; seulement une fois le budget médias stabilisé et mesuré
- [ ] **Animate interactif en click-to-load avec fallback vidéo** — dépend d'un test réel sur mobile iOS ; peut rester une simple capture en v1
- [ ] **Refactor complet `$projectId.tsx` en data-driven** — vrai gain de maintenance, risque élevé sur une échéance d'une semaine
- [ ] **Pages de projet par catégorie / page « Selected work »** — utile au-delà de ~10 projets, pas avant
- [ ] **Version EN, dark mode, blog, CMS** — hors périmètre confirmé

---

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Ligne de positionnement + disponibilité | HIGH | LOW | **P1** |
| Ré-encodage médias / poids | HIGH | HIGH | **P1** |
| Vidéo héro : poster + muet + pause | HIGH | MEDIUM | **P1** |
| Correction médias cassés + orthographe | HIGH | LOW | **P1** |
| Vraies vignettes + vidéo en tête | HIGH | LOW | **P1** |
| Rôle explicite par projet | HIGH | LOW | **P1** |
| Contact complet (email texte + LinkedIn + CV PDF) | HIGH | LOW | **P1** |
| Suppression effets déco + code mort | MEDIUM | LOW | **P1** |
| Text slots nommés avec consignes | HIGH | LOW | **P1** |
| Lazy-load + preload maîtrisé | MEDIUM | MEDIUM | **P1** |
| Métadonnées OG avec frame vidéo | MEDIUM | LOW | **P1** |
| Slot showreel 60–90 s | HIGH | LOW (slot) / externe (contenu) | **P2** |
| Grille logos groupée + chips par projet | MEDIUM | MEDIUM | **P2** |
| Bloc crédits type générique | HIGH | MEDIUM | **P2** |
| Façade YouTube click-to-load | MEDIUM | MEDIUM | **P2** |
| Planches de charte Tafsut | MEDIUM | MEDIUM | **P2** |
| Bande process (storyboard → BTS → final) | HIGH | MEDIUM | **P2** |
| Slot « ce que j'ai appris » | MEDIUM | LOW | **P2** |
| Vidéo CV relabellisée + sous-titrée | MEDIUM | LOW | **P2** |
| `prefers-reduced-motion` | MEDIUM | LOW | **P2** |
| Mise en scène « générique de film » (métadonnées en coins) | MEDIUM | MEDIUM | **P2** |
| Vignettes animées au survol | MEDIUM | HIGH | **P3** |
| Animate click-to-load + fallback | LOW | MEDIUM | **P3** |
| Refactor data-driven `$projectId.tsx` | LOW (utilisateur) / HIGH (maintenance) | HIGH | **P3** |

**Priority key:** P1 = indispensable pour montrer le site cette semaine · P2 = à ajouter dès que possible · P3 = plus tard

---

## Competitor Feature Analysis

| Feature | Portfolio « reel-first » d'un monteur pro | Projet Behance d'un motion designer | Portfolio type d'étudiant MMI FR | Notre approche |
|---------|-------------------------------------------|-------------------------------------|----------------------------------|----------------|
| Entrée de page | Reel 60–90 s plein écran, libellé, play visible | Image de couverture + titre, lecture au scroll | Héro décoratif + « Bonjour, je suis X, étudiante passionnée » | Vidéo d'ambiance **+ ligne de positionnement + objectif alternance** ; slot reel juste dessous |
| Nombre de projets | 3–6 « hero projects », 8–12 en « selected work » | 1 projet = 1 page longue | 8–15 projets de cours, qualité inégale | 5–10, **vidéo en premier**, ordre = argument |
| Structure de fiche projet | Vidéo → crédits → brief court | Cover → process → planches → final, très visuel | Description longue, média en bas, pas de rôle | **Média → crédits → brief → process → appris** |
| Rôle / crédits | Bloc crédits explicite (discipline + plans) | Souvent « Role: Art Direction, Animation » | Absent ou « projet de groupe » | Bloc crédits type générique de film, structuré en data |
| Compétences | Rarement une section ; les outils vivent dans les crédits | Tags Adobe en pied de projet | Grille d'icônes avec barres de niveau | Grille **groupée par métier, sans niveau** + chips par projet |
| Process visible | Peu (pro = on juge le résultat) | Beaucoup (c'est le format natif de Behance) | Quasi absent | **Beaucoup** — c'est là que se joue la crédibilité d'un junior |
| Contact | Formulaire + email + réseaux | Bouton « Hire me » Behance | Formulaire seul | Email texte + LinkedIn + formulaire + **CV PDF** |
| Décor | Sobre, la vidéo fait le spectacle | Nul (la plateforme impose le cadre) | Animations décoratives, curseur custom, particules | **Codes cinéma porteurs d'information**, zéro ornement gratuit |
| Preuve sociale | Logos clients réels | Compteur d'appréciations | Aucune | Contexte réel étiqueté (commanditaire UPEC, projet encadré) — **jamais de faux** |

---

## Confidence & Gaps

| Affirmation | Confiance | Base |
|-------------|-----------|------|
| Reel/vidéo au-dessus de la ligne de flottaison, libellé explicite | HIGH | Convergence Vimeo, School of Motion, OlafMotion, guides reel-first |
| Contexte + rôle + process par projet attendus côté FR | MEDIUM-HIGH | Guide FR portfolio com' étudiant + sources motion |
| Barres de niveau = signal négatif | MEDIUM-HIGH | Plusieurs sources RH concordantes ; l'essentiel du corpus porte sur le CV, pas le portfolio — la transposition au portfolio est un raisonnement, pas une mesure |
| Reel de 60–90 s | MEDIUM | Fourchettes légèrement divergentes selon les sources (30–75 s vs 60–90 s) |
| « 7 secondes » / « 30 secondes » d'attention recruteur | LOW sur le chiffre, HIGH sur la direction | Blogs et posts LinkedIn, aucune étude arbitrée retrouvée |
| Anti-features « tells IA » (bento générique, badges, copy « passionate ») | MEDIUM | Corpus 2026 sur les sites générés par IA ; convergent mais non académique |
| Curseur custom / particules perçus négativement par les recruteurs | LOW (perception) / HIGH (coût perf & accessibilité) | Aucune source RH directe trouvée ; l'argument solide est technique et accessibilité, pas esthétique. Décision déjà actée par Lyna |
| Grille logos groupée par métier > liste plate | LOW-MEDIUM | Pratique observée, pas de source normative |
| CV PDF attendu en plus du site pour une alternance FR | MEDIUM-HIGH | Confirmé par plusieurs guides FR de candidature alternance (France Travail, Indeed FR, Studi) : CV + LM en PDF, nommage explicite, portfolio en ligne **et** version PDF |
| Embed YouTube standard ≈ 1,3 Mo / 22 requêtes ; façade ≈ 100 Ko | HIGH | `paulirish/lite-youtube-embed`, Frontend Masters, corewebvitals.io — mesures concordantes, dont un test de mai 2026 |

**Gaps à lever plus tard :**
- Aucun retour recruteur français de première main n'a pu être collecté — le mieux serait de faire tester le site à 2 professionnels du réseau IUT/CFA avant envoi massif.
- La longueur optimale du reel pour un profil *étudiant* (vs pro) n'est documentée nulle part ; 60–90 s est une transposition.
- L'impact réel de l'export Adobe Animate sur mobile iOS n'est pas vérifié : à tester sur appareil avant de le promouvoir.

---

## Sources

**Métier vidéo / motion (MEDIUM-HIGH)**
- School of Motion — *5 Motion Design Portfolio Tips to Help You Get Hired* : https://schoolofmotion.com/blog/motion-design-portfolio-easier-to-hire-from (reel au-dessus de la ligne de flottaison, 2–4 projets, bloc crédits explicite, éviter les ornements décoratifs)
- OlafMotion — *How to present motion design work in a portfolio* : https://olafmotion.com/motion-knowledge/how-to-present-motion-design-work-in-a-portfolio/ (reel 30–75 s + case studies, 3–6 hero projects, description en 4 questions, boucles 3–8 s, pièges : surcharge, liens morts, absence de contexte)
- Vimeo Blog — *Video Editor Portfolio Guide with Real Examples* : https://vimeo.com/blog/post/video-editor-portfolio (showreel en page d'accueil, playlists thématiques, CTA multiples)
- Modulify — *Video Editor Portfolio Website* : https://modulify.ai/post/video-editor-portfolio-website (reel 60–90 s, 3–4 case studies, un reel = une niche)
- Fast.io — *How to Build a Motion Graphics Portfolio* : https://fast.io/resources/motion-graphics-portfolio/ (sections attendues : showreel, case studies, process)

**Portfolio FR / alternance communication (MEDIUM)**
- CESACOM — *Portfolio communication étudiant : étapes clés et erreurs à éviter* : https://www.cesacom.fr/actualites/portfolio-communication-etudiant-guide/ (5–10 projets, contexte/rôle/méthode/résultat, charte homogène, lisibilité mobile, erreurs : surcharge, absence de contexte, fautes, copie de style)
- Narratiiv — *Les compétences essentielles en communication pour réussir en 2026* : https://www.narratiiv.school/actualites/communication/competences-en-communication (formats courts, reels, suite Adobe + Canva, polyvalence, soft skills)
- Studi — *Portfolio en alternance : valoriser efficacement vos missions* : https://www.studi.com/fr/blog/la-vie-pro/portfolio-alternance-experience
- EPB — *CV alternance : ce que les recruteurs regardent vraiment* : https://www.epb.paris/cv-alternance/ (preuves, réalisations, outils, posture)
- France Travail — *Les démarches pour poser sa candidature en alternance* : https://www.francetravail.fr/actualites/le-dossier/alternance/les-demarches-pour-poser-sa-cand.html
- Indeed France — *CV en vue d'une alternance* : https://fr.indeed.com/conseils-carrieres/cv-lettres-motivation/cv-alternance (CV + LM en PDF, nommage `CV_Prenom_Nom_Alternance_X.pdf`, ne pas oublier téléphone et LinkedIn)

**Copy / positionnement (MEDIUM)**
- The Crit — *Writing Effective Taglines* : https://thecrit.co/resources/writing-effective-taglines (4 formules : Rôle+Problème, Action+Audience+Résultat, Spécialité+Point de vue, Parcours+Rôle ; bannir « passionate », « innovative »)
- The Crit — *20 Portfolio Tagline Examples + 5 Useful Formulas* : https://thecrit.co/resources/portfolio-tagline-examples (4–8 mots)
- mnml — *Portfolio Headline Examples* : https://mnml.page/blog/portfolio-headline-examples

**Anti-features / tells IA & niveaux de compétence (MEDIUM / LOW)**
- Hiration — *Stop Putting Skill Bars and Progress Graphics on Your Resume* : https://www.hiration.com/blog/skill-bars-resume/ (ResumeGo 2022 : aucun gain de rappel ; « filler », « focus sur le design plutôt que le fond »)
- Peter Kang — *Remove Those Silly Bars on Resumes* : https://www.peterkang.com/remove-those-silly-bars-on-resumes/
- DEV Community — *How to Break the AI-Generated UI Curse* : https://dev.to/a_shokn/how-to-break-the-ai-generated-ui-curse-your-guide-to-authentic-professional-design-2en (bento identiques, gradients sans caractère, « Hi, I'm a passionate developer », mur de 30 badges, liens morts)
- Envato Elements — *Portfolio design trends for 2026* : https://elements.envato.com/learn/portfolio-trends (contact introuvable = erreur fréquente ; portfolios hybrides site + plateformes)

**Performance des embeds vidéo (HIGH)**
- Paul Irish — `lite-youtube-embed` : https://github.com/paulirish/lite-youtube-embed (implémentation de référence de la façade)
- Frontend Masters — *YouTube Embeds are Bananas Heavy and it's Fixable* : https://frontendmasters.com/blog/youtube-embeds-are-bananas-heavy-and-its-fixable/ (~1,3 Mo par embed sans ressources partagées vs ~100 Ko partagés)
- corewebvitals.io — *Perfect YouTube Core Web Vitals* : https://www.corewebvitals.io/pagespeed/perfect-youtube-core-web-vitals
- Mugo Web — *Optimizing page load time with a YouTube facade* : https://www.mugo.ca/Blog/Optimizing-page-load-time-with-a-YouTube-facade (LCP 8,8 s → 3,8 s ; TTI 6,3 s → 3,3 s)

**Vidéo web / accessibilité (MEDIUM-HIGH)**
- Harvard Design System — *Autoplaying Hero Background Videos in Digital Design* : https://designsystem.harvardsites.harvard.edu/news/2025/02/autoplaying-hero-background-videos-digital-design (WCAG 2.2.2, bouton pause obligatoire, risques vestibulaires/photosensibilité)
- thoughtbot — *Can Auto-Playing Videos be Accessible?* : https://thoughtbot.com/blog/can-auto-playing-videos-be-accessible
- Mux — *How to Add Background Video to Your Website* : https://www.mux.com/articles/add-background-video-website-hls-performance (`autoplay muted loop playsinline`, poster, budget de poids)

**Temps d'attention recruteur (LOW — à considérer comme directionnel)**
- Webdesigner Depot — *30 Seconds to Impress* : https://webdesignerdepot.com/30-seconds-to-impress-8-expert-tips-to-ensure-your-portfolio-gets-noticed/
- Medium / ADPList — *Only 30 Seconds to Reject Your Portfolio* : https://adplist.substack.com/p/only-30-seconds-to-reject-your-portfolio

---
*Feature research for: portfolio audiovisuel personnel, cible alternance communication FR*
*Researched: 2026-09-21*
