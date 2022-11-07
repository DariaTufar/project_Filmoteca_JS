import { movieAPI } from "./createMarkup";
import { renderPageMovies } from "./createMarkup";
import { createPagination } from "./createPagination";
import { refs } from "./refs";


let totalPages = 20;
let page = movieAPI.page;
refs.element.innerHTML = createPagination(totalPages, page);

refs.element.addEventListener('click', async (event) => {
    await movieAPI.getMovies();
    totalPages = movieAPI.totalPages;
    if (event.target === event.currentTarget || event.target.textContent === '...') {
        return;
    }

    if (Number(event.target.textContent)) {
        movieAPI.page = Number(event.target.textContent);
    } else {
        switch (event.target.textContent) {
            case ' «':
                movieAPI.decrementPage();
                console.log(movieAPI.page);

                break;
            case '» ':
                movieAPI.incrementPage();
                console.log('-1', movieAPI.page);

                break;
        }
    }

    page = movieAPI.page;
    await renderPageMovies();
    refs.element.innerHTML = createPagination(totalPages, page);
})



// if (movieAPI.page.totalPages) {
//     movieAPI.page.paginationWrapperDiv.setAttribute('style', 'display: none');
// } else {
//     movieAPI.page.paginationWrapperDiv.removeAttribute('style');
// }