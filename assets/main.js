(function(){
  var btn=document.querySelector('.menu-toggle'),nav=document.getElementById('mnav'),root=document.documentElement;
  if(!btn||!nav)return;
  function setOpen(o){
    nav.hidden=!o;
    btn.setAttribute('aria-expanded',o?'true':'false');
    btn.setAttribute('aria-label',o?'Close menu':'Open menu');
    root.style.overflow=o?'hidden':'';
  }
  btn.addEventListener('click',function(){setOpen(nav.hidden);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!nav.hidden){setOpen(false);btn.focus();}});
  window.matchMedia('(min-width:768px)').addEventListener('change',function(m){if(m.matches)setOpen(false);});
})();
