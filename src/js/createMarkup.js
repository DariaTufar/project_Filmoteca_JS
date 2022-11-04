//   in example.html -  example of markup




// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import axios from "axios";
import { KEY } from "./constants";

import ServerRequest from "./serverRequest";

const refs = {
    galleryList: document.querySelector('.gallery__list'),
};


const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING = 'trending/movie/week';
const GENRES_LIST = 'genre/movie/list'
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

const configDefault = {
    params: {
        api_key: KEY,
        page: 1,
        language: 'en-US',
    }
};

const movieAPI = new ServerRequest(BASE_URL, configDefault);
console.log(movieAPI);


// movieAPI.page(35);
// console.log(movieAPI);
movieAPI
    .getMovies()
    .then(({ results }) => {
        renderMovieCards(results)
        console.log(results);
    })
    .catch(console.log);

// getMovies(TRENDING).then(
//     ({ results }) => {
//         renderMovieCards(results)
//         console.log(results);
//     }
// ).catch(console.log);




async function renderMovieCards(movies) {
    const genres = await movieAPI.getGenres();
    // const genres = await getGenres();

    const markup = movies.map(({ title, poster_path, release_date, genre_ids
    }) => {
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
    })
    console.log(markup);

    refs.galleryList.innerHTML = markup.join('');
}

// async function getMovies(details) {
//     const url = BASE_URL + details;
//     const response = await axios.get(url, configDefault);

//     return response.data;
// }

// async function getGenres() {
//     const url = `${BASE_URL}genre/movie/list`;
//     const response = await axios.get(url, configDefault);

//     return response.data.genres;
// }