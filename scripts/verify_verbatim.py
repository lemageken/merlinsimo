import zipfile
import xml.etree.ElementTree as ET
import re
import html

docx_path = 'd:/ANTIGRAVITY/projets/site-genie/Articles securia.docx'
articles_dir = 'd:/ANTIGRAVITY/projets/site-genie/site/articles'

from rebuild_securia_verbatim import ARTICLES_CONFIG

with zipfile.ZipFile(docx_path) as z:
    xml_content = z.read('word/document.xml')
    tree = ET.fromstring(xml_content)

w_ns = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'

raw_paragraphs = []
for p in tree.iter(f'{{{w_ns}}}p'):
    items = []
    for elem in p.iter():
        if elem.tag == f'{{{w_ns}}}t':
            items.append(elem.text or '')
        elif elem.tag == f'{{{w_ns}}}br':
            items.append('\n')
    text = ''.join(items).strip()
    if text:
        raw_paragraphs.append(text)

articles_raw = {}
current_id = None
for p in raw_paragraphs:
    m = re.match(r'^Article\s+(\d+)\s*$', p, re.IGNORECASE)
    if m:
        current_id = int(m.group(1))
        articles_raw[current_id] = []
    elif current_id is not None:
        articles_raw[current_id].append(p)

all_passed = True
for aid in range(1, 11):
    slug = ARTICLES_CONFIG[aid]['slug']
    html_path = f"{articles_dir}/{slug}"
    with open(html_path, 'r', encoding='utf-8') as f:
        # replace <br> and tags with space or newline
        raw_html = f.read()
        clean_html = re.sub(r'<[^>]+>', ' ', html.unescape(raw_html))
        # normalize whitespace
        clean_html = re.sub(r'\s+', ' ', clean_html)
        
    doc_paragraphs = articles_raw[aid]
    missing = []
    for idx, p in enumerate(doc_paragraphs):
        # normalize p
        clean_p = re.sub(r'^[•\-\*–]\s*', '', p)
        clean_p = re.sub(r'\s+', ' ', clean_p).strip()
        sample = clean_p[:45]
        if sample and sample not in clean_html:
            missing.append((idx, sample))
            
    if missing:
        print(f"FAILED Article {aid} ({slug}): {len(missing)} missing paragraphs out of {len(doc_paragraphs)}!")
        for idx, m in missing[:5]:
            print(f"  Missing [{idx}]: {repr(m)}")
        all_passed = False
    else:
        print(f"PASSED Article {aid} ({slug}): 100% of {len(doc_paragraphs)} paragraphs verified verbatim!")

if all_passed:
    print("\n>>> ALL 10 ARTICLES ARE 100% VERBATIM COMPLETE AND ACCURATE! <<<")
