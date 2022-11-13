document.addEventListener('DOMContentLoaded', ifLoaded, { once: true });

function ifLoaded(evt) {
  const refHeader = document.querySelector('.header');
  const refNavigation = document.querySelector('.navigation');
  const refRadioBox = document.querySelector('.radio-box');
  const refSearchForm = document.querySelector('.search-box');
  const refGenreBtn = document.querySelector('.dropbtn');

  const activeClass = refNavigation.querySelector('.is-active');
  if (activeClass) activeClass.classList.remove('is-active');

  switch ('/' + document.location.pathname.split('/').pop()) {
    case '/':
    case '/index.html':
      refNavigation
        .querySelector("[data-menu='home']")
        .classList.add('is-active');

      refRadioBox.classList.add('is-hidden');

      if (refGenreBtn.classList.contains('is-hidden'))
        refGenreBtn.classList.remove('is-hidden');

      if (refHeader.classList.contains('library')) refHeader.remove('library');

      if (refSearchForm.classList.contains('is-hidden'))
        refSearchForm.remove('is-hidden');

      break;

    case '/myLibrary.html':
      refNavigation
        .querySelector("[data-menu='my-library']")
        .classList.add('is-active');

      refHeader.classList.add('library');

      refSearchForm.classList.add('is-hidden');

      refGenreBtn.classList.add('is-hidden');

      if (refRadioBox.classList.contains('is-hidden'))
        refRadioBox.remove('is-hidden');

      break;
  }

  refNavigation.addEventListener('click', onNavigationClick);
}

function onNavigationClick(evt) {
  const btn = evt.target.dataset.menu;
  const location = '/' + document.location.pathname.split('/').pop();

  (btn === 'home' && location === '/') ||
  (btn === 'home' && location === '/index.html') ||
  (btn === 'my-library' && location === '/myLibrary.html')
    ? evt.preventDefault()
    : evt.currentTarget.removeEventListener('click', onNavigationClick);
}
