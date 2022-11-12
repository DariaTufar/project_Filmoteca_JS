import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import { markupMovieCards } from './markupMovieCards';
import ServerRequest from './serverRequest';
import { showSpinner, hideSpinner } from './spinner';
import { onPagination } from './filterGenreMainPage';

// import createPagination from './createPagination';

const TRENDING_LIST = 'trending/movie/week'; // Уточнюючий шлях для запиту - do we need it exactly? We alerady have `const TRENDING_LIST = 'trending/movie/week';` in ServerRequest class
const MESSAGE_INFO = 'Please, enter key word for search!';
const MESSAGE_ERROR =
  'Sorry, there are no movies matching your search query. Please try again.';

refs.formSearch.addEventListener('submit', onSearchForm);

const movieAPI = new ServerRequest(TRENDING_LIST);

getMoviesFromServer(movieAPI);

// functions:
export async function getMoviesFromServer(requestAPI) {
  try {
    await requestAPI.dataMovies();

    if (requestAPI.totalMovies) {
      if (requestAPI.query && requestAPI.page === 1) {
        Notify.success(`Hooray! We found ${movieAPI.totalMovies} movies`);
      }
    } else {
      throw new Error(MESSAGE_ERROR);
    }
  } catch (error) {
    Notify.failure(error.message);
  }

  setMoviesInMarkup(requestAPI)
}

function setMoviesInMarkup(requestAPI) {
  const { movies, genres } = requestAPI;
  const markup = markupMovieCards(movies, genres);

  refs.galleryList.innerHTML = markup.join('');

  if (requestAPI.totalPages > 1) {
    requestAPI.createPagination(refs.element);

    refs.element.addEventListener('click', onClickPagination);
  } else {
    refs.element.innerHTML = '';
  }
}

export function onClickPagination(event) {
  const content = event.target.textContent
  if (
    event.target === event.currentTarget ||
    content === '...'
  ) {
    return;
  }

  if (Number(content)) {
    movieAPI.page = Number(content);
  }

  if (content) {
    switch (content) {
      case ' «':
        movieAPI.decrementPage();
        console.log(content);
        break;
      case '» ':
        movieAPI.incrementPage();
        console.log(content);
        break;
    }
  }

  dataMovies(movieAPI);
  movieAPI.createPagination(refs.element);
}

async function onSearchForm(evt) {
  evt.preventDefault();
  const inputText = refs.inputSearch.value.trim();

  if (!inputText) {
    Notify.info(MESSAGE_INFO);
    return;
  }

  showSpinner(refs.iconSearch, refs.spinner);
  refs.element.removeEventListener('click', onPagination)
  refs.element.removeEventListener('click', onClickPagination);

  movieAPI.reset();
  movieAPI.query = inputText;

  await getMoviesFromServer(movieAPI);

  hideSpinner(refs.spinner, refs.iconSearch);
}
