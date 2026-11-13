/* Sons opcionais: sintetizados localmente no navegador, sem arquivos ou rastreamento. */
/* Sem autoplay; o usuário precisa ativar explicitamente. */
(()=>{'use strict';
 const toggle=document.querySelector('[data-sound-toggle]');
 if(!toggle) return;
 let enabled=false,context=null;
 const set=state=>{enabled=state;toggle.setAttribute('aria-pressed',String(state));toggle.setAttribute('aria-label',state?'Desativar sons da interface':'Ativar sons da interface');toggle.innerHTML='<span class="sound-icon" aria-hidden="true">'+(state?'♫':'♪')+'</span> '+(state?'Sons ligados':'Sons desligados')};
 const play=(type='tap')=>{
   if(!enabled)return;
   try{
     const AudioCtx=window.AudioContext||window.webkitAudioContext;
     if(!AudioCtx)return;
     context=context||new AudioCtx();
     if(context.state==='suspended')context.resume();
     const now=context.currentTime;
     const osc=context.createOscillator(),gain=context.createGain();
     osc.type='sine';osc.frequency.setValueAtTime(type==='route'?520:440,now);
     if(type==='route')osc.frequency.exponentialRampToValueAtTime(660,now+.09);
     gain.gain.setValueAtTime(.0001,now);
     gain.gain.exponentialRampToValueAtTime(.025,now+.012);
     gain.gain.exponentialRampToValueAtTime(.0001,now+.16);
     osc.connect(gain);gain.connect(context.destination);osc.start(now);osc.stop(now+.18);
   }catch(e){/* áudio pode ser bloqueado, navegação permanece normal */}
 };
 set(false);
 toggle.addEventListener('click',()=>{set(!enabled);if(enabled)play('route')});
 document.addEventListener('click',e=>{if(!enabled||e.target.closest('[data-sound-toggle]'))return;if(e.target.closest('.journey-option'))play('route');else if(e.target.closest('.lab-btn,.tool-card,.lab-links a,.lab-mobile a,.footer-links a'))play('tap')});
})();
