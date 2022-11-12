import { db } from './localDB';
import { renderMovies, updateBtnStatus } from './helpers';
import { refs } from './refs';

refs.modal.addEventListener('click', onModalClick);

// ====================

function onModalClick(event) {
  const target = event.target;
  if (!target.closest('.modal_description_film')) {
    return;
  }
  if (target.closest('.js-movie-buttons') && target.closest('input')) {
    // add to queued or watched
    const formEl = target.closest('.js-movie-buttons');
    const formData = new FormData(formEl);
    const status = formData.get('status');
    if (status === 'isWatched') {
      db.cachedMovie.isQueued = false;
      db.cachedMovie.isWatched = true;
    } else if (status === 'isQueued') {
      db.cachedMovie.isQueued = true;
      db.cachedMovie.isWatched = false;
    }
    db.addMovie(db.cachedMovie);
  }
  if (target.classList.contains('js-remove-button')) {
    db.removeMovie({ id: db.cachedMovie.id });
    db.cachedMovie.isQueued = false;
    db.cachedMovie.isWatched = false;
  }
  if (window.location.href.includes('myLibrary')) {
    renderMovies();
  }
  updateBtnStatus();
}

// ====================
