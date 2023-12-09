import tmdbAxios from "../lib/tmdb-axios.js"
import { optionsHelper, providerSelector, selectionMixer, transformImageUrl } from "../utils/helpers.js"

const getContentByPlatformService = async (provider) => {

  if (providerSelector(provider) === 0) {
    throw new Error('Provider not available')
  }

  const movies = await tmdbAxios
    .request(optionsHelper('https://api.themoviedb.org/3/discover/movie', provider, 'popularity.desc',))
    .then(res => res.data.results.slice(0, 5))
    .catch((er) => {
      return er
    })
    .request(optionsHelper('https://api.themoviedb.org/3/discover/tv', provider, 'popularity.desc'))
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



  const series = await tmdbAxios
    .request(optionsHelper('https://api.themoviedb.org/3/tv/airing_today'))
    .then(res => res.data.results.slice(0, 5))
    .catch(function(error) {
      return error
    });

  const movies = await tmdbAxios
    .request(optionsHelper('https://api.themoviedb.org/3/movie/upcoming'))
    .then(res => res.data.results.slice(0, 5))
    .catch(function(error) {
      return error
    });

  return transformImageUrl(
    selectionMixer(
      [...movies, ...series]
    )
  )




}

export { getContentByPlatformService, getUpcomingService }
