/* Shared light/dark theme for the whole CERT suite.
   Default is Dark; a manual choice is saved in localStorage('cert_theme')
   and shared across every page. Load this in <head> (synchronous) so the
   saved theme is applied before first paint (no flash). */
(function(){
  try{ if(localStorage.getItem('cert_theme')==='light') document.documentElement.setAttribute('data-theme','light'); }catch(e){}
})();
/* Shared favicon: a square CERT shield (green shield + white cross on a dark
   rounded tile), embedded as an SVG data-URI so it stays crisp at tab size. */
(function(){
  var svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>"+
    "<rect width='64' height='64' rx='14' fill='#0e1208'/>"+
    "<path d='M12 12H52V32Q52 50 32 60Q12 50 12 32Z' fill='#5aaa3a'/>"+
    "<rect x='29' y='22' width='6' height='22' rx='1.5' fill='#fff'/>"+
    "<rect x='21' y='31' width='22' height='6' rx='1.5' fill='#fff'/></svg>";
  var l=document.createElement('link'); l.rel='icon'; l.type='image/svg+xml';
  l.href='data:image/svg+xml,'+encodeURIComponent(svg);
  (document.head||document.documentElement).appendChild(l);
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
