const menuToggle=document.getElementById('menuToggle'),primaryNav=document.getElementById('primaryNav');
menuToggle.addEventListener('click',()=>{menuToggle.setAttribute('aria-expanded',primaryNav.classList.toggle('open'))});
document.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click',()=>{primaryNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
const bar=document.getElementById('scrollProgress'),hdr=document.getElementById('siteHeader');
addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(h>0?scrollY/h*100:0)+'%';hdr.classList.toggle('scrolled',scrollY>16)},{passive:true});
const io=new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
let tt;function showToast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),3000)}
const vh=document.getElementById('view-home'),vc=document.getElementById('view-case');
function route(){const h=location.hash,c=h==='#irctc';vc.hidden=!c;vh.hidden=c;
 if(c){document.title='IRCTC Redesign — Puneet Raghav';scrollTo(0,0);return}
 document.title='Puneet Raghav — UI/UX Designer';
 const t=h.length>1&&document.querySelector(h);t?t.scrollIntoView():scrollTo(0,0)}
addEventListener('hashchange',route);route();

