const { updateArticle } = require('./rewrite_helper');

// ============================================================================
// ARTICLE 6 : L'ennui, le silence et la marche : les terreaux des idées
// ============================================================================
updateArticle('ennui-silence-marche-idees.html', {
  lead: `Que faites-vous dès que vous avez 30 secondes d'attente à un arrêt de bus, dans une file d'attente ou aux toilettes ? Vous dégainez votre smartphone plus vite que votre ombre pour faire défiler des vidéos ! On a tellement peur du vide qu'on préfère regarder un inconnu couper du savon en tranche plutôt que de rester seul avec ses pensées. Et pourtant... les plus grands coups de génie de l'humanité ne sont jamais nés devant un écran surchargé : ils sont nés pendant que quelqu'un s'ennuyait fermement en regardant tomber la pluie ou en marchant sans but. Si vous voulez retrouver votre créativité, réapprenez à vous ennuyer !`,
  toc: [
    { id: "peur-du-vide", title: "1. Pourquoi on a une peur bleue de ne rien faire" },
    { id: "cerveau-arriere-plan", title: "2. Le mode « arrière-plan » : quand le cerveau travaille en douce" },
    { id: "secret-marche", title: "3. La marche à pied : le meilleur booster de neurones" },
    { id: "douche-eureka", title: "4. Pourquoi nos meilleures idées naissent sous la douche" },
    { id: "recette-silence", title: "5. Votre pause « 10 minutes d'ennui doré »" }
  ],
  bodyHtml: `
            <h2 id="peur-du-vide">1. Pourquoi on a une peur bleue de ne rien faire</h2>
            <p>Aujourd'hui, ne rien faire est devenu presque un délit. Dès qu'un moment de silence s'installe, on se sent bizarre, mal à l'aise, et notre main plonge automatiquement dans notre poche pour attraper notre écran. On remplit chaque seconde de notre journée avec du bruit, de la musique, des posts et des notifications.</p>
            <p>Mais réfléchissez une seconde : si vous remplissez une valise à ras bord avec du linge sale jusqu'à ce que la fermeture éclair craque, comment voulez-vous y faire entrer le moindre souvenir précieux de vacances ? Votre cerveau, c'est pareil. Si vous le gavez d'informations H24, il n'a plus un seul millimètre d'espace libre pour fabriquer une idée à lui.</p>

            <h2 id="cerveau-arriere-plan">2. Le mode « arrière-plan » : quand le cerveau travaille en douce</h2>
            <p>En neurosciences, les chercheurs ont découvert un truc fascinant qu'ils appellent le <em>« réseau du mode par défaut »</em>. Pour faire simple : quand vous arrêtez de vous concentrer sur une tâche précise et que vous laissez votre regard flotter dans le vide, votre cerveau ne s'éteint pas du tout !</p>
            <p>Au contraire : c'est précisément à ce moment-là qu'il allume son mode <strong>« chef cuisinier en coulisses »</strong>. Il commence à connecter les souvenirs de la veille avec un cours d'il y a trois mois, à trier les émotions, et à mijoter des solutions aux problèmes qui vous tracassaient. L'ennui n'est pas une perte de temps : c'est l'incubateur de vos idées de génie !</p>

            <h2 id="secret-marche">3. La marche à pied : le meilleur booster de neurones</h2>
            <p>De Steve Jobs à Ludwig van Beethoven, en passant par Albert Einstein et Victor Hugo : devinez quelle était leur arme absolue quand ils bloquaient sur un problème ? Ils partaient marcher dehors, seuls, sans musique dans les oreilles.</p>
            <p>Quand vous marchez à un rythme tranquille, votre cœur pompe un peu plus d'oxygène vers le cerveau, vos yeux bougent de gauche à droite (ce qui apaise l'amygdale, la zone du stress), et le rythme régulier de vos pas berce votre esprit. Pas besoin de gravir l'Everest : un tour de quartier de 15 minutes suffit à débloquer une dissert' ou un dessin sur lequel vous séchiez depuis deux heures.</p>

            <h2 id="douche-eureka">4. Pourquoi nos meilleures idées naissent sous la douche</h2>
            <p>Vous avez déjà remarqué ? Vous passez l'après-midi entier à vous arracher les cheveux sur un problème de maths ou une intro de texte sans rien trouver. Vous abandonnez dépité, vous allez prendre votre douche, et là, au moment précis où vous vous mettez du shampoing sur la tête : <em>PAF !</em> L'idée limpide vous apparaît comme par magie !</p>
            <p>Pourquoi ? Parce que sous l'eau chaude, vous êtes détendu, vous ne forcez rien, et votre cerveau relâche enfin son étau. L'Eurêka d'Archimède dans sa baignoire n'était pas une légende : la détente corporelle est la clé qui ouvre le coffre de l'intuition.</p>

            <h2 id="recette-silence">5. Votre pause « 10 minutes d'ennui doré »</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🛋️ L'expérience de la fenêtre</h3>
                <p>Aujourd'hui, tentez cette expérience toute simple mais radicale : asseyez-vous devant une fenêtre ou sur un banc pendant <strong>10 minutes chrono</strong>. Pas de téléphone, pas d'écouteurs, pas de livre. Regardez juste les nuages passer, les passants marcher ou les feuilles bouger dans les arbres. Au début, votre cerveau va râler comme un gamin privé de dessert. Puis, après 3 minutes, un calme profond va s'installer... et vous verrez les idées originales commencer à remonter à la surface !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 7 : L'esprit critique au service de l'imagination
// ============================================================================
updateArticle('esprit-critique-imagination.html', {
  lead: `Sur Internet et sur les réseaux, tout le monde a un avis sur tout, des théories plus folles les unes que les autres circulent en 3 secondes, et on a vite fait de gober des bêtises avec un grand sourire. Mais qu'est-ce que c'est vraiment que « l'esprit critique » ? Ce n'est pas être le rabat-joie de service qui critique tout et se moque de tout le monde ! C'est être comme un détective d'élite qui refuse de se faire manipuler, tout en gardant une curiosité d'enfant pour inventer de nouvelles solutions. Venez, on affine votre détecteur de mensonges mental !`,
  toc: [
    { id: "pas-un-rabat-joie", title: "1. Être critique ne veut pas dire être aigri !" },
    { id: "detecteur-bobards", title: "2. Le filtre anti-bobards : les 3 questions du détective" },
    { id: "biais-confirmation", title: "3. Le piège du miroir : croire ce qui nous arrange" },
    { id: "imaginer-autrement", title: "4. Douter pour mieux créer" },
    { id: "exercice-avocat-diable", title: "5. L'entraînement de l'avocat du diable" }
  ],
  bodyHtml: `
            <h2 id="pas-un-rabat-joie">1. Être critique ne veut pas dire être aigri !</h2>
            <p>On confond souvent deux mots : <em>être critique</em> (avoir l'esprit rigoureux) et <em>être critiqueur</em> (le mec grincheux au fond de la classe qui dit que tout est nul). L'esprit critique authentique n'a rien à voir avec la méchanceté : c'est un bouclier pour protéger votre liberté de penser !</p>
            <p>Quelqu'un qui n'a aucun esprit critique avale tout ce qu'on lui raconte : les fausses rumeurs sur TikTok, les promesses miracles des influenceurs, ou les préjugés faciles. Avoir l'esprit critique, c'est simplement refuser qu'on pense à votre place.</p>

            <h2 id="detecteur-bobards">2. Le filtre anti-bobards : les 3 questions du détective</h2>
            <p>Chaque fois qu'on vous balance une affirmation sensationnelle (sur les réseaux, aux infos ou même dans la cour de récré), activez votre radar avec ces 3 questions réflexes :</p>
            <ul>
                <li><strong>1. Qui me raconte ça ?</strong> Est-ce un expert reconnu du sujet, ou juste quelqu'un qui cherche à faire des vues, du buzz ou à me vendre quelque chose ?</li>
                <li><strong>2. Où sont les preuves ?</strong> Y a-t-il une étude sérieuse, des chiffres vérifiables, ou est-ce juste <em>« un ami de mon cousin qui a dit que »</em> ?</li>
                <li><strong>3. Et si c'était plus nuancé ?</strong> La réalité est rarement blanche ou noire. Dès que quelqu'un vous dit : <em>« C'est 100 % génial »</em> ou <em>« C'est 100 % toxique »</em>, méfiez-vous immédiatement !</li>
            </ul>

            <h2 id="biais-confirmation">3. Le piège du miroir : croire ce qui nous arrange</h2>
            <p>Il existe un vilain tour de passe-passe que notre cerveau adore s'auto-infliger : le <strong>biais de confirmation</strong>. Quand on est convaincu de quelque chose, nos yeux ne remarquent que les exemples qui nous donnent raison, et ignorent soigneusement tout ce qui nous contredit.</p>
            <p>Si vous êtes persuadé que les mardis vous portent la poisse, dès qu'il pleut ou que vous oubliez votre stylo un mardi, vous allez crier : <em>« Tu vois ! J'avais raison ! »</em> Par contre, tous les mardis géniaux où vous avez eu des bonnes notes, vous les oubliez en deux secondes. Les esprits vraiment intelligents font l'effort courageux de chercher ce qui pourrait prouver qu'ils ont tort : c'est la seule façon d'apprendre pour de vrai !</p>

            <h2 id="imaginer-autrement">4. Douter pour mieux créer : la graine des grandes inventions</h2>
            <p>Pourquoi l'esprit critique est-il le meilleur ami de l'imagination ? Parce que pour inventer quelque chose de nouveau, il faut d'abord oser douter de ce que tout le monde considère comme une vérité intouchable !</p>
            <p>Pendant des siècles, tout le monde pensait que la Terre était plate et au centre de l'univers. Si Copernic et Galilée n'avaient pas eu l'esprit critique de dire : <em>« Attendez voir, regardons les étoiles d'un peu plus près »</em>, on en serait encore à avoir peur de tomber du bord de la planète ! Oser remettre en question une habitude, c'est la première étincelle de toute innovation.</p>

            <h2 id="exercice-avocat-diable">5. L'entraînement de l'avocat du diable</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🎭 Le jeu du changement de camp</h3>
                <p>Prenez un sujet sur lequel vous avez un avis bien tranché (par exemple : <em>« Les uniformes au collège, c'est une mauvaise idée »</em> ou <em>« Les jeux vidéo rendent violent »</em>). Pendant 5 minutes, forcez-vous à trouver <strong>trois arguments solides et intelligents en faveur du camp adverse</strong> !</p>
                <p>C'est un exercice de gymnastique mentale phénoménal : il développe votre empathie, affine votre pensée et vous rend 10 fois plus fort dans n'importe quel débat !</p>
            </div>
  `
});

// ============================================================================
// ARTICLE 8 : Les habitudes quotidiennes des esprits créatifs
// ============================================================================
updateArticle('habitudes-esprits-creatifs.html', {
  lead: `On s'imagine souvent les artistes, les inventeurs et les grands créateurs comme des extraterrestres un peu fous, qui attendent qu'une muse descende du ciel à 3h du matin pour leur souffler un chef-d'œuvre entre deux tasses de café. Spoiler : c'est une légende de cinéma ! Dans la vraie vie, les personnes les plus créatives du monde sont souvent des maniaques des petites habitudes quotidiennes. La créativité n'est pas un feu d'artifice imprévisible : c'est une petite flamme qu'on alimente chaque jour avec des rituels tout simples. Découvrons ensemble les secrets de fabrication des esprits brillants.`,
  toc: [
    { id: "mythe-eclair-genie", title: "1. Le mythe de l'éclair de génie hollywoodien" },
    { id: "rituels-petits-pas", title: "2. Les rituels minuscules qui changent tout" },
    { id: "capturer-papillons", title: "3. La chasse aux papillons : ne laissez aucune idée s'échapper" },
    { id: "hygiene-sommeil", title: "4. Le sommeil : quand la nuit range votre chambre mentale" },
    { id: "menu-quotidien", title: "5. Votre kit de 3 habitudes créatives à adopter dès demain" }
  ],
  bodyHtml: `
            <h2 id="mythe-eclair-genie">1. Le mythe de l'éclair de génie hollywoodien</h2>
            <p>Dans les films, on adore montrer le héros compositeur qui entend une voix magique et écrit une symphonie en 10 minutes sur un coin de nappe en papier. C'est très romantique, mais c'est faux !</p>
            <p>Le grand écrivain Stephen King s'assoit tous les matins à son bureau à 8h tapantes, qu'il pleuve, qu'il vente ou qu'il n'ait pas envie, et écrit ses 2 000 mots quotidiens avant midi. Wolfgang Amadeus Mozart s'entraînait au piano depuis l'âge de 4 ans pendant des heures chaque jour. L'inspiration ne vient pas quand on l'attend les bras croisés sur le canapé : <strong>elle vient quand elle voit que vous êtes déjà au travail !</strong></p>

            <h2 id="rituels-petits-pas">2. Les rituels minuscules qui changent tout</h2>
            <p>Le problème avec les grandes résolutions (<em>« À partir de demain, je dessine 3 heures tous les jours et je lis un livre par semaine ! »</em>), c'est qu'au bout de 4 jours, on est épuisé et on abandonne tout.</p>
            <p>Les pros utilisent la magie des <strong>micro-habitudes</strong> :</p>
            <ul>
                <li>Écrire <strong>5 lignes</strong> par jour au réveil. Pas une page entière : juste 5 lignes.</li>
                <li>Faire <strong>un seul croquis</strong> rapide dans son carnet pendant le trajet en bus.</li>
                <li>Apprendre <strong>un seul mot nouveau</strong> de vocabulaire par jour.</li>
            </ul>
            <p>Ça a l'air de rien ? Au bout d'un an, vous avez écrit 1 800 lignes, dessiné 365 croquis et enrichi votre vocabulaire de 365 concepts ! La régularité bat le talent à plates coutures, chaque jour de la semaine.</p>

            <h2 id="capturer-papillons">3. La chasse aux papillons : capturez vos idées avant qu'elles ne s'envolent</h2>
            <p>Une bonne idée est aussi fragile et rapide qu'un papillon sauvage. Elle vous traverse l'esprit pendant que vous faites la vaisselle, que vous marchez dans la rue ou que vous discutez avec un pote. Vous vous dites : <em>« Super idée, je m'en souviendrai ce soir ! »</em></p>
            <p>Grosse erreur : 10 minutes plus tard, elle a totalement disparu dans les limbes de votre mémoire. Les créatifs ont toujours avec eux un filet à papillons : l'application « Notes » de leur téléphone ou un petit carnet de poche. Notez l'idée immédiatement, en deux mots. Vous aurez tout le temps de la peaufiner plus tard !</p>

            <h2 id="hygiene-sommeil">4. Le sommeil : quand la nuit range votre chambre mentale</h2>
            <p>Vous pensez que dormir, c'est du temps perdu ? Bien au contraire ! Pendant que vous dormez, votre cerveau est une véritable ruche en ébullition :</p>
            <ul>
                <li>Il nettoie les toxines accumulées dans la journée.</li>
                <li>Il transfère les souvenirs importants de la mémoire vive vers la mémoire à long terme.</li>
                <li>Pendant les rêves (le sommeil paradoxal), il crée des connexions farfelues et poétiques entre des choses qui ne s'étaient jamais croisées la veille.</li>
            </ul>
            <p>Si vous passez vos nuits à jouer en ligne jusqu'à 3h du matin, vous privez votre cerveau de son équipe de ménage nocturne. Bien dormir, c'est littéralement se réveiller avec des neurones plus affûtés.</p>

            <h2 id="menu-quotidien">5. Votre kit de 3 habitudes créatives à adopter dès demain</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">⚡ Le rituel des 3 « C »</h3>
                <ol>
                    <li><strong>Capturer :</strong> Notez au moins une idée bizarre ou amusante entendue ou pensée dans la journée.</li>
                    <li><strong>Créer :</strong> Accordez 10 minutes à créer quelque chose de vos mains sans juger le résultat (un dessin, un paragraphe, une recette, une mélodie).</li>
                    <li><strong>Célébrer :</strong> À la fin de la journée, dites-vous : <em>« Aujourd'hui, j'ai fabriqué quelque chose qui n'existait pas ce matin. »</em> Et souriez !</li>
                </ol>
            </div>
  `
});

// ============================================================================
// ARTICLE 9 : Passer d'une idée floue à une première version imparfaite
// ============================================================================
updateArticle('idee-premiere-version-imparfaite.html', {
  lead: `Vous avez déjà ressenti cette angoisse devant une page Word toute blanche où le curseur clignote comme un feu de détresse ? Ou devant une feuille de dessin immaculée que vous avez peur de gâcher avec un coup de crayon maladroit ? On a tous cette voix dans la tête qui nous murmure : « Attention, si ce n'est pas parfait du premier coup, tout le monde va se moquer de toi ! » Cette voix est une menteuse. Tout ce qui est grand, beau et inspirant dans ce monde a d'abord été un premier brouillon moche, maladroit et plein de fautes. Apprenons ensemble l'art libérateur du « premier jet imparfait ».`,
  toc: [
    { id: "terreur-page-blanche", title: "1. La terreur de la page blanche décryptée" },
    { id: "sculpteur-argile", title: "2. La métaphore du tas d'argile" },
    { id: "regard-interieur", title: "3. Bâillonnez votre juge intérieur" },
    { id: "methode-v1-crade", title: "4. La méthode du premier jet rapide et sale" },
    { id: "art-du-polissage", title: "5. Le secret : la magie est dans la réécriture" }
  ],
  bodyHtml: `
            <h2 id="terreur-page-blanche">1. La terreur de la page blanche décryptée</h2>
            <p>Pourquoi la page blanche fait-elle si peur ? Parce qu'une feuille vierge contient tous les possibles. Elle est propre, silencieuse, idéale. Dès que vous posez le premier mot, vous réduisez cette infinité de possibilités à une seule phrase... et souvent, cette phrase ne ressemble pas au feu d'artifice que vous aviez dans la tête.</p>
            <p>Rappelez-vous toujours de cette règle universelle : <strong>aucun écrivain, aucun réalisateur, aucun concepteur de jeu n'écrit directement son chef-d'œuvre.</strong> L'écrivain Ernest Hemingway, prix Nobel de littérature, disait sans détour : <em>« Le premier jet de n'importe quoi est toujours nul. »</em> Si un géant de la littérature l'admettait avec le sourire, pourquoi vous mettre une pression pareille ?</p>

            <h2 id="sculpteur-argile">2. La métaphore du tas d'argile</h2>
            <p>Imaginez que vous voulez sculpter un magnifique dragon ou un vase superbe. Que devez-vous faire en premier ? Vous devez prendre un gros tas d'argile informe, humide et un peu dégoûtant, et le balancer avec fracas sur votre table de travail.</p>
            <p>À ce moment-là, est-ce que ça ressemble à un dragon ? Pas du tout ! Ça ressemble à une vieille motte de terre. Mais sans cette motte sur la table, vous ne pouvez rien pétrir, rien tailler, rien sculpter ! Votre premier jet, c'est exactement ça : ce n'est pas la statue finale, c'est juste la matière première que vous sortez de votre tête pour pouvoir enfin travailler dessus avec vos mains.</p>

            <h2 id="regard-interieur">3. Bâillonnez votre juge intérieur</h2>
            <p>Dans notre cerveau, il y a deux personnages qui doivent absolument travailler à des horaires différents :</p>
            <ul>
                <li><strong>Le Créateur fou :</strong> C'est l'enfant en vous qui imagine, qui délire, qui mélange les couleurs sans peur et qui jette les idées en vrac.</li>
                <li><strong>Le Rédacteur en chef :</strong> C'est l'adulte rigoureux qui vérifie l'orthographe, équilibre les phrases, coupe ce qui est trop long et met de l'ordre.</li>
            </ul>
            <p>La pire erreur du monde, c'est de laisser le Rédacteur en chef surveiller le Créateur pendant qu'il dessine ! Dès que le Créateur trace une ligne, le Rédacteur crie : <em>« C'est moche ! C'est trop grand ! C'est nul ! »</em> Résultat : le Créateur se recroqueville et abandonne. Donnez un congé au Rédacteur pendant que vous écrivez votre premier jet. Vous le rappellerez le lendemain pour faire le ménage !</p>

            <h2 id="methode-v1-crade">4. La méthode du premier jet rapide et décomplexé</h2>
            <p>Pour vaincre le blocage, mettez un minuteur de 15 minutes. Lancez-vous un défi : écrire le plus vite possible sans jamais utiliser la touche retour arrière (effacer est formellement interdit !). Si vous ne trouvez pas un mot, mettez des points d'interrogation ou écrivez [TRUC] et continuez d'avancer.</p>
            <p>L'important, c'est l'élan ! C'est comme faire du vélo : si vous vous arrêtez tous les deux mètres pour regarder si vos pneus sont bien ronds, vous tombez par terre. Pédalez, avancez, et vous ferez les réglages à l'arrivée.</p>

            <h2 id="art-du-polissage">5. Le secret : la magie est dans la réécriture</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">✨ La formule magique en 3 passages</h3>
                <p>Quand votre premier brouillon est posé, laissez-le reposer 24h sans y toucher (comme une pâte à gâteau). Puis revenez avec votre casquette d'artisan :</p>
                <ol>
                    <li><strong>Passage 1 (Le sécateur) :</strong> Supprimez les répétitions et les phrases qui n'apportent rien. Enlevez le gras !</li>
                    <li><strong>Passage 2 (La loupe) :</strong> Rendez les exemples plus vivants, remplacez les mots vagues par des images précises.</li>
                    <li><strong>Passage 3 (La musique) :</strong> Lisez votre texte à voix haute. Si vous trébuchez en lisant une phrase, coupez-la en deux phrases plus courtes. Votre texte va chanter !</li>
                </ol>
            </div>
  `
});

// ============================================================================
// ARTICLE 10 : Construire son identité créative et assumer son style
// ============================================================================
updateArticle('identite-creative-assumer-style.html', {
  lead: `Au collège et dans la vie de tous les jours, on a souvent tendance à vouloir se fondre dans la masse pour ne pas se faire remarquer : s'habiller pareil, écouter les mêmes musiques, répéter les mêmes répliques. Se faire remarquer, ça peut faire peur ! Mais quand il s'agit de créer, de réfléchir ou de monter un projet, c'est exactement l'inverse qui compte : ce qui vous rend précieux, c'est ce que vous avez d'unique, vos petits défauts bizarres et votre manière bien à vous de voir le monde. Comment trouve-t-on sa propre voix sans jouer un rôle ? On regarde ça ensemble en toute franchise.`,
  toc: [
    { id: "piege-du-clonage", title: "1. Le piège du clonage : pourquoi copier les autres ne suffit pas" },
    { id: "empreinte-digitale", title: "2. Votre empreinte digitale mentale" },
    { id: "assumer-ses-defauts", title: "3. Vos défauts sont souvent vos futurs super-pouvoirs" },
    { id: "recette-cocktail", title: "4. Le cocktail secret : voler comme un artiste" },
    { id: "boussole-interieure", title: "5. L'exercice de la boussole d'authenticité" }
  ],
  bodyHtml: `
            <h2 id="piege-du-clonage">1. Le piège du clonage : pourquoi copier les autres ne suffit pas</h2>
            <p>Quand on commence à dessiner, à écrire, à faire des vidéos ou à composer de la musique, on a tous envie de ressembler à son idole : <em>« Je veux dessiner exactement comme l'auteur de mon manga préféré »</em> ou <em>« Je veux faire des vidéos rythmées exactement comme mon youtubeur favori »</em>.</p>
            <p>C'est une étape normale et saine au tout début : on apprend en imitant, comme les bébés apprennent à parler en répétant ce qu'ils entendent. Mais le problème, c'est que le monde a déjà un Eiichiro Oda, une Billie Eilish ou un MrBeast ! Le monde n'a pas besoin d'une photocopie un peu pâle de quelqu'un d'autre : le monde attend de découvrir qui <strong>vous</strong> êtes vraiment.</p>

            <h2 id="empreinte-digitale">2. Votre empreinte digitale mentale</h2>
            <p>Personne sur cette planète n'a grandi exactement dans votre maison, avec vos parents, vos joies, vos peines, vos bêtises d'enfance et votre mélange très particulier de passions. Même si vous avez un frère jumeau, vos regards sur le monde sont différents !</p>
            <p>Votre <strong>style personnel</strong>, ce n'est pas un masque savant que vous achetez dans un magasin pour faire genre : c'est simplement le filtre naturel à travers lequel vous regardez la vie. Si dix personnes regardent un même chat assis sur un mur, un poète va voir un félin mystérieux, un ingénieur va analyser la physique de son équilibre, et un dessinateur va scruter l'ombre sous ses pattes. Votre regard est votre signature.</p>

            <h2 id="assumer-ses-defauts">3. Vos défauts sont souvent vos futurs super-pouvoirs</h2>
            <p>Connaissez-vous l'histoire du groupe de rock britannique <em>The Who</em> ou du légendaire guitariste Django Reinhardt ? Django avait perdu l'usage de deux de ses doigts de la main gauche dans un incendie. Incapable de jouer comme les autres guitaristes classiques, il a été forcé d'inventer une façon inédite de frotter ses cordes avec seulement deux doigts... créant ainsi le jazz manouche qui a révolutionné la musique mondiale !</p>
            <p>Ce que vous considérez aujourd'hui comme un handicap ou une maladresse (<em>« J'écris trop court »</em>, <em>« Mes dessins ne sont pas réalistes »</em>, <em>« Je parle trop vite »</em>) est souvent la graine de votre futur style. Les grands artistes sont ceux qui ont eu le culot d'assumer leurs singularités au lieu de les raboter pour ressembler aux autres.</p>

            <h2 id="recette-cocktail">4. Le cocktail secret : voler comme un artiste</h2>
            <p>L'écrivain Austin Kleon a écrit un petit livre génial intitulé <em>« Volez comme un artiste »</em>. Quelle est la différence entre un mauvais copieur et un créateur original ?</p>
            <ul>
                <li><strong>Le mauvais copieur :</strong> Il copie une seule personne. Tout le monde s'en aperçoit et c'est gênant.</li>
                <li><strong>Le grand créateur :</strong> Il s'inspire de <strong>vingt sources différentes</strong> ! Il prend un peu du sens du rythme de son rappeur préféré, un peu des couleurs d'un peintre japonais, un peu de l'humour de sa grand-mère et un peu de la rigueur d'un roman policier.</li>
            </ul>
            <p>Quand vous mélangez toutes ces influences dans votre propre shaker intérieur, le résultat ne ressemble à aucun d'entre eux : il ne ressemble qu'à vous !</p>

            <h2 id="boussole-interieure">5. L'exercice de la boussole d'authenticité</h2>
            <div style="background: var(--bg-surface); padding: var(--space-xl); border-radius: var(--radius-lg); border: 2px dashed var(--gold); margin: var(--space-xl) 0;">
                <h3 style="color: var(--gold-darker); margin-top: 0; font-size: var(--fs-lg);">🧭 Le test du sourire secret</h3>
                <p>La prochaine fois que vous finissez un texte, un devoir, un dessin ou une vidéo, posez-vous une seule question avant de le montrer à quiconque :</p>
                <p><em>« Est-ce que j'ai fait ça pour plaire à la galerie, ou est-ce qu'en le regardant, j'ai ce petit sourire secret qui me dit : "C'est tellement moi !" ? »</em></p>
                <p>Si vous ressentez ce petit sourire, gardez-le précieusement : vous venez de trouver votre voix.</p>
            </div>
  `
});

console.log('Batch 2 rewritten successfully!');
