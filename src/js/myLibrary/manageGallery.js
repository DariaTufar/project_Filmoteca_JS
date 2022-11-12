import { renderModalCard } from './helpers';
import { refs } from './refs';

refs.gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  const target = event.target;
  const movieCardEl = target.closest('.gallery__item');
  if (!movieCardEl) {
    return;
  }
  const id = movieCardEl.dataset.movieid;
  renderModalCard(id);
}

// ====================
