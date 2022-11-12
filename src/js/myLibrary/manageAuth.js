import { closeAuth, openAuth, auth } from './firebase';

const refs = {
  myLibrary: document.querySelector('.js-menu-my-library'),
  logBtn: document.querySelector('.js-login'),
  user: document.querySelector('.js-user'),
  loginUi: document.querySelector('.js-login-ui'),
};
let user = '';

refs.logBtn.addEventListener('click', onClickLogIn);
refs.loginUi.addEventListener('click', onClickLoginUi);
auth.onAuthStateChanged(updateUser);

function renderAuth() {
  if (user) {
    refs.myLibrary.style.display = 'block';
    refs.logBtn.innerHTML = 'Log out';
    refs.user.innerHTML = user.email;
  } else {
    refs.myLibrary.style.display = 'none';
    refs.logBtn.innerHTML = 'Log in';
    refs.user.innerHTML = '';
  }
  refs.loginUi.classList.remove('active');
}

function onClickLogIn() {
  if (user) {
    auth.signOut();
  } else {
    openAuth();
    refs.loginUi.classList.add('active');
  }
}

function onClickLoginUi(event) {
  if (event.target.classList.contains('js-login-ui')) {
    refs.loginUi.classList.remove('active');
    closeAuth();
  }
}

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
}
