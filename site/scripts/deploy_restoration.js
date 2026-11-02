const fs = require('fs');
const path = require('path');

const siteDir = path.resolve('d:/ANTIGRAVITY/projets/site-genie/site');
const scriptsDir = path.join(siteDir, 'scripts');

// 1. Restore style.css with original design system + extensions
const origCss = fs.readFileSync(path.join(scriptsDir, 'original_style.css'), 'utf8');
const extensions = fs.readFileSync(path.join(scriptsDir, 'restore_first_presentation.js'), 'utf8');
// The restore_first_presentation.js already generated style.css, let's execute it
require('./restore_first_presentation.js');

// 2. Prepare real products HTML for index.html preview
const boutiquePreviewHtml = `                <!-- Section: Boutique Preview -->
                <section class="section">
                    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: var(--space-xl); flex-wrap: wrap; gap: var(--space-md);">
                        <div>
                            <h2 class="section__title" style="margin-bottom: var(--space-xs);">Programmes & Livres de Merlin SIMO</h2>
                            <p style="color: var(--text-medium); font-size: var(--fs-sm);">Des systèmes concrets basés sur les neurosciences pour libérer le potentiel d'apprentissage et de mémoire.</p>
                        </div>
                        <a href="boutique.html" style="font-family: var(--font-heading); font-weight: var(--fw-bold); color: var(--electric-blue); font-size: var(--fs-sm);">Consulter la boutique complète →</a>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr; gap: var(--space-xl);">
                        
                        <!-- Product 1 -->
                        <article class="product-horizontal">
                            <div class="product-horizontal__img-wrap">
                                <img src="images/eveillez-le-genie-de-votre-enfant.jpg" alt="Livre Éveillez le Génie de votre Enfant" class="product-horizontal__cover" loading="lazy">
                            </div>
                            <div class="product-horizontal__content">
                                <span class="card__category card__category--gold" style="align-self: flex-start; margin-bottom: var(--space-xs);">Édition Panafricaine Prestige</span>
                                <h3 style="font-size: var(--fs-lg); color: var(--text-dark); margin-bottom: 0.25rem;">
                                    <a href="boutique.html#eveillez-genie-enfant">Éveillez le Génie de votre Enfant</a>
                                </h3>
                                <p style="font-family: var(--font-heading); font-size: var(--fs-xs); font-weight: var(--fw-bold); color: var(--coral); margin-bottom: var(--space-sm);">
                                    La méthode ÉCLAT de 15 minutes par jour pour apprendre, s'exprimer et grandir avec confiance
                                </p>
                                <p class="card__excerpt" style="font-size: var(--fs-sm); color: var(--text-medium); margin-bottom: var(--space-md);">
                                    Un enfant épanoui aujourd'hui, un avenir meilleur demain ! Le protocole quotidien en 5 leviers (Écouter, Créer, Lire & parler, Apprendre par le jeu, Transformer en habitudes) pour révéler le génie de vos enfants sans pression.
                                </p>
                                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-md); margin-top: auto; border-top: 1px solid var(--border); padding-top: var(--space-md);">
                                    <a href="https://selar.com/l11bp7g11v" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">
                                        Commander sur Selar →
                                    </a>
                                    <a href="boutique.html#eveillez-genie-enfant" style="font-size: var(--fs-xs); font-weight: var(--fw-bold); color: var(--electric-blue);">
                                        En savoir plus ›
                                    </a>
                                </div>
                            </div>
                        </article>

                        <!-- Product 2 -->
                        <article class="product-horizontal">
                            <div class="product-horizontal__img-wrap">
                                <img src="images/boostez-votre-memoire-en-8-jours.jpg" alt="Livre Boostez votre Mémoire en 8 Jours" class="product-horizontal__cover" loading="lazy">
                            </div>
                            <div class="product-horizontal__content">
                                <span class="card__category card__category--gold" style="align-self: flex-start; margin-bottom: var(--space-xs);">Collection Performance & Neurosciences</span>
                                <h3 style="font-size: var(--fs-lg); color: var(--text-dark); margin-bottom: 0.25rem;">
                                    <a href="boutique.html#boostez-votre-memoire">Boostez votre Mémoire en 8 Jours</a>
                                </h3>
                                <p style="font-family: var(--font-heading); font-size: var(--fs-xs); font-weight: var(--fw-bold); color: var(--electric-blue); margin-bottom: var(--space-sm);">
                                    Le système pratique pour apprendre plus vite, retenir plus longtemps et ne plus oublier l'essentiel
                                </p>
                                <p class="card__excerpt" style="font-size: var(--fs-sm); color: var(--text-medium); margin-bottom: var(--space-md);">
                                    Un cerveau plus fort pour un meilleur demain ! 8 jours d'entraînement méthodique (15 minutes par jour) articulés autour de 4 piliers majeurs : Concentration, Méthodes, Mémorisation et Réussite.
                                </p>
                                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-md); margin-top: auto; border-top: 1px solid var(--border); padding-top: var(--space-md);">
                                    <a href="https://selar.com/0674970777" target="_blank" rel="noopener noreferrer" class="btn btn--gold btn--sm">
                                        Commander sur Selar →
                                    </a>
                                    <a href="boutique.html#boostez-votre-memoire" style="font-size: var(--fs-xs); font-weight: var(--fw-bold); color: var(--electric-blue);">
                                        En savoir plus ›
                                    </a>
                                </div>
                            </div>
                        </article>

                        <!-- Product 3 -->
                        <article class="product-horizontal" style="border: 1.5px solid var(--coral);">
                            <div class="product-horizontal__img-wrap">
                                <img src="images/mon-enfant-reussit-pack-3-en-1.jpg" alt="Mon Enfant Réussit Pack Complet 3 en 1" class="product-horizontal__cover" loading="lazy">
                            </div>
                            <div class="product-horizontal__content">
                                <span class="card__category card__category--coral" style="align-self: flex-start; margin-bottom: var(--space-xs);">Pack Complet 3 en 1</span>
                                <h3 style="font-size: var(--fs-lg); color: var(--text-dark); margin-bottom: 0.25rem;">
                                    <a href="boutique.html#pack-mon-enfant-reussit">Mon Enfant Réussit — Coffret Prestige</a>
                                </h3>
                                <p style="font-family: var(--font-heading); font-size: var(--fs-xs); font-weight: var(--fw-bold); color: var(--coral); margin-bottom: var(--space-sm);">
                                    Le programme quotidien pour aider votre enfant à apprendre plus vite, mieux mémoriser et progresser à l'école
                                </p>
                                <p class="card__excerpt" style="font-size: var(--fs-sm); color: var(--text-medium); margin-bottom: var(--space-md);">
                                    L'écosystème éducatif ultime : 100 ressources vidéo éducatives (Français, Maths, Sciences, Anglais, Méthodologie) + les 2 livres de référence de Merlin SIMO pour toute la famille.
                                </p>
                                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-md); margin-top: auto; border-top: 1px solid var(--border); padding-top: var(--space-md);">
                                    <a href="https://selar.com/sov955h77r" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm" style="background: var(--coral); border-color: var(--coral);">
                                        Commander le Pack sur Selar →
                                    </a>
                                    <a href="boutique.html#pack-mon-enfant-reussit" style="font-size: var(--fs-xs); font-weight: var(--fw-bold); color: var(--electric-blue);">
                                        En savoir plus ›
                                    </a>
                                </div>
                            </div>
                        </article>

                    </div>
                </section>`;

// Replace boutique preview in orig_index.html
let origIndex = fs.readFileSync(path.join(scriptsDir, 'orig_index.html'), 'utf8');
origIndex = origIndex.replace(
  /<!-- Section: Boutique Preview -->[\s\S]*?<\/section>/,
  boutiquePreviewHtml
);

fs.writeFileSync(path.join(siteDir, 'index.html'), origIndex, 'utf8');
console.log('Restored index.html with original layout and real shop products!');

// 3. Restore boutique.html with original styling and real products
const fullBoutiqueHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boutique — Programmes & Livres de Merlin SIMO</title>
    <meta name="description" content="Découvrez les programmes et ouvrages de Merlin SIMO : Éveillez le Génie de votre Enfant, Boostez votre Mémoire en 8 Jours et le Pack Complet 3 en 1.">
    
    <meta property="og:title" content="Boutique — Ouvrages & Programmes de Merlin SIMO">
    <meta property="og:description" content="Méthodes pratiques pour libérer le potentiel d'apprentissage des enfants et démultiplier les capacités de mémoire des adultes.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="fr_FR">
    <meta name="author" content="Merlin SIMO">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,700;1,400&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="reading-progress" id="readingProgress"></div>

    <!-- Header -->
    <header class="header">
        <div class="container header__inner">
            <a href="index.html" class="header__logo">Merlin <span>SIMO</span></a>
            <nav class="nav" aria-label="Navigation principale">
                <ul class="nav__list">
                    <li class="nav__item"><a href="index.html" class="nav__link">Accueil</a></li>
                    <li class="nav__item"><a href="articles.html" class="nav__link">Articles</a></li>
                    <li class="nav__item"><a href="boutique.html" class="nav__link nav__link--active">Boutique</a></li>
                    <li class="nav__item"><a href="a-propos.html" class="nav__link">À propos</a></li>
                    <li class="nav__item"><a href="contact.html" class="nav__link">Contact</a></li>
                </ul>
            </nav>
            <button class="hamburger" aria-label="Menu mobile" aria-expanded="false">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1 class="page-header__title">Boutique & Programmes de Réussite</h1>
            <p class="page-header__subtitle">Des méthodes rigoureuses basées sur les neurosciences appliquées pour éveiller le génie de vos enfants et démultiplier votre propre mémoire.</p>
        </div>
    </section>

    <!-- Content Layout -->
    <main class="main-content">
        <div class="container two-col" style="padding-top: var(--space-3xl); padding-bottom: var(--space-4xl);">
            
            <!-- Left Main Column (Products) -->
            <div class="content-left">
                
                <p style="color: var(--text-medium); font-size: var(--fs-md); margin-bottom: var(--space-2xl); line-height: 1.8;">
                    Chaque ouvrage et coffret ci-dessous est le fruit d'une ingénierie pédagogique pensée pour un impact immédiat : 15 minutes par jour suffisent pour transformer durablement l'attention, la mémoire et la confiance. Cliquez sur <strong>« Commander en ligne »</strong> pour accéder directement à la page sécurisée Selar, ou commandez directement par WhatsApp.
                </p>

                <!-- Produit 1 : Éveillez le Génie de votre Enfant -->
                <article id="eveillez-genie-enfant" class="product-horizontal">
                    <div class="product-horizontal__img-wrap">
                        <img src="images/eveillez-le-genie-de-votre-enfant.jpg" alt="Livre Éveillez le Génie de votre Enfant par Merlin SIMO" class="product-horizontal__cover" loading="lazy">
                    </div>
                    <div class="product-horizontal__content">
                        <div style="display: flex; gap: var(--space-xs); flex-wrap: wrap; margin-bottom: var(--space-xs);">
                            <span class="card__category card__category--gold">Édition Panafricaine Prestige</span>
                            <span class="card__category" style="background: rgba(37,99,235,0.08); color: var(--electric-blue);">Méthode ÉCLAT</span>
                        </div>
                        <h2 style="font-size: var(--fs-xl); color: var(--text-dark); margin-bottom: var(--space-xs);">
                            Éveillez le Génie de votre Enfant
                        </h2>
                        <p style="font-family: var(--font-heading); font-size: var(--fs-sm); font-weight: var(--fw-bold); color: var(--coral); margin-bottom: var(--space-md);">
                            « La méthode ÉCLAT de 15 minutes par jour pour apprendre, s'exprimer et grandir avec confiance »
                        </p>
                        <p class="product-card__desc" style="font-size: var(--fs-base); line-height: 1.7;">
                            Un enfant épanoui aujourd'hui, un avenir meilleur demain ! Ce guide fondateur donne aux parents d'Afrique et du monde un protocole quotidien ultra-simple en 5 étapes clés pour stimuler la créativité, consolider la discipline et libérer le potentiel d'apprentissage de leur enfant sans stress ni conflit.
                        </p>

                        <h3 style="font-size: var(--fs-sm); font-weight: var(--fw-bold); text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-dark); margin-top: var(--space-sm); margin-bottom: var(--space-xs);">
                            Les 5 piliers de la Méthode ÉCLAT :
                        </h3>
                        <ul class="product-card__features" style="margin-bottom: var(--space-lg);">
                            <li><strong>É — Écouter :</strong> Développer une écoute attentive et une concentration profonde.</li>
                            <li><strong>C — Créer :</strong> Stimuler l'imagination débordante et le sens de l'initiative.</li>
                            <li><strong>L — Lire & Parler :</strong> Enrichir le vocabulaire, l'éloquence et l'aisance d'expression.</li>
                            <li><strong>A — Apprendre par le jeu :</strong> Transformer les devoirs et la logique en moments de plaisir.</li>
                            <li><strong>T — Transformer en habitudes :</strong> Ancrer une régularité sereine : <em>15 minutes qui changent tout !</em></li>
                        </ul>

                        <div style="border-top: 1px solid var(--border); padding-top: var(--space-lg); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-md); margin-top: auto;">
                            <div>
                                <span style="font-size: var(--fs-xs); color: var(--text-light); text-transform: uppercase;">Disponible immédiatement</span>
                                <span style="font-family: var(--font-heading); font-size: var(--fs-md); font-weight: var(--fw-extra-bold); color: var(--text-dark); display: block;">Livre & Guide Parents</span>
                            </div>
                            <div style="display: flex; gap: var(--space-sm); flex-wrap: wrap;">
                                <a href="https://selar.com/l11bp7g11v" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
                                    Commander sur Selar →
                                </a>
                                <a href="https://wa.me/237683911717?text=Bonjour%20Merlin,%20je%20souhaite%20commander%20le%20livre%20%22%C3%89veillez%20le%20G%C3%A9nie%20de%20votre%20Enfant%22." target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--sm">
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Produit 2 : Boostez votre Mémoire en 8 Jours -->
                <article id="boostez-votre-memoire" class="product-horizontal">
                    <div class="product-horizontal__img-wrap">
                        <img src="images/boostez-votre-memoire-en-8-jours.jpg" alt="Livre Boostez votre Mémoire en 8 Jours par Merlin SIMO" class="product-horizontal__cover" loading="lazy">
                    </div>
                    <div class="product-horizontal__content">
                        <div style="display: flex; gap: var(--space-xs); flex-wrap: wrap; margin-bottom: var(--space-xs);">
                            <span class="card__category" style="background: rgba(37,99,235,0.1); color: var(--electric-blue);">Collection Performance</span>
                            <span class="card__category card__category--gold">Neurosciences Appliquées</span>
                        </div>
                        <h2 style="font-size: var(--fs-xl); color: var(--text-dark); margin-bottom: var(--space-xs);">
                            Boostez votre Mémoire en 8 Jours
                        </h2>
                        <p style="font-family: var(--font-heading); font-size: var(--fs-sm); font-weight: var(--fw-bold); color: var(--electric-blue); margin-bottom: var(--space-md);">
                            « Le système pratique pour apprendre plus vite, retenir plus longtemps et ne plus oublier l'essentiel »
                        </p>
                        <p class="product-card__desc" style="font-size: var(--fs-base); line-height: 1.7;">
                            Un cerveau plus fort pour un meilleur demain ! Que vous soyez étudiant préparant un concours, professionnel gérant des dossiers complexes ou curieux souhaitant affûter ses réflexes cognitifs, ce programme intensif de 8 jours (15 minutes par session) vous donne les clés scientifiques de la mémorisation durable.
                        </p>

                        <h3 style="font-size: var(--fs-sm); font-weight: var(--fw-bold); text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-dark); margin-top: var(--space-sm); margin-bottom: var(--space-xs);">
                            Ce que vous allez maîtriser en 8 jours :
                        </h3>
                        <ul class="product-card__features" style="margin-bottom: var(--space-lg);">
                            <li><strong>Apprendre plus vite :</strong> Les protocoles d'assimilation active et la technique de Feynman.</li>
                            <li><strong>Retenir plus longtemps :</strong> L'ancrage mémoriel basé sur la courbe d'Ebbinghaus et la répétition espacée.</li>
                            <li><strong>Ne plus oublier l'essentiel :</strong> Les palais mentaux et techniques d'association imagée pour retenir listes, chiffres et concepts.</li>
                            <li><strong>Focus & Réussite :</strong> 4 piliers d'entraînement : Concentration, Méthodes, Mémorisation, Réussite.</li>
                            <li><strong>Format express :</strong> Seulement 15 minutes par jour d'exercices ciblés.</li>
                        </ul>

                        <div style="border-top: 1px solid var(--border); padding-top: var(--space-lg); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-md); margin-top: auto;">
                            <div>
                                <span style="font-size: var(--fs-xs); color: var(--text-light); text-transform: uppercase;">Programme Pas-à-Pas</span>
                                <span style="font-family: var(--font-heading); font-size: var(--fs-md); font-weight: var(--fw-extra-bold); color: var(--text-dark); display: block;">Accès & Téléchargement Immédiat</span>
                            </div>
                            <div style="display: flex; gap: var(--space-sm); flex-wrap: wrap;">
                                <a href="https://selar.com/0674970777" target="_blank" rel="noopener noreferrer" class="btn btn--gold">
                                    Commander sur Selar →
                                </a>
                                <a href="https://wa.me/237683911717?text=Bonjour%20Merlin,%20je%20souhaite%20commander%20le%20livre%20%22Boostez%20votre%20M%C3%A9moire%20en%208%20Jours%22." target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--sm">
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Produit 3 : Mon Enfant Réussit - Pack Complet 3 en 1 -->
                <article id="pack-mon-enfant-reussit" class="product-horizontal" style="border: 2px solid var(--coral);">
                    <div class="product-horizontal__img-wrap">
                        <img src="images/mon-enfant-reussit-pack-3-en-1.jpg" alt="Pack Complet 3 en 1 Mon Enfant Réussit par Merlin SIMO" class="product-horizontal__cover" loading="lazy">
                    </div>
                    <div class="product-horizontal__content">
                        <div style="display: flex; gap: var(--space-xs); flex-wrap: wrap; margin-bottom: var(--space-xs);">
                            <span class="card__category card__category--coral" style="font-size: var(--fs-xs);">Pack Complet 3 en 1</span>
                            <span class="card__category card__category--gold">Collection Éducation & Réussite</span>
                        </div>
                        <h2 style="font-size: var(--fs-xl); color: var(--text-dark); margin-bottom: var(--space-xs);">
                            Mon Enfant Réussit — Le Pack Intégral 3 en 1
                        </h2>
                        <p style="font-family: var(--font-heading); font-size: var(--fs-sm); font-weight: var(--fw-bold); color: var(--coral); margin-bottom: var(--space-md);">
                            « Le programme quotidien pour aider votre enfant à apprendre plus vite, mieux mémoriser et progresser à l'école »
                        </p>
                        <p class="product-card__desc" style="font-size: var(--fs-base); line-height: 1.7;">
                            L'investissement suprême pour l'avenir scolaire et personnel de vos enfants. Ce coffret tout-en-un rassemble l'ensemble de notre écosystème pédagogique : des supports audiovisuels interactifs et les deux livres de référence de Merlin SIMO pour toute la famille.
                        </p>

                        <h3 style="font-size: var(--fs-sm); font-weight: var(--fw-bold); text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-dark); margin-top: var(--space-sm); margin-bottom: var(--space-xs);">
                            Ce pack complet comprend :
                        </h3>
                        <ul class="product-card__features" style="margin-bottom: var(--space-lg);">
                            <li><strong>1. Le Coffret Box « Mon Enfant Réussit » :</strong> Programme audiovisuel complet avec DVD & accès numérique.</li>
                            <li><strong>2. 100 Ressources Vidéo Éducatives :</strong> Modules ciblés en Français (lecture, écriture), Mathématiques (calcul, logique), Sciences (découverte du monde), Anglais (premiers pas) et Méthodologie.</li>
                            <li><strong>3. Le livre « Éveillez le Génie de votre Enfant » :</strong> Le guide complet de la Méthode ÉCLAT pour les parents.</li>
                            <li><strong>4. Le livre « Boostez votre Mémoire en 8 Jours » :</strong> Le programme d'entraînement mental pour toute la famille.</li>
                            <li><strong>5. À la maison en toute simplicité :</strong> Utilisable sur télévision, ordinateur, tablette ou smartphone, pour les familles d'Afrique et du monde entier.</li>
                        </ul>

                        <div style="border-top: 1px solid var(--border); padding-top: var(--space-lg); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-md); margin-top: auto;">
                            <div>
                                <span style="font-size: var(--fs-xs); color: var(--coral); font-weight: var(--fw-bold); text-transform: uppercase;">Meilleure Valeur Éducative</span>
                                <span style="font-family: var(--font-heading); font-size: var(--fs-md); font-weight: var(--fw-extra-bold); color: var(--text-dark); display: block;">Coffret Box + 2 Livres + 100 Vidéos</span>
                            </div>
                            <div style="display: flex; gap: var(--space-sm); flex-wrap: wrap;">
                                <a href="https://selar.com/sov955h77r" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="background: var(--coral); border-color: var(--coral);">
                                    Commander le Pack sur Selar →
                                </a>
                                <a href="https://wa.me/237683911717?text=Bonjour%20Merlin,%20je%20souhaite%20commander%20le%20Pack%20Complet%203%20en%201%20%22Mon%20Enfant%20R%C3%A9ussit%22." target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--sm">
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Assurance & Modalités -->
                <section class="sidebar__block" style="background: var(--off-white); border-color: var(--border); margin-top: var(--space-3xl); padding: var(--space-xl);">
                    <h3 style="font-size: var(--fs-md); margin-bottom: var(--space-sm); color: var(--text-dark);">💡 Modalités de commande et paiements acceptés</h3>
                    <p style="color: var(--text-medium); font-size: var(--fs-sm); line-height: 1.7; margin-bottom: var(--space-md);">
                        Notre boutique officielle sur <strong>Selar</strong> accepte de manière 100% sécurisée les moyens de paiement locaux et internationaux : <strong>Orange Money, MTN Mobile Money, cartes bancaires (Visa, Mastercard) et virements</strong>.
                    </p>
                    <p style="color: var(--text-medium); font-size: var(--fs-sm); line-height: 1.7;">
                        Dès validation de votre commande sur Selar ou confirmation par WhatsApp, vous recevez immédiatement vos accès sécurisés pour commencer votre entraînement ou celui de votre enfant.
                    </p>
                </section>

            </div>

            <!-- Right Sidebar -->
            <aside class="sidebar">
                
                <!-- Mini Profil Card -->
                <div class="sidebar__block profile-mini">
                    <div class="profile-mini__avatar">MS</div>
                    <h3 class="profile-mini__name">Merlin SIMO</h3>
                    <p class="profile-mini__bio">Auteur des programmes « Éveillez le Génie de votre Enfant » et « Boostez votre Mémoire en 8 Jours ».</p>
                    <a href="a-propos.html" class="btn btn--secondary btn--sm" style="width: 100%; justify-content: center;">
                        Biographie de l'auteur
                    </a>
                </div>

                <!-- Sommaire de la boutique -->
                <div class="sidebar__block">
                    <h3 class="sidebar__title">Catalogue des Ouvrages</h3>
                    <ul class="sidebar__links">
                        <li><a href="#eveillez-genie-enfant">1. Éveillez le Génie de votre Enfant</a></li>
                        <li><a href="#boostez-votre-memoire">2. Boostez votre Mémoire en 8 Jours</a></li>
                        <li><a href="#pack-mon-enfant-reussit">3. Mon Enfant Réussit (Pack Complet)</a></li>
                    </ul>
                </div>

                <!-- Contact Direct WhatsApp -->
                <div class="sidebar__block" style="background: linear-gradient(135deg, rgba(37,211,102,0.1), rgba(37,99,235,0.05)); border-color: rgba(37,211,102,0.3);">
                    <h3 class="sidebar__title" style="color: #1da851;">Assistance Commandes</h3>
                    <p style="font-size: var(--fs-xs); color: var(--text-medium); margin-bottom: var(--space-md);">
                        Besoin d'aide pour régler par Mobile Money ou d'une précision sur un programme ?
                    </p>
                    <a href="https://wa.me/237683911717?text=Bonjour%20Merlin,%20j'ai%20une%20question%20concernant%20la%20boutique." target="_blank" rel="noopener noreferrer" style="font-family: var(--font-heading); font-weight: var(--fw-bold); font-size: var(--fs-sm); color: #1da851; display: inline-flex; align-items: center; gap: 0.5rem;">
                        WhatsApp Direct →
                    </a>
                </div>

            </aside>

        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer__grid">
                <div>
                    <span class="header__logo" style="display: block; margin-bottom: var(--space-md);">Merlin <span>SIMO</span></span>
                    <p class="footer__text">
                        Plateforme éditoriale consacrée à l'autonomie intellectuelle, à la pensée créative méthodique et à l'innovation au service de l'élévation humaine.
                    </p>
                    <p class="footer__text" style="font-style: italic; color: var(--gold);">
                        « La créativité n'est pas un don. C'est une pratique. »
                    </p>
                </div>
                <div>
                    <h4 class="footer__title">Navigation</h4>
                    <ul class="footer__links">
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="articles.html">Articles (20 essais)</a></li>
                        <li><a href="boutique.html">Boutique & Ressources</a></li>
                        <li><a href="a-propos.html">À propos de Merlin SIMO</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer__title">Échange Direct</h4>
                    <p class="footer__text">
                        Disponible pour échanger sur vos réflexions, vos projets éditoriaux ou collaboratifs :
                    </p>
                    <p class="footer__contact">
                        <a href="https://wa.me/237683911717" target="_blank" rel="noopener noreferrer">
                            💬 WhatsApp : +237 683 911 717
                        </a>
                    </p>
                </div>
            </div>
            <div class="footer__bottom">
                <p>© 2024 Merlin SIMO. Tous droits réservés. Conçu pour une lecture calme, sans publicité ni collecte de données.</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="js/main.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(siteDir, 'boutique.html'), fullBoutiqueHtml, 'utf8');
console.log('Restored boutique.html with original layout and real products!');

// 4. Restore a-propos.html, contact.html, articles.html from orig_*
fs.copyFileSync(path.join(scriptsDir, 'orig_a-propos.html'), path.join(siteDir, 'a-propos.html'));
fs.copyFileSync(path.join(scriptsDir, 'orig_contact.html'), path.join(siteDir, 'contact.html'));
fs.copyFileSync(path.join(scriptsDir, 'orig_articles.html'), path.join(siteDir, 'articles.html'));
console.log('Restored a-propos.html, contact.html, articles.html from original templates!');

// 5. Update cache buster to ?v=8.0 across all 25 HTML files
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getAllHtmlFiles(siteDir);
htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/style\.css(\?v=[0-9.]+)?/g, 'style.css?v=8.0');
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Cache buster v=8.0 applied to all ' + htmlFiles.length + ' HTML files!');
