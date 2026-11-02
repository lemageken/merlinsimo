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
        filename: 'penser-autrement-exercices.html',
        category: 'Esprit Critique & Réfutation',
        title: "Penser autrement : exercices pour sortir des idées convenues",
        description: "Découvrez la pensée latérale d'Edward de Bono, la technique de l'inversion et 5 exercices pratiques pour briser le conformisme intellectuel.",
        dateIso: '2024-10-13',
        dateStr: '13 octobre 2024',
        readingTime: '11 min',
        lead: "Le conformisme intellectuel est une pente naturelle. Notre cerveau cherche constamment à économiser son énergie en appliquant des grilles d'analyse préexistantes. Penser autrement n'est pas une posture d'originalité gratuite : c'est un travail délibéré de déstabilisation de nos certitudes.",
        toc: [
            { id: 'tyrannie-pensee-verticale', title: 'La tyrannie de la pensée verticale' },
            { id: 'methode-inversion', title: 'La méthode de l\'inversion de Jacobi' },
            { id: 'premiers-principes', title: 'Le raisonnement par les premiers principes' },
            { id: 'changement-perspective', title: 'Le jeu des perspectives empruntées' },
            { id: '5-exercices-pratiques', title: '5 exercices à pratiquer immédiatement' },
            { id: 'conclusion-vigilance', title: 'Maintenir la vigilance critique au quotidien' }
        ],
        related: [
            { slug: 'questions-puissantes-debloquer', title: 'Les questions puissantes' },
            { slug: 'esprit-critique-imagination', title: 'Esprit critique et imagination' },
            { slug: 'connexions-inattendues-domaines', title: 'Connexions inattendues entre domaines' }
        ],
        tags: ['pensée-latérale', 'inversion', 'modèles-mentaux', 'esprit-critique', 'exercices'],
        product: {
            title: 'Le Kit du Créateur Moderne',
            desc: 'Un condensé d\'exercices de pensée latérale et de matrices pour débloquer votre réflexion et vos projets.',
            anchor: 'kit-createur'
        },
        bodyHtml: `
            <h2 id="tyrannie-pensee-verticale">La tyrannie de la pensée verticale</h2>
            <p>Edward de Bono, théoricien de la créativité et psychologue à Oxford, a forgé le concept de <strong>pensée latérale</strong> en opposition à la pensée verticale traditionnelle. La pensée verticale creuse toujours plus profondément le même trou ; la pensée latérale va creuser un trou ailleurs.</p>
            <p>La logique verticale est indispensable pour valider une hypothèse ou perfectionner un système existant. Mais elle est incapable de produire une rupture radicale, car chaque étape doit être rigoureusement justifiée par la précédente. La pensée latérale accepte les pas de côté, les provocations intellectuelles et les sauts apparemment illogiques pour atteindre de nouveaux points de vue.</p>

            <h2 id="methode-inversion">La méthode de l'inversion de Jacobi</h2>
            <p>Le grand mathématicien allemand Carl Jacobi avait coutume de répéter une maxime célèbre : <em>« Man muss immer umkehren »</em> (Il faut toujours inverser). Charlie Munger, le légendaire partenaire de Warren Buffett, en a fait l'un de ses modèles mentaux cardinaux.</p>
            <p>Face à un objectif complexe, ne demandez pas : <em>« Comment puis-je réussir ? »</em> Inversez la question : <strong>« Qu'est-ce qui garantirait à coup sûr mon échec absolu ? »</strong></p>
            <ul>
                <li>Si vous voulez créer un produit apprécié, listez tout ce qui rendrait votre produit méprisable et inutile.</li>
                <li>Si vous voulez rester concentré, listez les 10 habitudes qui détruiraient complètement votre attention en 48 heures.</li>
            </ul>
            <p>Une fois les causes de désastre identifiées, votre stratégie devient limpide : il suffit d'ériger des barrières infranchissables contre chacun de ces poisons.</p>

            <blockquote>
                « Inversez, toujours inversez : transformez une situation difficile en son contraire pour voir ce qui est caché. »
            </blockquote>

            <h2 id="premiers-principes">Le raisonnement par les premiers principes</h2>
            <p>Aristote définissait un premier principe comme la première base à partir de laquelle une chose est connue. La plupart des gens pensent <strong>par analogie</strong> : ils regardent ce que font les autres et le reproduisent en y apportant de légères variations. Le raisonnement par les premiers principes consiste à décomposer une situation complexe jusqu'à ses vérités fondamentales indubitables, puis à reconstruire la solution à partir de là.</p>
            <p>C'est exactement la méthode employée par Elon Musk pour réduire le coût de fabrication des fusées SpaceX : au lieu d'acheter une fusée standard à 65 millions de dollars, il a calculé le coût brut des matières premières sur les marchés marchands (aluminium, titane, cuivre, fibre de carbone). Constatant que la matière brute ne représentait que 2% du prix catalogue, il a reconstruit toute la chaîne industrielle en interne.</p>

            <h2 id="changement-perspective">Le jeu des perspectives empruntées</h2>
            <p>Nous sommes prisonniers de nos angles morts professionnels. Un juriste voit des règles et des contentieux ; un ingénieur voit des goulets d'étranglement et des composants ; un designer voit des frictions d'usage et des lignes de force.</p>
            <p>L'exercice consiste à « habiter » temporairement l'esprit d'une figure radicalement différente face à votre blocage : <em>« Comment un biologiste évolutionniste analyserait-il la stagnation de mon projet ? Comment un horloger suisse réorganiserait-il mon emploi du temps ? »</em> Ce saut d'identification désamorce vos réflexes conditionnés.</p>

            <h2 id="5-exercices-pratiques">5 exercices à pratiquer immédiatement</h2>
            <ol>
                <li><strong>Le procès de l'évidence :</strong> Identifiez une croyance universellement acceptée dans votre milieu (ex. : « Il faut publier tous les jours sur les réseaux sociaux pour exister ») et écrivez un plaidoyer argumenté de 300 mots défendant rigoureusement la thèse inverse.</li>
                <li><strong>La contrainte des 5 ans :</strong> Si vous deviez atteindre vos objectifs de l'année en seulement 6 mois, que feriez-vous ? Si, à l'inverse, vous disposiez de 20 ans sans aucune pression temporelle, quelle architecture bâtiriez-vous ?</li>
                <li><strong>La suppression de l'atout maître :</strong> Si votre principal avantage concurrentiel ou compétence clé vous était retiré demain, comment continueriez-vous à créer de la valeur ?</li>
                <li><strong>L'analogie biologique :</strong> Trouvez dans la nature un organisme vivant (la ruche, le mycélium, le mimétisme du caméléon) dont le mécanisme de survie pourrait s'appliquer à votre projet.</li>
                <li><strong>Le test de la falsification :</strong> À quelles conditions mesurables seriez-vous prêt à admettre que votre projet actuel est une fausse piste ? Si vous ne pouvez répondre, vous êtes dans le dogme, pas dans la réflexion.</li>
            </ol>

            <h2 id="conclusion-vigilance">Maintenir la vigilance critique au quotidien</h2>
            <p>Penser autrement n'est pas un événement ponctuel : c'est une hygiène de l'esprit. Dès que vous vous surprenez à approuver avec complaisance l'opinion dominante d'un groupe, suspendez votre jugement. Posez cette question salutaire : « Qu'est-ce que nous sommes tous en train d'ignorer collectivement ? »</p>
        `
    },
    {
        filename: 'prise-notes-creation-reflexion.html',
        category: 'Apprentissage & Mémoire',
        title: "La prise de notes comme outil de création et de réflexion",
        description: "Du Zettelkasten de Niklas Luhmann aux carnets de Léonard de Vinci : comment transformer un stockage passif en un véritable dialogue générateur d'idées.",
        dateIso: '2024-10-10',
        dateStr: '10 octobre 2024',
        readingTime: '10 min',
        lead: "La plupart des gens prennent des notes comme des archivistes : ils collectionnent des citations, sauvegardent des pages web entières et classent des dossiers qui ne seront jamais relus. Prendre des notes ne sert pas à se souvenir du passé : c'est un échafaudage pour penser ce qui n'existe pas encore.",
        toc: [
            { id: 'piege-cimetiere-notes', title: 'Le cimetière des notes mortes' },
            { id: 'methode-zettelkasten', title: 'La méthode Zettelkasten de Niklas Luhmann' },
            { id: 'notes-permanentes', title: 'Des notes éphémères aux notes permanentes' },
            { id: 'penser-avec-ses-mains', title: 'Penser avec ses mains : le carnet comme laboratoire' },
            { id: 'resumer-progressif', title: 'La technique du résumé progressif' },
            { id: 'systeme-operationnel', title: 'Installer votre second cerveau' }
        ],
        related: [
            { slug: 'apprendre-plus-vite-retenir', title: 'Apprendre plus vite et retenir durablement' },
            { slug: 'routine-reflexion-personnelle', title: 'Créer une routine de réflexion' },
            { slug: 'observer-quotidien-regard-neuf', title: 'Observer le quotidien d\'un regard neuf' }
        ],
        tags: ['prise-de-notes', 'zettelkasten', 'luhmann', 'second-cerveau', 'création'],
        product: null,
        bodyHtml: `
            <h2 id="piege-cimetiere-notes">Le cimetière des notes mortes</h2>
            <p>Nous vivons sous l'illusion que collectionner des notes équivaut à acquérir du savoir. C'est le « syndrome du collectionneur » : on empile des PDF, on remplit des dossiers numériques impeccablement étiquetés, et l'on ressent la satisfaction éphémère du devoir accompli. En réalité, une note qui ne dialogue avec aucune autre note est un déchet cognitif.</p>
            <p>Votre cerveau n'est pas conçu pour stocker des gigaoctets d'informations brutes : il est conçu pour faire des connexions, imaginer des métaphores et résoudre des problèmes. Vos notes doivent être un système dynamique, un partenaire de conversation qui vous surprend.</p>

            <h2 id="methode-zettelkasten">La méthode Zettelkasten de Niklas Luhmann</h2>
            <p>Le sociologue allemand Niklas Luhmann (1927-1998) a publié au cours de sa carrière plus de 70 livres et 400 articles scientifiques fondamentaux couvrant des disciplines variées (sociologie, droit, économie, art). Lorsqu'on l'interrogeait sur sa prodigieuse productivité, il répondait en souriant : <em>« Je ne force jamais rien. Tout le travail est fait par mon Zettelkasten. »</em></p>
            <p>Son <em>Zettelkasten</em> (« boîte à fiches ») n'était pas un simple index alphabétique. C'était un réseau hypertexte sur fiches bristol papier numérotées, reliées entre elles par des renvois croisés. Luhmann ne classait pas une note selon sa provenance (le livre lu), mais selon les conversations qu'elle pouvait nouer avec ses réflexions antérieures.</p>

            <blockquote>
                « Je ne pense pas tout seul : mes pensées se produisent en étroite symbiose avec mon fichier de notes. »<br>— Niklas Luhmann
            </blockquote>

            <h2 id="notes-permanentes">Des notes éphémères aux notes permanentes</h2>
            <p>Pour construire un système réellement fécond, formalisé aujourd'hui par Sönke Ahrens dans <em>How to Take Smart Notes</em>, il est indispensable de distinguer strictement trois niveaux de notes :</p>
            <ul>
                <li><strong>Les notes éphémères (Fleeting Notes) :</strong> griffonnages rapides, idées au vol sur un ticket de caisse ou dans une application mémo vocale. Elles ont vocation à être traitées sous 48 heures puis jetées.</li>
                <li><strong>Les notes bibliographiques (Literature Notes) :</strong> synthèses rédigées <em>avec vos propres mots</em> lors de la lecture d'un livre ou d'un rapport, accompagnées de la référence exacte de la page. Ne recopiez jamais de citations brutes sans y adjoindre votre interprétation.</li>
                <li><strong>Les notes permanentes (Permanent Notes) :</strong> le cœur du réacteur. Chaque fiche contient <em>une seule idée</em>, autonome, formulée avec une clarté totale, et systématiquement reliée aux fiches préexistantes du réseau.</li>
            </ul>

            <h2 id="penser-avec-ses-mains">Penser avec ses mains : le carnet comme laboratoire</h2>
            <p>Les carnets de Léonard de Vinci conservés au British Museum ou à l'Institut de France témoignent d'une pensée vivante, indisciplinée et fulgurante. Le texte s'y mêle au croquis anatomique, aux équations hydrauliques et à la poésie. L'écriture manuscrite et le dessin forcent le cerveau à ralentir et à synthétiser.</p>
            <p>Prendre des notes réflexives, c'est dialoguer avec l'auteur que l'on lit. Annotez les marges : contestez une affirmation, exigez une preuve supplémentaire, tracez un pont avec une expérience vécue hier. Si vous n'êtes pas en désaccord avec au moins 10% de ce que vous lisez, vous ne lisez pas avec esprit critique.</p>

            <h2 id="resumer-progressif">La technique du résumé progressif</h2>
            <p>Conçue par Tiago Forte (auteur de <em>Building a Second Brain</em>), cette approche évite de relire des documents entiers tout en favorisant l'assimilation par couches :</p>
            <ol>
                <li><strong>Couche 1 :</strong> Capture brute d'un passage pertinent.</li>
                <li><strong>Couche 2 :</strong> Surlignage en gras des segments clés (environ 20% du texte initial).</li>
                <li><strong>Couche 3 :</strong> Surlignage couleur des formules décisives parmi les segments en gras (environ 5%).</li>
                <li><strong>Couche 4 :</strong> Rédaction d'un mini-résumé de 2 phrases en tête de note synthétisant l'essence du concept.</li>
            </ol>

            <h2 id="systeme-operationnel">Installer votre second cerveau</h2>
            <p>Pour démarrer sans vous perdre dans la technique, appliquez une règle simple : n'installez pas 10 logiciels différents. Choisissez un seul outil capable de créer des liens bidirectionnels (Obsidian, Logseq, ou même un classeur de fiches papier A6) et appliquez la règle des 3 notes : chaque fois que vous créez une note permanente, forcez-vous à la relier à au moins 2 notes déjà présentes dans votre système. C'est à ce croisement précis que naîtront vos futurs projets.</p>
        `
    },
    {
        filename: 'developper-attention-distractions.html',
        category: 'Esprit Critique & Réfutation',
        title: "Développer son attention dans un monde de distractions",
        description: "Comprendre l'économie de la capture cognitive, résister au résidu d'attention et aménager des forteresses de concentration pour le travail profond.",
        dateIso: '2024-10-07',
        dateStr: '07 octobre 2024',
        readingTime: '10 min',
        lead: "L'attention est devenue la ressource la plus précieuse et la plus pillée de notre époque. Des milliards de dollars et les meilleurs ingénieurs en neurosciences de la planète sont mobilisés pour fragmenter votre conscience en impulsions de 15 secondes. Récupérer son attention n'est plus un simple conseil d'organisation : c'est un acte de résistance intellectuelle.",
        toc: [
            { id: 'economie-capture', title: 'L\'économie de la capture cognitive' },
            { id: 'cout-residu-attention', title: 'Le coût invisible du résidu d\'attention' },
            { id: 'mythe-multitasking', title: 'Le mythe dévastateur du multitâche' },
            { id: 'forteresses-concentration', title: 'Bâtir des forteresses de concentration (Deep Work)' },
            { id: 'diète-informationnelle', title: 'La diète informationnelle radicale' },
            { id: 'protocole-7-jours', title: 'Le protocole de reconquête attentionnelle' }
        ],
        related: [
            { slug: 'habitudes-esprits-creatifs', title: 'Les habitudes des esprits créatifs' },
            { slug: 'routine-reflexion-personnelle', title: 'Routine de réflexion personnelle' },
            { slug: 'ennui-silence-marche-idees', title: 'L\'ennui, le silence et la marche' }
        ],
        tags: ['attention', 'deep-work', 'concentration', 'minimalisme-numérique', 'focus'],
        product: {
            title: 'Penser Mieux : 30 Jours de Réflexion',
            desc: 'Un entraînement structuré pour rééduquer votre capacité de concentration et éliminer le bruit mental toxique.',
            anchor: 'penser-mieux'
        },
        bodyHtml: `
            <h2 id="economie-capture">L'économie de la capture cognitive</h2>
            <p>Herbert Simon, prix Nobel d'économie, l'avait prophétisé dès 1971 : <em>« Une profusion d'informations engendre une pénurie d'attention. »</em> Aujourd'hui, les plateformes sociales, les notifications push et les algorithmes de recommandation ne vendent pas du contenu : ils extraient et monétisent des fragments de votre temps de cerveau disponible grâce aux mécanismes du conditionnement opérant (les récompenses variables intermittentes découvertes par B.F. Skinner).</p>
            <p>Chaque fois que vous vérifiez machinalement votre téléphone sans raison précise, vous ne cherchez pas une information : vous cherchez un shoot de dopamine pour soulager une micro-angoisse de vide. Prendre conscience de ce mécanisme biologique est le premier pas vers la libération.</p>

            <h2 id="cout-residu-attention">Le coût invisible du résidu d'attention</h2>
            <p>La chercheuse Sophie Leroy (Université du Minnesota) a mis en lumière un phénomène psychologique capital : <strong>le résidu d'attention</strong>. Lorsque vous interrompez une tâche complexe pour jeter un coup d'œil rapide de 20 secondes à vos messages, votre esprit ne bascule pas instantanément d'un objet à l'autre.</p>
            <p>Une partie de vos ressources cognitives reste collée à l'interaction précédente : qui a écrit ? Que voulais-je répondre ? Dois-je m'en inquiéter ? Selon les études de Gloria Mark à l'Université de Californie, il faut en moyenne <strong>23 minutes et 15 secondes</strong> pour retrouver un état de concentration pleine après une simple interruption.</p>

            <blockquote>
                « Ce que vous choisissez d'ignorer est mille fois plus important pour votre avenir que ce que vous choisissez d'examiner. »
            </blockquote>

            <h2 id="mythe-multitasking">Le mythe dévastateur du multitâche</h2>
            <p>Le cerveau humain conscient ne fait pas de multitâche : il pratique le <em>task switching</em> (l'alternance frénétique). Vous ne traitez pas deux tâches intellectuelles en parallèle ; vous forcez votre cortex préfrontal à couper et relancer continuellement deux programmes distincts, dissipant une quantité massive d'énergie sous forme de fatigue nerveuse.</p>
            <p>Des recherches menées à l'université de Stanford ont démontré que les personnes qui se revendiquent comme d'excellents multitâches sont en réalité les moins capables de filtrer les données non pertinentes et les plus lentes à organiser leurs souvenirs.</p>

            <h2 id="forteresses-concentration">Bâtir des forteresses de concentration (Deep Work)</h2>
            <p>Le professeur Cal Newport, dans son manifeste <em>Deep Work</em>, définit le travail en profondeur comme la capacité à se concentrer sans distraction sur une tâche cognitivement exigeante. C'est une compétence qui se muscle, pas une prédisposition innée.</p>
            <p>Pour ériger votre forteresse :</p>
            <ul>
                <li><strong>Éliminez les stimuli à la source :</strong> ne comptez pas sur votre volonté. Mettez votre smartphone dans une autre pièce, en mode avion ou dans un tiroir fermé à clé.</li>
                <li><strong>Définissez des blocs monolithiques :</strong> bloquez dans votre agenda des sessions de 90 minutes strictes, consacrées à un seul livrable identifié avant de commencer.</li>
                <li><strong>Instaurez un rituel de démarrage :</strong> une tasse de thé, un casque antibruit, une phrase d'intention écrite sur papier pour signifier à votre inconscient le passage en mode profond.</li>
            </ul>

            <h2 id="diète-informationnelle">La diète informationnelle radicale</h2>
            <p>Le philosophe stoïcien Sénèque écrivait déjà dans ses <em>Lettres à Lucilius</em> : <em>« L'abondance des livres dissipe l'esprit. »</em> Que dirait-il aujourd'hui du flux continu des actualités anxiogènes et des querelles d'opinion éphémères ?</p>
            <p>Appliquez la diète informationnelle : supprimez les alertes d'actualité, cessez de consulter les flux de veille avant midi, et privilégiez les formats longs, pérennes et réfléchis (essais, livres de fond, rapports complets) aux dépêches d'urgence qui n'auront plus aucun sens dans 48 heures.</p>

            <h2 id="protocole-7-jours">Le protocole de reconquête attentionnelle</h2>
            <ol>
                <li><strong>Jour 1-2 :</strong> Désactivez 100% des notifications visuelles et sonores de votre téléphone (sauf appels d'urgence).</li>
                <li><strong>Jour 3-4 :</strong> Sanctuarisez une plage matinale de 60 minutes sans aucun écran allumé.</li>
                <li><strong>Jour 5-6 :</strong> Travaillez en mode mono-tâche absolu : un seul onglet ouvert dans votre navigateur web à la fois.</li>
                <li><strong>Jour 7 :</strong> Faites une journée complète de jeûne numérique dominical (zéro réseaux sociaux, zéro messagerie professionnelle). Mesurez la clarté et le calme qui en découlent.</li>
            </ol>
        `
    },
    {
        filename: 'routine-reflexion-personnelle.html',
        category: 'Esprit Critique & Réfutation',
        title: "Créer une routine de réflexion personnelle",
        description: "Pourquoi la réflexion intentionnelle est le levier le plus puissant pour éviter l'agitation stérile, assainir ses priorités et décider avec sagesse.",
        dateIso: '2024-10-04',
        dateStr: '04 octobre 2024',
        readingTime: '9 min',
        lead: "La plupart des professionnels passent leur journée à éteindre des incendies : répondre aux urgences, exécuter des consignes, cocher des listes de tâches frénétiques. Ils courent très vite, mais sans savoir vers où. Prendre le temps de s'asseoir seul avec une feuille blanche n'est pas un luxe : c'est la seule façon de piloter sa vie.",
        toc: [
            { id: 'piege-action-sans-pensee', title: 'Le piège de l\'action sans pensée' },
            { id: 'tradition-stoicienne', title: 'L\'héritage des carnets de Marc Aurèle' },
            { id: 'architecture-3-niveaux', title: 'L\'architecture réflexive à 3 niveaux' },
            { id: 'prompts-matin-soir', title: 'Les questions cardinales du matin et du soir' },
            { id: 'revue-hebdomadaire', title: 'La revue stratégique du dimanche' },
            { id: 'installer-routine', title: 'Comment tenir cette routine sur la durée' }
        ],
        related: [
            { slug: 'habitudes-esprits-creatifs', title: 'Les habitudes des esprits créatifs' },
            { slug: 'developper-attention-distractions', title: 'Développer son attention' },
            { slug: 'questions-puissantes-debloquer', title: 'Les questions puissantes' }
        ],
        tags: ['réflexion', 'stoïcisme', 'journal', 'clarté', 'décision'],
        product: {
            title: 'Penser Mieux : 30 Jours de Réflexion',
            desc: '30 invitations guidées à la réflexion stratégique pour bâtir pas-à-pas votre propre système d\'examen de conscience.',
            anchor: 'penser-mieux'
        },
        bodyHtml: `
            <h2 id="piege-action-sans-pensee">Le piège de l'action sans pensée</h2>
            <p>Il existe une tentation sournoise dans notre culture de la performance : celle de confondre le mouvement avec le progrès. On peut être submergé de travail, passer 12 heures par jour devant un écran, répondre à 80 courriels et pourtant régresser intellectuellement et stratégiquement.</p>
            <p>Blaise Pascal formulait déjà ce diagnostic dans ses <em>Pensées</em> : <em>« Tout le malheur des hommes vient d'une seule chose, qui est de ne pas savoir demeurer en repos, dans une chambre. »</em> La routine de réflexion est le rempart indispensable contre cette frénésie aveugle.</p>

            <h2 id="tradition-stoicienne">L'héritage des carnets de Marc Aurèle</h2>
            <p>L'empereur romain Marc Aurèle n'a jamais écrit ses <em>Pensées pour moi-même</em> dans le but d'être publié ou admiré. Au fond de sa tente militaire sur le front du Danube, entouré par la peste et la guerre, il s'astreignait chaque soir à un examen de conscience impitoyable. Il se rappelait ses devoirs, disséquait ses accès d'irritation, remettait ses vanités à leur place et réaffirmait ses principes cardinaux.</p>
            <p>Cette tradition de l'auto-examen quotidien (présente aussi chez Pythagore, Sénèque ou Benjamin Franklin) ne relève pas de l'auto-apitoiement. C'est un exercice de calibration rigoureuse de son compas moral et intellectuel.</p>

            <h2 id="architecture-3-niveaux">L'architecture réflexive à 3 niveaux</h2>
            <p>Pour qu'une routine de réflexion s'ancre durablement sans devenir un fardeau chronophage, elle doit s'articuler en trois cycles imbriqués :</p>
            <ol>
                <li><strong>Le point d'ancrage quotidien (10 minutes) :</strong> 5 minutes au lever pour poser l'intention principale, 5 minutes au coucher pour faire le tri du grain et de l'ivraie.</li>
                <li><strong>La revue stratégique hebdomadaire (45 minutes) :</strong> un moment sanctuarisé (le vendredi après-midi ou le dimanche soir) pour évaluer l'avancement des projets et réajuster le tir.</li>
                <li><strong>Le bilan trimestriel de cap (une demi-journée) :</strong> une retraite solitaire pour vérifier la cohérence entre vos actions quotidiennes et vos ambitions à long terme.</li>
            </ol>

            <blockquote>
                « Une vie sans examen ne vaut pas la peine d'être vécue. »<br>— Socrate
            </blockquote>

            <h2 id="prompts-matin-soir">Les questions cardinales du matin et du soir</h2>
            <p>Ne vous contentez pas de fixer une page blanche en vous demandant quoi écrire. Utilisez des questions directes :</p>
            <p><strong>Au réveil :</strong></p>
            <ul>
                <li>Quelle est l'unique action qui, une fois achevée aujourd'hui, rendra toutes les autres plus simples ou inutiles ?</li>
                <li>Où risque de se nicher ma plus grande tentation de distraction ou d'éparpillement aujourd'hui ?</li>
                <li>Comment puis-je agir avec dignité, calme et bienveillance dans les interactions prévues ?</li>
            </ul>
            <p><strong>Au coucher :</strong></p>
            <ul>
                <li>Qu'ai-je accompli de réellement utile aujourd'hui ?</li>
                <li>Où ai-je manqué de rigueur, de courage ou de retenue ?</li>
                <li>Quelle leçon claire puis-je tirer de la principale friction de cette journée ?</li>
            </ul>

            <h2 id="revue-hebdomadaire">La revue stratégique du dimanche</h2>
            <p>La revue hebdomadaire est le pivot de l'efficacité sereine. Pendant ces 45 minutes, passez en revue :</p>
            <ul>
                <li>Toutes les notes capturées au vol pendant la semaine écoulée : traitez-les, archivez-les ou jetez-les.</li>
                <li>L'état de vos projets en cours : quelle est la prochaine action physique concrète pour chacun ?</li>
                <li>Vos trois priorités absolues pour la semaine qui s'ouvre.</li>
            </ul>

            <h2 id="installer-routine">Comment tenir cette routine sur la durée</h2>
            <p>Le secret de la constance réside dans la réduction drastique de la friction de départ. Déposez votre carnet et votre stylo favori ouverts sur votre table de chevet ou sur votre bureau dès la veille au soir. Ne visez pas la poésie : visez la franchise absolue. Personne d'autre que vous ne lira ces lignes.</p>
        `
    },
    {
        filename: 'echec-matiere-premiere-innovation.html',
        category: 'Innovation & Prototypage',
        title: "L'échec comme matière première de l'innovation",
        description: "Requalifier l'échec en donnée scientifique pure. Des 5 127 prototypes de Dyson aux protocoles post-mortem d'ingénierie.",
        dateIso: '2024-10-01',
        dateStr: '01 octobre 2024',
        readingTime: '11 min',
        lead: "Dans notre système éducatif et social, l'échec est stigmatisé comme une flétrissure morale ou une preuve d'incompétence. Pourtant, dans le domaine de la création et de l'innovation, l'échec n'est pas le contraire du succès : c'en est le carburant direct et obligatoire.",
        toc: [
            { id: 'stigmate-scolaire', title: 'Le conditionnement scolaire contre l\'erreur' },
            { id: 'epistemologie-donnee', title: 'L\'épistémologie de l\'erreur : l\'échec comme donnée' },
            { id: 'saga-dyson', title: 'L\'exemple radical de James Dyson (5 127 échecs)' },
            { id: 'echec-intelligent-vs-incompetent', title: 'Distinguer l\'échec intelligent de l\'échec par négligence' },
            { id: 'protocole-post-mortem', title: 'Le protocole post-mortem d\'apprentissage' },
            { id: 'batir-resilience', title: 'Bâtir son CV des échecs féconds' }
        ],
        related: [
            { slug: 'curiosite-projet-concret', title: 'De la curiosité au projet' },
            { slug: 'idee-premiere-version-imparfaite', title: 'Première version imparfaite' },
            { slug: 'vie-creative-plutot-attendre-talent', title: 'Construire une vie créative' }
        ],
        tags: ['innovation', 'échec', 'prototypage', 'dyson', 'résilience'],
        product: {
            title: 'Le Carnet de l\'Innovateur',
            desc: 'La méthode guidée pour concevoir vos expérimentations, mesurer les résultats réels et pivoter avec méthode.',
            anchor: 'carnet-innovateur'
        },
        bodyHtml: `
            <h2 id="stigmate-scolaire">Le conditionnement scolaire contre l'erreur</h2>
            <p>Dès notre plus jeune âge, l'école nous apprend que la note parfaite récompense l'absence totale de faute. On nous inculque la terreur du stylo rouge. Ce réflexe conditionné nous prépare admirablement à devenir des exécutants disciplinés dans un environnement prévisible, mais il nous handicape lourdement dès que nous entrons dans le territoire inconnu de la création.</p>
            <p>Dans le monde réel, un innovateur qui ne commet aucune erreur est simplement quelqu'un qui n'explore rien de neuf. Innover, c'est par définition concevoir quelque chose qui n'a pas encore fait ses preuves.</p>

            <h2 id="epistemologie-donnee">L'épistémologie de l'erreur : l'échec comme donnée</h2>
            <p>En méthode scientifique, lorsqu'une expérience ne confirme pas l'hypothèse de départ, le chercheur ne s'effondre pas en larmes en se déclarant nul : il note le résultat avec précision. <strong>Une expérience infructueuse fournit une donnée empirique d'une valeur inestimable</strong> : elle restreint l'espace des possibles et élimine une branche morte de l'arbre des solutions.</p>
            <p>Lorsque Thomas Edison fut interrogé par un journaliste sur les milliers de filaments de lampe à incandescence qui avaient brûlé sans fonctionner, il fit cette réponse restée légendaire : <em>« Je n'ai pas échoué 10 000 fois. J'ai réussi à identifier avec certitude 10 000 matériaux qui ne fonctionnent pas. »</em></p>

            <h2 id="saga-dyson">L'exemple radical de James Dyson (5 127 échecs)</h2>
            <p>L'ingénieur britannique James Dyson a passé quinze ans de sa vie, au bord de la faillite personnelle, à concevoir le premier aspirateur sans sac à séparation cyclonique. Entre 1979 et 1984, il a construit à la main <strong>5 126 prototypes ratés</strong> dans sa remise. Le 5 127e prototype fonctionna enfin.</p>
            <p>Dyson explique dans ses mémoires que chaque prototype n'était pas un recommencement à zéro, mais une micro-variation : modifier l'angle du cône d'un millimètre, changer la rugosité d'une paroi. La clé n'était pas la chance, mais l'obstination méthodique à apprendre de chaque avarie.</p>

            <blockquote>
                « Le succès consiste à aller d'échec en échec sans perdre son enthousiasme. »<br>— Winston Churchill
            </blockquote>

            <h2 id="echec-intelligent-vs-incompetent">Distinguer l'échec intelligent de l'échec par négligence</h2>
            <p>Amy Edmondson, professeure à la Harvard Business School, distingue rigoureusement trois types d'échecs :</p>
            <ul>
                <li><strong>L'échec évitable (ou par négligence) :</strong> causé par le non-respect d'un protocole connu, le manque de préparation ou l'inattention. Cet échec n'a rien de glorieux.</li>
                <li><strong>L'échec complexe :</strong> provoqué par une conjonction imprévisible de facteurs dans un système complexe.</li>
                <li><strong>L'échec intelligent :</strong> le seul qu'il faut célébrer. Il répond à quatre critères : il survient dans un territoire nouveau, l'enjeu est circonscrit pour ne pas être létal, il repose sur une hypothèse étayée, et ses enseignements sont immédiatement exploitables.</li>
            </ul>

            <h2 id="protocole-post-mortem">Le protocole post-mortem d'apprentissage</h2>
            <p>Après l'échec d'un projet, d'un article ou d'une offre commerciale, réunissez-vous avec vous-même ou votre équipe et remplissez cette grille sans concession :</p>
            <ol>
                <li>Quelle était l'hypothèse de départ explicite ?</li>
                <li>Quels signaux faibles avaient été ignorés par optimisme aveugle ?</li>
                <li>À quel moment précis le décrochage s'est-il produit ?</li>
                <li>Qu'avons-nous appris sur le comportement réel des utilisateurs ou du système ?</li>
                <li>Quelle règle pérenne allons-nous inscrire dans notre méthodologie de travail pour ne plus jamais commettre cette erreur ?</li>
            </ol>

            <h2 id="batir-resilience">Bâtir son CV des échecs féconds</h2>
            <p>Le professeur Johannes Haushofer (Université de Princeton) a marqué les esprits en publiant publiquement son « CV des échecs » : la liste exhaustive de toutes les bourses de recherche refusées, des articles académiques rejetés par les comités de lecture et des postes universitaires manqués. La liste était trois fois plus longue que son palmarès de réussites.</p>
            <p>Dressez votre propre catalogue des échecs féconds. Vous constaterez avec le recul que vos plus grandes avancées intellectuelles et professionnelles sont presque toujours nées dans les décombres d'une idée qui ne s'est pas passée comme prévu.</p>
        `
    }
];

articles.forEach(art => {
    const filePath = path.join(articlesDir, art.filename);
    const html = buildArticleHtml(art);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✓ Généré : ${art.filename}`);
});
