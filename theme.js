/* Shared light/dark theme for the whole CERT suite.
   Default is Dark; a manual choice is saved in localStorage('cert_theme')
   and shared across every page. Load this in <head> (synchronous) so the
   saved theme is applied before first paint (no flash). */
(function(){
  try{ if(localStorage.getItem('cert_theme')==='light') document.documentElement.setAttribute('data-theme','light'); }catch(e){}
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
