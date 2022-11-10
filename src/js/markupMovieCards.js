import posterDefault from '../images/posterMovie.jpg';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500'; // Базова урла для зображень, та постерів

export function markupMovieCards(movies, genres, rating = false) {
  // Масив розмітки всіх карток фільмів що прийшли з АРІ

  return movies.map(
    ({ title, poster_path, release_date, genre_ids, id, vote_average }) => {
      const poster = poster_path ? BASE_URL_IMG + poster_path : posterDefault; // Генерує потрібний постер, в залежності від того чи він прийшов з АРІ
      const releaseYear = release_date ? release_date.slice(0, 4) : ' No year'; // Парсить дату релізу та повертає тільки рік
      const genresName = genresByMovies(genres, genre_ids); // Повертає жанри для конкретного фільму
      return `<li class="gallery__item" data-movieid="${id}">
              <a href="#" gallery__item-link>
              <img src="${poster}" alt="${title}" class="gallery__item-poster">
               <div class=" gallery__item-descr-wrap">
                 <h2 class="gallery__item-title">${title}</h2>
                 <p class="gallery__item-genre">${genresName} <span class="gallery__item-date">| ${releaseYear}</span> ${rating ? `<span class="rating">${vote_average.toFixed(1)}</span>` : ''}</p>
              </div>
              </a>
            </li>`;
    }
  );
}

function genresByMovies(genres, genresID) {
  if (genresID.length < 1) {
    return 'Genre not specified';
  }
  const genresName = genres
    .filter(genre => genresID.includes(genre.id))
    .map(el => el.name);

  if (genresName.length > 2) {
    // Перевіряє довжину масиву жанрів чи вона більше 2-х
    genresName.splice(2, genresName.length, 'Other'); // Обрізає масив жанрів та додає в кінець "Other"
  }

  return genresName.join(', ');
}
