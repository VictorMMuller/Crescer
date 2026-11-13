/* Crescer+PR Jovem — alternância acessível entre temas, sem dependências. */
(()=>{'use strict';
  const key='crescerpr-tema';
  const root=document.documentElement;
  const buttons=[...document.querySelectorAll('[data-theme-toggle]')];
  const images=[...document.querySelectorAll('.site-header .brand img, .lab-header .lab-brand img')];
  const update=(value,persist)=>{
    const dark=value==='dark';
    root.setAttribute('data-theme',dark?'dark':'light');
    const meta=document.querySelector('meta[name="color-scheme"]');
    if(meta)meta.setAttribute('content',dark?'dark':'light');
    const themeColor=document.querySelector('meta[name="theme-color"]');
    if(themeColor)themeColor.setAttribute('content',dark?'#10251f':'#173f36');
    for(const img of images){
      const original=img.dataset.originalThemeLogo || img.getAttribute('src');
      img.dataset.originalThemeLogo=original;
      const next=dark?original.replace(/logo\.svg(?:\?.*)?$/,'logo-claro.svg'):original;
      if(img.getAttribute('src')!==next)img.setAttribute('src',next);
    }
    for(const btn of buttons){
      btn.setAttribute('aria-pressed',String(dark));
      btn.setAttribute('aria-label',dark?'Ativar modo claro':'Ativar modo escuro');
      btn.setAttribute('title',dark?'Mudar para modo claro':'Mudar para modo escuro');
      const icon=btn.querySelector('.theme-toggle-icon');
      if(icon)icon.textContent=dark?'☀':'☾';
      const label=btn.querySelector('.theme-toggle-label');
      if(label)label.textContent=dark?'Modo escuro ativo. Ativar claro.':'Modo claro ativo. Ativar escuro.';
    }
    if(persist){try{localStorage.setItem(key,dark?'dark':'light')}catch(e){/* navegador privado */}}
  };
  update(root.getAttribute('data-theme')==='dark'?'dark':'light',false);
  for(const btn of buttons){btn.addEventListener('click',()=>update(root.getAttribute('data-theme')==='dark'?'light':'dark',true))}
  window.addEventListener('storage',e=>{if(e.key===key)update(e.newValue==='dark'?'dark':'light',false)});
})();
