# OCE — sitio web

Sitio multipágina en HTML/CSS/JS puro (sin frameworks ni build), basado en el diseño de Figma "Web OCE":
https://www.figma.com/design/DmQGb8UMvLFYipne4uTzON/Web-OCE

## Estructura
- `index.html` y una página `.html` por cada frame de Figma (ver tabla).
- `css/`
  - `tokens.css`: colores y tipografías.
  - `base.css`: estilos base.
  - `components.css`: nav y footer.
  - `hero.css`: hero compartido (curva, flecha y lema). Escala con `--k` = 1 px de diseño (1440 px).
  - `paginas.css`: componentes de las páginas internas (hero con foto, panel, botón, listas, anillos).
  - `home.css`: solo la Home.
  - Un `css/<pagina>.css` propio por página.
- `js/main.js`: menú desplegable y móvil.
- `assets/img`, `assets/icons`: imágenes y SVG exportados de Figma. Las fotos están optimizadas (JPG, hasta 2× el tamaño mostrado).

## Páginas del diseño
| Frame de Figma | Archivo | Estado |
|---|---|---|
| Web OCE | `index.html` | ✅ |
| Programas de trabajo USA | `programas-usa.html` | ✅ |
| Pasantias en USA | `pasantias-usa.html` | ✅ |
| Programas de trabajo Spain | `programas-spain.html` | ✅ |
| Programas de trabajo ASIA (oculto en Figma) | `programas-asia.html` | ✅ sin captura de referencia, revisar |
| WAT Croacia | `wat-croacia.html` | ✅ |
| WAS Irlanda | `was-irlanda.html` | ✅ |
| WAS Dubai | `was-dubai.html` | ✅ |
| OCE Idiomas | `idiomas.html` | ✅ |
| Gestion de VISA | `gestion-visa.html` | ✅ |
| OCE Turismo | `turismo.html` | ✅ |
| Beneficios | `beneficios.html` | ✅ |
| Contacto | `contacto.html` | ✅ formulario sin backend |
| Nosotros | `nosotros.html` | ✅ |

Las 14 páginas están maquetadas y se compararon contra Figma a 1440 px (posiciones dentro de 1 a 3 px). Tablet y móvil se midieron por geometría (sin desborde horizontal) y falta una revisión visual.

## Pendientes y dudas
**Falta programar o conectar**
- Contacto: el formulario no tiene backend (`<form action="#">`). Las listas de Departamento y Programa de interés las armamos nosotros y hay que validarlas.
- Testimonio de la Home: las flechas son solo visuales (hay un único testimonio). Spain no tiene carrusel.
- Redes sociales del footer, de Contacto y del testimonio: `href="#"` hasta tener las URLs.
- Botones de WhatsApp (Spain, Croacia): apuntan a `wa.me/595986612300`, armado con el teléfono del footer. Confirmar el número.
- Los botones de reserva e información llevan a `contacto.html`. En Beneficios quizá deban ir a otra página.

**Elementos del diseño vacíos, ocultos o dudosos**
- USA: tres tarjetas solo con borde, sin contenido. Se replicaron vacías.
- Gestión de VISA: frame oculto `129:749` sin replicar.
- Turismo: capas vacías `158:1694` y `169:1927`, frame vacío `174:2079`.
- Pasantías (`567:695`), Croacia (`Layer_1`) e Irlanda (`83:153`, anillo `85:208` fuera de página): elementos vacíos sin replicar.
- Nosotros: la galería trae 6 fotos y solo 3 caen dentro del frame.
- Spain: unos 604 px en blanco antes del footer (así mide el frame).
- Beneficios: "Condiciones y vigencia: pendientes de confirmación." parece un marcador de posición.
- Irlanda: las viñetas de "Qué incluye el programa" están ~27 px más arriba que el texto en Figma. Se alinearon con el texto, apartándonos de la captura.
- Asia: no hay captura de referencia (frame oculto). El anillo de la sección de programas está sobre la foto de Bali (en Croacia va detrás), y varios ítems de lista parecen dos fusionados.

**Calidad visual**
- Nav: Figma usa Gotham (de pago). Se usa Montserrat hasta contar con los `.woff2`.
- Fotos de origen de baja resolución, que Figma estira (heros de Spain, Irlanda, Gestión de VISA y Nosotros): se ven algo suaves.
- Footer: el diseño muestra el correo y las redes con mayúsculas ("Contacto@Oce.Com.Py"). Se dejó en minúsculas.
- Los colores de Idiomas, Irlanda y Dubai (azul claro, verde, naranja) viven en el CSS de cada página. Falta decidir si pasan a `tokens.css`.
- Textos con erratas del diseño ("tematicos", "desmostrable", "destino.Recomendamos"): se dejaron como en Figma.

## Desarrollo
No requiere build: `python3 -m http.server` y abrir http://localhost:8000.
