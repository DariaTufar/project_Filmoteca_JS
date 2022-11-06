import posterDefault from '../images/posterMovie.jpg';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500'; // Базова урла для зображень, та постерів

export function markupMovieCards(movies, genres) {
    // Масив розмітки всіх карток фільмів що прийшли з АРІ
    return movies.map(({ title, poster_path, release_date, genre_ids, id }) => {
        const poster = poster_path ? BASE_URL_IMG + poster_path : posterDefault; // Генерує потрібний постер, в залежності від того чи він прийшов з АРІ
        const releaseYear = release_date.split('').slice(0, 4).join(''); // Парсить дату релізу та повертає тільки рік
        const genresName = genresByMovies(genres, genre_ids); // Повертає жанри для конкретного фільму

        return `<li class="gallery__item" data-movieID="${id}">
              <img src="${poster}" alt="${title}" class="gallery__item-poster">
               <div class=" gallery__item-descr-wrap">
                 <h2 class="gallery__item-title">${title}</h2>
                 <p class="gallery__item-genre">${genresName.join(', ')} <span class="gallery__item-date">| ${releaseYear}</span></p>
              </div>
            </li>`;
    });
}

function genresByMovies(genres, genresID) {
    const genresName = genres
        .filter(genre => genresID.includes(genre.id))
        .map(el => el.name);

    if (genresName.length > 2) {  // Перевіряє довжину масиву жанрів чи вона більше 2-х
        genresName.splice(2, genresName.length, 'Other'); // Обрізає масив жанрів та додає в кінець "Other"
    }

    return genresName;
}