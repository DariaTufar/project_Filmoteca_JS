import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import { markupMovieCards } from './markupMovieCards';
import ServerRequest from './serverRequest';
import { showSpinner, hideSpinner } from './spinner';

// import createPagination from './createPagination';

const TRENDING_LIST = 'trending/movie/week'; // Уточнюючий шлях для запиту
const MESSAGE_INFO = 'Please, enter key word for search!';
const MESSAGE_ERROR =
  'Sorry, there are no movies matching your search query. Please try again.';

const movieAPI = new ServerRequest(TRENDING_LIST);

dataMovies(movieAPI);

export async function dataMovies(requestAPI) {
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
  if (
    event.target === event.currentTarget ||
    event.target.textContent === '...'
  ) {
    return;
  }

  if (Number(event.target.textContent)) {
    movieAPI.page = Number(event.target.textContent);
  }

  if (event.target.textContent) {
    switch (event.target.textContent) {
      case ' «':
        movieAPI.decrementPage();
        console.log(event.target.textContent);
        break;
      case '» ':
        movieAPI.incrementPage();
        console.log(event.target.textContent);
        break;
    }
  }

  dataMovies(movieAPI);
  movieAPI.createPagination(refs.element);
}
////////////////////////////////////////////////////////////////////
refs.formSearch.addEventListener('submit', onSearchForm);

async function onSearchForm(evt) {
  evt.preventDefault();
  const inputText = refs.inputSearch.value.trim();

  if (!inputText) {
    Notify.info(MESSAGE_INFO);
    return;
  }

  showSpinner(refs.iconSearch, refs.spinner);

  refs.element.removeEventListener('click', onClickPagination);

  movieAPI.reset();
  movieAPI.query = inputText;

  await dataMovies(movieAPI);

  hideSpinner(refs.spinner, refs.iconSearch);
}

//======================================================================================================//
// export async function renderPageMovies(requestAPI) { // Робить запит та рендерить розмітку даних

//   const genres = await requestAPI.getGenres(); // Повертає жанри з АРІ

//   try {
//     const { results, total_pages, total_results } = await requestAPI.getMovies(); // Повертає масив фільмів з АРІ

//     requestAPI.totalPages = total_pages;
//     requestAPI.totalMovies = total_results;

//     // const genres = await requestAPI.getGenres(); // Повертає жанри з АРІ
//     const markup = markupMovieCards(results, genres); // Рендерить розмітку для карток

//     refs.galleryList.innerHTML = markup.join(''); // Додає розмітку в DOM

//     console.log(requestAPI.totalPages);
//     console.log(requestAPI.page);
//     console.log('query >>', requestAPI.query);

//     requestAPI.createPagination(refs.element);

//     if (requestAPI.page === 1) {
//       addListner(requestAPI);
//       // refs.element.addEventListener('click', onClickPagination);
//     }
//   } catch (error) {
//     Notify.failure(error.message);
//   }
// }

// export function addListner(requestAPI) {
//   refs.element.addEventListener('click', onClickPagination);

//   function onClickPagination(event) {
//     // if (requestAPI.totalPages === 1) {
//     //   refs.element.removeEventListener('click', onClickPagination);
//     // }

//     if (event.target === event.currentTarget || event.target.textContent === '...') {
//       return;
//     }

//     if (Number(event.target.textContent)) {
//       requestAPI.page = Number(event.target.textContent);
//     }
//     if (event.target.textContent) {
//       switch (event.target.textContent) {
//         case ' «':
//           requestAPI.decrementPage();
//           // console.log(requestAPI.page);
//           console.log(event.target.textContent);
//           break;
//         case '» ':
//           requestAPI.incrementPage();
//           // console.log('-1', requestAPI.page);
//           console.log(event.target.textContent);

//           break;
//       }
//     }
//     // console.log(renderPageMovies(requestAPI));
//     // renderPageMovies(requestAPI).then(console.log);
//     remout(requestAPI);

//     requestAPI.createPagination(refs.element);
//   }
// }

// // export function onClickPagination(event) {
// //   // if (requestAPI.totalPages === 1) {
// //   //   refs.element.removeEventListener('click', onClickPagination);
// //   // }

// //   if (event.target === event.currentTarget || event.target.textContent === '...') {
// //     return;
// //   }

// //   if (Number(event.target.textContent)) {
// //     requestAPI.page = Number(event.target.textContent);
// //   }
// //   if (event.target.textContent) {
// //     switch (event.target.textContent) {
// //       case ' «':
// //         requestAPI.decrementPage();
// //         // console.log(requestAPI.page);
// //         console.log(event.target.textContent);
// //         break;
// //       case '» ':
// //         requestAPI.incrementPage();
// //         // console.log('-1', requestAPI.page);
// //         console.log(event.target.textContent);

// //         break;
// //     }
// //   }
// //   // console.log(renderPageMovies(requestAPI));
// //   // renderPageMovies(requestAPI).then(console.log);
// //   remout(requestAPI);

// //   requestAPI.createPagination(refs.element);
// // }

// async function remout(requestAPI) {
//   // if (requestAPI.query) {
//   //   refs.element.removeEventListener('click', onClickPagination);
//   //   return;
//   // }
//   try {
//     // if (requestAPI.query) {
//     // }
//     const { results } = await requestAPI.getMovies();
//     const genres = await requestAPI.getGenres(); // Повертає жанри з АРІ
//     console.log('results :>> ', results);
//     const markup = markupMovieCards(results, genres);
//     refs.galleryList.innerHTML = markup.join(''); // Додає розмітку в DOM
//     refs.element.removeEventListener('click', onClickPagination);
//   } catch (error) {

//   }

//   // await renderPageMovies(requestAPI);
// }
