import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { KEY } from './constants';
import { refs } from './refs';
import ServerRequest from './serverRequest';

const TRENDING_LIST = 'trending/movie/week'; // Уточнюючий шлях для запиту
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500'; // Базова урла для зображень, та постерів

export const movieAPI = new ServerRequest(); // Ініціалізує екземпляр класу для запитів на АРІ. При ініціалізації можна передавати базову урлу, та обєкт конфігурацій

renderPageMovies(); // Дефолтний запуск рендера головної сторінки з першою 20 фільмів що в тренді

export async function renderPageMovies() { // Робить запит та рендерить розмітку даних
  try {
    const { results } = await movieAPI.getMovies(TRENDING_LIST); // Повертає масив фільмів з АРІ

    renderMovieCards(results); // Рендерить розмітку для карток
  } catch (error) {
    Notify.failure(error);
  }
}

export async function renderMovieCards(movies) {
  const genres = await movieAPI.getGenres(); // Повертає жанри з АРІ
  // Масив розмітки всіх карток фільмів що прийшли з АРІ
  const markup = movies.map(({ title, poster_path, release_date, genre_ids }) => {
    const releaseYear = release_date.split('').slice(0, 4).join(''); // Парсить дату релізу та повертає тільки рік
    // Повертає жанри для конкретного фільму
    const genresName = genres
      .filter(genre => genre_ids.includes(genre.id))
      .map(el => el.name);

    if (genresName.length > 2) {  // Перевіряє довжину масиву жанрів чи вона більше 2-х
      genresName.splice(2, genresName.length, 'Other'); // Обрізає масив жанрів та додає в кінець "Other"
    }
    // Повертає розмітку картки фільма
    return `<li class="gallery__item">
              <img src="${BASE_URL_IMG}${poster_path}" alt="${title}" class="gallery__item-poster">
               <div class=" gallery__item-descr-wrap">
                 <h2 class="gallery__item-title">${title}</h2>
                 <p class="gallery__item-genre">${genresName} <span class="gallery__item-date">| ${releaseYear}</span></p>
              </div>
            </li>`;
  });

  refs.galleryList.innerHTML = markup.join(''); // Додає розмітку в DOM
}