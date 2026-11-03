const { updateArticle } = require('./rewrite_helper');

// ============================================================================
// ARTICLE 11 : Comment s'inspirer des grands créateurs sans les copier
// ============================================================================
updateArticle('inspirer-grands-createurs.html', {
  lead: `On a tous déjà vécu ce moment un peu gênant : on admire tellement un artiste, un écrivain ou un créateur sur le web qu'on essaie de faire exactement comme lui... et on se retrouve avec une imitation sans saveur qui sonne faux. Pire encore : on a l'impression d'être un imposteur ! Pourtant, tous les maîtres ont commencé par être des apprentis. Léonard de Vinci, les Beatles, George Lucas avec Star Wars : aucun d'eux n'est sorti de nulle part tout formé. Le secret ? Savoir démonter le moteur de vos idoles pour comprendre comment ça marche à l'intérieur, au lieu de juste repeindre votre vélo avec leurs autocollants. On vous montre le mode d'emploi.`,
  toc: [
    { id: "plagiat-hommage", title: "1. La différence entre le copieur maladroit et le bon voleur" },
    { id: "radiographie-oeuvre", title: "2. La radiographie secrète : démonter le moteur" },
    { id: "heros-de-vos-heros", title: "3. La règle d'or : allez voir qui inspirait vos idoles" },
    { id: "recette-star-wars", title: "4. L'incroyable recette de cuisine de Star Wars" },
    { id: "laboratoire-influence", title: "5. Votre atelier pratique d'inspiration inversée" }
  ],
  bodyHtml: `
            <h2 id="plagiat-hommage">1. La différence entre le copieur maladroit et le bon voleur</h2>
            <p>Il y a une citation célèbre qu'on attribue souvent à Pablo Picasso : <em>« Les mauvais artistes copient, les grands artistes volent. »</em> Dit comme ça, ça ressemble à un appel au cambriolage, mais rassurez-vous : Picasso ne vous conseille pas d'aller piquer les tableaux des musées !</p>
            <p>Copier bêtement, c'est prendre la surface : recopier le dessin d'un autre au calque, réutiliser mot pour mot sa phrase d'accroche ou prendre sa miniature YouTube en changeant juste la couleur du titre. C'est paresseux, et tout le monde s'en rend compte.</p>
            <p>Voler comme un artiste, c'est tout l'inverse : c'est regarder une œuvre qui vous fait vibrer et vous demander : <em>« Pourquoi cette histoire me fait pleurer ? Comment ce réalisateur a-t-il géré la lumière pour me faire peur ? Pourquoi ce rythme me donne envie de danser ? »</em> Vous ne volez pas le résultat : vous comprenez la <strong>mécanique secrète</strong> pour fabriquer vos propres machines.</p>

            <h2 id="radiographie-oeuvre">2. La radiographie secrète : démonter le moteur</h2>
            <p>Quand un mécanicien veut comprendre comment roule une voiture de course légendaire, il ne se contente pas de la regarder en bavant. Il ouvre le capot, sort ses clés à molette, démonte les pistons, les bougies, et inspecte chaque engrenage.</p>
            <p>Faites exactement la même chose avec vos œuvres préférées :</p>
            <ul>
                <li><strong>Pour un roman ou une BD :</strong> Prenez un carnet et notez la structure. Combien de pages dure l'introduction ? Quand arrive le premier drame ? Comment l'auteur ménage-t-il le suspense à la fin de chaque chapitre ?</li>
                <li><strong>Pour un morceau de musique :</strong> Écoutez au casque en isolant chaque piste : que fait la basse pendant le refrain ? Quand la batterie s'arrête-t-elle pour créer une respiration ?</li>
                <li><strong>Pour un jeu vidéo :</strong> Qu'est-ce qui vous donne envie de rejouer dès que vous perdez une partie ?</li>
            </ul>

            <h2 id="heros-de-vos-heros">3. La règle d'or : allez voir qui inspirait vos idoles</h2>
            <p>Voici une astuce que 99 % des gens ignorent : au lieu d'imiter directement votre créateur favori du moment, faites une petite enquête policière et découvrez <strong>qui étaient les héros de votre héros !</strong></p>
            <p>Si vous adorez un mangaka en particulier, cherchez quelles bandes dessinées anciennes ou quels films d'arts martiaux il regardait quand il était au collège. Si vous aimez un groupe de musique actuel, écoutez les vieux disques de blues ou de rock des années 70 que ses membres écoutaient dans leur garage.</p>
            <p>En remontant à la source originale, vous buvez une eau beaucoup plus pure. Vous découvrez les racines brutes au lieu de ne consommer que des fruits déjà mâchés par d'autres !</p>

            <h2 id="recette-star-wars">4. L'incroyable recette de cuisine de Star Wars</h2>
            <p>Tout le monde connaît <em>Star Wars</em> et pense que George Lucas a inventé tout cet univers magique d'un coup de baguette magique en 1977. C'est faux !</p>
            <p>Lucas était un étudiant passionné de cinéma qui a simplement cuisiné un fabuleux banquet en mélangeant les plats qu'il adorait :</p>
            <ul>
                <li>Il a pris les films de samouraïs japonais d'Akira Kurosawa (les chevaliers Jedi avec leurs sabres et leurs capes).</li>
                <li>Il y a ajouté les vieux westerns américains avec des duels dans des tavernes crasseuses (Han Solo dans la cantina).</li>
                <li>Il a saupoudré le tout avec les batailles aériennes de la Seconde Guerre mondiale (l'attaque de l'Étoile de la Mort).</li>
                <li>Et il a lié le tout avec les légendes mythologiques antiques (la quête du jeune héros qui quitte sa ferme).</li>
            </ul>
            <p>Pris séparément, rien n'était totalement nouveau. Mais leur <strong>fusion</strong> a donné naissance à l'une des plus grandes épopées de la pop culture mondiale !</p>

            <h2 id="laboratoire-influence">5. Votre atelier pratique d'inspiration inversée</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🛠️ L'exercice des 3 ingrédients volés</h3>
                <p>Choisissez 3 créateurs très différents que vous admirez (par exemple : un auteur de fantasy, un dessinateur d'animé et un humoriste de stand-up). Volez un seul ingrédient à chacun :</p>
                <ol>
                    <li>À l'auteur : sa façon de créer des créatures fantastiques.</li>
                    <li>Au dessinateur : ses couleurs pastel lumineuses.</li>
                    <li>À l'humoriste : ses dialogues décalés et sarcastiques.</li>
                </ol>
                <p>Mélangez ces 3 ingrédients dans une petite histoire ou un dessin de 10 minutes. Félicitations : personne ne pourra jamais dire que vous avez copié qui que ce soit, vous venez de créer du 100 % original !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 12 : Observer le quotidien avec un regard neuf
// ============================================================================
updateArticle('observer-quotidien-regard-neuf.html', {
  lead: `Faites ce test tout de suite : quelle est la couleur exacte de la porte d'entrée de votre voisin d'en face ? Y a-t-il une fissure sur le plafond de votre chambre ? Combien d'arbres croisez-vous entre chez vous et votre établissement scolaire ? Si vous séchez, rassurez-vous : c'est le cas de tout le monde ! Nous passons nos journées en mode pilote automatique, le nez baissé sur nos écrans ou perdus dans nos soucis intérieurs. Pourtant, les plus grandes découvertes et les idées les plus poétiques ne se trouvent pas sur Mars ou au pôle Nord : elles se cachent juste sous vos yeux, dans la routine la plus banale. Il suffit de nettoyer ses lunettes mentales !`,
  toc: [
    { id: "pilote-automatique", title: "1. Le piège du pilote automatique : pourquoi on ne voit plus rien" },
    { id: "regard-extraterrestre", title: "2. La technique de l'extraterrestre qui débarque sur Terre" },
    { id: "detourner-objets", title: "3. L'art de détourner les objets ordinaires" },
    { id: "micro-aventures", title: "4. Les micro-aventures au coin de la rue" },
    { id: "carnet-d-etonnement", title: "5. Le carnet d'étonnement : 5 minutes d'émerveillement par jour" }
  ],
  bodyHtml: `
            <h2 id="pilote-automatique">1. Le piège du pilote automatique : pourquoi on ne voit plus rien</h2>
            <p>Notre cerveau a un job principal : économiser de l'énergie pour nous garder en vie. Du coup, dès qu'il connaît un trajet par cœur (le chemin de l'école ou du collège, la disposition du salon, le couloir de la maison), il enclenche le mode <strong>pilote automatique</strong>.</p>
            <p>Vous marchez sans regarder, vous mettez vos chaussettes sans y penser, vous mangez vos céréales sans en savourer le goût. C'est pratique pour ne pas être fatigué, mais c'est dramatique pour la créativité ! Les enfants de 4 ans sont infiniment plus créatifs que les adultes parce qu'ils découvrent tout pour la première fois : une coccinelle sur une feuille est pour eux un monstre fascinant, et un carton d'emballage devient un château fort imprenable.</p>

            <h2 id="regard-extraterrestre">2. La technique de l'extraterrestre qui débarque sur Terre</h2>
            <p>Voici un jeu mental extrêmement amusant et redoutablement efficace pour réveiller vos neurones endormis : faites semblant d'être un <strong>ethnologue extraterrestre</strong> tout juste débarqué de la planète Zorg, qui découvre les humains pour la première fois.</p>
            <p>Regardez les gens dans le bus ou dans la rue : pourquoi portent-ils tous des petits bouts de tissu bleu autour des jambes (des jeans) ? Pourquoi tiennent-ils tous dans la main un petit rectangle de verre lumineux qu'ils caressent avec le pouce en souriant tout seuls ? Pourquoi se disent-ils « bonjour » en se serrant la main ?</p>
            <p>Dès que vous regardez les choses les plus banales avec cette curiosité faussement naïve, le monde redevient bizarre, drôle, intriguant et passionnant !</p>

            <h2 id="detourner-objets">3. L'art de détourner les objets ordinaires</h2>
            <p>Un trombone en métal, c'est fait pour attacher deux feuilles de papier ensemble, n'est-ce pas ? Oui... si vous n'avez aucune imagination ! Mais si vous cherchez bien, un trombone peut aussi devenir :</p>
            <ul>
                <li>Un crochet pour ouvrir une serrure dans un roman d'espionnage.</li>
                <li>Un outil minuscule pour retirer la carte SIM d'un smartphone.</li>
                <li>Une antenne miniature pour un petit robot fait maison.</li>
                <li>Un marque-page rigolo ou une boucle d'oreille punk !</li>
            </ul>
            <p>Ce changement de regard s'appelle en psychologie « dépasser la fixité fonctionnelle ». C'est la capacité à voir ce qu'une chose <em>pourrait devenir</em> plutôt que ce qu'on vous a dit qu'elle était.</p>

            <h2 id="micro-aventures">4. Les micro-aventures au coin de la rue</h2>
            <p>On s'imagine souvent qu'il faut voyager à l'autre bout du monde, à Tokyo, à New York ou au sommet des Andes pour vivre des aventures. Mais la vraie aventure n'est pas de voir de nouveaux paysages, c'est d'avoir de <strong>nouveaux yeux</strong>.</p>
            <p>Demain, en rentrant de vos cours ou de vos activités, essayez ceci :</p>
            <ul>
                <li>Prenez la rue parallèle que vous n'empruntez jamais.</li>
                <li>Levez la tête au niveau du premier étage des immeubles au lieu de regarder vos pieds : vous découvrirez des sculptures, des balcons fleuris et des détails d'architecture incroyables que vous n'aviez jamais remarqués en 5 ans !</li>
                <li>Écoutez les bruits de la ville comme si c'était un concert de musique contemporaine : le grincement des freins de vélo, les éclats de rire au loin, le vent dans les platanes.</li>
            </ul>

            <h2 id="carnet-d-etonnement">5. Le carnet d'étonnement : 5 minutes d'émerveillement par jour</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">📝 La mission « 1 truc bizarre par jour »</h3>
                <p>Prenez l'habitude de noter chaque soir avant de vous coucher une seule chose minuscule qui vous a surpris, fait sourire ou intrigué dans votre journée :</p>
                <ul>
                    <li>Un tag rigolo sur un mur.</li>
                    <li>Un chien avec une coupe de cheveux improbable.</li>
                    <li>Une ombre étrange projetée par le lampadaire sur votre mur.</li>
                </ul>
                <p>En faisant ça, vous reprogrammez votre cerveau : toute la journée, il restera en alerte joyeuse pour traquer les petits miracles du quotidien !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 13 : Penser autrement : exercices pour muscler sa créativité
// ============================================================================
updateArticle('penser-autrement-exercices.html', {
  lead: `« Ah mais moi, je n'ai pas d'imagination... Je ne suis pas né artiste ! » Combien de fois avez-vous entendu ou prononcé cette phrase ? Il est grand temps d'enterrer cette idée reçue une bonne fois pour toutes. Votre créativité n'est pas un don magique tombé du ciel réservé à trois élus avec un béret et un pinceau : c'est un muscle ! Et comme tous les muscles du corps humain, si vous ne le faites jamais travailler, il devient tout mou et tout raide. Mais si vous l'entraînez avec des petits exercices amusants quelques minutes par jour, vous allez être bluffé par ce dont votre cerveau est capable. Enfilez vos baskets mentales, c'est parti pour l'entraînement !`,
  toc: [
    { id: "mythe-du-don", title: "1. Le mythe du « don artistique » à jeter à la poubelle" },
    { id: "exercice-trombone", title: "2. Le test du trombone : faire exploser la pensée divergente" },
    { id: "contraintes-magiques", title: "3. La magie des contraintes : pourquoi trop de liberté tue l'idée" },
    { id: "connexions-folles", title: "4. Le jeu des associations impossibles" },
    { id: "gymnastique-mentale", title: "5. Votre entraînement quotidien en 3 minutes chrono" }
  ],
  bodyHtml: `
            <h2 id="mythe-du-don">1. Le mythe du « don artistique » à jeter à la poubelle</h2>
            <p>Quand on voit quelqu'un dessiner un portrait saisissant en 5 minutes ou résoudre une énigme complexe en rigolant, on dit souvent : <em>« Quel don ! »</em> C'est très flatteur, mais c'est profondément injuste. Ce qu'on ne voit pas, ce sont les 500 carnets gribouillés avant, les milliers d'heures d'essais, les erreurs et la passion méthodique mise dans l'apprentissage.</p>
            <p>N'importe qui peut devenir infiniment plus créatif qu'il ne l'est aujourd'hui. Ce n'est pas une question de gènes ou de destin : c'est une question de <strong>gymnastique mentale</strong>. Si vous apprenez à votre cerveau à sortir des autoroutes habituelles de la pensée, il prendra l'habitude de vous surprendre.</p>

            <h2 id="exercice-trombone">2. Le test du trombone : faire exploser la pensée divergente</h2>
            <p>Dans les années 1960, le psychologue J.P. Guilford a inventé un test tout bête : donnez un trombone en métal à quelqu'un et demandez-lui : <em>« Donnez-moi le maximum d'utilisations possibles pour cet objet en 2 minutes. »</em></p>
            <p>La plupart des adultes trouvent 4 ou 5 idées très sages (attacher des papiers, curer ses ongles, déboucher un tube de colle). Mais les enfants de maternelle en trouvent plus de 50 ! Pourquoi ? Parce qu'ils n'ont aucune barrière : un trombone géant peut être une échelle pour des souris, une canne à pêche pour des fourmis, un instrument de musique, ou une sculpture contemporaine !</p>
            <p>Cette capacité à partir d'un point de départ unique et à explorer des dizaines de directions folles s'appelle la <strong>pensée divergente</strong>. C'est le réacteur nucléaire de l'innovation.</p>

            <h2 id="contraintes-magiques">3. La magie des contraintes : pourquoi trop de liberté tue l'idée</h2>
            <p>Si votre professeur vous dit : <em>« Pour demain, écrivez-moi un texte sur le sujet de votre choix, sans aucune limite de taille ni de genre »</em>, que se passe-t-il ? C'est la paralysie générale ! Vous ne savez pas par quel bout prendre le monde.</p>
            <p>Mais si on vous dit : <em>« Écrivez une dispute hilarante entre une tranche de pizza et un brocoli dans un réfrigérateur, en exactement 150 mots et sans utiliser la lettre E »</em>... là, votre cerveau s'allume instantanément ! Les contraintes sont comme les rives d'un fleuve : c'est parce qu'il est serré que le courant a de la force. N'ayez pas peur des limites, ce sont vos meilleures alliées pour créer.</p>

            <h2 id="connexions-folles">4. Le jeu des associations impossibles</h2>
            <p>Comment crée-t-on des métaphores géniales ou des scénarios originaux ? En forçant deux mots qui n'ont rien à faire ensemble à se marier de force.</p>
            <p>Prenez un mot abstrait (par exemple : <em>la paresse</em>, <em>le courage</em> ou <em>la jalousie</em>) et associez-le à un objet physique au hasard (par exemple : <em>un grille-pain</em>, <em>un parapluie</em> ou <em>une boîte de conserve</em>). Puis posez-vous la question :</p>
            <p><em>« À quoi ressemblerait le parapluie de la paresse ? »</em> Peut-être un parapluie qui refuse de s'ouvrir quand il pleut parce qu'il a la flemme de se lever, ou qui s'envole tout seul dès qu'il y a une goutte ! Vous venez d'inventer le début d'un conte poétique et décalé en 30 secondes.</p>

            <h2 id="gymnastique-mentale">5. Votre entraînement quotidien en 3 minutes chrono</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🧠 L'exercice du « Et si... ? »</h3>
                <p>Chaque jour, posez-vous une question absurde commençant par <strong>« Et si... ? »</strong> et imaginez trois conséquences concrètes :</p>
                <ul>
                    <li><em>Et si les animaux pouvaient parler le français du jour au lendemain ?</em></li>
                    <li><em>Et si la gravité s'inversait pendant 5 minutes chaque mercredi à 14h ?</em></li>
                    <li><em>Et si les mensonges faisaient pousser des plumes sur le nez au lieu de faire grandir le bois comme Pinocchio ?</em></li>
                </ul>
                <p>Amusez-vous à y répondre entre amis ou en famille. Rires garantis, et cerveau musclé à coup sûr !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 14 : La prise de notes au service de la création
// ============================================================================
updateArticle('prise-notes-creation-reflexion.html', {
  lead: `Prendre des notes en cours ou en réunion, avouons-le : c'est souvent la punition suprême. On passe des heures à recopier bêtement au kilomètre des tableaux noirs entiers jusqu'à avoir des crampes dans les doigts, sans comprendre un traître mot de ce qu'on écrit. Et le soir venu, nos feuilles ressemblent à un grimoire poussiéreux qu'on a juste envie de balancer par la fenêtre. Et si on vous disait que vos notes pouvaient devenir votre deuxième cerveau, un terrain de jeu visuel passionnant où vos idées prennent vie ? Découvrons l'art de prendre des notes qui réveillent l'intelligence au lieu de l'endormir.`,
  toc: [
    { id: "syndrome-du-greffier", title: "1. Le syndrome du photocopieur humain" },
    { id: "methode-cornell-cool", title: "2. Le système Cornell revisité (sans la poussière)" },
    { id: "sketchnoting-dessins", title: "3. Le sketchnoting : pourquoi dessiner n'est pas gribouiller" },
    { id: "deuxieme-cerveau", title: "4. Bâtir son deuxième cerveau numérique ou papier" },
    { id: "carnet-idees-or", title: "5. Votre kit de survie pour ne plus jamais subir vos cours" }
  ],
  bodyHtml: `
            <h2 id="syndrome-du-greffier">1. Le syndrome du photocopieur humain</h2>
            <p>Quand on prend des notes au mot à mot, on est en réalité en état de transe un peu zombie : l'information passe des oreilles directement aux doigts sans jamais s'arrêter dans notre cerveau pour y être comprise. C'est ce qu'on appelle être un <em>greffier</em>.</p>
            <p>Le problème ? Prendre des notes comme ça ne sert strictement à rien pour retenir. Prendre de vraies notes intelligentes, ce n'est pas tout noter : c'est <strong>sélectionner, filtrer, traduire avec ses propres mots et résumer</strong>. Moins vous écrivez de mots, plus votre cerveau est forcé de comprendre la substantifique moelle du message !</p>

            <h2 id="methode-cornell-cool">2. Le système Cornell revisité (sans la poussière)</h2>
            <p>Dans les années 1950, l'université de Cornell aux États-Unis a mis au point une façon de diviser sa feuille qui a sauvé la vie de millions d'étudiants. C'est tout bête :</p>
            <ul>
                <li><strong>La grande colonne de droite (70 % de la page) :</strong> Vos notes normales prises pendant le cours (phrases courtes, flèches, abréviations).</li>
                <li><strong>La colonne de gauche (30 % de la page) :</strong> La colonne des <em>mots-clés et questions</em>. Vous la remplissez après le cours en vous demandant : <em>« Si je devais poser une question de contrôle sur ce paragraphe, ce serait quoi ? »</em></li>
                <li><strong>Le bandeau du bas (5 lignes) :</strong> Le résumé flash en deux phrases simples, comme si vous deviez envoyer un texto à un pote pour lui résumer l'heure de cours.</li>
            </ul>
            <p>Pour réviser ? Vous masquez la colonne de droite avec une feuille et vous essayez de répondre aux questions de gauche. Révisions bouclées en 10 minutes montre en main !</p>

            <h2 id="sketchnoting-dessins">3. Le sketchnoting : pourquoi dessiner n'est pas gribouiller</h2>
            <p>Vous avez déjà vu un prof s'énerver parce qu'un élève faisait des petits dessins dans la marge de son cahier ? Pourtant, les neurosciences ont démontré que le <strong>sketchnoting</strong> (mélanger des mots et des petits croquis simples) double la capacité de mémorisation !</p>
            <p>Pourquoi ? Parce que votre cerveau a deux canaux pour enregistrer l'information : le canal verbal (les mots) et le canal visuel (les images). Quand vous associez un mot avec un petit picto tout bête (une ampoule pour une idée, un panneau danger pour une exception, un cœur pour une passion), vous ancrez l'information des deux côtés à la fois. Et pas besoin d'être Léonard de Vinci : des ronds, des carrés et des bonshommes bâtons suffisent amplement !</p>

            <h2 id="deuxieme-cerveau">4. Bâtir son deuxième cerveau numérique ou papier</h2>
            <p>David Allen, l'auteur de la célèbre méthode d'organisation <em>Getting Things Done</em>, a une formule géniale : <em>« Votre tête est faite pour avoir des idées, pas pour les retenir ! »</em></p>
            <p>Si vous essayez de garder en tête la formule de maths, l'anniversaire de votre ami, le rendez-vous chez le dentiste et votre idée de scénario, votre mémoire vive surchauffe et vous êtes stressé. Confiez tout cela à un support extérieur fiable : un carnet papier bien tenu ou une application comme Notion, Obsidian ou Apple Notes. Dès que c'est écrit noir sur blanc, votre esprit est soulagé et redevient disponible à 100 % pour réfléchir.</p>

            <h2 id="carnet-idees-or">5. Votre kit de survie pour ne plus jamais subir vos cours</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🎯 La règle des 3 couleurs</h3>
                <p>Bannissez les trousses remplies de 40 feutres différents qui vous font perdre 5 minutes à chaque changement de titre. Adoptez un système minimaliste avec 3 stylos maximum :</p>
                <ol>
                    <li><strong>Noir ou bleu :</strong> Le contenu essentiel rédigé simplement.</li>
                    <li><strong>Une seule couleur d'accent (vert ou bleu turquoise) :</strong> Les définitions et les mots-clés importants.</li>
                    <li><strong>Rouge ou orange :</strong> Les pièges classiques et les formules à ne jamais oublier.</li>
                </ol>
                <p>Vos pages seront claires, belles à regarder, et réviser deviendra presque un plaisir !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 15 : Comment produire des idées sans attendre l'inspiration
// ============================================================================
updateArticle('produire-idees-sans-inspiration.html', {
  lead: `« J'ai envie d'écrire, mais je n'ai aucune idée... J'attends que l'inspiration vienne ! » Voici sans doute la plus grande excuse de l'histoire humaine pour justifier la flemme de se mettre au travail. Attendre l'inspiration comme on attend le bus par une nuit d'orage sans horaire affiché, c'est la garantie absolue de ne jamais rien produire de sa vie. Les professionnels ne travaillent pas comme ça. Un chef cuisinier n'attend pas que les dieux de la gastronomie lui tombent dessus pour préparer le repas de midi : il a des recettes, des techniques et des boîtes à outils. Découvrons ensemble comment fabriquer des idées fraîches sur commande, même les jours où vous vous sentez aussi inspiré qu'une brique !`,
  toc: [
    { id: "mythe-muse", title: "1. La muse en vacances : pourquoi il ne faut pas compter sur elle" },
    { id: "methode-scamper", title: "2. La boîte à outils SCAMPER : le couteau suisse des idées" },
    { id: "inversion-probleme", title: "3. La pensée inversée : comment rater à coup sûr pour réussir" },
    { id: "quota-edison", title: "4. Le quota quotidien d'Edison : la quantité produit la qualité" },
    { id: "fabrique-a-idees", title: "5. Votre générateur d'idées d'urgence en 10 minutes" }
  ],
  bodyHtml: `
            <h2 id="mythe-muse">1. La muse en vacances : pourquoi il ne faut pas compter sur elle</h2>
            <p>L'écrivain de romans policiers Georges Simenon a écrit plus de 400 livres dans sa vie. Quand on lui demandait s'il attendait l'inspiration pour commencer un roman, il rigolait doucement : <em>« L'inspiration, c'est pour les amateurs. Les professionnels se mettent au travail, tout simplement. »</em></p>
            <p>L'inspiration n'est pas la cause de l'action : <strong>elle en est la conséquence</strong>. C'est après avoir posé vos mains sur le clavier, après avoir tracé les trois premiers coups de crayon maladroits ou après avoir joué les premières notes que l'étincelle s'allume. Ne demandez pas au feu de chauffer avant d'avoir mis du bois dans la cheminée !</p>

            <h2 id="methode-scamper">2. La boîte à outils SCAMPER : le couteau suisse des idées</h2>
            <p>Quand vous êtes totalement à sec devant un sujet ou un projet, utilisez la célèbre grille <strong>SCAMPER</strong> inventée par Bob Eberle. C'est une liste de questions qui secouent vos neurones pour faire tomber les idées comme des pommes mûres :</p>
            <ul>
                <li><strong>S (Substituer) :</strong> Que se passe-t-il si je remplace un ingrédient ou un personnage par son contraire ? (Exemple : un loup peureux et un agneau féroce).</li>
                <li><strong>C (Combiner) :</strong> Que se passe-t-il si je fusionne ce sujet avec un univers inattendu ? (Exemple : le foot mélangé avec des voitures = le jeu phénomène <em>Rocket League</em> !).</li>
                <li><strong>A (Adapter) :</strong> Comment une autre profession résoudrait ce problème ? (Comment un détective rangerait sa chambre ?).</li>
                <li><strong>M (Modifier / Magnifier) :</strong> Et si c'était 1 000 fois plus grand, ou microscopique ?</li>
                <li><strong>P (Produire un autre usage) :</strong> À quoi d'autre cela pourrait-il servir ?</li>
                <li><strong>E (Éliminer) :</strong> Si je retire ce que tout le monde croit indispensable ? (Exemple : un vélo sans chaîne, un livre sans dialogues).</li>
                <li><strong>R (Réorganiser / Renverser) :</strong> Et si on commençait par la fin de l'histoire ?</li>
            </ul>

            <h2 id="inversion-probleme">3. La pensée inversée : comment rater à coup sûr pour réussir</h2>
            <p>Notre cerveau a parfois du mal à trouver comment réussir un projet. Mais devinez quoi ? Il est exceptionnellement fort pour trouver comment tout faire foirer !</p>
            <p>Utilisez cette ruse psychologique qu'on appelle l'<strong>inversion</strong> : au lieu de vous demander : <em>« Comment faire un exposé génial ? »</em>, posez-vous la question suivante :</p>
            <p><em>« Comment faire l'exposé le plus assommant, catastrophique et ridicule de l'histoire du collège ? »</em></p>
            <p>Listez toutes les pires idées : lire une feuille sans lever les yeux d'une voix monotone, mettre du texte jaune sur fond blanc illisible, parler pendant 45 minutes sans poser de questions... Puis prenez cette liste et faites <strong>exactement l'inverse</strong> point par point ! Vous avez sous les yeux la recette parfaite du succès.</p>

            <h2 id="quota-edison">4. Le quota quotidien d'Edison : la quantité produit la qualité</h2>
            <p>Thomas Edison s'imposait une règle de fer pour lui et ses équipes d'ingénieurs : trouver une petite invention tous les 10 jours et une grande invention tous les 6 mois. Pour y arriver, il avait un carnet où il notait obligatoirement <strong>5 idées nouvelles par jour</strong>, qu'elles soient bonnes, mauvaises ou totalement farfelues.</p>
            <p>Sur 100 idées que vous produisez : 70 seront nulles, 20 seront moyennes, 8 seront bonnes, et 2 seront des pépites absolues qui peuvent changer votre vie. Le problème de ceux qui n'ont jamais d'idées de génie, c'est qu'ils s'arrêtent dès la deuxième idée parce qu'ils la trouvent médiocre. Il faut vider l'eau sale du tuyau avant que l'eau claire et fraîche ne commence à couler !</p>

            <h2 id="fabrique-a-idees">5. Votre générateur d'idées d'urgence en 10 minutes</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">⏱️ La technique des « 10 idées moches »</h3>
                <p>Chaque fois que vous bloquez sur un devoir ou un projet de création :</p>
                <ol>
                    <li>Prenez une feuille blanche et un feutre.</li>
                    <li>Lancez un chrono de <strong>5 minutes</strong>.</li>
                    <li>Forcez-vous à écrire <strong>10 idées de solutions</strong> le plus vite possible. Interdiction de juger ou de raturer ! Les idées les plus stupides sont les bienvenues.</li>
                </ol>
                <p>En enlevant la peur du jugement, vous déverrouillez le robinet mental. Et vous verrez qu'à la huitième idée, une pépite inattendue va surgir sous votre stylo !</p>
            </div>
  `
});

console.log('Batch 3 rewritten successfully!');
