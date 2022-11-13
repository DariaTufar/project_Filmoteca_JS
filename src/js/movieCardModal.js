import axios from 'axios';
import { KEY } from './constants';
import { refs } from './refs';
import { openModal } from './modalCardHelpers';
import { user } from './myLibrary/manageAuth';
import { dbFirebase } from './myLibrary/firebaseDB';
import { updateBtnStatus } from './myLibrary/firebaseHelpers';
import ServerRequest from './serverRequest';

const instance = new ServerRequest()

refs.idgalery.addEventListener('click', onGalleryClick);

async function onGalleryClick(event) {
  event.preventDefault();
  const target = event.target;
  const movieCardEl = target.closest('.gallery__item');
  if (!movieCardEl && event.target === document.querySelector('button')) {
    return;
  }

  // ========== get movie from server =========
  const id = movieCardEl.dataset.movieid;
  const movieDetails = await instance.findMovieByID(id);

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


//document.body.style.overflow = "hidden"; //выключает скролл
//document.body.style.overflow = "";      // включает скролл
