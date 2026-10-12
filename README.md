# OCE — sitio web

Sitio multipágina en HTML/CSS/JS puro, basado en el diseño de Figma "Web OCE":
https://www.figma.com/design/DmQGb8UMvLFYipne4uTzON/Web-OCE

## Estructura
- `index.html` — Home (frame "Web OCE")
- `css/` — `tokens.css` (colores, tipografías), `base.css`, `components.css` (nav/footer), `home.css`
- `js/main.js` — menú desplegable y móvil
- `assets/img`, `assets/icons` — imágenes y SVG exportados de Figma

## Páginas del diseño (pendientes salvo la Home)
| Frame de Figma | Archivo |
|---|---|
| Web OCE | `index.html` ✅ |
| Programas de trabajo USA | `programas-usa.html` |
| Pasantias en USA | `pasantias-usa.html` |
| Programas de trabajo Spain | `programas-spain.html` |
| Programas de trabajo ASIA (oculto en Figma) | `programas-asia.html` |
| WAT Croacia | `wat-croacia.html` |
| WAS Irlanda | `was-irlanda.html` |
| WAS Dubai | `was-dubai.html` |
| OCE Idiomas | `idiomas.html` |
| Gestion de VISA | `gestion-visa.html` |
| OCE Turismo | `turismo.html` |
| Beneficios | `beneficios.html` |
| Contacto | `contacto.html` |
| Nosotros | `nosotros.html` |

## Desarrollo
No requiere build: `python3 -m http.server` y abrir http://localhost:8000.
