import axios from 'axios';
import { KEY } from './constants';
import { refs } from './refs';
import { openModal } from './modalCardHelpers';

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

  params.movie_id = movieCardEl.dataset.movieid;

  findMovieByID(params).then(movie => {
    openModal(movie, params);
  });
}
//---------------------
function findMovieByID(params) {
  return axios
    .get(
      `${params.baseUrl}/movie/${params.movie_id}?api_key=${params.api_key}&language=${params.language}`
    )
    .then(response => response.data)
    .catch(console.log);
}

//document.body.style.overflow = "hidden"; //выключает скролл
//document.body.style.overflow = "";      // включает скролл
