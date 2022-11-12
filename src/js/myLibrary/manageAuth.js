import { closeAuth, openAuth, auth } from './firebase';
import { renderMovies } from './firebaseHelpers';

const refs = {
  myLibrary: document.querySelector('.js-menu-my-library'),
  logBtn: document.querySelector('.js-login'),
  user: document.querySelector('.js-user'),
  loginUi: document.querySelector('.js-login-ui'),
  iconSignIn: document.querySelector('.js-sign-in'),
  iconSignOut: document.querySelector('.js-sign-out'),
  iconFace: document.querySelector('.js-icon-face'),
};
export let user = '';

refs.logBtn.addEventListener('click', onClickLogIn);
refs.loginUi.addEventListener('click', onClickLoginUi);

auth.onAuthStateChanged(updateUser);

// =====================
function renderAuth() {
  if (user) {
    refs.myLibrary.style.display = 'block';
    refs.myLibrary.classList.add('myLib-is-shown');
    refs.myLibrary.classList.remove('myLib-is-hidden');

    //  ========== icons attribute manage ==========
    refs.iconSignIn.style.display = 'none';
    refs.iconSignOut.style.display = 'inline-block';
    refs.iconFace.style.display = 'inline-block';
    refs.iconFace.setAttribute(
      'title',
      `${user.displayName ?? ''} <${user.email}>`
    );
    refs.logBtn.setAttribute('title', 'Sign out');
  } else {
    refs.myLibrary.style.display = 'none';
    refs.myLibrary.classList.add('myLib-is-hidden');
    refs.myLibrary.classList.remove('myLib-is-shown');

    //  ========== icons attribute manage ==========
    refs.iconSignIn.style.display = 'inline-block';
    refs.iconSignOut.style.display = 'none';
    refs.iconFace.style.display = 'none';
    refs.logBtn.setAttribute('title', 'Sign in');
  }
  refs.loginUi.classList.remove('active');
}

// =====================
function onClickLogIn() {
  if (user) {
    auth.signOut();
  } else {
    openAuth();
    refs.loginUi.classList.add('active');
  }
}

// =====================
function onClickLoginUi(event) {
  if (event.target.classList.contains('js-login-ui')) {
    refs.loginUi.classList.remove('active');
    closeAuth();
  }
}

// =====================
function updateUser(currentUser) {
  user = currentUser;
  if (!user) {
    let currentURL = window.location.href;
    if (currentURL.includes('myLibrary')) {
      currentURL = currentURL.replace('myLibrary', 'index');
      window.location.replace(currentURL);
    }
  }
  renderAuth();
  if (window.location.href.includes('myLibrary')) {
    renderMovies();
  }
}
