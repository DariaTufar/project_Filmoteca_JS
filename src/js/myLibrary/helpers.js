import { markupMovieCards } from '../markupMovieCards';
import { db } from './localDB';
import { genres } from './genres';
import { refs } from './refs';

// ====================

export function renderMovies() {
  const formData = new FormData(refs.filter);
  const filterValue = formData.get('filter');

  const filteredMovies = db.getMovies({ [filterValue]: true });
  const moviesDetails = filteredMovies.map(item => item.movieDetails);
  const markup = markupMovieCards(moviesDetails, genres).join('');
  refs.gallery.innerHTML = markup;
}

// ====================

export function renderModalCard(id) {
  db.cachedMovie = db.getMovie({ id }).movieDetails;
  const markup = getModalCardMarkup(db.cachedMovie.movieDetails, genres);
  refs.modal.innerHTML = markup;

  updateBtnStatus();
  refs.modal.classList.add('active');
}

// ====================

export function updateBtnStatus() {
  const btnQueuedEl = document.querySelector(
    '.modal-form__input[value="isQueued"]'
  );

  const btnWatchedEl = document.querySelector(
    '.modal-form__input[value="isWatched"]'
  );
  btnQueuedEl.checked = db.cachedMovie.isQueued;
  btnWatchedEl.checked = db.cachedMovie.isWatched;
}

export function cacheMovie(movieDetails) {
  db.cashedMovie = movieDetails;
}
// ************** TEMPORARY FUNCTIONS FOR TESTING *********************
export function getModalCardMarkup({
  title,
  vote_count,
  vote_average,
  popularity,
  original_title,
  overview,
}) {
  const markup = `<div class="modal_description">
    <h1 class="movie_title">${title}</h1>
    <ul>
        <li class="movie_description">Vote / Votes<span class="movie_vote">${vote_count}</span>
        <span class="movie_description">${vote_average}</span></li>
        <li class="movie_description">Popularity<span class="movie_value">${popularity}</span></li>
        <li class="movie_description">Original Title<span class="movie_value">${original_title}</span></li>
        <li class="movie_description">Genre<span class="movie_value">${genres.name}</span></li>
    </ul>
    <h2></h2>
    <p class="about-text">${overview}</p>

    <form class="js-modal-form modal-form">
        <label class="modal-form__label">
          <input class="modal-form__input" type="radio" name="status" value="isWatched" />
          <span class="modal-form__text button">Watched</span>
        </label>

        <label class="modal-form__label">
          <input class="modal-form__input" type="radio" name="status" value="isQueued" />
          <span class="modal-form__text button"
            >Queued</span
          >
        </label>
        <button type="button" class="js-remove-button button">Remove</button>
        </form>
  </div>`;

  return markup;
}
// *********************

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
