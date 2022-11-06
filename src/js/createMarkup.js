import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { KEY } from './constants';
import { refs } from './refs';
import ServerRequest from './serverRequest';
import posterDefault from '../images/posterMovie.jpg';

const TRENDING_LIST = 'trending/movie/week'; // Уточнюючий шлях для запиту
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500'; // Базова урла для зображень, та постерів

export const movieAPI = new ServerRequest(TRENDING_LIST); // Ініціалізує екземпляр класу для запитів на АРІ. При ініціалізації потрібно передати детальний шлях який додається до базової урли АРІ (БАЗОВА УРЛА ВЖЕ ПРИСУТНЯ В КЛАСІ!!!!!!), та обєкт конфігурацій

renderPageMovies(movieAPI); // В цю функцію потрібно кинути посилання на ініціалізований екземпляр класу!!! Запуск рендера для отримання потрібних 

export async function renderPageMovies(requestAPI = movieAPI) { // Робить запит та рендерить розмітку даних
  try {
    const { results } = await requestAPI.getMovies(); // Повертає масив фільмів з АРІ

    const markup = await renderMovieCards(results); // Рендерить розмітку для карток

    refs.galleryList.innerHTML = markup.join(''); // Додає розмітку в DOM
  } catch (error) {
    Notify.failure(error.message);
  }
}

export async function renderMovieCards(movies) {
  const genres = await movieAPI.getGenres(); // Повертає жанри з АРІ
  // Масив розмітки всіх карток фільмів що прийшли з АРІ
  return movies.map(({ title, poster_path, release_date, genre_ids, id }) => {
    const poster = poster_path ? BASE_URL_IMG + poster_path : posterDefault; // Генерує потрібний постер, в залежності від того чи він прийшов з АРІ
    const releaseYear = release_date.split('').slice(0, 4).join(''); // Парсить дату релізу та повертає тільки рік
    // Повертає жанри для конкретного фільму
    const genresName = genres
      .filter(genre => genre_ids.includes(genre.id))
      .map(el => el.name);

    if (genresName.length > 2) {  // Перевіряє довжину масиву жанрів чи вона більше 2-х
      genresName.splice(2, genresName.length, 'Other'); // Обрізає масив жанрів та додає в кінець "Other"
    }

    return `<li class="gallery__item" data-movieID="${id}">
              <img src="${poster}" alt="${title}" class="gallery__item-poster">
               <div class=" gallery__item-descr-wrap">
                 <h2 class="gallery__item-title">${title}</h2>
                 <p class="gallery__item-genre">${genresName.join(', ')} <span class="gallery__item-date">| ${releaseYear}</span></p>
              </div>
            </li>`;
  });
}