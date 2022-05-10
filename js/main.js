const elSiteThemToggler =document.querySelector('.site-header__theme-toggler');
elSiteThemToggler.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});