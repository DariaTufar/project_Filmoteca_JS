import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'e994a62a86f0219af0993364e0b8b3fc';

//   search/company?api_key=<<api_key>>&page=1

export async function getMovieId() {
  const query = `queen`;
  const page = 20;

  const urlSearchByName = `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&page=${page}`;

  console.log(urlSearchByName);

  const response = await axios.get(urlSearchByName);

  console.log(response.data.results);
  console.log(response.data.results[0].original_title);
  console.log(response.data.results[0].genre_ids);
  const movieId = response.data.results[0].id;

  console.log(movieId);

  const posterUrl =
    `https://www.themoviedb.org/t/p/original/` +
    response.data.results[0].poster_path;
  console.log(posterUrl);
  return movieId;
}

// const urlById = `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`;
// console.log(urlById);
//api.themoviedb.org/3/movie/409531?api_key=e994a62a86f0219af0993364e0b8b3fc&language=en-US
// const responseById = await axios.get(urlById)
// console.log(responseById)

getMovieId();

console.log(movieId);
// function getMovieDetail() {

// }
// getMovieDetail();
