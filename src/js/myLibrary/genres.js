import ServerRequest from '../serverRequest';

export let genres = [];

export async function initGenres() {
  const requestAPI = new ServerRequest();
  // Download genres
  try {
    genres = await requestAPI.getGenres();
  } catch (error) {}
}
