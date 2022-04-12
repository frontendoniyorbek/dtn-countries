const body =  document.querySelector('body')
const btnToggle = document.querySelector(".button")
btnToggle.addEventListener('click'  , function(){
  body.classList.toggle('dark-mode')
})