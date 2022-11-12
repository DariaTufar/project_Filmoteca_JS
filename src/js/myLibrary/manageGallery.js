import { openModal } from '../modalCardHelpers';
import { refs } from './refs';
import { dbFirebase } from './firebaseDB';
import { user } from './manageAuth';

refs.gallery.addEventListener('click', onGalleryClick);

async function onGalleryClick(event) {
  const target = event.target;
  const movieCardEl = target.closest('.gallery__item');
  if (!movieCardEl) {
    return;
  }
  const id = movieCardEl.dataset.movieid;
  // ====== render modal card ======
  const { movieDetails } = await dbFirebase.getMovie({
    userId: user.uid,
    movieId: id,
  });

  await dbFirebase.writeCachedMovie({ userId: user.uid, movieDetails });

  openModal(movieDetails, {
    movie_id: movieDetails.id,
    fotoUrl: 'https://image.tmdb.org/t/p/w500',
  });
}

// ====================
