import tmdbAxios from "../lib/tmdb-axios.js"
import { optionsHelper, providerSelector, selectionMixer, transformImageUrl } from "../utils/helpers.js"

export const searchService = async (query, page) => {

  const content = await tmdbAxios
    .request(optionsHelper('https://api.themoviedb.org/3/search/multi', "no provider", page, query))
    .then(res => res.data.results)
    .catch((er) => {
      return er
    })

  return transformImageUrl(
    content
  )
}


export const detailService = async (id) => {

  const tvDetail = await tmdbAxios
    .request(optionsHelper('https://api.themoviedb.org/3/tv/' + id))
    .then(res => res.data)
    .catch((er) => {
      return er
    })

  const movieDetail = await tmdbAxios
    .request(optionsHelper('https://api.themoviedb.org/3/movie/' + id))
    .then(res => res.data)
    .catch((er) => {
      return er
    })


  return movieDetail || tvDetail



}
