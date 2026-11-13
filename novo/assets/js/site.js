/* Crescer+PR Jovem — progressive enhancement; HTML content is already in every page. */
(()=>{
  const menu=document.querySelector('.menu-button');const panel=document.getElementById('menu-mobile');
  if(menu&&panel){
    const close=()=>{panel.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');};
    menu.addEventListener('click',()=>{const next=menu.getAttribute('aria-expanded')!=='true';panel.hidden=!next;menu.setAttribute('aria-expanded',String(next));menu.setAttribute('aria-label',next?'Fechar menu':'Abrir menu');});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){close();menu.focus();}});
    panel.addEventListener('click',e=>{if(e.target.closest('a'))close()});
  }
  document.querySelectorAll('[data-filter-group]').forEach(group=>{
    const list=document.querySelector(`[data-list="${group.dataset.filterGroup}"]`);if(!list)return;
    group.addEventListener('click',e=>{const button=e.target.closest('button[data-filter]');if(!button)return;
      const category=button.dataset.filter;
      group.querySelectorAll('button[data-filter]').forEach(b=>{b.classList.toggle('is-active',b===button);b.setAttribute('aria-pressed',String(b===button));});
      list.querySelectorAll('[data-category]').forEach(card=>{const key=card.dataset.category;card.hidden=category!=='Todos'&&key!==category&&!(category==='Estágio'&&key==='Estágio & Aprendiz')&&!(category==='Jovem Aprendiz'&&key==='Estágio & Aprendiz')&&!(category==='Primeiro Emprego'&&key==='Todos os perfis');});
    });
  });
  document.querySelectorAll('img[data-fallback]').forEach(img=>{
    const fallback=()=>{ if(img.dataset.failed==='true')return;img.dataset.failed='true';img.src=img.dataset.fallback;};
    img.addEventListener('error',fallback,{once:true});
    if(img.complete&&img.naturalWidth===0)fallback();
  });
  const search=document.getElementById('faq-search');if(search){const items=[...document.querySelectorAll('.faq-item')],empty=document.querySelector('.search-empty');
    const normalize=t=>t.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR');
    search.addEventListener('input',()=>{const q=normalize(search.value.trim());let shown=0;items.forEach(item=>{const ok=normalize(item.textContent).includes(q);item.hidden=!ok;if(ok)shown++});if(empty)empty.hidden=shown>0;});
  }
})();
