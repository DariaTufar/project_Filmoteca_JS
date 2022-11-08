import { KEY } from './constants';
//import { refs } from './refs';
import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import movieTrailer from './trailer';

const refs = {
  idgalery: document.querySelector('.gallery_main-page'),
};

refs.idgalery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  const target = event.target;
  const movieCardEl = target.closest('.gallery__item');
  if (!movieCardEl) {
    return;
  }
  const id = movieCardEl.dataset.movieid;
  findMovieByID(id);
}

async function findMovieByID(id) {
  const params = {
    baseUrl: 'https://api.themoviedb.org/3/',
    fotoUrl: 'https://image.tmdb.org/t/p/w500',
    movie_id: id,
    language: 'en-US',
    api_key: KEY,
  };

  await axios
    .get(
      `${params.baseUrl}/movie/${params.movie_id}?api_key=${params.api_key}&language=${params.language}`
    )
    .then(response => {
      const modal = response.data;

      const {
        title,
        vote_count,
        vote_average,
        popularity,
        original_title,
        overview,
        genres,
        poster_path,
      } = modal;
      const markup = `<div class="modal_description">
      <div class="movie_div">
          <img class="movie_foto" src="${
            params.fotoUrl
          }${poster_path}" alt="poster_foto ">
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

      const gallery = document.querySelector('.modal_movie');
      gallery.insertAdjacentHTML('beforeend', markup);

      const instance = basicLightbox.create(
        document.querySelector('.modal_movie')
      );
      instance.show();

      return markup;
    })
    .catch(error => {
      console.log(error);
    });
}

export { findMovieByID };
