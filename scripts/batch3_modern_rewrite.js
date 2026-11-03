const { updateArticle } = require('./rewrite_helper');

// ============================================================================
// ARTICLE 11 : Comment s'inspirer des grands créateurs sans les copier
// ============================================================================
updateArticle('inspirer-grands-createurs.html', {
  lead: `On a tous déjà ressenti ce malaise : admirer tellement le style d'un auteur, d'un réalisateur ou d'un entrepreneur qu'on essaie de reproduire fidèlement sa démarche... et se retrouver avec une pâle imitation qui sonne faux. Pourtant, tous les maîtres ont commencé par être des apprentis. George Lucas pour Star Wars, Quentin Tarantino au cinéma ou Francis Bebey en littérature et en musique : aucun d'eux n'est né du néant. Le secret des grands créateurs ne réside pas dans le décalque superficiel, mais dans la capacité à démonter le moteur interne de leurs modèles pour comprendre les lois universelles de leur art. Voyons comment transformer l'admiration en carburant d'émancipation.`,
  toc: [
    { id: "plagiat-vs-analyse-structurelle", title: "1. La différence entre le plagiat servile et l'inspiration féconde" },
    { id: "lecon-star-wars-george-lucas", title: "2. La recette de George Lucas : Star Wars ou le triomphe de la fusion" },
    { id: "francis-bebey-polyphonie", title: "3. La leçon de Francis Bebey : faire dialoguer la guitare classique et la tradition" },
    { id: "remonter-aux-maitres-des-maitres", title: "4. La règle d'or : remontez aux maîtres de vos maîtres" },
    { id: "atelier-radiographie-oeuvre", title: "5. Votre atelier pratique de rétro-ingénierie créative" }
  ],
  bodyHtml: `
            <h2 id="plagiat-vs-analyse-structurelle">1. La différence entre le plagiat servile et l'inspiration féconde</h2>
            <p>Il existe une phrase célèbre attribuée à de nombreux créateurs : <em>« Les mauvais artistes copient, les grands artistes volent. »</em> Il ne s'agit évidemment pas d'une apologie du plagiat ou de la malhonnêteté intellectuelle.</p>
            <p>Le mauvais copieur dérobe l'apparence : il reproduit une mise en page, pille un slogan ou calque un dessin au trait près. Le résultat est stérile et dénué d'âme. Le véritable créateur, lui, vole <strong>la structure invisible</strong> : il analyse comment un auteur construit le suspense d'un récit, comment un peintre orchestre ses contrastes de lumière ou comment une entreprise structure son expérience utilisateur. Il s'approprie les principes pour concevoir une œuvre entièrement nouvelle.</p>

            <h2 id="lecon-star-wars-george-lucas">2. La recette de George Lucas : Star Wars ou le triomphe de la fusion</h2>
            <p>En 1977, lorsque George Lucas dévoile <em>Star Wars</em>, le public mondial découvre une épopée spatiale saisissante. Pourtant, aucun des ingrédients narratifs n'était totalement inédit :</p>
            <ul>
                <li>Il a emprunté la structure des films de samouraïs du réalisateur japonais Akira Kurosawa (l'esprit chevaleresque des Jedi et le combat au sabre).</li>
                <li>Il y a injecté l'ambiance des westerns classiques américains (les mercenaires et les duels dans les cantinas).</li>
                <li>Il a repris les dynamiques aériennes des combats de la Seconde Guerre mondiale pour chorégraphier les batailles spatiales.</li>
                <li>Il a relié le tout aux archétypes mythologiques universels théorisés par Joseph Campbell.</li>
            </ul>
            <p>C'est l'alchimie de ces univers contrastés qui a engendré une œuvre culte de la culture contemporaine.</p>

            <h2 id="francis-bebey-polyphonie">3. La leçon de Francis Bebey : faire dialoguer la guitare classique et la tradition</h2>
            <p>Considérez l'itinéraire artistique de notre illustre écrivain et musicien camerounais <strong>Francis Bebey</strong>. Lauréat du Grand Prix Littéraire d'Afrique Noire pour son roman <em>Le Fils d'Agatha Moudio</em>, il était également un concertiste de guitare classique d'une précision remarquable.</p>
            <p>Plutôt que de reproduire passivement le répertoire européen standardisé, il a exploré les polyphonies et les instruments traditionnels (notamment la flûte à une note des peuples de la forêt équatoriale). En croisant la rigueur harmonique occidentale avec la pulsation rythmique africaine, il a inventé une esthétique musicale inédite reconnue dans les plus grandes institutions internationales. Il n'a pas copié : il a dialogué.</p>

            <h2 id="remonter-aux-maitres-des-maitres">4. La règle d'or : remontez aux maîtres de vos maîtres</h2>
            <p>Pour développer une originalité forte, appliquez une règle d'enquête simple : au lieu d'imiter vos contemporains à la mode, <strong>cherchez quelles étaient les sources d'inspiration de vos idoles lorsqu'elles avaient votre âge</strong>.</p>
            <p>Si vous admirez un réalisateur de cinéma actuel, étudiez les films des années 1960 qu'il cite en référence ; si vous aimez un romancier contemporain, plongez-vous dans les classiques de la littérature universelle qui ont forgé sa plume. En remontant à la source originelle, vous puisez une matière brute infiniment plus riche et vous évitez de produire des copies de copies.</p>

            <h2 id="atelier-radiographie-oeuvre">5. Votre atelier pratique de rétro-ingénierie créative</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🛠️ La méthode de la radiographie d'œuvre</h3>
                <p>Prenez un article, un discours marquant ou une vidéo qui vous a captivé :</p>
                <ol>
                    <li><strong>Isolez l'accroche :</strong> Comment les 15 premières secondes retiennent-elles l'attention du public ?</li>
                    <li><strong>Cartographiez l'ossature :</strong> Quels sont les 3 arguments logiques qui soutiennent la démonstration ?</li>
                    <li><strong>Analysez la conclusion :</strong> Quel est l'appel à l'action ou la formule mémorable finale ?</li>
                </ol>
                <p>Appliquez cette grille structurelle à votre propre sujet. Vous constaterez un saut qualitatif immédiat dans la force de votre production.</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 12 : Observer le quotidien avec un regard neuf
// ============================================================================
updateArticle('observer-quotidien-regard-neuf.html', {
  lead: `Combien d'entre nous traversent chaque jour leur ville — que ce soit sur les grands boulevards de Douala, les collines de Yaoundé ou les artères de Bafoussam — en mode pilote automatique, le regard baissé sur leurs écrans, sans rien discerner de l'environnement qui les entoure ? On s'imagine souvent que pour faire des découvertes remarquables, il faut voyager au bout du monde. C'est une erreur de perspective. De la découverte de la pénicilline par Alexander Fleming à l'invention du Velcro, les plus grandes percées scientifiques et entrepreneuriales sont nées d'un regard attentif posé sur des détails ordinaires que tout le monde avait sous les yeux mais que personne ne regardait vraiment.`,
  toc: [
    { id: "piege-du-pilote-automatique", title: "1. Le coût cognitif du pilote automatique quotidien" },
    { id: "serendipite-fleming-velcro", title: "2. Les leçons universelles de la sérendipité : de Fleming au Velcro" },
    { id: "tresors-du-terroir-penja", title: "3. Le regard valorisateur : le cas emblématique du Poivre de Penja" },
    { id: "depasser-fixite-fonctionnelle", title: "4. Dépasser la « fixité fonctionnelle » pour réinventer les objets" },
    { id: "exercice-de-l-ethnographe", title: "5. Votre exercice d'observation active du quotidien" }
  ],
  bodyHtml: `
            <h2 id="piege-du-pilote-automatique">1. Le coût cognitif du pilote automatique quotidien</h2>
            <p>Pour économiser son énergie métabolique, le cerveau humain a tendance à automatiser tout ce qui devient routinier : le trajet de l'école ou du travail, les visages croisés dans les transports, l'agencement de notre espace de travail.</p>
            <p>Cette économie d'énergie a une contrepartie sévère : elle engourdit notre acuité perceptive. Nous cessons d'observer, nous nous contentons de reconnaître machinalement. Or, l'esprit d'innovation commence précisément à l'instant où l'on brise ce filtre d'indifférence pour regarder l'ordinaire avec l'œil curieux d'un explorateur.</p>

            <h2 id="serendipite-fleming-velcro">2. Les leçons universelles de la sérendipité : de Fleming au Velcro</h2>
            <p>La <strong>sérendipité</strong> désigne le don de découvrir des solutions de premier plan par un mélange d'heureuse surprise et de sagacité attentive :</p>
            <ul>
                <li>En 1928, le médecin britannique Alexander Fleming remarque qu'une moisissure a contaminé par inadvertance une de ses boîtes de culture bactérienne au laboratoire, et que les bactéries sont mortes autour de la moisissure. Au lieu de jeter la boîte à l'évier comme un déchet négligeable, il l'examine au microscope et découvre la <strong>pénicilline</strong>, révolutionnant l'histoire de la médecine.</li>
                <li>Dans les années 1940, l'ingénieur suisse George de Mestral observe au microscope les petits fruits de bardane accrochés aux poils de son chien lors d'une promenade : il découvre leurs crochets microscopiques élastiques et conçoit le <strong>Velcro</strong>, aujourd'hui utilisé des baskets aux combinaisons spatiales.</li>
            </ul>
            <p>La chance ne sourit pas au hasard : elle sourit aux esprits méthodiques préparés à observer l'inattendu.</p>

            <h2 id="tresors-du-terroir-penja">3. Le regard valorisateur : le cas emblématique du Poivre de Penja</h2>
            <p>Dans le département du Moungo au Cameroun, sur les flancs volcaniques fertiles du mont Koupé, poussait une variété de poivre réputée dans les villages locaux. Pendant des décennies, cette culture est restée artisanale et locale.</p>
            <p>Il a fallu que des agronomes et des producteurs passionnés posent un regard rigoureux sur ses qualités organoleptiques exceptionnelles, mènent des analyses de terroir et structurent une filière exigeante pour obtenir la toute première Indication Géographique Protégée (IGP) d'Afrique subsaharienne. Aujourd'hui, le <strong>Poivre de Penja</strong> figure sur les tables des plus grands palaces gastronomiques à Paris, Tokyo ou New York. La valeur ne naît pas de l'exotisme lointain : elle naît de l'excellence appliquée aux ressources que l'on possède déjà sous les yeux.</p>

            <h2 id="depasser-fixite-fonctionnelle">4. Dépasser la « fixité fonctionnelle » pour réinventer les objets</h2>
            <p>En psychologie cognitive, la <em>fixité fonctionnelle</em> est un biais qui nous empêche d'utiliser un objet pour un usage différent de sa fonction habituelle. Un smartphone n'est vu que comme un téléphone, un conteneur maritime métallique n'est vu que comme une boîte de fret.</p>
            <p>Les architectes et designers modernes qui ont dépassé ce biais utilisent aujourd'hui des conteneurs maritimes pour créer des logements modulaires étudiants élégants, des cliniques mobiles ou des espaces de co-working ultra-modernes à faible coût énergétique. Développer sa créativité, c'est s'entraîner continuellement à demander : <em>« En dehors de son rôle officiel, que peut également accomplir cet élément ? »</em></p>

            <h2 id="exercice-de-l-ethnographe">5. Votre exercice d'observation active du quotidien</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🚶‍♂️ La marche de l'ethnographe</h3>
                <p>Lors de votre prochain trajet à pied dans votre quartier :</p>
                <ol>
                    <li>Rangez votre téléphone et vos écouteurs dans votre sac.</li>
                    <li>Notez mentalement <strong>trois éléments d'ingéniosité concrète</strong> (un système d'ombrage ingénieux, une optimisation d'espace dans une boutique, une formule de communication marquante).</li>
                    <li>Consignez ces trois observations dans votre carnet le soir.</li>
                </ol>
                <p>En quelques semaines, vous développerez une acuité d'observation digne d'un consultant en stratégie de haut niveau.</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 13 : Penser autrement : exercices pour muscler sa créativité
// ============================================================================
updateArticle('penser-autrement-exercices.html', {
  lead: `« Je n'ai pas l'esprit créatif... Je suis plutôt une personne rationnelle et logique. » Cette opposition artificielle entre logique et imagination est l'un des plus grands malentendus du monde éducatif. Les plus grands savants, d'Albert Einstein visualisant mentalement ce qu'il ressentirait en chevauchant un rayon de lumière, jusqu'aux grands stratèges du jeu de Songo, ont toujours combiné rigueur mathématique et audace conceptuelle. La créativité n'est pas un don ésotérique réservé à quelques artistes bohèmes : c'est une compétence cognitive universelle qui s'entraîne avec des exercices délibérés. Préparez-vous à assouplir vos schémas de pensée.`,
  toc: [
    { id: "mythe-cerveau-gauche-droit", title: "1. En finir avec le mythe du « cerveau gauche contre cerveau droit »" },
    { id: "pensee-divergente-guilford", title: "2. La pensée divergente : le test classique de J.P. Guilford" },
    { id: "rigueur-tactique-du-songo", title: "3. La stratégie du Songo : l'anticipation arithmétique de haut niveau" },
    { id: "creativite-sous-contrainte", title: "4. Le paradoxe de la contrainte : pourquoi les limites libèrent l'idée" },
    { id: "trois-exercices-agilite", title: "5. Trois exercices quotidiens d'agilité conceptuelle" }
  ],
  bodyHtml: `
            <h2 id="mythe-cerveau-gauche-droit">1. En finir avec le mythe du « cerveau gauche contre cerveau droit »</h2>
            <p>La théorie populaire affirmant que les individus sont soit « cerveau gauche » (logiques et froids), soit « cerveau droit » (artistes et intuitifs) a été formellement réfutée par la neuro-imagerie moderne. Les deux hémisphères travaillent en étroite collaboration à chaque instant par l'intermédiaire du corps calleux.</p>
            <p>Pour résoudre une équation mathématique complexe ou concevoir une architecture logicielle innovante, il faut de la rigueur déductive ET une intuition visuelle audacieuse. Les esprits les plus percutants sont ceux qui savent faire dialoguer leur esprit analytique avec leur capacité d'émerveillement.</p>

            <h2 id="pensee-divergente-guilford">2. La pensée divergente : le test classique de J.P. Guilford</h2>
            <p>Dans les années 1950, le psychologue américain J.P. Guilford a formalisé la distinction entre :</p>
            <ul>
                <li><strong>La pensée convergente :</strong> La capacité à trouver la réponse unique et exacte à un problème bien posé (comme dans un QCM de mathématiques).</li>
                <li><strong>La pensée divergente :</strong> La capacité à explorer une multitude de pistes alternatives à partir d'un même point de départ.</li>
            </ul>
            <p>Dans son test historique des « usages alternatifs », il demandait aux participants de lister en 3 minutes toutes les utilisations possibles d'un simple trombone ou d'une brique. La majorité des adultes se limitent à 4 ou 5 réponses convenues ; les enfants et les innovateurs en trouvent des dizaines, car ils refusent de se laisser enfermer dans la fonction prédéfinie de l'objet.</p>

            <h2 id="rigueur-tactique-du-songo">3. La stratégie du Songo : l'anticipation arithmétique de haut niveau</h2>
            <p>Dans les traditions de jeux de calcul et de stratégie combinatoire (comme le <strong>Songo</strong> pratiqué en Afrique centrale, ou le jeu d'échecs et le jeu de Go à l'échelle mondiale), les joueurs de premier plan développent une acuité mentale redoutable.</p>
            <p>Face à un plateau de Songo, le joueur aguerri ne réagit pas par impulsion : il calcule mentalement des séquences de distribution de graines plusieurs coups à l'avance, évalue les probabilités d'interception et tend des pièges tactiques subtils. Ce jeu traditionnel millénaire démontre que la discipline du calcul et l'audace stratégique font partie intégrante de notre patrimoine intellectuel universel.</p>

            <h2 id="creativite-sous-contrainte">4. Le paradoxe de la contrainte : pourquoi les limites libèrent l'idée</h2>
            <p>On s'imagine souvent que pour créer, il faut une liberté absolue et des ressources illimitées. Dans les faits, l'absence totale de contraintes produit le plus souvent l'angoisse et la dispersion.</p>
            <p>L'écrivain français Georges Perec a rédigé un roman entier de 300 pages, <em>La Disparition</em>, sans utiliser une seule fois la lettre E (la voyelle la plus fréquente de la langue française). Loin de bloquer sa plume, cette contrainte titanesque a stimulé son ingéniosité verbale et créé une œuvre unique dans l'histoire littéraire mondiale. Face à un problème scolaire ou professionnel, ne maudissez pas les contraintes : utilisez-les comme le tuteur qui force la vigne à grimper plus haut.</p>

            <h2 id="trois-exercices-agilite">5. Trois exercices quotidiens d'agilité conceptuelle</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🧠 L'échauffement mental en 3 questions</h3>
                <ol>
                    <li><strong>L'analogie forcée :</strong> En quoi la mémoire humaine ressemble-t-elle à un réseau de transport urbain comme celui de Douala ou Yaoundé ? Listez 3 similitudes fonctionnelles.</li>
                    <li><strong>Le retournement de rôle :</strong> Comment un ingénieur en aéronautique résoudrait-il l'attente dans une file d'attente administrative ?</li>
                    <li><strong>La question du saut quantique :</strong> Si vous disposiez de 10 fois moins de temps pour finir votre projet de la semaine, quelle est la seule étape que vous conserveriez absolument ?</li>
                </ol>
            </div>
  `
});

// ============================================================================
// ARTICLE 14 : La prise de notes au service de la création
// ============================================================================
updateArticle('prise-notes-creation-reflexion.html', {
  lead: `Prendre des notes en cours d'amphi ou en réunion de travail est trop souvent réduit à un exercice de sténographie mécanique : recopier le plus vite possible des diapositives entières jusqu'à la crampe aux doigts, sans rien comprendre de la logique interne du discours. Et le soir venu, on se retrouve avec des pages de texte uniforme qu'on peine à relire. Pourtant, de Léonard de Vinci consignant ses croquis et intuitions dans ses fameux codex, jusqu'au sultan Ibrahim Njoya à Foumban concevant l'écriture Shü-mom pour archiver les connaissances de son royaume, les esprits bâtisseurs ont toujours fait de leurs notes un laboratoire personnel d'intelligence. Découvrons l'art de prendre des notes qui éveillent la pensée.`,
  toc: [
    { id: "syndrome-du-greffier-passif", title: "1. Le syndrome du greffier : pourquoi tout noter empêche d'apprendre" },
    { id: "systeme-cornell-moderne", title: "2. Le système Cornell moderne : structurer la page pour réviser vite" },
    { id: "heritage-roi-njoya-shumom", title: "3. La leçon d'Ibrahim Njoya : consigner son génie dans l'écriture" },
    { id: "sketchnoting-double-encodage", title: "4. Le sketchnoting : la puissance du double encodage visuel et verbal" },
    { id: "kit-du-second-cerveau", title: "5. Bâtir son deuxième cerveau papier et numérique" }
  ],
  bodyHtml: `
            <h2 id="syndrome-du-greffier-passif">1. Le syndrome du greffier : pourquoi tout noter empêche d'apprendre</h2>
            <p>Quand on s'efforce de transcrire mot pour mot le cours d'un enseignant ou les propos d'une conférence, on entre dans un état de fonctionnement quasi-automatique. L'information transite de l'appareil auditif aux doigts sans être analysée par le cortex cérébral.</p>
            <p>Prendre des notes de haut niveau ne consiste pas à tout retranscrire : cela consiste à <strong>écouter, hiérarchiser, synthétiser et reformuler</strong> avec ses propres mots. Moins vous écrivez de mots superflus, plus votre cerveau est contraint de faire le travail fondamental d'assimilation logique. Un schéma de 5 lignes qui résume l'essentiel vaut infiniment mieux que 4 pages de transcription verbeuse.</p>

            <h2 id="systeme-cornell-moderne">2. Le système Cornell moderne : structurer la page pour réviser vite</h2>
            <p>Conçu dans les années 1950 par le professeur Walter Pauk à l'Université Cornell, ce système de mise en page reste l'une des méthodes les plus performantes au monde pour préparer des examens ou structurer des dossiers complexes :</p>
            <ul>
                <li><strong>La zone centrale de prise de notes (70 % de la largeur) :</strong> Consignez vos notes durant la séance de manière aérée, avec des puces, des flèches et des abréviations claires.</li>
                <li><strong>La colonne de rappel à gauche (30 % de la largeur) :</strong> Remplie juste après la séance, elle contient les questions d'auto-évaluation et les mots-clés essentiels.</li>
                <li><strong>Le bandeau inférieur (5 à 7 lignes en bas de page) :</strong> La synthèse globale rédigée en deux ou trois phrases percutantes qui résument l'idée maîtresse.</li>
            </ul>
            <p>Pour réviser, il vous suffit de masquer la zone centrale et d'utiliser la colonne de gauche comme un jeu de cartes-mémoire (flashcards) pour tester votre mémoire en temps réel.</p>

            <h2 id="heritage-roi-njoya-shumom">3. La leçon d'Ibrahim Njoya : consigner son génie dans l'écriture</h2>
            <p>À la fin du XIXe siècle à Foumban, le souverain camerounais <strong>Ibrahim Njoya</strong> prend conscience qu'une culture qui ne formalise pas ses propres connaissances écrites s'expose à la perte de son autonomie intellectuelle et historique.</p>
            <p>Face à ce défi, il mobilise ses conseillers et crée un système d'écriture original : l'alphabet <strong>Shü-mom</strong>. Évoluant au fil de révisions successives d'un système idéographique vers une écriture phonétique élégante, cette création a permis de rédiger des manuscrits d'histoire, des recueils de pharmacopée médicale et des codes de lois royaux. Consigner ses réflexions par écrit avec rigueur est l'acte fondateur de toute souveraineté intellectuelle.</p>

            <h2 id="sketchnoting-double-encodage">4. Le sketchnoting : la puissance du double encodage visuel et verbal</h2>
            <p>La théorie du <em>double encodage</em> du psychologue Allan Paivio démontre que notre mémoire traite l'information par deux canaux distincts et complémentaires : le canal verbal (les mots écrits ou parlés) et le canal non-verbal (les formes, pictogrammes et spatialisations).</p>
            <p>Quand vous associez un concept abstrait avec un pictogramme simple (un rouage pour un mécanisme, un éclair pour une crise, une balance pour un arbitrage), vous créez un double ancrage synaptique. Le <strong>sketchnoting</strong> ne requiert aucun don artistique : des formes géométriques simples, des cadres et des flèches suffisent à décupler la rétention.</p>

            <h2 id="kit-du-second-cerveau">5. Bâtir son deuxième cerveau papier et numérique</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">📁 Le protocole du second cerveau</h3>
                <p>David Allen, théoricien de l'efficacité personnelle, le rappelle avec justesse : <em>« Votre esprit est fait pour avoir des idées, pas pour les stocker. »</em></p>
                <ol>
                    <li>Gardez un <strong>carnet de capture rapide</strong> toujours à portée de main pour noter immédiatement toute idée ou tâche sans encombrer votre mémoire de travail.</li>
                    <li>Utilisez un <strong>classeur papier structuré ou un outil numérique</strong> (Notion, Obsidian ou Apple Notes) pour archiver vos fiches par thématiques claires.</li>
                    <li>Planifiez une <strong>revue hebdomadaire de 15 minutes</strong> chaque dimanche pour classer les notes prises dans la semaine et préparer vos priorités.</li>
                </ol>
            </div>
  `
});

// ============================================================================
// ARTICLE 15 : Comment produire des idées sans attendre l'inspiration
// ============================================================================
updateArticle('produire-idees-sans-inspiration.html', {
  lead: `« Je manque d'inspiration aujourd'hui, j'attends le bon moment pour m'y mettre. » Voici le prétexte le plus récurrent pour repousser au lendemain un devoir d'envergure, un rapport stratégique ou un projet entrepreneurial. Mais avez-vous déjà vu un ingénieur de bureau d'études ou un chef d'orchestre refuser de travailler au prétexte que la muse ne l'a pas visité le matin ? Les professionnels de haut niveau ne s'en remettent jamais au hasard de l'humeur du jour : ils disposent de grilles heuristiques, de méthodes d'analyse et de protocoles éprouvés pour faire émerger des solutions novatrices sur commande. Découvrons les techniques pour fabriquer des idées fraîches quand la feuille semble désespérément blanche.`,
  toc: [
    { id: "mythe-de-la-muse-passive", title: "1. En finir avec le romantisme de l'attente passive" },
    { id: "grille-scamper-innovation", title: "2. La grille SCAMPER : le couteau suisse universel de l'innovation" },
    { id: "inversion-charlie-munger", title: "3. La pensée inversée de Charlie Munger : comment étudier l'échec pour réussir" },
    { id: "quota-qualite-edison", title: "4. Le principe du quota : la quantité engendre la qualité" },
    { id: "laboratoire-idees-express", title: "5. Votre générateur d'idées d'urgence en 10 minutes" }
  ],
  bodyHtml: `
            <h2 id="mythe-de-la-muse-passive">1. En finir avec le romantisme de l'attente passive</h2>
            <p>L'écrivain de renommée mondiale Stephen King résume la posture professionnelle avec lucidité : les amateurs attendent l'inspiration ; les autres s'installent à leur poste et se mettent au travail. L'inspiration est le sous-produit de l'engagement régulier dans la tâche.</p>
            <p>C'est après avoir posé le cadre du problème, tracé les premières hypothèses et manipulé les données que les connexions logiques et créatives s'enclenchent. Attendre passivement l'illumination est la garantie de ne jamais produire de travail d'envergure.</p>

            <h2 id="grille-scamper-innovation">2. La grille SCAMPER : le couteau suisse universel de l'innovation</h2>
            <p>Mise au point par le pédagogue Bob Eberle, la méthode <strong>SCAMPER</strong> est une matrice universelle de questionnement systématique utilisée dans les plus grands départements de recherche et développement à travers le monde :</p>
            <ul>
                <li><strong>S (Substituer) :</strong> Que se passe-t-il si je remplace un composant par un matériau plus durable ou plus économique ?</li>
                <li><strong>C (Combiner) :</strong> Que se passe-t-il si je fusionne deux services existants pour éliminer une friction utilisateur ? (Exemple : combiner la logistique de livraison avec les paiements par smartphone).</li>
                <li><strong>A (Adapter) :</strong> Comment une autre industrie a-t-elle déjà résolu ce même défi logistique ou organisationnel ?</li>
                <li><strong>M (Modifier / Magnifier) :</strong> Et si l'on augmentait la vitesse par dix, ou si l'on réduisait la taille à une échelle de poche ?</li>
                <li><strong>P (Produire un autre usage) :</strong> Comment valoriser les sous-produits d'une activité pour créer une nouvelle chaîne de valeur ?</li>
                <li><strong>E (Éliminer) :</strong> Quelle est l'étape superflue qui alourdit le processus et que l'on peut supprimer sans perte d'efficacité ?</li>
                <li><strong>R (Renverser / Réorganiser) :</strong> Et si l'on inversait l'ordre chronologique des étapes ?</li>
            </ul>

            <h2 id="inversion-charlie-munger">3. La pensée inversée de Charlie Munger : comment étudier l'échec pour réussir</h2>
            <p>Le légendaire investisseur et penseur Charlie Munger, partenaire d'affaires de Warren Buffett, citait toujours ce mot d'ordre hérité du mathématicien Carl Gustav Jacobi : <em>« Invert, always invert »</em> (Inversez, toujours inversez).</p>
            <p>Lorsque vous cherchez comment réussir un projet complexe, commencez par vous poser la question symétriquement opposée : <strong>« Quelles sont les trois décisions qui garantiraient l'échec total et la faillite certaine de ce projet ? »</strong> En listant avec minutie les causes de désastre (mauvaise communication, dépassement de budget, absence de vérification des hypothèses de départ), vous obtenez la carte exacte des écueils qu'il vous suffit d'éviter scrupuleusement pour réussir.</p>

            <h2 id="quota-qualite-edison">4. Le principe du quota : la quantité engendre la qualité</h2>
            <p>Thomas Edison imposait à ses équipes une discipline arithmétique : produire une invention mineure tous les 10 jours et une innovation majeure tous les 6 mois. Pablo Picasso a produit plus de 50 000 œuvres au cours de son existence, dont seule une fraction orne les musées de premier plan.</p>
            <p>Dans tout processus créatif, la quantité est la condition préalable de la qualité. Sur 20 idées esquissées sur une feuille, 15 seront banales, 4 seront exploitables et 1 sera une percée remarquable. Ceux qui n'ont jamais d'idées neuves sont généralement ceux qui s'arrêtent après avoir formulé deux propositions tièdes par peur du jugement.</p>

            <h2 id="laboratoire-idees-express">5. Votre générateur d'idées d'urgence en 10 minutes</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">⏱️ Le protocole des 10 variantes</h3>
                <p>Face à une impasse conceptuelle ou technique sur un projet :</p>
                <ol>
                    <li>Prenez une feuille blanche et lancez un chronomètre de <strong>7 minutes</strong>.</li>
                    <li>Rédigez <strong>10 solutions ou approches différentes</strong> au problème, sans vous autoriser la moindre autocensure ni correction.</li>
                    <li>Même les options apparemment improbables doivent être notées.</li>
                </ol>
                <p>En suspendant votre filtre critique pendant 7 minutes, vous déverrouillez les associations d'idées et trouverez invariablement l'angle d'attaque décisif.</p>
            </div>
  `
});

console.log('Batch 3 (Modern Balanced Edition) rewritten successfully!');
