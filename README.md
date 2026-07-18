# Integrar para Crear

Sitio web personal de Lorena del Busto. Presenta su enfoque interdisciplinario, áreas de experiencia, metodología, proyectos y un asistente conversacional.

## Desarrollo local

Requisitos: Node.js 20 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Verificación

```bash
pnpm build
pnpm start
```

## Publicación en Vercel

1. Importa el repositorio de GitHub en Vercel.
2. Vercel detectará automáticamente Next.js.
3. No se requieren variables de entorno.
4. Selecciona **Deploy**.

## Tecnologías

- Next.js
- React
- TypeScript
- CSS

El asistente conversacional funciona en el navegador y no requiere claves de API.

## Formulario de contacto con Resend

Configura estas variables privadas en Vercel:

- `RESEND_API_KEY`: clave de API de Resend.
- `CONTACT_EMAIL`: dirección que recibirá las consultas.
- `RESEND_FROM`: remitente de un dominio verificado, por ejemplo `Web Lorena <contacto@tudominio.com>`. Es opcional durante las pruebas.
