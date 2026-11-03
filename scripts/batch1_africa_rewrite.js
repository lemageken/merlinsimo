const { updateArticle } = require('./rewrite_helper');

// ============================================================================
// ARTICLE 1 : Comment apprendre plus vite et retenir durablement
// ============================================================================
updateArticle('apprendre-plus-vite-retenir.html', {
  lead: `Soyons honnêtes deux minutes : qui n'a jamais passé des nuits entières, assis sur un tabouret sous la lumière d'une lampe tempête ou d'une bougie parce qu'Eneo a encore coupé le courant, son gros stabilo jaune fluo en main à repeindre ses cahiers jusqu'à ce qu'ils brillent dans le noir ? On finit les annales d'examen avec fierté, on se tape la poitrine en pensant qu'on maîtrise tout... et le lendemain devant la feuille d'examen : rideau de fer, trou noir total au fond du crâne ! Rassurez-vous : votre cerveau n'est pas maudit par les ancêtres du village. Vous êtes simplement tombé dans le piège que 95 % des élèves et étudiants adorent sans le savoir. Venez, on va voir comment nos propres traditions de mémoire et les neurosciences modernes peuvent faire de vous un crack des révisions sans vous épuiser.`,
  toc: [
    { id: "piege-stabilo-mboa", title: "1. Le piège du stabilo fluo et l'illusion de maîtrise" },
    { id: "rappel-actif-palabre", title: "2. Le super-pouvoir du « Rappel Actif » sous l'arbre à palabres" },
    { id: "chemin-en-brousse", title: "3. La courbe de l'oubli : comme un sentier dans la forêt équatoriale" },
    { id: "technique-feynman-marche", title: "4. La méthode Feynman : expliquer la science à Mama Jeannette au marché" },
    { id: "entremeler-matieres", title: "5. Ne jonglez pas avec le même ballon toute la journée !" },
    { id: "defi-cameroun-7jours", title: "6. Votre mini-défi de la semaine au quartier" }
  ],
  bodyHtml: `
            <h2 id="piege-stabilo-mboa">1. Le piège du stabilo fluo et l'illusion de maîtrise</h2>
            <p>Quand vous relisez vos cours trois fois d'affilée en badigeonnant chaque paragraphe important au feutre fluo, votre cerveau vous joue un tour de magie un peu traître. Vos yeux voient les lignes, et votre tête se dit : <em>« Ah oui, c'est facile, je reconnais ça par cœur ! »</em></p>
            <p>Mais attention : <strong>reconnaître n'est pas connaître</strong> ! C'est exactement comme regarder Samuel Eto'o ou Sadio Mané placer une frappe en pleine lucarne à la télévision : assis au salon avec une tasse de thé, ça a l'air évident. Mais descendez sur le terrain boueux du quartier pour faire le même geste avec des défenseurs qui vous foncent dessus, et vous verrez si la balle part dans la lucarne ou dans le poulailler du voisin !</p>
            <p>En neurosciences, relire passivement et surligner sont prouvés comme les pires méthodes pour retenir. Pourquoi ? Parce que votre cerveau reste assis sur le banc de touche en spectateur. Et un muscle qui ne bouge pas ne prend jamais de force.</p>

            <h2 id="rappel-actif-palabre">2. Le super-pouvoir du « Rappel Actif » sous l'arbre à palabres</h2>
            <p>Avez-vous déjà remarqué comment, dans nos villages en Afrique, les anciens et les griots peuvent réciter la généalogie de dix générations de familles, sans avoir une seule feuille de papier sous la main ? Comment font-ils ?</p>
            <p>Ils n'ont jamais fait de « relecture passive ». Dès leur enfance, on les forçait à <strong>restituer l'histoire de mémoire</strong> devant tout le monde au coin du feu. C'est exactement ce que la science moderne appelle le <em>rappel actif</em> (Active Recall). Pour retenir une information, vous ne devez pas la faire entrer dans votre tête : <strong>vous devez la forcer à en sortir !</strong></p>
            <ul>
                <li><strong>Étape 1 :</strong> Lisez attentivement une règle de maths, une formule de chimie ou une page d'histoire.</li>
                <li><strong>Étape 2 :</strong> Fermez immédiatement votre cahier. Plus le droit de jeter un coup d'œil !</li>
                <li><strong>Étape 3 :</strong> Prenez un brouillon ou un morceau de craie, et réécrivez tout ce dont vous vous souvenez avec vos propres mots, schémas ou abréviations.</li>
                <li><strong>Étape 4 :</strong> Rouvrez le cahier pour vérifier. C'est à la seconde exacte où vous avez transpiré pour chercher l'idée dans vos tiroirs mentaux que votre cerveau consolide ses connexions !</li>
            </ul>

            <h2 id="chemin-en-brousse">3. La courbe de l'oubli : comme un sentier dans la forêt équatoriale</h2>
            <p>En 1885, un savant nommé Hermann Ebbinghaus a mesuré à quelle vitesse notre mémoire s'efface : après seulement deux jours, sans révision, notre cerveau oublie près de 70 % de ce qu'il a appris ! Et c'est normal : le cerveau doit faire le tri pour ne pas exploser.</p>
            <p>Imaginez un sentier tracé à la machette dans la forêt équatoriale ou dans la brousse de l'Ouest camerounais. Si vous n'y marchez qu'une seule fois, les herbes folles et les lianes repoussent au bout de 48 heures : le sentier est effacé. Mais si vous y repassez le lendemain, puis trois jours plus tard, puis une semaine après, la terre se tasse, l'herbe ne repousse plus, et vous obtenez une piste rouge bien solide où l'on peut rouler en moto les yeux fermés !</p>
            <p>C'est ce qu'on appelle la <strong>répétition espacée</strong> :</p>
            <ol>
                <li><strong>Jour 1 :</strong> Vous découvrez la leçon et faites un test à l'aveugle sans notes.</li>
                <li><strong>Jour 2 :</strong> Une petite piqûre de rappel de 5 minutes chrono le lendemain matin.</li>
                <li><strong>Jour 5 :</strong> Un quiz rapide sur les 3 points clés.</li>
                <li><strong>Jour 15 :</strong> Une dernière vérification. C'est bon : la notion est verrouillée pour le contrôle et pour l'examen final !</li>
            </ol>

            <blockquote style="background: rgba(0, 186, 199, 0.08); border-left: 4px solid var(--electric-blue); padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 0 12px 12px 0; font-style: italic;">
                « Un proverbe de chez nous dit : "Ce que tu as appris et que tu n'exerces pas ressemble à un champ labouré qu'on oublie d'ensemencer." »
            </blockquote>

            <h2 id="technique-feynman-marche">4. La méthode Feynman : expliquer la science à Mama Jeannette au marché</h2>
            <p>Le physicien Richard Feynman, prix Nobel, disait toujours : <em>« Si vous ne pouvez pas expliquer un principe à un enfant de 10 ans sans utiliser de jargon pompeux, c'est que vous ne le comprenez pas vous-même ! »</em></p>
            <p>Faites ce test génial chez vous : imaginez que vous devez expliquer la circulation sanguine, la gravité ou la guerre d'indépendance à Mama Jeannette pendant qu'elle prépare le ndolè ou qu'elle vend ses beignets au carrefour. Si vous commencez à lui sortir des grands mots savants incompréhensibles pour faire l'intellectuel, elle va vous regarder en riant et vous dire : <em>« Mon enfant, parle-moi en français clair ! »</em></p>
            <p>Traduire un cours complexe avec des exemples simples de la vie quotidienne (les marmites, les courses au marché, le trajet en benskin), c'est la preuve ultime que vous avez vraiment compris l'essence du sujet.</p>

            <h2 id="entremeler-matieres">5. Ne jonglez pas avec le même ballon toute la journée !</h2>
            <p>À l'école de football des Brasseries du Cameroun, les entraîneurs ne font jamais faire 4 heures de tirs au but d'affilée aux jeunes. Pourquoi ? Parce qu'un bon joueur doit savoir dribbler, sprinter, faire une tête, passer court et défendre dans la même demi-heure !</p>
            <p>Pour le travail intellectuel, c'est identique : ne passez pas 5 heures non-stop sur la géométrie jusqu'à ce que votre cerveau se transforme en purée de manioc. <strong>Entremêlez vos matières</strong> : 30 minutes d'équations, puis 25 minutes d'anglais ou d'histoire, une pause pour boire de l'eau fraîche, puis 20 minutes de sciences. Cette gymnastique force votre cerveau à changer de vitesse, et c'est ce qui crée les esprits les plus vifs.</p>

            <h2 id="defi-cameroun-7jours">6. Votre mini-défi de la semaine au quartier</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🎮 Le challenge « Dictaphone du carrefour »</h3>
                <p>Prenez aujourd'hui un chapitre ou une formule difficile. Lisez-la pendant 5 minutes. Fermez tout. Ouvrez l'enregistreur vocal de votre téléphone et expliquez la leçon en <strong>60 secondes montre en main</strong>, comme si vous l'expliquiez à votre petit frère ou à un ami assis à côté de vous en dégustant un beignet-haricot chaud. Réécoutez-vous : si c'est clair et drôle, vous avez gagné 3 heures de révision inutile !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 2 : Créer des connexions inattendues entre les domaines
// ============================================================================
updateArticle('connexions-inattendues-domaines.html', {
  lead: `Vous avez remarqué comme à l'école, on nous enferme dans des cases bien étanches ? D'un côté les maths, de l'autre la musique. D'un côté l'informatique, de l'autre l'agriculture ou la cuisine. Pourtant, quand on regarde les plus grands esprits créatifs d'Afrique et du Cameroun, de Richard Bona fabriquant sa première guitare avec des câbles de frein de vélo à Minta, jusqu'à Arthur Zang mariant l'électronique et la médecine pour inventer le Cardiopad, leur secret est toujours le même : avoir osé faire se télescoper deux mondes que personne n'imaginait ensemble !`,
  toc: [
    { id: "cases-scolaires", title: "1. Briser les cases étanches de l'école" },
    { id: "genie-richard-bona", title: "2. La leçon de Richard Bona : fabriquer une basse avec des câbles de vélo" },
    { id: "cardiopad-arthur-zang", title: "3. Le Cardiopad d'Arthur Zang : quand le code sauve des cœurs au village" },
    { id: "alchimie-du-ndole", title: "4. L'alchimie du ndolè et du taro : la créativité dans la marmite" },
    { id: "jeu-collision-locale", title: "5. Votre atelier pratique de télescopage d'idées" }
  ],
  bodyHtml: `
            <h2 id="cases-scolaires">1. Briser les cases étanches de l'école</h2>
            <p>Dès le collège, on nous habitue à un réflexe mécanique : à 8h on fait des logarithmes, à 9h sonne la cloche et on range tout pour faire de la géographie, comme si les mathématiciens vivaient sur une autre planète que les géographes. Résultat ? Beaucoup grandissent en croyant qu'un artiste ne peut rien comprendre au commerce, ou qu'un informaticien n'a rien à apprendre d'un planteur de cacao.</p>
            <p>C'est une illusion totale ! Dans la vraie vie, les plus grandes révolutions naissent toujours au <strong>carrefour des disciplines</strong>. Ce sont les esprits capables de jeter un pont entre deux rives que personne ne reliait qui transforment leur communauté.</p>

            <h2 id="genie-richard-bona">2. La leçon de Richard Bona : fabriquer une basse avec des câbles de vélo</h2>
            <p>Connaissez-vous l'histoire extraordinaire de Richard Bona, l'un des plus grands bassistes vivants de la planète ? Né à Minta, un village en pleine forêt camerounaise, il n'avait ni magasin de musique, ni argent pour s'acheter un instrument coûteux.</p>
            <p>Qu'a-t-il fait ? Il a observé le monde autour de lui avec un regard d'alchimiste : il a sculpté un manche dans du bois de courge séchée, tendu des vieux <strong>câbles de frein de vélo</strong> usagés en guise de cordes, et bricolé des micros avec des canettes de conserve et des fils électriques récupérés !</p>
            <p>En croisant la débrouillardise de la mécanique villageoise et l'amour du rythme traditionnel, il a forgé une oreille musicale et un doigté uniques au monde, qui l'ont mené des cours d'eau du Cameroun jusqu'aux plus prestigieuses scènes de New York et de Tokyo. La créativité, ce n'est pas avoir des millions de matériel : c'est savoir connecter ce qu'on a sous la main !</p>

            <h2 id="cardiopad-arthur-zang">3. Le Cardiopad d'Arthur Zang : quand le code sauve des cœurs au village</h2>
            <p>Prenez un autre exemple magnifique qui fait la fierté de notre pays : <strong>Arthur Zang</strong>, jeune ingénieur en informatique de Yaoundé.</p>
            <p>Au Cameroun, il y a moins de 50 cardiologues pour plus de 25 millions d'habitants, et presque tous exercent dans les grands hôpitaux de Douala ou de Yaoundé. Pour un grand-parent malade dans un village reculé de l'Est ou du Grand Nord, faire 600 km de piste pour passer un électrocardiogramme est souvent impossible.</p>
            <p>Arthur Zang n'était pas médecin : il était informaticien. Mais il a connecté ses connaissances en programmation logicielle avec les besoins urgents de la santé publique. Il a inventé le <strong>Cardiopad</strong>, la première tablette médicale d'Afrique tactile, qui permet à une infirmière de village de faire un examen cardiaque et d'envoyer les données par le réseau mobile directement sur le téléphone d'un cardiologue en ville ! Deux mondes qui ne se parlaient pas sont devenus une solution vitale.</p>

            <h2 id="alchimie-du-ndole">4. L'alchimie du ndolè et du taro : la créativité dans la marmite</h2>
            <p>Regardez notre gastronomie traditionnelle : un plat comme le taro à la sauce jaune n'est-il pas une leçon magistrale de chimie appliquée ? Il a fallu qu'un jour, des femmes et des hommes curieux aient l'idée d'associer de l'huile de palme rouge brute avec du calcaire traditionnel (le sel gemme) pour créer cette émulsion jaune éclatante au goût inimitable !</p>
            <p>De même pour le ndolè, où l'amertume des feuilles sauvages est savamment domptée par la douceur de la pâte d'arachide, les écrevisses et les épices. Si nos mères et grands-mères avaient eu peur de mélanger des ingrédients opposés, nos plus beaux patrimoines culinaires n'existeraient pas. Votre cerveau fonctionne exactement de la même manière : mélangez vos passions, et vous obtiendrez votre propre plat signature !</p>

            <h2 id="jeu-collision-locale">5. Votre atelier pratique de télescopage d'idées</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🎲 Le jeu de la fusion 237</h3>
                <p>Prenez un problème concret de votre quotidien au quartier (par exemple : <em>les embouteillages aux heures de pointe, la gestion des déchets ou la vente des récoltes</em>) et tirez au sort un univers qui n'a rien à voir (ex : <em>le football, la musique Makossa ou les jeux vidéo sur mobile</em>).</p>
                <p>Donnez-vous 3 minutes pour inventer une idée folle : <em>« Et si on créait une application qui transforme le ramassage des bouteilles plastiques en tournoi de foot virtuel avec des points Mobile Money ? »</em> Vous rigolez ? C'est exactement comme ça que naissent les futures startups africaines qui changent le continent !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 3 : De la curiosité au projet concret
// ============================================================================
updateArticle('curiosite-projet-concret.html', {
  lead: `Au quartier, au carrefour ou autour d'une boisson fraîche, tout le monde a des idées de génie : « Si je lance telle affaire de livraison, je deviens millionnaire ! Si je crée telle application de tontine en ligne, tout le monde va télécharger ! » Mais trois mois plus tard, la même personne est toujours assise au même endroit en train de refaire le monde avec la bouche. Entre les idées qui brillent dans nos têtes et les projets qui transforment concrètement la réalité, il y a un fossé géant. Comment William Elong a-t-il lancé ses premiers drones civils au Cameroun dès l'âge de 20 ans ? Comment passe-t-on de la simple envie à l'action qui paie ? Venez, on démonte le moteur sans langue de bois.`,
  toc: [
    { id: "bavardage-vs-action", title: "1. Le piège du bavardage stérile au carrefour" },
    { id: "william-elong-drones", title: "2. L'exemple de William Elong : ne pas attendre le grand bureau climatisé" },
    { id: "jouets-fil-de-fer", title: "3. La leçon des petites voitures en fil de fer de notre enfance" },
    { id: "monstre-moyen-parfait", title: "4. Tuer l'excuse du « Je n'ai pas les moyens »" },
    { id: "protocole-72h-mboa", title: "5. La règle des 72 heures de Merlin SIMO" }
  ],
  bodyHtml: `
            <h2 id="bavardage-vs-action">1. Le piège du bavardage stérile au carrefour</h2>
            <p>On connaît tous un grand frère ou un camarade qui passe ses journées à raconter des projets grandioses : <em>« Tu vas voir mon frère, j'ai une idée monumentale, je cherche juste un investisseur pour me donner 50 millions et je démarre ! »</em> Les années passent, les cheveux blanchissent, et le projet dort toujours dans un tiroir imaginaire.</p>
            <p>Une idée dans votre tête ne coûte rien, ne risque rien et ne produit rien. Ce qui a de la valeur sur cette terre, ce n'est jamais l'idée brute : c'est <strong>la sueur, la patience et le courage</strong> qu'on met à la faire atterrir dans le monde réel, même avec des moyens dérisoires au départ.</p>

            <h2 id="william-elong-drones">2. L'exemple de William Elong : ne pas attendre le grand bureau climatisé</h2>
            <p>Regardez le parcours inspirant de notre jeune compatriote <strong>William Elong</strong>. À 20 ans, passionné de technologie, il décide de se lancer dans un domaine où personne n'attendait un jeune africain : les drones civils et l'intelligence artificielle pour la cartographie agricole et la surveillance des plantations.</p>
            <p>Avait-il des milliards de subventions au départ ? Avait-il un laboratoire ultra-moderne avec 100 ingénieurs ? Non ! Il a commencé dans une petite pièce avec une poignée de passionnés, en commandant des pièces détachées, en codant des nuits entières malgré les coupures d'électricité, et en testant ses premiers prototypes dans les champs camerounais.</p>
            <p>Quelques années plus tard, son entreprise <em>Will & Brothers</em> concevait des drones Made in Cameroon et levait des centaines de millions de FCFA. Si William avait attendu d'avoir les mêmes bureaux que Google à San Francisco pour débuter, il serait encore assis à attendre aujourd'hui !</p>

            <h2 id="jouets-fil-de-fer">3. La leçon des petites voitures en fil de fer de notre enfance</h2>
            <p>Rappelez-vous quand nous étions petits dans les cours des maisons au Cameroun : les parents n'avaient pas toujours l'argent pour nous acheter des voitures télécommandées venues d'Europe. Qu'est-ce qu'on faisait ?</p>
            <p>On prenait des <strong>fils de fer</strong> de chantiers, des boîtes de conserve de tomates vides, des bouchons de bouteilles de bière ou des roues en plastique cassées, et avec une pince et nos dix doigts, on fabriquait des camions-bennes magnifiques avec un long guidon en fil de fer pour les diriger en courant dans les ruelles !</p>
            <p>Ces petites voitures en fil de fer sont la plus belle métaphore du prototypage rapide au monde : vous n'avez pas attendu la perfection, vous avez pris les matériaux disponibles et vous avez <strong>fabriqué le jouet réel</strong>. Pour vos projets d'aujourd'hui (un livre, une chaîne YouTube, une petite entreprise de gâteaux ou de jus naturels), retrouvez cet esprit d'enfant bâtisseur !</p>

            <h2 id="monstre-moyen-parfait">4. Tuer l'excuse du « Je n'ai pas les moyens »</h2>
            <p>L'excuse reine qui tue le plus de rêves en Afrique s'appelle : <em>« Je n'ai pas les moyens. »</em> On se dit : <em>« Si je n'ai pas le dernier iPhone 16 Pro Max, un ordinateur à 1 million et un studio insonorisé, je ne peux pas créer de vidéos ni lancer mon projet. »</em></p>
            <p>Mais regardez les créateurs de contenu et comédiens africains les plus populaires aujourd'hui : beaucoup ont commencé avec un smartphone fissuré, sous le soleil de la cour, en filmant des saynètes authentiques et drôles avec leurs voisins ! Ce que le public aime, ce n'est pas le micro en or : c'est <strong>la vérité, l'énergie et la créativité de l'histoire</strong>.</p>

            <h2 id="protocole-72h-mboa">5. La règle des 72 heures de Merlin SIMO</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">⏱️ Le protocole des 3 jours pour donner vie à une idée</h3>
                <p>Chaque fois qu'une idée vous allume les yeux, vous avez exactement <strong>72 heures</strong> pour poser un acte physique dans la matière, sinon elle s'évapore :</p>
                <ul>
                    <li><strong>Jour 1 (Le plan papier) :</strong> Achetez un carnet à 200 FCFA. Écrivez le projet en 5 lignes et donnez-lui un nom qui claque.</li>
                    <li><strong>Jour 2 (Le premier caillou) :</strong> Fabriquez la toute première version minuscule (le sommaire d'un texte, la maquette d'un flyer sur Canva, ou le premier appel à un ami pour tester le concept).</li>
                    <li><strong>Jour 3 (Le baptême du feu) :</strong> Montrez ce premier résultat à deux personnes réelles et demandez leur avis sincère. Votre projet a quitté votre tête : il est officiellement vivant !</li>
                </ul>
            </div>
  `
});

// ============================================================================
// ARTICLE 4 : Développer son attention dans un monde de distractions
// ============================================================================
updateArticle('developper-attention-distractions.html', {
  lead: `Posez votre téléphone deux secondes (oui, oui, retournez l'écran face contre table !). Avez-vous remarqué à quel point nos journées au quartier ou en ville sont devenues un marathon permanent d'alertes ? Les statuts WhatsApp qu'on fait défiler jusqu'à minuit, les vidéos TikTok où l'on perd 2 heures sans s'en rendre compte, les clashs sur Facebook, les notifications MTN et Orange qui bipent... Sans parler du voisin qui met sa musique à fond et des mototaxis qui klaxonnent dehors ! Réussir à se concentrer plus de 20 minutes d'affilée sans décrocher est devenu un véritable sport de combat. La bonne nouvelle ? Protéger son attention, c'est le super-pouvoir absolu pour réussir là où les autres dorment debout.`,
  toc: [
    { id: "guerre-des-megas", title: "1. La guerre secrète pour voler vos précieux méga-octets de cerveau" },
    { id: "piege-multitache-benskin", title: "2. Le multitâche : conduire une mototaxi les yeux bandés à Ndokoti" },
    { id: "dopamine-beignets", title: "3. La dopamine : comme un sachet de sucreries chimiques" },
    { id: "forteresse-silence-cameroun", title: "4. Bâtir sa forteresse de calme face au vacarme du quartier" },
    { id: "tomate-pomodoro-237", title: "5. La méthode de la tomate de 25 minutes adaptée au Mboa" }
  ],
  bodyHtml: `
            <h2 id="guerre-des-megas">1. La guerre secrète pour voler vos précieux méga-octets de cerveau</h2>
            <p>Quand vous rechargez votre forfait internet de 1 Go ou 2 Go avec votre argent de poche, vous faites très attention à vos données : vous désactivez le téléchargement automatique des vidéos pour ne pas vous faire siphonner votre crédit en 10 minutes, n'est-ce pas ?</p>
            <p>Alors pourquoi laissez-vous les réseaux sociaux siphonner gratuitement <strong>les méga-octets de votre propre cerveau</strong> ? Des armées d'ingénieurs surpayés en Californie et en Chine analysent vos moindres clics pour que votre regard reste collé à l'écran. Si vous leur donnez votre attention, vous leur donnez votre temps de révision, vos rêves de création et votre futur métier. Votre attention est votre trésor le plus précieux : protégez-la comme un diamant !</p>

            <h2 id="piege-multitache-benskin">2. Le multitâche : conduire une mototaxi les yeux bandés à Ndokoti</h2>
            <p>Beaucoup de jeunes aiment se vanter : <em>« Moi je suis multitâche, j'arrive à faire mes devoirs de maths tout en répondant aux messages sur WhatsApp et en écoutant le dernier morceau de Burna Boy ou de Tenor ! »</em></p>
            <p>Alerte scientifique : <strong>le cerveau humain ne peut pas faire deux tâches intellectuelles en même temps.</strong> Ce que vous faites, c'est ce qu'on appelle du zapping forcé. C'est exactement comme un conducteur de benskin qui essaierait de traverser le rond-point Ndokoti à Douala à l'heure de pointe tout en envoyant un texto avec une main et en mangeant un maïs grillé de l'autre ! Tôt ou tard, c'est l'accident garanti.</p>
            <p>À chaque fois que vous quittez votre cours pour regarder une notification pendant 10 secondes, votre cerveau met en moyenne <strong>15 à 20 minutes</strong> pour retrouver son niveau maximal de concentration. Faire une seule chose à la fois avec intensité, c'est finir ses devoirs en 45 minutes et avoir toute sa soirée libre pour jouer au foot et rigoler avec ses potes !</p>

            <h2 id="dopamine-beignets">3. La dopamine : comme un sachet de sucreries chimiques</h2>
            <p>Dans votre cerveau se trouve un petit neurotransmetteur appelé la <strong>dopamine</strong>. C'est l'hormone de la récompense et de l'anticipation du plaisir. C'est elle qui vous fait saliver quand vous sentez l'odeur du poisson braisé ou des beignets soufflés tout chauds.</p>
            <p>Les réseaux sociaux ont transformé ce mécanisme naturel en piège à souris : chaque scroll de l'écran avec votre pouce est une surprise aléatoire. Une fois c'est nul, une fois c'est hilarant ! Votre cerveau devient accro à cette surprise facile. Mais attention : c'est de la nourriture mentale de pacotille. Ça amuse 5 minutes, mais ça vous laisse vidé d'énergie, irritable et incapable de vous concentrer sur un livre sérieux.</p>

            <h2 id="forteresse-silence-cameroun">4. Bâtir sa forteresse de calme face au vacarme du quartier</h2>
            <p>En Afrique et au Cameroun en particulier, le calme parfait n'existe presque nulle part : entre les églises réveillées, les débits de boisson, les générateurs qui vrombissent et les enfants qui jouent dehors, le silence complet est un luxe rare.</p>
            <p>Puisque vous ne pouvez pas faire taire la ville entière, créez votre <strong>bulle intérieure</strong> :</p>
            <ul>
                <li><strong>Le téléphone dans le placard de maman :</strong> Quand vous vous mettez au travail, posez votre téléphone dans une autre pièce ou confiez-le à un proche pendant 1 heure. Si vous devez traverser tout le couloir pour le regarder, la flemme vous sauvera !</li>
                <li><strong>La puissance des bruits blancs :</strong> Si le quartier est trop bruyant, mettez des écouteurs avec des bruits de pluie ou des musiques instrumentales sans paroles (comme le piano ou le balafon doux). Cela crée un rideau sonore qui masque le vacarme extérieur.</li>
                <li><strong>Le rituel du matin tôt :</strong> Les grands génies africains ont tous un secret : ils se lèvent à 5h du matin, quand le quartier dort encore et que la fraîcheur règne. En 1 heure de calme à l'aube, vous apprenez plus qu'en 4 heures d'agitation l'après-midi.</li>
            </ul>

            <h2 id="tomate-pomodoro-237">5. La méthode de la tomate de 25 minutes adaptée au Mboa</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🍅 Le sprint 25 minutes de feu</h3>
                <ol>
                    <li>Coupez les données mobiles de votre téléphone ou activez le mode avion.</li>
                    <li>Réglez un chrono sur <strong>25 minutes</strong> chrono.</li>
                    <li>Pendant ces 25 minutes, vous êtes en mission commando : rien d'autre n'existe sur Terre que votre feuille ou votre livre.</li>
                    <li>Le chrono sonne ? Posez le stylo et prenez <strong>5 minutes de vraie pause</strong> (buvez de l'eau, marchez dans la véranda, respirez).</li>
                    <li>Faites 3 sessions comme celle-ci. En 1h30, vous aurez accompli le travail d'une journée entière !</li>
                </ol>
            </div>
  `
});

// ============================================================================
// ARTICLE 5 : L'échec comme matière première de l'innovation
// ============================================================================
updateArticle('echec-matiere-premiere-innovation.html', {
  lead: `À l'école, on nous a inculqué une peur viscérale du stylo rouge, des zéros et des punitions. Rater un contrôle ou redoubler une classe, c'était la honte au quartier, le regard déçu de la famille et les moqueries des camarades. Et pourtant... regardez l'histoire extraordinaire de Francis Ngannou, parti des mines de sable de Batié sans un sou en poche, dormant dans la rue et essuyant des dizaines de refus avant de devenir le roi incontesté des poids lourds de l'UFC ! Ou celle du patriarche Victor Fotso, parti à pied comme petit vendeur ambulant entre Bandjoun et Foumban. Dans la vie réelle, l'échec n'est pas le contraire de la réussite : c'est le carburant secret des champions ! Préparez-vous à transformer vos chutes en tremplins de géant.`,
  toc: [
    { id: "peur-du-stylo-rouge-mboa", title: "1. La honte scolaire de l'erreur à déconstruire" },
    { id: "francis-ngannou-resilience", title: "2. La leçon de Francis Ngannou : du sable de Batié au sommet du monde" },
    { id: "victor-fotso-batisseur", title: "3. Victor Fotso et les bâtisseurs : la persévérance africaine" },
    { id: "erreur-comme-donnee", title: "4. L'erreur n'est pas une faute, c'est une donnée scientifique" },
    { id: "protocole-champion-237", title: "5. Votre protocole de champion pour rebondir après une tôle" }
  ],
  bodyHtml: `
            <h2 id="peur-du-stylo-rouge-mboa">1. La honte scolaire de l'erreur à déconstruire</h2>
            <p>Quand on rend une copie de maths ou de français couverte de zigzags en rouge avec la note de 04/20 tout en haut, qu'est-ce qu'on ressent au fond de son ventre ? On a la gorge serrée, la tête baissée, et on a l'impression d'être la personne la plus nulle de toute la terre.</p>
            <p>C'est une confusion dramatique : notre cerveau mélange « avoir raté un exercice » et « être quelqu'un de raté ». Mais ce sont deux choses qui n'ont strictement rien à voir ! Une mauvaise note ne mesure jamais votre valeur humaine ni votre intelligence globale : elle dit juste : <em>« Cette stratégie-là n'a pas fonctionné le jour J, il faut ajuster l'entraînement. »</em></p>

            <h2 id="francis-ngannou-resilience">2. La leçon de Francis Ngannou : du sable de Batié au sommet du monde</h2>
            <p>Prenez la trajectoire de notre champion du monde <strong>Francis Ngannou</strong>. Enfant à Batié à l'ouest du Cameroun, il pelletait du sable lourd sous le soleil dès l'âge de 10 ans pour pouvoir s'acheter des cahiers d'école. Quand il a décidé de faire de la boxe, tout le monde autour de lui disait : <em>« Tu es fou, tu es trop vieux, tu n'as pas d'argent, tu rêves en couleur ! »</em></p>
            <p>Il a traversé le désert, a été emprisonné en Espagne, a dormi sur des cartons dans un parking parisien sans un sou en poche, et a perdu des combats cruciaux dans sa carrière. Est-ce qu'il a abandonné en pleurant sur son sort ?</p>
            <p>Jamais ! Après chaque coup dur, il retournait à la salle d'entraînement pour analyser ses erreurs, perfectionner sa lutte, affûter sa droite et écouter ses coachs. C'est cette capacité à <strong>manger l'échec au petit-déjeuner sans jamais perdre son objectif des yeux</strong> qui a fait de lui l'homme le plus redouté et respecté de la planète sportive !</p>

            <h2 id="victor-fotso-batisseur">3. Victor Fotso et les bâtisseurs : la persévérance africaine</h2>
            <p>Connaissez-vous l'histoire du regretté patriarche <strong>Victor Fotso</strong> ? Parti de son village sans diplôme universitaire, il a débuté comme simple apprenti mécanicien et vendeur ambulant à pied, portant des marchandises sur sa tête sur des kilomètres de pistes poussiéreuses entre Bandjoun et Foumban.</p>
            <p>Combien de fois ses affaires ont-elles périclité ? Combien de fois a-t-il vu ses économies fondre face à des crises imprévues ? Des dizaines de fois ! Mais chaque revers était pour lui une école pratique du commerce. Il en est ressorti en bâtissant l'un des premiers groupes industriels privés d'Afrique centrale (piles, bière, emballages, allumettes). Les vrais capitaines d'industrie ne sont pas ceux qui n'ont jamais coulé : ce sont ceux qui ont su reconstruire leur bateau avec les débris du précédent.</p>

            <h2 id="erreur-comme-donnee">4. L'erreur n'est pas une faute, c'est une donnée scientifique</h2>
            <p>Quand Thomas Edison cherchait la formule de l'ampoule électrique et qu'il avait raté 1 000 essais, un journaliste lui a demandé : <em>« Pourquoi vous persistez après 1 000 échecs ? »</em> Edison a répondu : <em>« Je n'ai pas échoué 1 000 fois. J'ai découvert 1 000 manières qui ne marchent pas ! »</em></p>
            <p>Un proverbe de nos terres le dit magnifiquement : <strong>« C'est en tombant qu'on apprend à courir, pas en restant assis sur une natte. »</strong> Si vous refusez de vous tromper, vous refusez automatiquement d'apprendre. Celui qui a peur de rater ne fera jamais rien de grand dans sa vie.</p>

            <h2 id="protocole-champion-237">5. Votre protocole de champion pour rebondir après une tôle</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🥊 La fiche « Débriefing de guerrier »</h3>
                <p>La prochaine fois que vous ramassez une mauvaise note à l'école ou que votre projet ne marche pas comme prévu, interdiction formelle de bouder dans votre coin ! Asseyez-vous avec une feuille et répondez comme un entraîneur de haut niveau :</p>
                <ol>
                    <li><strong>Le constat froid :</strong> Qu'est-ce qui a flanché exactement ? (<em>« J'ai manqué de temps sur la deuxième partie du sujet »</em>).</li>
                    <li><strong>La cause réelle :</strong> Pourquoi ? (<em>« J'ai passé 1h entière sur le premier exercice à 3 points au lieu de survoler l'ensemble »</em>).</li>
                    <li><strong>Le réglage tactique :</strong> Quelle parade je mets en place pour le prochain match ? (<em>« Poser ma montre sur la table et changer d'exercice toutes les 20 minutes quoi qu'il arrive »</em>).</li>
                </ol>
                <p>Voilà comment les champions camerounais et africains se construisent : avec la tête haute, le regard lucide et le poing serré !</p>
            </div>
  `
});

console.log('Batch 1 (Africa/Cameroon Edition) rewritten successfully!');
