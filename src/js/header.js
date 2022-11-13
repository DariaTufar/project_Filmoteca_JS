document.addEventListener('DOMContentLoaded', ifLoaded, { once: true });

function ifLoaded() {
  const refHeader = document.querySelector('.header');
  const refNavigation = document.querySelector('.navigation');
  const refRadioBox = document.querySelector('.radio-box');
  const refSearchForm = document.querySelector('.search-box');
  const refGenreBtn = document.querySelector('.dropbtn');

  const activeClass = refNavigation.querySelector('.active');
  if (activeClass) {
    activeClass.classList.remove('active');
  }
  const location = `/${document.location.pathname.split('/').pop()}`;
  switch (location) {
    case '/':
    case '/index.html':
      refNavigation.querySelector("[data-menu='home']").classList.add('active');

      refRadioBox.classList.add('is-hidden');

      refGenreBtn.classList.remove('is-hidden');

      refHeader.classList.remove('library');

      refSearchForm.classList.remove('is-hidden');

      break;

    case '/myLibrary.html':
      refNavigation
        .querySelector("[data-menu='my-library']")
        .classList.add('active');

      refHeader.classList.add('library');

      refSearchForm.classList.add('is-hidden');

      refGenreBtn.classList.add('is-hidden');

      refRadioBox.classList.remove('is-hidden');

      break;
  }

  refNavigation.addEventListener('click', onNavigationClick);
}

function onNavigationClick(evt) {
  // what problem resolves this function?
  const btn = evt.target.dataset.menu;
  const location = `/${document.location.pathname.split('/').pop()}`;

  (btn === 'home' && location === '/') ||
    (btn === 'home' && location === '/index.html') ||
    (btn === 'my-library' && location === '/myLibrary.html')
    ? evt.preventDefault()
    : evt.currentTarget.removeEventListener('click', onNavigationClick);
}
