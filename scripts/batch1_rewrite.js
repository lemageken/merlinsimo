const { updateArticle } = require('./rewrite_helper');

// ============================================================================
// ARTICLE 1 : Comment apprendre plus vite et retenir durablement
// ============================================================================
updateArticle('apprendre-plus-vite-retenir.html', {
  lead: `Soyons honnêtes deux minutes : qui n'a jamais passé des heures affalé sur son bureau, son gros surligneur jaune fluo à la main, en train de repeindre son cahier d'histoire ou de SVT jusqu'à ce qu'il ressemble à un sapin de Noël radioactif ? On a l'impression d'avoir super bien bossé, on se sent fier... et le lendemain devant la feuille de contrôle : rideau de fer, trou noir total ! Rassurez-vous, vous n'êtes pas bête : vous venez simplement de tomber dans le piège que 95 % des gens adorent sans le savoir. On va voir ensemble comment fonctionne vraiment votre cerveau (qui est un petit paresseux génial) et comment le transformer en machine à retenir sans vous arracher les cheveux.`,
  toc: [
    { id: "piege-surligneur", title: "1. Le grand piège du surligneur fluo" },
    { id: "rappel-actif", title: "2. Le super-pouvoir du « Rappel Actif »" },
    { id: "autoroute-neurones", title: "3. La courbe de l'oubli : goudronner vos neurones" },
    { id: "methode-feynman", title: "4. L'arme secrète de Richard Feynman" },
    { id: "melanger-matieres", title: "5. Ne faites pas que des tirs au but toute la journée !" },
    { id: "defi-7-jours", title: "6. Votre mini-défi de la semaine" }
  ],
  bodyHtml: `
            <h2 id="piege-surligneur">1. Le grand piège du surligneur fluo (l'illusion de compétence)</h2>
            <p>Quand vous relisez une page trois fois d'affilée en barbouillant chaque phrase importante en jaune, votre cerveau vous joue un sale tour. Vos yeux voient les mots, ils se disent : <em>« Ah oui, je reconnais ça, c'est super facile ! »</em></p>
            <p>Mais attention : <strong>reconnaître n'est pas connaître</strong> ! C'est exactement comme regarder un champion de judo à la télévision en se disant : <em>« Oh, ce mouvement a l'air simple, je peux le faire ! »</em> Essayez de le faire sur un tapis, et vous vous retrouverez les quatre fers en l'air en deux secondes.</p>
            <p>Les scientifiques en neurosciences ont prouvé que la relecture passive et le surlignage sont parmi les pires méthodes au monde pour mémoriser. Pourquoi ? Parce que votre cerveau ne fait aucun effort. Il est en mode sieste sur un transat. Et sans effort, vos neurones ne créent aucun ancrage solide.</p>

            <h2 id="rappel-actif">2. Le super-pouvoir du « Rappel Actif » (Active Recall)</h2>
            <p>Votre cerveau est exactement comme un muscle. Si vous allez à la salle de sport et que vous regardez les haltères sans jamais les soulever, vos bras ne vont pas grossir par magie. Pour la mémoire, c'est pareil : vous devez faire faire des pompes à vos neurones.</p>
            <p>Comment on fait ça concrètement ? Au lieu de faire entrer de l'information dans votre tête en lisant et relisant, <strong>forcez-la à en sortir</strong>. C'est ce qu'on appelle le <em>rappel actif</em>.</p>
            <ul>
                <li><strong>Étape 1 :</strong> Lisez un paragraphe ou une règle de cours attentivement.</li>
                <li><strong>Étape 2 :</strong> Fermez immédiatement le livre ou retournez votre feuille. Plus le droit de regarder, tricherie interdite !</li>
                <li><strong>Étape 3 :</strong> Prenez un brouillon et écrivez ou dessinez tout ce dont vous vous souvenez. Même si c'est moche ou incomplet.</li>
                <li><strong>Étape 4 :</strong> Rouvrez le cours et comparez. C'est à ce moment précis, quand vous avez galéré à chercher dans vos tiroirs mentaux, que votre cerveau se dit : <em>« Oula, cette info est importante, je dois la ranger dans un endroit sûr ! »</em></li>
            </ul>

            <h2 id="autoroute-neurones">3. La courbe de l'oubli : comment goudronner vos neurones</h2>
            <p>En 1885, un chercheur nommé Hermann Ebbinghaus a découvert une nouvelle qui fait un peu mal à l'ego : après seulement 48 heures, notre cerveau oublie près de 70 % de ce qu'il a appris s'il n'y touche plus ! C'est normal : si notre tête gardait le ticket de caisse de la boulangerie et la couleur du camion croisé lundi matin, on deviendrait tous fous.</p>
            <p>Imaginez un sentier dans une forêt dense. Si vous y marchez une seule fois, les ronces et les herbes repoussent dès le surlendemain : le chemin disparaît. Mais si vous y repassez le lendemain, puis trois jours plus tard, puis dix jours plus tard, l'herbe ne repousse plus. Vous venez de tracer une autoroute en béton armé dans votre cerveau !</p>
            <p>C'est ce qu'on appelle la <strong>répétition espacée</strong> :</p>
            <ol>
                <li><strong>Jour 1 :</strong> Vous découvrez la notion et faites un test à l'aveugle.</li>
                <li><strong>Jour 2 (24h après) :</strong> Un petit flash de 5 minutes sans regarder les notes.</li>
                <li><strong>Jour 5 (3 jours après) :</strong> Vous vous réinterrogez sur une question clé.</li>
                <li><strong>Jour 15 :</strong> Une dernière piqûre de rappel. C'est plié : c'est gravé pour le contrôle et pour toute l'année !</li>
            </ol>

            <blockquote style="background: rgba(0, 186, 199, 0.08); border-left: 4px solid var(--electric-blue); padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 0 12px 12px 0; font-style: italic;">
                « Savoir par cœur sans comprendre, c'est comme avoir un trousseau de clés magnifiques sans savoir quelle porte elles ouvrent. »
            </blockquote>

            <h2 id="methode-feynman">4. L'arme secrète de Richard Feynman : expliquer à son petit frère</h2>
            <p>Richard Feynman était un physicien américain de génie, prix Nobel, qui adorait jouer du bongo et raconter des blagues. Sa botte secrète pour tout comprendre plus vite que tout le monde ? Une règle impitoyable : <strong>si vous ne pouvez pas expliquer une notion simplement à un enfant de 10 ans, c'est que vous ne la comprenez pas vraiment.</strong></p>
            <p>Quand vous révisez, imaginez que vous devez expliquer le sujet à votre petit frère, à votre grand-mère ou à votre chat. Dès que vous commencez à utiliser des mots compliqués, du charabia ou des formules floues, arrêtez-vous tout de suite ! C'est le signal d'alarme : vous venez de tomber sur un trou dans votre compréhension. Retournez voir le cours, trouvez une métaphore toute simple, et réessayez.</p>

            <h2 id="melanger-matieres">5. Ne faites pas que des tirs au but toute la journée !</h2>
            <p>Si vous faites du football ou du basket, votre entraîneur ne vous fera jamais tirer 500 fois d'affilée depuis le même point de penalty toute la journée. Pourquoi ? Parce qu'en vrai match, vous devez courir, passer, esquiver, dribbler et tirer sous tous les angles !</p>
            <p>Pour le travail intellectuel, c'est pareil. Au lieu de vous enfermer pendant quatre heures d'affilée sur le même chapitre de maths jusqu'à avoir les yeux qui piquent, <strong>mélangez les sujets</strong> (on appelle ça l'<em>interleaving</em>). Faites 25 minutes de maths, puis 20 minutes de vocabulaire d'anglais, puis une pause goûter, puis 20 minutes de sciences. Votre cerveau sera forcé de s'adapter en permanence, et c'est exactement cette agilité qui crée les esprits vifs.</p>

            <h2 id="defi-7-jours">6. Votre mini-défi pour cette semaine</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🎮 Le challenge « Flash 5 minutes »</h3>
                <p>Choisissez <strong>un seul</strong> sujet difficile aujourd'hui (une règle de grammaire, un théorème ou une date historique). Lisez-le 3 minutes. Fermez tout. Prenez votre téléphone, lancez le dictaphone et expliquez le sujet à voix haute en 60 secondes chrono, avec vos propres mots et une pointe d'humour. Si vous y arrivez, félicitations : vous venez de gagner 3 heures de révision inutile !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 2 : Créer des connexions inattendues entre les domaines
// ============================================================================
updateArticle('connexions-inattendues-domaines.html', {
  lead: `Vous avez remarqué comme à l'école ou au travail, on adore ranger les choses dans des petites boîtes bien étanches ? D'un côté les maths, de l'autre la poésie. D'un côté l'informatique, de l'autre le dessin ou la cuisine. Et pourtant... les idées les plus géniales de l'histoire sont presque toutes nées d'un accident magnifique : le jour où quelqu'un a eu l'audace de faire se télescoper deux mondes qui n'avaient apparemment rien à voir ensemble. Spoiler : vos meilleures idées se cachent exactement là où personne ne regarde !`,
  toc: [
    { id: "mythe-cases", title: "1. Pourquoi notre cerveau adore les cases (et pourquoi il faut les casser)" },
    { id: "recette-velcro", title: "2. Du chien plein de chardons au voyage sur la Lune : l'histoire du Velcro" },
    { id: "boite-lego", title: "3. La boîte de briques Lego de votre esprit" },
    { id: "sport-sciences", title: "4. Quand le hip-hop explique la physique quantique" },
    { id: "methode-collision", title: "5. L'exercice de la collision forcée (à tester entre amis)" }
  ],
  bodyHtml: `
            <h2 id="mythe-cases">1. Pourquoi notre cerveau adore les cases (et pourquoi il faut les casser)</h2>
            <p>Depuis qu'on est petits, le système scolaire nous habitue à un rituel bizarre : à 8h on fait des équations, à 9h sonne la cloche, on range le cahier de maths et on sort celui d'histoire-géo comme si on changeait de planète. Résultat ? On grandit en pensant qu'un musicien ne peut rien comprendre au code informatique, ou qu'un biologiste n'a rien à apprendre d'un cuisinier.</p>
            <p>Grosse erreur ! Dans la vraie vie, le monde ne fonctionne pas en tiroirs séparés. Les esprits les plus créatifs ne sont pas forcément ceux qui connaissent le plus de choses par cœur dans un seul domaine minuscule : ce sont les <strong>passeurs de ponts</strong>, ceux qui voient un fil invisible reliant deux rives éloignées.</p>

            <h2 id="recette-velcro">2. Du chien plein de chardons à la combinaison spatiale : la magie du pas de côté</h2>
            <p>Prenez un exemple tout simple que vous utilisez tous les jours sur vos baskets ou votre sac de sport : le <strong>Velcro</strong>. Comment a-t-il été inventé ?</p>
            <p>Dans les années 1940, un ingénieur suisse nommé George de Mestral rentre d'une promenade en forêt avec son chien. Son chien est couvert de petites boules de chardons (des fruits de bardane) qui s'accrochent désespérément à ses poils. Au lieu de pester en brossant son animal, Mestral fait ce que font tous les grands curieux : il pose un chardon sous son microscope.</p>
            <p>Et là, que découvre-t-il ? Des centaines de minuscules crochets élastiques qui s'agrippent aux boucles des poils ! Il a alors l'idée folle de reproduire ce mécanisme végétal avec du nylon. Bilan : il vient d'inventer la fermeture auto-agrippante utilisée aujourd'hui par la NASA dans l'espace et sur les baskets de millions d'enfants. Ça s'appelle le <em>biomimétisme</em> : observer la nature pour résoudre un problème d'ingénieur.</p>

            <h2 id="boite-lego">3. La boîte de briques Lego de votre esprit</h2>
            <p>Steve Jobs disait une phrase magnifique : <em>« La créativité, c'est simplement connecter des choses. »</em></p>
            <p>Imaginez que chaque livre que vous lisez, chaque passion bizarre que vous avez (les mangas, le skateboard, la botanique, la programmation de jeux vidéo, les recettes de gâteaux de votre grand-mère) soit une brique de Lego de couleur différente.</p>
            <p>Si vous n'avez que des briques bleues de maths, vous ne construirez jamais que des tours bleues un peu monotones. Mais si vous avez une brique jaune de dessin, une brique rouge de rap et une brique verte de mécanique, vous pouvez soudainement inventer une fusée multicolore que personne d'autre sur Terre ne peut imaginer ! Plus vos centres d'intérêt sont variés, plus votre coffre à idées devient précieux.</p>

            <h2 id="sport-sciences">4. Quand vos loisirs deviennent vos meilleurs atouts scolaires</h2>
            <p>Vous adorez les jeux vidéo ? Vous avez déjà des notions poussées de gestion de ressources, de probabilités et de stratégie en équipe. Vous pratiquez la danse ou les arts martiaux ? Vous possédez une compréhension instinctive de la géométrie dans l'espace, du rythme et de l'équilibre.</p>
            <p>Le secret, c'est d'utiliser ce que vous aimez pour comprendre ce qui vous paraît rébarbatif :</p>
            <ul>
                <li>Expliquez la Révolution française comme une partie de <em>Civilization</em> ou un tournoi e-sport avec des factions rivales.</li>
                <li>Visualisez le système solaire comme un orchestre de musique où chaque planète joue sa propre partition en harmonie.</li>
                <li>Comprenez le code informatique comme une recette de crêpes : des ingrédients précis, des étapes dans l'ordre, et une boucle <em>« tant qu'il reste de la pâte, faire sauter »</em> !</li>
            </ul>

            <h2 id="methode-collision">5. L'exercice de la collision forcée (à faire tout de suite)</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🎲 Le jeu des deux objets aléatoires</h3>
                <p>Ouvrez le dictionnaire ou regardez autour de vous dans la pièce. Pointez <strong>deux objets totalement au hasard</strong>. Par exemple : <em>une brosse à dents</em> et <em>un smartphone</em>. Maintenant, donnez-vous 2 minutes pour inventer une idée de produit, d'histoire ou de jeu qui fusionne les deux !</p>
                <p><em>(Spoiler : c'est exactement comme ça que des ingénieurs ont créé la brosse à dents connectée qui transforme le brossage des dents des enfants en aventure pour attraper des monstres sur écran !)</em></p>
            </div>
  `
});

// ============================================================================
// ARTICLE 3 : De la curiosité au projet concret
// ============================================================================
updateArticle('curiosite-projet-concret.html', {
  lead: `Avoir des idées plein la tête sous la douche, c'est super facile. Qui ne s'est jamais réveillé un dimanche matin avec l'idée du siècle pour créer une application, écrire une BD ou lancer une chaîne YouTube ? Mais soyons honnêtes : le lundi matin, la motivation a fondu comme une glace au soleil, et l'idée finit au fond d'un tiroir avec les chaussettes orphelines. Comment fait-on pour passer de la simple étincelle d'une curiosité à une vraie réalisation dont on est fier ? Venez, on pose le scalpel et on démonte le moteur pas à pas.`,
  toc: [
    { id: "syndrome-tiroir", title: "1. Le syndrome du tiroir à idées oubliées" },
    { id: "monstre-parfait", title: "2. Tuez le monstre de la perfection avant qu'il ne vous paralyse" },
    { id: "technique-lego", title: "3. La technique du premier Lego ridicule" },
    { id: "carnet-chantier", title: "4. Le carnet de chantier : votre meilleur complice" },
    { id: "contrat-action", title: "5. Votre plan d'attaque en 3 jours chrono" }
  ],
  bodyHtml: `
            <h2 id="syndrome-tiroir">1. Le syndrome du tiroir à idées oubliées</h2>
            <p>On a tous un ami (ou alors c'est vous, ne mentez pas !) qui vous dit tous les six mois : <em>« J'ai une idée incroyable, ça va révolutionner le monde ! »</em> Vous le recroisez un an plus tard : rien n'a bougé d'un millimètre. Pourquoi ?</p>
            <p>Parce qu'une idée dans votre tête, c'est chaud, confortable, et surtout, <strong>ça ne risque rien</strong>. Tant qu'un dessin ou un texte reste dans votre imagination, il est parfait. Mais dès qu'on prend un stylo pour le poser sur le papier, patatras : le trait est un peu tordu, le texte sonne moins bien, et notre ego prend un coup de massue.</p>
            <p>La première chose à comprendre, c'est qu'une idée brute ne vaut absolument rien. Ce qui a de la valeur, c'est la sueur, l'amour et l'énergie qu'on met à lui donner forme dans la réalité.</p>

            <h2 id="monstre-parfait">2. Tuez le monstre de la perfection avant qu'il ne vous paralyse</h2>
            <p>Le perfectionnisme, c'est souvent de la trouille déguisée en costume de soirée. On se dit : <em>« Je commencerai quand j'aurai le meilleur logiciel, le meilleur ordi, le carnet parfait et trois mois de vacances devant moi. »</em> Résultat : on ne commence jamais.</p>
            <p>Retenez bien cette phrase qui va vous libérer d'un poids immense : <strong>mieux vaut une version 1 toute moche mais terminée, qu'un chef-d'œuvre imaginaire qui n'existera jamais.</strong></p>
            <p>Même les plus grands jeux vidéo comme Minecraft ont commencé avec trois cubes pixélisés et un personnage en forme de pavé sans bras ! Si Markus Persson avait attendu d'avoir des graphismes 4K et un budget hollywoodien, personne n'aurait jamais joué à son jeu.</p>

            <h2 id="technique-lego">3. La technique du premier Lego ridicule</h2>
            <p>Quand un projet nous paraît immense (écrire un livre de 100 pages, apprendre à coder un jeu, réviser un trimestre entier), notre cerveau fait un bug système : il panique et choisit l'option de secours... aller scroller sur les réseaux sociaux pendant deux heures.</p>
            <p>Pour déjouer cette ruse de votre cerveau, utilisez la stratégie du <strong>premier Lego ridicule</strong> :</p>
            <ul>
                <li>Ne vous dites pas : <em>« Je vais écrire mon roman tout l'après-midi. »</em></li>
                <li>Dites-vous : <em>« Je vais juste écrire 3 phrases moches pendant 5 minutes chrono avec un chrono sur mon téléphone. »</em></li>
            </ul>
            <p>C'est tellement petit et tellement facile que votre cerveau n'a aucune excuse pour procrastiner. Et 9 fois sur 10, une fois lancé, le moteur est chaud et vous continuez sans même vous en apercevoir !</p>

            <h2 id="carnet-chantier">4. Le carnet de chantier : votre meilleur complice</h2>
            <p>Ne faites jamais confiance à votre mémoire pour stocker vos bonnes idées : elle a la fâcheuse manie de les effacer au moment précis où vous en avez le plus besoin. Achetez un petit carnet tout simple à 1 euro (pas besoin d'un carnet en cuir doré avec cadenas, vous auriez peur d'écrire dedans !).</p>
            <p>Ce carnet, c'est votre <strong>chantier personnel</strong>. Vous avez le droit d'y faire des ratures, d'y coller des tickets de cinéma, de gribouiller des schémas incompréhensibles et d'y noter des phrases entendues dans le bus. C'est votre laboratoire secret.</p>

            <h2 id="contrat-action">5. Votre plan d'attaque en 3 jours chrono</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🚀 La règle des 72 heures de Merlin</h3>
                <p>Dès qu'une idée vous excite les neurones, vous avez <strong>72 heures</strong> pour poser un acte physique dans le monde réel, sinon elle mourra :</p>
                <ul>
                    <li><strong>Jour 1 :</strong> Écrivez l'idée en 3 lignes simples sur une feuille et donnez-lui un nom de code marrant.</li>
                    <li><strong>Jour 2 :</strong> Fabriquez un premier prototype minuscule (un croquis, une maquette en carton, le squelette d'un texte ou 10 lignes de code).</li>
                    <li><strong>Jour 3 :</strong> Montrez ce petit brouillon à un ami de confiance et demandez-lui : <em>« Qu'est-ce que tu en penses ? »</em> Bravo : votre idée est officiellement vivante !</li>
                </ul>
            </div>
  `
});

// ============================================================================
// ARTICLE 4 : Développer son attention dans un monde de distractions
// ============================================================================
updateArticle('developper-attention-distractions.html', {
  lead: `Posez une seconde votre téléphone (oui, oui, retournez l'écran contre la table !). Avez-vous remarqué à quel point il est devenu presque impossible de lire un texte de plus de trois pages ou d'écouter quelqu'un pendant dix minutes sans ressentir cette terrible démangeaison d'aller vérifier nos notifications ? Ce n'est pas un hasard : des milliers d'ingénieurs dans la Silicon Valley sont payés des fortunes pour capturer votre attention comme des braconniers du cerveau. La bonne nouvelle ? Reprendre les commandes de son esprit n'est pas si sorcier, et c'est le super-pouvoir le plus recherché du XXIe siècle.`,
  toc: [
    { id: "guerre-attention", title: "1. La guerre secrète pour voler votre cerveau" },
    { id: "mythe-multitache", title: "2. Le grand mensonge du « multitâche »" },
    { id: "piege-dopamine", title: "3. La dopamine : la friandise qui rend accro" },
    { id: "forteresse-mentale", title: "4. Comment bâtir sa forteresse de concentration" },
    { id: "methode-pomodoro-fun", title: "5. La technique de la tomate supersonique" }
  ],
  bodyHtml: `
            <h2 id="guerre-attention">1. La guerre secrète pour voler votre cerveau</h2>
            <p>Chaque fois que votre téléphone vibre, émet un petit <em>« bip »</em> ou qu'une pastille rouge s'affiche à l'écran, votre cœur s'accélère un tout petit peu. Vous vous dites : <em>« Qui m'a envoyé un message ? Est-ce que quelqu'un a liké ma photo ? »</em></p>
            <p>Il faut comprendre une chose essentielle : vous ne vous battez pas seulement contre vous-même, vous vous battez contre des algorithmes surpuissants conçus pour vous scotcher le regard le plus longtemps possible afin de vous vendre des publicités. Si vous perdez votre attention, vous perdez votre temps, vos passions, et la capacité d'accomplir ce qui compte vraiment pour vous.</p>

            <h2 id="mythe-multitache">2. Le grand mensonge du « multitâche »</h2>
            <p>Vous vous dites peut-être : <em>« Moi je suis trop fort, j'arrive à faire mes devoirs de maths tout en écoutant une vidéo YouTube, en répondant sur WhatsApp et en mangeant un paquet de gâteaux ! »</em></p>
            <p>Alerte scientifique : <strong>le cerveau humain est physiquement incapable de faire deux choses conscientes en même temps.</strong> Ce que vous faites réellement, c'est du <em>zapping rapide</em>. Votre cerveau saute de l'exercice à la vidéo, puis au message, puis revient à l'exercice.</p>
            <p>Le problème ? À chaque saut, vous payez une taxe mentale qu'on appelle le « coût de changement d'attention ». Votre cerveau surchauffe, vous mettez 3 fois plus de temps à finir votre travail, et vous faites des fautes d'inattention stupides. Faire une seule chose à la fois, c'est aller 3 fois plus vite et avoir tout le reste de sa soirée pour jouer et se détendre tranquillement !</p>

            <h2 id="piege-dopamine">3. La dopamine : la friandise qui rend accro</h2>
            <p>Dans votre cerveau se trouve une petite molécule chimique appelée la <strong>dopamine</strong>. C'est l'hormone de l'anticipation du plaisir. C'est elle qui vous donne envie de manger un carré de chocolat ou de découvrir la suite de votre série préférée.</p>
            <p>Les réseaux sociaux ont piraté ce mécanisme : chaque scroll sur votre fil d'actualité est comme une machine à sous au casino. Parfois il n'y a rien d'intéressant, et hop, soudain une vidéo hilarante ! Votre cerveau adore cette surprise aléatoire, alors il redemande encore et encore. Mais cette nourriture mentale, c'est du fast-food : ça remplit 5 minutes, mais ça vous laisse vidé d'énergie.</p>

            <h2 id="forteresse-mentale">4. Comment bâtir sa forteresse de concentration</h2>
            <p>Ne comptez pas sur votre seule volonté pour résister : même les adultes les plus sérieux craquent. Le secret des pros, c'est d'aménager leur environnement pour que la tentation soit physiquement difficile d'accès :</p>
            <ul>
                <li><strong>Le téléphone dans une autre pièce :</strong> Quand vous devez réviser ou créer, posez votre téléphone dans le couloir ou donnez-le à quelqu'un pendant 45 minutes. Si vous devez vous lever et faire 10 pas pour le chercher, la flemme vous sauvera !</li>
                <li><strong>Fermez les 47 onglets de votre navigateur :</strong> Un seul onglet ouvert pour la tâche en cours. Le reste, c'est du bruit.</li>
                <li><strong>Un bureau débarrassé :</strong> Moins il y a de bazar visuel sous vos yeux, plus votre esprit respire.</li>
            </ul>

            <h2 id="methode-pomodoro-fun">5. La technique de la tomate supersonique (Pomodoro)</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🍅 La règle des 25 minutes magiques</h3>
                <p>Dans les années 1980, un étudiant italien nommé Francesco Cirillo utilisait un minuteur de cuisine en forme de tomate pour réussir ses examens :</p>
                <ol>
                    <li>Réglez un minuteur sur <strong>25 minutes</strong> chrono.</li>
                    <li>Pendant ces 25 minutes, interdiction totale de faire autre chose que votre mission. Le monde peut bien s'arrêter de tourner !</li>
                    <li>La sonnerie retentit ? Bravo ! Prenez <strong>5 minutes de vraie pause</strong> (étirez-vous, buvez un verre d'eau, marchez).</li>
                    <li>Répétez 3 fois. En 1h30, vous aurez abattu plus de travail qu'en une journée entière à zapper !</li>
                </ol>
            </div>
  `
});

// ============================================================================
// ARTICLE 5 : L'échec comme matière première de l'innovation
// ============================================================================
updateArticle('echec-matiere-premiere-innovation.html', {
  lead: `À l'école, on nous a appris à avoir une peur bleue du stylo rouge, des mauvaises notes et des zéros pointés. Se tromper, c'était la honte, la punition, le regard inquiet des parents. Pourtant, demandez aux plus grands inventeurs, aux champions de skate ou aux développeurs de vos jeux vidéo préférés : tous vous diront exactement la même chose. L'échec n'est pas le contraire de la réussite, c'est l'ingrédient principal de la recette ! Préparez-vous à changer radicalement de regard sur vos bévues.`,
  toc: [
    { id: "peur-stylo-rouge", title: "1. Pourquoi nous avons tous la trouille de nous tromper" },
    { id: "edison-ampoule", title: "2. Les 1 000 ampoules grillées de Thomas Edison" },
    { id: "bug-tresor", title: "3. Le bogue informatique qui devient une mine d'or" },
    { id: "musique-fausses-notes", title: "4. Miles Davis et l'art de rattraper une fausse note" },
    { id: "devenir-scientifique", title: "5. Comment transformer une tôle en laboratoire personnel" }
  ],
  bodyHtml: `
            <h2 id="peur-stylo-rouge">1. Pourquoi nous avons tous la trouille de nous tromper</h2>
            <p>Quand on rend une copie pleine de remarques en rouge ou qu'on rate complètement une passe décisive au foot devant ses copains, qu'est-ce qu'on ressent ? On a la gorge serrée, les joues qui chauffent et une envie furieuse de disparaître sous terre dans un trou de souris.</p>
            <p>C'est normal : notre cerveau confond « faire une erreur sur un exercice » et « être nul en tant que personne ». Mais ce sont deux choses qui n'ont strictement rien à voir ! Une mauvaise note ne dit rien de votre intelligence ou de votre valeur. Elle dit juste : <em>« Tiens, cette méthode-là n'a pas marché, il faut essayer un autre chemin. »</em></p>

            <h2 id="edison-ampoule">2. Les 1 000 ampoules grillées de Thomas Edison</h2>
            <p>Quand Thomas Edison cherchait le bon filament pour créer la première ampoule électrique commerciale, il a testé plus de 1 000 matériaux différents. Du fil de platine, du coton carbonisé, et même des poils de barbe de ses assistants (véridique !) ! Tout finissait en fumée en quelques minutes.</p>
            <p>Un jeune journaliste est venu le voir un jour pour le taquiner : <em>« Monsieur Edison, ça ne vous déprime pas d'avoir échoué mille fois de suite ? »</em></p>
            <p>La réponse d'Edison est entrée dans l'histoire : <em>« Je n'ai pas échoué mille fois. J'ai découvert avec succès mille manières qui ne fonctionnent pas pour fabriquer une ampoule ! »</em> Chaque essai raté éliminait une mauvaise piste et le rapprochait inévitablement de la solution gagnante.</p>

            <h2 id="bug-tresor">3. Le bogue informatique qui devient une mine d'or</h2>
            <p>Savez-vous comment le célèbre jeu <strong>Grand Theft Auto (GTA)</strong> est né ? À l'origine, les créateurs développaient un jeu de course de voitures très classique et un peu ennuyeux appelé <em>Race'n'Chase</em>.</p>
            <p>Mais en écrivant le code, les développeurs ont fait une erreur : un bug dans l'intelligence artificielle des voitures de police faisait que les policiers devenaient complètement fous et fonçaient comme des briques sur la voiture du joueur au lieu de simplement la suivre !</p>
            <p>Au lieu de supprimer le bug et de jeter le jeu, les créateurs ont éclaté de rire en voyant le résultat : c'était dix fois plus amusant que le jeu d'origine ! Ils ont gardé le bug, retravaillé le jeu autour des poursuites endiablées, et créé l'une des sagas les plus populaires et lucratives de toute l'histoire du jeu vidéo.</p>

            <h2 id="musique-fausses-notes">4. Miles Davis et l'art de rattraper une fausse note</h2>
            <p>Le légendaire trompettiste de jazz Miles Davis disait toujours à ses jeunes musiciens : <em>« Il n'y a pas de fausse note. Ce qui compte, c'est la note que tu joues juste après. »</em></p>
            <p>Si vous jouez une note bizarre au piano mais que vous baissez la tête de honte en vous arrêtant net, tout le public entend l'erreur. Mais si vous souriez, enchaînez avec aplomb et intégrez cette note étrange dans une mélodie surprenante, les gens vont se dire : <em>« Wow, quelle créativité incroyable ! »</em> Dans la vie comme en musique, l'assurance et la capacité d'adaptation font toute la différence.</p>

            <h2 id="devenir-scientifique">5. Comment transformer une tôle en laboratoire personnel</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🔬 Le carnet des « Expériences instructives »</h3>
                <p>La prochaine fois que vous ratez un contrôle, une recette ou un projet, au lieu de bouder dans votre coin, mettez votre blouse de savant fou et notez sur une feuille ces 3 questions magiques :</p>
                <ol>
                    <li><strong>Qu'est-ce qui s'est passé exactement ?</strong> (Les faits bruts, sans dramatiser : <em>« J'ai manqué de temps sur l'exercice 3 »</em>).</li>
                    <li><strong>Pourquoi ça a coincé ?</strong> (<em>« J'ai commencé à réviser la veille à 22h avec la musique à fond »</em>).</li>
                    <li><strong>Quelle est la nouvelle expérience que je tente la prochaine fois ?</strong> (<em>« Poser 2 questions au prof dès que je bloque, et réviser 15 minutes deux jours avant »</em>).</li>
                </ol>
                <p>Voilà, vous n'êtes plus une victime d'un échec : vous êtes le chercheur qui calibre sa prochaine victoire !</p>
            </div>
  `
});

console.log('Batch 1 rewritten successfully!');
