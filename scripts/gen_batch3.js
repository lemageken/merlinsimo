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
        filename: 'inspirer-grands-createurs.html',
        category: 'Créativité & Idéation',
        title: "S'inspirer des grands créateurs sans les copier",
        description: "La différence fondamentale entre le plagiat servile et la généalogie féconde d'influences. Comment synthétiser plusieurs maîtres pour forger sa propre signature.",
        dateIso: '2024-09-28',
        dateStr: '28 septembre 2024',
        readingTime: '10 min',
        lead: "Le jeune créateur redoute souvent l'influence de ses maîtres par peur de n'être qu'un imitateur pâle. C'est une méprise complète sur la nature même de l'art et de l'innovation. L'originalité pure n'existe pas : toute création est un remix audacieux et assumé.",
        toc: [
            { id: 'illusion-creation-ex-nihilo', title: 'L\'illusion de la création ex nihilo' },
            { id: 'vol-d-artiste', title: 'Le « vol » d\'artiste selon Austin Kleon' },
            { id: 'genealogie-influences', title: 'Bâtir son arbre généalogique intellectuel' },
            { id: 'alchimie-synthese', title: 'L\'alchimie de la synthèse : croiser 3 maîtres' },
            { id: 'plagiat-vs-hommage', title: 'La frontière éthique : plagiat vs filiation' },
            { id: 'exercice-transposition', title: 'L\'exercice pratique de la rétro-ingénierie créative' }
        ],
        related: [
            { slug: 'identite-creative-assumer-style', title: 'Développer son identité créative' },
            { slug: 'connexions-inattendues-domaines', title: 'Connexions entre domaines' },
            { slug: 'vie-creative-plutot-attendre-talent', title: 'Construire une vie créative' }
        ],
        tags: ['inspiration', 'style', 'créateurs', 'remix', 'originalité'],
        product: null,
        bodyHtml: `
            <h2 id="illusion-creation-ex-nihilo">L'illusion de la création ex nihilo</h2>
            <p>Le mot latin <em>inventio</em> ne signifie pas fabriquer à partir de rien : il signifie « trouver, découvrir ce qui était déjà là ». Tous les géants de l'histoire humaine se sont juchés sur les épaules de prédécesseurs dont ils ont méthodiquement décortiqué la technique avant de s'en émanciper.</p>
            <p>Jean-Sébastien Bach a recopié à la main, note par note, les partitions de Vivaldi pour comprendre la mécanique du concerto italien. William Shakespeare a puisé la quasi-totalité des intrigues de ses tragédies dans les <em>Vies des hommes illustres</em> de Plutarque et dans les chroniques de Raphael Holinshed. Refuser d'étudier et d'imiter ses pairs sous prétexte de « préserver son originalité » est la recette la plus sûre de la médiocrité naïve.</p>

            <h2 id="vol-d-artiste">Le « vol » d'artiste selon Austin Kleon</h2>
            <p>Dans son manifeste retentissant <em>Steal Like an Artist</em>, Austin Kleon cite cette formule attribuée à Pablo Picasso : <em>« Les mauvais artistes copient, les bons artistes volent. »</em> Que signifie voler dans ce contexte ?</p>
            <ul>
                <li><strong>Le mauvais copieur</strong> prend un seul modèle, en imite les tics superficiels (la mise en page, une accroche à la mode, un filtre de couleur) et tente de faire passer le résultat pour le sien. C'est du plagiat stérile.</li>
                <li><strong>Le voleur d'élite</strong> étudie vingt sources différentes, s'intéresse à la structure profonde de la pensée, extrait les principes moteurs sous-jacents et les recombine pour nourrir un propos inédit.</li>
            </ul>

            <blockquote>
                « Si vous volez à un seul auteur, c'est du plagiat. Si vous volez à vingt auteurs, c'est de la recherche. »<br>— Wilson Mizner
            </blockquote>

            <h2 id="genealogie-influences">Bâtir son arbre généalogique intellectuel</h2>
            <p>Ne vous dispersez pas en essayant de tout suivre. Choisissez un mentor historique ou contemporain qui vous fascine profondément. Étudiez tout ce qu'il a produit. Puis, posez la question décisive : <strong>« Qui étaient les maîtres de mon maître ? De quoi se nourrissait-il ? »</strong></p>
            <p>Remontez la chaîne : découvrez les auteurs que votre auteur favori admirait dans sa jeunesse. Vous formerez ainsi votre propre lignée intellectuelle, solide et enracinée, plutôt que de surfer sur les tendances éphémères du moment.</p>

            <h2 id="alchimie-synthese">L'alchimie de la synthèse : croiser 3 maîtres</h2>
            <p>L'originalité personnelle naît mathématiquement au carrefour de trois influences mutuellement incompatibles :</p>
            <ul>
                <li>Si vous écrivez comme George Orwell, vous n'êtes qu'un sous-Orwell.</li>
                <li>Si vous essayez d'écrire avec la concision dépouillée d'Orwell, la rigueur conceptuelle d'un juriste en droit public et le sens de la dramaturgie d'un cinéaste comme Christopher Nolan, vous créez quelque chose d'absolument unique.</li>
            </ul>
            <p>C'est la friction entre des modèles divergents qui fait jaillir l'étincelle de votre propre voix.</p>

            <h2 id="plagiat-vs-hommage">La frontière éthique : plagiat vs filiation</h2>
            <p>Le critère de démarcation est simple : le plagiaire cherche à dissimuler sa source par vanité ; le créateur authentique cite ses maîtres avec fierté et reconnaissance. L'hommage enrichit le dialogue culturel, tandis que le vol servile n'est qu'un parasite sans lendemain.</p>

            <h2 id="exercice-transposition">L'exercice pratique de la rétro-ingénierie créative</h2>
            <p>Prenez une œuvre que vous admirez éperdument (un texte, un logo, une conférence TED, une interface d'application) :</p>
            <ol>
                <li>Démontez-la pièce par pièce : combien de parties ? Quel rythme ? Quel tempo émotionnel ?</li>
                <li>Traduisez son squelette sous forme de schéma abstrait sans contenu.</li>
                <li>Remplissez ce même squelette avec un sujet totalement étranger à l'original (votre domaine d'expertise). Vous constaterez que le résultat ne ressemble en rien à la source, tout en bénéficiant de son exceptionnelle robustesse structurelle.</li>
            </ol>
        `
    },
    {
        filename: 'idee-premiere-version-imparfaite.html',
        category: 'Passage à l\'Action',
        title: "Comment passer d'une idée à une première version imparfaite",
        description: "Vaincre la paralysie du premier jet. Le protocole v0.1 en 48 heures pour confronter ses intuitions à la résistance du monde réel.",
        dateIso: '2024-09-25',
        dateStr: '25 septembre 2024',
        readingTime: '9 min',
        lead: "Le moment le plus dangereux pour un projet créatif est le passage entre la pureté immaculée de l'idée mentale et la laideur inévitable du premier jet. Tant que l'idée reste dans votre tête, elle est parfaite. Dès qu'elle touche le papier ou l'écran, elle déçoit. Apprendre à aimer cette laideur provisoire est la compétence reine du créateur.",
        toc: [
            { id: 'terreur-premier-jet', title: 'La terreur du premier jet' },
            { id: 'brouillon-affreux', title: 'L\'apologie du brouillon affreux d\'Anne Lamott' },
            { id: 'protocole-48h', title: 'Le protocole commando 48 heures' },
            { id: 'regle-80-20', title: 'La loi des 80/20 appliquée au prototypage' },
            { id: 'dissocier-fabrication-retouche', title: 'Dissocier strictement la fabrication de la retouche' },
            { id: 'confrontation-reelle', title: 'Le saut dans l\'arène : tester sans tarder' }
        ],
        related: [
            { slug: 'curiosite-projet-concret', title: 'Transformer une curiosité en projet' },
            { slug: 'echec-matiere-premiere-innovation', title: 'L\'échec comme matière première' },
            { slug: 'techniques-visualisation-projet', title: 'Techniques de visualisation de projet' }
        ],
        tags: ['action', 'prototypage', 'mvp', 'perfectionnisme', 'exécution'],
        product: {
            title: 'Le Carnet de l\'Innovateur',
            desc: 'Le workbook guidé pas-à-pas pour franchir le gouffre de la version 0.1 et structurer votre premier prototype testable.',
            anchor: 'carnet-innovateur'
        },
        bodyHtml: `
            <h2 id="terreur-premier-jet">La terreur du premier jet</h2>
            <p>Une idée imaginaire ne souffre d'aucun défaut : ses couleurs sont éclatantes, son intrigue est captivante, son modèle économique est invincible. Dès que vous tentez de l'écrire ou de la coder, la réalité vous assène une claque : vos phrases sont maladroites, vos paragraphes trébuchent, votre interface est bancale.</p>
            <p>C'est ce gouffre entre le bon goût esthétique d'un créateur et sa capacité d'exécution immédiate qu'Ira Glass a si brillamment décrit : <em>« Pendant les premières années de votre pratique, ce que vous produisez n'est tout simplement pas aussi bon que ce que vous aimez. Beaucoup de gens abandonnent à ce stade. »</em></p>

            <h2 id="brouillon-affreux">L'apologie du brouillon affreux d'Anne Lamott</h2>
            <p>Dans son classique de l'écriture <em>Bird by Bird</em>, Anne Lamott consacre un chapitre entier à ce qu'elle nomme avec franchise les <strong>« Shitty First Drafts »</strong> (les premiers jets exécrables). Sa thèse est libératrice : pour parvenir à un chef-d'œuvre au troisième jet, il faut s'autoriser un premier jet honteux, brouillon, boursouflé et décousu.</p>
            <p>La première version n'a qu'une seule mission sur cette terre : <strong>exister</strong>. Elle ne doit pas séduire, elle ne doit pas convaincre, elle doit simplement matérialiser la matière première que vous taillerez ensuite au burin.</p>

            <blockquote>
                « On ne peut pas peaufiner une page blanche. Un texte médiocre peut être corrigé ; le néant reste le néant. »
            </blockquote>

            <h2 id="protocole-48h">Le protocole commando 48 heures</h2>
            <p>Pour ne pas vous laisser engloutir par le perfectionnisme, imposez-vous un compte à rebours serré :</p>
            <ol>
                <li><strong>Heure 0 à 12 (Le squelette nu) :</strong> Rédigez le plan en 5 puces ou dessinez les 3 écrans essentiels de l'application sur une feuille de papier millimétré.</li>
                <li><strong>Heure 12 à 36 (Le sprint d'incarnation) :</strong> Écrivez ou assemblez sans interruption, le minuteur en marche, en vous interdisant formellement de revenir en arrière pour corriger une faute ou un alignement.</li>
                <li><strong>Heure 36 à 48 (Le gel de version) :</strong> Exportez le document tel quel au format PDF ou mettez le prototype en ligne sur une URL privée. C'est votre version 0.1.</li>
            </ol>

            <h2 id="regle-80-20">La loi des 80/20 appliquée au prototypage</h2>
            <p>80% de la valeur perçue d'une idée réside dans 20% de ses fonctionnalités clés. Le reste n'est que vernis cosmétique. Identifiez l'élément irréductible sans lequel votre concept n'a plus aucun sens :</p>
            <ul>
                <li>Pour un livre : est-ce le style d'introduction ou la force de la thèse centrale ?</li>
                <li>Pour un logiciel : est-ce l'animation des menus ou la résolution instantanée de la requête ?</li>
            </ul>
            <p>Concentrez toute votre énergie sur ce noyau vital et abandonnez sans remords le superflu pour la version 0.1.</p>

            <h2 id="dissocier-fabrication-retouche">Dissocier strictement la fabrication de la retouche</h2>
            <p>L'écueil mortel consiste à vouloir écrire et éditer dans le même souffle. Ces deux activités mobilisent des régions cérébrales antagonistes : la génération créative nécessite une baisse de l'inhibition préfrontale, tandis que l'édition critique exige une vigilance analytique exacerbée.</p>
            <p>Si vous essayez de faire les deux en même temps, vous avancez le pied sur l'accélérateur et l'autre sur le frein. Règle absolue : <strong>rédigez le jour 1 avec la bienveillance d'un inventeur fou ; corrigez le jour 2 avec la froideur d'un procureur général.</strong></p>

            <h2 id="confrontation-reelle">Le saut dans l'arène : tester sans tarder</h2>
            <p>Dès que votre première version existe, confiez-la à deux personnes de confiance dont vous connaissez la lucidité. Ne leur demandez pas « Est-ce que tu aimes ? » (elles vous répondront poliment que oui pour ne pas vous froisser). Demandez-leur : <em>« Où as-tu commencé à t'ennuyer ? Qu'est-ce qui n'est pas clair à la première lecture ? »</em> Vous avez franchi le cap le plus difficile : votre idée est désormais un fait du monde extérieur.</p>
        `
    },
    {
        filename: 'questions-puissantes-debloquer.html',
        category: 'Esprit Critique & Réfutation',
        title: "Les questions puissantes qui débloquent une réflexion",
        description: "L'art du questionnement socratique et contrefactuel. 25 questions cardinales pour dissoudre les faux dilemmes et éclairer les angles morts.",
        dateIso: '2024-09-22',
        dateStr: '22 septembre 2024',
        readingTime: '10 min',
        lead: "Face à un problème complexe, notre réflexe immédiat est de chercher une réponse rapide. C'est souvent une grave erreur. Les réponses ferment la conversation ; les questions puissantes l'ouvrent et déplacent le centre de gravité de l'esprit.",
        toc: [
            { id: 'art-question-socratique', title: 'L\'art oublié du questionnement socratique' },
            { id: 'anatomie-mauvaise-question', title: 'L\'anatomie d\'une question stérile' },
            { id: 'recadrage-cognitif', title: 'La magie du recadrage : les questions « Et si ? »' },
            { id: '25-questions-cardinales', title: 'Les 25 questions cardinales par catégorie' },
            { id: 'pensee-contrefactuelle', title: 'La pensée contrefactuelle comme révélateur' },
            { id: 'exercice-audition', title: 'L\'auto-audition sur feuille blanche' }
        ],
        related: [
            { slug: 'penser-autrement-exercices', title: 'Penser autrement' },
            { slug: 'routine-reflexion-personnelle', title: 'Routine de réflexion personnelle' },
            { slug: 'esprit-critique-imagination', title: 'Esprit critique et imagination' }
        ],
        tags: ['questions', 'socrate', 'modèles-mentaux', 'clarification', 'décision'],
        product: {
            title: 'Penser Mieux : 30 Jours de Réflexion',
            desc: 'Le recueil complet des protocoles de questionnement socratique pour trancher avec certitude dans l\'incertitude.',
            anchor: 'penser-mieux'
        },
        bodyHtml: `
            <h2 id="art-question-socratique">L'art oublié du questionnement socratique</h2>
            <p>Socrate n'a laissé aucun écrit. Sa méthode, la <em>maïeutique</em> (l'art de faire accoucher les esprits), consistait uniquement à poser des questions d'une précision chirurgicale sur les places publiques d'Athènes. En interrogeant ses concitoyens sur ce qu'ils croyaient savoir de la justice, du courage ou de la piété, il révélait les contradictions internes de leurs dogmes.</p>
            <p>Une question puissante ne cherche pas à vérifier une conformité scolaire : elle <strong>force le cortex à recalculer l'ensemble de la trajectoire</strong> en brisant les évidences confortables.</p>

            <h2 id="anatomie-mauvaise-question">L'anatomie d'une question stérile</h2>
            <p>La plupart de nos questions quotidiennes sont des culs-de-sac cognitifs :</p>
            <ul>
                <li><em>« Pourquoi cela m'arrive-t-il à moi ? »</em> engendre l'apitoiement et la posture de victime.</li>
                <li><em>« Est-ce que ce projet va marcher ? »</em> paralyse par anticipation anxiogène d'un futur inconnaissable.</li>
                <li><em>« Qui a commis cette erreur ? »</em> déclenche les réflexes de dissimulation et de culpabilisation.</li>
            </ul>
            <p>Une question féconde est <strong>ouverte, orientée vers l'action, formulée à la première personne et axée sur l'apprentissage</strong>.</p>

            <blockquote>
                « La qualité de votre vie dépend directement de la qualité des questions que vous avez le courage de vous poser. »
            </blockquote>

            <h2 id="recadrage-cognitif">La magie du recadrage : les questions « Et si ? »</h2>
            <p>En design thinking, la formule consacrée <em>« How might we... ? »</em> (Comment pourrions-nous... ?) a permis de concevoir des innovations majeures en transformant une contrainte paralysante en opportunité de jeu.</p>
            <p>Au lieu de dire : <em>« Nous n'avons aucun budget publicitaire »</em>, formulez : <em>« Comment pourrions-nous faire de notre absence totale de budget marketing notre plus puissant argument d'authenticité et de viralité ? »</em></p>

            <h2 id="25-questions-cardinales">Les 25 questions cardinales par catégorie</h2>
            <p>Voici une sélection d'interrogations à mobiliser dès que vous ressentez une stagnation :</p>
            
            <h3>Sur la clarté et l'essentiel :</h3>
            <ul>
                <li>Si je ne pouvais accomplir qu'une seule tâche cette semaine, laquelle rendrait toutes les autres superflues ?</li>
                <li>Quelle vérité fondamentale suis-je actuellement en train de fuir ?</li>
                <li>Quel est le problème réel derrière le problème apparent dont je me plains ?</li>
                <li>À quoi suis-je en train de dire « oui » en acceptant cette demande secondaire ?</li>
                <li>Si cette situation était en réalité très simple, à quoi ressemblerait-elle ?</li>
            </ul>

            <h3>Sur le courage et l'audace :</h3>
            <ul>
                <li>Quelle conversation difficile suis-je en train de différer par lâcheté confortable ?</li>
                <li>Que ferais-je si l'échec n'entraînait aucune conséquence financière ni statutaire ?</li>
                <li>Quel est le pire scénario absolu, et comment m'en relèverais-je en 30 jours ?</li>
                <li>Quelle croyance m'a été utile hier mais est devenue un boulet aujourd'hui ?</li>
                <li>Si je devais démissionner de ma propre façon de penser, quelle décision prendrais-je ?</li>
            </ul>

            <h2 id="pensee-contrefactuelle">La pensée contrefactuelle comme révélateur</h2>
            <p>Le raisonnement contrefactuel consiste à imaginer ce qui se serait passé si un événement clé avait été différent : <em>« Si cette crise sanitaire n'avait pas eu lieu, serions-nous encore prisonniers de nos anciens locaux ? Si mon principal client m'abandonnait demain matin, quel nouveau modèle serais-je contraint de bâtir dans l'urgence ? »</em></p>
            <p>Ce jeu de simulation mentale révèle les fragilités systémiques bien avant qu'elles ne se manifestent dans les faits.</p>

            <h2 id="exercice-audition">L'auto-audition sur feuille blanche</h2>
            <p>Chaque premier vendredi du mois, isolez-vous 30 minutes sans appareil électronique. Choisissez 3 questions parmi la liste ci-dessus, inscrivez-les au stylo en haut de trois feuilles distinctes, et écrivez sans lever la main jusqu'à épuisement de votre argumentaire. Vous serez sidéré par la limpidité des décisions qui émergent dès que l'on accepte d'interroger ses propres faux-fuyants.</p>
        `
    },
    {
        filename: 'esprit-critique-imagination.html',
        category: 'Esprit Critique & Réfutation',
        title: "Cultiver son esprit critique sans perdre son imagination",
        description: "Articuler la phase divergente (foisonnement d'hypothèses) et la phase convergente (tri rigoureux) sans étouffer l'étincelle créative.",
        dateIso: '2024-09-19',
        dateStr: '19 septembre 2024',
        readingTime: '11 min',
        lead: "On oppose trop souvent l'esprit critique et l'imagination poétique. D'un côté, le censeur impitoyable qui traque le biais et exige des preuves ; de l'autre, le rêveur qui s'évade dans les chimères. En vérité, l'intelligence d'exception naît de l'alliance indissociable de ces deux facultés.",
        toc: [
            { id: 'faux-dilemme', title: 'Le faux dilemme entre rigueur et folie créative' },
            { id: 'double-diamant', title: 'Le modèle du Double Diamant (Divergence / Convergence)' },
            { id: 'biais-cognitifs', title: 'Les biais qui étranglent l\'imagination naissante' },
            { id: 'principe-oui-et', title: 'Le principe d\'improvisation du « Oui, et... »' },
            { id: 'censeur-vs-editeur', title: 'Distinguer le censeur intérieur de l\'éditeur bienveillant' },
            { id: 'exercice-chapeaux', title: 'La discipline des Six Chapeaux de de Bono' }
        ],
        related: [
            { slug: 'penser-autrement-exercices', title: 'Penser autrement' },
            { slug: 'questions-puissantes-debloquer', title: 'Questions puissantes' },
            { slug: 'observer-quotidien-regard-neuf', title: 'Observer le quotidien' }
        ],
        tags: ['esprit-critique', 'imagination', 'double-diamant', 'créativité', 'rigueur'],
        product: null,
        bodyHtml: `
            <h2 id="faux-dilemme">Le faux dilemme entre rigueur et folie créative</h2>
            <p>Dans les caricatures académiques, le scientifique est froid et méthodique, tandis que l'artiste est impulsif et irrationnel. L'histoire des grandes découvertes prouve pourtant que cette dichotomie est absurde. Albert Einstein insistait sur le fait que <em>« l'imagination est plus importante que le savoir »</em>, tout en consacrant des années de travail acharné à formaliser mathématiquement ses intuitions pour qu'elles résistent à l'épreuve de la réfutation expérimentale.</p>
            <p>Une imagination sans esprit critique produit des hallucinations stériles et des croyances pseudoscientifiques ; un esprit critique sans imagination produit un scepticisme amer, incapable de poser la moindre pierre d'un édifice nouveau.</p>

            <h2 id="double-diamant">Le modèle du Double Diamant (Divergence / Convergence)</h2>
            <p>Formalisé par le <em>Design Council</em> britannique en 2005, le <strong>Double Diamant</strong> cartographie le rythme respiratoire de toute innovation réussie :</p>
            <ul>
                <li><strong>Phase 1 : Divergence exploratoire (Diamant 1).</strong> On ouvre le champ au maximum. On explore le problème sous tous les angles sans aucun filtre critique. Toutes les hypothèses, même les plus absurdes, sont accueillies.</li>
                <li><strong>Phase 2 : Convergence de cadrage.</strong> L'esprit critique entre en jeu. On trie, on recoupe avec les faits réels, on formule la définition chirurgicale du problème.</li>
                <li><strong>Phase 3 : Divergence de solutions (Diamant 2).</strong> Nouveau foisonnement créatif : imaginer 50 manières de résoudre le problème cadré.</li>
                <li><strong>Phase 4 : Convergence d'exécution.</strong> Sélection rationnelle, tests de résistance, élimination des fausses pistes et livraison rigoureuse.</li>
            </ul>

            <blockquote>
                « L'intelligence, c'est savoir concevoir simultanément deux idées opposées dans son esprit tout en conservant la capacité de fonctionner. »<br>— F. Scott Fitzgerald
            </blockquote>

            <h2 id="biais-cognitifs">Les biais qui étranglent l'imagination naissante</h2>
            <p>Le principal danger pour une idée nouvelle est l'application prématurée de l'esprit critique. Deux biais majeurs guettent le penseur :</p>
            <ol>
                <li><strong>Le biais de statu quo :</strong> tendance irrationnelle à préférer la situation actuelle simplement parce qu'elle est connue et sécurisante.</li>
                <li><strong>Le biais de confirmation inversé :</strong> chercher immédiatement toutes les raisons pour lesquelles une idée ne marchera pas afin de s'éviter l'effort d'essayer.</li>
            </ol>

            <h2 id="principe-oui-et">Le principe d'improvisation du « Oui, et... »</h2>
            <p>Dans le théâtre d'improvisation, la règle fondamentale interdit de dire « Non » à une proposition de jeu faite par un partenaire. Si quelqu'un vous dit : « Regarde, le sol est recouvert de lave ! », vous ne répondez pas « C'est faux, c'est du parquet ». Vous dites : <em>« Oui, et sautons vite sur cette table pour ne pas brûler nos bottes ! »</em></p>
            <p>Dans vos phases d'idéation, interdisez-vous le réflexe mortifère du « Oui, mais... ». Remplacez-le systématiquement par <strong>« Oui, et... comment pourrions-nous exploiter cette piste folle ? »</strong> Le tamis critique viendra plus tard.</p>

            <h2 id="censeur-vs-editeur">Distinguer le censeur intérieur de l'éditeur bienveillant</h2>
            <p>Le censeur intérieur attaque votre identité : <em>« Tu es ridicule, cela a déjà été fait cent fois, tu n'es pas légitime pour parler de ce sujet. »</em> L'éditeur bienveillant travaille sur le matériau : <em>« Cette troisième partie est trop verbeuse, cette transition manque de fluidité, cet exemple n'est pas assez sourcé. »</em> Apprenez à faire taire le premier et à écouter scrupuleusement le second.</p>

            <h2 id="exercice-chapeaux">La discipline des Six Chapeaux de de Bono</h2>
            <p>Pour faire cohabiter harmonieusement ces facultés sans conflit interne, pratiquez la méthode des <strong>Six Chapeaux de la Réflexion</strong> d'Edward de Bono :</p>
            <ul>
                <li><strong>Chapeau Blanc :</strong> Faits bruts, données vérifiables, chiffres neutres (sans interprétation).</li>
                <li><strong>Chapeau Rouge :</strong> Émotions pures, intuitions, ressentis sans justification.</li>
                <li><strong>Chapeau Vert :</strong> Créativité débridée, provocations, alternatives saugrenues.</li>
                <li><strong>Chapeau Noir :</strong> Jugement critique, identification scrupuleuse des risques et failles.</li>
                <li><strong>Chapeau Jaune :</strong> Optimisme logique, bénéfices potentiels, scénarios du meilleur.</li>
                <li><strong>Chapeau Bleu :</strong> Chef d'orchestre, organisation du processus de pensée.</li>
            </ul>
            <p>En portant ces chapeaux successivement et jamais en même temps, vous sanctuarisez l'espace de votre imagination tout en garantissant une solidité critique à toute épreuve.</p>
        `
    },
    {
        filename: 'ennui-silence-marche-idees.html',
        category: 'Créativité & Idéation',
        title: "L'ennui, le silence et la marche comme sources d'idées",
        description: "Neurosciences du mode par défaut : pourquoi l'absence d'input extérieur et le rythme podométrique déclenchent les plus grandes percées intuitives.",
        dateIso: '2024-09-16',
        dateStr: '16 septembre 2024',
        readingTime: '9 min',
        lead: "Nous vivons dans une société qui a déclaré la guerre au vide. À la moindre seconde d'attente à un feu rouge ou dans une file de supermarché, nous dégainons notre écran pour combler l'abîme. Pourtant, l'ennui n'est pas un défaut de stimulation : c'est le compost silencieux où germent les idées les plus originales.",
        toc: [
            { id: 'peur-du-vide', title: 'La panique moderne du silence' },
            { id: 'reseau-mode-defaut', title: 'Les neurosciences du Réseau du Mode par Défaut' },
            { id: 'vertus-ennui', title: 'Les vertus génératives de l\'ennui assumé' },
            { id: 'philosophie-marche', title: 'La philosophie de la marche solitaire' },
            { id: 'espaces-blancs', title: 'Sanctuariser des « espaces blancs » dans sa semaine' },
            { id: 'protocole-silence', title: 'L\'exercice de l\'heure d\'immobilité' }
        ],
        related: [
            { slug: 'retrouver-creativite-bloque', title: 'Retrouver sa créativité bloquée' },
            { slug: 'habitudes-esprits-creatifs', title: 'Les habitudes des esprits créatifs' },
            { slug: 'developper-attention-distractions', title: 'Développer son attention' }
        ],
        tags: ['ennui', 'silence', 'marche', 'mode-par-défaut', 'neurosciences'],
        product: null,
        bodyHtml: `
            <h2 id="peur-du-vide">La panique moderne du silence</h2>
            <p>En 2014, des chercheurs de l'Université de Virginie et de Harvard ont mené une expérience stupéfiante : ils ont invité des volontaires à s'asseoir seuls dans une pièce nue pendant 15 minutes, sans téléphone, sans livre, sans carnet, simplement avec leurs pensées. Ils avaient toutefois à disposition un bouton leur permettant de s'administrer un choc électrique douloureux s'ils le souhaitaient.</p>
            <p>Le résultat donne le vertige : <strong>67% des hommes et 25% des femmes ont préféré s'auto-infliger des décharges électriques plutôt que de demeurer seuls avec leur propre esprit pendant un quart d'heure</strong>. Cette intolérance au silence est le mal du siècle.</p>

            <h2 id="reseau-mode-defaut">Les neurosciences du Réseau du Mode par Défaut</h2>
            <p>Lorsque vous êtes concentré sur une tâche précise (remplir une feuille Excel, lire un contrat), votre cerveau mobilise le <em>Central Executive Network</em> (réseau exécutif central). Mais dès que vous cessez toute activité ciblée — en regardant les nuages par la fenêtre ou en marchant le long d'une rivière —, un tout autre circuit s'illumine sous imagerie IRM : le <strong>Default Mode Network</strong> (DMN ou réseau du mode par défaut).</p>
            <p>Loin d'être endormi, le cerveau en mode par défaut travaille avec une intensité prodigieuse : il réorganise les souvenirs autobiographiques, tisse des correspondances métaphoriques entre des concepts distants et simule des futurs possibles. C'est le laboratoire secret de l'intuition.</p>

            <blockquote>
                « L'ennui est le seuil des grandes actions : il pousse l'esprit à inventer pour ne pas mourir d'inertie. »
            </blockquote>

            <h2 id="vertus-ennui">Les vertus génératives de l'ennui assumé</h2>
            <p>J.K. Rowling a conçu l'univers entier de Harry Potter lors d'un trajet en train de quatre heures entre Manchester et Londres, bloqué en pleine voie sans livre ni distraction possible. Neil Gaiman confie que son meilleur conseil d'écriture est déconcertant de simplicité : <em>« Rendez-vous si profondément ennuyé que vous n'ayez d'autre choix que d'écrire une histoire pour vous distraire. »</em></p>
            <p>L'ennui crée un différentiel de pression psychologique. Si vous saturez chaque seconde de votre existence de podcasts, de vidéos et de bavardages, vous étouffez l'impulsion naturelle de votre imagination à produire son propre univers.</p>

            <h2 id="philosophie-marche">La philosophie de la marche solitaire</h2>
            <p>Jean-Jacques Rousseau l'écrivait dans ses <em>Confessions</em> : <em>« Je ne puis méditer qu'en marchant ; sitôt que je m'arrête, je ne pense plus, et ma tête ne va qu'avec mes pieds. »</em></p>
            <p>Une étude majeure menée par Marily Oppezzo et Daniel Schwartz à Stanford en 2014 a confirmé cette intuition séculaire : les participants soumis à des tests de créativité divergente affichaient une production d'idées neuves <strong>supérieure de 60% lorsqu'ils marchaient</strong> par rapport au moment où ils étaient assis. Le battement rythmique du pas régule l'activité cérébrale et brise la rigidité des schémas mentaux.</p>

            <h2 id="espaces-blancs">Sanctuariser des « espaces blancs » dans sa semaine</h2>
            <p>Dans la mise en page d'un beau livre, les marges blanches ne sont pas de l'espace gaspillé : c'est ce qui permet au texte de respirer et à l'œil d'absorber la beauté de la typographie. Votre emploi du temps doit comporter ces mêmes marges blanches.</p>
            <p>Chaque semaine, planifiez deux plages de 45 minutes intitulées sobrement « Non-activité ». Interdiction d'avoir un objectif, interdiction d'emporter des écouteurs. Marchez, regardez l'horizon, laissez votre esprit vagabonder.</p>

            <h2 id="protocole-silence">L'exercice de l'heure d'immobilité</h2>
            <p>Une fois par mois, relevez le défi du silence intégral : asseyez-vous dans un fauteuil confortable, sans musique, sans téléphone, avec une simple feuille de papier et un crayon posés sur la table basse à côté de vous. Pendant une heure, contentez-vous d'être là. Les vingt premières minutes seront marquées par une agitation nerveuse. Puis, le tumulte se calmera. Et dans le silence réconcilié, vos pensées les plus profondes et vos idées les plus audacieuses commenceront enfin à remonter à la surface.</p>
        `
    }
];

articles.forEach(art => {
    const filePath = path.join(articlesDir, art.filename);
    const html = buildArticleHtml(art);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✓ Généré : ${art.filename}`);
});
