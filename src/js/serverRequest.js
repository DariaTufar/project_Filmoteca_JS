import axios from "axios";
import { KEY } from "./constants";

const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING = 'trending/movie/week';


const configDefault = {
    params: {
        api_key: KEY,
        page: 1,
        language: 'en-US',
    }
};


export default class ServerRequest {
    BASE_URL = 'https://api.themoviedb.org/3/';

    constructor(url = BASE_URL, config = configDefault) {
        this.BASE_URL,
            this.url = url;
        this.config = config;
    }

    get page() {
        return this.config.params.page;
    }

    set page(newPage) {
        this.config.params.page = newPage;
    }

    reset() {
        this.config.params.page = 1;
    }

    async getMovies(details = TRENDING) {
        this.url = this.BASE_URL + details;
        const response = await axios.get(this.url, this.config);

        return response.data;
    }

    async getGenres() {
        const response = await axios.get(`${this.BASE_URL}genre/movie/list`, this.config);

        return response.data.genres;
    }
}
