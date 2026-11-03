const { updateArticle } = require('./rewrite_helper');

// ============================================================================
// ARTICLE 6 : L'ennui, le silence et la marche : les terreaux des idées
// ============================================================================
updateArticle('ennui-silence-marche-idees.html', {
  lead: `Que faites-vous dès que vous avez 30 secondes d'attente à un carrefour en attendant un taxi, devant une boutique ou à la maison ? Vous sortez votre téléphone pour scroller frénétiquement sur des vidéos et des statuts WhatsApp ! On a tellement peur du vide aujourd'hui qu'on préfère regarder n'importe quel buzz plutôt que de rester seul avec ses propres pensées. Et pourtant... rappelez-vous les longues après-midis chaudes de saison sèche au village ou sous le manguier de la cour, où l'on s'asseyait en silence à regarder passer les oiseaux et où naissaient les plus beaux contes et jeux d'enfance. Les grandes idées de l'Afrique ne sont jamais nées dans la précipitation : elles germent dans le calme, la marche et l'écoute de son esprit.`,
  toc: [
    { id: "peur-du-silence-mboa", title: "1. Pourquoi nous avons peur d'être seuls avec nos pensées" },
    { id: "sagesse-sous-manguier", title: "2. Le mode « arrière-plan » : quand le cerveau cuisine en douce sous le manguier" },
    { id: "marche-collines-cameroun", title: "3. La marche sur les collines : le secret des marcheurs d'idées" },
    { id: "douche-eau-fraiche", title: "4. Pourquoi nos meilleures idées jaillissent sous la douche du soir" },
    { id: "defi-pause-calme", title: "5. Votre pause sacrée « 10 minutes sous l'arbre »" }
  ],
  bodyHtml: `
            <h2 id="peur-du-silence-mboa">1. Pourquoi nous avons peur d'être seuls avec nos pensées</h2>
            <p>Dans nos villes trépidantes comme Douala, Yaoundé, Abidjan ou Kinshasa, le bruit est permanent : les avertisseurs sonores des taxis, la musique des terrasses, les appels des commerçants et les notifications permanentes de nos smartphones. Dès qu'un moment de silence survient, on se sent mal à l'aise, et notre main plonge instinctivement dans notre poche pour attraper notre écran.</p>
            <p>Mais réfléchissez une seconde : si vous remplissez une calebasse à ras bord jusqu'à ce que l'eau déborde par terre, comment voulez-vous y verser le moindre jus de fruit frais ? Votre cerveau, c'est exactement la même calebasse. Si vous le gavez d'informations H24 sans lui laisser une seule minute de respiration, il n'a plus le moindre espace pour inventer une idée originale qui lui appartienne.</p>

            <h2 id="sagesse-sous-manguier">2. Le mode « arrière-plan » : quand le cerveau cuisine en douce sous le manguier</h2>
            <p>En neurosciences, les chercheurs ont découvert un phénomène fascinant qu'ils appellent le <em>« réseau du mode par défaut »</em>. Pour faire simple : quand vous arrêtez de fixer un écran ou de résoudre un devoir et que vous laissez votre regard flotter dans le vide, votre cerveau ne s'éteint pas du tout !</p>
            <p>Au contraire : c'est précisément là qu'il allume son mode <strong>« marmite en mijotage »</strong>. Il commence à connecter les souvenirs d'hier avec une conversation entendue il y a six mois, à trier vos émotions et à préparer des solutions aux soucis qui vous tracassaient. Nos anciens le savaient bien : s'asseoir sous l'arbre à palabres en observant l'horizon n'a jamais été une perte de temps, c'était le moment où germait la sagesse.</p>

            <h2 id="marche-collines-cameroun">3. La marche sur les collines : le secret des marcheurs d'idées</h2>
            <p>Avez-vous déjà gravi les collines du Mont Fébé à Yaoundé, les pentes verdoyantes de l'Ouest ou longé les plages de sable noir de Limbé et Kribi ? Que ressent-on après 20 minutes de marche rythmée ?</p>
            <p>Quand vous marchez à un pas régulier, votre cœur irrigue le cerveau avec du sang frais et riche en oxygène. Vos yeux balaient le paysage de gauche à droite, ce qui apaise instantanément l'amygdale (la zone du stress et de la panique dans votre crâne). C'est pour cela que les grands écrivains, savants et bâtisseurs africains aimaient tous marcher seuls avant de prendre de grandes décisions. Une marche de 15 minutes au quartier débloque souvent ce que 3 heures de cogitation crispée n'arrivaient pas à résoudre.</p>

            <h2 id="douche-eau-fraiche">4. Pourquoi nos meilleures idées jaillissent sous la douche du soir</h2>
            <p>Vous avez déjà remarqué ? Vous passez toute l'après-midi à sécher sur un problème de maths ou une dissertation de philo sans trouver la moindre phrase convenable. Vous abandonnez dépité, vous allez prendre votre douche fraîche au seau ou au pommeau, et là, au moment précis où l'eau ruisselle sur votre visage : <em>PAF !</em> La solution limpide et évidente vous apparaît comme par enchantement !</p>
            <p>Pourquoi ? Parce que votre corps s'est détendu, la pression est retombée, et votre cerveau a enfin pu ouvrir les vannes de son réservoir créatif. La détente n'est pas l'ennemie du travail : c'est sa complice secrète.</p>

            <h2 id="defi-pause-calme">5. Votre pause sacrée « 10 minutes sous l'arbre »</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🌿 L'expérience de la véranda</h3>
                <p>Aujourd'hui, tentez cette expérience toute simple : installez-vous sur un banc, sur la véranda ou sous un arbre pendant <strong>10 minutes chrono</strong>. Pas de téléphone, pas d'écouteurs, pas de livre. Observez simplement le vent dans les feuillages, la danse des lézards sur le mur et le ciel. Laissez votre esprit vagabonder librement sans le juger. Vous verrez à quel point vous vous relèverez avec les idées plus claires et le cœur apaisé !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 7 : L'esprit critique au service de l'imagination
// ============================================================================
updateArticle('esprit-critique-imagination.html', {
  lead: `Sur nos groupes WhatsApp familiaux et sur TikTok, tout le monde relaie tout et n'importe quoi à la vitesse de l'éclair : « Buvez cette décoction d'écorces mélangée avec du citron pour guérir 40 maladies en 2 heures ! », « Une bourse d'études gratuite au Canada en cliquant sur ce lien douteux ! », ou des théories de complot rocambolesques. On a vite fait de se faire mener par le bout du nez ! Mais qu'est-ce que c'est vraiment que « l'esprit critique » ? Ce n'est pas être le grincheux du quartier qui dit du mal de tout le monde. C'est marcher dans les pas de géants comme Cheikh Anta Diop : utiliser la science, la preuve et le discernement pour refuser qu'on pense à votre place. Venez, on affine votre détecteur de vérités !`,
  toc: [
    { id: "pas-un-critiqueur", title: "1. Être critique ne veut pas dire être un « briseur de rêves »" },
    { id: "cheikh-anta-diop-rigueur", title: "2. Cheikh Anta Diop : la science rigoureuse au service de la vérité" },
    { id: "filtre-anti-fake-news", title: "3. Le filtre anti-bobards : les 3 questions du sage africain" },
    { id: "piege-du-miroir-mboa", title: "4. Le biais de confirmation : croire ce qui nous flatte l'oreille" },
    { id: "exercice-discernement", title: "5. Votre entraînement pratique de détective du Mboa" }
  ],
  bodyHtml: `
            <h2 id="pas-un-critiqueur">1. Être critique ne veut pas dire être un « briseur de rêves »</h2>
            <p>Dans nos conversations quotidiennes, on confond souvent deux attitudes très différentes : <em>avoir l'esprit critique</em> (être lucide, rigoureux et vérificateur) et <em>être un critiqueur de quartier</em> (la personne négative qui décourage tout le monde et se moque des initiatives de ses frères).</p>
            <p>L'esprit critique authentique n'est pas de la méchanceté : c'est un bouclier d'autonomie et de liberté intellectuelle ! Quelqu'un qui ne possède aucun esprit critique avale tout : les rumeurs sans fondement, les arnaques financières par transfert d'argent, ou les discours flatteurs des manipulateurs. Avoir l'esprit critique, c'est simplement honorer son intelligence en demandant poliment : <em>« D'où vient cette affirmation et où sont les faits ? »</em></p>

            <h2 id="cheikh-anta-diop-rigueur">2. Cheikh Anta Diop : la science rigoureuse au service de la vérité</h2>
            <p>Pour comprendre la noblesse de l'esprit critique, il faut connaître l'immense professeur <strong>Cheikh Anta Diop</strong>, savant sénégalais, historien, anthropologue et physicien nucléaire.</p>
            <p>Au milieu du XXe siècle, beaucoup d'intellectuels occidentaux affirmaient avec arrogance que l'Afrique noire n'avait pas d'histoire propre et n'avait rien apporté à la civilisation universelle. Qu'a fait Cheikh Anta Diop ? A-t-il simplement répondu par des insultes ou des slogans creux ?</p>
            <p>Non ! Il a enfilé sa blouse de physicien dans les laboratoires de l'Institut de radiocarbone de Dakar, a utilisé la datation au carbone 14 sur la peau des momies égyptiennes, a comparé la grammaire des langues ouolof et égyptienne antique avec une rigueur mathématique irréprochable. Lors du célèbre colloque de l'UNESCO au Caire en 1974, ses adversaires ont dû s'incliner devant la force de ses preuves scientifiques. Voilà ce que peut accomplir l'esprit critique : démolir les préjugés et restaurer la dignité d'un continent entier !</p>

            <h2 id="filtre-anti-fake-news">3. Le filtre anti-bobards : les 3 questions du sage africain</h2>
            <p>Chaque fois qu'un message sensationnel atterrit dans votre téléphone ou qu'une rumeur enflamme les discussions, passez l'information à travers ce tamis en 3 étapes :</p>
            <ul>
                <li><strong>1. Quelle est la source d'origine ?</strong> Est-ce un média officiel certifié, une publication scientifique, ou un simple message anonyme transféré 50 fois qui commence par <em>« Partagez avant que ce ne soit supprimé »</em> ?</li>
                <li><strong>2. Quel est l'intérêt de la personne qui partage ?</strong> Cherche-t-elle à informer honnêtement, ou cherche-t-elle à faire le buzz, à récolter des clics ou à propager la peur ?</li>
                <li><strong>3. Les faits sont-ils corroborés ?</strong> Deux ou trois autres sources indépendantes et sérieuses confirment-elles l'information ? Si la réponse est non, gardez votre calme et ne relayez rien !</li>
            </ul>

            <h2 id="piege-du-miroir-mboa">4. Le biais de confirmation : croire ce qui nous flatte l'oreille</h2>
            <p>Il existe un piège sournois que notre esprit adore s'auto-tendre : le <strong>biais de confirmation</strong>. Quand nous avons très envie qu'une chose soit vraie, nous acceptons le moindre faux indice qui va dans notre sens, et nous fermons les yeux sur toutes les preuves contraires.</p>
            <p>Un proverbe de chez nous le résume avec malice : <em>« L'œil ne voit pas ce qu'il regarde, il voit ce qu'il cherche. »</em> Être un esprit libre et créatif, c'est avoir le courage intellectuel de regarder la réalité en face, même lorsqu'elle bouscule nos certitudes rassurantes.</p>

            <h2 id="exercice-discernement">5. Votre entraînement pratique de détective du Mboa</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🔎 Le jeu de l'enquêteur impartial</h3>
                <p>Prenez un sujet qui fait débat au quartier ou à l'école (par exemple : <em>« Faut-il interdire totalement les smartphones aux élèves en classe ? »</em>). Pendant 5 minutes, forcez-vous à trouver <strong>trois arguments solides en faveur de la position que vous n'aimez pas au départ</strong> !</p>
                <p>Cet exercice développe une souplesse d'esprit extraordinaire : il vous apprend à comprendre les autres et vous rend mille fois plus convaincant dans la vie réelle.</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 8 : Les habitudes quotidiennes des esprits créatifs
// ============================================================================
updateArticle('habitudes-esprits-creatifs.html', {
  lead: `On s'imagine souvent les grands créateurs et les innovateurs comme des magiciens un peu chanceux, touchés par la grâce divine un beau matin sans effort. On regarde le génie musical de Manu Dibango, la plume poétique de Francis Bebey ou la vista tactique de Samuel Eto'o, et on se dit avec résignation : « Eux, ils sont nés comme ça, moi je n'ai pas cette chance. » C'est une erreur monumentale ! Savez-vous que Manu Dibango s'est levé à l'aube pour souffler dans son saxophone chaque jour de sa vie pendant plus de 60 ans ? La créativité en Afrique comme partout n'est pas un coup de chance : c'est comme la tontine. On cotise chaque jour une petite pièce de discipline, et au bout du compte, on récolte le gros lot !`,
  toc: [
    { id: "mythe-du-coup-de-chance", title: "1. Le mythe du coup de chance démonté" },
    { id: "lecon-manu-dibango", title: "2. La leçon de Manu Dibango : 60 ans de gammes matinales" },
    { id: "tontine-creativite", title: "3. La métaphore de la tontine : cotiser chaque jour ses 15 minutes" },
    { id: "sommeil-reparateur-afrique", title: "4. Le sommeil réparateur : la nuit où le cerveau range la case" },
    { id: "rituel-3c-cameroun", title: "5. Votre kit de 3 rituels quotidiens faciles à tenir" }
  ],
  bodyHtml: `
            <h2 id="mythe-du-coup-de-chance">1. Le mythe du coup de chance démonté</h2>
            <p>Quand on voit un artiste triompher sur scène ou un jeune entrepreneur signer un gros contrat, les gens du quartier disent souvent : <em>« Il a la baraka ! C'est le destin ! »</em></p>
            <p>Mais personne n'était là quand ce jeune travaillait seul dans sa chambre à la bougie pendant des années, quand il se prenait des portes fermées au nez, quand il recommençait ses croquis ou son code dix fois après chaque coupure de courant. L'inspiration ne visite jamais ceux qui dorment sur leurs deux oreilles en attendant un miracle : <strong>elle frappe à la porte de ceux qui ont déjà le tablier noué et les mains dans la farine !</strong></p>

            <h2 id="lecon-manu-dibango">2. La leçon de Manu Dibango : 60 ans de gammes matinales</h2>
            <p>Regardez l'incroyable carrière de <strong>Manu Dibango</strong>, notre « Papa Manu » national. De ses débuts difficiles au Cameroun et en France jusqu'à conquérir les plus grandes scènes du monde avec <em>Soul Makossa</em>, quelle était sa règle absolue ?</p>
            <p>Même à 80 ans passés, qu'il ait fait un concert magistral la veille ou qu'il soit fatigué, le matin venu, il prenait son saxophone et faisait ses gammes de base pendant une heure ! Il disait souvent : <em>« Si je ne m'entraîne pas un jour, je le sais. Si je ne m'entraîne pas deux jours, mon groupe le sait. Si je ne m'entraîne pas trois jours, le public le sait ! »</em> La grandeur se loge dans la fidélité aux petits gestes simples répétés chaque matin.</p>

            <h2 id="tontine-creativite">3. La métaphore de la tontine : cotiser chaque jour ses 15 minutes</h2>
            <p>Dans nos familles et nos communautés en Afrique, le système de la <strong>tontine</strong> est une institution sacrée : chaque membre apporte sa modeste cotisation chaque semaine, sans jamais sauter un tour. Au début, la petite somme semble dérisoire. Mais quand arrive votre tour de ramasser la mise, vous vous retrouvez avec un capital colossal qui permet d'acheter un terrain, de bâtir une maison ou de financer des études !</p>
            <p>Votre créativité fonctionne exactement comme une tontine intellectuelle :</p>
            <ul>
                <li><strong>15 minutes par jour</strong> passées à lire un bon livre représentent près de 15 livres de haut niveau dévorés chaque année !</li>
                <li><strong>10 lignes d'écriture par jour</strong> forment un livre complet de 150 pages au bout de douze mois.</li>
                <li><strong>1 dessin ou 1 ligne de code par jour</strong> vous transforme en expert respecté en moins de deux ans.</li>
            </ul>
            <p>La régularité tranquille écrase le talent paresseux à tous les coups.</p>

            <h2 id="sommeil-reparateur-afrique">4. Le sommeil réparateur : la nuit où le cerveau range la case</h2>
            <p>Certains pensent que pour être un travailleur acharné, il faut passer des nuits blanches à réviser avec du café fort. C'est une très mauvaise idée !</p>
            <p>Pendant que vous dormez profondément, votre cerveau n'est pas mort : il est en train de faire le grand ménage de la maison. Il balaie les toxines, consolide les apprentissages de la journée et range chaque notion dans le bon tiroir de la mémoire à long terme. Si vous vous privez de sommeil en scrollant sur votre téléphone jusqu'à 2h du matin, vous vous réveillez avec un cerveau embrumé qui oublie tout et s'énerve pour un rien.</p>

            <h2 id="rituel-3c-cameroun">5. Votre kit de 3 rituels quotidiens faciles à tenir</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🌟 Le rituel des 3 « P » du créateur</h3>
                <ol>
                    <li><strong>Pêcher une idée :</strong> Notez chaque jour une belle phrase entendue au marché, une observation marrante ou une idée de projet dans votre petit carnet.</li>
                    <li><strong>Pratiquer 15 minutes :</strong> Accordez 15 minutes sans distraction à votre passion (dessin, écriture, code, calcul, musique).</li>
                    <li><strong>Partager la lumière :</strong> Expliquez ce que vous avez appris aujourd'hui à un camarade ou à votre famille au dîner. En partageant votre savoir, vous le gravez pour toujours dans votre cœur !</li>
                </ol>
            </div>
  `
});

// ============================================================================
// ARTICLE 9 : Passer d'une idée floue à une première version imparfaite
// ============================================================================
updateArticle('idee-premiere-version-imparfaite.html', {
  lead: `Vous avez déjà ressenti cette angoisse devant une page de cahier immaculée ou une feuille de dessin blanche ? On a tellement peur de poser un trait maladroit, de faire une rature ou de faire rigoler les autres qu'on reste le stylo en l'air, paralysé comme un cabri devant un camion phares allumés. On attend que l'idée soit « parfaite » dans notre tête. Mais regardez nos maîtres sculpteurs sur bois à Foumban ou nos potières traditionnelles : commencent-ils directement avec une statue royale étincelante ? Non ! Ils partent d'un tronc d'arbre brut et rugueux ou d'une boule de terre rouge informe. Le premier jet d'une idée n'est pas fait pour être parfait : il est fait pour exister !`,
  toc: [
    { id: "peur-de-la-rature", title: "1. La peur paralysante de la première rature" },
    { id: "sculpteurs-de-foumban", title: "2. La leçon des sculpteurs de Foumban : la beauté sort du bois brut" },
    { id: "cinema-africain-debrouille", title: "3. La leçon du cinéma africain : tourner avec les moyens du bord" },
    { id: "methode-du-premier-jet", title: "4. La méthode du premier brouillon sans pitié" },
    { id: "polissage-comme-le-bois", title: "5. Le secret : la magie est dans le ponçage patient" }
  ],
  bodyHtml: `
            <h2 id="peur-de-la-rature">1. La peur paralysante de la première rature</h2>
            <p>À l'école, on nous a tellement punis pour les ratures au blanco qu'on a fini par développer une phobie du brouillon imparfait. Dès que notre premier paragraphe ne ressemble pas aux chefs-d'œuvre de Victor Hugo ou de Chinua Achebe, on déchire la page de rage et on jette tout à la poubelle.</p>
            <p>Mais retenez bien cette vérité absolue : <strong>aucun écrivain, aucun réalisateur, aucun ingénieur au monde n'a jamais produit son chef-d'œuvre du premier coup !</strong> Tous ont commencé par un premier jet brouillon, plein de fautes et de maladresses. La seule différence entre ceux qui créent et ceux qui n'osent rien, c'est que les créateurs acceptent d'être imparfaits au départ pour avoir la chance de s'améliorer en chemin.</p>

            <h2 id="sculpteurs-de-foumban">2. La leçon des sculpteurs de Foumban : la beauté sort du bois brut</h2>
            <p>Si vous avez la chance de visiter la célèbre rue des artisans à Foumban au Cameroun, observez comment travaillent les sculpteurs royaux. Quand ils reçoivent un gros tronc de bois d'ébène ou d'iroko, à quoi ressemble-t-il ? À un gros rondin noir sale, fendu et sans la moindre forme !</p>
            <p>L'artisan ne se dit pas : <em>« Oh là là, ce bois n'est pas encore un trône royal magnifique, donc je refuse de le toucher ! »</em> Il prend sa hachette et donne de grands coups francs dans le bois pour dégrossir la silhouette. Des éclats volent partout, c'est bruyant, ce n'est pas encore raffiné. Mais sans cette première étape brute, il n'y aura jamais de statue polie. Votre premier brouillon, c'est ce rondin brut : posez-le sur la table sans avoir honte de son aspect sauvage !</p>

            <h2 id="cinema-africain-debrouille">3. La leçon du cinéma africain : tourner avec les moyens du bord</h2>
            <p>Regardez l'histoire des pionniers de notre cinéma, comme le Camerounais <strong>Jean-Pierre Dikongué Pipa</strong> réalisant son chef-d'œuvre <em>Muna Moto</em> en 1975, ou le Sénégalais <strong>Ousmane Sembène</strong> avec <em>La Noire de...</em> : avaient-ils les caméras à 100 000 dollars et les effets spéciaux d'Hollywood ?</p>
            <p>Absolument pas ! Ils tournaient avec des pellicules récupérées, des acteurs du quartier et des éclairages bricolés avec des réflecteurs en carton. Mais la puissance de leurs histoires, l'émotion sincère et la vérité de leur regard ont fait de ces films des monuments primés au FESPACO et dans les plus grands festivals internationaux. N'attendez pas d'avoir les moyens de Warner Bros pour raconter votre histoire : racontez-la aujourd'hui avec votre énergie !</p>

            <h2 id="methode-du-premier-jet">4. La méthode du premier brouillon sans pitié</h2>
            <p>Pour vaincre le blocage devant votre feuille ou votre ordinateur :</p>
            <ul>
                <li>Lancez un chrono de <strong>15 minutes</strong>.</li>
                <li>Écrivez ou dessinez le plus vite possible sans jamais vous arrêter pour corriger.</li>
                <li>Si vous hésitez sur un mot ou un calcul, écrivez <em>[TRUC À COMPLÉTER]</em> et continuez à foncer vers l'avant !</li>
            </ul>
            <p>C'est comme traverser une flaque d'eau en moto : si vous ralentissez au milieu en hésitant, vous mettez le pied dans la boue et vous calez. Mettez les gaz, traversez, et vous ferez le nettoyage de l'autre côté !</p>

            <h2 id="polissage-comme-le-bois">5. Le secret : la magie est dans le ponçage patient</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">✨ Le ponçage en 3 passages de l'artisan</h3>
                <p>Une fois votre premier jet couché sur le papier, laissez-le dormir une nuit entière. Le lendemain, reprenez-le avec l'œil calme de l'ébéniste :</p>
                <ol>
                    <li><strong>Le premier passage (La gouge) :</strong> Enlevez les phrases lourdes, les bavardages inutiles et les répétitions.</li>
                    <li><strong>Le deuxième passage (La râpe fine) :</strong> Remplacez les mots vagues par des images vivantes et colorées qui parlent au cœur.</li>
                    <li><strong>Le troisième passage (Le papier de verre fin) :</strong> Lisez votre texte à voix haute en rythme. Dès que votre langue trébuche, raccourcissez la phrase. Votre travail est maintenant prêt à briller devant tout le monde !</li>
                </ol>
            </div>
  `
});

// ============================================================================
// ARTICLE 10 : Construire son identité créative et assumer son style
// ============================================================================
updateArticle('identite-creative-assumer-style.html', {
  lead: `Au collège, au quartier ou sur les réseaux sociaux, la tentation la plus forte est souvent de vouloir ressembler à tout le monde : copier les manières des séries américaines, singer les accents à la mode et s'habiller comme les influenceurs du moment. On a peur qu'en montrant qui on est vraiment, on soit jugé « bizarre » ou « villageois ». Mais observez bien comment Manu Dibango a conquis la terre entière avec « Soul Makossa » : en chantant en langue Douala avec la cadence de chez nous ! Ce qui fait votre valeur inestimable, ce ne sont pas vos imitations : c'est votre authenticité camerounaise et africaine assumée avec éclat.`,
  toc: [
    { id: "piege-du-complexe", title: "1. Le piège du complexe d'infériorité culturel" },
    { id: "soul-makossa-planetaire", title: "2. L'épopée de Soul Makossa : quand le Cameroun a fait danser le monde" },
    { id: "noblesse-du-ndop", title: "3. La noblesse du Ndop et du Toghu : le style ancré dans nos racines" },
    { id: "vos-singularites", title: "4. Vos singularités locales sont vos futurs super-pouvoirs" },
    { id: "test-fierte-culturelle", title: "5. L'exercice de la signature authentique" }
  ],
  bodyHtml: `
            <h2 id="piege-du-complexe">1. Le piège du complexe d'infériorité culturel</h2>
            <p>Pendant trop longtemps, certains ont intériorisé l'idée fausse que tout ce qui vient d'Europe ou des États-Unis est automatiquement moderne et supérieur, tandis que ce qui vient de nos villages, de nos langues maternelles et de nos traditions serait archaïque ou honteux.</p>
            <p>Quel contresens historique ! L'Afrique est le berceau de l'humanité, des sciences, des rythmes et des récits les plus profonds de la terre. Le monde entier s'inspire aujourd'hui de notre musique (Afrobeats, Amapiano, Makossa), de nos motifs textiles et de notre énergie vitale. Tenter de vous déguiser en quelqu'un d'autre, c'est échanger une pépite d'or massif contre un morceau de plastique coloré !</p>

            <h2 id="soul-makossa-planetaire">2. L'épopée de Soul Makossa : quand le Cameroun a fait danser le monde</h2>
            <p>En 1972, le Cameroun accueille la Coupe d'Afrique des Nations de football. Pour l'occasion, <strong>Manu Dibango</strong> enregistre un hymne officiel sur la face A d'un disque vinyle, et glisse sur la face B un morceau composé rapidement avec ses amis : <em>Soul Makossa</em>.</p>
            <p>Ce morceau est une fusion volcanique de rythmes Makossa traditionnels du littoral camerounais et de cuivres jazz éclatants, avec cette phrase scandée en langue Douala qui résonne comme un cri du cœur : <em>« Mama-ko, mama-sa, maka-makossa ! »</em></p>
            <p>Le disque voyage par hasard à New York, atterrit dans les soirées underground de Brooklyn... et devient un raz-de-marée planétaire ! Dix ans plus tard, Michael Jackson lui-même s'en inspire directement pour son tube mondial <em>Wanna Be Startin' Somethin'</em>, suivi plus tard par Rihanna. Si Manu avait essayé de faire du rock anglais comme les Beatles, personne à New York n'aurait prêté attention. C'est parce que sa musique sentait la terre, la pluie et la fête de Douala qu'elle est devenue immortelle !</p>

            <h2 id="noblesse-du-ndop">3. La noblesse du Ndop et du Toghu : le style ancré dans nos racines</h2>
            <p>Regardez la beauté saisissante du tissu <strong>Ndop</strong> des chefferies Bamiléké et Bamoun, ou la majesté du <strong>Toghu</strong> brodé des Grassfields du Nord-Ouest : ces vêtements traditionnels ne sont pas de simples habits de fête, ce sont des livres ouverts remplis de symboles géométriques sacrés, de paix, de bravoure et d'harmonie avec la nature.</p>
            <p>Aujourd'hui, les plus grands designers internationaux de haute couture s'arrachent ces motifs ancestraux pour leurs défilés à Milan ou à Paris. Pourquoi auriez-vous honte de votre héritage quand les plus grands créateurs de la planète s'en inspirent avec admiration ? Assumez votre héritage avec fierté : il est votre socle indestructible.</p>

            <h2 id="vos-singularites">4. Vos singularités locales sont vos futurs super-pouvoirs</h2>
            <p>Votre façon de parler avec verve, les expressions imagées du terroir camerounais (<em>« on est ensemble »</em>, <em>« le travail paie toujours »</em>, <em>« c'est le mboa qui gagne »</em>), vos souvenirs des tournois de football inter-quartiers ou des histoires racontées par vos grands-parents : tout cela constitue votre <strong>banque de données créative exclusive</strong>.</p>
            <p>Personne d'autre que vous ne possède exactement cette alchimie. Quand vous écrivez un texte, dessinez une bande dessinée ou créez un logiciel, injectez-y cette saveur locale unique. C'est ce parfum d'authenticité qui captivera le monde entier.</p>

            <h2 id="test-fierte-culturelle">5. L'exercice de la signature authentique</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">👑 La signature des bâtisseurs</h3>
                <p>Dans chaque devoir, création artistique ou projet personnel que vous menez, appliquez cette règle d'or :</p>
                <p><strong>Intégrez toujours au moins un ingrédient inspiré directement de votre culture africaine et camerounaise</strong> (une métaphore proverbiale, un motif traditionnel, un personnage inspiré d'une figure de notre histoire, ou une solution adaptée aux réalités du terrain).</p>
                <p>Soyez fier de qui vous êtes : c'est votre plus belle carte de visite pour briller sur la scène internationale !</p>
            </div>
  `
});

console.log('Batch 2 (Africa/Cameroon Edition) rewritten successfully!');
