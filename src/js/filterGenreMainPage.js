import ServerRequest from './serverRequest';
import { refs } from './refs';
import axios from 'axios';
import { KEY } from './constants';

const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_LIST = 'trending/movie/week'; // Уточнюючий шлях для запиту
const GENRES_LIST = 'genre/movie/list';
// let genre = [];

export const genreAPI = new ServerRequest(TRENDING_LIST); // Ініціалізує екземпляр класу для запитів на АРІ. При ініціалізації потрібно передати детальний шлях який додається до базової урли АРІ (БАЗОВА УРЛА ВЖЕ ПРИСУТНЯ В КЛАСІ!!!!!!), та обєкт конфігурацій

const button = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdown = document.querySelector('.dropdown');

window.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('dropbtn')) {
    dropdownContent.classList.remove('show');
    return;
  }
  dropdownContent.classList.toggle('show');
  renderGenres();
}

dropdownContent.addEventListener('click', onGenre);

function onGenre(event) {
  const genre = event.target.textContent;
  console.log(genre);
  searchGenres(genre);
}

async function searchGenres(genre) {
  const params = {
    movie_genre: genre,
    // language: 'en-US',
    api_key: KEY,
  };
  const url =
    BASE_URL +
    `${params.movie_genre}/movie/list?api_key=${params.api_key}&language=en-US`; // Тут додає ться базова урла і більш детальний шлях
  const response = await axios.get(url); // Запит на АРІ за жанрами
  this.genres = response.data.genres.name;
  console.log(response.data.genres.name);
  return response.data.genres.name; // Повертає проміс із жанрами
}

async function renderGenres() {
  try {
    const genres = await genreAPI.getGenres();
    // console.log(genres);
    const markup = murkupFilterGenres(genres);
    dropdownContent.innerHTML = markup.join('');
  } catch (error) {
    error.message;
  }
}

function murkupFilterGenres(genres) {
  return genres.map(genre => {
    // console.log(genre.name);

    return ` <li class ="genre-name">${genre.name}</li>`;
  });
}
