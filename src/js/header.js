import owner from './owner';
document.addEventListener('DOMContentLoaded', ifLoaded);
function ifLoaded(evt) {
  refHeaderMenu = document.querySelector('.header__menu-list');
  refHeaderMenu.addEventListener('click', onClickHeaderMenu);
  refLibraryBtn = document.querySelector('.my-library-buttons');
  const activeClass = refHeaderMenu.querySelector('.is-active');
  if (activeClass) {
    activeClass.classList.remove('is-active');
  }

  switch (document.location.pathname) {
    case '/':
      refHeaderMenu
        .querySelector("[data-page='Home']")
        .classList.add('is-active');
      refLibraryBtn.classList.add('is-hidden');
      break;
    case '/myLibrary.html':
      refHeaderMenu
        .querySelector("[data-page='Lib']")
        .classList.add('is-active');
      if (refLibraryBtn.classList.contains('is-hidden')) {
        refLibraryBtn.remove('is-hidden');
      }
      break;
  }

  console.log('loaded');
  console.log(document.location.pathname);
}
function onClickHeaderMenu(evt) {
  if (
    (evt.target.dataset.page === 'Home' &&
      document.location.pathname === '/') ||
    (evt.target.dataset.page === 'Lib' &&
      document.location.pathname === '/myLibrary.html')
  ) {
    evt.preventDefault();

    console.log(evt);
    console.log(document.location.pathname);

    return;
  }
  evt.currentTarget.removeEventListener('click', onClickHeaderMenu);
}
