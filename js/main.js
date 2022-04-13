const body =  document.querySelector('body')
const btnToggle = document.querySelector(".site-header-theme-toggler")
btnToggle.addEventListener('click'  , function(){
  body.classList.toggle('dark-mode')
});