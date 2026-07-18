# AGENTS.md

## Propósito del proyecto

Este repositorio contiene la web personal de Lorena del Busto y su marca
“Integrar para Crear”.

La web debe posicionar a Lorena como una profesional capaz de conectar
estrategia, creatividad, negocio, personas, diseño y ejecución para convertir
desafíos complejos en soluciones aplicables.

## Principio rector

Toda decisión debe ayudar a responder:

> ¿Esto permite comprender cómo Lorena integra distintas perspectivas para
> crear soluciones con impacto?

Evitar elementos decorativos, textos o funcionalidades que no contribuyan a
este objetivo.

## Identidad visual

Utilizar exclusivamente esta paleta principal:

- Lila: `#efb9ee`
- Violeta: `#721165`
- Naranja: `#e76127`
- Magenta: `#cc2f98`
- Crema: `#fbf9e1`
- Azul noche: `#01013a`

### Reglas de color

- Las superficies principales deben utilizar los colores sólidos exactos.
- No usar degradados o transparencias que alteren perceptiblemente la paleta.
- Evitar `mix-blend-mode` sobre los colores principales.
- Mantener suficiente contraste y accesibilidad.
- Verificar especialmente la reproducción de colores en celular.

## Tipografía

- Raleway: títulos, navegación, cuerpo y elementos funcionales.
- Playwrite DK Loopet: palabras expresivas y detalles puntuales.
- Mantener los párrafos y descripciones en una escala homogénea.
- Evitar titulares excesivamente grandes.
- No usar la tipografía manuscrita en bloques largos.
- Priorizar legibilidad y aprovechamiento del espacio.

## Logo

El logo oficial está en `public/brand-logo.svg`.

- No redibujar ni modificar sus trazos.
- Puede cambiarse de color mediante CSS.
- Utilizarlo principalmente en navegación y footer.
- Mantener su proporción original.
- No estirarlo ni comprimirlo.
- No usarlo como favicon si pierde legibilidad.

## Dirección de diseño

La web debe sentirse editorial, contemporánea, estratégica, creativa,
elegante, cercana, humana y minimalista, pero con personalidad.

Usar formas, capas, líneas, intersecciones y puntos de conexión cuando ayuden
a explicar el concepto de integración. Las gráficas deben comunicar una idea;
no deben existir solo como decoración.

## Contenido y tono

Escribir en español claro, profesional y cercano.

- Transmitir seguridad sin pretensión.
- Mostrar criterio sin lenguaje académico innecesario.
- Evitar exageraciones y frases genéricas.
- Ser concreto y orientado a la acción.
- Usar preferentemente la primera persona cuando habla Lorena.

Evitar expresiones como:

> “Líder disruptiva que transforma organizaciones con soluciones de clase
> mundial”.

Preferir expresiones como:

> “Me interesa comprender qué hay detrás de cada desafío y conectar las
> perspectivas necesarias para diseñar una solución posible”.

## Artículos

- No presentar artículos ficticios como publicaciones reales.
- Los contenidos incompletos deben aparecer como “En preparación” o
  “Próximamente”.
- Cuando existan artículos reales, crear páginas individuales con título,
  introducción, fecha, categoría, cuerpo y contenidos relacionados.
- Los artículos deben reforzar las áreas de expertise de Lorena.

## Consultoría

La consultoría debe presentarse como una forma concreta de trabajar con
Lorena. Las modalidades actuales son:

1. Sesión estratégica.
2. Consultoría por proyecto.
3. Acompañamiento durante la implementación.

Los llamados a la acción deben dirigir al formulario de contacto.

## Formulario y correo

El formulario utiliza Resend y requiere:

- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `RESEND_FROM`, cuando corresponda

Reglas:

- Nunca incluir claves o secretos en el repositorio.
- Mantener validación del formulario y protección honeypot.
- No eliminar mensajes de éxito o error.
- Verificar el envío después de cualquier modificación relevante.

## Asistente conversacional

El asistente debe responder sobre enfoque profesional, consultoría, productos,
aprendizaje corporativo, pricing, innovación, proyectos, artículos y contacto.

No debe inventar experiencia, clientes, resultados o credenciales.

## Tecnología

- Next.js
- React
- TypeScript
- CSS
- pnpm
- Vercel
- Resend

Preservar la arquitectura existente. No reemplazar dependencias o estructuras
sin una razón concreta.

## Validación obligatoria

Antes de considerar terminado un cambio:

1. Ejecutar `pnpm run build`.
2. Ejecutar `pnpm run lint`.
3. Revisar que no existan errores de TypeScript.
4. Confirmar comportamiento responsive.
5. Verificar navegación y enlaces.
6. Verificar formulario y chatbot cuando hayan sido modificados.
7. Comprobar contraste, tamaños y espacios en celular.

## Git y publicación

- Repositorio: `https://github.com/lorenadelbusto/mine`
- Producción: `https://mine-flax-five.vercel.app`
- No publicar en Sites o Site GPT.
- La web se publica mediante GitHub y Vercel.
- No modificar secretos de Vercel sin autorización.
- Antes de publicar, revisar el alcance de los cambios.
- Crear commits descriptivos.
- No declarar que una versión está publicada hasta verificarla en producción.
- No ejecutar acciones destructivas de Git.

## Protección del trabajo existente

- Preservar cambios del usuario que no estén relacionados con la tarea.
- No eliminar secciones o funcionalidades sin autorización.
- No sustituir contenido real por texto genérico.
- No cambiar la paleta, el logo o las tipografías sin una instrucción explícita.
