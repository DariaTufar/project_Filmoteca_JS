import Notiflix from "notiflix";
import { KEY } from "./constants";
import { refs } from "./refs";
import ServerRequest from './serverRequest';
import { renderPageMovies } from "./createMarkup";
import { showSpinner } from "./spinner";
import { hideSpinner } from "./spinner";

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

  showSpinner(refs.iconSearch, refs.spinner);

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

   hideSpinner(refs.spinner, refs.iconSearch);
}

