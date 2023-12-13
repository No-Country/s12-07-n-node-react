import tmdbAxios from "../lib/tmdb-axios.js"
import { optionsHelper, providerSelector, genreSelector, sortByPopularity, transformImageUrl } from "../utils/helpers.js"

const getContentByPlatformService = async (provider) => {

  if (providerSelector(provider) === 0) {
    throw new Error('Provider not available')
  }


  const movies = await tmdbAxios
    .request(optionsHelper({ url: 'https://api.themoviedb.org/3/discover/movie', provider: provider }))
    .then(res => res.data.results.slice(0, 5))
    .catch((er) => {
      return er
    })
  const series = await tmdbAxios
    .request(optionsHelper({ url: 'https://api.themoviedb.org/3/discover/tv', provider: provider }))
    .then(res => res.data.results.slice(0, 5))
    .catch((er) => {
      return er
    })

  return transformImageUrl(
    sortByPopularity(
      [...movies, ...series]
    )
  )
}


const getUpcomingService = async () => {

  const series = await tmdbAxios
    .request(optionsHelper({ url: 'https://api.themoviedb.org/3/tv/airing_today' }))
    .then(res => res.data.results.slice(0, 5))
    .catch(function(error) {
      return error
    });

  const movies = await tmdbAxios
    .request(optionsHelper({ url: "https://api.themoviedb.org/3/movie/upcoming" }))
    .then(res => res.data.results.slice(0, 5))
    .catch(function(error) {
      return error
    });

  return transformImageUrl(
    sortByPopularity(
      [...movies, ...series]
    )
  )

}
const getContentByGenreService = async (genre) => {

  if (genreSelector(genre) === 0) {
    throw new Error("Genero no disponible")
  }



  const movies = await tmdbAxios
    .request(optionsHelper({ url: 'https://api.themoviedb.org/3/discover/movie', genre: genreSelector(genre).movie }))
    .then(res => res.data.results.slice(0, 5))
    .catch((er) => {
      return er
    })
  const series = await tmdbAxios
    .request(optionsHelper({ url: 'https://api.themoviedb.org/3/discover/tv', genre: genreSelector(genre).tv }))
    .then(res => res.data.results.slice(0, 5))
    .catch((er) => {
      return er
    })

  return transformImageUrl(
    sortByPopularity(
      [...movies, ...series]
    )
  )
}
const getActorsService = async () => {


  const actors = await tmdbAxios
    .request(optionsHelper({ url: 'https://api.themoviedb.org/3/trending/person/week' }))
    .then(res => res.data.results)
    .catch((er) => {
      return er
    })


  return transformImageUrl(sortByPopularity(actors), true)
}




export { getContentByPlatformService, getUpcomingService, getContentByGenreService, getActorsService }
