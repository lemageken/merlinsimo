const { updateArticle } = require('./rewrite_helper');

// ============================================================================
// ARTICLE 11 : Comment s'inspirer des grands créateurs sans les copier
// ============================================================================
updateArticle('inspirer-grands-createurs.html', {
  lead: `On a tous déjà vécu ce moment un peu gênant : on admire tellement un chanteur, un dessinateur ou un entrepreneur qu'on essaie de faire exactement la même chose que lui... et le résultat ressemble à une pâle photocopie qui fait sourire poliment. Pourtant, regardez nos plus grands artistes camerounais : comment Francis Bebey, Eboa Lotin ou André-Marie Tala ont-ils créé des œuvres immortelles ? En écoutant religieusement les chants de leurs grands-parents au village, pour ensuite y insuffler leurs guitares et leurs poésies propres ! S'inspirer d'un grand maître ne veut pas dire porter son costume d'emprunt : cela veut dire allumer sa propre torche au feu qu'il a allumé. Découvrons ensemble l'art de l'inspiration féconde.`,
  toc: [
    { id: "photocopie-vs-hommage", title: "1. La différence entre le plagiat servile et l'hommage qui crée" },
    { id: "lecon-francis-bebey", title: "2. Francis Bebey : mélanger la flûte pygmée et la guitare classique" },
    { id: "remonter-aux-racines", title: "3. La règle d'or : allez voir qui inspirait vos idoles" },
    { id: "recette-makossa-urbain", title: "4. La recette de nos nouveaux créateurs : puiser dans l'héritage" },
    { id: "atelier-fusion-237", title: "5. Votre atelier pratique d'inspiration inversée" }
  ],
  bodyHtml: `
            <h2 id="photocopie-vs-hommage">1. La différence entre le plagiat servile et l'hommage qui crée</h2>
            <p>Il y a une différence fondamentale entre deux démarches : copier la surface d'une œuvre (reprendre un refrain mot pour mot, plagier un logo ou imiter la démarche d'un artiste sans rien y apporter) et <strong>démonter le moteur intérieur</strong> d'une création pour comprendre son génie.</p>
            <p>Le mauvais copieur prend l'œuf d'autrui et le fait passer pour le sien. Le grand créateur, lui, observe la poule, comprend comment elle se nourrit et pond, puis rentre dans sa propre cour pour élever ses propres poussins ! S'inspirer véritablement, c'est voler l'essence, la méthode et l'exigence d'un maître, jamais son emballage extérieur.</p>

            <h2 id="lecon-francis-bebey">2. Francis Bebey : mélanger la flûte pygmée et la guitare classique</h2>
            <p>Prenez l'exemple lumineux de notre illustre compatriote <strong>Francis Bebey</strong>. Écrivain couronné par le Grand Prix Littéraire d'Afrique Noire pour son roman <em>Le Fils d'Agatha Moudio</em>, il était aussi un virtuose mondial de la guitare classique.</p>
            <p>Mais au lieu de se contenter de jouer les valses espagnoles ou le classique européen comme tout le monde au conservatoire, que fait-il ? Il s'enfonce dans les forêts du Sud Cameroun pour étudier la musique des peuples de la forêt (les Pygmées), apprend à jouer de leur flûte traditionnelle à une seule note (le ndewhoo), et fusionne cette respiration ancestrale avec les harmonies de sa guitare ! Il a créé un genre musical avant-gardiste unique que des artistes du monde entier étudient encore aujourd'hui avec respect. Il s'est inspiré de deux traditions millénaires pour inventer sa propre route.</p>

            <h2 id="remonter-aux-racines">3. La règle d'or : allez voir qui inspirait vos idoles</h2>
            <p>Si vous admirez aujourd'hui un artiste ou un auteur moderne de chez nous (que ce soit Locko, Cysoul, Charlotte Dipanda ou un mangaka camerounais), ne vous contentez pas de l'écouter en boucle. Faites une petite enquête de détective : <strong>qui étaient les maîtres de vos idoles quand ils avaient votre âge ?</strong></p>
            <p>Vous découvrirez qu'ils écoutaient le Bikutsi originel de Messi Martin, le Makossa poétique d'Eboa Lotin, le Mangambeu de l'Ouest ou le Highlife ghanéen. En remontant à la source originelle, vous buvez une eau pure et vous comprenez d'où vient la force de notre patrimoine au lieu d'en consommer une version déjà filtrée.</p>

            <h2 id="recette-makossa-urbain">4. La recette de nos nouveaux créateurs : puiser dans l'héritage</h2>
            <p>Regardez comment la jeunesse camerounaise et africaine réinvente les arts visuels et la mode aujourd'hui : nos bédéistes prennent les récits épiques des héros de notre histoire (Rudolf Duala Manga Bell, Ruben Um Nyobè, la reine Moremi au Nigeria) et les dessinent avec le dynamisme des mangas japonais !</p>
            <p>Le résultat ? Des bandes dessinées et des animés qui passionnent à la fois les jeunes de Yaoundé et les lecteurs de Tokyo ou de Paris. Parce que la racine est authentique et locale, mais le langage est universel et moderne.</p>

            <h2 id="atelier-fusion-237">5. Votre atelier pratique d'inspiration inversée</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🛠️ L'exercice des 3 ingrédients alchimiques</h3>
                <p>Choisissez aujourd'hui 3 influences très différentes issues de votre univers :</p>
                <ol>
                    <li><strong>Un conte ou proverbe traditionnel :</strong> (Exemple : <em>L'histoire de Koulou la tortue et du léopard</em>).</li>
                    <li><strong>Une technologie ou passion moderne :</strong> (Exemple : <em>Les smartphones, les drones ou les réseaux sociaux</em>).</li>
                    <li><strong>Un genre narratif que vous adorez :</strong> (Exemple : <em>Une enquête policière à suspense dans les rues de Douala</em>).</li>
                </ol>
                <p>Mélangez ces 3 ingrédients pour esquisser une courte histoire de 10 lignes. Vous verrez à quel point le résultat est immédiatement captivant et original !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 12 : Observer le quotidien avec un regard neuf
// ============================================================================
updateArticle('observer-quotidien-regard-neuf.html', {
  lead: `Combien d'entre nous traversent le marché de Mokolo à Yaoundé, le carrefour Ndokoti à Douala ou les rues de leur quartier en traînant les pieds, les yeux rivés sur leur écran, sans rien voir de la symphonie incroyable qui se joue sous leurs yeux ? On se dit souvent : « Il ne se passe rien ici, pour voir de belles choses, il faut voyager en Europe ou en Amérique. » Quelle cécité ! L'Afrique et le Cameroun regorgent de trésors d'ingéniosité, de couleurs, d'odeurs et de poésie brute à chaque coin de rue. Des artisans récupérateurs d'Ancien Dalip qui réparent n'importe quel moteur jusqu'aux feuilles de bananier qui emballent nos délices depuis des siècles, notre quotidien est un laboratoire géant d'innovation. Ouvrons grand nos yeux !`,
  toc: [
    { id: "marche-mokolo-symphonie", title: "1. La symphonie sensorielle du marché de Mokolo" },
    { id: "feuille-de-bananier-biotech", title: "2. La feuille de bananier : la biotechnologie ancestrale de nos mamans" },
    { id: "recuperateurs-dalip", title: "3. La magie des mécaniciens d'Ancien Dalip : la débrouille devenue art" },
    { id: "poivre-de-penja", title: "4. Le secret du poivre de Penja : les trésors cachés de notre terre" },
    { id: "mission-regard-neuf", title: "5. Votre mission d'explorateur urbain du quartier" }
  ],
  bodyHtml: `
            <h2 id="marche-mokolo-symphonie">1. La symphonie sensorielle du marché de Mokolo</h2>
            <p>Avez-vous déjà pris le temps de marcher dans un grand marché africain sans être pressé de faire vos courses ? Fermez les yeux deux secondes et respirez : l'arôme puissant du poivre blanc, la fragrance fumée du poisson séché, les monticules d'épices pilées aux couleurs ocre et safran, les tissus wax aux motifs géométriques flamboyants.</p>
            <p>Écoutez les voix : le rythme chantant des négociations entre les vendeuses et les clients, les dictons pleins d'humour lancés à la volée, le tintement des marmites en fonte. Pour un esprit curieux, un marché africain est une encyclopédie vivante de psychologie, d'économie, de design et de sociologie à ciel ouvert !</p>

            <h2 id="feuille-de-bananier-biotech">2. La feuille de bananier : la biotechnologie ancestrale de nos mamans</h2>
            <p>Pendant que les écologistes du monde entier cherchent à inventer des emballages biodégradables sans plastique pour sauver la planète, qu'utilisent nos mères depuis des millénaires pour cuire et conserver le koki, le bâton de manioc ou le poisson braisé ?</p>
            <p>La <strong>feuille de bananier</strong> passée au feu doux pour l'assouplir ! Elle est 100 % naturelle, hermétique, donne un parfum boisé subtil et inimitable aux aliments, et retourne à la terre en quelques semaines sans laisser le moindre déchet toxique. Regarder son quotidien avec un œil neuf, c'est redécouvrir le génie écologique de nos traditions pour concevoir les innovations durables de demain.</p>

            <h2 id="recuperateurs-dalip">3. La magie des mécaniciens d'Ancien Dalip : la débrouille devenue art</h2>
            <p>Allez faire un tour dans les ateliers informels de menuiserie métallique ou de mécanique à Douala ou Bafoussam : quand une pièce industrielle est introuvable ou trop chère, que fait le mécanicien camerounais ? Est-ce qu'il baisse les bras en disant <em>« C'est gâté, on ne peut rien faire »</em> ?</p>
            <p>Jamais ! Il prend une vieille jante de camion, un morceau de tôle usagée, allume son chalumeau, et forge sur place une pièce sur mesure qui fonctionne parfaitement ! En Occident, on appelle pompeusement cela « l'économie circulaire » ou « l'innovation frugale ». Chez nous, c'est l'intelligence de survie et la débrouillardise de tous les jours. Si vous appliquez cette même inventivité à vos études ou à vos projets intellectuels, rien ne pourra jamais vous arrêter.</p>

            <h2 id="poivre-de-penja">4. Le secret du poivre de Penja : les trésors cachés de notre terre</h2>
            <p>Sur les flancs volcaniques du mont Koupé dans le Moungo, pousse un poivre blanc d'exception : le <strong>Poivre de Penja</strong>. Pendant longtemps, c'était juste un poivre parmi d'autres pour les villageois de la zone. Mais le jour où des producteurs passionnés ont compris sa valeur gustative unique, l'ont fait analyser par des agronomes et ont obtenu la première Indication Géographique Protégée (IGP) d'Afrique subsaharienne, ce poivre est devenu l'un des condiments les plus recherchés sur les tables des palaces parisiens et new-yorkais à 200 euros le kilo !</p>
            <p>La richesse n'est pas ailleurs : elle est souvent sous nos pieds, dans nos forêts, nos sols et nos savoir-faire. Il suffit de quelqu'un qui pose dessus un regard neuf, rigoureux et passionné.</p>

            <h2 id="mission-regard-neuf">5. Votre mission d'explorateur urbain du quartier</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🚶‍♂️ La promenade aux 3 pépites</h3>
                <p>En rentrant chez vous aujourd'hui, rangez vos écouteurs dans votre sac et ouvrez l'œil :</p>
                <ol>
                    <li>Repérez une invention ingénieuse fabriquée avec de la récupération dans une boutique ou un atelier du quartier.</li>
                    <li>Écoutez et notez une expression imagée ou une métaphore savoureuse prononcée par un aîné dans la rue.</li>
                    <li>Observez un détail d'architecture ou un arbre que vous n'aviez jamais remarqué auparavant.</li>
                </ol>
                <p>Votre quartier n'est pas un décor gris : c'est votre terrain d'entraînement permanent à la curiosité !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 13 : Penser autrement : exercices pour muscler sa créativité
// ============================================================================
updateArticle('penser-autrement-exercices.html', {
  lead: `« Moi je ne suis pas un génie... Dans ma famille, personne n'est artiste ou inventeur ! » Combien de fois entend-on cette phrase dans nos cours d'école ou nos maisons ? Comme si l'intelligence et la créativité étaient réservées à une poignée de personnes nées avec une cuillère en argent dans la bouche ! Pourtant, avez-vous déjà vu nos aînés jouer au Songo sous l'arbre à palabres ? Ce jeu traditionnel aux douze cases est l'un des entraînements mathématiques et tactiques les plus puissants du monde ! Votre créativité n'est pas une bénédiction magique : c'est un muscle d'athlète. Et comme les jarrets d'un lion, elle se muscle par l'exercice régulier. Préparez-vous à débrider vos méninges !`,
  toc: [
    { id: "sagesse-du-songo", title: "1. La sagesse millénaire du Songo : l'école de la stratégie africaine" },
    { id: "contes-koulou-la-tortue", title: "2. Les contes de Koulou la tortue : la pensée latérale avant l'heure" },
    { id: "contraintes-stimulantes", title: "3. La force des contraintes : pourquoi la débrouille rend génial" },
    { id: "associations-impossibles-mboa", title: "4. Le jeu des télescopages inattendus du terroir" },
    { id: "gym-mentale-3minutes", title: "5. Votre entraînement quotidien en 3 minutes chrono" }
  ],
  bodyHtml: `
            <h2 id="sagesse-du-songo">1. La sagesse millénaire du Songo : l'école de la stratégie africaine</h2>
            <p>Chez les peuples Fang-Beti du Cameroun et du Gabon, comme dans une grande partie de l'Afrique avec les jeux de la famille du Mancala (l'Awalé en Côte d'Ivoire, l'Omweso en Ouganda), le <strong>Songo</strong> est bien plus qu'un passe-temps : c'est un véritable dojo intellectuel.</p>
            <p>Deux joueurs se font face devant un plateau en bois sculpté de 12 cavités où circulent des graines de nkong. En quelques secondes, le joueur aguerri doit calculer mentalement des séries d'additions, anticiper les coups de l'adversaire cinq tours à l'avance, et tendre des pièges subtils tout en restant impassible. Ce jeu développe une agilité de calcul mental, une vision globale et une ruse créative exceptionnelles. Notre continent a inventé la théorie des jeux bien avant les universités modernes !</p>

            <h2 id="contes-koulou-la-tortue">2. Les contes de Koulou la tortue : la pensée latérale avant l'heure</h2>
            <p>Rappelez-vous les contes traditionnels que nos grands-mères nous racontaient le soir : qui triomphe toujours à la fin ? Est-ce le léopard avec ses griffes acérées ? Est-ce l'éléphant avec sa masse gigantesque ?</p>
            <p>Non ! C'est presque toujours <strong>Koulou la tortue</strong>, ou le lièvre minuscule ! Pourquoi ? Parce que la tortue sait qu'elle ne peut pas rivaliser par la force brute. Elle est obligée d'utiliser ce que les psychologues modernes appellent la <em>pensée latérale</em> : faire semblant de perdre pour mieux surprendre, poser des devinettes inattendues, ou utiliser la force de l'adversaire contre lui-même.</p>
            <p>Quand vous êtes confronté à un problème difficile (un devoir complexe, un manque de moyens pour un projet), arrêtez de foncer comme un bélier contre un mur de béton : asseyez-vous, faites la tortue rusée et trouvez le chemin de traverse !</p>

            <h2 id="contraintes-stimulantes">3. La force des contraintes : pourquoi la débrouille rend génial</h2>
            <p>On croit souvent que pour être créatif, il faut avoir carte blanche, zéro contrainte et tout l'or du monde. C'est faux ! Trop de liberté paralyse l'esprit.</p>
            <p>C'est précisément parce qu'un jeune camerounais n'a pas les moyens d'acheter du matériel coûteux qu'il invente une façon inédite de réparer, de programmer ou de créer avec les outils du bord. La contrainte n'est pas une prison : c'est le tremplin qui force vos neurones à sortir de leur paresse habituelle.</p>

            <h2 id="associations-impossibles-mboa">4. Le jeu des télescopages inattendus du terroir</h2>
            <p>Comment invente-t-on des métaphores qui marquent les esprits et font mouche ? En associant un objet du quotidien avec une idée abstraite.</p>
            <p>Prenez par exemple <em>une marmite de taro</em> et <em>la patience</em>. À quoi ressemble la marmite de la patience ? C'est une marmite en fonte qui chauffe à feu doux pendant des heures sans jamais brûler le fond, jusqu'à ce que la sauce devienne onctueuse et savoureuse. Dès que vous formulez cette image, tout le monde comprend instantanément la valeur de la persévérance. Entraînez-vous à marier les objets de notre terroir avec de grands principes de vie !</p>

            <h2 id="gym-mentale-3minutes">5. Votre entraînement quotidien en 3 minutes chrono</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🧠 Le défi « Et si on inversait le Mboa ? »</h3>
                <p>Chaque jour, posez-vous une question décalée ancrée dans notre réalité :</p>
                <ul>
                    <li><em>« Et si les feux de signalisation au carrefour chantaient du Makossa au lieu d'afficher des lumières rouges et vertes ? »</em></li>
                    <li><em>« Et si le manioc pouvait être utilisé pour fabriquer des coques de téléphone 100 % incassables ? »</em></li>
                    <li><em>« Et si nos groupes WhatsApp familiaux devenaient des mini-universités de village où chaque membre enseigne un savoir pratique le dimanche ? »</em></li>
                </ul>
                <p>Amusez-vous à explorer les réponses avec vos amis. Rires assurés et cerveau chauffé à blanc !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 14 : La prise de notes au service de la création
// ============================================================================
updateArticle('prise-notes-creation-reflexion.html', {
  lead: `Prendre des notes en classe, soyons honnêtes : c'est trop souvent le calvaire absolu. On est assis le dos courbé à recopier à toute vitesse des tableaux entiers au stylo à bille bleu jusqu'à avoir les doigts engourdis, tout en essayant de ne pas s'endormir sous la dictée du professeur. Et le soir devant nos feuilles, on a l'impression d'avoir recopié du chinois ancien ! Pourtant, savez-vous qu'à la fin du XIXe siècle, le sultan Ibrahim Njoya du royaume Bamoun à Foumban a inventé son propre alphabet de plus de 80 caractères pour consigner l'histoire, les lois et la médecine de son peuple dans des manuscrits royaux magnifiques ? Prendre des notes n'est pas être un robot copieur : c'est devenir le cartographe de son propre esprit.`,
  toc: [
    { id: "syndrome-du-robot-copieur", title: "1. Le syndrome du robot copieur en classe" },
    { id: "lecon-roi-njoya", title: "2. Le sultan Njoya et l'écriture Shü-mom : consigner son génie" },
    { id: "sketchnoting-africain", title: "3. Le sketchnoting : pourquoi dessiner dans la marge rend intelligent" },
    { id: "carnet-de-poche-200fcfa", title: "4. Le petit carnet à 200 FCFA : votre deuxième cerveau" },
    { id: "regle-des-3-stylos", title: "5. Votre kit de survie pour ne plus jamais subir les cours" }
  ],
  bodyHtml: `
            <h2 id="syndrome-du-robot-copieur">1. Le syndrome du robot copieur en classe</h2>
            <p>Quand on note chaque mot prononcé par le prof sans réfléchir, que se passe-t-il réellement dans notre corps ? L'information entre par nos oreilles et ressort directement par nos doigts sur la feuille, sans jamais s'arrêter une seule seconde dans notre cerveau pour y être comprise et digérée !</p>
            <p>Prendre des notes intelligentes, ce n'est pas tout écrire : c'est <strong>traduire, filtrer et résumer avec ses propres mots</strong>. Moins vous écrivez de mots inutiles, plus votre esprit est obligé de faire le travail essentiel de compréhension. Si vous êtes capable de résumer 45 minutes de cours en 5 schémas et 10 mots-clés, vous avez déjà appris 80 % de la leçon !</p>

            <h2 id="lecon-roi-njoya">2. Le sultan Njoya et l'écriture Shü-mom : consigner son génie</h2>
            <p>À Foumban, à la fin du XIXe siècle, le jeune roi <strong>Ibrahim Njoya</strong> comprend une chose fondamentale : un peuple qui ne consigne pas lui-même son histoire et ses savoirs dans ses propres écrits risque de voir sa mémoire s'effacer ou être réécrite par d'autres.</p>
            <p>Ne trouvant aucun alphabet existant qui rende justice à la richesse des sons de la langue bamoun, que fait-il ? Il réunit ses conseillers et invente de toutes pièces une écriture originale, l'écriture <strong>Shü-mom</strong> ! Au départ composée de centaines de pictogrammes inspirés de la vie quotidienne, il la perfectionne et la simplifie au fil des années pour créer un alphabet d'une élégance rare, couché sur des parchemins royaux reliés en cuir.</p>
            <p>Njoya ne prenait pas de notes passives : il créait un outil d'émancipation intellectuelle pour son peuple. Chaque fois que vous prenez un carnet pour noter vos idées, vous marchez dans les pas de ce roi bâtisseur !</p>

            <h2 id="sketchnoting-africain">3. Le sketchnoting : pourquoi dessiner dans la marge rend intelligent</h2>
            <p>On s'est tous fait gronder un jour par un enseignant pour avoir dessiné un petit bonhomme ou un ballon dans la marge d'un cahier. Et pourtant, les neurosciences modernes prouvent que mélanger des mots et des petits dessins simples (ce qu'on appelle le <em>sketchnoting</em>) double l'efficacité de la mémoire !</p>
            <p>Pourquoi ? Parce que notre cerveau possède deux canaux pour enregistrer le monde : le canal des mots et le canal des images. Si vous écrivez simplement <em>« La cellule animale »</em>, seul le canal verbal s'allume. Mais si vous dessinez à côté un petit cercle avec un noyau au centre en forme de jaune d'œuf, les deux hémisphères s'allument en même temps ! Pas besoin d'être un grand peintre : un rond, une flèche et un carré suffisent amplement.</p>

            <h2 id="carnet-de-poche-200fcfa">4. Le petit carnet à 200 FCFA : votre deuxième cerveau</h2>
            <p>L'expert mondial de la productivité David Allen le répète souvent : <em>« Votre tête est faite pour avoir des idées, pas pour les retenir ! »</em></p>
            <p>Si vous essayez de garder dans votre tête le cours d'histoire, la date du contrôle de physique, la liste des courses pour la maison et votre idée d'application mobile, votre mémoire vive est saturée et vous devenez anxieux. Achetez un tout petit carnet de poche à 200 FCFA que vous gardez toujours dans votre poche ou dans votre sac. Dès qu'une idée ou un devoir surgit, notez-le immédiatement ! Votre esprit sera instantanément libéré et serein.</p>

            <h2 id="regle-des-3-stylos">5. Votre kit de survie pour ne plus jamais subir les cours</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🎯 Le code couleur des vainqueurs</h3>
                <p>Débarrassez-vous des trousses géantes encombrées de 25 feutres inutiles. Gardez 3 stylos essentiels :</p>
                <ol>
                    <li><strong>Stylo bleu ou noir :</strong> Les explications simples rédigées avec vos propres mots.</li>
                    <li><strong>Stylo vert :</strong> Les définitions essentielles et les concepts clés à retenir par cœur.</li>
                    <li><strong>Stylo rouge :</strong> Les pièges d'examen classiques et les avertissements du professeur.</li>
                </ol>
                <p>Vos cours deviendront lumineux, clairs et vos révisions d'examens deviendront un jeu d'enfant !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 15 : Comment produire des idées sans attendre l'inspiration
// ============================================================================
updateArticle('produire-idees-sans-inspiration.html', {
  lead: `« Ah mon frère, je n'ai pas l'inspiration aujourd'hui... Je suis assis, j'attends que ça vienne ! » C'est sans doute la phrase la plus répétée dans nos quartiers pour justifier la procrastination. Mais avez-vous déjà vu le grand couturier du quartier ou la restauratrice qui prépare le banquet d'un mariage s'asseoir les bras croisés en disant aux invités : « Attendez, j'attends que les dieux de la couture me touchent pour commencer à couper le tissu » ? Bien sûr que non ! Les vrais créateurs ont des méthodes, des recettes et des outils pour faire jaillir les idées sur commande. Découvrons ensemble comment fabriquer des étincelles même les jours où vous vous sentez aussi inspiré qu'un pavé sous la pluie !`,
  toc: [
    { id: "mythe-muse-en-vacances", title: "1. Le mythe de la muse en vacances démonté" },
    { id: "methode-scamper-terroir", title: "2. La méthode SCAMPER appliquée aux produits de notre terre" },
    { id: "pensee-inversee-mboa", title: "3. La pensée inversée : comment tout rater pour réussir" },
    { id: "quota-createurs-africains", title: "4. Le quota quotidien : la quantité enfante la qualité" },
    { id: "generateur-idees-express", title: "5. Votre générateur d'idées d'urgence en 10 minutes" }
  ],
  bodyHtml: `
            <h2 id="mythe-muse-en-vacances">1. Le mythe de la muse en vacances démonté</h2>
            <p>Attendre l'inspiration comme on attend un car de transport sans horaire sur une route de campagne, c'est la certitude absolue de ne jamais rien accomplir de remarquable dans sa vie. Les professionnels ne travaillent jamais ainsi.</p>
            <p>L'inspiration n'est pas le moteur du démarrage : <strong>elle est le carburant qui s'allume après que le moteur a commencé à tourner !</strong> C'est après avoir tracé les premières lignes, après avoir écrit les deux premiers paragraphes maladroits ou après avoir mélangé les deux premiers ingrédients que l'enthousiasme arrive. Ne demandez pas au feu de cheminée de vous chauffer avant d'y avoir mis du bois sec !</p>

            <h2 id="methode-scamper-terroir">2. La méthode SCAMPER appliquée aux produits de notre terre</h2>
            <p>Quand vous devez inventer un projet d'entreprise, une histoire ou un produit nouveau, utilisez la boîte à outils <strong>SCAMPER</strong> avec nos réalités africaines :</p>
            <ul>
                <li><strong>S (Substituer) :</strong> Que se passe-t-il si je remplace la farine de blé importée par de la farine de patate douce ou de manioc ? (C'est ainsi que sont nés des pains et gâteaux locaux délicieux et économiques !).</li>
                <li><strong>C (Combiner) :</strong> Et si je fusionnais la livraison de vivres frais du village avec les paiements par Mobile Money et une application sur smartphone ?</li>
                <li><strong>A (Adapter) :</strong> Comment adapter le système d'irrigation traditionnel du désert sahélien pour arroser un potager urbain sur un toit d'immeuble à Douala ?</li>
                <li><strong>M (Modifier / Magnifier) :</strong> Et si je transformais un simple jus de bissap ou de gingembre de rue en boisson gazeuse premium en bouteille en verre ?</li>
                <li><strong>P (Produire un autre usage) :</strong> À quoi d'autre peuvent servir les cabosses de cacao après la récolte ? (On en fait du savon bio de grande valeur et de l'engrais organique !).</li>
                <li><strong>E (Éliminer) :</strong> Si je supprimais tous les intermédiaires pour vendre directement du planteur au consommateur ?</li>
                <li><strong>R (Renverser) :</strong> Et si au lieu que les clients viennent au restaurant, c'était le restaurant mobile qui venait régaler les travailleurs dans les bureaux ?</li>
            </ul>

            <h2 id="pensee-inversee-mboa">3. La pensée inversée : comment tout rater pour réussir</h2>
            <p>Quand votre tête refuse de trouver comment réussir un projet scolaire ou professionnel, utilisez la ruse de la <strong>pensée inversée</strong> : demandez-vous comment provoquer la pire catastrophe possible !</p>
            <p>Par exemple : <em>« Comment organiser la fête de remise des diplômes la plus pourrie, chaotique et détestable de l'histoire du collège ? »</em></p>
            <p>Listez toutes les catastrophes : faire attendre les gens 3 heures au soleil sans eau fraîche, mettre une sonorisation qui grésille à faire éclater les tympans, oublier les diplômes au secrétariat, servir de la nourriture froide... Une fois votre liste faite, prenez chaque point et faites <strong>rigoureusement l'inverse</strong> ! Vous avez sous les yeux le plan infaillible pour faire un triomphe.</p>

            <h2 id="quota-createurs-africains">4. Le quota quotidien : la quantité enfante la qualité</h2>
            <p>Savez-vous combien de mélodies Manu Dibango a composées ou combien de discours Nelson Mandela a écrits avant que le monde entier ne retienne leurs chefs-d'œuvre ? Des milliers !</p>
            <p>Sur 100 idées que vous notez dans votre carnet : 70 seront sans intérêt, 20 seront moyennes, 8 seront bonnes, et 2 seront des coups de génie qui peuvent changer votre destinée et celle de votre famille. Si vous vous arrêtez dès la deuxième idée en vous disant : <em>« Ce n'est pas terrible »</em>, vous ne rencontrerez jamais les deux pépites qui vous attendaient au fond du fleuve. Laissez couler le robinet jusqu'à ce que l'eau devienne limpide !</p>

            <h2 id="generateur-idees-express">5. Votre générateur d'idées d'urgence en 10 minutes</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">⏱️ Le défi des 10 idées sans filtre</h3>
                <p>Chaque fois que vous avez une rédaction, un travail de groupe ou un projet à créer :</p>
                <ol>
                    <li>Prenez une feuille blanche.</li>
                    <li>Lancez le chrono de votre téléphone sur <strong>5 minutes</strong>.</li>
                    <li>Forcez-vous à coucher <strong>10 idées</strong> différentes sur la feuille sans réfléchir, sans juger et sans effacer. Même les idées les plus loufoques sont admises !</li>
                </ol>
                <p>Vous verrez qu'en libérant votre esprit de la peur d'être ridicule, la huitième ou neuvième idée sera une étincelle formidable !</p>
            </div>
  `
});

console.log('Batch 3 (Africa/Cameroon Edition) rewritten successfully!');
