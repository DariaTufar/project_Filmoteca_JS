import { readDB, writeDB, removeDB } from './firebase';
import { writeDB } from './firebase';

export let dbFirebase;

class FirebaseDB {
  #cachedMovie;

  // =====================

  get cachedMovie() {
    return this.#cachedMovie;
  }

  // =====================

  async writeCachedMovie({ userId, movieDetails }) {
    const foundMovie = await this.getMovie({
      userId,
      movieId: movieDetails.id,
    });

    this.#cachedMovie = {
      userId,
      isWatched: false,
      isQueued: false,
      movieDetails,
    };
    if (foundMovie) {
      this.#cachedMovie.isQueued = foundMovie.isQueued;
      this.#cachedMovie.isWatched = foundMovie.isWatched;
    }
  }

  // const foundMovie = this.getMovie({ id: movieDetails.id });

  //   this.#cachedMovie = {
  //     id: String(movieDetails.id),
  //     isWatched: false,
  //     isQueued: false,
  //     movieDetails,
  //   };
  //   if (foundMovie) {
  //     this.#cachedMovie.isQueued = foundMovie.isQueued;
  //     this.#cachedMovie.isWatched = foundMovie.isWatched;
  //   }

  // =====================

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

  // =====================

  async removeMovie({ userId, movieId }) {
    const path = `${userId}/${movieId}`;
    await removeDB(path);
  }
  // =====================

  async getMovie({ userId, movieId }) {
    const path = `${userId}/${movieId}`;
    return await readDB(path);
  }

  // =====================

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

  // =====================
}

dbFirebase = new FirebaseDB();
