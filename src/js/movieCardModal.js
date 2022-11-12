import { cacheMovie, updateBtnStatus } from './myLibrary/firebaseHelpers.js'; // НЕ УДАЛЯТЬ !!! импорт функций, необходимых для обновления статуса кнопок в модальном окне
import { KEY } from './constants';
import { refs } from './refs';
import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import openTrailer from './trailer';

import icons from '../images/icons.svg';

const params = {
  baseUrl: 'https://api.themoviedb.org/3/',
  fotoUrl: 'https://image.tmdb.org/t/p/w500',
  movie_id: 0,
  language: 'en-US',
  api_key: KEY,
};
refs.idgalery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const target = event.target;
  const movieCardEl = target.closest('.gallery__item');
  if (!movieCardEl && event.target === document.querySelector('button')) {
    return;
  }

  const id = movieCardEl.dataset.movieid;
  params.movie_id = id;
  findMovieByID();
}
function markupOnModal(data) {
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

function findMovieByID() {
  axios
    .get(
      `${params.baseUrl}/movie/${params.movie_id}?api_key=${params.api_key}&language=${params.language}`
    )
    .then(response => {
      const modal = response.data;
      const markup = markupOnModal(modal);
      refs.gallery.innerHTML = markup;

      const instance = basicLightbox.create(
        document.querySelector('.modal_movie'),
        {
          onShow: instance => {
            document.body.style.overflow = 'hidden';
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
          },
        }
      );
      instance.show();

      // =========  НЕ УДАЛЯТЬ - Вызов функций, обновляющих статус кнопок в модальном окне >>>>>
      cacheMovie(modal).then(() => updateBtnStatus());
      // =========  НЕ УДАЛЯТЬ - Вызов функций, обновляющих статус кнопок в модальном окне <<<<<

      return markup;
    })
    .catch(console.log);
}

//document.body.style.overflow = "hidden"; //выключает скролл
//document.body.style.overflow = "";      // включает скролл
