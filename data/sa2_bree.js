/**
 * sa2_bree.js
 * Contenidos de la Situación de Aprendizaje 2 — Bree
 * SA 2: Texto narrativo | Sustantivos y adjetivos | Signos de puntuación
 *
 * ⭐ ESTE ARCHIVO ES EL QUE DEBES EDITAR para cambiar preguntas y textos
 */

const SA2_DATA = {
  saKey: 'sa2',
  dungeonName: 'Bree',
  dungeonEmoji: '🏙️',

  // ─── INTRODUCCIÓN DE GANDALF ──────────────────────────────────────────────
  gandalf_intro: [
    "¡Bienvenido a Bree, viajero! Esta ciudad de Hombres y Hobbits es un cruce de caminos vital.",
    "En las posadas y calles de Bree aprenderás los secretos del TEXTO NARRATIVO.",
    "También dominarás los SUSTANTIVOS Y ADJETIVOS, y aprenderás a usar correctamente los SIGNOS DE PUNTUACIÓN.",
    "Busca al posadero Mantecona en La Pony Pisador, al herrero en su fragua, y al escribano en el ayuntamiento.",
    "¡Demuestra tu dominio del lenguaje y las puertas del camino al este se abrirán!"
  ],

  // ─── SALA 1: TIPOLOGÍA TEXTUAL — EL TEXTO NARRATIVO ──────────────────────
  sala_narrativo: {
    nombre: "La Pony Pisador",
    descripcion: "La famosa posada donde los viajeros intercambian historias y aventuras...",
    gandalf_entrada: [
      "¡La Pony Pisador! Aquí los viajeros se sientan a narrar sus aventuras.",
      "El TEXTO NARRATIVO cuenta hechos reales o ficticios que ocurren en un tiempo y espacio determinados.",
      "Todo texto narrativo tiene NARRADOR, PERSONAJES, ESPACIO, TIEMPO y ARGUMENTO.",
      "El argumento sigue una estructura: planteamiento, nudo y desenlace.",
      "Lee el pergamino del posadero Mantecona y responde sus enigmas."
    ],

    pergamino_teoria: {
      id: 'sa2_pergamino_narrativo',
      titulo: '📜 El Arte de Narrar',
      texto: `
        <strong>¿Qué es un texto narrativo?</strong><br><br>
        El <em>texto narrativo</em> cuenta hechos (reales o ficticios) protagonizados por personajes
        en un tiempo y espacio determinados.<br><br>
        <strong>Elementos:</strong><br>
        • <strong>Narrador:</strong> quien cuenta la historia (1ª persona: yo; 3ª persona: él/ella).<br>
        • <strong>Personajes:</strong> protagonistas, secundarios y antagonistas.<br>
        • <strong>Espacio:</strong> lugar donde ocurren los hechos.<br>
        • <strong>Tiempo:</strong> cuándo sucede la historia.<br><br>
        <strong>Estructura:</strong><br>
        • <strong>Planteamiento:</strong> presenta personajes y situación inicial.<br>
        • <strong>Nudo:</strong> conflicto o problema central.<br>
        • <strong>Desenlace:</strong> resolución del conflicto.
      `
    },

    puzzles: [
      {
        id: 'sa2_nar_p1',
        title: '🍺 Enigma del Posadero — Estructura',
        question: '¿Qué parte del texto narrativo presenta a los personajes y la situación inicial antes de que surja el conflicto?',
        type: 'multiple',
        saKey: 'sa2',
        options: [
          { text: 'A) El nudo, donde ocurre la acción principal', correct: false },
          { text: 'B) El desenlace, con el final de la historia', correct: false },
          { text: 'C) El planteamiento, que introduce la situación', correct: true },
          { text: 'D) El epílogo, que resume la moraleja', correct: false }
        ],
        feedback_correct: '¡Correcto! El planteamiento es el inicio donde presentamos el mundo y los personajes.',
        feedback_wrong: '¿En qué parte de una historia se presentan los personajes y el escenario por primera vez?'
      },
      {
        id: 'sa2_nar_p2',
        title: '🍺 Enigma del Posadero — Narrador',
        question: 'En el fragmento: <em>"Yo, Frodo Bolsón, tomé el anillo y emprendí el camino"</em>, ¿qué tipo de narrador encontramos?',
        type: 'multiple',
        saKey: 'sa2',
        options: [
          { text: 'A) Narrador en 3ª persona omnisciente', correct: false },
          { text: 'B) Narrador en 1ª persona protagonista', correct: true },
          { text: 'C) Narrador en 2ª persona', correct: false },
          { text: 'D) Narrador externo observador', correct: false }
        ],
        feedback_correct: '¡Muy bien! El narrador usa "yo" y es el propio protagonista quien cuenta la historia.',
        feedback_wrong: 'Fíjate en el pronombre que usa el narrador: "Yo, Frodo...". ¿Qué persona gramatical es?'
      }
    ]
  },

  // ─── SALA 2: GRAMÁTICA — SUSTANTIVOS Y ADJETIVOS ─────────────────────────
  sala_sustantivos: {
    nombre: "La Fragua de Bree",
    descripcion: "El herrero de Bree forja palabras tan fuertes como el acero...",
    gandalf_entrada: [
      "¡La Fragua de Bree! Aquí el herrero trabaja con las palabras más sólidas del idioma.",
      "Los SUSTANTIVOS son palabras que nombran personas, animales, cosas o ideas.",
      "Pueden ser comunes (hobbit, espada) o propios (Frodo, Moria), concretos o abstractos.",
      "Los ADJETIVOS acompañan al sustantivo y expresan sus cualidades: valiente, oscuro, antiguo.",
      "¡Demuestra que conoces estas categorías gramaticales!"
    ],

    pergamino_teoria: {
      id: 'sa2_pergamino_sustantivos',
      titulo: '⚒️ Sustantivos y Adjetivos',
      texto: `
        <strong>Los Sustantivos</strong><br><br>
        Los <em>sustantivos</em> nombran personas, animales, cosas o ideas.<br>
        • <strong>Propios:</strong> nombres específicos con mayúscula (Aragorn, Rivendell).<br>
        • <strong>Comunes:</strong> nombres genéricos (hobbit, anillo, mazmorra).<br>
        • <strong>Abstractos:</strong> nombran ideas o sentimientos (valentía, amistad).<br>
        • <strong>Concretos:</strong> nombran seres o cosas tangibles (espada, árbol).<br><br>
        <strong>Los Adjetivos</strong><br><br>
        Los <em>adjetivos</em> modifican al sustantivo expresando cualidades.<br>
        • Concuerdan en gìnero y número: <em>hobbit valiente / hobbits valientes</em>.<br>
        • Pueden ir antes o después del sustantivo.<br>
        • Ejemplo: "el <strong>oscuro</strong> señor" — "oscuro" modifica a "señor".
      `
    },

    puzzles: [
      {
        id: 'sa2_sus_p1',
        title: '⚒️ Enigma del Herrero — Sustantivos',
        question: '¿Cuál de estas palabras es un sustantivo <strong>abstracto</strong>?',
        type: 'multiple',
        saKey: 'sa2',
        options: [
          { text: 'A) espada', correct: false },
          { text: 'B) Gondor', correct: false },
          { text: 'C) valentía', correct: true },
          { text: 'D) oscuro', correct: false }
        ],
        feedback_correct: '¡Exacto! "Valentía" es abstracto porque no se puede tocar ni ver directamente.',
        feedback_wrong: 'Los abstractos nombran ideas o sentimientos que no son tangibles. ¿Cuál no puedes tocar?'
      },
      {
        id: 'sa2_sus_p2',
        title: '⚒️ Enigma del Herrero — Adjetivos',
        question: 'En la frase "El <u>poderoso</u> mago recorrió los <u>antiguos</u> caminos", ¿qué función cumplen las palabras subrayadas?',
        type: 'multiple',
        saKey: 'sa2',
        options: [
          { text: 'A) Son sustantivos que nombran personas', correct: false },
          { text: 'B) Son verbos que indican acción', correct: false },
          { text: 'C) Son adjetivos que modifican a los sustantivos', correct: true },
          { text: 'D) Son adverbios que modifican al verbo', correct: false }
        ],
        feedback_correct: '¡Perfecto! "Poderoso" modifica a "mago" y "antiguos" modifica a "caminos".',
        feedback_wrong: '¿Qué información aportan "poderoso" y "antiguos" sobre los sustantivos que acompañan?'
      },
      {
        id: 'sa2_sus_p3',
        title: '⚒️ Enigma del Herrero — Tipos',
        question: '¿Cuál de estas opciones contiene un sustantivo <strong>propio</strong>?',
        type: 'multiple',
        saKey: 'sa2',
        options: [
          { text: 'A) El anillo brillaba con luz oscura', correct: false },
          { text: 'B) El hobbit caminaba despacio', correct: false },
          { text: 'C) Frodo llevaba el anillo al Monte del Destino', correct: true },
          { text: 'D) La espada estaba rota', correct: false }
        ],
        feedback_correct: '¡Correcto! "Frodo" y "Monte del Destino" son sustantivos propios (nombres específicos).',
        feedback_wrong: 'Los sustantivos propios son nombres específicos que se escriben con mayúscula. ¿En qué frase aparecen?'
      }
    ]
  },

  // ─── SALA 3: ORTOGRAFÍA — SIGNOS DE PUNTUACIÓN ───────────────────────────
  sala_puntuacion: {
    nombre: "El Ayuntamiento de Bree",
    descripcion: "El escribano del ayuntamiento guarda los secretos de la puntuación correcta...",
    gandalf_entrada: [
      "¡El Ayuntamiento de Bree! El escribano Randolph conoce el poder de los signos de puntuación.",
      "El PUNTO (.) marca el final de una oración o idea completa.",
      "La COMA (,) separa elementos en una lista, o frases dentro de una oración.",
      "El PUNTO Y COMA (;) separa partes de una oración con cierta independencia.",
      "Los DOS PUNTOS (:) introducen enumeraciones, citas o explicaciones.",
      "¡Demuestra que sabes puntuar correctamente!"
    ],

    pergamino_teoria: {
      id: 'sa2_pergamino_puntuacion',
      titulo: '📋 Los Signos de Puntuación',
      texto: `
        <strong>Principales signos de puntuación</strong><br><br>
        • <strong>Punto (.)</strong>: finaliza una oración. Punto y seguido (misma idea),
          punto y aparte (párrafo nuevo), punto final (fin del texto).<br><br>
        • <strong>Coma (,)</strong>: separa elementos de una lista; separa el vocativo
          del resto; separa oraciones subordinadas.<br>
        Ej: <em>"Frodo, Sam y Pippin salieron juntos."</em><br><br>
        • <strong>Punto y coma (;)</strong>: pausa mayor que la coma.
          Separa partes largas de una oración.<br><br>
        • <strong>Dos puntos (:)</strong>: introducen enumeración, cita directa o
          explicación. <em>"Los compañeros eran: Frodo, Sam, Merry y Pippin."</em><br><br>
        • <strong>Puntos suspensivos (...)</strong>: indican pausa, duda o frase incompleta.
      `
    },

    puzzles: [
      {
        id: 'sa2_pun_p1',
        title: '📋 Enigma del Escribano — La Coma',
        question: '¿Cuál de estas oraciones usa la coma <strong>correctamente</strong>?',
        type: 'multiple',
        saKey: 'sa2',
        options: [
          { text: 'A) Frodo, Sam Merry y Pippin viajaron juntos.', correct: false },
          { text: 'B) Frodo Sam, Merry y Pippin viajaron juntos.', correct: false },
          { text: 'C) Frodo, Sam, Merry y Pippin viajaron juntos.', correct: true },
          { text: 'D) Frodo Sam Merry, y Pippin viajaron juntos.', correct: false }
        ],
        feedback_correct: '¡Exacto! En las enumeraciones se separan todos los elementos con coma, excepto el último que va con "y".',
        feedback_wrong: 'En una lista, cada elemento va separado por coma. Solo se omite la coma antes del último "y".'
      },
      {
        id: 'sa2_pun_p2',
        title: '📋 Enigma del Escribano — Los Dos Puntos',
        question: '¿Cuándo se usan los dos puntos (:)?',
        type: 'multiple',
        saKey: 'sa2',
        options: [
          { text: 'A) Para finalizar una oración completa', correct: false },
          { text: 'B) Para introducir una enumeración o cita directa', correct: true },
          { text: 'C) Para indicar una pausa leve entre ideas', correct: false },
          { text: 'D) Para señalar que la frase está incompleta', correct: false }
        ],
        feedback_correct: '¡Correcto! Los dos puntos anuncian lo que viene a continuación: lista, cita o explicación.',
        feedback_wrong: '¿Qué signo usarías antes de escribir una lista de cosas? Por ejemplo: "Los elfos de Rivendell son: ..."'
      }
    ]
  },

  // ─── PUERTA FINAL ─────────────────────────────────────────────────────────
  puerta_final: {
    gandalf_bloqueada: [
      "La puerta hacia la Cima de los Vientos permanece cerrada.",
      "Debes haber completado todos los enigmas de Bree para continuar.",
      "¡Vuelve a visitar a Mantecona, al herrero y al escribano!"
    ],
    gandalf_abierta: [
      "¡Extraordinario! Has demostrado dominio del texto narrativo, los sustantivos y la puntuación.",
      "Las puertas de Bree se abren ante ti... La Cima de los Vientos te aguarda.",
      "Recuerda anotar tu código para continuar en la próxima sesión.",
      "¡El camino continúa hacia las montañas!"
    ]
  }
};
