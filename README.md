# 🇪🇸 Camino al Español · B1–C1

Curso interactivo de español para estudiantes de ELE (español como lengua extranjera), del nivel **B1** al **C1**. Conserva los contenidos B1 de Camino al Español y añade rutas completas B2 y C1: teoría, tarjetas de vocabulario, ejercicios con vidas y XP, lectura con audio y expresión oral.

*An interactive Spanish course (B1 → C1) with grammar, vocabulary flashcards, gamified exercises, reading with audio and speaking practice. Interface in Spanish with English glosses.*

## ✨ Qué incluye

- **45 módulos completos**: 15 por nivel (8 de gramática + 7 de vocabulario).
- Los 45 módulos incluyen vocabulario y ejercicios adicionales para practicar cada tema.
- Cada módulo tiene 5 partes:
  - 📘 **Teoría** con tablas, ejemplos traducidos, trucos y errores frecuentes.
  - 🖼️ **Vocabulario**: tarjetas con imagen (emoji) que se giran y se escuchan.
  - 🎯 **Ejercicios** (5 vidas ❤️): elegir opción, escribir, ordenar la frase, ¿qué es? (imagen) y escuchar y elegir.
  - 📖 **Lectura** con audio, palabras clave subrayadas y preguntas de comprensión.
  - 🗣️ **Speaking**: tarjetas con preguntas para responder en voz alta (con reconocimiento de voz en Chrome/Edge).
- 🏆 **Examen de nivel** al final de B1, B2 y C1 (20 preguntas, aprobado con 70 %).
- ⭐ XP, 🔥 racha de días y 📊 página de progreso (con exportar/importar progreso).
- **Dos modos** que el alumno elige al entrar (y puede cambiar en ⚙️ Ajustes):
  - 🔓 **Todo abierto**: acceso libre a todo.
  - 🔒 **Desbloqueo progresivo**: cada módulo abre el siguiente (gramática y vocabulario avanzan por separado) y el examen de nivel abre el nivel siguiente.

## 📚 Contenidos

| Nivel | Gramática | Vocabulario |
|---|---|---|
| **B1** | Contraste de pasados · Pluscuamperfecto · Por y para · Futuro simple · Condicional · Imperativo · Presente de subjuntivo · Estilo indirecto | Medio ambiente · Tecnología e internet · Sentimientos y personalidad · Medios y noticias · Cultura hispana y fiestas · Frases hechas y coloquiales · Mundo laboral |
| **B2** | Contraste de subjuntivo · Condicionales · Relativas · Pasiva e impersonales · Conectores · Perífrasis · Nominalización · Discurso referido | Educación · Empleo · Ciencia · Sociedad · Ciudadanía · Salud · Cultura |
| **C1** | Correlación temporal · Hipótesis complejas · Concesión · Relativas complejas · Impersonalidad · Estilo indirecto · Modalidad · Cohesión formal | Ámbito académico · Instituciones · Economía · Medios · Sostenibilidad · Relaciones · Colocaciones |

## 🚀 Publicar en GitHub Pages

1. El proyecto se publica en [Curiousminds123/B1C1](https://github.com/Curiousminds123/B1C1).
2. Desde esta carpeta, sube el contenido con git:
   ```bash
   git init -b main
   git add .
   git commit -m "Publica Camino al Español B1-C1"
   git remote add origin https://github.com/Curiousminds123/B1C1.git
   git push -u origin main
   ```
   Si el repositorio ya está clonado, copia el contenido de esta carpeta a su raíz y ejecuta `git add .`, `git commit` y `git push`.
3. En el repositorio [Curiousminds123/B1C1](https://github.com/Curiousminds123/B1C1): **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. Cuando GitHub Pages esté activado, la app estará en `https://Curiousminds123.github.io/B1C1/`.

No necesita instalación ni compilación. También funciona abriendo `index.html` directamente en el navegador.

### Fijar el modo para tus alumnos

Añade un parámetro al enlace que compartes:

- `https://Curiousminds123.github.io/B1C1/?modo=abierto`
- `https://Curiousminds123.github.io/B1C1/?modo=progresivo`

O cambia `DEFAULT_MODE` al principio de `js/app.js` (`"open"` o `"prog"`; `null` = preguntar al alumno).

## 🗂️ Estructura

```
B1C1ESPAÑOLAPP/
├── index.html            # página principal
├── css/styles.css        # estilos
├── js/app.js             # lógica de la app (modos, ejercicios, progreso, voz)
├── data/                 # CONTENIDOS (editables)
│   ├── levels.js         # descripción de los niveles B1, B2 y C1
│   ├── b1-gramatica.js   b1-vocabulario.js
│   ├── b2-gramatica.js   b2-vocabulario.js
│   ├── c1-gramatica.js   c1-vocabulario.js
│   └── advanced-practice.js # ampliaciones de vocabulario y ejercicios B2-C1
├── assets/img/           # logo, mascota, insignias y trofeo (SVG propios)
├── .nojekyll             # GitHub Pages sirve los archivos tal cual
└── README.md
```

## ✏️ Editar o añadir contenidos

Cada módulo es un objeto dentro de `data/*.js`:

```js
{
  id: "c1-subjuntivo", lvl: "C1", k: "g",      // k: "g" gramática · "v" vocabulario
  t: "Subjuntivo y correlación temporal", en: "Subjunctive and sequence of tenses", ic: "🎚️",
  th: `<div class="card">…teoría en HTML…</div>`,
  voc: [["🎭", "la valoración", "assessment"]],  // tarjetas: [imagen, español, inglés]
  ex: [
    { q: "Me alegra que por fin ___ una solución.", o: ["encontramos", "hayamos encontrado"], a: 1, t: "I'm glad that we found a solution." }, // elegir
    { q: "Me alegra que ___ venir. (poder)", a: ["hayas podido"], t: "I'm glad you were able to come." }, // escribir
    { w: "Quisiera saber si sería posible aplazar la entrevista.", t: "I would like to know whether it would be possible to postpone the interview." } // ordenar
  ],
  tx: { ti: "Título", b: `Texto con <u>palabras clave</u>` },
  q: [["¿Pregunta?", ["A", "B", "C"], 1]],      // índice de la respuesta correcta
  sp: ["Pregunta para hablar…"]
}
```

Para añadir un módulo, cópialo en el archivo de su nivel y cambia el `id`. Aparecerá automáticamente en el menú, en el camino y en el examen.

## 🔊 Audio y micrófono

- La voz usa la síntesis del navegador (Web Speech API). Si no se oye, instala una voz en español en el sistema.
- El reconocimiento de voz del speaking funciona en Chrome y Edge (pide permiso de micrófono). En otros navegadores, el alumno responde en voz alta sin transcripción.

## 🔐 Privacidad

No hay servidor ni registro. El progreso se guarda solo en el navegador del alumno (`localStorage`).

## Créditos

Contenidos y gráficos originales creados para este proyecto. Las imágenes son emoji del sistema y SVG propios, sin imágenes externas con derechos. Fuente: [Nunito](https://fonts.google.com/specimen/Nunito) (Google Fonts, licencia OFL).
