# s12-07-n-node-react
Aplicacion web de seleccionado No Country, plataforma para status de Peliculas y series

## Tareas para backend

(RICHARD)
- [X] Armar ruta, controlador y servicio para series y peliculas separado por genero
- [X] Armar ruta, controlador y servicio para actores
- [X] Armar ruta, controlador y servicio para detalle de pelicula o serie, debe ser capaz de adeams brindar informacion sobre que plataformas estan emitiendo esta pelicula o serie( importante para el mvp de este proyecto)
- [X] Armar ruta, controlador y servicio para proximos estrenos.
- [X] Configurar ruta basica para que redirija a /api/v1
- [X] Configurar ruta /api/v1 para que muestre documentacion sobre nuestras rutas y sobre como funcionan



## Para otros sprints

- [ ] Armar ruta, controlador y servicio para calendario de peliculas PRIORIDAD
- [ ] Armar ruta, controlador y servicio para obtener evaluaciones de criticos.
- [ ] Armar logica para notificaciones (probar con nodemailer, o enviar directamente al usuario) 
- [ ] Armar logica para buscar preferencias en peliculas y series
- [ ] Añadir endpoint para actualizar si una lista se puede compartir o no( ahora mismo todos pueden acceder a esa info con el id de usuario) PRIORIDAD
- [X] Para busqueda de peliculas y series ( tambien actores)
- [X] Probar un implementar un motor de plantillas para mostrar documentacion de la api ( sugerencias : PUG, Handlebars), esto le sirve a los fronts y a la gente de QA. (GERMAN)


## Para autenticacion 
- [X] Agregar validaciones de campo para los controladores, de tal forma que si el usuario no ingresa un campo necesario directamente reciba una respuesta y se cancele la peticion

## Para mejorar
- [ ] Agregar codigos a respuestas para diferenciar tipos de errores o eventualidades.
- [ ] Optimizar imagenes y peso de respuestas (comprimir) PRIORIDAD
- [ ] Agregar logica para obtener trailers en español, si no se encuentra, traer uno en ingles. PRIORIDAD



