const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, '..', 'site', 'articles');

function buildArticleHtml(data) {
    const tocList = data.toc.map(item => `<li><a href="#${item.id}">${item.title}</a></li>`).join('\n                            ');
    const relatedList = data.related.map(r => `<li><a href="./${r.slug}.html">${r.title}</a></li>`).join('\n                        ');
    const tagsList = data.tags.map(t => `<a href="../articles.html" class="tag">#${t}</a>`).join('\n                        ');

    let productBox = '';
    if (data.product) {
        productBox = `
                <div class="product-callout">
                    <p class="product-callout-label">📘 Ressource recommandée</p>
                    <p><strong>${data.product.title}</strong> — ${data.product.desc}</p>
                    <a href="../boutique.html#${data.product.anchor}" class="btn btn-secondary">Découvrir le produit →</a>
                </div>`;
    }

    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title} — Merlin SIMO</title>
    <meta name="description" content="${data.description}">
    <meta property="og:title" content="${data.title} — Merlin SIMO">
    <meta property="og:description" content="${data.description}">
    <meta property="og:type" content="article">
    <meta property="og:locale" content="fr_FR">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,700;1,400&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <div class="reading-progress" id="readingProgress"></div>

    <header class="header">
        <div class="container header__inner">
            <a href="../index.html" class="header__logo">Merlin <span>SIMO</span></a>
            <nav class="nav" aria-label="Navigation principale">
                <ul class="nav__list">
                    <li class="nav__item"><a href="../index.html" class="nav__link">Accueil</a></li>
                    <li class="nav__item"><a href="../articles.html" class="nav__link nav__link--active">Articles</a></li>
                    <li class="nav__item"><a href="../boutique.html" class="nav__link">Boutique</a></li>
                    <li class="nav__item"><a href="../a-propos.html" class="nav__link">À propos</a></li>
                    <li class="nav__item"><a href="../contact.html" class="nav__link">Contact</a></li>
                </ul>
            </nav>
            <button class="hamburger" aria-label="Menu mobile" aria-expanded="false">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>

    <main class="main-content">
        <div class="container two-col" style="padding-top: var(--space-2xl); padding-bottom: var(--space-4xl);">
            <article class="article-content" style="background: var(--bg-card); padding: var(--space-2xl); border-radius: var(--radius-xl); border: 1px solid var(--border);">
                <div class="article-meta" style="margin-bottom: var(--space-md); display: flex; gap: var(--space-md); align-items: center; flex-wrap: wrap;">
                    <span class="card__category">${data.category}</span>
                    <time datetime="${data.dateIso}" style="font-size: var(--fs-xs); color: var(--text-light);">${data.dateStr}</time>
                    <span class="reading-time" style="font-size: var(--fs-xs); color: var(--text-light);">⏱️ ${data.readingTime} de lecture</span>
                </div>
                
                <h1 style="font-size: var(--fs-3xl); margin-bottom: var(--space-lg); line-height: 1.25;">${data.title}</h1>
                <p class="article-lead" style="font-size: var(--fs-lg); line-height: 1.7; color: var(--text-dark); margin-bottom: var(--space-2xl); font-weight: var(--fw-medium); border-left: 3px solid var(--electric-blue); padding-left: var(--space-lg);">
                    ${data.lead}
                </p>

                ${data.bodyHtml}

                ${productBox}

                <div class="article-footer" style="margin-top: var(--space-3xl); padding-top: var(--space-xl); border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-md);">
                    <div>
                        <p style="font-size: var(--fs-sm); color: var(--text-light); margin-bottom: 0.25rem;">Auteur</p>
                        <p style="font-family: var(--font-heading); font-weight: var(--fw-bold); color: var(--text-dark);">Merlin SIMO</p>
                    </div>
                    <div class="article-tags" style="display: flex; gap: var(--space-xs); flex-wrap: wrap;">
                        ${tagsList}
                    </div>
                </div>
            </article>

            <aside class="sidebar">
                <div class="sidebar__block">
                    <h3 class="sidebar__title">Sur cette page</h3>
                    <nav class="toc">
                        <ul class="sidebar__links">
                            ${tocList}
                        </ul>
                    </nav>
                </div>

                <div class="sidebar__block">
                    <h3 class="sidebar__title">Articles similaires</h3>
                    <ul class="sidebar__links">
                        ${relatedList}
                    </ul>
                </div>

                <div class="sidebar__block">
                    <h3 class="sidebar__title">Thématiques</h3>
                    <ul class="sidebar__links">
                        <li><a href="../articles.html?cat=creativite">Créativité</a></li>
                        <li><a href="../articles.html?cat=apprentissage">Apprentissage</a></li>
                        <li><a href="../articles.html?cat=innovation">Innovation</a></li>
                        <li><a href="../articles.html?cat=critique">Esprit critique</a></li>
                        <li><a href="../articles.html?cat=action">Passage à l'action</a></li>
                    </ul>
                </div>

                <div class="sidebar__block" style="background: linear-gradient(135deg, rgba(37,211,102,0.1), rgba(37,99,235,0.05)); border-color: rgba(37,211,102,0.3);">
                    <h3 class="sidebar__title" style="color: #1da851;">Échanger avec Merlin</h3>
                    <p style="font-size: var(--fs-xs); color: var(--text-medium); margin-bottom: var(--space-sm);">
                        Une question ou une réflexion sur cet essai ?
                    </p>
                    <a href="https://wa.me/237683911717" target="_blank" rel="noopener noreferrer" style="font-family: var(--font-heading); font-size: var(--fs-sm); font-weight: var(--fw-bold); color: #1da851;">
                        WhatsApp direct →
                    </a>
                </div>
            </aside>
        </div>
    </main>

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
                        <li><a href="../index.html">Accueil</a></li>
                        <li><a href="../articles.html">Articles</a></li>
                        <li><a href="../boutique.html">Boutique</a></li>
                        <li><a href="../a-propos.html">À propos</a></li>
                        <li><a href="../contact.html">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer__title">Contact Direct</h4>
                    <p class="footer__contact">
                        <a href="https://wa.me/237683911717" target="_blank" rel="noopener noreferrer">
                            💬 WhatsApp : +237 683 911 717
                        </a>
                    </p>
                </div>
            </div>
            <div class="footer__bottom">
                <p>© 2024 Merlin SIMO. Tous droits réservés.</p>
            </div>
        </div>
    </footer>

    <script src="../js/main.js"></script>
</body>
</html>`;
}

const articles = [
    {
        filename: 'techniques-visualisation-projet.html',
        category: 'Passage à l\'Action',
        title: "Les techniques de visualisation pour clarifier un projet",
        description: "Cartographie mentale, communiqué de presse inversé d'Amazon et scénarisation rétrospective : matérialiser le futur pour mieux l'exécuter.",
        dateIso: '2024-09-10',
        dateStr: '10 septembre 2024',
        readingTime: '10 min',
        lead: "Le flou est le poison mortel de l'exécution. Quand un projet n'est pas clairement visualisé dans ses moindres contours, le cerveau le perçoit comme une menace nébuleuse et active les réflexes d'évitement. Visualiser avec rigueur n'est pas un vœu pieux de développement personnel : c'est une ingénierie de la clarté.",
        toc: [
            { id: 'neurosciences-visualisation', title: 'Les neurosciences de la simulation mentale' },
            { id: 'methode-working-backwards', title: 'Le « Working Backwards » et le communiqué de presse d\'Amazon' },
            { id: 'cartes-mentales', title: 'La cartographie spatiale des dépendances' },
            { id: 'storyboard-operationnel', title: 'Le storyboard narratif de l\'expérience utilisateur' },
            { id: 'pre-mortem', title: 'La technique du pré-mortem de Gary Klein' },
            { id: 'exercice-protocole', title: 'Votre exercice de visualisation inversée' }
        ],
        related: [
            { slug: 'curiosite-projet-concret', title: 'De la curiosité au projet concret' },
            { slug: 'idee-premiere-version-imparfaite', title: 'Première version imparfaite' },
            { slug: 'connexions-inattendues-domaines', title: 'Connexions entre domaines' }
        ],
        tags: ['visualisation', 'gestion-de-projet', 'amazon', 'mind-mapping', 'action'],
        product: {
            title: 'Le Carnet de l\'Innovateur',
            desc: 'Retrouvez les modèles de cadrage inversé et les canevas visuels pour poser l\'architecture de vos futurs projets.',
            anchor: 'carnet-innovateur'
        },
        bodyHtml: `
            <h2 id="neurosciences-visualisation">Les neurosciences de la simulation mentale</h2>
            <p>Le cerveau humain ne fait pas une différence tranchée, au niveau de l'activation des circuits moteurs et visuels, entre une action réellement accomplie et une action répétée mentalement avec une extrême précision sensorielle. Des études d'imagerie fonctionnelle ont prouvé que des pianistes répétant un morceau uniquement par visualisation mentale développaient des modifications neuronales presque identiques à ceux qui répétaient physiquement sur un clavier.</p>
            <p>Mais attention au contresens : visualiser le simple résultat final (« je suis riche, je monte sur scène ») diminue paradoxalement la motivation en procurant une fausse satiété dopaminergique. Ce qu'il faut visualiser, c'est <strong>le processus d'exécution et le franchissement des obstacles intermédiaires</strong>.</p>

            <h2 id="methode-working-backwards">Le « Working Backwards » et le communiqué de presse d'Amazon</h2>
            <p>Chez Amazon, aucune ligne de code n'est écrite et aucun budget n'est débloqué pour un nouveau produit tant que le chef de projet n'a pas rédigé un document canonique : <strong>le faux communiqué de presse de lancement</strong>.</p>
            <p>Ce texte d'une page, rédigé au passé comme si le produit venait d'arriver sur le marché, décrit précisément le problème client, pourquoi les solutions existantes étaient mauvaises, comment le nouveau service change la vie de l'utilisateur et cite des témoignages fictifs. Si le communiqué de presse n'est pas exaltant et limpide, le projet est remanié ou abandonné. C'est l'art de concevoir à rebours, depuis l'expérience finale vécue.</p>

            <blockquote>
                « Si vous ne pouvez pas visualiser le futur avec une clarté quasi géométrique, vous ne ferez que reproduire le passé avec de nouvelles erreurs. »
            </blockquote>

            <h2 id="cartes-mentales">La cartographie spatiale des dépendances</h2>
            <p>Notre pensée n'est pas linéaire : elle est arborescente. Tenter d'organiser un projet complexe sous forme de liste de puces dans un traitement de texte traditionnel étouffe les relations de dépendance.</p>
            <p>Utilisez des cartes conceptuelles ou des diagrammes de flux :</p>
            <ul>
                <li>Identifiez le livrable final au centre.</li>
                <li>Faites rayonner les 4 ou 5 jalons critiques.</li>
                <li>Reliez par des flèches les éléments qui conditionnent le démarrage des suivants. Vous verrez immédiatement apparaître le <em>chemin critique</em> : la chaîne ininterrompue d'actions dont aucun retard n'est admissible.</li>
            </ul>

            <h2 id="storyboard-operationnel">Le storyboard narratif de l'expérience utilisateur</h2>
            <p>Emprunté à l'industrie du cinéma et perfectionné par Walt Disney, le <strong>storyboarding</strong> consiste à décomposer le parcours d'une personne découvrant votre œuvre en 6 vignettes dessinées (même avec des bonshommes allumettes très simples) :</p>
            <ol>
                <li>Vignette 1 : La frustration vécue par votre lecteur ou client face à sa situation actuelle.</li>
                <li>Vignette 2 : Le point de contact où il entend parler de votre ressource.</li>
                <li>Vignette 3 : Le premier geste d'interaction (l'ouverture du document, le clic sur la page).</li>
                <li>Vignette 4 : Le moment « Eureka » où il comprend le mécanisme central.</li>
                <li>Vignette 5 : L'application concrète dans son quotidien.</li>
                <li>Vignette 6 : Le bénéfice tangible ressenti 30 jours plus tard.</li>
            </ol>

            <h2 id="pre-mortem">La technique du pré-mortem de Gary Klein</h2>
            <p>Le psychologue Gary Klein a mis au point une technique de visualisation négative d'une efficacité redoutable : <strong>le pré-mortem</strong>.</p>
            <p>Avant d'engager les hostilités, rassemblez-vous et faites cette hypothèse : <em>« Nous sommes dans un an. Le projet a été un désastre intégral, une honte collective et un gouffre financier. Prenez 10 minutes pour écrire l'histoire exacte de ce naufrage. »</em> Cet exercice lève instantanément le tabou social de l'optimisme béat et met en lumière les failles structurelles que personne n'osait mentionner.</p>

            <h2 id="exercice-protocole">Votre exercice de visualisation inversée</h2>
            <p>Prenez votre idée maîtresse du moment. Écrivez le faux article de journal qui relatera son déploiement réussi dans 6 mois. Donnez des dates, des chiffres précis, une citation marquante. En forçant votre esprit à contempler le résultat achevé, vous transformez un brouillard intimidant en une trajectoire d'ingénierie balisée.</p>
        `
    },
    {
        filename: 'observer-quotidien-regard-neuf.html',
        category: 'Créativité & Idéation',
        title: "Apprendre à observer le quotidien avec un regard neuf",
        description: "La défamiliarisation (ostranenie) et l'esprit du débutant : comment réenchanter son attention pour extraire l'exceptionnel du banal.",
        dateIso: '2024-09-07',
        dateStr: '07 septembre 2024',
        readingTime: '9 min',
        lead: "Le plus grand obstacle à la créativité n'est pas le manque d'idées neuves : c'est l'habitude. À force de voir les mêmes rues, les mêmes objets et les mêmes gestes, notre cerveau cesse de les regarder. Il applique un calque d'indifférence. Réapprendre à voir le monde avec les yeux d'un étranger est la source secrète des grandes œuvres.",
        toc: [
            { id: 'anesthesie-habitude', title: 'L\'anesthésie progressive du familier' },
            { id: 'concept-ostranenie', title: 'L\'ostranenie des formalistes russes' },
            { id: 'shoshin-esprit-debutant', title: 'Le « Shoshin » ou l\'esprit du débutant' },
            { id: 'art-flanerie', title: 'La flânerie attentive de Baudelaire' },
            { id: 'carnet-croquis-yeux', title: 'Le dessin sans talent : regarder vraiment' },
            { id: '3-exercices-regard', title: '3 exercices pour réveiller son regard' }
        ],
        related: [
            { slug: 'prise-notes-creation-reflexion', title: 'La prise de notes réflexive' },
            { slug: 'ennui-silence-marche-idees', title: 'L\'ennui, le silence et la marche' },
            { slug: 'connexions-inattendues-domaines', title: 'Connexions inattendues entre domaines' }
        ],
        tags: ['observation', 'attention', 'shoshin', 'curiosité', 'regard'],
        product: null,
        bodyHtml: `
            <h2 id="anesthesie-habitude">L'anesthésie progressive du familier</h2>
            <p>Combien de marches comporte l'escalier que vous montez chaque matin chez vous ou à votre bureau ? Quelle est la couleur exacte de la porte de votre voisin d'en face ? Quelle forme ont les feuilles des arbres qui bordent votre trajet quotidien ? Dans neuf cas sur dix, nous sommes incapables de répondre avec certitude.</p>
            <p>Notre système visuel filtre 99% des informations perceptives pour préserver notre énergie métabolique. Dès qu'un schéma est catégorisé (« ceci est un escalier standard », « ceci est un trottoir »), nous cessons de le percevoir sensoriellement pour ne plus traiter qu'un symbole abstrait. Nous traversons la vie les yeux ouverts, mais le regard éteint.</p>

            <h2 id="concept-ostranenie">L'ostranenie des formalistes russes</h2>
            <p>En 1917, le critique littéraire russe Viktor Chklovski a formulé un concept fondamental : <strong>l'ostranenie</strong> (souvent traduit par « défamiliarisation » ou « rendre étrange »). Selon lui, le rôle cardinal de l'art n'est pas de créer des choses extravagantes, mais d'arracher les objets familiers à l'automatisme de la perception.</p>
            <p>Tolstoï, par exemple, décrivait une scène d'opéra mondain non pas avec le vocabulaire convenu de la musique classique, mais comme un spectacle absurde où un homme en collants agite les bras devant des morceaux de carton peint. Soudain, le rituel social éclate dans toute sa nudité comique ou dérisoire.</p>

            <blockquote>
                « Le seul véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux. »<br>— Marcel Proust
            </blockquote>

            <h2 id="shoshin-esprit-debutant">Le « Shoshin » ou l'esprit du débutant</h2>
            <p>Dans la tradition du bouddhisme Zen, Shunryu Suzuki a immortalisé cette maxime : <em>« Dans l'esprit du débutant, il y a beaucoup de possibilités ; dans l'esprit de l'expert, il y en a peu. »</em> L'expert arrive sur un sujet avec ses préjugés, ses grilles de lecture figées et son orgueil technique.</p>
            <p>Cultiver le <em>Shoshin</em> consiste à aborder les scènes du quotidien avec l'innocence d'un voyageur extraterrestre qui atterrirait sur Terre pour la première fois. Pourquoi ces humains s'alignent-ils tous les matins dans une boîte métallique roulante ? Pourquoi échangent-ils des bouts de papier contre de la nourriture ?</p>

            <h2 id="art-flanerie">La flânerie attentive de Baudelaire</h2>
            <p>Dans <em>Le Peintre de la vie moderne</em>, Charles Baudelaire célèbre la figure du <strong>flâneur</strong> : cet observateur passionné qui s'immerge dans la foule comme dans un bain électrique, avide de saisir l'imperceptible pulsation de la cité. Le flâneur ne marche pas pour se rendre d'un point A à un point B au pas de charge : il marche pour s'exposer aux signaux faibles.</p>
            <p>Les plus grands romans, les meilleures campagnes d'information et les innovations d'usage les plus brillantes ne sont que la restitution fidèle d'une micro-anomalie du quotidien captée par un regard qui a refusé d'accélérer.</p>

            <h2 id="carnet-croquis-yeux">Le dessin sans talent : regarder vraiment</h2>
            <p>Vous n'avez pas besoin de savoir dessiner pour tirer parti d'un carnet de croquis. L'exercice du « dessin à l'aveugle » (dessiner les contours d'un objet posé sur votre bureau sans jamais regarder votre feuille de papier) vous force à fixer l'objet réel pendant 5 minutes entières sans tricher. Vous découvrirez des arêtes, des courbures, des textures d'ombre que votre cerveau escamotait depuis dix ans.</p>

            <h2 id="3-exercices-regard">3 exercices pour réveiller son regard</h2>
            <ol>
                <li><strong>La promenade chromatique :</strong> Demain matin, choisissez une couleur rare (ex. : le jaune safran ou le bleu cobalt). Pendant toute votre journée de marche, interdisez-vous de penser à vos soucis professionnels et traquez chaque apparition de cette couleur dans l'espace urbain. Vous serez stupéfait de voir à quel point votre champ perceptif s'élargit.</li>
                <li><strong>L'écoute aveugle en lieu public :</strong> Asseyez-vous sur un banc, fermez les yeux pendant 10 minutes, et essayez de cartographier mentalement l'espace environnant uniquement à partir des sons (le bruit des semelles sur le bitume, le murmure d'une conversation à 15 mètres, le souffle du vent dans les branches).</li>
                <li><strong>Le portrait de l'objet le plus humble :</strong> Prenez un objet trivial que vous méprisez (un trombone rouillé, une tasse ébréchée) et écrivez un texte de 200 mots décrivant sa géométrie, sa matière et son histoire imaginaire avec le même sérieux que s'il s'agissait du joyau de la couronne.</li>
            </ol>
        `
    },
    {
        filename: 'connexions-inattendues-domaines.html',
        category: 'Innovation & Prototypage',
        title: "Créer des connexions inattendues entre domaines différents",
        description: "L'effet Médicis, la pensée en T et le biomimétisme : pourquoi les innovations de rupture émergent toujours aux carrefours disciplinaires.",
        dateIso: '2024-09-04',
        dateStr: '04 septembre 2024',
        readingTime: '11 min',
        lead: "L'hyper-spécialisation est le grand travers de notre ère. Chacun s'enferme dans son jargon, ses conférences spécialisées et ses revues professionnelles étanches. Pourtant, les plus grandes révolutions de l'humanité ne sont presque jamais le fruit de spécialistes purs : elles naissent de passeurs de frontières qui croisent deux mondes qui s'ignoraient.",
        toc: [
            { id: 'piege-hyper-specialisation', title: 'Le piège mortel de l\'hyperspécialisation' },
            { id: 'effet-medicis', title: 'L\'Effet Médicis et l\'intersection créative' },
            { id: 'profil-en-t', title: 'Développer un profil en « T » (T-shaped knowledge)' },
            { id: 'biomimetisme-exemple', title: 'Le biomimétisme : 3,8 milliards d\'années de R&D' },
            { id: 'steve-jobs-calligraphie', title: 'La leçon de calligraphie de Steve Jobs' },
            { id: 'matrice-croisement', title: 'Construire sa propre matrice de pollinisation croisée' }
        ],
        related: [
            { slug: 'penser-autrement-exercices', title: 'Penser autrement' },
            { slug: 'inspirer-grands-createurs', title: 'S\'inspirer des grands créateurs' },
            { slug: 'observer-quotidien-regard-neuf', title: 'Observer le quotidien' }
        ],
        tags: ['innovation', 'interdisciplinarité', 'effet-médicis', 'biomimétisme', 'connexions'],
        product: {
            title: 'Le Kit du Créateur Moderne',
            desc: 'Les matrices d\'idéation croisée et les cadres d\'analogie interdisciplinaire pour concevoir vos innovations hybrides.',
            anchor: 'kit-createur'
        },
        bodyHtml: `
            <h2 id="piege-hyper-specialisation">Le piège mortel de l'hyperspécialisation</h2>
            <p>Dans son ouvrage de référence <em>Range: Why Generalists Triumph in a Specialized World</em>, David Epstein démontre une réalité contre-intuitive : dans les environnements complexes et imprévisibles, les spécialistes étroits sont souvent les plus dogmatiques et les moins clairvoyants. À force de n'avoir qu'un marteau en main, ils finissent par traiter chaque problème comme un clou.</p>
            <p>Les esprits d'exception sont des polymaths ou des généralistes intégrateurs : ils possèdent un socle d'expertise solide dans un domaine, mais savent voyager avec curiosité et humilité dans dix autres disciplines.</p>

            <h2 id="effet-medicis">L'Effet Médicis et l'intersection créative</h2>
            <p>Frans Johansson a baptisé du nom d'<strong>Effet Médicis</strong> cette explosion de créativité phénoménale survenue à Florence au XVe siècle, lorsque la famille des Médicis a financé simultanément des sculpteurs, des mathématiciens, des poètes, des banquiers, des philosophes et des anatomistes. En les faisant vivre et échanger dans les mêmes palais, les cloisons médiévales ont volé en éclats, donnant naissance à la Renaissance.</p>
            <p>L'intersection est l'endroit magique où convergent des cultures, des concepts et des méthodologies étrangères les unes aux autres. C'est là que l'innovation par saut qualitatif se produit, plutôt que la simple amélioration incrémentale.</p>

            <blockquote>
                « La créativité consiste simplement à relier des choses. Quand vous demandez à des gens créatifs comment ils ont fait, ils se sentent un peu coupables, parce qu'ils ne l'ont pas vraiment fait : ils ont juste vu quelque chose. »<br>— Steve Jobs
            </blockquote>

            <h2 id="profil-en-t">Développer un profil en « T » (T-shaped knowledge)</h2>
            <p>L'idéal moderne n'est ni l'ignorant universel (qui survole tout sans rien approfondir) ni le rat de laboratoire borgne. C'est le <strong>profil en T</strong> :</p>
            <ul>
                <li><strong>La barre verticale du T :</strong> une expertise profonde, rigoureuse et technique dans un métier clé (par exemple, le droit public, la cybersécurité ou l'architecture logicielle).</li>
                <li><strong>La barre horizontale du T :</strong> une large culture interdisciplinaire lui permettant de comprendre le vocabulaire et les modèles de la psychologie, du design, de la narration, de l'économie et des neurosciences.</li>
            </ul>

            <h2 id="biomimetisme-exemple">Le biomimétisme : 3,8 milliards d'années de R&D</h2>
            <p>La nature a résolu la quasi-totalité des défis énergétiques, structurels et de communication auxquels l'humanité est confrontée. Lorsque l'ingénieur japonais Eiji Nakatsu (passionné d'ornithologie) a dû résoudre le vacarme insoutenable produit par le train à grande vitesse Shinkansen à la sortie des tunnels, il ne s'est pas tourné vers des manuels d'acoustique ferroviaire : il a observé le martin-pêcheur, capable de plonger de l'air dans l'eau sans la moindre éclaboussure grâce au profil effilé de son bec.</p>
            <p>En redessinant le nez du train selon la forme exacte du bec du martin-pêcheur, le bruit a été éliminé, la consommation électrique a baissé de 15% et la vitesse a augmenté de 10%. C'est la beauté de la connexion transdisciplinaire.</p>

            <h2 id="steve-jobs-calligraphie">La leçon de calligraphie de Steve Jobs</h2>
            <p>Après avoir abandonné ses études régulières au Reed College, Steve Jobs décida de suivre par pure curiosité un cours d'initiation à la calligraphie classique. Il y apprit les polices à empattement, la chasse des lettres et l'équilibre subtil des espaces typographiques. Dix ans plus tard, lorsqu'il concevait le premier ordinateur Macintosh, toute cette mémoire esthétique refit surface : le Mac devint le premier ordinateur personnel doté d'une typographie proportionnelle sublime.</p>
            <p><em>« Vous ne pouvez pas relier les points en regardant vers l'avenir ; vous ne pouvez les relier qu'en regardant en arrière. Vous devez donc faire confiance au fait que ces points se connecteront d'une manière ou d'une autre dans votre futur. »</em></p>

            <h2 id="matrice-croisement">Construire sa propre matrice de pollinisation croisée</h2>
            <p>Pour stimuler artificiellement ces croisements dans votre travail :</p>
            <ol>
                <li>Abonnez-vous à une revue scientifique ou culturelle dont le sujet n'a strictement aucun rapport avec votre gagne-pain (ex. : la revue d'histoire médiévale ou d'astrophysique).</li>
                <li>Posez chaque mois un problème professionnel sous forme d'énigme métaphorique dans un autre domaine : « Si ce contrat de partenariat était une symbiose entre un champignon et un arbre, comment s'équilibreraient les flux de nutriments ? »</li>
                <li>Déjeunez régulièrement avec des praticiens aux antipodes de votre univers : discutez avec un chef cuisinier de sa gestion du coup de feu pour repenser vos processus d'urgence.</li>
            </ol>
        `
    },
    {
        filename: 'vie-creative-plutot-attendre-talent.html',
        category: 'Passage à l\'Action',
        title: "Construire une vie créative plutôt qu'attendre le talent",
        description: "L'essai de synthèse : passer de la consommation passive à la fabrication active. Pourquoi les systèmes quotidiens surpassent toujours les dons supposés.",
        dateIso: '2024-09-01',
        dateStr: '01 septembre 2024',
        readingTime: '12 min',
        lead: "On passe sa vie à attendre : attendre le moment idéal, attendre d'avoir plus de temps, attendre d'être reconnu, attendre qu'une fée nous accorde le brevet officiel de créateur talentueux. Cette attente est une démission silencieuse. Une vie créative ne se reçoit pas en cadeau de naissance : elle se fabrique, jour après jour, par le choix délibéré d'agir.",
        toc: [
            { id: 'illusion-fatalite-talent', title: 'L\'illusion paralysante du talent inné' },
            { id: 'mindset-croissance', title: 'La psychologie du « Growth Mindset » de Carol Dweck' },
            { id: 'systemes-vs-objectifs', title: 'Des objectifs illusoires aux systèmes permanents' },
            { id: 'compound-effect', title: 'L\'effet cumulé (Compound Effect) de la création' },
            { id: 'consommateur-vers-fabricant', title: 'Basculer définitivement du consommateur au fabricant' },
            { id: 'manifeste-pratique', title: 'Le manifeste de la pratique : vos 5 serments' }
        ],
        related: [
            { slug: 'retrouver-creativite-bloque', title: 'Comment retrouver sa créativité' },
            { slug: 'habitudes-esprits-creatifs', title: 'Les habitudes des esprits créatifs' },
            { slug: 'identite-creative-assumer-style', title: 'Développer son identité créative' }
        ],
        tags: ['action', 'créativité', 'pratique', 'systèmes', 'état-d-esprit'],
        product: {
            title: 'Le Kit du Créateur Moderne',
            desc: 'L\'arsenal complet de méthodes et de fiches de suivi pour ancrer durablement la pratique créative au cœur de votre quotidien.',
            anchor: 'kit-createur'
        },
        bodyHtml: `
            <h2 id="illusion-fatalite-talent">L'illusion paralysante du talent inné</h2>
            <p>Le mot « talent » est souvent un mot paresseux. Lorsque nous déclarons d'un virtuose, d'un écrivain prolifique ou d'un bâtisseur visionnaire : « Quel talent exceptionnel ! », nous croyons lui faire un compliment. En réalité, nous nous fabriquons une décharge morale à bon compte. Car si leur réussite découle d'un don mystique attribué à la naissance, alors nous sommes absous de notre propre inertie.</p>
            <p>La devise de ce site éditorial rappelle une réalité bien plus stimulante : <strong>« La créativité n'est pas un don. C'est une pratique. »</strong> Le talent n'est que de l'obsession qui a rencontré une méthode et de la persévérance sur le long terme.</p>

            <h2 id="mindset-croissance">La psychologie du « Growth Mindset » de Carol Dweck</h2>
            <p>La professeure de psychologie à Stanford Carol Dweck a révolutionné la compréhension de la réussite humaine en modélisant deux états d'esprit fondamentaux :</p>
            <ul>
                <li><strong>L'état d'esprit fixe (Fixed Mindset) :</strong> croire que notre intelligence, notre créativité et nos aptitudes sont des caractéristiques immuables fixées à la naissance. Les personnes en état d'esprit fixe fuient l'effort et la critique, car chaque échec est vécu comme une preuve dévastatrice de leur infériorité intrinsèque.</li>
                <li><strong>L'état d'esprit de développement (Growth Mindset) :</strong> comprendre que le cerveau est un organe malléable, plastique, qui se renforce sous l'effet de l'entraînement, de la correction des erreurs et de la discipline délibérée. L'échec n'est plus un verdict : c'est un retour d'expérience.</li>
            </ul>

            <blockquote>
                « Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles. »<br>— Sénèque
            </blockquote>

            <h2 id="systemes-vs-objectifs">Des objectifs illusoires aux systèmes permanents</h2>
            <p>James Clear, dans <em>Atomic Habits</em>, met en garde contre l'obsession stérile des objectifs : les gagnants et les perdants partagent souvent les mêmes objectifs (tout le monde veut écrire un best-seller ou bâtir une entreprise prospère). Ce qui fait la différence, c'est <strong>le système quotidien</strong> mis en place pour y parvenir.</p>
            <p>Un objectif vous motive pendant 48 heures puis vous plonge dans l'angoisse de la distance qui vous sépare du sommet. Un système vous donne la fierté d'avoir accompli votre protocole du jour : écrire 500 mots, étudier une jurisprudence, coder une fonction, marcher 40 minutes.</p>

            <h2 id="compound-effect">L'effet cumulé (Compound Effect) de la création</h2>
            <p>Dans le domaine financier, les intérêts composés transforment des sommes modestes en fortunes avec le temps. Il en va exactement de même pour la création intellectuelle. Créer 1% de valeur chaque jour ne produit pas une augmentation arithmétique : sur une année, vous êtes <strong>37 fois meilleur</strong> qu'au premier jour ($1.01^{365} \approx 37.8$).</p>
            <p>Le travail d'une journée isolée paraît dérisoire. Mais 200 essais rédigés avec rigueur sur cinq ans constituent une œuvre monumentale, un phare d'autorité intellectuelle et un patrimoine inattaquable.</p>

            <h2 id="consommateur-vers-fabricant">Basculer définitivement du consommateur au fabricant</h2>
            <p>La ligne de fracture de notre époque sépare deux catégories d'humains :</p>
            <ul>
                <li>Ceux qui passent 6 heures par jour à consommer passivement le contenu, les idées, les polémiques et les produits façonnés par les autres.</li>
                <li>Ceux qui sanctuarisent leur temps pour <strong>fabriquer</strong> : rédiger leurs propres analyses, concevoir leurs propres outils, bâtir leurs propres systèmes et diffuser leur propre lumière.</li>
            </ul>
            <p>Le passage d'un camp à l'autre ne requiert aucune autorisation institutionnelle. Il commence à la seconde exacte où vous refermez cet onglet pour vous mettre à créer.</p>

            <h2 id="manifeste-pratique">Le manifeste de la pratique : vos 5 serments</h2>
            <p>Pour sceller cette alliance avec votre potentiel créatif, inscrivez ces cinq règles à la première page de votre carnet personnel :</p>
            <ol>
                <li><strong>Je ne jugerai plus mes journées à ce que j'ai récolté, mais aux graines que j'ai semées.</strong></li>
                <li><strong>J'accepterai la maladresse du premier jet comme le prix obligatoire de la maîtrise future.</strong></li>
                <li><strong>Je protégerai mon attention du bruit stérile avec la férocité d'une sentinelle.</strong></li>
                <li><strong>Je ne laisserai jamais une idée s'évaporer sans l'avoir soumise au test de la matière.</strong></li>
                <li><strong>Je pratiquerai chaque jour, sans attendre l'humeur, sans mendier l'approbation, avec la fierté tranquille de l'artisan qui bâtit.</strong></li>
            </ol>
            <p style="margin-top: var(--space-xl); font-family: var(--font-heading); font-weight: var(--fw-bold); font-size: var(--fs-md); color: var(--electric-blue);">
                Le chemin est ouvert. La pratique commence maintenant.
            </p>
        `
    }
];

articles.forEach(art => {
    const filePath = path.join(articlesDir, art.filename);
    const html = buildArticleHtml(art);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✓ Généré : ${art.filename}`);
});
