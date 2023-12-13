import tmdbAxios from "../lib/tmdb-axios.js"
import { optionsHelper, transformImageUrl, genreSelector } from "../utils/helpers.js"


export const searchService = async (query, page) => {

  const content = await tmdbAxios
    .request(optionsHelper({ url: 'https://api.themoviedb.org/3/search/multi', page: page, query: query }))
    .then(res => res.data.results)
    .catch((er) => {
      return er
    })

  return transformImageUrl(
    content
  )
}

export const filterService = async (genre, page) => {

  if (genreSelector(genre) === 0) {
    throw new Error("Genero no disponible")
  }


  const movies = await tmdbAxios
    .request(optionsHelper({ url: 'https://api.themoviedb.org/3/discover/movie', genre: genreSelector(genre).movie, page: page }))
    .then(res => transformImageUrl(res.data.results))
    .catch((er) => {
      return er
    })
  const series = await tmdbAxios
    .request(optionsHelper({ url: 'https://api.themoviedb.org/3/discover/tv', genre: genreSelector(genre).tv, page: page }))
    .then(res => transformImageUrl(res.data.results))
    .catch((er) => {
      return er
    })

  return { movies: movies, series: series }
}

export const actorDetailService = async (id) => {


  const actor = await tmdbAxios
    .request(optionsHelper({ url: 'https://api.themoviedb.org/3/person/' + id }))
    .then(res => transformImageUrl([res.data], true))
    .catch((er) => {
      return er
    })

  return actor
}

