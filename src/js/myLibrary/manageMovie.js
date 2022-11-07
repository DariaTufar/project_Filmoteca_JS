import { db } from './localDB';
import { renderMovies, updateBtnStatus } from './helpers';
import { refs } from './refs';

refs.modal.addEventListener('click', onModalClick);

// ====================

function onModalClick(event) {
  const target = event.target;
  const movieCardEl = target.closest('.modal_description');
  if (!movieCardEl) {
    // clicked outside card
    refs.modal.classList.remove('active');
  }
  if (target.closest('.modal-form__label') && target.closest('input')) {
    // add to queued or watched
    const formEl = target.closest('.js-modal-form');
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
    renderMovies();
  }
  if (target.classList.contains('js-remove-button')) {
    db.removeMovie({ id: db.cachedMovie.id });
    db.cachedMovie.isQueued = false;
    db.cachedMovie.isWatched = false;
    updateBtnStatus();
    renderMovies();
  }
}

// ====================
