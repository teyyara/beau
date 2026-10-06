#!/usr/bin/env node
const fs=require('fs');
const path=require('path');
const assert=(condition,message)=>{if(!condition)throw new Error(message);};

const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const html=read('index.html');
const js=read('script.js');
const css=read('styles.css');
const json=JSON.parse(read('project.config.json'));

assert(html.startsWith('<!doctype html>'),'index.html must start with a doctype');
assert(/<html[^>]+lang="fr"/i.test(html),'document language must be French');
assert(/<meta name="viewport"/i.test(html),'viewport metadata missing');
assert(/<meta name="description"/i.test(html),'SEO description missing');
assert(/<script type="application\/ld\+json">[\s\S]*"@type":"Restaurant"/i.test(html),'Restaurant JSON-LD missing');
assert(html.includes('id="main"'),'main landmark missing');
assert(html.includes('id="menu"'),'menu section missing');
assert(html.includes('id="infos"'),'information section missing');
assert(html.includes('href="tel:+212668080508"'),'primary phone CTA missing');
assert(html.includes('href="https://www.instagram.com/beauburgeroujda/"'),'Instagram CTA missing');
assert(html.includes('google.com/maps/search/?api=1&query=Beau+Burger+Oujda'),'Maps CTA missing');

const requiredTabs=['beef','chicken','sides'];
for(const key of requiredTabs){
  assert(new RegExp(`data-filter="${key}"`).test(html),`menu tab ${key} missing`);
  assert(new RegExp(`id="menu-panel-${key}"`).test(html),`menu panel ${key} missing`);
}
assert((html.match(/role="tab"/g)||[]).length===3,'expected exactly three menu tabs');
assert((html.match(/role="tabpanel"/g)||[]).length===3,'expected exactly three tab panels');

const ids=['tab-beef','tab-chicken','tab-sides'];
for(const id of ids)assert(new RegExp(`id="${id}"[^>]+aria-controls="menu-panel-${id.replace('tab-','')}"`).test(html),`${id} has broken aria-controls wiring`);
assert((html.match(/loading="lazy"/g)||[]).length>=3,'below-the-fold images should be lazy-loaded');
assert(html.includes('fetchpriority="high"'),'hero image should be prioritized');
assert(html.includes('<script src="script.js" defer></script>'),'interaction script should be deferred');
assert(css.includes('a:focus-visible,button:focus-visible'),'visible focus state missing');
assert(js.includes('ArrowRight')&&js.includes('ArrowLeft')&&js.includes('Home')&&js.includes('End'),'keyboard tab navigation missing');
assert(js.includes('aria-live')||html.includes('aria-live="polite"'),'live opening status missing');
assert(js.includes("setInterval(updateOpenStatus,60000)"),'opening status must refresh periodically');

const remoteUrls=[...html.matchAll(/https?:\/\/[^"'\s>]+/g)].map(m=>m[0]);
const allowedHosts=new Set(['www.instagram.com','www.google.com','img02.restaurantguru.com','menu02.restaurantguru.com']);
for(const raw of remoteUrls){
  const u=new URL(raw);
  assert(allowedHosts.has(u.host),`unexpected external host: ${u.host}`);
}

assert(json.project_class==='W1','project must remain W1');
assert(json.accessibility_target==='WCAG 2.2 AA','accessibility target drifted');
assert(json.stack==='static HTML/CSS/JS','static architecture drifted');

const localRefs=[...html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g)].map(m=>m[1]);
for(const ref of localRefs)assert(fs.existsSync(path.join(root,ref)),`missing local asset: ${ref}`);

console.log('BEAU BURGER STATIC SMOKE: PASS');
console.log('Checked: HTML metadata, JSON-LD, landmarks, CTAs, menu wiring, lazy loading, focus hooks, keyboard hooks, external-host allowlist, project configuration, and local asset references.');
