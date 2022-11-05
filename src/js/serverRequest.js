import axios from "axios";
import { KEY } from "./constants";

const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_LIST = 'trending/movie/week';
const GENRES_LIST = 'genre/movie/list';

const configDefault = {
    params: {
        api_key: KEY,
        page: 1,
        language: 'en-US',
    }
};

export default class ServerRequest { // При ініціалізації можна передавати базову урлу, та обєкт конфігурацій
    BASE_URL;

    constructor(url = BASE_URL, config = configDefault) {
        this.BASE_URL = BASE_URL,
            this.url = url;
        this.config = config;
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
        this.config.params.page = 1; // Скидає параметр сторінки в конфігурації запиту 
    }

    async getMovies(details = TRENDING_LIST) {
        this.url = this.BASE_URL + details; // Тут додає ться базова урла і більш детальний шлях
        const response = await axios.get(this.url, this.config); // Запит на АРІ

        return response.data; // Повертає проміс із даними
    }

    async getGenres() {
        const response = await axios.get(`${this.BASE_URL}${GENRES_LIST}`, this.config); // Запит на АРІ за жанрами

        return response.data.genres; // Повертає проміс із жанрами
    }
}
