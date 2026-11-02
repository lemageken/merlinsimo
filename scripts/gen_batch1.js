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

// Articles data
const articles = [
    {
        filename: 'produire-idees-sans-inspiration.html',
        category: 'Créativité & Idéation',
        title: "L'art de produire des idées sans attendre l'inspiration",
        description: "Découvrez comment générer un flot continu d'idées neuves grâce à des protocoles d'idéation délibérés : SCAMPER, quota d'Edison et connexions forcées.",
        dateIso: '2024-10-25',
        dateStr: '25 octobre 2024',
        readingTime: '9 min',
        lead: "Attendre que l'inspiration frappe à la porte est le plus sûr moyen de ne jamais créer. Les plus grands inventeurs et créateurs de l'histoire n'étaient pas des êtres bénis par les muses : c'étaient des praticiens méthodiques capables de générer des idées fraîches sur commande.",
        toc: [
            { id: 'mythe-muse', title: 'Le mythe romantique de la muse' },
            { id: 'mecanique-idees', title: 'La mécanique combinatoire des idées' },
            { id: 'methode-scamper', title: 'La matrice SCAMPER sur le terrain' },
            { id: 'quota-edison', title: 'Le quota quotidien de Thomas Edison' },
            { id: 'connexions-forcees', title: 'L\'exercice des connexions forcées' },
            { id: 'passer-action', title: 'Votre protocole d\'idéation en 15 minutes' }
        ],
        related: [
            { slug: 'retrouver-creativite-bloque', title: 'Retrouver sa créativité bloquée' },
            { slug: 'habitudes-esprits-creatifs', title: 'Les habitudes des esprits créatifs' },
            { slug: 'connexions-inattendues-domaines', title: 'Connexions entre domaines différents' }
        ],
        tags: ['créativité', 'idéation', 'scamper', 'innovation', 'méthode'],
        product: {
            title: 'Le Kit du Créateur Moderne',
            desc: 'Retrouvez toutes les matrices d\'idéation systématique et les fiches d\'exercices guidés pour produire des idées sur demande.',
            anchor: 'kit-createur'
        },
        bodyHtml: `
            <h2 id="mythe-muse">Le mythe romantique de la muse</h2>
            <p>Notre culture entretient une vision quasi religieuse de la création. On s'imagine le poète foudroyé par la foudre de l'inspiration au bord d'une falaise, ou l'inventeur traversé par une illumination divine sous la douche. Cette mythologie est séduisante, mais elle est toxique : elle dédouane le créateur de tout travail régulier. Si l'inspiration ne vient pas, se dit-on, à quoi bon s'y mettre ?</p>
            <p>Comme le rappelait sèchement le peintre Chuck Close : <em>« L'inspiration est pour les amateurs ; le reste d'entre nous se met simplement au travail. »</em> Les idées ne surgissent pas du néant. Elles sont le résultat d'un processus cognitif précis, reproductible et perfectible.</p>

            <h2 id="mecanique-idees">La mécanique combinatoire des idées</h2>
            <p>Dans son classique <em>A Technique for Producing Ideas</em> (1940), le publicitaire James Webb Young a posé une vérité fondamentale que les neurosciences cognitives ne cessent de confirmer : <strong>une idée n'est rien d'autre qu'une nouvelle combinaison d'éléments anciens</strong>. La capacité à amener ces éléments dans des combinaisons inédites dépend directement de votre faculté à percevoir des relations cachées.</p>
            <p>Il n'y a donc pas de magie. Produire des idées consiste en deux opérations :</p>
            <ul>
                <li><strong>Accumuler de la matière première variée :</strong> concepts, faits, observations, formes, analogies issues de domaines non reliés.</li>
                <li><strong>Appliquer des opérateurs de transformation :</strong> agrandir, inverser, fusionner, éliminer, substituer.</li>
            </ul>

            <blockquote>
                « Une idée n'est jamais vierge : elle est l'enfant légitime de deux pensées qui ne s'étaient jamais rencontrées auparavant. »
            </blockquote>

            <h2 id="methode-scamper">La matrice SCAMPER sur le terrain</h2>
            <p>Conçue par Alex Osborn puis formalisée par Bob Eberle, la grille <strong>SCAMPER</strong> est l'un des outils d'idéation les plus redoutables jamais inventés. Lorsque vous faites face à un problème, un produit ou un sujet d'article, appliquez méthodiquement ces sept filtres :</p>
            <ol>
                <li><strong>S — Substituer :</strong> Que puis-je remplacer dans ce processus ? Un matériau, un canal de distribution, un interlocuteur, une hypothèse de départ ?</li>
                <li><strong>C — Combiner :</strong> Que se passe-t-il si j'assemble ce service avec un outil totalement opposé ?</li>
                <li><strong>A — Adapter :</strong> Quelle solution employée dans un autre secteur (l'aviation, la gastronomie, la biologie) puis-je transposer à mon problème ?</li>
                <li><strong>M — Modifier / Magnifier :</strong> Que devient ce projet si je décuple son échelle ? Ou si j'exagère un détail anodin pour en faire le cœur de l'expérience ?</li>
                <li><strong>P — Produire un autre usage (Put to other uses) :</strong> Comment un enfant, un chirurgien ou un artisan utiliserait-il cet outil ?</li>
                <li><strong>E — Éliminer :</strong> Quelle composante puis-je supprimer pour atteindre une épure radicale ?</li>
                <li><strong>R — Renverser / Réorganiser :</strong> Et si l'ordre chronologique était inversé ? Et si le client payait après avoir consommé ou fixait son propre prix ?</li>
            </ol>

            <h2 id="quota-edison">Le quota quotidien de Thomas Edison</h2>
            <p>Thomas Edison détenait 1 093 brevets. Son secret n'était pas un QI surnaturel, mais un engagement contractuel avec lui-même : il s'imposait un quota régulier de découvertes. Il exigeait de son laboratoire une invention mineure tous les dix jours, et une percée majeure tous les six mois. Pour y parvenir, il s'astreignait à consigner un minimum de cinq idées nouvelles chaque matin dans ses carnets, coûte que coûte.</p>
            <p>La règle est mathématique : <strong>la quantité engendre la qualité</strong>. Les esprits qui produisent les idées les plus éclatantes sont invariablement ceux qui en produisent aussi le plus grand nombre d'inutilisables. En vous fixant un quota quotidien de 5 à 10 idées brutes sans jugement critique immédiat, vous libérez votre subconscient de l'angoisse de la performance.</p>

            <h2 id="connexions-forcees">L'exercice des connexions forcées</h2>
            <p>Voici un entraînement de gymnastique mentale à faire chaque matin :</p>
            <ul>
                <li>Prenez votre problème actuel (ex. : « Comment rendre mes articles plus captivants ? »).</li>
                <li>Ouvrez un dictionnaire ou prenez un objet au hasard dans la pièce (ex. : un réveil-matin, une passoire, un trombone).</li>
                <li>Listez 5 caractéristiques de cet objet sans rapport (la passoire retient les solides, laisse passer les fluides, a des trous réguliers, résiste à la chaleur).</li>
                <li>Forcez un pont analogique : « Comment mon article peut-il fonctionner comme une passoire ? Il doit filtrer le bruit ambiant et ne laisser que l'essentiel nutritif. »</li>
            </ul>

            <h2 id="passer-action">Votre protocole d'idéation en 15 minutes</h2>
            <p>Ne quittez pas cet article sans poser un acte d'entraînement. Prenez une feuille blanche, notez en haut une question qui vous occupe actuellement, et appliquez les 3 premières lettres du SCAMPER (Substituer, Combiner, Adapter) pendant exactement 15 minutes, minuteur enclenché. Vous découvrirez qu'attendre l'inspiration était une perte de temps : votre esprit n'attendait qu'un cadre pour produire.</p>
        `
    },
    {
        filename: 'habitudes-esprits-creatifs.html',
        category: 'Habitudes & Rituels',
        title: "Les habitudes quotidiennes des esprits les plus créatifs",
        description: "Analyse approfondie des rituels quotidiens, des marches solitaires et des systèmes de repos délibéré des plus grands créateurs de l'histoire.",
        dateIso: '2024-10-22',
        dateStr: '22 octobre 2024',
        readingTime: '11 min',
        lead: "On fantasme souvent la vie d'artiste comme une existence chaotique et bohème. En réalité, une étude minutieuse des plus grands écrivains, scientifiques et bâtisseurs révèle exactement l'inverse : une discipline d'acier, des rituels matinaux immuables et un respect sacré du repos délibéré.",
        toc: [
            { id: 'illusion-boheme', title: 'L\'illusion de l\'anarchie créative' },
            { id: 'puissance-rituel', title: 'La force d\'ancrage du rituel matinal' },
            { id: 'marche-quotidienne', title: 'La marche quotidienne comme incubateur' },
            { id: 'carnet-capture', title: 'La capture systématique sans délai' },
            { id: 'sanctuaire-silence', title: 'Le repos délibéré et les sanctuaires de silence' },
            { id: 'architecture-journee', title: 'Construire son architecture de journée' }
        ],
        related: [
            { slug: 'retrouver-creativite-bloque', title: 'Comment retrouver sa créativité' },
            { slug: 'developper-attention-distractions', title: 'Développer son attention' },
            { slug: 'vie-creative-plutot-attendre-talent', title: 'Construire une vie créative' }
        ],
        tags: ['habitudes', 'discipline', 'rituels', 'créateurs', 'productivité'],
        product: null,
        bodyHtml: `
            <h2 id="illusion-boheme">L'illusion de l'anarchie créative</h2>
            <p>Dans l'imaginaire populaire, le génie veille tard, boit trop de café, vit au milieu de piles de livres en désordre et crée par explosions impulsives de 72 heures sans dormir. Cette image romantique est une imposture historique. Dans <em>Daily Rituals: How Artists Work</em>, Mason Currey a disséqué le quotidien de 161 esprits d'exception. Sa conclusion est sans appel : la grande majorité menait une vie réglée comme une horloge suisse.</p>
            <p>Gustave Flaubert résumait cette discipline avec une précision chirurgicale : <em>« Soyez régulier et ordinaire dans votre vie comme un bourgeois, afin d'être violent et original dans votre œuvre. »</em> La routine ne bride pas la créativité ; elle la protège en éliminant la fatigue décisionnelle.</p>

            <h2 id="puissance-rituel">La force d'ancrage du rituel matinal</h2>
            <p>Twyla Tharp, l'une des plus célèbres chorégraphes américaines, raconte dans <em>The Creative Habit</em> que sa journée commence chaque matin à 5h30. Elle met ses vêtements de sport, sort de chez elle, hèle un taxi et ordonne au chauffeur : « Au gymnase de la 91e rue ». Son rituel créatif, précise-t-elle, n'est pas l'entraînement physique de deux heures qui suit. C'est l'acte de héler le taxi.</p>
            <p>En accomplissant ce geste minuscule et répétitif, elle court-circuite toute hésitation : <em>« À l'instant où je monte dans le taxi, le rituel a gagné. Je n'ai plus à me demander si j'ai envie d'aller m'entraîner ou non. C'est acté. »</em></p>

            <h2 id="marche-quotidienne">La marche quotidienne comme incubateur</h2>
            <p>Charles Darwin avait son <em>Sandwalk</em>, une allée circulaire bordée d'arbres autour de sa propriété de Down House où il marchait plusieurs fois par jour pour démêler les nœuds théoriques de l'évolution. Ludwig van Beethoven parcourait les bois viennois avec un carnet de musique et un crayon dans sa poche. Friedrich Nietzsche affirmait sans détour que <em>« seules les pensées venues en marchant ont de la valeur »</em>.</p>
            <p>Ce lien entre mouvement podométrique et fluidité mentale n'a rien d'une coïncidence poétique. Les recherches modernes en psychophysiologie démontrent que la marche à allure modérée augmente le débit sanguin cérébral, stimule la libération de dopamine et active le réseau du mode par défaut, propice aux associations d'idées distantes.</p>

            <blockquote>
                « La marche cadencée agit comme un pendule qui harmonise la respiration et déverrouille l'inconscient. »
            </blockquote>

            <h2 id="carnet-capture">La capture systématique sans délai</h2>
            <p>Une idée qui n'est pas notée dans les deux minutes suivant son émergence a 90% de chances de s'évaporer à jamais. Les créateurs prolifiques développent une paranoïa constructive à l'égard de l'oubli. Léonard de Vinci portait constamment une reliure de cuir à sa ceinture pour esquisser la posture d'un passant, la turbulence de l'eau ou la mécanique d'une aile d'oiseau.</p>
            <p>L'habitude fondamentale n'est pas le choix de l'outil (carnet papier Moleskine ou application sur smartphone), mais l'inviolabilité du réflexe : ne jamais faire confiance à sa mémoire pour stocker une intuition brute.</p>

            <h2 id="sanctuaire-silence">Le repos délibéré et les sanctuaires de silence</h2>
            <p>Alex Soojung-Kim Pang, auteur de l'ouvrage de référence <em>Rest: Why You Get More Done When You Work Less</em>, a démontré que les créateurs les plus renommés (comme Henri Poincaré ou Anthony Trollope) ne consacraient généralement que 4 à 5 heures par jour au travail créatif intense. Le reste du temps était dédié à des loisirs contemplatifs, à la sieste, aux discussions informelles et à la lecture vagabonde.</p>
            <p>Ce temps de non-action n'est pas du temps perdu : c'est la période de gestation durant laquelle le cerveau recombine silencieusement les matériaux assimilés le matin.</p>

            <h2 id="architecture-journee">Construire son architecture de journée</h2>
            <p>Voici les quatre blocs non négociables à intégrer dans votre emploi du temps dès cette semaine :</p>
            <ol>
                <li><strong>Le bloc de création profonde (90 à 120 minutes) :</strong> placé de préférence tôt le matin, sans téléphone, sans e-mail, sans onglets ouverts.</li>
                <li><strong>La marche délibérée (30 à 45 minutes) :</strong> sans écouteurs, sans appel téléphonique, en laissant le regard se poser sur l'environnement.</li>
                <li><strong>La boîte de capture :</strong> un carnet unique où convergent toutes vos notes du jour.</li>
                <li><strong>La clôture de journée :</strong> 10 minutes chaque soir pour ordonner vos notes et définir la priorité absolue du lendemain matin.</li>
            </ol>
        `
    },
    {
        filename: 'apprendre-plus-vite-retenir.html',
        category: 'Apprentissage & Mémoire',
        title: "Comment apprendre plus vite et retenir durablement",
        description: "Répétition espacée, interrogation élaborative et technique de Feynman : les méthodes scientifiquement validées contre l'illusion de compétence.",
        dateIso: '2024-10-19',
        dateStr: '19 octobre 2024',
        readingTime: '12 min',
        lead: "La plupart des gens apprennent de manière passive : ils relisent leurs notes, surlignent des pages entières au feutre fluo et hochent la tête en croyant comprendre. C'est l'illusion de compétence. Pour apprendre véritablement, il faut créer une friction cognitive délibérée.",
        toc: [
            { id: 'illusion-competence', title: 'L\'illusion de compétence et le piège du surlignage' },
            { id: 'rappel-actif', title: 'Le rappel actif (Active Recall) contre la relecture' },
            { id: 'repetition-espacee', title: 'La courbe de l\'oubli et la répétition espacée' },
            { id: 'technique-feynman', title: 'La technique de Feynman en 4 étapes' },
            { id: 'interleaving', title: 'L\'entremêlement des savoirs (Interleaving)' },
            { id: 'programme-7-jours', title: 'Plan d\'action d\'apprentissage sur 7 jours' }
        ],
        related: [
            { slug: 'prise-notes-creation-reflexion', title: 'La prise de notes réflexive' },
            { slug: 'developper-attention-distractions', title: 'Développer son attention' },
            { slug: 'questions-puissantes-debloquer', title: 'Les questions puissantes' }
        ],
        tags: ['apprentissage', 'mémoire', 'feynman', 'répétition-espacée', 'neurosciences'],
        product: {
            title: 'Penser Mieux : 30 Jours de Réflexion',
            desc: 'Un parcours d\'entraînement mental structuré pour développer une clarté intellectuelle durable et des habitudes d\'assimilation solides.',
            anchor: 'penser-mieux'
        },
        bodyHtml: `
            <h2 id="illusion-competence">L'illusion de compétence et le piège du surlignage</h2>
            <p>Lorsque vous relisez un livre ou un cours, le texte vous paraît familier. Votre cerveau interprète cette reconnaissance visuelle comme une preuve de maîtrise. C'est une erreur psychologique majeure appelée <strong>l'illusion de compétence</strong>. Vous ne savez pas restituer l'information : vous êtes simplement capable de la reconnaître quand elle est sous vos yeux.</p>
            <p>Les méta-analyses en psychologie cognitive (notamment celles de John Dunlosky en 2013) ont prouvé que le surlignage et la relecture passive figurent parmi les méthodes d'apprentissage les moins efficaces existantes, malgré leur immense popularité.</p>

            <h2 id="rappel-actif">Le rappel actif (Active Recall) contre la relecture</h2>
            <p>Pour ancrer durablement une notion dans vos réseaux neuronaux, vous ne devez pas y faire entrer l'information : <strong>vous devez la forcer à en sortir</strong>. C'est le principe du rappel actif (<em>retrieval practice</em>).</p>
            <p>Après avoir lu une section ou étudié un concept :</p>
            <ul>
                <li>Fermez immédiatement le livre ou masquez l'écran.</li>
                <li>Prenez une feuille blanche et écrivez tout ce dont vous vous souvenez, sous forme de schéma ou de phrases courtes.</li>
                <li>Comparez votre restitution avec la source pour identifier précisément les manques et corriger les erreurs.</li>
            </ul>
            <p>La difficulté même de cet effort d'extraction est ce qui consolide les synapses. En neurosciences, on parle de « difficulté désirable » (Robert Bjork) : plus l'accès au souvenir demande un effort conscient, plus la trace mnésique devient indélébile.</p>

            <h2 id="repetition-espacee">La courbe de l'oubli et la répétition espacée</h2>
            <p>Dès 1885, le psychologue allemand Hermann Ebbinghaus quantifiait la vitesse dramatique à laquelle notre mémoire s'effiloche : en l'absence de révision, nous oublions environ 70% de ce que nous venons d'apprendre dans les premières 48 heures. Cependant, chaque rappel opportun aplatit la courbe de déperdition.</p>
            <p>La règle d'or consiste à réactiver l'information <strong>juste au moment où vous étiez sur le point de l'oublier</strong>. Le rythme optimal d'espacement pour un apprentissage durable suit généralement cette progression :</p>
            <ol>
                <li>Premier rappel : 24 heures après la découverte.</li>
                <li>Deuxième rappel : 3 jours plus tard.</li>
                <li>Troisième rappel : 10 jours plus tard.</li>
                <li>Quatrième rappel : 30 jours plus tard.</li>
            </ol>

            <blockquote>
                « Savoir par cœur n'est pas savoir : c'est tenir ce qu'on a donné en garde à sa mémoire. »<br>— Michel de Montaigne
            </blockquote>

            <h2 id="technique-feynman">La technique de Feynman en 4 étapes</h2>
            <p>Le prix Nobel de physique Richard Feynman était réputé pour sa capacité à expliquer les théories quantiques les plus vertigineuses en termes limpides. Sa méthode d'apprentissage repose sur un principe impitoyable : <em>si vous ne pouvez pas expliquer un concept simplement à un enfant de 10 ans, c'est que vous ne le comprenez pas vous-même.</em></p>
            <ol>
                <li><strong>Choisissez le sujet :</strong> écrivez son intitulé en haut d'une feuille vierge.</li>
                <li><strong>Enseignez-le fictivement :</strong> rédigez une explication complète comme si vous vous adressiez à un profane complet. Interdiction absolue d'utiliser le jargon technique.</li>
                <li><strong>Identifiez vos zones d'ombre :</strong> dès que vous butez, hésitez ou recourez à un mot complexe pour masquer un vide logique, retournez à vos sources d'apprentissage. Travaillez jusqu'à combler la brèche.</li>
                <li><strong>Simplifiez et créez une analogie :</strong> polissez votre texte, utilisez une métaphore concrète tirée de la vie quotidienne pour ancrer la logique.</li>
            </ol>

            <h2 id="interleaving">L'entremêlement des savoirs (Interleaving)</h2>
            <p>L'erreur classique consiste à pratiquer le travail « par blocs massifs » : passer 4 heures d'affilée sur un seul sujet ou résoudre 50 exercices identiques. Bien que cela donne une sensation trompeuse de fluidité immédiate, la rétention à long terme est médiocre.</p>
            <p>L'entremêlement (<em>interleaving</em>) consiste à alterner 2 ou 3 compétences ou disciplines connexes durant la même session d'étude. Cela oblige votre cerveau à discriminer continuellement la bonne stratégie à mobiliser, développant ainsi une agilité intellectuelle supérieure.</p>

            <h2 id="programme-7-jours">Plan d'action d'apprentissage sur 7 jours</h2>
            <p>Pour tester la puissance de ces principes sur un sujet que vous souhaitez assimiler :</p>
            <ul>
                <li><strong>Jour 1 :</strong> Lecture attentive d'un chapitre clé + test de restitution sur feuille blanche.</li>
                <li><strong>Jour 2 :</strong> Rédaction de l'explication Feynman en termes profanes (15 min).</li>
                <li><strong>Jour 4 :</strong> Séance de rappel flash sans notes + résolution d'un problème concret.</li>
                <li><strong>Jour 7 :</strong> Enseignement réel du concept à un collègue ou enregistrement audio d'un résumé de 3 minutes.</li>
            </ul>
        `
    },
    {
        filename: 'curiosite-projet-concret.html',
        category: 'Passage à l\'Action',
        title: "Transformer une simple curiosité en projet concret",
        description: "Le cheminement méthodique de l'étincelle intellectuelle au premier prototype fonctionnel grâce à la règle des 72 heures et au cadrage d'hypothèses.",
        dateIso: '2024-10-16',
        dateStr: '16 octobre 2024',
        readingTime: '10 min',
        lead: "Nous avons tous des dizaines d'idées qui nous traversent l'esprit : un sujet passionnant à explorer, un livre à écrire, un outil à programmer, une offre à lancer. Pourtant, 99% de ces intuitions meurent dans l'oubli. Comment franchir le gouffre qui sépare l'intérêt passager de la réalisation concrète ?",
        toc: [
            { id: 'piege-curiosite-passive', title: 'Le piège de la curiosité passive' },
            { id: 'regle-72h', title: 'La règle impitoyable des 72 heures' },
            { id: 'cadrage-hypothese', title: 'Formuler l\'hypothèse minimale testable' },
            { id: 'mvp-intellectuel', title: 'Le concept de MVP intellectuel' },
            { id: 'pieges-abandon', title: 'Surmonter le creux de la désillusion' },
            { id: 'feuille-route', title: 'Votre feuille de route en 5 étapes' }
        ],
        related: [
            { slug: 'idee-premiere-version-imparfaite', title: 'Première version imparfaite' },
            { slug: 'techniques-visualisation-projet', title: 'Visualisation de projet' },
            { slug: 'echec-matiere-premiere-innovation', title: 'L\'échec comme matière première' }
        ],
        tags: ['action', 'prototypage', 'projets', 'exécution', 'mvp'],
        product: {
            title: 'Le Carnet de l\'Innovateur',
            desc: 'Le workbook interactif complet pour cadrer vos idées, valider leur faisabilité et déployer votre premier prototype.',
            anchor: 'carnet-innovateur'
        },
        bodyHtml: `
            <h2 id="piege-curiosite-passive">Le piège de la curiosité passive</h2>
            <p>La curiosité est souvent célébrée comme la plus noble des vertus intellectuelles. C'est vrai, à une condition fondamentale : qu'elle ne serve pas d'alibi à la procrastination. Il existe une forme perverse de complaisance à accumuler des signets de navigateurs, des articles sauvegardés sur Pocket et des livres entassés sur une table de chevet sans jamais rien en faire.</p>
            <p>La curiosité passive consomme de l'énergie mentale sans produire le moindre impact tangible sur votre réalité. Pour qu'une curiosité devienne féconde, elle doit être incarnée dans un artefact : un texte rédigé, une maquette dessinée, un système testé, une offre soumise au public.</p>

            <h2 id="regle-72h">La règle impitoyable des 72 heures</h2>
            <p>Le stratège et auteur Bodo Schäfer a formulé une loi d'observation universelle : <strong>si vous ne posez pas le premier acte concret pour réaliser une idée dans les 72 heures suivant son apparition, la probabilité que vous la réalisiez un jour tombe à moins de 1%</strong>.</p>
            <p>L'enthousiasme initial possède une demi-vie très courte. Après trois jours, les doutes, les distractions quotidiennes et la friction d'inertie reprennent le dessus. Ce premier geste n'a pas besoin d'être grandiose :</p>
            <ul>
                <li>Acheter le nom de domaine de votre futur projet.</li>
                <li>Rédiger la table des matières de votre prochain guide en 10 lignes.</li>
                <li>Envoyer un message à une personne ressource pour lui poser une question précise.</li>
                <li>Créer le dossier racine de votre code et initialiser le dépôt Git.</li>
            </ul>

            <h2 id="cadrage-hypothese">Formuler l'hypothèse minimale testable</h2>
            <p>Trop de projets meurent écrasés sous le poids de leur propre ambition prématurée. Dès que l'idée émerge, nous l'alourdissons : il nous faut un site web parfait, une charte graphique luxueuse, un modèle économique à 5 ans, une infrastructure scalable. C'est le meilleur moyen de se décourager avant même d'avoir commencé.</p>
            <p>Appliquez la méthode scientifique. Résumez votre curiosité en une hypothèse simple : <em>« Si je produis X ressource concise résolvant Y problème pour Z personnes, est-ce que cela suscite un intérêt vérifiable ? »</em> Tout ce qui n'est pas strictement indispensable pour répondre à cette question doit être impitoyablement biffé.</p>

            <blockquote>
                « Le meilleur moyen de savoir si votre idée tient la route n'est pas d'y penser plus fort : c'est de la heurter à la réalité le plus tôt possible. »
            </blockquote>

            <h2 id="mvp-intellectuel">Le concept de MVP intellectuel</h2>
            <p>Le monde des startups technologiques utilise le concept de <em>Minimum Viable Product</em> (produit minimum viable). En matière de création intellectuelle ou éditoriale, nous devons construire un <strong>MVP intellectuel</strong> :</p>
            <ul>
                <li>Plutôt que d'écrire un livre de 300 pages, commencez par un essai structuré de 2 000 mots sur votre site ou sur LinkedIn.</li>
                <li>Plutôt que de concevoir une formation vidéo de 20 heures, donnez un atelier interactif de 45 minutes sur Zoom à 5 personnes.</li>
                <li>Plutôt que de développer une application complexe, construisez un prototype basse fidélité avec des outils no-code ou des feuilles de calcul.</li>
            </ul>

            <h2 id="pieges-abandon">Surmonter le creux de la désillusion</h2>
            <p>Dans la courbe d'apprentissage et de création, il existe une phase inévitable que Seth Godin nomme <em>The Dip</em> (le gouffre). Après l'euphorie de la découverte survient le labeur ingrat de la finition : les détails techniques récalcitrants, la fatigue, le sentiment que ce que vous faites est médiocre. C'est précisément à cet endroit que 95% des gens abandonnent.</p>
            <p>Sachez à l'avance que ce creux fait partie du cahier des charges. Ce n'est pas le signe que votre projet est mauvais : c'est le péage obligatoire que tout créateur doit acquitter pour passer du statut d'amateur à celui d'artisan accompli.</p>

            <h2 id="feuille-route">Votre feuille de route en 5 étapes</h2>
            <p>Voici le protocole exact pour transformer votre prochaine curiosité en livrable achevé :</p>
            <ol>
                <li><strong>Définir le format de sortie (Jour 1) :</strong> Choisissez un livrable unique et délimité (un article, une infographie, un mini-guide de 10 pages).</li>
                <li><strong>La collecte chronométrée (Jours 2 à 4) :</strong> Récoltez des notes et des exemples pendant 3 jours maximum. Interdiction de prolonger la recherche indéfiniment.</li>
                <li><strong>L'ébauche brute (Jours 5 et 6) :</strong> Produisez la première version complète sans retouche ni autocensure.</li>
                <li><strong>La révision chirurgicale (Jour 7) :</strong> Supprimez le tiers du texte, clarifiez les titres et vérifiez les liens.</li>
                <li><strong>La publication / livraison (Jour 8) :</strong> Mettez le document entre les mains d'au moins 3 personnes réelles et recueillez leurs observations.</li>
            </ol>
        `
    }
];

// Execution
articles.forEach(art => {
    const filePath = path.join(articlesDir, art.filename);
    const html = buildArticleHtml(art);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✓ Généré : ${art.filename}`);
});
