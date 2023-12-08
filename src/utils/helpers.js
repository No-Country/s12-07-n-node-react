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

// Funcion para generar urls usables para el front
export function transformImageUrl(array) {

  const arr = array.map(function(el) {
    let temp = el.poster_path
    return {
      ...el, poster_path: el.poster_path = `https://image.tmdb.org/t/p/original/${temp}`, backgrop_path: el.backdrop_path = `https://image.tmdb.org/t/p/original/${temp}`
    }
  })

  return arr

}

export function optionsHelper(url, sort = 'popularity.desc', provider) {
  return {
    method: 'GET',
    url: url,
    params: {
      include_video: 'true',
      language: 'es-ES',
      page: '1',
      sort_by: sort,
      watch_region: 'PE',
      with_watch_providers: providerSelector(provider)
    }


  }
}




