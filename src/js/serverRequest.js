import axios from "axios";
import { KEY } from "./constants";
// import { refs } from "./refs";

const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_LIST = 'trending/movie/week';
const GENRES_LIST = 'genre/movie/list';

const configDefault = {
  params: {
    api_key: KEY,
    page: 1,
    query: null,
    language: 'en-US',
  }
};

export default class ServerRequest {
  // При ініціалізації можна передавати базову урлу, та обєкт конфігурацій
  BASE_URL = BASE_URL; // Базова урла
  totalPages;
  totalMovies;
  genres;
  movies;

  constructor(details = TRENDING_LIST, config = configDefault) {
    this.details = details; // Детальна приставка до базової урли
    this.config = config; // Переданий файл з конфігураціями для запиту
    this.totalPages = null; // Загальна кількість сторінок
    this.totalMovies = 0; // Загальна кількість фільмів
    this.genres = [];
    this.movies = [];
  }

  get idGenre() {
    return this.config.params.with_genres;
  }

  set idGenre(newID) {
    return this.config.params.with_genres = newID;
  }

  get page() {
    return this.config.params.page; // Повертає значення параметра сторінки, в конфігурації запиту
  }

  set page(newPage) {
    this.config.params.page = newPage; // Змінює параметр сторінки на будьяке число, в конфігурації запиту
  }

  incrementPage() {
    this.config.params.page += 1; // Збільшує параметр сторінки на 1, в конфігурації запиту
  }

  decrementPage() {
    this.config.params.page -= 1; // Зменшує параметр сторінки на 1, в конфігурації запиту
  }

  reset() {
    this.config.params.query = null; // Скидає параметр пошуку в конфігурації запиту
    this.config.params.page = 1; // Скидає параметр сторінки в конфігурації запиту
    this.totalPages = null; // Скидає загальну кількість сторінок
    this.totalMovies = 0; // Скидає загальну кількість фільмів
  }

  get query() {
    return this.config.params.query;
  }

  set query(newQuery) {
    this.config.params.query = newQuery;
  }

  get totalMovies() {
    return this.totalMovies;
  }

  set totalMovies(total) {
    this.totalMovies = total;
  }

  get totalPages() {
    return this.totalPages;
  }

  set totalPages(total) {
    this.totalPages = total;
  }

  async dataMovies() {
    const genres = await this.getGenres(); // Повертає жанри з АРІ
    let data = null;
    if (this.query) {
      data = await this.getSearch();
    } else {
      data = await this.getMovies(); // Повертає масив фільмів з АРІ
    }
    const { results, total_pages, total_results } = data;
    this.totalPages = total_pages;
    this.totalMovies = total_results;
    this.genres = genres;
    this.movies = results;

    return { genres, results, total_pages, total_results };
  }

  // async getGenreMovies() {
  //   const url = this.BASE_URL + this.details; // Тут додає ться базова урла і більш детальний шлях
  //   const response = await axios.get(url, this.config); // Запит на АРІ

  //   return response.data; // Повертає проміс із даними
  // }

  async getMovies() {
    //
    const url = this.BASE_URL + this.details; // Тут додає ться базова урла і більш детальний шлях
    const response = await axios.get(url, this.config); // Запит на АРІ

    return response.data; // Повертає проміс із даними
  }

  async getGenres() {
    const url = this.BASE_URL + GENRES_LIST; // Тут додає ться базова урла і більш детальний шлях
    const response = await axios.get(url, this.config); // Запит на АРІ за жанрами
    this.genres = response.data.genres;

    return response.data.genres; // Повертає проміс із жанрами
  }

  async getSearch() {
    const url = this.BASE_URL + 'search/movie'; // Тут додає ться базова урла і більш детальний шлях
    const response = await axios.get(url, this.config); // Запит на АРІ за жанрами

    return response.data;
  }

  createPagination(ref) {
    let liTag = '';
    let active;
    let beforePage = this.page - 1;
    let afterPage = this.page + 1;
    if (this.page > 1) {
      //показывает следующую страницу если значение пейдж больше чем один
      liTag += `<li class="btn prev"><a href="#"><i class="fas fa-angle-left"></i> &#171;</a></li>`;
    }
    if (this.page > 2) {
      //если значение пейдж меньше чем 2 - тогда добавь один после предыдущей кнопки
      liTag += `<li class="first numb"><a href="#">1</a></li>`;
      if (this.page > 3) {
        //если значение пейдж больше чем 3 - тогда добавь ... полсе первой лишки или пейдж
        liTag += `<li class="dots"><span>...</span></li>`;
      }
    }

    if (this.page == this.totalPages) {
      //сколько страниц или лишек показывается перед текущей Ли
      beforePage = beforePage - 2;
    } else if (this.page == this.totalPages - 1) {
      beforePage = beforePage - 1;
    }

    if (this.page == 1) {
      //сколько страниц или лишек показывается после текущей Ли
      afterPage = afterPage + 2;
    } else if (this.page == 2) {
      afterPage = afterPage + 1;
    }
    for (let plength = beforePage; plength <= afterPage; plength += 1) {
      if (plength > this.totalPages) {
        //если длина пейдж больше чем тоталпейдж тогда продолжай
        continue;
      }
      if (plength == 0) {
        plength = plength + 1;
      }
      if (this.page == plength) {
        active = 'active'; //навешивает активный клас
      } else {
        active = '';
      }
      liTag += `<li class="numb ${active}"><a href="#">${plength}</a></li>`; //рендэрит разметку строки с текущим активным номером страници
      // this.page = plength;
    }
    if (this.page < this.totalPages - 1) {
      if (this.page < this.totalPages - 2) {
        //рендерит разметку троиточие если страниц меньше чем две
        liTag += `<li class="dots"><span>...</span></li>`;
      }
      liTag += `<li class="last numb"><a href="#">${this.totalPages}</a></li>`;
    }
    if (this.page < this.totalPages) {
      //показывает следующую кнопку если значени страницы меньше 20
      liTag += `<li class="btn next"><a href="#">&#187 <i class="fas fa-angle-right"></i></a></li>`;
    }

    this.renderPaginationBtn(liTag, ref); // добавляет все лишки в список разметки
  }
  renderPaginationBtn(btn, ref) {
    ref.innerHTML = btn;
    // this.addListener();
  }
  // addListener(ref) {
  //     ref.addEventListener('click', this.onClickPagination)
  // }

  // onClickPagination(event) {
  //     if (event.target === event.currentTarget || event.target.textContent === '...') {
  //         return;
  //     }

  //     if (Number(event.target.textContent)) {
  //         this.page = Number(event.target.textContent);
  //     } else {
  //         switch (event.target.textContent) {
  //             case ' «':
  //                 this.decrementPage();
  //                 console.log(this.page);

  //                 break;
  //             case '» ':
  //                 this.incrementPage();
  //                 console.log('-1', this.page);

  //                 break;
  //         }
  //     }

  //     createPagination(ref);
  // }
}