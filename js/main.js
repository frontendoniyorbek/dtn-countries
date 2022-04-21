const elSiteThemToggler =document.querySelector('.site-header-theme-toggler');
elSiteThemToggler.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});