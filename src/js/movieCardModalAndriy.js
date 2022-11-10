import { cacheMovie, updateBtnStatus } from './myLibrary/helpers.js'; // НЕ УДАЛЯТЬ !!! импорт функций, необходимых для обновления статуса кнопок в модальном окне
import { KEY } from './constants';
//import { refs } from './refs';
import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import openTrailer from './trailer';
// const gallery = document.querySelector('.modal_movie');

// const key = 'e994a62a86f0219af0993364e0b8b3fc';

const refs = {
  idgalery: document.querySelector('.gallery_main-page'),
  gallery: document.querySelector('.modal_movie'),
};
const params = {
  baseUrl: 'https://api.themoviedb.org/3/',
  fotoUrl: 'https://image.tmdb.org/t/p/w500',
  movie_id: 0,
  language: 'en-US',
  api_key: KEY,
};
refs.idgalery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  const target = event.target;
  const movieCardEl = target.closest('.gallery__item');
  // console.dir(event.target);
  if (!movieCardEl && event.target === document.querySelector('button')) {
    return;
  }

  const id = movieCardEl.dataset.movieid;
  params.movie_id = id;
  findMovieByID();
  // movieTrailer();
}
function markupValera(data) {
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
      </div>
      <div class="film_information_film">
          <h1 class="movie_title_film">${title}</h1>
          <ul>
              <li class="movie_description_film">Vote / Votes<span class="movie_vote_film"> ${vote_average} </span>
              <span class="movie_votes_film"> /  ${vote_count}</span></li>
              <li class="movie_description_film">Popularity<span class="movie_value_film">: ${popularity}</span></li>
              <li class="movie_description_film">Original Title<span class="movie_value_film">: ${original_title}</span></li>
              <li class="movie_description_film">Genre<span class="movie_value_film">: ${Object.values(
                genres[0].name
              ).join('')}</span></li>
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
  <button type="button" class="js-remove-button button_film">Remove</button>
  <button type="button" name="trailer_btn" class="button_film trailer_btn" data-id ="${
    params.movie_id
  }">TRAILER</button>
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
      const markup = markupValera(modal);

      refs.gallery.innerHTML = markup;

      const instance = basicLightbox.create(
        document.querySelector('.modal_movie'),
        {
          onShow: instance => {
            document.addEventListener('click', evt => {
              if (!evt.target.className.includes('trailer_btn')) {
                return;
              }
              openTrailer(evt.target.dataset.id);

              // console.dir(instance.classList);
            });
          },
        }
      );

      instance.show();
      // =========  НЕ УДАЛЯТЬ - Вызов функций, обновляющих статус кнопок в модальном окне >>>>>
      cacheMovie(modal);
      updateBtnStatus();
      // =========  НЕ УДАЛЯТЬ - Вызов функций, обновляющих статус кнопок в модальном окне <<<<<

      return markup;
    })
    .catch(console.log);
}
