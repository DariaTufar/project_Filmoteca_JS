import * as basicLightbox from 'basiclightbox';
import { KEY } from './constants';
import 'basiclightbox/dist/basicLightbox.min.css';

const srcTrailer = 'https://www.youtube.com/embed/';

const modal = basicLightbox.create(`
  <iframe width="900" height="600" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<button class="close-modal__trailer">     
     </button>`);
const iframeTrailer = modal.element().querySelector('iframe');

const modal2 = basicLightbox.create(`
    <iframe width="900" height="600" src="${srcTrailer}6DhiiFGk4_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);

export default function openTrailer(id) {
  findTrailer(id)
    .then(data => {
      const key = data.results[0].key;

      iframeTrailer.src = srcTrailer + key;
      modal.show();

      const closeBtn = document.querySelector('.close-modal__trailer');
      closeBtn.addEventListener('click', closeModal);
      function closeModal(e) {
        modal.close();
        window.removeEventListener('keydown', closeModalHandler);
      }
    })
    .catch(error => {
      //   const modal = basicLightbox.create(`
      // <iframe width="860" height="615" src="${srcTrailer}6DhiiFGk4_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      //   `);
      modal2.show();
      console.log(error);
    });
}

function findTrailer(idCard) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${idCard}/videos?api_key=${KEY}&language=en-US`
  ).then(respons => respons.json());
}
