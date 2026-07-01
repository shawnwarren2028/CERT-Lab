/* Shared light/dark theme for the whole CERT suite.
   Default is Dark; a manual choice is saved in localStorage('cert_theme')
   and shared across every page. Load this in <head> (synchronous) so the
   saved theme is applied before first paint (no flash). */
(function(){
  try{ if(localStorage.getItem('cert_theme')==='light') document.documentElement.setAttribute('data-theme','light'); }catch(e){}
})();
/* Shared icons: a favicon derived from the logo (green rounded tile + the
   black city-skyline silhouette), plus the iOS apple-touch-icon and the
   web-app manifest for Add-to-Home-Screen. */
(function(){
  var svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>"+
    "<rect width='64' height='64' rx='14' fill='#5aaa3a'/>"+
    "<g fill='#10160b'>"+
    "<path d='M14 62V47L20 41L26 47V62Z'/>"+
    "<rect x='28' y='44' width='7' height='18'/>"+
    "<rect x='37' y='32' width='8' height='30'/>"+
    "<rect x='46' y='48' width='4' height='14'/>"+
    "</g></svg>";
  var head=document.head||document.documentElement;
  var l=document.createElement('link'); l.rel='icon'; l.type='image/svg+xml';
  l.href='data:image/svg+xml,'+encodeURIComponent(svg); head.appendChild(l);
  var at=document.createElement('link'); at.rel='apple-touch-icon'; at.href='apple-touch-icon.png'; head.appendChild(at);
  var mf=document.createElement('link'); mf.rel='manifest'; mf.href='manifest.json'; head.appendChild(mf);
})();
function toggleTheme(){
  var light = document.documentElement.getAttribute('data-theme')==='light';
  if(light) document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme','light');
  try{ localStorage.setItem('cert_theme', light?'dark':'light'); }catch(e){}
  updateThemeBtn();
}
function updateThemeBtn(){
  var light = document.documentElement.getAttribute('data-theme')==='light';
  document.querySelectorAll('.theme-btn').forEach(function(b){
    b.textContent = light ? '🌙' : '☀️';
    b.title = light ? 'Switch to dark mode' : 'Switch to light mode';
  });
}
(function(){
  var css = '.theme-btn{background:var(--surface2,#243018);border:1px solid var(--border,#3a5228);'+
    'color:var(--primary-light,#7ac95a);width:40px;height:40px;border-radius:8px;cursor:pointer;'+
    'font-size:1.05rem;line-height:1;flex-shrink:0;padding:0;transition:filter .15s;}'+
    '.theme-btn:hover{filter:brightness(1.12);}';
  var s=document.createElement('style'); s.textContent=css;
  (document.head||document.documentElement).appendChild(s);
})();
document.addEventListener('DOMContentLoaded', updateThemeBtn);
