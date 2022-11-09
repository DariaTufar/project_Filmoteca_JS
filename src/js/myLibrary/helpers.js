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
    const genres = element.genres;
    element.genre_ids = genres.map(({ id }) => id);
  });
  const markup = markupMovieCards(moviesDetails, [...genres]).join('');
  refs.gallery.innerHTML = markup;
}

// ====================

export function renderModalCard(id) {
  db.cachedMovie = db.getMovie({ id }).movieDetails;
  const markup = getModalCardMarkup(db.cachedMovie.movieDetails, [...genres]);

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
  btnQueuedEl.checked = db.cachedMovie.isQueued;
  btnWatchedEl.checked = db.cachedMovie.isWatched;

  if (db.cachedMovie.isWatched || db.cachedMovie.isQueued) {
    btnRemoveEl.style.display = 'inline-block';
  } else {
    btnRemoveEl.style.display = 'none';
  }
}

export function cacheMovie(movieDetails) {
  db.cachedMovie = movieDetails;
}
// ************** TEMPORARY FUNCTIONS FOR TESTING *********************
export function getModalCardMarkup(movieDetails, genres) {
  const {
    title,
    vote_count,
    vote_average,
    popularity,
    original_title,
    overview,
    // genres,
    poster_path,
  } = movieDetails;

  const markup = `<div class="modal_description">
  <div class="movie_div">
      <img class="movie_foto" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="poster_foto ">
  </div>
  <div class="film_information">
      <h1 class="movie_title">${title}</h1>
      <ul>
          <li class="movie_description">Vote / Votes<span class="movie_vote"> ${vote_average} </span>
          <span class="movie_votes"> /  ${vote_count}</span></li>
          <li class="movie_description">Popularity<span class="movie_value">: ${popularity}</span></li>
          <li class="movie_description">Original Title<span class="movie_value">: ${original_title}</span></li>
          <li class="movie_description">Genre<span class="movie_value">: ${Object.values(
            genres[0].name
          ).join('')}</span></li>
      </ul>
      <h2 class="movie_about">ABOUT</h2>
      <p class="about_text">${overview}</p>

      <form class="js-movie-buttons movie-buttons">
<label class="movie-buttons__label">
<input
  class="movie-buttons__input"
  type="radio"
  name="status"
  value="isWatched"
/>
<span class="movie-buttons__text button">Watched</span>
</label>

<label class="movie-buttons__label">
<input
  class="movie-buttons__input"
  type="radio"
  name="status"
  value="isQueued"
/>
<span class="movie-buttons__text button">Queued</span>
</label>
<button type="button" class="js-remove-button button">Remove</button>
<button type="button" name="trailer_btn" class="button trailer_btn">TRAILER</button>
</form>
  </div>
</div>`;

  return markup;
}

function showModalCard(markup) {
  const gallery = document.querySelector('.modal_movie');
  gallery.insertAdjacentHTML('beforeend', markup);

  const instance = basicLightbox.create(document.querySelector('.modal_movie'));
  instance.show();
}

// *********************
// js-modal-form= js-movie-buttons
// ===========
export function writeTestDataToDB() {
  const template = {
    adult: false,
    backdrop_path: '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
    id: 1,
    title: 'Black Adam',
    original_language: 'en',
    original_title: 'Black Adam',
    overview:
      'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
    poster_path: '/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg',
    media_type: 'movie',
    genre_ids: [28, 14, 878],
    popularity: 4085.77,
    release_date: '2022-10-19',
    video: false,
    vote_average: 6.937,
    vote_count: 803,
  };

  for (let i = 0; i < 6; i++) {
    const movieDetails = {
      ...template,
      id: i + 1,
      title: `${template.title} - ${i + 1}`,
    };
    db.addMovie({
      id: movieDetails.id,
      isQueued: true,
      isWatched: false,
      movieDetails,
    });
  }
}