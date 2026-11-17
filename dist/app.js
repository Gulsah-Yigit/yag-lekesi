'use strict';
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const categories=JSON.parse($('#category-data').textContent);
const cards=$$('.knowledge-card');
const normalize=s=>s.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ı/g,'i').replace(/[^a-z0-9\s]/g,' ');
const stop=new Set(['yag','nasil','cikar','cikarilir','cikarma','temizlenir','temizleme','icin','ve','ne','en','iyi','bir','halde','mi','mu','hakkinda']);
const words=s=>normalize(s).split(/\s+/).filter(w=>w&&!stop.has(w)&&!w.startsWith('leke'));
const entries=cards.map((card,index)=>({card,index,id:card.id,cat:card.dataset.category,title:$('h3',card).textContent,keywords:normalize(card.dataset.keywords+' '+$('h3',card).textContent),featured:card.dataset.featured==='true'}));
const requestedCategory=new URLSearchParams(location.search).get('kategori');
let currentCategory=categories.some(c=>c.id===requestedCategory)?requestedCategory:'clothes',matched=[];
function rankEntries(query,category='all'){
 const terms=words(query);
 return entries.filter(e=>category==='all'||e.cat===category).map(e=>{const parts=e.keywords.split(/\s+/),title=normalize(e.title);const score=terms.reduce((total,w)=>{const hit=e.keywords.includes(w)||parts.some(p=>p.length>3&&w.startsWith(p));return total+(hit?(title.includes(w)?4:2):0);},0);return {e,score};}).filter(x=>!terms.length||x.score>0).sort((a,b)=>terms.length?b.score-a.score||a.e.index-b.e.index:Number(b.e.featured)-Number(a.e.featured)||a.e.index-b.e.index).map(x=>x.e);
}
const track = $('#knowledge-grid');
const categoryControls = $$('.category-button, .quick-category');
const library = $('.knowledge-main');
let showAllTopics = false;

function renderLibrary() {
  const cat = categories.find(c => c.id === currentCategory);
  const all = currentCategory === 'all';
  matched = rankEntries('', currentCategory);
  const shown = all && !showAllTopics ? matched.slice(0, 5) : matched;
  const visible = new Set(shown.map(entry => entry.id));
  const matchedCards = new Set(matched.map(entry => entry.card));

  track.classList.toggle('uniform-topics', all);
  cards.forEach(card => {
    card.hidden = !visible.has(card.id);
    card.open = false;
  });
  track.append(...matched.map(entry => entry.card), ...cards.filter(card => !matchedCards.has(card)));
  categoryControls.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.category === currentCategory));
  });
  $('#library-view-title').textContent = all ? 'Tüm konular' : cat.name + ' için sorular';
  $('#library-count').textContent = shown.length + ' rehber gösteriliyor';

  const more = $('#show-all-topics');
  more.hidden = !all || matched.length <= 5;
  more.textContent = showAllTopics ? 'Daha az göster' : 'Tüm konuları gör';
  more.setAttribute('aria-expanded', String(showAllTopics));
}

function setCategory(id) {
  showAllTopics = false;
  currentCategory = id;
  renderLibrary();
}

categoryControls.forEach(button => button.addEventListener('click', () => {
  setCategory(button.dataset.category);
  if (button.classList.contains('quick-category')) {
    library.focus({preventScroll: true});
    library.scrollIntoView({block: 'start'});
  }
}));

$('#show-all-topics').addEventListener('click', () => {
  showAllTopics = !showAllTopics;
  renderLibrary();
  if (showAllTopics) $('summary', matched[5].card)?.focus();
  else library.scrollIntoView({block: 'start'});
});

function openGuide(id){
 const entry=entries.find(e=>e.id===id);if(!entry)return;
 if(entry.card.hidden){setCategory(entry.cat);}
 cards.forEach(card=>{if(card!==entry.card)card.open=false;});
 entry.card.open=true;
 entry.card.scrollIntoView({block:'start',behavior:'smooth'});
 history.replaceState(null,'',location.pathname+location.search+'#'+id);
}
entries.forEach(({card}) => card.addEventListener('toggle', () => {
  if (!card.open) return;
  cards.forEach(other => { if (other !== card) other.open = false; });
  $$('.guide-detail-photo img', card).forEach(img => { img.loading = 'eager'; });
}));
document.addEventListener('click',event=>{const link=event.target.closest('[data-open-guide]');if(link){event.preventDefault();openGuide(link.dataset.openGuide);}});

const guideZoom = $('#guide-zoom');
const guideZoomImage = $('img', guideZoom);
const guideZoomCaption = $('figcaption', guideZoom);

track.addEventListener('click', event => {
  const link = event.target.closest('[data-guide-zoom]');
  if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  if (typeof guideZoom.showModal !== 'function') return;
  event.preventDefault();
  guideZoomCaption.textContent = link.getAttribute('aria-label').replace(/ görselini büyüt$/, '');
  guideZoomImage.src = link.href;
  guideZoom.showModal();
});
window.addEventListener('hashchange',()=>{const id=decodeURIComponent(location.hash.slice(1));if(entries.some(e=>e.id===id))openGuide(id);});
// The hero search and the library use the same 40-guide index.
const heroInput=$('#guide-search'),searchResults=$('#search-results');
function closeSearch(){searchResults.hidden=true;heroInput.setAttribute('aria-expanded','false');}
function renderHeroSearch(){
 const results=rankEntries(heroInput.value).slice(0,6),list=$('ul',searchResults);list.replaceChildren();
 $('.search-result-count').textContent=results.length?'İlgili rehberler':'Bu ifadeyle rehber bulunamadı. Kütüphanede yüzey seçerek başlayın.';
 results.forEach(e=>{const li=document.createElement('li'),a=document.createElement('a'),span=document.createElement('span');a.href='#'+e.id;a.dataset.openGuide=e.id;a.append(document.createTextNode(e.title));span.textContent='↗';span.setAttribute('aria-hidden','true');a.append(span);a.addEventListener('click',closeSearch);li.append(a);list.append(li);});
 if(!results.length){const li=document.createElement('li'),a=document.createElement('a');a.href='#yuzeyler';a.textContent='Bilgi kütüphanesine git →';a.addEventListener('click',closeSearch);li.append(a);list.append(li);}
 searchResults.hidden=false;heroInput.setAttribute('aria-expanded','true');
}
heroInput.addEventListener('input',renderHeroSearch);
heroInput.addEventListener('keydown',event=>{if(event.key==='Escape')closeSearch();if(event.key==='ArrowDown'){event.preventDefault();if(searchResults.hidden)renderHeroSearch();$('a',searchResults)?.focus();}});
$('.hero-search').addEventListener('submit',event=>{event.preventDefault();renderHeroSearch();$('a',searchResults)?.focus();});
searchResults.addEventListener('keydown',event=>{const links=$$('a',searchResults),index=links.indexOf(document.activeElement);if(event.key==='Escape'){closeSearch();heroInput.focus();}if(event.key==='ArrowDown'&&index>=0){event.preventDefault();links[(index+1)%links.length].focus();}if(event.key==='ArrowUp'&&index>=0){event.preventDefault();if(index===0)heroInput.focus();else links[index-1].focus();}});
document.addEventListener('click',event=>{if(!$('.hero-search').contains(event.target))closeSearch();});
document.addEventListener('focusin',event=>{if(!$('.hero-search').contains(event.target))closeSearch();});
// Existing lower-page condition tabs and mobile navigation.
const tabs=$$('[data-condition-tab]');
function chooseCondition(id){tabs.forEach(t=>{const active=t.dataset.conditionTab===id;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;$('#'+t.getAttribute('aria-controls')).hidden=!active;});}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>chooseCondition(tab.dataset.conditionTab));tab.addEventListener('keydown',event=>{const keys={ArrowRight:(index+1)%tabs.length,ArrowLeft:(index+tabs.length-1)%tabs.length,Home:0,End:tabs.length-1};if(event.key in keys){event.preventDefault();const next=tabs[keys[event.key]];chooseCondition(next.dataset.conditionTab);next.focus();}});});
renderLibrary();
chooseCondition('old');
$('.scenario-tabs').hidden=false;
const initialId=decodeURIComponent(location.hash.slice(1));if(entries.some(e=>e.id===initialId))openGuide(initialId);

$('.announcement-close')?.addEventListener('click',()=>{$('.announcement').hidden=true;});

const comparisonRange = $('.comparison-range');
const comparison = comparisonRange.closest('.hero-comparison');
comparisonRange.addEventListener('input', () => {
  comparison.style.setProperty('--split', comparisonRange.value + '%');
});

const productGallery = $('#product-gallery');
if (productGallery) {
  const controls = $('.product-gallery-controls');
  const mobileGallery = matchMedia('(max-width: 640px)');
  const [previous, next] = $$('[data-product-direction]', controls);
  function updateProductControls() {
    const overflow = productGallery.scrollWidth - productGallery.clientWidth;
    controls.hidden = !mobileGallery.matches || overflow <= 1;
    previous.disabled = productGallery.scrollLeft <= 1;
    next.disabled = productGallery.scrollLeft >= overflow - 1;
  }
  function moveProduct(direction) {
    const [first, second] = productGallery.children;
    const step = second.offsetLeft - first.offsetLeft;
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    productGallery.scrollBy({left: direction * step, behavior: reduceMotion ? 'instant' : 'smooth'});
  }
  for (const button of [previous, next]) {
    button.addEventListener('click', () => moveProduct(Number(button.dataset.productDirection)));
  }
  mobileGallery.addEventListener('change', updateProductControls);
  productGallery.addEventListener('scroll', updateProductControls, {passive: true});
  new ResizeObserver(updateProductControls).observe(productGallery);
  updateProductControls();
}


const oilSelector = $('.oil-selector');
if (oilSelector) {
  const picker = $('.oil-options', oilSelector);
  const options = $$('[data-oil]', picker);
  const photo = $('.oil-photo', oilSelector);
  let selected = $('[data-selected]', picker);
  let expanded = null;

  function setExpanded(option) {
    if (expanded) {
      expanded.setAttribute('aria-expanded', 'false');
      document.getElementById(expanded.getAttribute('aria-controls')).hidden = true;
    }
    expanded = option;
    if (option) {
      option.setAttribute('aria-expanded', 'true');
      document.getElementById(option.getAttribute('aria-controls')).hidden = false;
    }
  }

  function selectOil(option) {
    if (option === selected) return;
    if (expanded && expanded !== option) setExpanded(null);
    selected.removeAttribute('data-selected');
    option.setAttribute('data-selected', '');
    selected = option;
    photo.src = 'assets/oil-selector/' + option.dataset.oil + '.jpg';
  }

  function moveOil(option) {
    selectOil(option);
    picker.scrollTop = option.offsetTop - (picker.clientHeight - option.offsetHeight) / 2;
  }

  moveOil(selected);

  picker.addEventListener('click', event => {
    const option = event.target.closest('[data-oil]');
    if (!option) return;
    const nextExpanded = expanded === option ? null : option;
    moveOil(option);
    setExpanded(nextExpanded);
  });
  picker.addEventListener('scroll', () => {
    const center = picker.scrollTop + picker.clientHeight / 2;
    let closest = selected;
    let distance = Infinity;
    for (const option of options) {
      const nextDistance = Math.abs(option.offsetTop + option.offsetHeight / 2 - center);
      if (nextDistance < distance) {
        closest = option;
        distance = nextDistance;
      }
    }
    selectOil(closest);
  }, {passive: true});
  picker.addEventListener('keydown', event => {
    const direction = {ArrowUp: -1, ArrowDown: 1}[event.key];
    if (!direction) return;
    event.preventDefault();
    const index = Math.max(0, Math.min(options.length - 1, options.indexOf(selected) + direction));
    moveOil(options[index]);
    options[index].focus({preventScroll: true});
  });
}
