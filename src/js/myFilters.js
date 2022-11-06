import { markupMovieCards } from './markupMovieCards';
import ServerRequest from './serverRequest';
import { MyLibraryDB } from './MyLibraryDB';
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

// ************** TEMPORARY FUNCTIONS FOR TESTING *********************
function getModalCardMarkup(
  { title, vote_count, vote_average, popularity, original_title, overview },
  genres
) {
  const markup = `<div class="modal_description">
    <h1 class="movie_title">${title}</h1>
    <ul>
        <li class="movie_description">Vote / Votes<span class="movie_vote">${vote_count}</span>
        <span class="movie_description">${vote_average}</span></li>
        <li class="movie_description">Popularity<span class="movie_value">${popularity}</span></li>
        <li class="movie_description">Original Title<span class="movie_value">${original_title}</span></li>
        <li class="movie_description">Genre<span class="movie_value">${Object(
          genres.name
        )}</span></li>
    </ul>
    <h2></h2>
    <p class="about-text">${overview}</p>

    <button>ADD TO WATCHED</button>
    <button>ADD TO QUEUE</button>
  </div>`;

  return markup;
}

// ===========
function writeTestDataToDB() {
  const template = {
    adult: false,
    backdrop_path: '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
    id: 1,
    title: 'Black Adam',
    original_language: 'en',
    original_title: 'Black Adam',
    overview:
      'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
    poster_path: '/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg',
    media_type: 'movie',
    genre_ids: [28, 14, 878],
    popularity: 4085.77,
    release_date: '2022-10-19',
    video: false,
    vote_average: 6.937,
    vote_count: 803,
  };

  for (let i = 0; i < 6; i++) {
    const movieDetails = {
      ...template,
      id: i + 1,
      title: `${template.title} - ${i + 1}`,
    };
    myLibDB.addMovie({
      id: movieDetails.id,
      isQueued: true,
      isWatched: false,
      movieDetails,
    });
  }
}
