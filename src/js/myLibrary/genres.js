import ServerRequest from '../serverRequest';

export let genres = [];

export async function initGenres() {
  const requestAPI = new ServerRequest();
  // Download genres
  genres = await requestAPI.getGenres();
}
