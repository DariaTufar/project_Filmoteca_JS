import ServerRequest from './serverRequest';
import { refs } from './refs';
// import axios from 'axios';
import { KEY } from './constants';
import { markupMovieCards } from './markupMovieCards';
import { onClickPagination } from './createMarkup';

// const BASE_URL = 'https://api.themoviedb.org/3/';
// const TRENDING_LIST = 'trending/movie/week'; // Уточнюючий шлях для запиту
// const GENRES_LIST = 'genre/movie/list';
// let genres = [];

const config = {
  params: {
    api_key: KEY,
    language: 'en-US',
    sort_by: 'popularity.desc',
    include_adult: false,
    with_watch_monetization_types: 'flatrate',
    include_video: false,
    with_genres: null,
    page: 1,
    query: null,
  },
};

export const genreAPI = new ServerRequest('discover/movie', config); // Ініціалізує екземпляр класу для запитів на АРІ. При ініціалізації потрібно передати детальний шлях який додається до базової урли АРІ (БАЗОВА УРЛА ВЖЕ ПРИСУТНЯ В КЛАСІ!!!!!!), та обєкт конфігурацій
// console.log(genreAPI);
// const button = document.querySelector('.dropbtn');
// const dropdownContent = document.querySelector('.dropdown-content');
// const dropdown = document.querySelector('.dropdown');

window.addEventListener('click', onClick);

export function onClick(event) {
  // event.preventDefault();
  if (!event.target.classList.contains('dropbtn')) {
    refs.dropdownContent.classList.remove('show');
    return;
  }

  refs.element.removeEventListener('click', onClickPagination);

  refs.dropdownContent.classList.toggle('show');
  renderGenres();
}

refs.dropdownContent.addEventListener('click', onGenre);

function onGenre(event) {
  const target = event.target;
  const genreEl = target.closest('.genre-name');
  console.log(genreEl);
  if (!genreEl) {
    return;
  }
  genreAPI.idGenre = genreEl.dataset.genreid;

  searchGenres();
}

async function searchGenres() {
  try {
    const { results, total_pages, total_results } = await genreAPI.getMovies();

    genreAPI.totalPages = total_pages;
    genreAPI.totalMovies = total_results;

    const markup = markupMovieCards(results, genreAPI.genres); // Рендерить розмітку для карток
    refs.galleryList.innerHTML = markup.join(''); // Додає розмітку в DOM

    console.log('genreAPI.genres :>> ', genreAPI.totalPages);

    if (genreAPI.totalPages > 1) {
      genreAPI.createPagination(refs.element);

      refs.element.addEventListener('click', onPagination);
    } else {
      refs.element.innerHTML = '';
    }
  } catch (error) {
    error.message;
  }
}

function onPagination(event) {
  if (
    event.target === event.currentTarget ||
    event.target.textContent === '...'
  ) {
    return;
  }

  if (Number(event.target.textContent)) {
    genreAPI.page = Number(event.target.textContent);
  }

  if (event.target.textContent) {
    switch (event.target.textContent) {
      case ' «':
        genreAPI.decrementPage();
        console.log(event.target.textContent);
        break;
      case '» ':
        genreAPI.incrementPage();
        console.log(event.target.textContent);
        break;
    }
  }

  searchGenres();
  genreAPI.createPagination(refs.element);
}

async function renderGenres() {
  try {
    genres = await genreAPI.getGenres();
    // console.log(genres);
    const markup = murkupFilterGenres(genres);
    refs.dropdownContent.innerHTML = markup.join('');
  } catch (error) {
    error.message;
  }
}

function murkupFilterGenres(genres) {
  return genres.map(genre => {
    // console.log(genre.name, genre.id);

    return ` <li class ="genre-name" data-genreid="${genre.id}" >${genre.name}</li>`;
  });
}

// import ServerRequest from './serverRequest';
// import { refs } from './refs';
// import axios from 'axios';
// import { KEY } from './constants';
// import { markupMovieCards } from './markupMovieCards';

// const BASE_URL = 'https://api.themoviedb.org/3/';
// const TRENDING_LIST = 'trending/movie/week'; // Уточнюючий шлях для запиту
// const GENRES_LIST = 'genre/movie/list';
// let genres = [];

// export const genreAPI = new ServerRequest(TRENDING_LIST); // Ініціалізує екземпляр класу для запитів на АРІ. При ініціалізації потрібно передати детальний шлях який додається до базової урли АРІ (БАЗОВА УРЛА ВЖЕ ПРИСУТНЯ В КЛАСІ!!!!!!), та обєкт конфігурацій

// // const button = document.querySelector('.dropbtn');

// // const dropdown = document.querySelector('.dropdown');

// window.addEventListener('click', onClick);

// function onClick(event) {
//   event.preventDefault();

//   if (!event.target.classList.contains('dropbtn')) {
//     refs.dropdownContent.classList.remove('show');
//     return;
//   }
//   refs.dropdownContent.classList.toggle('show');
//   renderGenres();
// }

// refs.dropdownContent.addEventListener('click', onGenre);

// function onGenre(event) {
//   const target = event.target;
//   const genreEl = target.closest('.genre-name');
//   console.log(genreEl);
//   if (!genreEl) {
//     return;
//   }
//   const genreId = genreEl.dataset.genreid;

//   searchGenres(genreId);
// }

// async function searchGenres(genreId) {
//   try {
//     const params = {
//       api_key: KEY,
//       genre_id: genreId,
//     };
//     const url =
//       BASE_URL +
//       `discover/movie?api_key=${params.api_key}&language=en-US&sort_by=popularity.desc&with_genres=${params.genre_id}`; // Тут додає ться базова урла і більш детальний шлях
//     const response = await axios.get(url);
//     const { results, total_pages, total_results } = response.data;

//     console.log(response.data.results);

//     genreAPI.totalPages = total_pages;
//     genreAPI.totalMovies = total_results;

//     const markup = markupMovieCards(results, genres); // Рендерить розмітку для карток
//     // console.log(markup);
//     refs.galleryList.innerHTML = markup.join(''); // Додає розмітку в DOM

//     // console.log(response);
//   } catch (error) {
//     error.message;
//   }
// }

// async function renderGenres() {
//   try {
//     genres = await genreAPI.getGenres();
//     // console.log(genres);
//     const markup = murkupFilterGenres(genres);
//     refs.dropdownContent.innerHTML = markup.join('');
//   } catch (error) {
//     error.message;
//   }
// }

// function murkupFilterGenres(genres) {
//   return genres.map(genre => {
//     // console.log(genre.name, genre.id);

//     return ` <li class ="genre-name" data-genreid="${genre.id}" >${genre.name}</li>`;
//   });
// }
