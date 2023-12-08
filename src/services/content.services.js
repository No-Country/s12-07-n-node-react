import tmdbAxios from "../lib/tmdb-axios.js"
import { providerSelector, selectionMixer, transformImageUrl } from "../utils/helpers.js"

const getContentByPlatformService = async (provider) => {

  if (providerSelector(provider) === 0) {
    throw new Error('Provider not available')
  }

  // Esto hay que simplificarlo
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      include_video: 'true',
      language: 'es-ES',
      page: '1',
      sort_by: 'popularity.desc',
      watch_region: 'PE',
      with_watch_providers: providerSelector(provider)
    }
  }
  const options2 = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/tv',
    params: {
      include_video: 'true',
      language: 'es-ES',
      page: '1',
      sort_by: 'popularity.desc',
      watch_region: 'PE',
      with_watch_providers: providerSelector(provider)
    }
  }


  const movies = await tmdbAxios
    .request(options)
    .then(res => res.data.results.slice(0, 5))
    .catch((er) => {
      return er
    })
  const series = await tmdbAxios
    .request(options2)
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

export { getContentByPlatformService }
