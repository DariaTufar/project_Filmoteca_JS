import icons from '../images/icons.svg';
import openTrailer from './trailer';
import { cacheMovie, updateBtnStatus } from './myLibrary/firebaseHelpers.js'; // НЕ УДАЛЯТЬ !!! импорт функций, необходимых для обновления статуса кнопок в модальном окне
import { refs } from './refs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function getModalCardMarkup(data, params) {
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
          <img class="movie_foto_film" src="${
            params.fotoUrl
          }${poster_path}" alt="poster_foto ">
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
              <p class="movie_votes_film"><span class="movie_backslash">/</span><span class="movie_votes">${vote_count}</span></p></li>

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
      class="movie-buttons_film__input"
      type="radio"
      name="status"
      value="isWatched"
    />
    <span class="movie-buttons_film__text button_film">Watched</span>
  </label>

  <label class="movie-buttons__label">
    <input
      class="movie-buttons_film__input"
      type="radio"
      name="status"
      value="isQueued"
    />
    <span class="movie-buttons_film__text button_film">Queued</span>
  </label>
  <button type="button" class="js-remove-button button_film button_film_rem">Remove</button>
</form>
      </div>
    </div>`;
}

// ===========
export function openModal(movie, params) {
  const markup = getModalCardMarkup(movie, params);
  refs.gallery.innerHTML = markup;

  const instance = basicLightbox.create(
    document.querySelector('.modal_movie'),
    {
      onShow: instance => {
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', closeModal);
        document.addEventListener('click', evt => {
          if (evt.target.closest('.trailer_btn')) {
            openTrailer(document.querySelector('.trailer_btn').dataset.id);
          } else {
            return;
          }
        });
      },
      onClose: instance => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', closeModal);
      },
    }
  );

  instance.show();

  function closeModal(e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  }
}
