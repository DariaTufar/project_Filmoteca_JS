import { renderMovies, writeTestDataToDB } from './helpers';
import { initGenres } from './genres';
import { refs } from './refs';

refs.filter.addEventListener('click', onFilterClick);

// Initial render
init();
async function init() {
  await initGenres();
  writeTestDataToDB();
  renderMovies();
}

// ====================

function onFilterClick(event) {
  const target = event.target;
  if (!target.closest('input')) {
    return;
  }
  renderMovies();
}
// ====================
