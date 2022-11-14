import { renderMovies } from './firebaseHelpers';
import { initGenres } from './genres';
import { refs } from './refs';
import { showSpinner, hideSpinner } from '../spinner';

refs.filter.addEventListener('click', onFilterClick);

// Initial render
init();
async function init() {
  try {
    await initGenres();
  } catch (error) {
    console.error(error);
  }
}

// ====================
async function onFilterClick(event) {
  const target = event.target;
  if (!target.closest('input')) {
    return;
  }
  showSpinner(refs.spinner);
  try {
    await renderMovies();
  } catch (error) {
    console.error(error);
  } finally {
    hideSpinner(refs.spinner);
  }
}
