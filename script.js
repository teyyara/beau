(function(){
  const body=document.body;

  document.querySelectorAll('img[data-src]').forEach(img=>{
    const remote=img.dataset.src;
    const probe=new Image();
    probe.onload=()=>{img.src=remote;};
    probe.onerror=()=>{};
    probe.src=remote;
  });

  const navToggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('#site-nav');
  navToggle?.addEventListener('click',()=>{
    const open=nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded',String(open));
    navToggle.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');
    navToggle.textContent=open?'×':'☰';
  });
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded','false');
    navToggle?.setAttribute('aria-label','Ouvrir le menu');
    if(navToggle)navToggle.textContent='☰';
  }));

  const tabs=[...document.querySelectorAll('.menu-tab')];
  const panels={beef:document.querySelector('#menu-panel-beef'),chicken:document.querySelector('#menu-panel-chicken'),sides:document.querySelector('#menu-panel-sides')};

  function activateTab(tab, moveFocus=false){
    const filter=tab.dataset.filter;
    tabs.forEach(t=>{
      const active=t===tab;
      t.classList.toggle('is-active',active);
      t.setAttribute('aria-selected',String(active));
      t.tabIndex=active?0:-1;
    });
    Object.entries(panels).forEach(([key,panel])=>{
      const active=key===filter;
      panel.classList.toggle('hidden',!active);
      panel.setAttribute('aria-hidden',String(!active));
    });
    if(moveFocus)tab.focus();
  }

  tabs.forEach((tab,index)=>tab.addEventListener('click',()=>activateTab(tab)));
  tabs.forEach((tab,index)=>tab.addEventListener('keydown',e=>{
    let next=-1;
    if(e.key==='ArrowRight')next=(index+1)%tabs.length;
    else if(e.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;
    else if(e.key==='Home')next=0;
    else if(e.key==='End')next=tabs.length-1;
    if(next>=0){
      e.preventDefault();
      activateTab(tabs[next],true);
    }
  }));
  Object.values(panels).forEach(panel=>panel?.setAttribute('aria-hidden',panel.classList.contains('hidden')?'true':'false'));

  const modal=document.querySelector('#menuModal');
  const openMenuButton=document.querySelector('#openMenuImage');
  let lastFocused=null;

  function getFocusable(root){
    return [...root.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')];
  }

  const openModal=()=>{
    lastFocused=document.activeElement;
    modal.hidden=false;
    modal.setAttribute('aria-hidden','false');
    body.classList.add('no-scroll');
    getFocusable(modal)[0]?.focus();
  };

  const closeModal=()=>{
    modal.hidden=true;
    modal.setAttribute('aria-hidden','true');
    body.classList.remove('no-scroll');
    (lastFocused||openMenuButton)?.focus();
  };

  openMenuButton?.addEventListener('click',openModal);
  modal?.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));

  document.addEventListener('keydown',e=>{
    if(!modal||modal.hidden)return;
    if(e.key==='Escape'){
      e.preventDefault();
      closeModal();
      return;
    }
    if(e.key==='Tab'){
      const focusable=getFocusable(modal);
      if(!focusable.length)return;
      const first=focusable[0],last=focusable[focusable.length-1];
      if(e.shiftKey&&document.activeElement===first){
        e.preventDefault();last.focus();
      }else if(!e.shiftKey&&document.activeElement===last){
        e.preventDefault();first.focus();
      }
    }
  });

  const year=document.querySelector('#year');
  if(year)year.textContent=new Date().getFullYear();

  function updateOpenStatus(){
    const el=document.querySelector('#openStatus'); if(!el)return;
    const now=new Date();
    const parts=new Intl.DateTimeFormat('fr-FR',{
      timeZone:'Africa/Casablanca',weekday:'long',hour:'2-digit',minute:'2-digit',hourCycle:'h23'
    }).formatToParts(now);
    const weekday=parts.find(p=>p.type==='weekday')?.value||'';
    const hour=Number(parts.find(p=>p.type==='hour')?.value||0);
    const minute=Number(parts.find(p=>p.type==='minute')?.value||0);
    const mins=hour*60+minute;
    const day=weekday.toLowerCase();
    let open=false;
    if(day!=='dimanche'){
      const start=day==='samedi'?9*60:15*60;
      open=mins>=start || mins<30;
    }
    el.textContent=open?'OUVERT MAINTENANT':'FERMÉ ACTUELLEMENT';
    el.classList.toggle('closed',!open);
  }
  updateOpenStatus();
})();