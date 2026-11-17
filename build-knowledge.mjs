import fs from 'node:fs/promises';
import {methods} from './content/guide-methods.mjs';
import {guidePreparation, careLabelSteps} from './content/guide-preparation.mjs';
import {productGuideId, productOptions} from './content/guide-options.mjs';
import {categories,guides} from './content/knowledge.mjs';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const icon=name=>`<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const catOf=g=>categories.find(c=>c.id===g.cat);
const heroImageAlt = 'Mavi denim ve beyaz tişört etrafında altın renkli yağ damlaları; temsili stüdyo görseli';
let html=await fs.readFile('content/page-base.html','utf8');
const categoryButtons=categories.map(c=>`<button type="button" class="category-button" data-category="${c.id}" aria-pressed="${c.id==='all'}" style="--category-bg:${c.color};--category-ink:${c.ink}"><span class="category-symbol">${icon(c.id === 'delicate' ? 'leaf' : c.icon)}</span><span>${c.name}</span><small>${c.id==='all'?guides.length:guides.filter(g=>g.cat===c.id).length}</small></button>`).join('');
const suppliesList = (title, items, heading = 'h5') => `<div>
  <${heading}>${title}</${heading}>
  <ul>${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>
</div>`;

const compareProducts = `<section class="guide-options" aria-labelledby="product-comparison">
    <h4 id="product-comparison">Ürünleri ve evdeki seçenekleri karşılaştırın</h4>
    <dl>${productOptions.map(([name, description, id]) => `<div><dt>${esc(name)}</dt><dd>${esc(description)} <a href="#${id}" data-open-guide="${id}">Örnek uygulamayı gör →</a></dd></div>`).join('')}</dl>
  </section>`;

function renderMethod(guideId, id = guideId, stepDirectory = `assets/guide-steps/${guideId}`) {
  const method = methods[guideId];
  const steps = method.steps.map(([title, description], index) => `
    <li>
      <span class="guide-step-marker" aria-hidden="true">
        <img src="${stepDirectory}/${index + 1}.jpg" alt="" width="96" height="96" loading="lazy" decoding="async"><span>${index + 1}</span>
      </span>
      <div class="guide-step-copy">
        <h4>${esc(title)}</h4>
        <p>${esc(description)}</p>
      </div>
    </li>`).join('');
  return `      <ol class="knowledge-steps" role="list">${steps}</ol>
      <section class="guide-supplies" aria-labelledby="${id}-supplies">
        <h4 id="${id}-supplies">Gerekenler</h4>
        <div class="guide-supplies-grid">
          ${suppliesList('Araç ve gereçler', method.tools)}
          ${suppliesList('Malzemeler', method.materials)}
        </div>
      </section>
      <aside class="guide-tip">
        <strong>İpucu</strong>
        <p>${esc(method.tip)}</p>
      </aside>
      <aside class="knowledge-caution">
        <strong>Uyarı</strong>
        <p>${esc(method.warning)}</p>
      </aside>
`;
}

function guidePhoto(path, caption, wide = false) {
  return `<a class="guide-detail-photo" href="${path}" data-guide-zoom aria-label="${esc(caption)} görselini büyüt">
    <img src="${path}" alt="" width="${wide ? 600 : 282}" height="${wide ? 400 : 282}" loading="lazy" decoding="async">
    <span class="guide-zoom-icon" aria-hidden="true">${icon('zoom')}</span>
  </a>`;
}

function renderGuideDetail({id, title}) {
  const method = methods[id];
  const denim = id === 'kot-pantolondan-yag-lekesi';
  const directory = denim ? 'assets/guide-detail/denim' : `assets/guide-steps/${id}`;
  const [prepCaption, prepText] = guidePreparation[id];
  const prepPhoto = denim ? directory + '/prep.jpg' : `assets/guide-detail/preparation/${id}.jpg?v=2`;
  const steps = method.steps.map(([heading, description], index) => {
    const step = index + 1;
    const careLabel = careLabelSteps[id] === step;
    const path = careLabel ? `assets/guide-detail/care-labels/${id}.jpg?v=2` : `${directory}/${step}.jpg`;
    const photo = guidePhoto(path, careLabel ? 'Giysinin iç yüzündeki temsili bakım etiketi' : heading, denim);
    return `
    <li class="guide-detail-step">
      <div><h5>${step}. ${esc(heading)}</h5><p>${esc(description)}</p></div>
      ${careLabel ? `<figure class="guide-detail-figure">${photo}<figcaption>Temsili bakım etiketi</figcaption></figure>` : photo}
    </li>`;
  }).join('');

  return `<article class="knowledge-detail guide-article" aria-labelledby="${id}-detail-title">
    <header class="guide-detail-header">
      <h4 id="${id}-detail-title">${esc(title)}</h4>
    </header>
    <ol class="guide-detail-steps" role="list">${steps}</ol>
    <aside class="guide-detail-warning">
      <h5>${denim ? 'Koyu mavi ve siyah kotlarda dikkat' : 'Dikkat edilmesi gerekenler'}</h5>
      <p>${esc(method.warning)}</p>
    </aside>
    <section class="guide-detail-prep" aria-labelledby="${id}-prep">
      <div class="guide-detail-prep-visual">
        <div>
          <h5 id="${id}-prep">Başlamadan önce</h5>
          <p>${esc(prepText)}</p>
        </div>
        <figure class="guide-detail-figure guide-detail-prep-photo">
          ${guidePhoto(prepPhoto, prepCaption, denim)}
          <figcaption>${esc(prepCaption)}</figcaption>
        </figure>
      </div>
      <div class="guide-detail-supplies">
        ${suppliesList('Araç ve gereçler', method.tools, 'h6')}
        ${suppliesList('Malzemeler', method.materials, 'h6')}
      </div>
    </section>
    <aside class="guide-detail-tip"><strong>İpucu</strong><p>${esc(method.tip)}</p></aside>${id === productGuideId ? '\n    ' + compareProducts : ''}
  </article>`;
}

html = html.replaceAll(/<!-- GUIDE_ANSWER ([a-z-]+) -->/g, (_, id) => esc(methods[id].answer));
html = html.replaceAll(/<!-- SCENARIO_METHOD ([a-z-]+) -->/g, (_, id) => renderMethod(id, 'scenario-' + id, `assets/stain-scenarios/steps/${id}`));

const oilTypes = [
  ['motor-yagi-lekesi', 'Motor yağı'],
  ['yemek-yagi-lekesi', 'Yemek ve kızartma yağı'],
  ['salcali-yag-lekesi', 'Yağlı sos ve salça'],
  ['gres-yagi-lekesi', 'Gres yağı'],
  ['hidrolik-yag-lekesi', 'Hidrolik yağ'],
  ['yanmis-yag', 'Yanmış yağ']
];
const defaultOilId = 'salcali-yag-lekesi';
html = html.replace('<!-- OIL_SELECTOR -->', `<div class="oil-selector">
      <img class="oil-photo" src="assets/oil-selector/${defaultOilId}.jpg" width="600" height="450" alt="" loading="lazy" decoding="async">
      <div class="oil-selector-copy">
        <div class="oil-options" role="group" aria-label="Yağ türü seçin">
          ${oilTypes.map(([id,name]) => `<button type="button" data-oil="${id}"${id===defaultOilId?' data-selected':''} aria-expanded="false" aria-controls="oil-method-${id}"><span>${esc(name)}</span><span class="oil-option-marker" aria-hidden="true"></span></button>`).join('\n          ')}
        </div>
      </div>
    </div>
    ${oilTypes.map(([id]) => `<div class="guide-answer oil-method" id="oil-method-${id}" hidden>
      <h3>${esc(guides.find(guide => guide.id === id).title)}</h3>
      ${renderMethod(id, 'oil-' + id)}
    </div>`).join('\n    ')}`);

const cards = guides.map(guide => {
  const category = catOf(guide);

  return `<details class="knowledge-card" id="${guide.id}" data-category="${guide.cat}" data-keywords="${esc(guide.aliases)}" data-featured="${!!guide.featured}" style="--category-bg:${category.color};--category-ink:${category.ink}">
    <summary aria-label="${esc(guide.title)}">
      <h3>${esc(guide.title)}</h3>
      <span class="accordion-chevron" aria-hidden="true">⌄</span>
    </summary>
    ${renderGuideDetail(guide)}
  </details>`;
}).join('\n');

const quickAnswers = {
  clothes: 'Kot, kumaş pantolon, elbise ve tişörtteki yağ lekeleri için temizleme adımları.',
  home: 'Halıya dökülen yağ ve koltukta kalan izler için ayrı rehberler.',
  hard: 'Mutfak duvarı, fayans ve ocaktaki yağ lekeleri için yüzeye uygun yöntemler.'
};
const cardIcons = {clothes: 'shirt', home: 'sofa', hard: 'sparkles'};
const categoryCards = categories.filter(c => Object.hasOwn(quickAnswers, c.id)).map(c => {
  const photo = {clothes: 'clothes-linen-shirt', hard: 'hard-kitchen-stove', home: 'home-seat'}[c.id] ?? c.id;
  const photoAlt = {hard: 'Ocaktaki tavanın arkasında, mutfak duvarına sıçramış yağ', clothes: 'Açık mavi gömlekte yağ lekesi', home: 'Koltuk minderinin oturulan kısmındaki yağ lekesi'}[c.id] ?? '';
  return `<button type="button" class="quick-category" data-category="${c.id}" aria-controls="knowledge-grid" aria-pressed="${c.id === 'clothes'}" style="--card-accent:${c.color}">
    <img src="assets/category-guide/${photo}-blue.jpg" alt="${esc(photoAlt)}" width="180" height="150" loading="lazy">
    <span class="quick-category-copy">
      ${icon(cardIcons[c.id])}
      <strong>${esc(c.name)}</strong>
      <span>${esc(quickAnswers[c.id])}</span>
      <span class="quick-category-link">Sorunları gör <span aria-hidden="true">→</span></span>
    </span>
  </button>`;
}).join('');
const section = `<section class="knowledge-section" id="yuzeyler" aria-labelledby="knowledge-title">
  <div class="container">
    <span id="rehber" class="anchor-target" aria-hidden="true"></span>
    <div class="knowledge-heading">
      <div>
        <div class="knowledge-title-group">
          <p class="eyebrow">YAĞ LEKESİ REHBERLERİ</p>
          <h2 id="knowledge-title">Yüzeye göre yağ lekesi nasıl çıkar?</h2>
        </div>
        <p>Kıyafet, duvar, halı… Yağ lekesi neredeyse, ona uygun adımlar aşağıda.</p>
      </div>
    </div>
    <div class="quick-categories" role="group" aria-label="Kategorilere göre hızlı yanıtlar">${categoryCards}</div>
    <div class="knowledge-layout">
      <aside class="knowledge-sidebar">
        <h3 class="category-label">Kategoriler</h3>
        <nav class="category-nav" aria-label="Soru kategorileri">${categoryButtons}</nav>
      </aside>
      <div class="knowledge-main" tabindex="-1">
        <h3 class="sr-only" id="library-view-title">Kıyafetler için sorular</h3>
        <p class="sr-only" id="library-count" role="status"></p>
        <div class="knowledge-grid" id="knowledge-grid" role="region" aria-labelledby="library-view-title">${cards}</div>
        <button class="show-all-topics" id="show-all-topics" type="button" aria-controls="knowledge-grid" aria-expanded="false" hidden>Tüm konuları gör</button>
      </div>
    </div>
  </div>
</section>`;
html=html.replace(/<section class="section surfaces"[\s\S]*?(?=<section class="section difficult-section")/,section+'\n');
html=html.replaceAll('assets/hero-yag-lekesi-v2.webp','assets/v3/hero-v3.webp');
html=html.replaceAll('Krem rengi gömleğin üzerindeki yağ lekesi ve yanında devrilmiş zeytinyağı şişesi',heroImageAlt).replaceAll('Açık renk gömlekte yağ lekesi ve yanında zeytinyağı şişesi',heroImageAlt);
html=html.replace('01 / GÜNLÜK KAZALAR','KUMAŞTAN YÜZEYE · DOĞRU YAKLAŞIM');
html=html.replace('Yöntemini bul','Rehberleri keşfet').replaceAll('Yüzeye göre rehber','Bilgi kütüphanesi');
html=html.replace('Kıyafet, halı, koltuk ya da duvar. Yağ lekesi için nereden başlayacağınızı bulun.','Kot pantolon, halı, duvar ve daha fazlası. Yüzeye göre yağ lekesi rehberlerini keşfedin.');
html=html.replace('Yöntemler, üretici ve kurum rehberlerinden özetlenmiştir.','Üretici ve kurum rehberlerinden yararlanılmıştır.');
const routeMap={clothes:'kiyafetten-yag-lekesi',rug:'halidan-yag-lekesi',sofa:'koltuktan-yag-lekesi',wall:'duvardan-yag-lekesi'};
html=html.replace(/href="#rehber" data-surface-link="(clothes|rug|sofa|wall)"(?: data-guide-condition="(old|washed)")?/g,(_,s,c)=>{const id=c==='old'?'beklemis-yag-lekesi':c==='washed'?'yikanmis-yag-lekesi':routeMap[s];return `href="#${id}" data-open-guide="${id}"`;});
const dialog=`<dialog class="guide-zoom-dialog" id="guide-zoom" aria-labelledby="guide-zoom-caption">
  <form method="dialog"><button type="submit" aria-label="Görseli kapat" autofocus>×</button></form>
  <figure><img alt=""><figcaption id="guide-zoom-caption"></figcaption></figure>
</dialog>`;
html=html.replace('<footer class="footer">',dialog+'\n<footer class="footer">');
const categoryMeta=JSON.stringify(categories);
html=html.replace('</defs></svg>', '<symbol id="i-zoom" viewBox="0 0 24 24"><circle cx="10" cy="10" r="6.5"/><path d="M15 15l5 5M7 10h6m-3-3v6"/></symbol></defs></svg>');
html=html.replace('<script src="app.js" defer></script>','<script src="app.js" defer></script><script type="application/json" id="category-data">'+categoryMeta+'</script>');
html=html.replace('<symbol id="i-shirt"', '<symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></symbol><symbol id="i-drop" viewBox="0 0 24 24"><path d="M12 3c-2 4-7 8-7 12a7 7 0 0 0 14 0c0-4-5-8-7-12Z"/></symbol><symbol id="i-shirt"');
const schemaMatch=html.match(/<script type="application\/ld\+json" id="page-schema">([\s\S]*?)<\/script>/);
const schema=JSON.parse(schemaMatch[1]);
schema['@graph'][1].primaryImageOfPage.url='https://yaglekesi-studio-0311.olur.chatgpt.site/assets/hero-shirt-reference-before.jpg';
schema['@graph'][1].primaryImageOfPage.caption='Beyaz gömlekteki yağ lekesinin temsili öncesi ve sonrası.';
schema['@graph'][1].hasPart={'@type':'ItemList','name':'Yağ lekesi bilgi rehberleri','numberOfItems':guides.length,'itemListElement':guides.map((g,i)=>({'@type':'ListItem',position:i+1,name:g.title,url:'https://yaglekesi-studio-0311.olur.chatgpt.site/#'+g.id}))};
html=html.replace(schemaMatch[0],'<script type="application/ld+json" id="page-schema">'+JSON.stringify(schema)+'</script>');
html=html.replaceAll('yayınlamadan','yaymadan');
html=html.replaceAll(/<\/?em>/g,'');
html=html.replace('<link rel="stylesheet" href="style.css">','<link rel="stylesheet" href="style.css"><link rel="stylesheet" href="knowledge.css?v=22"><link rel="stylesheet" href="carousel.css"><link rel="stylesheet" href="hero-polish.css?v=20"><link rel="stylesheet" href="accordion.css?v=38"><link rel="stylesheet" href="blue-theme.css?v=34"><link rel="stylesheet" href="guide-detail.css?v=4">');
html=html.replace('src="app.js"', 'src="app.js?v=35"');
await fs.writeFile('dist/index.html',html);
console.log(JSON.stringify({guides:guides.length,categories:categories.filter(c=>c.id!=='all').map(c=>({name:c.name,count:guides.filter(g=>g.cat===c.id).length}))}));
