import { KEY } from './constants';
//import { refs } from './refs';
import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

/* const refs = {
  galleryOnClick: document.querySelector('#data-movieid'),
  formSearch: document.querySelector('#js-search-form')
}

console.log(refs.formSearch)
console.log(refs.galleryOnClick)

refs.galleryOnClick.addEventListener('click', IdMovie);
const IdMovie = refs.galleryOnClick
console.log(IdMovie) */


async function findMovieByID() {
 const params = {
    baseUrl: 'https://api.themoviedb.org/3/',
    fotoUrl: 'https://image.tmdb.org/t/p/w500',
    movie_id: 89,
    language: 'en-US',
    api_key: KEY,
  };

  await axios.get(
    `${params.baseUrl}/movie/${params.movie_id}?api_key=${params.api_key}&language=${params.language}`
  ).then(response => {
    const modal = response.data;
    //console.log(modal)

   const  { title, vote_count, vote_average, popularity, original_title, overview, genres, poster_path } = modal;
    const markup = 
      `<div class="modal_description">
      <div class="movie_div">
          <img class="movie_foto" src="${params.fotoUrl}${poster_path}" alt="poster_foto ">
      </div>
      <div class="film_information">
          <h1 class="movie_title">${title}</h1>
          <ul>
              <li class="movie_description">Vote / Votes<span class="movie_vote"> ${vote_average} </span>
              <span class="movie_votes"> /  ${vote_count}</span></li>
              <li class="movie_description">Popularity<span class="movie_value">: ${popularity}</span></li>
              <li class="movie_description">Original Title<span class="movie_value">: ${original_title}</span></li>
              <li class="movie_description">Genre<span class="movie_value">: ${Object.values(genres[0].name).join('')}</span></li>
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
    </div>`

      //console.log(markup)
      const gallery = document.querySelector('.modal_movie');
      gallery.insertAdjacentHTML('beforeend', markup)
      
      const instance = basicLightbox.create(
        document.querySelector('.modal_movie')
      )
      instance.show()
    
   return markup
  }).catch(error => {
    console.log(error)
  });

};


findMovieByID()
export { findMovieByID };

/* <div class="movie_btn">
          <button type="radio" name="add_watched_btn" class="film_btn">ADD TO WATCHED</button>
          <button type="radio" name="add_to_queue_btn" class="film_btn">ADD TO QUEUE</button>
          <button type="radio" name="trailer_btn" class="film_btn">TRAILER</button>
      </div> */