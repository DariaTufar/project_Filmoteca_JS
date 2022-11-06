import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import { markupMovieCards } from './markupMovieCards';
import ServerRequest from './serverRequest';

const TRENDING_LIST = 'trending/movie/week'; // Уточнюючий шлях для запиту

export const movieAPI = new ServerRequest(TRENDING_LIST); // Ініціалізує екземпляр класу для запитів на АРІ. При ініціалізації потрібно передати детальний шлях який додається до базової урли АРІ (БАЗОВА УРЛА ВЖЕ ПРИСУТНЯ В КЛАСІ!!!!!!), та обєкт конфігурацій

renderPageMovies(movieAPI); // В цю функцію потрібно кинути посилання на ініціалізований екземпляр класу!!! Запуск рендера для отримання потрібних 

export async function renderPageMovies(requestAPI = movieAPI) { // Робить запит та рендерить розмітку даних
  try {
    const { results, total_pages, total_results } = await requestAPI.getMovies(); // Повертає масив фільмів з АРІ

    requestAPI.totalPages = total_pages;
    requestAPI.totalMovies = total_results;

    const genres = await requestAPI.getGenres(); // Повертає жанри з АРІ
    const markup = markupMovieCards(results, genres); // Рендерить розмітку для карток

    refs.galleryList.innerHTML = markup.join(''); // Додає розмітку в DOM
  } catch (error) {
    Notify.failure(error.message);
  }
}