import { dbFirebase } from './firebaseDB';
import { renderMovies, updateBtnStatus } from './firebaseHelpers';
import { refs } from './refs';
import { showSpinner, hideSpinner } from '../spinner';

refs.modal.addEventListener('click', onModalClick);

// ====================
async function onModalClick(event) {
  const target = event.target;
  if (!target.closest('.modal_description_film')) {
    return;
  }

  if (target.closest('.js-movie-buttons') && target.closest('input')) {
    // add to queued or watched
    const formEl = target.closest('.js-movie-buttons');
    const formData = new FormData(formEl);
    const status = formData.get('status');

    // ========== click "Watched" ==========
    if (status === 'isWatched') {
      dbFirebase.cachedMovie.isQueued = false;
      dbFirebase.cachedMovie.isWatched = true;

      // ========== click "Queued" ==========
    } else if (status === 'isQueued') {
      dbFirebase.cachedMovie.isQueued = true;
      dbFirebase.cachedMovie.isWatched = false;
    }
    try {
      await dbFirebase.addMovie(dbFirebase.cachedMovie);
    } catch (error) {
      console.error(error);
    }
  }

  // ========== click "Remove" ==========
  if (target.classList.contains('js-remove-button')) {
    dbFirebase.removeMovie({
      userId: dbFirebase.cachedMovie.userId,
      movieId: dbFirebase.cachedMovie.movieDetails.id,
    });
    dbFirebase.cachedMovie.isQueued = false;
    dbFirebase.cachedMovie.isWatched = false;
  }

  if (window.location.href.includes('myLibrary')) {
    showSpinner(refs.spinner);
    try {
      await renderMovies();
    } catch (error) {
      console.error(error);
    } finally {
      hideSpinner(refs.spinner);
    }
  }
  updateBtnStatus();
}
