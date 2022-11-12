import { readDB, writeDB, removeDB } from './firebase';
import { writeDB } from './firebase';

class FirebaseDB {
  #cachedMovie;

  // ========== отримати данні з кеша ===========
  get cachedMovie() {
    return this.#cachedMovie;
  }

  // ========== записати данні у кеш ===========
  set cachedMovie({ userId, isWatched, isQueued, movieDetails }) {
    this.#cachedMovie = {
      userId,
      isWatched,
      isQueued,
      movieDetails,
    };
  }

  // ========== додати фільм до бази даних Firebase ===========
  async addMovie({ userId, isQueued, isWatched, movieDetails }) {
    if (!userId || !movieDetails.id) {
      return null;
    }

    if (isWatched === undefined && isQueued === undefined) {
      return null;
    }

    if (isQueued !== undefined) {
      isWatched = !isQueued;
    } else {
      isQueued = !isWatched;
    }

    const movie = {
      isWatched,
      isQueued,
      movieDetails,
    };
    const path = `${userId}/${movieDetails.id}`;

    writeDB(path, movie);
  }

  // ========== видалити фільм з бази даних Firebase ===========
  async removeMovie({ userId, movieId }) {
    const path = `${userId}/${movieId}`;
    await removeDB(path);
  }

  // =========== отримати фільм з бази даних Firebase за ID фільму ===========
  async getMovie({ userId, movieId }) {
    const path = `${userId}/${movieId}`;
    return (await readDB(path)) ?? {};
  }

  // ========== отримати фільми з бази даних Firebase за фільтром ===========
  async getMovies({ userId, isWatched, isQueued }) {
    let result = [];
    const path = `${userId}`;
    const moviesList = await readDB(path);

    const movies = [];
    if (isWatched === undefined && isQueued === undefined) {
      for (const item in moviesList) {
        movies.push(moviesList[item].movieDetails);
      }
      return movies;
    }

    if (isWatched) {
      const found = [];
      for (const item in moviesList) {
        if (moviesList[item].isWatched) {
          found.push(moviesList[item].movieDetails);
        }
      }
      if (found) {
        result = [...result, ...found];
      }
    }

    if (isQueued) {
      const found = [];
      for (const item in moviesList) {
        if (moviesList[item].isQueued) {
          found.push(moviesList[item].movieDetails);
        }
      }
      if (found) {
        result = [...result, ...found];
      }
    }
    return result;
  }
}

export const dbFirebase = new FirebaseDB();
