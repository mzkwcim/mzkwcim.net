document.querySelectorAll('[data-menu]').forEach(b=>b.addEventListener('click',()=>{const n=document.getElementById('navigation');let o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')}));document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);b.textContent=b.dataset.copied}catch(e){}}));
// Keep shared contact details consistent across static pages.
for(const footer of document.querySelectorAll('.footlinks')){
 const links=[['mailto:wkrak98@gmail.com','E-mail'],['https://www.linkedin.com/in/waldemar-krakowiak-29b1b9292','LinkedIn']];
 for(const [href,label] of links){if(!footer.querySelector('a[href="'+href+'"]')){const a=document.createElement('a');a.href=href;a.textContent=label;if(href.startsWith('https:')){a.target='_blank';a.rel='noopener noreferrer'}footer.prepend(a)}}
}

// Load AdSense on the main website only. Existing article tags must not be duplicated.
if (window.location.hostname === 'mzkwcim.net' &&
    !document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
  const adsense = document.createElement('script');
  adsense.async = true;
  adsense.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3172215132982391';
  adsense.crossOrigin = 'anonymous';
  document.head.appendChild(adsense);
}
