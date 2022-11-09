document.addEventListener('DOMContentLoaded', ifLoaded, { once: true });

function ifLoaded(evt) {
  const refHeader = document.querySelector('.header');
  const refNavigation = document.querySelector('.navigation');
  const refRadioBox = document.querySelector('.radio-box');
  const refSearchForm = document.querySelector('.search-box');

  const activeClass = refNavigation.querySelector('.is-active');
  if (activeClass) activeClass.classList.remove('is-active');

  switch ('/' + document.location.pathname.split('/').pop()) {
    case '/':
      refNavigation
        .querySelector("[data-menu='home']")
        .classList.add('is-active');

      refRadioBox.classList.add('is-hidden');

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

      if (refRadioBox.classList.contains('is-hidden'))
        refRadioBox.remove('is-hidden');

      break;
  }

  refNavigation.addEventListener('click', onNavigationClick);
}

function onNavigationClick(evt) {
  const btn = evt.target.dataset.menu;
  const location = document.location.pathname;

  (btn === 'logo' && location === '/') ||
  (btn === 'home' && location === '/') ||
  (btn === 'my-library' && location === '/myLibrary.html')
    ? evt.preventDefault()
    : evt.currentTarget.removeEventListener('click', onNavigationClick);
}
