import tmdbAxios from "../lib/tmdb-axios.js"
import { optionsHelper, providerSelector, selectionMixer, transformImageUrl } from "../utils/helpers.js"

const getContentByPlatformService = async (provider) => {

  if (providerSelector(provider) === 0) {
    throw new Error('Provider not available')
  }

  const movies = await tmdbAxios
    .request(optionsHelper('https://api.themoviedb.org/3/discover/movie', 'popularity.desc', provider))
    .then(res => res.data.results.slice(0, 5))
    .catch((er) => {
      return er
    })
    .request(optionsHelper('https://api.themoviedb.org/3/discover/tv', 'popularity.desc', provider))
  const series = await tmdbAxios
    .then(res => res.data.results.slice(0, 5))
    .catch((er) => {
      return er
    })



  return transformImageUrl(
    selectionMixer(
      [...movies, ...series]
    )
  )


}


const getUpcomingService = async () => {

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/airing_today',
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTY0NDI5NTYwMWM4ZWJjYTkyZjMwY2MyNjc5ZDVkNSIsInN1YiI6IjY1Njk0OTVmZDA0ZDFhMDE1MDVlYjJlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w9JcEv-MTGYmSKpuiTStir5Ow3pWCtBuTM91R_8T7zc'
    }
  };

  const series = await tmdbAxios
    .request(options)
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.error(error);
    });



}

export { getContentByPlatformService }
