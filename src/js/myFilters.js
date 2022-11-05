import { MyLibraryDB } from './MyLibraryDB';
import {}

const myLibDB = new MyLibraryDB();
const filterEl = document.querySelector('.js-filter');

filterEl.addEventListener('click', onFilterClick);

renderMovies();

function onFilterClick(event) {
  const target = event.target;
  if (!target.closest('input')) {
    return;
  }
  renderMovies();
}

function renderMovies() {
  const formData = new FormData(filter);
  const filterValue = formData.get('filter');

  const filteredMovies = myLibDB.getMovies({ [filterValue]: true });
  // const markup = getMarkup(filteredMovies.map((item)=>item.movieDetails));
  // galleryList.innerHTML = markup;
}
