export class MyLibraryDB {
  KEY = 'movies';

  // =====================

  addMovie({ id, isQueued, isWatched, movieDetails }) {
    // id is required
    if (!id) {
      return null;
    }

    // one of flags isWatched or isQueued is required
    if (isWatched === undefined && isQueued === undefined) {
      return null;
    }

    // flag isQueued is foreground
    if (isQueued !== undefined) {
      isWatched = !isQueued;
    } else {
      isQueued = !isWatched;
    }

    const movie = {
      id: String(id),
      isWatched,
      isQueued,
      movieDetails,
    };

    let moviesList = this.#getLibData();

    if (!moviesList) {
      moviesList = [];
    }

    const foundMovie = moviesList.find(
      movie => String(movie.id) === String(id)
    );
    if (!foundMovie) {
      // Movie not found
      if (!movieDetails) {
        return null;
      }
      moviesList.push(movie);
    } else {
      // Movie found
      foundMovie.isQueued = isQueued;
      foundMovie.isWatched = isWatched;
      if (movieDetails) {
        foundMovie.movieDetails = movieDetails;
      }
    }

    if (!this.#saveLibData(moviesList)) {
      return null;
    }
    return foundMovie;
  }

  // =====================

  removeMovie({ id }) {
    const moviesList = this.#getLibData();

    if (!moviesList) {
      return null;
    }

    const foundIndex = moviesList.findIndex(
      movie => String(movie.id) === String(id)
    );
    const removedMovie = moviesList.splice(foundIndex, 1);
    if (!this.#saveLibData(moviesList)) {
      return null;
    }
    return removedMovie;
  }

  // =====================

  getMovie({ id }) {
    const moviesList = this.#getLibData();

    if (!moviesList) {
      return null;
    }

    const found = moviesList.find(movie => String(movie.id) === String(id));

    return found ?? null;
  }

  // =====================

  getMovies({ isWatched, isQueued }) {
    let result = [];

    const moviesList = this.#getLibData();
    if (!moviesList) {
      return result;
    }

    if (isWatched === undefined && isQueued === undefined) {
      return moviesList;
    }

    if (isWatched) {
      const found = moviesList.filter(movie => movie.isWatched);
      if (found) {
        result = [...result, ...found];
      }
    }

    if (isQueued) {
      const found = moviesList.filter(movie => movie.isQueued);
      if (found) {
        result = [...result, ...found];
      }
    }

    // TODO: delete double id

    return result;
  }

  // =====================

  #getLibData() {
    let storage = localStorage.getItem(this.KEY);
    if (!storage) {
      return null;
    }
    try {
      storage = JSON.parse(storage);
      if (!Array.isArray(storage)) {
        return null;
      }
      return storage;
    } catch (error) {
      return null;
    }
  }

  // =====================

  #saveLibData(data) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(data));
      return true;
    } catch (error) {
      return false;
    }
  }
}
