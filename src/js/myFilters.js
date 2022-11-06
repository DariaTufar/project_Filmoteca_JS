// ************** Delete after testing ******************
import { markupMovieCards } from '../logs/getMovieCardsMarkup';
import { movies } from '../logs/data';
import { getModalCardMarkup } from '../logs/getModalCardMarkup';

// ***********************************************

import ServerRequest from './serverRequest';
import { MyLibraryDB } from './MyLibraryDB';
// import { renderMovieCards } from './createMarkup';
import { refs } from './refs';

// Variables
const requestAPI = new ServerRequest();
const myLibDB = new MyLibraryDB();
let genres = [];
let currentMovie;

const filterEl = document.querySelector('.js-filter-my-library');
const galleryEl = refs.galleryList;
const modalEl = document.querySelector('.js-movie-modal');

init();

async function init() {
  // Bind events
  filterEl.addEventListener('click', onFilterClick);
  galleryEl.addEventListener('click', onGalleryClick);
  modalEl.addEventListener('click', onModalClick);

  // Download genres
  try {
    genres = await requestAPI.getGenres();
  } catch (error) {}

  // Initial render
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
function onModalClick(event) {
  const target = event.target;

  const movieCardEl = target.closest('.modal_description');
  if (!movieCardEl) {
    // clicked outside card
    modalEl.classList.remove('active');
  }
  if (target.nodeName === 'BUTTON') {
    // add to queued or watched
    console.log(currentMovie);
    if (currentMovie.isWatched) {
      currentMovie.isQueued = true;
      currentMovie.isWatched = false;
    } else {
      currentMovie.isQueued = false;
      currentMovie.isWatched = true;
    }
    myLibDB.addMovie(currentMovie);
    renderMovies();
  }
}

// ====================
function renderModalCard(id) {
  currentMovie = myLibDB.getMovie({ id });
  const markup = getModalCardMarkup(currentMovie.movieDetails, genres);
  modalEl.innerHTML = markup;
  modalEl.classList.add('active');
}
// ====================

function renderMovies() {
  const formData = new FormData(filterEl);
  const filterValue = formData.get('filter');

  const filteredMovies = myLibDB.getMovies({ [filterValue]: true });
  const moviesDetails = filteredMovies.map(item => item.movieDetails);
  const markup = markupMovieCards(moviesDetails, genres).join('');
  galleryEl.innerHTML = markup;
}
