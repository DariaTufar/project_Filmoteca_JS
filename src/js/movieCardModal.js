import axios from 'axios';
import { KEY } from './constants';
import { refs } from './refs';
import { openModal } from './modalCardHelpers';
import { user } from './myLibrary/manageAuth';
import { dbFirebase } from './myLibrary/firebaseDB';
import { updateBtnStatus } from './myLibrary/firebaseHelpers';

const params = {
  baseUrl: 'https://api.themoviedb.org/3/',
  fotoUrl: 'https://image.tmdb.org/t/p/w500',
  movie_id: 0,
  language: 'en-US',
  api_key: KEY,
};
refs.idgalery.addEventListener('click', onGalleryClick);

async function onGalleryClick(event) {
  event.preventDefault();
  const target = event.target;
  const movieCardEl = target.closest('.gallery__item');
  if (!movieCardEl && event.target === document.querySelector('button')) {
    return;
  }

  // ========== get movie from server =========
  params.movie_id = movieCardEl.dataset.movieid;
  const movieDetails = await findMovieByID(params);

  // ========= cache movie ===========
  const { isWatched, isQueued } = await dbFirebase.getMovie({
    userId: user?.uid,
    movieId: params.movie_id,
  });

  dbFirebase.cachedMovie = {
    userId: user?.uid,
    isWatched,
    isQueued,
    movieDetails,
  };

  // ========= open modal ===========
  openModal(movieDetails, params);
  updateBtnStatus();
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
