# Toledo Producciones — Landing

Landing estática, elegante y ligera para empresa de producción de eventos y alquiler de equipos en Bogotá.

## Características
- Paleta: dorado, negro y blanco.
- Hero con video/imagen de fondo.
- Secciones: Servicios, Portafolio, Clientes, Contacto, CTA.
- Formulario listo para Netlify (opcional) o para conectar con backend.
- Botón flotante de WhatsApp.

## Estructura
- `index.html` — página principal.
- `golden.html` — página del Paquete Golden.
- `silver.html` — página del Paquete Silver.
- `assets/css/styles.css` — estilos.
- `assets/js/main.js` — interacciones básicas.
- `assets/img/` — imágenes (agrega tu logo e imágenes reales).

## Cómo usar
1. Coloca imágenes reales en `assets/img/`:
   - `hero.mp4` o `hero.webm` (opcional). Si no usas video, elimina el tag `<video>` y usa un `hero-poster.jpg`.
   - `p1.jpg` a `p6.jpg` para el portafolio.
   - Logos de clientes `logo1.svg` ... `logo4.svg`.
   - Logo oficial `logo.svg` o `logo.png` (reemplaza el placeholder `TP`).
2. Abre `index.html` en el navegador.

### Páginas de paquetes
- Golden: `/golden.html`
- Silver: `/silver.html`
Si visitas `index.html?paquete=Golden` o `?paquete=Silver`, el formulario se prellena con ese paquete.

## Despliegue en Vercel
1. Crea el repo en GitHub/GitLab, sube el contenido de esta carpeta.
2. Entra a vercel.com, crea un nuevo proyecto e importa el repo.
3. Framework preset: "Other" (estático). Output directory: raíz (`/`).
4. Deploy. Vercel servirá `index.html` y `404.html` automáticamente.

Notas
- `vercel.json` añade headers de seguridad y caché para `assets/`.
- Si agregas SPA routing, considera un rewrite a `index.html`.

## Personalización rápida
- Teléfono WhatsApp: edita en `assets/js/main.js` la constante `phone`.
- Correo y teléfono del footer en `index.html`.
- Colores: variables CSS en `:root` dentro de `styles.css`.

## Siguiente
- Entregar logo para integrar versión SVG en el header y footer.
- Conectar formulario a tu CRM o servicio de correo (EmailJS, Netlify, backend propio).
- SEO: actualizar títulos/descripciones y agregar OpenGraph/OG imágenes.
