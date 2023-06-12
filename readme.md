# Movie App Tecsup

Este proyecto es una aplicación web que muestra información sobre películas y próximos estrenos. Utiliza la API de The Movie Database (TMDb) para obtener datos actualizados sobre películas y mostrarlos de manera interactiva,  Puedes acceder a la aplicación en [este enlace](https://648699acc8f2a60b6c2a1731--papaya-kulfi-ea3ddf.netlify.app/) .



## Características

- **Consumo de la API:** La aplicación utiliza la API de TMDb para obtener información sobre películas y próximos estrenos. Hace llamadas HTTP a la API y procesa los datos recibidos para mostrarlos en la interfaz de usuario.

- **Uso de fragment:** Para optimizar el rendimiento y mejorar la eficiencia, se utiliza el objeto `DocumentFragment` en JavaScript. Este fragmento de documento permite agregar y manipular elementos sin afectar directamente el DOM principal, lo que ayuda a evitar la reflow y repaint innecesarios.

- **Slider de próximos estrenos:** La sección de próximos estrenos presenta un slider interactivo de tarjetas de películas. Se implementa un mecanismo de desplazamiento horizontal utilizando el evento `scroll` en el contenedor del slider. Los botones de navegación previo y siguiente permiten desplazarse entre las tarjetas. Además, se ajusta automáticamente el espacio entre las tarjetas según el ancho del contenedor.

- **Diseño responsive:** La aplicación está diseñada para adaptarse a diferentes tamaños de pantalla. Se utiliza CSS media queries para aplicar estilos específicos en diferentes puntos de interrupción. Por ejemplo, en pantallas más pequeñas, se oculta el logotipo y el inicio de sesión en la barra de navegación, y se ajusta el diseño para una mejor legibilidad y experiencia de usuario.

## Tecnologías utilizadas

- HTML5: lenguaje de marcado utilizado para estructurar la página web.
- CSS3: lenguaje de estilos utilizado para diseñar y dar estilo a la interfaz de usuario, incluyendo la implementación del diseño responsive.
- JavaScript: lenguaje de programación utilizado para interactuar con la API de TMDb, manipular los datos recibidos y controlar el comportamiento interactivo de la aplicación.

## Instalación

1. Clona este repositorio en tu máquina local: 

