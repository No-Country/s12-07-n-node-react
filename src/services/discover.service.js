import tmdbAxios from "../lib/tmdb-axios.js"
import { optionsHelper, transformImageUrl } from "../utils/helpers.js"

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
