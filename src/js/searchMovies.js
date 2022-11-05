import axios from "axios";
import Notiflix from "notiflix";
import { KEY } from "./constants";
import { refs } from "./refs";
import ServerRequest from './serverRequest';
// import renderMovieCards from './createMarkup';

const BASE_URL = 'https://api.themoviedb.org/3/';

const MESSAGE_INFO  = 'Please, enter key word for search!';
const MESSAGE_ERROR = 'Sorry, there are no movies matching your search query. Please try again.';
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

refs.formSearch.addEventListener('submit', onSearchForm);

async function onSearchForm(evt) {
  evt.preventDefault();

  const inputText = refs.inputSearch.value.trim();

  const configDefault = {
  params: {
    api_key: KEY,
    page: 1,
    query: inputText,
    language: 'en-US',
  },
  }

  const resp = await axios.get(`${BASE_URL}search/movie`, configDefault);
  const results = resp.data.results;

  const markup = renderMovieCards(results);
  
  try {
    refs.inputSearch.innerHTML = '';
    if (refs.inputSearch.length === 0) {
      Notiflix.Notify.info(MESSAGE_ERROR);
    } else if (!inputText) {
      Notiflix.Notify.info(MESSAGE_INFO);
      return;
    } else {
      Notiflix.Notify.success(`Hooray! We found ${resp.totalHits} movies.`);
    }
  } catch (error) {
    console.log(error.message);
  }
}

// Не можу дістати функцію renderMovieCards з файлу createMarkup.js

async function renderMovieCards(movies) {
  const configDefault = {
    params: {
      api_key: KEY,
      page: 1,
      query: '',
      language: 'en-US',
    },
  }

  const movieAPI = new ServerRequest(BASE_URL, configDefault);
    const genres = await movieAPI.getGenres();

    const markup = movies.map(
      ({ title, poster_path, release_date, genre_ids }) => {
        const genresName = genres
          .filter(genre => genre_ids.includes(genre.id))
          .map(el => el.name);

        return `<li class="gallery__item">
                      <a href="" class="gallery__item-link">
                          <img src="${BASE_URL_IMG}${poster_path}" alt="${title}" class="gallery__item-poster">
                          <div class=" gallery__item-descr-wrap">
                              <h2 class="gallery__item-title">${title}</h2>
                              <p class="gallery__item-genre">${genresName}<span class="gallery__item-date">${release_date}</span></p>
                          </div>
                      </a>
                  </li>`;
      }
    );

    refs.galleryList.innerHTML = markup.join('');
}
    