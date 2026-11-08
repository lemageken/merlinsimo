const fs = require('fs');
const path = require('path');

const articlesDir = 'd:/ANTIGRAVITY/projets/site-genie/site/articles';
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.html'));

// Clean SVG Icons
const icons = {
  share: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--electric-blue); flex-shrink: 0;"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
  native: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`
};

function generateShareBar(title, url, isChildArticle) {
  const encUrl = encodeURIComponent(url);
  const encTitle = encodeURIComponent(title);
  const encWhatsapp = encodeURIComponent(`${title} — par Merlin SIMO : ${url}`);
  const encX = encodeURIComponent(`${title} — par Merlin SIMO`);
  const encTelegram = encodeURIComponent(`${title} — par Merlin SIMO`);
  const subText = isChildArticle 
    ? "Partagez ces conseils pratiques à un parent, enseignant ou éducateur"
    : "Transmettez ces clés de réflexion et d'action à votre réseau";

  return `
                <!-- Social Sharing Bar (WhatsApp, Facebook, LinkedIn, X, Telegram, Copier le lien) -->
                <div class="article-share-bar" data-article-url="${url}" data-article-title="${title.replace(/"/g, '&quot;')}">
                    <div class="article-share-bar__header">
                        <span class="article-share-bar__title">
                            ${icons.share}
                            Partager cet article :
                        </span>
                        <span class="article-share-bar__sub">${subText}</span>
                    </div>
                    <div class="share-buttons-group">
                        <a href="https://api.whatsapp.com/send?text=${encWhatsapp}" target="_blank" rel="noopener noreferrer" class="btn-share btn-share--whatsapp" title="Partager sur WhatsApp">
                            ${icons.whatsapp}
                            <span>WhatsApp</span>
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${encUrl}" target="_blank" rel="noopener noreferrer" class="btn-share btn-share--facebook" title="Partager sur Facebook">
                            ${icons.facebook}
                            <span>Facebook</span>
                        </a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encUrl}" target="_blank" rel="noopener noreferrer" class="btn-share btn-share--linkedin" title="Partager sur LinkedIn">
                            ${icons.linkedin}
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://twitter.com/intent/tweet?url=${encUrl}&text=${encX}" target="_blank" rel="noopener noreferrer" class="btn-share btn-share--x" title="Partager sur X (Twitter)">
                            ${icons.x}
                            <span>X</span>
                        </a>
                        <a href="https://t.me/share/url?url=${encUrl}&text=${encTelegram}" target="_blank" rel="noopener noreferrer" class="btn-share btn-share--telegram" title="Partager sur Telegram">
                            ${icons.telegram}
                            <span>Telegram</span>
                        </a>
                        <button type="button" class="btn-share btn-share--copy" title="Copier le lien de l'article" onclick="copyArticleLink(this, '${url}')">
                            ${icons.copy}
                            <span>Copier le lien</span>
                        </button>
                        <button type="button" class="btn-share btn-share--native" title="Partager via votre appareil" style="display: none;">
                            ${icons.native}
                            <span>Partager...</span>
                        </button>
                    </div>
                </div>
`;
}

function generateSidebarShare(title, url) {
  const encUrl = encodeURIComponent(url);
  const encWhatsapp = encodeURIComponent(`${title} — par Merlin SIMO : ${url}`);
  return `
                <div class="sidebar-card">
                    <h3>Partager cet article</h3>
                    <p style="font-size: var(--fs-xs); color: var(--text-medium); margin-bottom: var(--space-xs);">Diffuser ces idées auprès de vos contacts :</p>
                    <div class="sidebar-share-buttons">
                        <a href="https://api.whatsapp.com/send?text=${encWhatsapp}" target="_blank" rel="noopener noreferrer" class="btn-share btn-share--whatsapp" title="WhatsApp">
                            ${icons.whatsapp} <span>WhatsApp</span>
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${encUrl}" target="_blank" rel="noopener noreferrer" class="btn-share btn-share--facebook" title="Facebook">
                            ${icons.facebook} <span>Facebook</span>
                        </a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encUrl}" target="_blank" rel="noopener noreferrer" class="btn-share btn-share--linkedin" title="LinkedIn">
                            ${icons.linkedin} <span>LinkedIn</span>
                        </a>
                        <button type="button" class="btn-share btn-share--copy" title="Copier" onclick="copyArticleLink(this, '${url}')">
                            ${icons.copy} <span>Copier</span>
                        </button>
                    </div>
                </div>
`;
}

let countUpdated = 0;

files.forEach(f => {
  const filePath = path.join(articlesDir, f);
  let html = fs.readFileSync(filePath, 'utf8');

  // Extract Title
  let title = '';
  const titleTagMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match) {
    title = h1Match[1].replace(/<[^>]+>/g, '').trim();
  } else if (titleTagMatch) {
    title = titleTagMatch[1].replace(/– Merlin SIMO.*/, '').replace(/\| Merlin SIMO.*/, '').trim();
  } else {
    title = f.replace('.html', '').replace(/-/g, ' ');
  }

  // Extract or build canonical URL
  let url = `https://merlinsimo.netlify.app/articles/${f}`;
  const canonMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (canonMatch) {
    url = canonMatch[1];
  }

  const isChildArticle = f.includes('enfant') || f.includes('parents-partenaires') || f.includes('difficulte') || f.includes('notes-baissent');

  const shareBarHtml = generateShareBar(title, url, isChildArticle);

  // Check if article already has an old share bar
  if (html.includes('class="article-share-bar"')) {
    // Replace old share bar
    html = html.replace(/<!--\s*Social Sharing Bar[\s\S]*?<\/div>\s*<\/div>/i, shareBarHtml.trim());
    // In case comment didn't match
    if (html.includes('class="article-share-bar"') && html.includes('btn-share--whatsapp') && !html.includes('btn-share--linkedin')) {
      html = html.replace(/<div class="article-share-bar"[\s\S]*?<\/div>\s*<\/div>/i, shareBarHtml.trim());
    }
  } else {
    // Insert before article-footer or </article>
    if (html.includes('<div class="article-footer">')) {
      html = html.replace('<div class="article-footer">', shareBarHtml + '\n                <div class="article-footer">');
    } else if (html.includes('</article>')) {
      html = html.replace('</article>', shareBarHtml + '\n            </article>');
    }
  }

  // For adult articles with sidebar, add sidebar share widget if not present
  if (html.includes('<aside class="sidebar">') && !html.includes('sidebar-share-buttons')) {
    const sidebarWidget = generateSidebarShare(title, url);
    html = html.replace('<aside class="sidebar">', '<aside class="sidebar">\n' + sidebarWidget);
  }

  // Ensure FontAwesome CDN is in head if missing
  if (!html.includes('cdnjs.cloudflare.com/ajax/libs/font-awesome')) {
    html = html.replace('</head>', '    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">\n</head>');
  }

  // Ensure main.js is loaded
  if (!html.includes('js/main.js')) {
    html = html.replace('</body>', '    <script src="../js/main.js"></script>\n</body>');
  }

  fs.writeFileSync(filePath, html, 'utf8');
  countUpdated++;
  console.log(`[${countUpdated}/30] Injected social share into: ${f}`);
});

console.log('=== Injected social share into all 30 articles! ===');
