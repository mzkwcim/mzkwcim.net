(()=>{
const form=document.getElementById('clubContactForm');if(!form)return;
const status=document.getElementById('formStatus'),button=form.querySelector('button[type="submit"]'),en=document.documentElement.lang.toLowerCase().startsWith('en');
const messages=en?{
notConfigured:'The form is not configured yet. Please email wkrak98@gmail.com instead.',
ready:'The form is ready to send.',
captchaUnavailable:'Verification is unavailable. Please email wkrak98@gmail.com instead.',
unavailable:'The form is temporarily unavailable. Please email wkrak98@gmail.com instead.',
sending:'Sending your message…',
sendError:'Your message could not be sent.',
sent:'Your message has been sent. Thank you!',
errorSuffix:' You can email wkrak98@gmail.com instead.',
error:'Submission error'
}:{
notConfigured:'Formularz czeka na konfigurację. Na razie napisz na wkrak98@gmail.com.',
ready:'Formularz jest gotowy do wysłania.',
captchaUnavailable:'Weryfikacja jest niedostępna. Napisz na wkrak98@gmail.com.',
unavailable:'Formularz jest chwilowo niedostępny. Napisz na wkrak98@gmail.com.',
sending:'Wysyłam wiadomość.',
sendError:'Nie udało się wysłać wiadomości.',
sent:'Wiadomość została wysłana. Dziękuję!',
errorSuffix:' Możesz napisać na wkrak98@gmail.com.',
error:'Błąd wysyłki'
};
let ready=false,widgetId=null;
const setStatus=(message,kind='')=>{status.textContent=message;status.className='form-status '+kind};
fetch('/api/contact',{cache:'no-store'}).then(r=>r.json()).then(cfg=>{
if(!cfg.configured||!cfg.siteKey){setStatus(messages.notConfigured);return}
window.onContactTurnstileReady=()=>{
widgetId=window.turnstile.render('#turnstileContainer',{sitekey:cfg.siteKey,language:en?'en':'pl'});
ready=true;button.disabled=false;setStatus(messages.ready)
};
const script=document.createElement('script');script.src='https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onContactTurnstileReady&render=explicit';
script.async=true;script.onerror=()=>setStatus(messages.captchaUnavailable,'error');document.head.appendChild(script)
}).catch(()=>setStatus(messages.unavailable,'error'));
form.addEventListener('submit',async event=>{
event.preventDefault();if(!ready||!form.reportValidity())return;
button.disabled=true;setStatus(messages.sending);
try{
const payload=Object.fromEntries(new FormData(form));
const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
const result=await response.json();
if(!response.ok)throw new Error(en?messages.sendError:(result.error||messages.sendError));
form.reset();setStatus(messages.sent,'success')
}catch(error){setStatus((error.message||messages.error)+messages.errorSuffix,'error')}
finally{if(widgetId!==null&&window.turnstile)window.turnstile.reset(widgetId);button.disabled=false}
})
})();
