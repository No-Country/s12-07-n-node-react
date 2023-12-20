import tmdbAxios from "../lib/tmdb-axios.js"
import { optionsHelper, transformImageUrl, genreSelector, providerSelector, transformImageUrlProviders } from "../utils/helpers.js"


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
export const filterByPlatformService = async (platform, page) => {
  if (providerSelector(platform.toUpperCase()) === 0) {
    throw new Error('Provider not available')
  }


  const movies = await tmdbAxios
    .request(optionsHelper({ url: 'https://api.themoviedb.org/3/discover/movie', provider: platform.toUpperCase(), page: page }))
    .then(res => transformImageUrl(res.data.results))
    .catch((er) => {
      return er
    })
  const series = await tmdbAxios
    .request(optionsHelper({ url: 'https://api.themoviedb.org/3/discover/tv', provider: platform.toUpperCase(), page: page }))
    .then(res => transformImageUrl(res.data.results))
    .catch((er) => {
      return er
    })

  return { movies: movies, series: series }
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
  const movies = await tmdbAxios
    .request(optionsHelper({ url: 'https://api.themoviedb.org/3/person/' + id + '/movie_credits' }))
    .then(res => res.data)
    .catch((er) => {
      return er
    })
  const series = await tmdbAxios
    .request(optionsHelper({ url: 'https://api.themoviedb.org/3/person/' + id + '/tv_credits' }))
    .then(res => res.data)
    .catch((er) => {
      return er
    })
  return { ...actor, movies, series }
}

export const detailService = async (media_type, id) => {

  const trailerUrl = (arg) => {
    if (arg.length === 0) return false
    if (arg[0].key === undefined) return 'No trailer'
    if (!arg[0].key) return 'No trailer'

    return 'https://www.youtube.com/watch?v=' + arg[0].key
  }
  if (media_type == 'tv') {

    const tvTrailer = await tmdbAxios
      .request(optionsHelper({ credits: 'credits', url: `https://api.themoviedb.org/3/tv/${id}/videos`, language: 'en-EN' }))
      .then(res => res.data.results
        .filter(el => el.type === 'Trailer' || 'Teaser'))
      .catch((er) => {
        return { error: er.message, isError: true }
      })

    const tvDetail = await tmdbAxios
      .request(optionsHelper({ credits: 'credits', url: 'https://api.themoviedb.org/3/tv/' + id }))
      .then(res => transformImageUrl([res.data]))
      .catch((er) => {
        return { error: er.message, isError: true }
      })

    const platformDetail = await tmdbAxios
      .request(optionsHelper({credits:'credits', url: `https://api.themoviedb.org/3/tv/${id}/watch/providers`}))
      .then(
        res => {
          if (res.data.results && res.data.results.PE) {
            const providersArray = res.data.results.PE.flatrate || res.data.results.PE.rent || res.data.results.PE.buy || [];
            const transformedProviders = transformImageUrlProviders(providersArray);
            return transformedProviders;
          } else {
            throw new Error('No existen datos de proveedores para este contenido en tu región');
          }
        })
      .catch((er) => {
        return { error: er.message, isError: true}
      })


    return { ...tvDetail, ProvidersDetails: {...platformDetail}, Trailer: trailerUrl(tvTrailer) }

  }


  if (media_type === 'movie') {
    const movieTrailer = await tmdbAxios
      .request(optionsHelper({ url: `https://api.themoviedb.org/3/movie/${id}/videos`, language: 'en-EN' }))
      .then(res => res.data.results
        .filter(el => el.type === 'Trailer' || 'Teaser'))
      .catch((er) => {
        return er
      })
    const movieDetail = await tmdbAxios 
      .request(optionsHelper({ credits: 'credits', url: 'https://api.themoviedb.org/3/movie/' + id })) //te manda de todas las regiones
      .then(res => transformImageUrl([res.data]))
      .catch((er) => {
        return er
      })
    
    const platformDetail = await tmdbAxios
      .request(optionsHelper({credits:'credits', url: `https://api.themoviedb.org/3/movie/${id}/watch/providers`}))
      .then(
        res => {
          if (res.data.results && res.data.results.PE) {
            const providersArray = res.data.results.PE.flatrate || res.data.results.PE.rent || res.data.results.PE.buy || [];
            const transformedProviders = transformImageUrlProviders(providersArray);
            return transformedProviders;
          } else {
            throw new Error('No existen datos de proveedores para este contenido en tu región');
          }
        })
      .catch((er) => {
        return { error: er.message, isError: true}
      })
    return { ...movieDetail, ProvidersDetails: {...platformDetail} ,Trailer: trailerUrl(movieTrailer) }

  }


}

