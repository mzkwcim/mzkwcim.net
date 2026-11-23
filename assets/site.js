document.querySelectorAll('[data-menu]').forEach(b=>{const n=document.getElementById(b.getAttribute('aria-controls'));if(!n)return;const setOpen=open=>{n.classList.toggle('open',open);b.setAttribute('aria-expanded',String(open));b.textContent=open?'Zamknij menu ✕':'Otwórz menu ☰';};b.addEventListener('click',()=>setOpen(!n.classList.contains('open')));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&n.classList.contains('open')){setOpen(false);b.focus();}});});document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);b.textContent=b.dataset.copied}catch(e){}}));
// Keep shared contact details consistent across static pages.
for(const footer of document.querySelectorAll('.footlinks')){
 const links=[['mailto:wkrak98@gmail.com','E-mail'],['https://www.linkedin.com/in/waldemar-krakowiak-29b1b9292','LinkedIn']];
 for(const [href,label] of links){if(!footer.querySelector('a[href="'+href+'"]')){const a=document.createElement('a');a.href=href;a.textContent=label;if(href.startsWith('https:')){a.target='_blank';a.rel='noopener noreferrer'}footer.prepend(a)}}
}
