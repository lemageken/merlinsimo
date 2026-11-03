const { updateArticle } = require('./rewrite_helper');

// ============================================================================
// ARTICLE 16 : Les questions puissantes pour débloquer sa pensée
// ============================================================================
updateArticle('questions-puissantes-debloquer.html', {
  lead: `Vous avez remarqué comme on passe notre temps à courir après des réponses ? À l'école, dans les quiz télévisés ou sur Google, on récompense toujours celui qui a la réponse immédiate. Mais dans la vraie vie et dans les grands projets créatifs, ce ne sont pas les réponses qui changent tout : ce sont les questions ! Une mauvaise question vous enferme dans un cul-de-sac mental pendant des jours. Une question bien posée, en revanche, agit comme un coup de pied dans une porte blindée : tout s'éclaire d'un coup. Découvrons ensemble les questions magiques qui débloquent n'importe quelle situation en 30 secondes.`,
  toc: [
    { id: "pourquoi-mauvaises-questions", title: "1. Pourquoi nous posons presque toujours les mauvaises questions" },
    { id: "questions-interdites", title: "2. Les questions toxiques qui vous enfoncent dans la boue" },
    { id: "baguette-magique-solutions", title: "3. La question de la baguette magique et des 10 millions d'euros" },
    { id: "effet-zeigarnik-cerveau", title: "4. L'effet Zeigarnik : comment lancer votre cerveau en mode recherche Google interne" },
    { id: "boite-a-questions-merlin", title: "5. Votre trousseau de 5 questions de secours à garder dans la poche" }
  ],
  bodyHtml: `
            <h2 id="pourquoi-mauvaises-questions">1. Pourquoi nous posons presque toujours les mauvaises questions</h2>
            <p>Quand on bloque sur un problème (un devoir difficile, une dispute avec un ami, un projet qui n'avance pas), quelle est la première question qui nous vient spontanément à la bouche ?</p>
            <p>Presque toujours : <em>« Mais pourquoi ça n'arrive qu'à moi ? »</em> ou <em>« Pourquoi je suis aussi nul ? »</em></p>
            <p>Le problème, c'est que votre cerveau est un ordinateur très obéissant : si vous lui posez une question idiote ou décourageante, il va vous trouver une réponse idiote et décourageante ! Il va vous lister 15 raisons pour lesquelles vous n'êtes pas à la hauteur. Mais si vous changez la question, vous changez instantanément la direction de votre esprit.</p>

            <h2 id="questions-interdites">2. Les questions toxiques qui vous enfoncent dans la boue</h2>
            <p>Bannissez immédiatement de votre vocabulaire ces questions qui ferment le jeu et paralysent vos neurones :</p>
            <ul>
                <li><strong>« Pourquoi c'est impossible ? »</strong> ➔ Cette question demande à votre cerveau de chercher des barrières et des excuses.</li>
                <li><strong>« Qui est le coupable ? »</strong> ➔ Cette question déclenche la panique, le rejet de la faute sur les autres et l'agressivité.</li>
                <li><strong>« Et si tout le monde se moque de moi ? »</strong> ➔ Cette question réveille votre peur préhistorique de vous faire rejeter du groupe.</li>
            </ul>
            <p>Remplacez-les par des <strong>questions orientées solutions</strong> : <em>« Qu'est-ce qui est sous mon contrôle direct dès maintenant ? »</em> et <em>« Comment rendre ce problème intéressant à résoudre ? »</em> Vous sentirez physiquement vos épaules se détendre !</p>

            <h2 id="baguette-magique-solutions">3. La question de la baguette magique et des 10 millions d'euros</h2>
            <p>Quand les adultes ou les élèves sont bloqués, c'est souvent parce qu'ils s'imposent tout seuls des barrières invisibles (la peur de manquer d'argent, de temps ou de compétences). Pour faire sauter ces verrous mentaux, posez-vous ces deux questions déjantées :</p>
            <ol>
                <li><strong>La question de la baguette magique :</strong> <em>« Si j'avais un pouvoir magique qui me garantissait à 100 % de ne pas échouer, qu'est-ce que je ferais exactement tout de suite ? »</em> La réponse vous donne votre véritable désir profond, sans filtre.</li>
                <li><strong>La question de l'enfant de 6 ans :</strong> <em>« Comment un enfant de maternelle résoudrait ce problème avec un paquet de bonbons et trois feutres de couleur ? »</em> Ça vous force à éliminer le jargon d'adulte pour revenir à l'essentiel.</li>
            </ol>

            <h2 id="effet-zeigarnik-cerveau">4. L'effet Zeigarnik : lancer son Google interne</h2>
            <p>Dans les années 1920, une psychologue soviétique nommée Bluma Zeigarnik a remarqué un truc étonnant dans un café de Vienne : les serveurs se souvenaient parfaitement des commandes complexes de chaque table tant qu'elles n'étaient pas payées. Mais dès que l'addition était réglée : oubli total en deux secondes !</p>
            <p>Pourquoi ? Parce que notre cerveau déteste les boucles ouvertes. Quand vous lui posez une question puissante sans réponse immédiate (par exemple : <em>« Comment rendre ce chapitre de SVT passionnant sous forme de bande dessinée ? »</em>) et que vous partez faire autre chose, votre cerveau ne s'arrête pas ! Il continue de chercher en tâche de fond dans ses archives, comme une recherche Google qui tourne la nuit. Et le lendemain matin au petit-déjeuner : <em>BIM !</em> La solution parfaite vous tombe dans la tasse.</p>

            <h2 id="boite-a-questions-merlin">5. Votre trousseau de 5 questions de secours à garder dans la poche</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🔑 Le trousseau de clés d'urgence</h3>
                <p>En cas de panne sèche d'idées ou de gros coup de mou, dégainez l'une de ces 5 questions :</p>
                <ol>
                    <li><em>« Quel est le problème réel derrière ce bazar apparent ? »</em></li>
                    <li><em>« Si c'était super simple et amusant, ça ressemblerait à quoi ? »</em></li>
                    <li><em>« Quelle est la plus petite action minuscule que je peux faire en 2 minutes pour débloquer la situation ? »</em></li>
                    <li><em>« Qu'est-ce que mon super-héros ou mon mentor préféré ferait à ma place ? »</em></li>
                    <li><em>« Dans 5 ans, qu'est-ce qui comptera vraiment dans cette histoire ? »</em></li>
                </ol>
            </div>
  `
});

// ============================================================================
// ARTICLE 17 : Comment retrouver sa créativité quand on se sent bloqué
// ============================================================================
updateArticle('retrouver-creativite-bloque.html', {
  lead: `Le syndrome de la panne sèche, on connaît tous. Vous devez rendre un devoir d'arts plastiques, écrire une rédaction pour le français ou préparer une présentation... et RIEN. Pas l'ombre d'une étincelle. Votre cerveau est aussi plat et désertique que le Sahara à midi en plein été. Vous commencez à paniquer, à regarder votre montre, à vous traiter de bon à rien, et plus vous vous énervez, plus le cadenas se resserre. Respirez un grand coup. Le blocage créatif n'est pas une malédiction : c'est simplement un petit fusible mental qui a sauté pour vous protéger d'une surchauffe. On vous explique comment réenclencher le disjoncteur avec le sourire !`,
  toc: [
    { id: "anatomie-panne", title: "1. L'anatomie d'une panne sèche : pourquoi ça coince ?" },
    { id: "sortir-de-sa-chambre", title: "2. Changer de bocal : le pouvoir du changement de pièce" },
    { id: "secouer-le-corps", title: "3. Secouer le bocal physique pour débloquer les neurones" },
    { id: "page-poubelle", title: "4. La technique salvatrice de la « feuille poubelle »" },
    { id: "kit-secours-deblocage", title: "5. Votre protocole de déblocage express en 15 minutes" }
  ],
  bodyHtml: `
            <h2 id="anatomie-panne">1. L'anatomie d'une panne sèche : pourquoi ça coince ?</h2>
            <p>Quand vous êtes bloqué, vous pensez souvent : <em>« Mon cerveau n'a plus d'idées, la réserve est vide ! »</em> C'est scientifiquement faux. Votre cerveau a des millions d'idées en stock à chaque seconde.</p>
            <p>Ce qui est bloqué, ce n'est pas la fabrication des idées : c'est <strong>la porte de sortie</strong> ! Vous avez tellement peur de sortir une idée nulle, ringarde ou bizarre que votre garde-frontière mental (votre ego) abat impitoyablement chaque idée qui s'approche de la frontière. Résultat : rien ne sort, et vous avez l'impression d'être vide. Pour vous débloquer, il ne faut pas forcer le moteur : il faut juste neutraliser le garde-frontière !</p>

            <h2 id="sortir-de-sa-chambre">2. Changer de bocal : le pouvoir du changement de pièce</h2>
            <p>Si vous restez assis sur la même chaise de bureau, devant le même écran, dans la même pièce étouffante pendant 3 heures, vos yeux voient toujours les mêmes stimuli. Votre cerveau s'endort sur ses lauriers.</p>
            <p>Le moyen le plus rapide de relancer la machine ? <strong>Changez d'endroit physique !</strong> Allez travailler par terre sur le tapis de votre salon, installez-vous sur la table de la cuisine avec un verre de jus de fruits, ou descendez sur un banc dans un parc public. Un simple changement de lumière et de décor suffit à faire bugger vos routines et à déclencher de nouvelles connexions neuronales.</p>

            <h2 id="secouer-le-corps">3. Secouer le bocal physique pour débloquer les neurones</h2>
            <p>On oublie trop souvent que le cerveau n'est pas un ordinateur volant dans les nuages : il est logé dans un corps en chair et en os ! Si vous êtes avachi comme une crêpe molle sur votre chaise depuis des heures, votre circulation sanguine tourne au ralenti et vos neurones manquent d'oxygène.</p>
            <p>Le remède miracle ? Levez-vous d'un coup ! Mettez votre musique préférée à fond pendant 3 minutes et dansez comme un fou, faites 15 squats, ou allez vous asperger le visage d'eau bien fraîche. En envoyant un afflux d'adrénaline et de sang frais dans votre tête, vous réveillez les zones créatives en quelques secondes.</p>

            <h2 id="page-poubelle">4. La technique salvatrice de la « feuille poubelle »</h2>
            <p>Voici l'exercice le plus libérateur du monde : prenez une vraie feuille de brouillon moche, et écrivez en gros en haut au feutre noir : <strong>« FEUILLE POUBELLE OFFICIELLE »</strong>.</p>
            <p>Donnez-vous la mission sacrée de la remplir avec les idées les plus stupides, nulles, ridicules et grotesques possibles sur votre sujet. Plus c'est honteux, plus vous gagnez de points !</p>
            <p>Que se passe-t-il ? Votre peur du ridicule s'évapore d'un coup. Vous rigolez tout seul. Et là, surprise : au milieu de ce tas de bêtises volontaires, vous allez soudainement repérer un mot ou une idée brillante que vous n'auriez jamais osé formuler si vous aviez essayé de faire sérieux !</p>

            <h2 id="kit-secours-deblocage">5. Votre protocole de déblocage express en 15 minutes</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🚨 Le plan d'urgence en 3 temps</h3>
                <ol>
                    <li><strong>Minutes 1 à 5 (Déconnexion totale) :</strong> Éloignez-vous immédiatement de votre table de travail. Buvez un grand verre d'eau et étirez-vous comme un chat. Interdiction de penser au projet !</li>
                    <li><strong>Minutes 6 à 10 (La douche sensorielle) :</strong> Regardez 5 choses bleues autour de vous, touchez 3 textures différentes, écoutez 3 bruits lointains. Ça ramène votre cerveau dans le présent.</li>
                    <li><strong>Minutes 11 à 15 (Le redémarrage minuscule) :</strong> Revenez et écrivez une seule phrase toute simple, sans vous soucier de la suite. Bravo : la glace est brisée, le fleuve coule à nouveau !</li>
                </ol>
            </div>
  `
});

// ============================================================================
// ARTICLE 18 : Construire une routine de réflexion personnelle
// ============================================================================
updateArticle('routine-reflexion-personnelle.html', {
  lead: `La vie moderne ressemble souvent à un toboggan aquatique géant : on s'élance le lundi matin, ça va à deux cents à l'heure, les cours, les devoirs, les messages, les devoirs, les contrôles, et hop ! On atterrit le dimanche soir dans le bassin en se demandant où est passée la semaine sans avoir eu le temps de respirer. Si vous ne prenez jamais le temps de vous asseoir pour faire le point sur ce que vous vivez, vous devenez comme une feuille emportée par le vent. Créer une petite routine de réflexion personnelle, ce n'est pas devenir un vieux sage barbu en toge blanche : c'est juste s'offrir un rendez-vous secret avec la personne la plus importante de votre vie... vous-même !`,
  toc: [
    { id: "pourquoi-faire-pause", title: "1. Pourquoi nous avons besoin de notre « sas de décompression »" },
    { id: "monologue-interieur", title: "2. Transformer son bazar mental en clarté limpide" },
    { id: "rituel-dimanche-soir", title: "3. Le quart d'heure d'or du dimanche soir" },
    { id: "trois-questions-essentielles", title: "4. Les trois questions du bilan sans prise de tête" },
    { id: "boussole-perso", title: "5. Votre kit de démarrage pour devenir le capitaine de votre vie" }
  ],
  bodyHtml: `
            <h2 id="pourquoi-faire-pause">1. Pourquoi nous avons besoin de notre « sas de décompression »</h2>
            <p>Imaginez un explorateur qui traverse une jungle épaisse avec sa machette. Il coupe les lianes avec acharnement toute la journée sans s'arrêter une seconde pour boire ou regarder le ciel. Au bout de trois jours, un ami monte au sommet d'un grand arbre, regarde à l'horizon et lui crie : <em>« Hé ! Tu coupes super bien... mais on va dans la mauvaise direction depuis le début ! »</em></p>
            <p>Prendre un moment de réflexion personnelle chaque semaine, c'est exactement ça : c'est <strong>grimper dans l'arbre</strong>. C'est vérifier si vous marchez vers ce qui vous rend heureux, ou si vous êtes juste en train de courir comme un hamster dans sa roue parce que tout le monde court autour de vous.</p>

            <h2 id="monologue-interieur">2. Transformer son bazar mental en clarté limpide</h2>
            <p>Quand des émotions, des doutes ou des contrariétés restent enfermés dans votre tête, ils ont tendance à gonfler comme du pop-corn au micro-ondes. Un petit reproche d'un professeur devient une catastrophe nationale, et un retard sur un devoir se transforme en certitude que votre avenir est gâché.</p>
            <p>Dès que vous prenez un stylo et que vous écrivez ces soucis noir sur blanc sur une feuille, un miracle psychologique se produit : <strong>l'émotion sort de votre corps</strong>. Elle n'est plus à l'intérieur de vous, elle est posée sur la table devant vous. Et là, vous la regardez et vous vous dites : <em>« En fait, ce n'est pas si grave que ça, je peux régler ça en 20 minutes ! »</em></p>

            <h2 id="rituel-dimanche-soir">3. Le quart d'heure d'or du dimanche soir</h2>
            <p>Le dimanche vers 18h, beaucoup de personnes ressentent le fameux « blues du dimanche soir » : le stress de la reprise, les devoirs pas finis, la flemme du lundi matin. Pour transformer ce moment morose en rampe de lancement stimulante, instaurez votre <strong>quart d'heure d'or</strong> :</p>
            <ul>
                <li>Mettez une boisson chaude ou un goûter sympa sur votre table.</li>
                <li>Mettez une musique douce sans paroles.</li>
                <li>Prenez votre carnet préféré et fermez tout le reste.</li>
            </ul>
            <p>En seulement 15 minutes, vous allez vider la corbeille de la semaine passée et préparer la semaine à venir. Le lundi matin au réveil, pendant que les autres seront dans le brouillard complet, vous serez serein, lucide et déjà prêt à passer à l'action !</p>

            <h2 id="trois-questions-essentielles">4. Les trois questions du bilan sans prise de tête</h2>
            <p>Pas besoin d'écrire un roman de 40 pages chaque semaine : posez-vous simplement ces 3 questions limpides :</p>
            <ol>
                <li><strong>Quelles ont été mes 3 plus belles victoires de la semaine ?</strong> (Même minuscules : avoir réussi un bon plat, aidé un ami, ou avoir enfin rangé son tiroir de bureau). Célébrez vos progrès !</li>
                <li><strong>Qu'est-ce qui a été difficile ou frustrant ?</strong> (Sans vous culpabiliser : qu'est-ce qui m'a pris de l'énergie ou mis en colère ?).</li>
                <li><strong>Quelle est la leçon pour la semaine prochaine ?</strong> (<em>« La prochaine fois, je ne commencerai pas mon exposé à minuit la veille »</em>).</li>
            </ol>

            <h2 id="boussole-perso">5. Votre kit de démarrage pour devenir le capitaine de votre vie</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">⚓ La boussole de la semaine</h3>
                <p>Pour la semaine qui arrive, choisissez <strong>une seule grande priorité</strong> qui ferait de cette semaine une réussite si vous l'accomplissiez :</p>
                <p style="font-weight: bold; color: var(--electric-blue); font-size: var(--fs-md);">« Cette semaine, ma victoire numéro 1 sera : ______________ »</p>
                <p>Écrivez-la sur un post-it collé sur votre écran ou au-dessus de votre lit. Même si la semaine est pleine d'imprévus, tant que vous tenez ce cap, vous avancez comme un chef !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 19 : Techniques de visualisation pour concrétiser un projet
// ============================================================================
updateArticle('techniques-visualisation-projet.html', {
  lead: `Fermez les yeux deux secondes et imaginez que vous croquez à pleines dents dans un gros citron jaune bien frais et bien acide. Que se passe-t-il dans votre bouche ? Vous commencez à saliver abondamment, et votre visage fait une petite grimace ! Pourtant, il n'y a aucun citron devant vous. Pourquoi votre corps réagit-il ainsi ? Parce que votre cerveau a du mal à faire la différence entre une expérience réelle et une expérience vivement imaginée. Cette particularité incroyable de notre système nerveux porte un nom : la visualisation. Utilisée par les astronautes, les athlètes olympiques et les grands artistes, elle est votre simulateur de vol secret pour réussir tout ce que vous entreprenez.`,
  toc: [
    { id: "simulateur-de-vol-mental", title: "1. Votre simulateur de vol mental intérieur" },
    { id: "piege-de-la-pensee-magique", title: "2. Le grand piège : visualiser la victoire ne suffit pas !" },
    { id: "visualiser-le-film-complet", title: "3. La méthode WOOP : visualiser aussi les galères et les obstacles" },
    { id: "cinema-5-sens", title: "4. Allumer le cinéma intérieur en haute définition (les 5 sens)" },
    { id: "defi-visualisation-express", title: "5. Votre séance guidée de 3 minutes avant un défi important" }
  ],
  bodyHtml: `
            <h2 id="simulateur-de-vol-mental">1. Votre simulateur de vol mental intérieur</h2>
            <p>Quand les pilotes de chasse ou les astronautes apprennent à piloter une fusée, on ne les jette pas directement dans l'espace avec les clés en leur disant : <em>« Bonne chance, essaie de ne rien casser ! »</em></p>
            <p>Ils passent des centaines d'heures dans des <strong>simulateurs ultra-réalistes</strong> pour répéter chaque geste, anticiper les pannes et habituer leur corps à réagir avec sang-froid. Votre cerveau possède son propre simulateur de vol gratuit, intégré entre vos deux oreilles : votre imagination !</p>
            <p>Des expériences en neurosciences ont montré que s'imaginer au piano en train de jouer un morceau active exactement les mêmes zones cérébrales motrices que si vos doigts touchaient réellement les touches d'ivoire. Vous pouvez littéralement vous entraîner mentalement dans votre lit avant un match ou un examen oral !</p>

            <h2 id="piege-de-la-pensee-magique">2. Le grand piège : visualiser la victoire ne suffit pas !</h2>
            <p>Attention au piège de certains livres un peu naïfs qui vous disent : <em>« Imagine que tu as 20/20, visualise ta coupe en or, et l'univers t'apportera le succès sur un plateau d'argent ! »</em></p>
            <p>C'est ce qu'on appelle la pensée magique, et les études de la psychologue Gabriele Oettingen ont prouvé que ça produit l'effet inverse : quand vous vous imaginez déjà en train de lever le trophée en jubilant, votre cerveau croit que la mission est déjà finie ! Votre niveau d'énergie baisse, vous ne travaillez plus et vous ratez votre contrôle.</p>
            <p>Le secret des vrais champions ? Ils ne visualisent pas seulement la ligne d'arrivée : <strong>ils visualisent le chemin, la sueur et l'effort</strong> nécessaires pour y arriver !</p>

            <h2 id="visualiser-le-film-complet">3. La méthode WOOP : visualiser les obstacles pour les pulvériser</h2>
            <p>Pour rendre la visualisation indestructible, utilisez le protocole <strong>WOOP</strong> (Wish, Outcome, Obstacle, Plan) :</p>
            <ul>
                <li><strong>W (Wish - Le Vœu) :</strong> Quel est mon objectif clair ? (Exemple : <em>« Réussir mon exposé de français mardi prochain »</em>).</li>
                <li><strong>O (Outcome - Le Résultat) :</strong> Qu'est-ce que je ressentirai quand ce sera réussi ? (Le soulagement, la fierté, les félicitations).</li>
                <li><strong>O (Obstacle - Le Vrai Piège) :</strong> Qu'est-ce qui risque de me bloquer à l'intérieur de moi ? (Le trac qui me fait bégayer, ou la flemme de m'entraîner ce week-end).</li>
                <li><strong>P (Plan - La Riposte) :</strong> Définissez votre parade à l'avance : <em>« SI je sens mon cœur battre trop vite au début, ALORS je prendrai trois grandes respirations par le ventre en souriant au public avant de prononcer le premier mot. »</em></li>
            </ul>

            <h2 id="cinema-5-sens">4. Allumer le cinéma intérieur en haute définition</h2>
            <p>Une bonne visualisation n'est pas une image floue en noir et blanc : c'est une expérience immersive en 4D ! Plus vous activez vos 5 sens, plus votre cerveau enregistre le scénario comme un souvenir familier :</p>
            <ul>
                <li><strong>La vue :</strong> Voyez les détails de la pièce, les visages attentifs, la couleur de vos notes.</li>
                <li><strong>L'ouïe :</strong> Entendez le son clair et assuré de votre voix, le silence respectueux dans la salle.</li>
                <li><strong>Le toucher :</strong> Sentez la table sous vos mains, la texture de votre stylo, la fraîcheur de l'air.</li>
            </ul>

            <h2 id="defi-visualisation-express">5. Votre séance guidée de 3 minutes avant un défi important</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🧘‍♂️ La répétition générale flash</h3>
                <p>La veille d'une épreuve ou d'un moment stressant :</p>
                <ol>
                    <li>Asseyez-vous confortablement, fermez les yeux et respirez calmement pendant 30 secondes.</li>
                    <li>Faites défiler le film de l'événement dans votre tête du début à la fin, comme si vous y étiez.</li>
                    <li>Imaginez un petit imprévu qui survient (vous perdez vos mots 3 secondes), et regardez-vous le surmonter avec calme et élégance.</li>
                </ol>
                <p>Le lendemain, quand vous serez devant l'épreuve, votre cerveau se dira : <em>« Ah oui, je connais déjà cet endroit, on l'a déjà réussi hier ! »</em> Tout devient fluide et naturel.</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 20 : Choisir une vie créative plutôt que d'attendre un prétendu talent
// ============================================================================
updateArticle('vie-creative-plutot-attendre-talent.html', {
  lead: `« Il a tellement de talent ! » C'est sans doute le compliment le plus empoisonné qu'on puisse faire à quelqu'un. Parce qu'en creux, cela sous-entend que si vous n'êtes pas né avec une étiquette dorée collée sur le front, vous êtes condamné à rester toute votre vie un simple spectateur passif des exploits des autres. C'est faux, archifaux et profondément libérateur ! Choisir de mener une vie créative n'a rien à voir avec le fait de devenir une superstar mondiale ou de gagner des millions : c'est simplement refuser de vivre sa vie en spectateur anesthésié. C'est choisir d'être celui qui fabrique, qui ose, qui tente et qui s'amuse. Embarquons ensemble pour la plus belle des aventures humaines.`,
  toc: [
    { id: "poison-du-talent", title: "1. Pourquoi le mot « talent » est une cage dorée" },
    { id: "createur-vs-consommateur", title: "2. Consommateur passif contre bâtisseur enthousiaste" },
    { id: "courage-avant-confiance", title: "3. Le courage vient toujours AVANT la confiance" },
    { id: "vie-d-artisan-joyeux", title: "4. L'artisan joyeux : le plaisir du geste quotidien" },
    { id: "manifeste-merlin", title: "5. Le manifeste de Merlin pour votre vie créative" }
  ],
  bodyHtml: `
            <h2 id="poison-du-talent">1. Pourquoi le mot « talent » est une cage dorée</h2>
            <p>Quand on dit d'un jeune de 13 ans qu'il a « un talent inné », on lui colle sans le savoir un fardeau colossal sur les épaules : dès qu'il rencontre une difficulté ou qu'il rate un concours, il s'effondre en se disant que son talent l'a quitté. Et tous ceux à qui on dit : <em>« Toi, tu n'es pas manuel »</em> ou <em>« Tu n'es pas fait pour les maths »</em> finissent par baisser les bras et se résigner pour toujours.</p>
            <p>La psychologue de Stanford Carol Dweck a passé sa vie à étudier la différence entre l'<strong>état d'esprit fixe</strong> (croire que l'intelligence est gravée dans le marbre) et l'<strong>état d'esprit de développement</strong> (comprendre que le cerveau est malléable et grandit avec l'effort). Ceux qui accomplissent des merveilles ne sont pas les enfants « surdoués » du départ : ce sont ceux qui ont développé le plaisir d'apprendre, de s'entraîner et de rebondir après chaque gamelle !</p>

            <h2 id="createur-vs-consommateur">2. Consommateur passif contre bâtisseur enthousiaste</h2>
            <p>Regardez autour de vous : 90 % des gens passent leur vie en mode <strong>consommateur</strong>. Ils regardent les vidéos des autres, écoutent la musique des autres, jouent aux jeux des autres, râlent sur les décisions des autres. C'est confortable, mais c'est profondément frustrant à la longue.</p>
            <p>La bascule magique se produit le jour où vous décidez de passer de l'autre côté de la barrière : devenir un <strong>créateur</strong>. Ce n'est pas forcément écrire une saga de 10 tomes ! C'est :</p>
            <ul>
                <li>Cuisiner un gâteau original au lieu d'acheter un biscuit industriel.</li>
                <li>Coder un petit jeu en Python au lieu de juste jouer.</li>
                <li>Écrire une lettre touchante à un proche au lieu de lui envoyer un simple emoji pouce levé.</li>
                <li>Organiser un tournoi ou monter un club au lieu d'attendre que quelqu'un d'autre le fasse.</li>
            </ul>
            <p>Dès que vous créez quelque chose, même modeste, vous ajoutez de la beauté et de la valeur au monde. Et ça, ça vous donne une confiance en vous qu'aucun jeu vidéo ne pourra jamais vous apporter.</p>

            <h2 id="courage-avant-confiance">3. Le courage vient toujours AVANT la confiance</h2>
            <p>Beaucoup de gens disent : <em>« Dès que j'aurai confiance en moi, je me lancerai ! J'ouvrirai ma chaîne, j'écrirai mon histoire, je prendrai la parole en public. »</em></p>
            <p>Mauvaise nouvelle : vous pouvez attendre jusqu'à 95 ans, la confiance ne viendra jamais toute seule sur votre canapé ! La confiance en soi n'est pas un prérequis pour agir : <strong>c'est la récompense qu'on obtient APRÈS avoir agi avec courage</strong>.</p>
            <p>Avoir du courage, ce n'est pas ne pas avoir peur : c'est avoir les genoux qui tremblent, avoir le cœur qui bat la chamade... et y aller quand même ! Chaque fois que vous faites quelque chose malgré la trouille, vous gagnez un point d'expérience géant dans votre jeu vidéo intérieur.</p>

            <h2 id="vie-d-artisan-joyeux">4. L'artisan joyeux : le plaisir du geste quotidien</h2>
            <p>Ne mesurez jamais la valeur de votre travail au nombre de likes, de partages ou de félicitations que vous recevez. Les algorithmes sont capricieux et les modes changent en trois jours.</p>
            <p>Soyez comme un <strong>ébéniste passionné dans son atelier</strong> : son plaisir immense, c'est l'odeur du bois, la précision du rabot, la douceur de la planche qu'il ponce avec amour. Quand vous créez pour le plaisir pur de fabriquer quelque chose de beau et de vous dépasser, vous êtes invincible. Personne ne peut vous enlever ce bonheur-là.</p>

            <h2 id="manifeste-merlin">5. Le manifeste de Merlin pour votre vie créative</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">📜 Vos 4 commandements d'explorateur</h3>
                <ol>
                    <li><strong>Soyez curieux de tout :</strong> Il n'y a pas de passion idiote. Ce qui vous intéresse sincèrement a toujours de la valeur.</li>
                    <li><strong>N'ayez plus jamais honte de vos débuts maladroits :</strong> Tout maître a d'abord été une catastrophe sur pattes.</li>
                    <li><strong>Pratiquez un peu chaque jour :</strong> 15 minutes régulières valent 100 fois mieux qu'une nuit blanche de panique.</li>
                    <li><strong>Partagez avec le cœur :</strong> Ce que vous créez est fait pour apporter de la lumière, du sourire ou de la réflexion aux autres.</li>
                </ol>
                <p style="font-weight: bold; color: var(--electric-blue); font-size: var(--fs-md); margin-top: 1rem; text-align: center;">
                    « Ne vous contentez pas d'apprendre davantage. Apprenez à mieux penser, à mieux comprendre, à mieux créer et à mieux agir. »<br>— Merlin SIMO
                </p>
            </div>
  `
});

console.log('Batch 4 rewritten successfully!');
