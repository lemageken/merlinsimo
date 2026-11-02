const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, '..', 'site', 'articles');

const updates = [
    {
        files: [
            'apprendre-plus-vite-retenir.html',
            'developper-attention-distractions.html',
            'routine-reflexion-personnelle.html',
            'questions-puissantes-debloquer.html',
            'retrouver-creativite-bloque.html',
            'produire-idees-sans-inspiration.html',
            'penser-autrement-exercices.html'
        ],
        box: `
                <div class="product-callout">
                    <p class="product-callout-label">🧠 Méthode recommandée par Merlin SIMO</p>
                    <p><strong>Boostez votre Mémoire en 8 Jours</strong> — Le système pratique de 15 minutes par jour pour apprendre plus vite, retenir plus longtemps et ne plus oublier l'essentiel.</p>
                    <div style="margin-top: 0.5rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <a href="https://selar.com/0674970777" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: var(--electric-blue); color: #fff; padding: 0.4rem 1rem; font-size: var(--fs-xs);">Commander sur Selar →</a>
                        <a href="../boutique.html#boostez-votre-memoire" class="btn btn-secondary" style="padding: 0.4rem 1rem; font-size: var(--fs-xs);">Détails du programme ›</a>
                    </div>
                </div>`
    },
    {
        files: [
            'curiosite-projet-concret.html',
            'connexions-inattendues-domaines.html',
            'techniques-visualisation-projet.html',
            'identite-creative-assumer-style.html'
        ],
        box: `
                <div class="product-callout">
                    <p class="product-callout-label">🌟 Pour la famille & l'éducation</p>
                    <p><strong>Éveillez le Génie de votre Enfant</strong> — La méthode ÉCLAT de 15 minutes par jour pour apprendre, s'exprimer et grandir avec confiance.</p>
                    <div style="margin-top: 0.5rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <a href="https://selar.com/l11bp7g11v" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: var(--electric-blue); color: #fff; padding: 0.4rem 1rem; font-size: var(--fs-xs);">Commander sur Selar →</a>
                        <a href="../boutique.html#eveillez-genie-enfant" class="btn btn-secondary" style="padding: 0.4rem 1rem; font-size: var(--fs-xs);">Détails de l'ouvrage ›</a>
                    </div>
                </div>`
    },
    {
        files: [
            'vie-creative-plutot-attendre-talent.html',
            'echec-matiere-premiere-innovation.html',
            'idee-premiere-version-imparfaite.html'
        ],
        box: `
                <div class="product-callout" style="border-left-color: var(--coral);">
                    <p class="product-callout-label" style="color: var(--coral);">📦 Coffret Éducatif Intégral</p>
                    <p><strong>Mon Enfant Réussit (Pack Complet 3 en 1)</strong> — 100 vidéos éducatives + le livre « Éveillez le Génie de votre Enfant » + le programme « Boostez votre Mémoire en 8 Jours ».</p>
                    <div style="margin-top: 0.5rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <a href="https://selar.com/sov955h77r" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: var(--coral); color: #fff; padding: 0.4rem 1rem; font-size: var(--fs-xs);">Commander le Pack sur Selar →</a>
                        <a href="../boutique.html#pack-mon-enfant-reussit" class="btn btn-secondary" style="padding: 0.4rem 1rem; font-size: var(--fs-xs);">Détails du coffret ›</a>
                    </div>
                </div>`
    }
];

updates.forEach(u => {
    u.files.forEach(filename => {
        const filePath = path.join(articlesDir, filename);
        if (!fs.existsSync(filePath)) return;
        let content = fs.readFileSync(filePath, 'utf8');

        // Regex to replace <div class="product-callout">...</div>
        const regex = /<div class="product-callout"[\s\S]*?<\/div>/;
        if (regex.test(content)) {
            content = content.replace(regex, u.box.trim());
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✓ Mis à jour : ${filename}`);
        } else {
            console.log(`- Non trouvé dans : ${filename}`);
        }
    });
});
