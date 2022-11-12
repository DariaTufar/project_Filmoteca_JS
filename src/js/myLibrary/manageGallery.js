import { openModal } from '../modalCardHelpers';
import { refs } from './refs';
import { dbFirebase } from './firebaseDB';
import { user } from './manageAuth';
import { updateBtnStatus } from './firebaseHelpers';

refs.gallery.addEventListener('click', onGalleryClick);

async function onGalleryClick(event) {
  const target = event.target;
  const movieCardEl = target.closest('.gallery__item');
  if (!movieCardEl) {
    return;
  }
  const id = movieCardEl.dataset.movieid;

  //  ========= cache movie ===========
  const { isWatched, isQueued, movieDetails } = await dbFirebase.getMovie({
    userId: user.uid,
    movieId: id,
  });

  dbFirebase.cachedMovie = {
    userId: user.uid,
    isWatched,
    isQueued,
    movieDetails,
  };

  // ========= open modal ===========
  openModal(movieDetails, {
    movie_id: movieDetails.id,
    fotoUrl: 'https://image.tmdb.org/t/p/w500',
  });
  updateBtnStatus();
}
