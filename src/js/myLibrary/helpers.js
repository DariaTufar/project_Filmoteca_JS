import { markupMovieCards } from '../markupMovieCards';
import { db } from './localDB';
import { genres } from './genres';
import { refs } from './refs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

// ====================

export function renderMovies() {
  const formData = new FormData(refs.filter);
  const filterValue = formData.get('filter');

  const filteredMovies = db.getMovies({ [filterValue]: true });
  const moviesDetails = filteredMovies.map(item => item.movieDetails);
  moviesDetails.forEach(element => {
    const genres = element.genres ?? [];

    element.genre_ids = genres.map(({ id }) => id);
  });
  const markup = markupMovieCards(moviesDetails, [...genres], true).join('');
  refs.gallery.innerHTML = markup;
}

// ====================

export function renderModalCard(id) {
  db.cachedMovie = db.getMovie({ id }).movieDetails;
  const markup = markupOnModal(db.cachedMovie.movieDetails, [...genres]);

  const gallery = document.querySelector('.modal_movie');
  gallery.insertAdjacentHTML('beforeend', markup);
  const instance = basicLightbox.create(document.querySelector('.modal_movie'));
  instance.show();
  updateBtnStatus();
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

  btnQueuedEl.checked = db.cachedMovie.isQueued;
  btnWatchedEl.checked = db.cachedMovie.isWatched;

  if (db.cachedMovie.isWatched) {
    btnWatchedText.innerHTML = 'Watched';
    btnQueuedText.innerHTML = 'Add to queued';
  }

  if (db.cachedMovie.isQueued) {
    btnWatchedText.innerHTML = 'Add to watched';
    btnQueuedText.innerHTML = 'Queued';
  }

  if (db.cachedMovie.isWatched || db.cachedMovie.isQueued) {
    btnRemoveEl.style.display = 'inline-block';
  } else {
    btnRemoveEl.style.display = 'none';
    btnWatchedText.innerHTML = 'Add to watched';
    btnQueuedText.innerHTML = 'Add to queued';
  }
}

export function cacheMovie(movieDetails) {
  db.cachedMovie = movieDetails;
}
// ************** TEMPORARY FUNCTIONS FOR TESTING *********************
export function markupOnModal(data) {
  const {
    title,
    vote_count,
    vote_average,
    popularity,
    original_title,
    overview,
    genres,
    poster_path,
  } = data;
  return `<div class="modal_description_film">
      <div class="movie_div_film">
          <img class="movie_foto_film" src="
            https://image.tmdb.org/t/p/w500${poster_path}" alt="poster_foto ">
    <button type="button" name="trailer_btn" class="button_film button_film_rem trailer_btn" data-id ="${
      params.movie_id
    }">
      <svg class="icon play-treiler" width="50" height="50">
        <use xlink:href="${icons}#play-treiler"></use>
      </svg>
    </button>
      </div>
      <div class="film_information_film">
          <h1 class="movie_title_film">${title}</h1>
          <ul class="movie_test">
              <li class="movie_description_film">Vote / Votes
              <p class="movie_vote_film">${vote_average.toFixed(1)}</p>
              <p class="movie_votes_film">/ ${vote_count}</p></li>

              <li class="movie_description_film">Popularity
              <p class="movie_value_film movie_popularity_film">${popularity.toFixed(
                1
              )}</p></li>

              <li class="movie_description_film">Original Title
              <p class="movie_value_film movie_original_title_film">${original_title}</p></li>

              <li class="movie_description_film">Genre
              <p class="movie_value_film movie_genre_film">${Object.values(
                genres[0].name
              ).join('')}</p></li>

          </ul>
          <h2 class="movie_about_film">ABOUT</h2>
          <p class="about_text_film">${overview}</p>

          <form class="js-movie-buttons movie-buttons_film">
  <label class="movie-buttons__label">
    <input
      class="movie-buttons__input"
      type="radio"
      name="status"
      value="isWatched"
    />
    <span class="movie-buttons__text button_film">Watched</span>
  </label>

  <label class="movie-buttons__label">
    <input
      class="movie-buttons__input"
      type="radio"
      name="status"
      value="isQueued"
    />
    <span class="movie-buttons__text button_film">Queued</span>
  </label>
  <button type="button" class="js-remove-button button_film button_film_rem">Remove</button>
</form>
      </div>
    </div>`;
}

function showModalCard(markup) {
  const gallery = document.querySelector('.modal_movie');
  gallery.insertAdjacentHTML('beforeend', markup);

  const instance = basicLightbox.create(document.querySelector('.modal_movie'));
  instance.show();
}
