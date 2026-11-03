const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, '..', 'site', 'articles');

function updateArticle(filename, { lead, bodyHtml, toc }) {
  const filePath = path.join(articlesDir, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Find start of lead
  const leadStart = html.indexOf('<p class="article-lead"');
  if (leadStart === -1) {
    throw new Error(`Could not find <p class="article-lead" in ${filename}`);
  }

  // 2. Find end of body: either product-callout or article-footer
  let calloutMatch = html.match(/<div\s+class=["']product-callout/i);
  let calloutStart = -1;
  if (calloutMatch) {
    calloutStart = calloutMatch.index;
  } else {
    let footerMatch = html.match(/<div\s+class=["']article-footer/i);
    if (footerMatch) {
      calloutStart = footerMatch.index;
    } else {
      throw new Error(`Could not find end of article body in ${filename}`);
    }
  }

  const newArticleContent = `<p class="article-lead" style="font-size: var(--fs-lg); line-height: 1.7; color: var(--text-dark); margin-bottom: var(--space-2xl); font-weight: var(--fw-medium); border-left: 3px solid var(--electric-blue); padding-left: var(--space-lg);">
                    ${lead}
                </p>

${bodyHtml}
                
                `;

  html = html.substring(0, leadStart) + newArticleContent + html.substring(calloutStart);

  // 3. Update TOC
  const tocStart = html.indexOf('<nav class="toc">');
  const tocEnd = html.indexOf('</nav>', tocStart);
  if (tocStart !== -1 && tocEnd !== -1) {
    const tocItems = toc.map(item => `<li><a href="#${item.id}">${item.title}</a></li>`).join('\n                            ');
    const newToc = `<nav class="toc">
                        <ul class="sidebar__links">
                            ${tocItems}
                        </ul>
                    </nav>`;
    html = html.substring(0, tocStart) + newToc + html.substring(tocEnd + 6);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✓ Rewritten successfully: ${filename}`);
}

module.exports = { updateArticle };
