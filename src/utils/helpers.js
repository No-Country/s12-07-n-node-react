// funcion para selecionar proveedores comunes, esto se podria expandir a mas proveedores 
export function providerSelector(provider) {
  switch (provider) {
    case "HBOMAX":
      return 384
    case "DISNEY":
      return 337
    case "NETFLIX":
      return 8
    case "PRIME":
      return 119
    default:
      return 0
  }
}


export function genreSelector(genre) {
  switch (genre) {
    case "ROMANCE":
      return { "tv": 10766, "movie": 10749 }
    case "ACTION":
      return { "tv": 10759, "movie": 28 }
    case "HORROR":
      return { "tv": 9648, "movie": 27 }
    case "DRAMA":
      return { "tv": 18, "movie": 18 }
    default:
      return 0
  }
}
// Funcion para desordenar array de peliculas y series
export function selectionMixer(array) {
  // Función de comparación aleatoria
  function comparacionAleatoria() {
    return Math.random() - 0.5;
  }

  // Usar la función de comparación aleatoria con sort
  array.sort(comparacionAleatoria);

  return array;
}

export function sortByPopularity(arr) {
  // Utilizamos el método sort para ordenar el array
  // Compararemos los elementos usando la propiedad 'popularity'
  arr.sort((a, b) => b.popularity - a.popularity);
  return arr;
}

export function transformImageUrlProviders(array){
  return array.map((a) => {
    let temp3 = a.logo_path;
    return { ...a, logo_path: `https://image.tmdb.org/t/p/original/${temp3}` };
  });
}
// Funcion para generar urls usables para el front
export function transformImageUrl(array, actors) {

  if (actors === true) {
    const arr = array.map(function(el) {
      let temp3 = el.profile_path
      return {
        ...el, profile_path: el.profile_path = `https://image.tmdb.org/t/p/original/${temp3}`
      }
    })
    return arr

  }


  const arr = array.map(function(el) {
    let temp = el.poster_path
    let temp2 = el.backdrop_path
    return {
      ...el, poster_path: el.poster_path = `https://image.tmdb.org/t/p/original/${temp}`, backdrop_path: el.backdrop_path = `https://image.tmdb.org/t/p/original/${temp2}`
    }
  })

  return arr

}

export function transformImageUrlContentByActor(array){
  const cast = array.cast.map(function(el) {
    let temp = el.poster_path
    let temp2 = el.backdrop_path
    return {
      ...el, poster_path : `https://image.tmdb.org/t/p/original/${temp}`, backdrop_path : `https://image.tmdb.org/t/p/original/${temp2}`
    }
  })

  const crew = array.crew.map(function(el) {
    let temp = el.poster_path
    let temp2 = el.backdrop_path
    return {
      ...el, poster_path : `https://image.tmdb.org/t/p/original/${temp}`, backdrop_path : `https://image.tmdb.org/t/p/original/${temp2}`
    }
  })

  return {cast:cast,crew:crew}

}
export function transformImageUrlActors(array) {

  const arr = array.map(function(el) {
    let temp = el.profile_path
    return {
      ...el, profile_path: el.profile_path = `https://image.tmdb.org/t/p/original/${temp}`, backgrop_path: el.backdrop_path = `https://image.tmdb.org/t/p/original/${temp}`
    }
  })

  return arr
}

export function optionsHelper(options) {

  const { credits, url, page, query, sort, genre, provider, language = 'es-ES' } = options

  return {
    method: 'GET',
    url: url,
    params: {
      append_to_response: credits,
      include_video: 'true',
      language: language,
      page: page || 1,
      query: query,
      sort_by: sort || 'popularity.desc',
      watch_region: 'PE',
      with_genres: genre,
      with_watch_providers: providerSelector(provider) || ''
    }


  }
}



