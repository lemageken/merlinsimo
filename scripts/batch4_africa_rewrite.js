const { updateArticle } = require('./rewrite_helper');

// ============================================================================
// ARTICLE 16 : Les questions puissantes pour débloquer sa pensée
// ============================================================================
updateArticle('questions-puissantes-debloquer.html', {
  lead: `Vous avez remarqué comme au quartier, au carrefour ou en famille, on adore poser des questions qui tournent en rond ? « Mais pourquoi le pays est dur comme ça ? Pourquoi rien ne marche jamais ? Pourquoi c'est toujours sur moi que ça tombe ? » Le problème, c'est que si vous posez une question stérile à votre cerveau, il va vous trouver cinquante excuses stériles pour vous déprimer davantage. Dans nos traditions ancestrales, les sages et les chefs de cour ne perdaient jamais leur temps en lamentations : ils posaient une question courte, tranchante comme une machette, qui retournait toute la situation. Venez, on découvre ensemble les questions magiques qui déverrouillent n'importe quelle situation bloquée !`,
  toc: [
    { id: "piege-questions-lamentations", title: "1. Le piège des questions qui nous enfoncent dans la boue" },
    { id: "sagesse-des-notables-237", title: "2. La sagesse des notables de chefferie : l'art de la question qui éclaire" },
    { id: "questions-solutions-action", title: "3. Remplacer les plaintes par des leviers d'action immédiats" },
    { id: "effet-zeigarnik-marmite", title: "4. L'effet Zeigarnik : la marmite qui mijote dans votre tête la nuit" },
    { id: "trousseau-5-cles-merlin", title: "5. Votre trousseau de 5 clés d'urgence à garder dans la poche" }
  ],
  bodyHtml: `
            <h2 id="piege-questions-lamentations">1. Le piège des questions qui nous enfoncent dans la boue</h2>
            <p>Quand les choses tournent mal (un contrôle raté, une dispute, un projet sans argent), notre réflexe paresseux est de crier : <em>« Pourquoi la vie est injuste ? Pourquoi je n'ai pas de chance ? »</em></p>
            <p>Votre cerveau est un serviteur zélé : si vous lui demandez pourquoi vous n'avez pas de chance, il va vous dresser un catalogue complet de tous vos malheurs depuis votre naissance pour vous prouver que vous avez raison ! Vous repartez avec le moral dans les chaussettes. Mais si vous changez la question, vous réorientez instantanément le faisceau lumineux de votre intelligence vers la sortie.</p>

            <h2 id="sagesse-des-notables-237">2. La sagesse des notables de chefferie : l'art de la question qui éclaire</h2>
            <p>Dans les chefferies traditionnelles de l'Ouest camerounais ou les conseils de sages Sawa et Beti, quand deux personnes arrivent en colère avec un litige compliqué, que fait le sage assis sur son trône ? Est-ce qu'il s'énerve ?</p>
            <p>Non ! Il écoute en silence, caresse sa barbe, et pose une seule question sous forme d'énigme ou de proverbe : <em>« Si la case brûle, est-ce en cherchant qui a allumé l'allumette qu'on sauve les enfants, ou en apportant de l'eau tout de suite ? »</em></p>
            <p>D'un coup, tout le monde se tait, la dispute s'éteint, et les esprits se tournent vers l'action utile. Une question bien posée a plus de force que mille discours d'énervement.</p>

            <h2 id="questions-solutions-action">3. Remplacer les plaintes par des leviers d'action immédiats</h2>
            <p>Bannissez les questions toxiques et adoptez les <strong>questions de pouvoir</strong> :</p>
            <ul>
                <li>Au lieu de dire : <em>« Pourquoi je n'ai pas d'argent pour ce projet ? »</em> ➔ Demandez-vous : <strong>« Que puis-je fabriquer ou lancer dès aujourd'hui avec zéro franc et mes compétences actuelles ? »</strong></li>
                <li>Au lieu de dire : <em>« Pourquoi ce professeur me déteste ? »</em> ➔ Demandez-vous : <strong>« Quelle est la règle exacte de son cours que je dois maîtriser pour lui décrocher un 16/20 au prochain devoir ? »</strong></li>
                <li>Au lieu de dire : <em>« Et si tout le monde se moque de moi ? »</em> ➔ Demandez-vous : <strong>« Quelle personne de confiance peut me donner un conseil bienveillant et sincère ? »</strong></li>
            </ul>

            <h2 id="effet-zeigarnik-marmite">4. L'effet Zeigarnik : la marmite qui mijote dans votre tête la nuit</h2>
            <p>En psychologie cognitive, l'<strong>effet Zeigarnik</strong> démontre que notre cerveau déteste les questions restées sans réponse : il les garde ouvertes comme une alerte active en tâche de fond.</p>
            <p>Si vous posez à votre esprit une question puissante avant d'aller dormir (par exemple : <em>« Comment expliquer ce théorème difficile de façon amusante avec un exemple de football ? »</em>) et que vous vous endormez paisiblement, vos neurones continuent de chercher toute la nuit dans vos souvenirs ! Et le lendemain matin au réveil, pendant que vous buvez votre thé chaud : <em>BIM !</em> L'idée géniale est posée sur un plateau d'argent dans votre esprit.</p>

            <h2 id="trousseau-5-cles-merlin">5. Votre trousseau de 5 clés d'urgence à garder dans la poche</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🔑 Le trousseau de secours de Merlin SIMO</h3>
                <p>En cas de blocage ou de tempête mentale, dégainez l'une de ces 5 questions libératrices :</p>
                <ol>
                    <li><em>« Quel est le problème réel derrière tout ce bruit ? »</em></li>
                    <li><em>« Si c'était simple, agréable et sans drame, je ferais quoi tout de suite ? »</em></li>
                    <li><em>« Quelle est la plus petite action de 2 minutes que je peux poser là, maintenant ? »</em></li>
                    <li><em>« Comment un champion comme Francis Ngannou ou Samuel Eto'o réagirait-il à ma place ? »</em></li>
                    <li><em>« Qu'est-ce que cet obstacle est venu m'apprendre pour me rendre plus fort ? »</em></li>
                </ol>
            </div>
  `
});

// ============================================================================
// ARTICLE 17 : Comment retrouver sa créativité quand on se sent bloqué
// ============================================================================
updateArticle('retrouver-creativite-bloque.html', {
  lead: `Le syndrome du blocage total, on connaît tous. Vous avez un exposé important à préparer, un dessin à rendre ou un devoir difficile... et RIEN. Votre tête est aussi sèche et stérile que la terre du Grand Nord en pleine saison sèche. Plus vous vous acharnez, plus vous vous insultez intérieurement, et plus le cadenas se verrouille. Respirez un bon coup : votre cerveau n'est pas tombé en panne d'idées. Il a simplement surchauffé face à la pression ! Sortez de votre bocal, allez boire un verre d'eau fraîche du canari, et découvrons ensemble le rituel secret pour faire redémarrer le fleuve créatif avec le sourire.`,
  toc: [
    { id: "anatomie-de-la-surchauffe", title: "1. L'anatomie de la surchauffe mentale : ce n'est pas une panne" },
    { id: "eau-du-canari-respiration", title: "2. L'eau fraîche du canari et le changement de décor" },
    { id: "partie-de-foot-quartier", title: "3. La petite partie de « 2-0 » au quartier : libérer le corps" },
    { id: "brouillon-sans-honte-237", title: "4. La technique salvatrice du « brouillon sans honte »" },
    { id: "protocole-deblocage-express", title: "5. Votre protocole de déblocage commando en 15 minutes" }
  ],
  bodyHtml: `
            <h2 id="anatomie-de-la-surchauffe">1. L'anatomie de la surchauffe mentale : ce n'est pas une panne</h2>
            <p>Quand on se sent bloqué, on se dit souvent avec détresse : <em>« Je n'ai plus d'imagination, mon réservoir est complètement vide ! »</em> C'est scientifiquement faux. Votre cerveau produit des milliers de pensées à chaque seconde.</p>
            <p>Ce qui bloque, ce n'est pas le moteur : c'est <strong>le barrage de la peur</strong> ! Vous avez tellement peur d'écrire une phrase imparfaite, d'avoir une mauvaise note ou d'être jugé par vos camarades que votre garde-frontière mental abat systématiquement chaque idée avant même qu'elle n'ait pu sortir sur le papier. Pour vous débloquer, il ne faut pas forcer le barrage : il faut simplement endormir le garde-frontière en retirant la pression !</p>

            <h2 id="eau-du-canari-respiration">2. L'eau fraîche du canari et le changement de décor</h2>
            <p>Si vous restez assis pendant trois heures sur la même chaise dans une chambre chaude et fermée à fixer le plafond, votre cerveau tourne en boucle comme un disque rayé.</p>
            <p>Le geste premier des grands sages africains ? <strong>Se lever et changer d'espace !</strong> Allez puiser un grand verre d'eau fraîche gardée dans un canari traditionnel en terre cuite, marchez sous la véranda ou asseyez-vous sur les marches de l'entrée. Un simple souffle de vent frais sur votre front et un changement de perspective visuelle suffisent à court-circuiter le stress et à relancer la machine.</p>

            <h2 id="partie-de-foot-quartier">3. La petite partie de « 2-0 » au quartier : libérer le corps</h2>
            <p>Rappelez-vous toujours que votre intelligence n'est pas enfermée dans une boîte isolée du reste de votre corps : elle dépend de votre rythme cardiaque, de vos poumons et de vos muscles. Si vous êtes avachi comme une mangue trop mûre depuis des heures, vos neurones manquent d'oxygène.</p>
            <p>Le meilleur remède du monde ? Allez taper dans le ballon 15 minutes avec les jeunes du quartier lors d'un match de « deux-zéro », dansez énergiquement sur un bon morceau de Makossa ou d'Afrobeats dans votre salon, ou faites 20 sauts sur place. En envoyant un afflux d'adrénaline et de sang frais dans votre crâne, vous déverrouillez les circuits de l'imagination en un clin d'œil !</p>

            <h2 id="brouillon-sans-honte-237">4. La technique salvatrice du « brouillon sans honte »</h2>
            <p>Voici un exercice d'une puissance libératrice totale : prenez une feuille de brouillon un peu froissée, et écrivez en haut en gros au feutre rouge : <strong>« LE BROUILLON LE PLUS NUL ET RIDICULE DE L'HISTOIRE DU CAMEROUN »</strong>.</p>
            <p>Donnez-vous comme mission sacrée de la remplir avec les idées les plus loufoques, bêtes, enfantines et grotesques possibles sur votre sujet. Aucun mot savant autorisé, tricherie interdite !</p>
            <p>Que se passe-t-il alors ? La peur du ridicule disparaît comme par enchantement. Vous rigolez tout seul devant votre feuille. Et là, surprise absolue : au beau milieu de ce tas de bêtises délibérées, vous allez soudainement trouver <strong>une pépite lumineuse</strong> que vous n'auriez jamais osé formuler si vous aviez essayé de faire l'élève modèle guindé !</p>

            <h2 id="protocole-deblocage-express">5. Votre protocole de déblocage commando en 15 minutes</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🚨 Le plan de déblocage en 3 étapes</h3>
                <ol>
                    <li><strong>Minutes 1 à 5 (Coupure nette) :</strong> Éloignez-vous immédiatement de votre bureau. Lavez-vous le visage à l'eau fraîche et étirez-vous. Interdiction formelle de penser au devoir !</li>
                    <li><strong>Minutes 6 à 10 (L'ancrage dans la réalité) :</strong> Touchez 3 objets différents autour de vous, écoutez les oiseaux ou les bruits de la vie dehors. Revenez dans l'instant présent.</li>
                    <li><strong>Minutes 11 à 15 (Le redémarrage minuscule) :</strong> Revenez et écrivez <strong>une seule phrase toute simple</strong> avec vos propres mots du cœur. Le cadenas est brisé : vous êtes reparti !</li>
                </ol>
            </div>
  `
});

// ============================================================================
// ARTICLE 18 : Construire une routine de réflexion personnelle
// ============================================================================
updateArticle('routine-reflexion-personnelle.html', {
  lead: `La vie dans nos cités africaines ressemble souvent à une tornade qui nous emporte : le réveil précipité, les transports bondés, l'école, les devoirs, les corvées de la maison, les sollicitations familiales, les réseaux sociaux... On arrive le dimanche soir sur les rotules sans avoir eu le temps de respirer, en se demandant où est passée la semaine ! Si vous ne prenez jamais un temps d'arrêt pour faire le point dans votre for intérieur, vous vivez la vie en passager clandestin. Bâtir sa petite routine de réflexion personnelle, ce n'est pas devenir un ermite dans une caverne : c'est simplement s'asseoir sous son arbre intérieur pour devenir le véritable capitaine de son destin.`,
  toc: [
    { id: "arbre-a-palabre-interieur", title: "1. L'arbre à palabres intérieur : faire une pause sacrée" },
    { id: "vider-le-sac-mental", title: "2. Vider son sac mental sur le papier pour retrouver la paix" },
    { id: "quart-d-heure-du-dimanche", title: "3. Le quart d'heure d'or du dimanche soir au coucher du soleil" },
    { id: "trois-questions-du-bilan", title: "4. Les trois questions du bilan sans complaisance" },
    { id: "boussole-du-capitaine", title: "5. Votre boussole de la semaine pour garder le cap" }
  ],
  bodyHtml: `
            <h2 id="arbre-a-palabre-interieur">1. L'arbre à palabres intérieur : faire une pause sacrée</h2>
            <p>Imaginez un planteur de cacao qui court dans sa plantation du matin au soir en coupant des mauvaises herbes sans jamais lever les yeux vers le ciel pour observer les nuages ou la saison des pluies. Il travaille dur, mais si la grande pluie arrive et qu'il n'a pas séché ses fèves, toute sa récolte est perdue !</p>
            <p>Prendre un temps de réflexion chaque semaine, c'est exactement cela : c'est <strong>lever les yeux de sa machette</strong>. C'est vérifier si les efforts que vous fournissez chaque jour à l'école ou dans vos projets vous rapprochent de ce que vous voulez vraiment devenir, ou si vous êtes juste en train de courir parce que tout le monde court autour de vous.</p>

            <h2 id="vider-le-sac-mental">2. Vider son sac mental sur le papier pour retrouver la paix</h2>
            <p>Quand les tracas, les déceptions ou les doutes restent enfermés dans votre poitrine, ils fermentent et vous empoisonnent la vie. Une remarque désagréable d'un professeur devient une obsession, et la peur d'un examen se transforme en panique incontrôlable.</p>
            <p>Dès que vous prenez un stylo et que vous couchez ces peurs sur une feuille blanche, un miracle se produit : <strong>le fardeau sort de votre corps !</strong> Le problème n'est plus à l'intérieur de vous : il est posé sur la table devant vous sous forme de quelques mots. Et là, vous pouvez le regarder avec calme, en rigoler et décider calmement de la riposte appropriée.</p>

            <h2 id="quart-d-heure-du-dimanche">3. Le quart d'heure d'or du dimanche soir au coucher du soleil</h2>
            <p>Le dimanche vers 18h, au moment où la fraîcheur du soir tombe sur la ville, beaucoup de personnes ressentent un pincement au cœur : la boule au ventre de la rentrée du lundi, la fatigue et le stress des cours à venir. Transformez ce moment d'angoisse en forteresse de puissance :</p>
            <ul>
                <li>Isolez-vous dans un coin calme de la maison ou sur la véranda.</li>
                <li>Éteignez la connexion internet de votre téléphone pendant 15 minutes.</li>
                <li>Ouvrez votre carnet personnel de bord.</li>
            </ul>
            <p>Pendant ce quart d'heure précieux, vous allez faire le bilan de la semaine écoulée et planifier vos priorités. Le lundi matin au réveil, pendant que les autres seront dans la confusion et le stress, vous marcherez avec la sérénité et l'assurance d'un chef !</p>

            <h2 id="trois-questions-du-bilan">4. Les trois questions du bilan sans complaisance</h2>
            <p>Pas besoin d'écrire un rapport administratif de 20 pages : posez-vous simplement ces 3 questions essentielles :</p>
            <ol>
                <li><strong>Quelles ont été mes 3 plus belles victoires cette semaine ?</strong> (Même petites : avoir maîtrisé un chapitre, avoir aidé sa mère avec le sourire, avoir tenu parole à un ami). Félicitez-vous !</li>
                <li><strong>Où est-ce que j'ai trébuché ou gaspillé mon énergie ?</strong> (Sans vous culpabiliser : 3 heures perdues sur TikTok le mercredi après-midi, un devoir commencé trop tard).</li>
                <li><strong>Quelle est la leçon tactique pour la semaine qui vient ?</strong> (<em>« Cette semaine, je ferai mes devoirs le vendredi soir pour avoir mon samedi totalement libre »</em>).</li>
            </ol>

            <h2 id="boussole-du-capitaine">5. Votre boussole de la semaine pour garder le cap</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🧭 La priorité numéro 1 de la semaine</h3>
                <p>Pour la semaine qui s'ouvre, choisissez <strong>une seule grande victoire prioritaire</strong> qui vous rendrait fier si vous l'accomplissiez :</p>
                <p style="font-weight: bold; color: var(--electric-blue); font-size: var(--fs-md); text-align: center; margin: 1rem 0;">
                    « Ma priorité d'honneur cette semaine est : ______________ »
                </p>
                <p>Écrivez-la sur un papier collé près de votre lit. Même si la semaine est pleine de surprises, tant que vous tenez cette promesse faite à vous-même, vous avancez comme un géant !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 19 : Techniques de visualisation pour concrétiser un projet
// ============================================================================
updateArticle('techniques-visualisation-projet.html', {
  lead: `Rappelez-vous la Coupe du Monde 1990 en Italie : Roger Milla, 38 ans, s'élance sur la pelouse, dribble le gardien colombien René Higuita avec une insolence magnifique, pousse le ballon au fond des filets et court esquisser sa danse légendaire de Makossa devant le poteau de corner ! D'où venait cette audace surhumaine des Lions Indomptables face aux champions du monde ? De ce que nous appelons chez nous l'Hémle : cette force intérieure inébranlable qui se prépare d'abord dans l'esprit avant d'exploser sur le terrain ! La visualisation mentale n'est pas un rêve éveillé pour paresseux : c'est l'entraînement secret des plus grands bâtisseurs d'Afrique pour vaincre la peur avant même le coup d'envoi.`,
  toc: [
    { id: "hemle-et-mental-lions", title: "1. L'Hémle camerounais : la victoire se joue d'abord dans la tête" },
    { id: "wangari-maathai-forets", title: "2. Wangari Maathai : voir des millions d'arbres avant la première graine" },
    { id: "piege-du-reve-passif", title: "3. Le grand piège du rêveur qui n'agit jamais" },
    { id: "methode-woop-africaine", title: "4. La méthode WOOP : visualiser aussi la boue et les obstacles" },
    { id: "seance-flash-3minutes", title: "5. Votre séance guidée de 3 minutes avant un défi décisif" }
  ],
  bodyHtml: `
            <h2 id="hemle-et-mental-lions">1. L'Hémle camerounais : la victoire se joue d'abord dans la tête</h2>
            <p>Chez nous au Cameroun, on utilise ce mot magnifique en langue Bassa : <strong>l'Hémle</strong>. Ce n'est pas seulement le courage physique : c'est la trempe morale, la détermination absolue, la certitude intérieure que peu importe la taille de l'adversaire ou la difficulté de l'épreuve, nous irons jusqu'au bout sans trembler.</p>
            <p>Les neurosciences modernes ont découvert pourquoi les grands sportifs et bâtisseurs africains possèdent cette force : chaque fois que vous visualisez avec précision une action réussie (faire un exposé sans hésiter, réussir une passe, réparer un moteur), votre cerveau active exactement les mêmes circuits neuronaux et moteurs que si vous étiez réellement en train de le faire ! Votre imagination est le gymnase secret où vous remportez le match avant même d'entrer dans le stade.</p>

            <h2 id="wangari-maathai-forets">2. Wangari Maathai : voir des millions d'arbres avant la première graine</h2>
            <p>Regardez l'exemple grandiose de <strong>Wangari Maathai</strong>, la première femme africaine à recevoir le Prix Nobel de la Paix en 2004.</p>
            <p>Au Kenya, voyant les forêts millénaires détruites par la déforestation et les femmes des villages obligées de marcher des kilomètres pour trouver du bois et de l'eau, que fait-elle ? Tout le monde lui disait : <em>« Une femme seule ne peut rien faire contre la désertification et les bulldozers ! »</em></p>
            <p>Dans son esprit, Wangari voyait déjà des collines entières reverdies par une armée de femmes solidaires. Elle a fondé le mouvement de la Ceinture Verte (<em>Green Belt Movement</em>), planté plus de 50 millions d'arbres de ses propres mains et avec des milliers de villageoises, et transformé durablement l'écologie de son pays. Toute grande réalisation matérielle sur cette terre a d'abord commencé par une vision claire et ardente dans le cœur d'une personne déterminée !</p>

            <h2 id="piege-du-reve-passif">3. Le grand piège du rêveur qui n'agit jamais</h2>
            <p>Attention à la dérive de certains discours naïfs qui vous disent : <em>« Visualise la richesse, imagine que tu as ton examen avec mention, et l'univers te déposera le diplôme sur la table sans réviser ! »</em></p>
            <p>C'est une illusion destructrice. Les études en psychologie ont prouvé que si vous ne faites que rêver au trophée final, votre cerveau croit que la mission est déjà finie, votre énergie s'effondre et vous ne travaillez plus. Les vrais champions visualisent <strong>le trophée ET la sueur du terrain</strong> nécessaire pour l'arracher !</p>

            <h2 id="methode-woop-africaine">4. La méthode WOOP : visualiser la boue pour mieux triompher</h2>
            <p>Pour forger une vision à toute épreuve, utilisez la méthode scientifique <strong>WOOP</strong> (Wish, Outcome, Obstacle, Plan) :</p>
            <ul>
                <li><strong>W (Le Vœu clair) :</strong> Quel est mon objectif précis ? (Exemple : <em>« Avoir mon brevet ou mon baccalauréat avec mention Très Bien cette année »</em>).</li>
                <li><strong>O (Le Résultat attendu) :</strong> Que ressentira ma famille quand mon nom sera lu à la radio ou affiché au babillard ? La fierté dans les yeux de mes parents !</li>
                <li><strong>O (L'Obstacle réel du terrain) :</strong> Quel est mon vrai piège personnel ? (La tentation de scroller sur TikTok ou de dormir au lieu de réviser les soirs de fatigue).</li>
                <li><strong>P (Le Plan d'attaque tactique) :</strong> Définissez votre riposte d'avance : <em>« SI je ressens la flemme à 18h, ALORS je me laverai le visage à l'eau fraîche et je réviserai 25 minutes sans téléphone avant de me reposer. »</em></li>
            </ul>

            <h2 id="seance-flash-3minutes">5. Votre séance guidée de 3 minutes avant un défi décisif</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🦁 La répétition des Lions Indomptables</h3>
                <p>La veille d'un examen, d'une prise de parole ou d'un événement stressant :</p>
                <ol>
                    <li>Asseyez-vous le dos droit, fermez les yeux et respirez profondément 3 fois par le ventre.</li>
                    <li>Visualisez la salle d'examen, votre stylo qui glisse avec assurance sur la feuille, votre esprit calme et lucide.</li>
                    <li>Imaginez un petit moment de trou de mémoire qui arrive... et voyez-vous respirer calmement, sourire et retrouver l'idée en toute confiance.</li>
                </ol>
                <p>Le lendemain, votre cerveau abordera l'épreuve avec la force tranquille de celui qui a déjà gagné le match dans sa tête !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 20 : Choisir une vie créative plutôt que d'attendre un prétendu talent
// ============================================================================
updateArticle('vie-creative-plutot-attendre-talent.html', {
  lead: `« Il a tellement de talent, c'est un enfant béni ! » Combien de fois avons-nous entendu cette phrase dans nos quartiers ? En apparence, c'est un compliment chaleureux. Mais en réalité, c'est une cage dorée redoutable : parce que si vous croyez que seuls ceux nés avec une étiquette magique ont le droit d'inventer, d'écrire, d'entreprendre ou de changer le monde, vous vous condamnez à rester assis toute votre vie dans les gradins à applaudir ou critiquer les exploits des autres. C'est faux, archifaux et profondément libérateur ! L'Afrique et le Cameroun n'ont pas besoin de spectateurs résignés : ils ont besoin d'une génération de bâtisseurs passionnés qui osent se salir les mains avec amour. Voici le manifeste de Merlin SIMO pour votre vie d'explorateur.`,
  toc: [
    { id: "piege-du-talent-mboa", title: "1. Pourquoi le mythe du « talent inné » est une prison mentale" },
    { id: "spectateur-vs-batisseur", title: "2. Du spectateur passif au bâtisseur héroïque de son destin" },
    { id: "courage-avant-la-confiance", title: "3. Le courage vient toujours AVANT la confiance en soi" },
    { id: "artisan-joyeux-du-mboa", title: "4. L'artisan joyeux du quotidien : la fierté du travail bien fait" },
    { id: "manifeste-merlin-simo", title: "5. Le manifeste de Merlin SIMO pour la jeunesse africaine" }
  ],
  bodyHtml: `
            <h2 id="piege-du-talent-mboa">1. Pourquoi le mythe du « talent inné » est une prison mentale</h2>
            <p>Quand on dit d'un jeune qu'il a un « don tombé du ciel », on crée deux drames sans le vouloir : le jeune lui-même prend la grosse tête et s'effondre dès le premier échec en croyant que sa magie l'a abandonné ; et tous les autres camarades se disent avec tristesse : <em>« Moi je n'ai pas de talent, donc ce n'est pas la peine de me battre. »</em></p>
            <p>La psychologue Carol Dweck a prouvé scientifiquement que notre cerveau est comme de la cire malléable : chaque effort, chaque heure de travail acharné, chaque livre lu reconfigure physiquement vos neurones. Ce qui fait les grands esprits africains de notre temps (les chirurgiens émérites, les ingénieurs logiciels, les écrivains nobélisables), ce n'est pas une fée qui s'est penchée sur leur berceau : c'est <strong>leur soif insatiable d'apprendre et leur refus obstiné d'abandonner face aux difficultés</strong> !</p>

            <h2 id="spectateur-vs-batisseur">2. Du spectateur passif au bâtisseur héroïque de son destin</h2>
            <p>Regardez autour de vous : une majorité de personnes passent leurs journées entières en mode <strong>consommateur passif</strong>. Ils regardent les vidéos des autres, portent les marques des autres, mangent la nourriture importée des autres, commentent les matchs des autres et se plaignent des décisions des autres. C'est confortable, mais cela laisse un vide immense au fond de l'âme.</p>
            <p>La grande bascule de votre existence se produit le jour où vous décidez de passer de l'autre côté de la barrière : <strong>devenir un créateur, un bâtisseur</strong>. Et pas besoin d'attendre d'avoir 40 ans et des milliards ! C'est :</p>
            <ul>
                <li>Cuisiner un plat sain et savoureux pour sa famille au lieu d'acheter des cochonneries industrielles.</li>
                <li>Écrire un poème, un conte ou un essai qui inspire ses camarades de classe.</li>
                <li>Apprendre à programmer une petite application utile pour le commerce de sa mère.</li>
                <li>Planter un arbre ou nettoyer son quartier avec ses amis sans attendre que la mairie le fasse.</li>
            </ul>
            <p>Dès que vous fabriquez quelque chose d'utile ou de beau de vos mains, vous enrichissez le monde et vous gagnez une dignité qu'aucun diplôme ne peut acheter.</p>

            <h2 id="courage-avant-la-confiance">3. Le courage vient toujours AVANT la confiance en soi</h2>
            <p>Beaucoup de jeunes disent avec sincérité : <em>« Ah grand frère Merlin, moi je me lancerai quand j'aurai enfin confiance en moi ! »</em></p>
            <p>C'est une illusion d'optique ! Vous pouvez attendre assis sur une chaise jusqu'à l'âge de 80 ans, la confiance ne descendra jamais du ciel sur votre tête. La confiance en soi n'est pas le billet d'entrée dans l'arène : <strong>c'est la médaille que l'on reçoit APRÈS avoir eu le courage de se battre les genoux tremblants !</strong></p>
            <p>Le courage, ce n'est pas l'absence de peur : c'est avoir peur, avoir le cœur qui bat fort dans la poitrine, et faire le premier pas quand même ! Chaque fois que vous osez lever la main en classe pour poser une question, chaque fois que vous osez montrer votre premier dessin ou votre premier texte, vous devenez plus fort et plus libre.</p>

            <h2 id="artisan-joyeux-du-mboa">4. L'artisan joyeux du quotidien : la fierté du travail bien fait</h2>
            <p>Ne mesurez jamais la valeur de votre existence aux « likes » éphémères sur les réseaux sociaux ou aux applaudissements de la foule. Les modes changent en 24 heures et le buzz s'éteint aussi vite qu'une allumette.</p>
            <p>Soyez comme nos maîtres forgerons et sculpteurs traditionnels : leur joie profonde est dans le son régulier de l'enclume, l'odeur du fer chauffé au rouge, la précision du geste répété avec passion et la satisfaction de voir un outil utile sortir du feu. Quand vous travaillez avec ce dévouement d'artisan, vous êtes inébranlable. Vous trouvez votre paix et votre grandeur dans le geste même de créer.</p>

            <h2 id="manifeste-merlin-simo">5. Le manifeste de Merlin SIMO pour la jeunesse africaine</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🦁 Les 4 commandements du bâtisseur de l'Esprit</h3>
                <ol>
                    <li><strong>Cultivez une curiosité insatiable :</strong> Explorez les sciences, les traditions, les arts et la technologie. Ce qui passionne votre cœur est le chemin de votre mission.</li>
                    <li><strong>N'ayez plus jamais honte de vos débuts modestes :</strong> Les plus grands baobabs d'Afrique ont tous commencé par être une graine minuscule cachée dans la poussière.</li>
                    <li><strong>Soyez fidèle aux petites victoires quotidiennes :</strong> 15 minutes d'effort régulier chaque jour battent 100 nuits blanches de panique.</li>
                    <li><strong>Mettez votre génie au service des vôtres :</strong> Le savoir qui ne sert pas à élever sa famille, sa communauté et son continent est une lampe allumée sous un panier.</li>
                </ol>
                <p style="font-weight: bold; color: var(--electric-blue); font-size: var(--fs-md); margin-top: 1.5rem; text-align: center; line-height: 1.6;">
                    « Ne vous contentez pas d'apprendre davantage. Apprenez à mieux penser, à mieux comprendre, à mieux créer et à mieux agir. »<br>
                    <span style="font-style: italic; color: var(--text-dark);">— Merlin SIMO</span>
                </p>
            </div>
  `
});

console.log('Batch 4 (Africa/Cameroon Edition) rewritten successfully!');
