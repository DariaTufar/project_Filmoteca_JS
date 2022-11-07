import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { KEY } from './constants';
import axios from 'axios';

//new SimpleLightbox('.modal_movie');

////Работает№1////
async function findMovieByID() {
  params = {
    baseUrl: 'https://api.themoviedb.org/3/',
    movie_id: 33,
    language: 'en-US',
    api_key: KEY,
  };

   await axios.get(
    `${params.baseUrl}/movie/${params.movie_id}?api_key=${params.api_key}&language=${params.language}`
  ).then(response => {
    const modal = response.data;
    console.log(modal)
    //return modal;
    const render = modal.map(({ title, vote_count, vote_average, popularity, original_title, overview }) => {
      `<div class="modal_description">
        <h1 class="movie_title">${title}</h1>
        <ul>
            <li class="movie_description">Vote / Votes<span class="movie_vote">${vote_count}</span>
            <span class="movie_description">${vote_average}</span></li>
            <li class="movie_description">Popularity<span class="movie_value">${popularity}</span></li>
            <li class="movie_description">Original Title<span class="movie_value">${original_title}</span></li>
            <li class="movie_description">Genre<span class="movie_value">${Object(genres.name)}</span></li>
        </ul>
        <h2></h2>
        <p class="about-text">${overview}</p>
      
        <button>ADD TO WATCHED</button>
        <button>ADD TO QUEUE</button>
      </div>`;
   })
 return render;
  })
  .catch(error => {
    console.log(error);
  });


//console.log('Работает№1', response.data);
};

findMovieByID()

//console.log(findMovieByID().modal)

/* async function renderMovieCard(modal) {
  const render = modal.map(({ title, vote_count, vote_average, popularity, original_title, overview }) => {
      return `<div class="modal_description">
         <h1 class="movie_title">${title}</h1>
         <ul>
             <li class="movie_description">Vote / Votes<span class="movie_vote">${vote_count}</span>
             <span class="movie_description">${vote_average}</span></li>
             <li class="movie_description">Popularity<span class="movie_value">${popularity}</span></li>
             <li class="movie_description">Original Title<span class="movie_value">${original_title}</span></li>
             <li class="movie_description">Genre<span class="movie_value">${Object(genres.name)}</span></li>
         </ul>
         <h2></h2>
         <p class="about-text">${overview}</p>
       
         <button>ADD TO WATCHED</button>
         <button>ADD TO QUEUE</button>
       </div>`;
    }
  )

  const gallery = document.querySelector('.modal_movie');
  gallery.insertAdjacentHTML('beforeend', render);

  new SimpleLightbox('.modal_movie', {
    preloading: false,
  });
  

} */

//renderMovieCard()



/////////////////

///РАБОТАЕТ#2///
/* const baseUrl = 'https://api.themoviedb.org/3/';
let movie_id = 26;
const language = 'en-US';
const api_key = KEY;

const serchtwo = axios.get(
  `${baseUrl}/movie/${movie_id}?api_key=${api_key}&language=${language}`
);

console.log('2', serchtwo); */

/////////////////////////////////

/* .then(response => {
  return response.json();
}); */


//export { findMovieByID };




