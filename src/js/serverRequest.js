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

export default class ServerRequest {
    BASE_URL;

    constructor(url = BASE_URL, config = configDefault) {
        this.BASE_URL = BASE_URL,
            this.url = url;
        this.config = config;
    }

    get page() {
        return this.config.params.page;
    }

    set page(newPage) {
        this.config.params.page = newPage;
    }

    incrementPage() {
        this.config.params.page += 1;
    }

    decrementPage() {
        this.config.params.page -= 1;
    }

    reset() {
        this.config.params.page = 1;
    }

    async getMovies(details = TRENDING_LIST) {
        this.url = this.BASE_URL + details;
        const response = await axios.get(this.url, this.config);

        return response.data;
    }

    async getGenres(details = GENRES_LIST) {
        const response = await axios.get(`${this.BASE_URL}${GENRES_LIST}`, this.config);

        return response.data.genres;
    }
}
