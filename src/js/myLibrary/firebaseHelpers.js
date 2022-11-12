import { markupMovieCards } from '../markupMovieCards';
import { dbFirebase } from './firebaseDB';
import { genres } from './genres';
import { refs } from './refs';
import { user } from './manageAuth';

// ====================
export async function renderMovies() {
  const formData = new FormData(refs.filter);
  const filterValue = formData.get('filter');

  const filteredMovies = await dbFirebase.getMovies({
    userId: user.uid,
    [filterValue]: true,
  });

  filteredMovies.forEach(element => {
    const genres = element.genres ?? [];
    element.genre_ids = genres.map(({ id }) => id);
  });

  const markup = markupMovieCards(filteredMovies, [...genres], true).join('');
  refs.gallery.innerHTML = markup;
}

// ====================
export function updateBtnStatus() {
  const btnQueuedEl = document.querySelector(
    '.js-movie-buttons input[value="isQueued"]'
  );

  const btnWatchedEl = document.querySelector(
    '.js-movie-buttons input[value="isWatched"]'
  );

  const btnRemoveEl = document.querySelector('.js-remove-button');

  const btnWatchedText = document.querySelector(
    '.js-movie-buttons input[value="isWatched"] + span'
  );
  const btnQueuedText = document.querySelector(
    '.js-movie-buttons input[value="isQueued"] + span'
  );

  const btnFormEl = document.querySelector('.js-movie-buttons');

  if (!user) {
    btnFormEl.style.display = 'none';
    return;
  }

  btnQueuedEl.checked = dbFirebase.cachedMovie.isQueued;
  btnWatchedEl.checked = dbFirebase.cachedMovie.isWatched;

  if (dbFirebase.cachedMovie.isWatched) {
    btnWatchedText.innerHTML = 'Watched';
    btnQueuedText.innerHTML = 'Add to queued';
  }

  if (dbFirebase.cachedMovie.isQueued) {
    btnWatchedText.innerHTML = 'Add to watched';
    btnQueuedText.innerHTML = 'Queued';
  }

  if (dbFirebase.cachedMovie.isWatched || dbFirebase.cachedMovie.isQueued) {
    btnRemoveEl.style.display = 'inline-block';
  } else {
    btnRemoveEl.style.display = 'none';
    btnWatchedText.innerHTML = 'Add to watched';
    btnQueuedText.innerHTML = 'Add to queued';
  }
}
