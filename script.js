(function(){
  const body=document.body;
  document.querySelectorAll('img[data-src]').forEach(img=>{
    const remote=img.dataset.src;
    const probe=new Image();
    probe.onload=()=>{img.src=remote;};
    probe.src=remote;
  });

  const navToggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('#site-nav');
  navToggle?.addEventListener('click',()=>{
    const open=nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded',String(open));
    navToggle.textContent=open?'×':'☰';
  });
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('is-open');navToggle?.setAttribute('aria-expanded','false');if(navToggle)navToggle.textContent='☰';
  }));

  const tabs=[...document.querySelectorAll('.menu-tab')];
  const panels={beef:document.querySelector('#menu-panel-beef'),chicken:document.querySelector('#menu-panel-chicken'),sides:document.querySelector('#menu-panel-sides')};
  tabs.forEach(tab=>tab.addEventListener('click',()=>{
    const filter=tab.dataset.filter;
    tabs.forEach(t=>{const active=t===tab;t.classList.toggle('is-active',active);t.setAttribute('aria-selected',String(active));});
    Object.entries(panels).forEach(([key,panel])=>panel.classList.toggle('hidden',key!==filter));
  }));

  const modal=document.querySelector('#menuModal');
  const openModal=()=>{modal.hidden=false;modal.setAttribute('aria-hidden','false');body.classList.add('no-scroll');modal.querySelector('[data-close-modal]')?.focus();};
  const closeModal=()=>{modal.hidden=true;modal.setAttribute('aria-hidden','true');body.classList.remove('no-scroll');document.querySelector('#openMenuImage')?.focus();};
  document.querySelector('#openMenuImage')?.addEventListener('click',openModal);
  modal?.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal&&!modal.hidden)closeModal();});

  const year=document.querySelector('#year'); if(year) year.textContent=new Date().getFullYear();

  function updateOpenStatus(){
    const el=document.querySelector('#openStatus'); if(!el)return;
    const now=new Date();
    const parts=new Intl.DateTimeFormat('fr-FR',{timeZone:'Africa/Casablanca',weekday:'long',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now);
    const weekday=parts.find(p=>p.type==='weekday')?.value||'';const hour=Number(parts.find(p=>p.type==='hour')?.value||0);const minute=Number(parts.find(p=>p.type==='minute')?.value||0);const mins=hour*60+minute;
    const day=weekday.toLowerCase();
    let open=false;
    if(day!=='dimanche'){
      const start=day==='samedi'?9*60:15*60;
      open=mins>=start || mins<30;
    }
    el.textContent=open?'OUVERT MAINTENANT':'FERMÉ ACTUELLEMENT';el.classList.toggle('closed',!open);
  }
  updateOpenStatus();
})();