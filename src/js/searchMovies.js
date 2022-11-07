// import Notiflix from "notiflix";
// import { KEY } from "./constants";
// import { refs } from "./refs";
// import ServerRequest from './serverRequest';
// import { markupMovieCards } from './markupMovieCards';
// // import { renderMovieCards } from "./createMarkup";

// Notiflix.Notify.init({
//   // успіх
//   // success: {
//   //   background: 'rgba(255, 107, 8, 1)',
//   // },
//   // попередження
//   warning: {
//     background: 'rgba(255, 107, 8, 1)',
//   },
// });

// const MESSAGE_INFO = 'Sorry, there are no movies matching your search query. Please try again.';
// const MESSAGE_ERROR = 'Please, enter key word for search!';
// const MESSAGE_SUCCESS = 'Hooray! We found movies.';

// const configDefault = {
//   params: {
//     api_key: KEY,
//     page: 1,
//     query: null,
//     language: 'en-US',
//   },
// }
// const searchAPI = new ServerRequest('search/movie', configDefault);

// refs.formSearch.addEventListener('submit', onSearchForm);

// async function onSearchForm(evt) {
//   evt.preventDefault();

//   const inputText = refs.inputSearch.value.trim();

//   if (inputText.length === 0) {
//     Notiflix.Notify.failure(MESSAGE_ERROR); // Робимо перевірку на порожній запит пошуку.
//     return false;
//   }

//   searchAPI.query = inputText;

//   //await renderPageMovies(searchAPI);

//   const { results } = await searchAPI.getMovies();
//   const genres = await searchAPI.getGenres(); // Повертає жанри з АРІ
//   const markup = await markupMovieCards(results, genres);

//   refs.galleryList.innerHTML = markup.join('');

//   try {
//     if (results.length > 0) {
//       Notiflix.Notify.success(MESSAGE_SUCCESS);
//     }
//     else {
//       Notiflix.Notify.warning(MESSAGE_INFO);
//     }
  
//   } catch (error) {
//     console.log(error.message);
//   }
// }
import Notiflix from "notiflix";
import { KEY } from "./constants";
import { refs } from "./refs";
import ServerRequest from './serverRequest';
import { renderPageMovies } from "./createMarkup";

Notiflix.Notify.init({
  info: {
    background: 'rgba(255, 107, 8, 1)',
  },
});

const SEARCH_LIST = 'search/movie';
const MESSAGE_INFO = 'Please, enter key word for search!';
const MESSAGE_ERROR = 'Sorry, there are no movies matching your search query. Please try again.';

const configDefault = {
  params: {
    api_key: KEY,
    page: 1,
    query: null,
    language: 'en-US',
  },
}

const searchAPI = new ServerRequest(SEARCH_LIST, configDefault);

refs.formSearch.addEventListener('submit', onSearchForm);

async function onSearchForm(evt) {
  evt.preventDefault();

  const inputText = refs.inputSearch.value.trim();

  if (!inputText) {
    Notiflix.Notify.info(MESSAGE_INFO); 
    return;
  }

  searchAPI.query = inputText;

  try {
       await renderPageMovies(searchAPI);
    if (searchAPI.totalMovies) {
      Notiflix.Notify.success(`Hooray! We found ${searchAPI.totalMovies} movies`);
    }
    else {
      throw new Error(MESSAGE_ERROR);
    }
  
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}

