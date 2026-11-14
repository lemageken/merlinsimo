import zipfile
import xml.etree.ElementTree as ET
import re
import html
import os
import urllib.parse

docx_path = 'd:/ANTIGRAVITY/projets/site-genie/Articles securia.docx'
out_dir = 'd:/ANTIGRAVITY/projets/site-genie/site/articles'

with zipfile.ZipFile(docx_path) as z:
    xml_content = z.read('word/document.xml')
    tree = ET.fromstring(xml_content)

w_ns = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'

raw_paragraphs = []
for p in tree.iter(f'{{{w_ns}}}p'):
    items = []
    is_list = False
    pPr = p.find(f'{{{w_ns}}}pPr')
    if pPr is not None and pPr.find(f'{{{w_ns}}}numPr') is not None:
        is_list = True
        
    for elem in p.iter():
        if elem.tag == f'{{{w_ns}}}t':
            items.append(elem.text or '')
        elif elem.tag == f'{{{w_ns}}}br':
            items.append('\n')
    text = ''.join(items).strip()
    if text:
        raw_paragraphs.append({'text': text, 'is_list': is_list})

articles_raw = {}
current_id = None
for p in raw_paragraphs:
    m = re.match(r'^Article\s+(\d+)\s*$', p['text'], re.IGNORECASE)
    if m:
        current_id = int(m.group(1))
        articles_raw[current_id] = []
    elif current_id is not None:
        articles_raw[current_id].append(p)

ARTICLES_CONFIG = {
    1: {
        'slug': 'de-la-feuille-dechiree-au-policier-augmente-pourquoi-securia.html',
        'image': 'images/securia/logo-securia.jpg',
        'image_alt': 'Logo officiel SECUR.IA - Informer, Assister, Protéger',
        'caption': "Emblème officiel SECUR.IA — Informer, Assister, Protéger — Intelligence au service de la sécurité.",
        'tag': 'Vision & Fondations',
        'date_str': '05 Novembre 2026',
        'date_iso': '2026-11-05T08:00:00+01:00',
        'read_time': '18 min de lecture',
        'desc': "Genèse et vision du projet SECUR.IA : comment une difficulté concrète d'annuaire papier sur le terrain a conduit à concevoir un écosystème d'intelligence artificielle souverain au service de la Sûreté nationale et des forces de police camerounaises.",
        'keywords': "Secur.IA, Pocam237, Merlin SIMO, Jean Albert ENGUENE ENGUENE, police Cameroun, DGSN, intelligence artificielle sécurité, policier augmenté, annuaire numérique"
    },
    2: {
        'slug': 'intelligence-artificielle-renseignement-policier-anticipation.html',
        'image': 'images/securia/renseignement-policier-anticipation.jpg',
        'image_alt': 'Centre de renseignement policier et analyse prédictive IA à Yaoundé',
        'caption': "Centre d'analyse et de renseignement policier assisté par l'intelligence artificielle.",
        'tag': 'Renseignement & Anticipation',
        'date_str': '04 Novembre 2026',
        'date_iso': '2026-11-04T08:00:00+01:00',
        'read_time': '22 min de lecture',
        'desc': "Comment l'intelligence artificielle permet aux services de sécurité de passer d'une posture réactive à une posture anticipative grâce au rapprochement de données, à la détection de tendances et à l'aide à la décision.",
        'keywords': "renseignement policier, anticipation, intelligence artificielle, DGSN Cameroun, SERVIR n° 027, chaîne du renseignement, sécurité nationale"
    },
    3: {
        'slug': 'police-judiciaire-intelligence-artificielle-enquetes-criminelles.html',
        'image': 'images/securia/police-judiciaire-enquetes-criminelles.jpg',
        'image_alt': 'Officier de police judiciaire analysant des preuves numériques avec l\'IA',
        'caption': "Investigation criminelle et exploitation méthodique des preuves numériques assistées par l'IA.",
        'tag': 'Police Judiciaire & Enquêtes',
        'date_str': '03 Novembre 2026',
        'date_iso': '2026-11-03T08:00:00+01:00',
        'read_time': '25 min de lecture',
        'desc': "L'apport de l'IA dans l'investigation criminelle : analyse massive de procès-verbaux, exploitation des preuves numériques, détection de contradictions et respect scrupuleux du Code de procédure pénale camerounais.",
        'keywords': "police judiciaire, enquêtes criminelles, preuves numériques, procès-verbaux, Code de procédure pénale camerounais, criminalistique, IA judiciaire"
    },
    4: {
        'slug': 'securite-publique-maintien-ordre-capacites-operationnelles-ia.html',
        'image': 'images/securia/securite-publique-maintien-ordre.jpg',
        'image_alt': 'Dispositif de sécurité publique et patrouille connectée en zone urbaine',
        'caption': "Coordination des patrouilles et sécurisation de l'espace public urbain assistées par l'IA.",
        'tag': 'Sécurité Publique & Maintien de l\'Ordre',
        'date_str': '02 Novembre 2026',
        'date_iso': '2026-11-02T08:00:00+01:00',
        'read_time': '20 min de lecture',
        'desc': "Optimisation des patrouilles, cartographie prédictive des incidents, gestion intelligente des appels d'urgence 117 et vidéosurveillance raisonnée pour sécuriser nos métropoles comme Yaoundé et Douala.",
        'keywords': "sécurité publique, maintien de l'ordre, patrouilles de police, appels d'urgence 117, vidéosurveillance intelligente, Yaoundé, Douala"
    },
    5: {
        'slug': 'cybercriminalite-afrique-forces-police-arsenal-numerique-ia.html',
        'image': 'images/securia/cybercriminalite-afrique-bouclier-ia.jpg',
        'image_alt': 'Unité de lutte contre la cybercriminalité et bouclier numérique',
        'caption': "Bouclier numérique et détection proactive des fraudes et cybermenaces en Afrique.",
        'tag': 'Cybercriminalité & Défense Numérique',
        'date_str': '01 Novembre 2026',
        'date_iso': '2026-11-01T08:00:00+01:00',
        'read_time': '24 min de lecture',
        'desc': "Face à la montée des fraudes financières, de l'usurpation d'identité et des escroqueries numériques en Afrique, comment armer les enquêteurs d'outils d'IA pour tracer les flux et identifier les cybercriminels.",
        'keywords': "cybercriminalité Afrique, Loi n° 2010/012 Cameroun, fraude numérique, usurpation d'identité, INTERPOL cyberthreats, cybersécurité police"
    },
    6: {
        'slug': 'securite-frontieres-criminalite-transnationale-surveillance-cooperation-ia.html',
        'image': 'images/securia/securite-frontieres-criminalite-transnationale.jpg',
        'image_alt': 'Poste frontière intelligent et contrôle biométrique assisté par l\'IA',
        'caption': "Contrôle frontalier intelligent, vérification documentaire et coopération transfrontalière.",
        'tag': 'Frontières & Coopération Transnationale',
        'date_str': '30 Octobre 2026',
        'date_iso': '2026-10-30T08:00:00+01:00',
        'read_time': '22 min de lecture',
        'desc': "Surveillance des points de passage, vérification documentaire intelligente, analyse des flux migratoires et coopération sous-régionale pour lutter contre les trafics transfrontaliers en zone CEMAC.",
        'keywords': "sécurité des frontières, criminalité transnationale, documents d'identité, CEMAC, surveillance frontalière, coopération policière internationale"
    },
    7: {
        'slug': 'intelligence-artificielle-gestion-crises-defense-nationale.html',
        'image': 'images/securia/gestion-crises-defense-nationale.jpg',
        'image_alt': 'Centre de commandement opérationnel interarmées et gestion de crise',
        'caption': "Poste de commandement interservices et coordination des crises assistée par l'intelligence artificielle.",
        'tag': 'Gestion de Crise & Défense Nationale',
        'date_str': '28 Octobre 2026',
        'date_iso': '2026-10-28T08:00:00+01:00',
        'read_time': '19 min de lecture',
        'desc': "Coordination interarmées et interservices en situation d'urgence, maintenance prédictive des équipements critiques et cartographie décisionnelle face aux catastrophes et menaces asymétriques.",
        'keywords': "gestion des crises, défense nationale, secours d'urgence, coordination opérationnelle, cartographie décisionnelle, MINDEF Cameroun"
    },
    8: {
        'slug': 'former-policier-de-demain-intelligence-artificielle-formation-performance.html',
        'image': 'images/securia/formation-policier-simulateurs-ia.jpg',
        'image_alt': 'Cadets de police camerounais utilisant des simulateurs tactiques IA',
        'caption': "Simulateurs décisionnels et modules d'apprentissage adaptatifs pour les élèves des écoles de police.",
        'tag': 'Formation & Pédagogie Policière',
        'date_str': '26 Octobre 2026',
        'date_iso': '2026-10-26T08:00:00+01:00',
        'read_time': '21 min de lecture',
        'desc': "Révolution de la formation policière continue : simulateurs décisionnels virtuels, apprentissage adaptatif du droit pénal et mise à jour permanente des compétences des agents de police camerounais.",
        'keywords': "formation policière, école de police, simulateurs interactifs, apprentissage adaptatif, Code pénal, pédagogie policière, perfectionnement"
    },
    9: {
        'slug': 'police-intelligente-administration-numerique-rapprocher-services-citoyens.html',
        'image': 'images/securia/police-intelligente-administration-citoyens.jpg',
        'image_alt': 'Agent d\'accueil et citoyen utilisant une borne administrative intelligente',
        'caption': "Accueil du public, démarches administratives facilitées et transparence du service public policier.",
        'tag': 'Administration & Relation Citoyen',
        'date_str': '24 Octobre 2026',
        'date_iso': '2026-10-24T08:00:00+01:00',
        'read_time': '20 min de lecture',
        'desc': "Simplification des démarches administratives, annuaires interactifs, pré-plaintes en ligne, accueil automatisé multilingue et transparence accrue pour renforcer le lien de confiance police-citoyen.",
        'keywords': "police intelligente, administration numérique, relation citoyen, annuaire des commissariats, pré-plainte en ligne, confiance police-citoyen"
    },
    10: {
        'slug': 'souverainete-numerique-police-demain-strategie-nationale-cameroun.html',
        'image': 'images/securia/souverainete-numerique-securite-cameroun.jpg',
        'image_alt': 'Data center souverain et ingénieurs camerounais en cybersécurité',
        'caption': "Infrastructures souveraines, centres de données sécurisés et maîtrise nationale de l'IA au Cameroun.",
        'tag': 'Souveraineté & Stratégie Nationale',
        'date_str': '22 Octobre 2026',
        'date_iso': '2026-10-22T08:00:00+01:00',
        'read_time': '23 min de lecture',
        'desc': "Pourquoi le Cameroun doit maîtriser ses infrastructures régaliennes, ses centres de données et ses modèles d'IA sans dépendance extérieure, et bâtir une doctrine nationale de sécurité numérique.",
        'keywords': "souveraineté numérique, protection des données, Loi n° 2024/017 Cameroun, data centers souverains, stratégie nationale IA, indépendance technologique"
    }
}

def clean_author_phrase(text):
    """Remove occurrences of 'Merlin SIMO Concepteur de SECUR.IA et de Pocam237' and 'Concepteur de SECUR.IA et de Pocam237'."""
    # Pattern: Merlin SIMO\nConcepteur de SECUR.IA et de Pocam237
    t = re.sub(r'Merlin\s+SIMO\s*(\n|<br\s*/?>)?\s*Concepteur\s+de\s+SECUR\.IA\s+et\s+de\s+Pocam237', '', text, flags=re.IGNORECASE)
    # Pattern: Concepteur de SECUR.IA et de Pocam237
    t = re.sub(r'Concepteur\s+de\s+SECUR\.IA\s+et\s+de\s+Pocam237\s*(—\s*|–\s*|-\s*)?', '', t, flags=re.IGNORECASE)
    # Pattern: Concepteur de SECUR.IA et Pocam237
    t = re.sub(r'Concepteur\s+de\s+SECUR\.IA\s+et\s+Pocam237\s*(—\s*|–\s*|-\s*)?', '', t, flags=re.IGNORECASE)
    return t.strip()

def format_body_html(plist, aid):
    title = plist[0]['text']
    
    # Separate header meta
    body_paragraphs = []
    header_meta = []
    in_body = False
    
    for p in plist[1:]:
        txt = p['text']
        if not in_body:
            if re.match(r'^Introduction\b', txt, re.IGNORECASE):
                in_body = True
                body_paragraphs.append(p)
            else:
                # Clean author phrase from header meta
                cleaned_meta = clean_author_phrase(txt)
                if cleaned_meta:
                    header_meta.append(cleaned_meta)
        else:
            body_paragraphs.append(p)
            
    html_out = []
    total = len(body_paragraphs)
    idx = 0
    
    while idx < total:
        p = body_paragraphs[idx]
        txt = p['text']
        is_word_list = p['is_list']
        
        # Check author signature block at end of article
        if idx >= total - 8 and (
            txt.startswith('Merlin SIMO') or 
            'Concepteur de SECUR.IA' in txt or 
            txt.startswith('Avec la collaboration stratégique') or
            txt.startswith('Contact :') or
            (txt.startswith('SECUR.IA') and 'Intelligence' in txt)
        ):
            # Gather remaining signature lines, filtering out the redundant "Merlin SIMO Concepteur..." phrase
            sig_lines = []
            while idx < total:
                raw_line = body_paragraphs[idx]['text']
                cleaned_line = clean_author_phrase(raw_line)
                # If cleaned_line is empty or just "Merlin SIMO" with nothing else, skip it to avoid author repetition
                if cleaned_line and cleaned_line.strip() != "Merlin SIMO":
                    sig_lines.append(cleaned_line)
                idx += 1
                
            if sig_lines:
                html_out.append(f'<div class="callout-box" style="margin-top: var(--space-2xl); margin-bottom: var(--space-xl); padding: var(--space-xl); background: rgba(0, 166, 81, 0.05); border-left: 4px solid #00a651; border-radius: var(--radius-md);">')
                for s in sig_lines:
                    s_esc = html.escape(s).replace('\n', '<br>')
                    if 'Contact :' in s or 'Téléphone' in s or 'E-mail' in s:
                        html_out.append(f'<p style="margin-top: var(--space-sm); font-size: 0.95rem; color: var(--primary-color);"><strong>{s_esc}</strong></p>')
                    elif 'Monsieur ENGUENE ENGUENE Jean Albert' in s:
                        html_out.append(f'<p style="margin: var(--space-xs) 0; font-size: 1rem; color: var(--text-dark);"><strong>{s_esc}</strong></p>')
                    else:
                        html_out.append(f'<p style="margin-bottom: var(--space-xs); font-size: 0.95rem; color: var(--text-medium);">{s_esc}</p>')
                html_out.append('</div>')
            break
            
        # Check Level 3 Heading: "1.1. ", "3.2. ", etc.
        h3_match = re.match(r'^(\d+\.\d+\.?\s+.*)', txt)
        if h3_match and len(txt) < 180:
            esc = html.escape(txt)
            html_out.append(f'<h3 style="margin-top: var(--space-xl); margin-bottom: var(--space-sm); font-size: 1.3rem; color: var(--text-dark); font-family: var(--font-heading);">{esc}</h3>')
            idx += 1
            continue
            
        # Check Level 2 Heading: "Introduction : ...", "Conclusion : ...", "1. ...", "10. ...", "Références...", "Pour approfondir"
        h2_match = re.match(r'^(Introduction\b.*?|Conclusion\b.*?|\d+\.\s+[^\d].*?|Références\b.*?|Sources\b.*?|Pour approfondir\b.*?|Documents consultés\b.*?)', txt, re.IGNORECASE)
        if h2_match and not txt.startswith('Note :') and len(txt) < 180:
            esc = html.escape(txt)
            html_out.append(f'<h2 style="margin-top: var(--space-2xl); margin-bottom: var(--space-md); font-size: 1.6rem; color: var(--primary-color); font-family: var(--font-heading); border-bottom: 2px solid rgba(0, 166, 81, 0.2); padding-bottom: 0.4rem;">{esc}</h2>')
            idx += 1
            continue
            
        # Check Note / Callout
        if txt.startswith('Note :') or txt.startswith('Note importante :') or txt.startswith('Avertissement :') or txt.startswith('Principe fondamental :'):
            esc = html.escape(txt)
            html_out.append(f'''<div class="callout-box" style="margin: var(--space-xl) 0; padding: var(--space-md) var(--space-lg); background: #fdfaf0; border-left: 4px solid #f59e0b; border-radius: var(--radius-md); font-size: 0.95rem; color: #78350f;">
    <p style="margin: 0; font-style: italic;"><i class="fas fa-info-circle" style="color: #f59e0b; margin-right: 0.5rem;"></i>{esc}</p>
</div>''')
            idx += 1
            continue
            
        # Check List items
        is_bullet_item = (
            is_word_list or 
            re.match(r'^[•\-\*–]\s+', txt) or 
            (txt.endswith(';') and len(txt) < 300)
        )
        
        if is_bullet_item:
            html_out.append('<ul style="margin: var(--space-md) 0 var(--space-lg) var(--space-lg); padding-left: var(--space-md); list-style-type: disc;">')
            while idx < total:
                curr_p = body_paragraphs[idx]
                curr_txt = curr_p['text']
                curr_is_list = curr_p['is_list']
                is_curr_bullet = (
                    curr_is_list or 
                    re.match(r'^[•\-\*–]\s+', curr_txt) or 
                    (curr_txt.endswith(';') and len(curr_txt) < 300)
                )
                
                if not is_curr_bullet:
                    if curr_txt.endswith('.') and len(curr_txt) < 250 and not re.match(r'^(Introduction|\d+\.|\bConclusion|Références|Pour approfondir)', curr_txt, re.IGNORECASE):
                        clean_txt = re.sub(r'^[•\-\*–]\s*', '', curr_txt)
                        html_out.append(f'<li style="margin-bottom: var(--space-xs); line-height: 1.7;">{html.escape(clean_txt)}</li>')
                        idx += 1
                    break
                    
                clean_txt = re.sub(r'^[•\-\*–]\s*', '', curr_txt)
                html_out.append(f'<li style="margin-bottom: var(--space-xs); line-height: 1.7;">{html.escape(clean_txt)}</li>')
                idx += 1
                
                if curr_txt.endswith('.') and not curr_is_list:
                    break
            html_out.append('</ul>')
            continue
            
        # Standard paragraph
        # If the paragraph is solely a standalone repetitive author signature "Merlin SIMO\nConcepteur...", skip it
        if clean_author_phrase(txt) == "" and len(txt) < 150:
            idx += 1
            continue
            
        esc = html.escape(txt)
        html_out.append(f'<p style="margin-bottom: var(--space-md); line-height: 1.8; color: var(--text-dark);">{esc}</p>')
        idx += 1
        
    return {
        'title': title,
        'header_meta': header_meta,
        'body_html': '\n'.join(html_out)
    }

def generate_article_page(aid):
    cfg = ARTICLES_CONFIG[aid]
    plist = articles_raw[aid]
    res = format_body_html(plist, aid)
    
    title = res['title']
    title_esc = html.escape(title)
    desc_esc = html.escape(cfg['desc'])
    slug = cfg['slug']
    canonical_url = f"https://merlinsimo.netlify.app/articles/{slug}"
    image_url = f"https://merlinsimo.netlify.app/{cfg['image']}"
    rel_img_path = f"../{cfg['image']}"
    
    encoded_url = urllib.parse.quote(canonical_url, safe='')
    encoded_title = urllib.parse.quote(title + " — par Merlin SIMO : ", safe='')
    
    subtitle_html = ""
    if res['header_meta']:
        meta_lines = "<br>".join([html.escape(m).replace('\n', '<br>') for m in res['header_meta']])
        subtitle_html = f'<p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-medium); margin-top: var(--space-xs); font-style: italic;">{meta_lines}</p>'
    
    related_ids = [i for i in range(1, 11) if i != aid][:3]
    related_html_cards = []
    for rid in related_ids:
        rcfg = ARTICLES_CONFIG[rid]
        rtitle = html.escape(articles_raw[rid][0]['text'])
        related_html_cards.append(f'''
                    <article style="background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border); overflow: hidden; display: flex; flex-direction: column;">
                        <a href="{rcfg['slug']}">
                            <img src="../{rcfg['image']}" alt="{rtitle}" style="width: 100%; aspect-ratio: 16/9; object-fit: cover;">
                        </a>
                        <div style="padding: var(--space-md); flex: 1; display: flex; flex-direction: column;">
                            <span style="font-size: var(--fs-xs); color: var(--primary-color); font-weight: 700; text-transform: uppercase;">{rcfg['tag']}</span>
                            <h4 style="font-size: 1rem; margin: var(--space-xs) 0; font-family: var(--font-heading); line-height: 1.4;">
                                <a href="{rcfg['slug']}" style="color: var(--text-dark); text-decoration: none;">{rtitle}</a>
                            </h4>
                            <div style="font-size: var(--fs-xs); color: var(--text-light); margin-top: auto; padding-top: var(--space-sm);">
                                <i class="far fa-clock"></i> {rcfg['read_time']}
                            </div>
                        </div>
                    </article>''')
    related_cards_str = "\n".join(related_html_cards)

    page_html = f'''<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title_esc} — Merlin SIMO | Secur.IA</title>
    <meta name="description" content="{desc_esc}">
    <meta name="keywords" content="{cfg['keywords']}">
    <meta name="author" content="Merlin SIMO">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="{canonical_url}">
    
    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Merlin SIMO – L'Intelligence en Action">
    <meta property="og:url" content="{canonical_url}">
    <meta property="og:title" content="{title_esc}">
    <meta property="og:description" content="{desc_esc}">
    <meta property="og:image" content="{image_url}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="{title_esc}">
    <meta property="og:locale" content="fr_FR">
    <meta property="article:published_time" content="{cfg['date_iso']}">
    <meta property="article:author" content="Merlin SIMO">
    <meta property="article:section" content="Sécurité et Intelligence Artificielle">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="{canonical_url}">
    <meta name="twitter:title" content="{title_esc}">
    <meta name="twitter:description" content="{desc_esc}">
    <meta name="twitter:image" content="{image_url}">

    <!-- Favicons & App Icons -->
    <link rel="icon" type="image/x-icon" href="../favicon.ico">
    <link rel="icon" type="image/png" sizes="48x48" href="../favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">
    <link rel="manifest" href="../site.webmanifest">
    <meta name="theme-color" content="#00a651">

    <!-- Schema.org JSON-LD (TechArticle) -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "mainEntityOfPage": {{
        "@type": "WebPage",
        "@id": "{canonical_url}"
      }},
      "headline": "{title_esc}",
      "description": "{desc_esc}",
      "image": [
        "{image_url}"
      ],
      "datePublished": "{cfg['date_iso']}",
      "dateModified": "{cfg['date_iso']}",
      "author": {{
        "@type": "Person",
        "name": "Merlin SIMO",
        "url": "https://merlinsimo.netlify.app/a-propos.html"
      }},
      "publisher": {{
        "@type": "Organization",
        "name": "Merlin SIMO – L'Intelligence en Action",
        "logo": {{
          "@type": "ImageObject",
          "url": "https://merlinsimo.netlify.app/images/logo-transparent.png"
        }}
      }},
      "inLanguage": "fr-FR"
    }}
    </script>

    <!-- Stylesheets -->
    <link rel="stylesheet" href="../css/style.css?v=18.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="reading-progress" id="readingProgress"></div>

    <!-- Header Navigation -->
    <header class="header">
        <div class="container header__inner">
            <a href="../index.html" class="header__logo"><img src="../images/logo-transparent.png" alt="Emblème Merlin SIMO" class="header__logo-img"> Merlin <span>SIMO</span></a>
            <nav class="nav" aria-label="Navigation principale">
                <ul class="nav__list">
                    <li class="nav__item"><a href="../index.html" class="nav__link">Accueil</a></li>
                    <li class="nav__item"><a href="../articles.html" class="nav__link">Articles</a></li>
                    <li class="nav__item"><a href="../intelligence-enfant.html" class="nav__link">Intelligence Enfant</a></li>
                    <li class="nav__item"><a href="../secur-ia.html" class="nav__link nav__link--active">Secur.IA</a></li>
                    <li class="nav__item"><a href="../boutique.html" class="nav__link">Boutique</a></li>
                    <li class="nav__item"><a href="../a-propos.html" class="nav__link">À propos</a></li>
                    <li class="nav__item"><a href="../contact.html" class="nav__link">Contact</a></li>
                </ul>
            </nav>
            <button class="hamburger" aria-label="Menu mobile" aria-expanded="false">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>

    <main class="main-content">
        <!-- Fil d'Ariane (Breadcrumb) -->
        <nav class="breadcrumb" aria-label="Fil d'Ariane">
            <div class="container">
                <ol class="breadcrumb__list">
                    <li class="breadcrumb__item"><a href="../index.html"><i class="fas fa-home"></i> Accueil</a></li>
                    <li class="breadcrumb__item"><a href="../secur-ia.html">Secur.IA</a></li>
                    <li class="breadcrumb__item breadcrumb__item--active" aria-current="page">{title_esc}</li>
                </ol>
            </div>
        </nav>

        <!-- Article Container -->
        <article class="article-single" style="padding-top: var(--space-xl);">
            <div class="container container--narrow">
                <!-- Article Header -->
                <header class="article-header" style="margin-bottom: var(--space-xl); text-align: left;">
                    <div style="display: flex; gap: var(--space-xs); align-items: center; margin-bottom: var(--space-sm); flex-wrap: wrap;">
                        <span class="badge" style="background: rgba(0, 166, 81, 0.1); color: #00a651; border: 1px solid rgba(0, 166, 81, 0.25); font-weight: 700; font-size: var(--fs-xs); padding: 0.35rem 0.75rem; border-radius: var(--radius-full);">
                            <i class="fas fa-shield-alt"></i> Secur.IA — {cfg['tag']}
                        </span>
                        <span style="font-size: var(--fs-xs); color: var(--text-light);"><i class="far fa-clock"></i> {cfg['read_time']}</span>
                        <span style="font-size: var(--fs-xs); color: var(--text-light);"><i class="far fa-calendar-alt"></i> {cfg['date_str']}</span>
                    </div>

                    <h1 class="article-title" style="font-size: clamp(1.85rem, 4vw, 2.6rem); line-height: 1.25; margin-bottom: var(--space-sm); font-family: var(--font-heading); color: var(--text-dark);">
                        {title_esc}
                    </h1>

                    {subtitle_html}

                    <div class="article-meta" style="margin-top: var(--space-md); padding-top: var(--space-sm); border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-sm);">
                        <div style="display: flex; align-items: center; gap: var(--space-sm);">
                            <img src="../images/merlin-simo.jpg" alt="Merlin SIMO" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 2px solid #00a651;">
                            <div>
                                <strong style="color: var(--text-dark); display: block; font-size: 0.95rem;">Merlin SIMO</strong>
                            </div>
                        </div>
                    </div>
                </header>

                <!-- Featured Image -->
                <figure style="margin: 0 0 var(--space-2xl) 0;">
                    <img src="{rel_img_path}" alt="{html.escape(cfg['image_alt'])}" style="width: 100%; border-radius: var(--radius-lg); object-fit: cover; aspect-ratio: 16/9; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid var(--border);">
                    <figcaption style="font-size: var(--fs-xs); color: var(--text-light); text-align: center; margin-top: var(--space-xs); font-style: italic;">
                        {html.escape(cfg['caption'])}
                    </figcaption>
                </figure>

                <!-- Boutons de Partage en Début d'Article -->
                <div style="display: flex; gap: var(--space-xs); flex-wrap: wrap; align-items: center; padding: var(--space-sm) var(--space-md); background: rgba(0,0,0,0.02); border-radius: var(--radius-md); margin-bottom: var(--space-xl); border: 1px solid var(--border);">
                    <span style="font-size: var(--fs-xs); font-weight: 700; color: var(--text-medium); margin-right: var(--space-xs);"><i class="fas fa-share-alt"></i> Partager :</span>
                    <a href="https://api.whatsapp.com/send?text={encoded_title}{encoded_url}" target="_blank" rel="noopener noreferrer" class="btn-share" style="color: #25D366; font-size: 0.85rem; padding: 0.3rem 0.6rem; border: 1px solid #25D366; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u={encoded_url}" target="_blank" rel="noopener noreferrer" class="btn-share" style="color: #1877F2; font-size: 0.85rem; padding: 0.3rem 0.6rem; border: 1px solid #1877F2; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;"><i class="fab fa-facebook-f"></i> Facebook</a>
                    <a href="https://twitter.com/intent/tweet?text={encoded_title}&url={encoded_url}" target="_blank" rel="noopener noreferrer" class="btn-share" style="color: #000; font-size: 0.85rem; padding: 0.3rem 0.6rem; border: 1px solid #000; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;"><i class="fab fa-x-twitter"></i> X</a>
                    <a href="https://www.linkedin.com/sharing/share-offsite/?url={encoded_url}" target="_blank" rel="noopener noreferrer" class="btn-share" style="color: #0A66C2; font-size: 0.85rem; padding: 0.3rem 0.6rem; border: 1px solid #0A66C2; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;"><i class="fab fa-linkedin-in"></i> LinkedIn</a>
                </div>

                <!-- Corps de l'Article (Texte Verbatim Intégral) -->
                <div class="article-body" style="font-size: var(--fs-base); line-height: 1.8; color: var(--text-dark);">
{res['body_html']}
                </div>

                <!-- Boutons de Partage en Fin d'Article -->
                <div style="display: flex; gap: var(--space-xs); flex-wrap: wrap; align-items: center; padding: var(--space-md); background: rgba(0, 166, 81, 0.04); border-radius: var(--radius-md); margin-top: var(--space-2xl); margin-bottom: var(--space-xl); border: 1px solid rgba(0, 166, 81, 0.2);">
                    <span style="font-size: var(--fs-sm); font-weight: 700; color: var(--text-dark); margin-right: var(--space-xs);"><i class="fas fa-bullhorn" style="color: #00a651;"></i> Diffuser cet article :</span>
                    <a href="https://api.whatsapp.com/send?text={encoded_title}{encoded_url}" target="_blank" rel="noopener noreferrer" class="btn-share" style="color: #25D366; font-size: 0.9rem; padding: 0.4rem 0.75rem; border: 1px solid #25D366; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem;"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u={encoded_url}" target="_blank" rel="noopener noreferrer" class="btn-share" style="color: #1877F2; font-size: 0.9rem; padding: 0.4rem 0.75rem; border: 1px solid #1877F2; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem;"><i class="fab fa-facebook-f"></i> Facebook</a>
                    <a href="https://twitter.com/intent/tweet?text={encoded_title}&url={encoded_url}" target="_blank" rel="noopener noreferrer" class="btn-share" style="color: #000; font-size: 0.9rem; padding: 0.4rem 0.75rem; border: 1px solid #000; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem;"><i class="fab fa-x-twitter"></i> X</a>
                    <a href="https://www.linkedin.com/sharing/share-offsite/?url={encoded_url}" target="_blank" rel="noopener noreferrer" class="btn-share" style="color: #0A66C2; font-size: 0.9rem; padding: 0.4rem 0.75rem; border: 1px solid #0A66C2; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem;"><i class="fab fa-linkedin-in"></i> LinkedIn</a>
                </div>

                <!-- Author & Strategic Collaborator Card -->
                <div class="author-bio" style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: var(--space-xl); margin-top: var(--space-2xl); box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
                    <div style="display: grid; grid-template-columns: 1fr; md-grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
                        <div>
                            <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-sm);">
                                <img src="../images/merlin-simo.jpg" alt="Merlin SIMO" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 2px solid #00a651;">
                                <div>
                                    <h3 style="margin: 0; font-size: 1.15rem; font-family: var(--font-heading); color: var(--text-dark);">Merlin SIMO</h3>
                                    <span style="font-size: var(--fs-xs); color: var(--text-light);">Auteur & Chercheur indépendant</span>
                                </div>
                            </div>
                            <p style="font-size: var(--fs-sm); line-height: 1.6; color: var(--text-medium); margin-bottom: var(--space-sm);">
                                Recherches et réflexions sur l'intelligence artificielle appliquée à la sécurité et à la transformation numérique au Cameroun.
                            </p>
                        </div>
                        <div style="border-top: 1px solid var(--border); md-border-top: none; md-border-left: 1px solid var(--border); padding-top: var(--space-md); md-padding-top: 0; md-padding-left: var(--space-lg);">
                            <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-sm);">
                                <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(0, 166, 81, 0.1); display: flex; align-items: center; justify-content: center; color: #00a651; font-size: 1.3rem;">
                                    <i class="fas fa-user-shield"></i>
                                </div>
                                <div>
                                    <h4 style="margin: 0; font-size: 1.05rem; font-family: var(--font-heading); color: var(--text-dark);">M. ENGUENE ENGUENE Jean Albert</h4>
                                    <span style="font-size: var(--fs-xs); color: var(--text-light);">Collaboration stratégique</span>
                                </div>
                            </div>
                            <p style="font-size: var(--fs-sm); line-height: 1.6; color: var(--text-medium); margin-bottom: var(--space-sm);">
                                Collaborateur aux réflexions stratégiques de conception, de doctrine et de déploiement institutionnel du projet SECUR.IA.
                            </p>
                        </div>
                    </div>
                    <div style="margin-top: var(--space-md); padding-top: var(--space-sm); border-top: 1px solid var(--border); display: flex; flex-wrap: wrap; gap: var(--space-md); font-size: var(--fs-xs); color: var(--text-medium);">
                        <span><i class="fab fa-whatsapp" style="color: #25D366;"></i> <strong>WhatsApp / Tél :</strong> +237 683 911 717</span>
                        <span><i class="fas fa-envelope" style="color: #00a651;"></i> <strong>E-mail :</strong> merlinsimo2.0@gmail.com</span>
                        <span><i class="fas fa-shield-alt" style="color: #00a651;"></i> <strong>Projet :</strong> SECUR.IA — Intelligence au service de la sécurité</span>
                    </div>
                </div>

                <!-- Hub Secur.IA Banner CTA -->
                <div style="margin-top: var(--space-2xl); padding: var(--space-xl); background: linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%); border-radius: var(--radius-lg); color: #fff; text-align: center; border: 1px solid rgba(255,255,255,0.1);">
                    <div style="font-size: 1.8rem; color: #00a651; margin-bottom: var(--space-xs);"><i class="fas fa-shield-alt"></i></div>
                    <h3 style="font-size: 1.35rem; color: #fff; margin-bottom: var(--space-xs); font-family: var(--font-heading);">Explorer l'écosystème SECUR.IA</h3>
                    <p style="color: #cbd5e1; font-size: var(--fs-sm); max-width: 580px; margin: 0 auto var(--space-md) auto; line-height: 1.6;">
                        Découvrez l'ensemble de la série éditoriale consacrée à l'intelligence artificielle pour la police, le renseignement, la sécurité des frontières et la souveraineté numérique.
                    </p>
                    <a href="../secur-ia.html" class="btn btn--primary" style="background: #00a651; color: #fff; text-decoration: none; padding: 0.65rem 1.4rem; border-radius: var(--radius-full); font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-th-large"></i> Voir tous les articles Secur.IA
                    </a>
                </div>

                <!-- Articles Similaires dans Secur.IA -->
                <section style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
                    <h3 style="font-size: 1.35rem; margin-bottom: var(--space-lg); font-family: var(--font-heading); color: var(--text-dark); display: flex; align-items: center; gap: var(--space-xs);">
                        <i class="fas fa-book-open" style="color: #00a651;"></i> Dans la même collection Secur.IA
                    </h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-md);">
{related_cards_str}
                    </div>
                </section>
            </div>
        </article>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container footer__inner">
            <div class="footer__brand">
                <a href="../index.html" class="footer__logo"><img src="../images/logo-transparent.png" alt="Emblème Merlin SIMO" class="header__logo-img"> Merlin <span>SIMO</span></a>
                <p class="footer__tagline">L'Intelligence en Action</p>
                <p class="footer__desc">Plateforme d'exploration et de transmission des connaissances sur la pensée créative, l'intelligence de l'enfant et les solutions souveraines d'intelligence artificielle.</p>
            </div>
            <div class="footer__links">
                <h4 class="footer__heading">Navigation</h4>
                <ul class="footer__list">
                    <li><a href="../index.html">Accueil</a></li>
                    <li><a href="../articles.html">Articles</a></li>
                    <li><a href="../intelligence-enfant.html">Intelligence Enfant</a></li>
                    <li><a href="../secur-ia.html">Secur.IA</a></li>
                    <li><a href="../boutique.html">Boutique</a></li>
                    <li><a href="../a-propos.html">À propos</a></li>
                    <li><a href="../contact.html">Contact</a></li>
                </ul>
            </div>
            <div class="footer__contact">
                <h4 class="footer__heading">Contact & Projets</h4>
                <p><i class="fas fa-envelope"></i> contact@merlinsimo.com</p>
                <p><i class="fab fa-whatsapp"></i> +237 683 911 717</p>
                <p><i class="fas fa-map-marker-alt"></i> Yaoundé, Cameroun</p>
                <div class="footer__social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=237683911717" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="container footer__bottom-inner">
                <p>&copy; 2026 Merlin SIMO. Tous droits réservés.</p>
                <p>SECUR.IA — L'Intelligence au Service de la Sécurité.</p>
            </div>
        </div>
    </footer>

    <!-- Back to top button -->
    <button class="back-to-top" id="backToTop" aria-label="Retour en haut de page">
        <i class="fas fa-arrow-up"></i>
    </button>

    <!-- Scripts -->
    <script src="../js/main.js?v=18.0"></script>
</body>
</html>'''

    out_file = os.path.join(out_dir, slug)
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(page_html)
    print(f"Generated Article {aid}: {slug} ({len(page_html)} bytes)")

for aid in range(1, 11):
    generate_article_page(aid)

print("\nAll 10 Secur.IA articles updated cleanly without author repetitive titles!")
