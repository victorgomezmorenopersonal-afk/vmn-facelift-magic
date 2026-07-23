
## Diagnóstico

Cada artículo ya existe con contenido propio en `src/lib/blog-posts.ts` y hay una ruta dinámica `src/routes/blog.$slug.tsx` que lo renderiza. Verificado en preview: al pedir `/blog/<cualquier-slug>` el HTML devuelto es siempre la portada del blog ("Blog de VMN Technology"), no el artículo.

Causa: por convención de TanStack Router, al existir a la vez `src/routes/blog.tsx` y `src/routes/blog.$slug.tsx`, `blog.tsx` se convierte en el **layout padre** de `/blog/$slug`. Como `blog.tsx` es una página completa (lista de artículos) y no incluye `<Outlet />`, el hijo `$slug` nunca se monta y el usuario ve la lista pulse el botón que pulse.

## Solución

1. **Renombrar** `src/routes/blog.tsx` → `src/routes/blog.index.tsx` (mismo contenido, mismo `createFileRoute("/blog")`). Con esto `/blog` deja de ser layout y `/blog/$slug` pasa a ser una ruta hermana independiente.
2. **Verificar** navegando a los 3 slugs que cada botón "Leer artículo" abre su artículo correcto (título, imagen y contenido únicos) y que la portada `/blog` sigue mostrando la lista.

Sin cambios en el diseño, contenidos ni resto de páginas.
