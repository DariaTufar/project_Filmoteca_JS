import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { KEY } from './constants';
import { refs } from './refs';
import ServerRequest from './serverRequest';

const TRENDING_LIST = 'trending/movie/week';
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

export const movieAPI = new ServerRequest();

renderPageMovies();

export async function renderPageMovies() {
  try {
    const { results } = await movieAPI.getMovies(TRENDING_LIST);

    renderMovieCards(results);
  } catch (error) {
    Notify.failure(err);
  }
}

export async function renderMovieCards(movies) {
  const genres = await movieAPI.getGenres();
  const markup = movies.map(({ title, poster_path, release_date, genre_ids }) => {
    const releaseYear = release_date.split('').slice(0, 4).join('');
    const genresName = genres
      .filter(genre => genre_ids.includes(genre.id))
      .map(el => el.name);

    if (genresName.length > 2) {
      genresName.splice(2, genresName.length, 'Other');
    }

    return `<li class="gallery__item">
              <img src="${BASE_URL_IMG}${poster_path}" alt="${title}" class="gallery__item-poster">
               <div class=" gallery__item-descr-wrap">
                 <h2 class="gallery__item-title">${title}</h2>
                 <p class="gallery__item-genre">${genresName} <span class="gallery__item-date">| ${releaseYear}</span></p>
              </div>
            </li>`;
  });

  refs.galleryList.innerHTML = markup.join('');
}