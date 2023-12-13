# s12-07-n-node-react
Aplicacion web de seleccionado No Country, plataforma para status de Peliculas y series

## Tareas para backend

(RICHARD)
- [ ] Armar ruta, controlador y servicio para que la ruta /content, sin parametros, brinde peliculas y series en tendencia. ( se podria simplemente llamar a las tendencias desde la api )
- [X] Armar ruta, controlador y servicio para series y peliculas separado por genero
- [ ] Armar ruta, controlador y servicio para actores
- [X] Armar ruta, controlador y servicio para detalle de pelicula o serie, debe ser capaz de adeams brindar informacion sobre que plataformas estan emitiendo esta pelicula o serie( importante para el mvp de este proyecto)
- [X] Armar ruta, controlador y servicio para proximos estrenos.
- [X] Configurar ruta basica para que redirija a /api/v1
- [X] Configurar ruta /api/v1 para que muestre documentacion sobre nuestras rutas y sobre como funcionan



## Para otros sprints

- [ ] Armar ruta, controlador y servicio para calendario de peliculas
- [ ] Armar logica para notificaciones
- [ ] Armar logica para buscar preferencias en peliculas y series
- [X] Para busqueda de peliculas y series ( tambien actores)
- [X] Probar un implementar un motor de plantillas para mostrar documentacion de la api ( sugerencias : PUG, Handlebars), esto le sirve a los fronts y a la gente de QA. (GERMAN)


## Para autenticacion 
- [X] Agregar validaciones de campo para los controladores, de tal forma que si el usuario no ingresa un campo necesario directamente reciba una respuesta y se cancele la peticion

## Para mejorar
- [ ] Agregar codigos a respuestas para diferenciar tipos de errores o eventualidades.



