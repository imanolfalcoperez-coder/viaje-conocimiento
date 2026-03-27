/**
 * sa8_tirith.js
 * Contenidos de la Situación de Aprendizaje 8 — Minas Tirith
 * SA 8: Texto poético | Figuras retóricas | Análisis sintáctico básico
 *
 * ⭐ ESTE ARCHIVO ES EL QUE DEBES EDITAR para cambiar preguntas y textos
 */

const SA8_DATA = {
  saKey: 'sa8',
  dungeonName: 'Minas Tirith',
  dungeonEmoji: '🏰',

  gandalf_intro: [
    "¡Minas Tirith, la Ciudad de los Guardianes! La gran fortaleza blanca de Gondor.",
    "En sus siete niveles aprenderás el sublime arte del TEXTO POÉTICO.",
    "También dominarás las FIGURAS RETÓRICAS y el ANÁLISIS SINTÁCTICO básico.",
    "Busca al poeta Faramir en la torre, a la rapsoda Éowyn en el hospital y al gramático Denethor en el Archivo Real.",
    "¡Que la belleza de las palabras sea tu escudo en la batalla final!"
  ],

  sala_poetico: {
    nombre: "La Torre de Faramir",
    descripcion: "Faramir, el príncipe poeta, guarda los secretos del texto poético en su torre...",
    gandalf_entrada: [
      "Faramir es el más culto de los hombres de Gondor y ama la poesía.",
      "El TEXTO POÉTICO expresa emociones, sentimientos e ideas mediante el lenguaje estético.",
      "Sus características: uso del verso (líneas con ritmo), rima, figuras retóricas y lenguaje connotativo.",
      "La poesía puede organizarse en estrofas (grupos de versos): pareados, tercetos, cuartetos...",
      "¡Lee el pergamino del poeta y responde sus enigmas!"
    ],

    pergamino_teoria: {
      id: 'sa8_pergamino_poetico',
      titulo: '📜 El Texto Poético',
      texto: `
        <strong>¿Qué es el texto poético?</strong><br><br>
        El <em>texto poético</em> utiliza el lenguaje de forma estética para expresar emociones,
        belleza o ideas de forma especial.<br><br>
        <strong>Elementos:</strong><br>
        • <strong>Verso:</strong> cada línea del poema. Tiene un ritmo determinado.<br>
        • <strong>Estrofa:</strong> agrupación de versos.<br>
          - 2 versos: pareado; 3: terceto; 4: cuarteto; 8: octava.<br>
        • <strong>Rima:</strong> repetición de sonidos al final de los versos.<br>
          - Rima consonante: coinciden vocales y consonantes (amor / calor).<br>
          - Rima asonante: solo coinciden las vocales (viento / sueño).<br>
        • <strong>Lenguaje connotativo:</strong> el significado va más allá del literal;
          usa metáforas, comparaciones, etc.
      `
    },

    puzzles: [
      {
        id: 'sa8_poe_p1',
        title: '🏰 Enigma de Faramir — Rima',
        question: 'En los versos "El anillo brillaba en la <u>oscuridad</u> / y Frodo caminaba hacia la <u>eternidad</u>", ¿qué tipo de rima hay?',
        type: 'multiple',
        saKey: 'sa8',
        options: [
          { text: 'A) Rima asonante, solo coinciden las vocales', correct: false },
          { text: 'B) Rima consonante, coinciden vocales y consonantes', correct: true },
          { text: 'C) Verso libre, sin rima', correct: false },
          { text: 'D) Rima interna, dentro del verso', correct: false }
        ],
        feedback_correct: '¡Correcto! "oscuridad" y "eternidad" comparten la terminación -idad (vocales y consonantes).',
        feedback_wrong: 'Compara los finales de los dos versos: oscuri<em>dad</em> / eterni<em>dad</em>. ¿Coinciden solo las vocales o también las consonantes?'
      },
      {
        id: 'sa8_poe_p2',
        title: '🏰 Enigma de Faramir — Estrofas',
        question: 'Un poema compuesto por grupos de <strong>4 versos</strong> se llama...',
        type: 'multiple',
        saKey: 'sa8',
        options: [
          { text: 'A) Pareado', correct: false },
          { text: 'B) Terceto', correct: false },
          { text: 'C) Cuarteto', correct: true },
          { text: 'D) Octava', correct: false }
        ],
        feedback_correct: '¡Perfecto! Cuarteto = 4 versos. Pareado = 2, terceto = 3, octava = 8.',
        feedback_wrong: 'Recuerda: par = 2, terceto = 3, cuarteto = 4 (como los cuartos de una partida). ¿Cuál es el de 4?'
      }
    ]
  },

  sala_figuras: {
    nombre: "El Hospital de Éowyn",
    descripcion: "Éowyn cura las heridas del lenguaje y conoce todas las figuras retóricas...",
    gandalf_entrada: [
      "Éowyn ha curado muchos cuerpos, y también conoce las herramientas que dan vida al lenguaje.",
      "Las FIGURAS RETÓRICAS son recursos expresivos que hacen el lenguaje más bello y efectivo.",
      "La METÁFORA identifica dos elementos por su semejanza: 'La luna es una moneda de plata'.",
      "La COMPARACIÓN o SÍMIL compara dos elementos con 'como': 'sus ojos brillaban como estrellas'.",
      "La PERSONIFICACIÓN atribuye cualidades humanas a seres o cosas: 'El viento susurraba secretos'.",
      "¡Aprende estas figuras y enriquecerás tu escritura!"
    ],

    pergamino_teoria: {
      id: 'sa8_pergamino_figuras',
      titulo: '🗡️ Figuras Retóricas',
      texto: `
        <strong>Las principales figuras retóricas:</strong><br><br>
        • <strong>Metáfora:</strong> identifica un elemento con otro por semejanza, sin "como".<br>
          Ej.: "Sus dientes eran perlas blancas."<br><br>
        • <strong>Comparación (Símil):</strong> compara dos elementos con "como" o "parece".<br>
          Ej.: "Sus dientes eran blancos como perlas."<br><br>
        • <strong>Personificación (Prosopopeya):</strong> atribuye cualidades humanas a seres inanimados.<br>
          Ej.: "El Anillo le susurraba promesas."<br><br>
        • <strong>Hipérbole:</strong> exageración con fines expresivos.<br>
          Ej.: "Tengo un hambre que me comería un buey entero."<br><br>
        • <strong>Anáfora:</strong> repetición de una o más palabras al inicio de versos/frases consecutivos.<br>
          Ej.: "Uno para gobernarlos a todos. Uno para encontrarlos."
      `
    },

    puzzles: [
      {
        id: 'sa8_fig_p1',
        title: '🗡️ Enigma de Éowyn — Figuras',
        question: '"El Anillo le <u>susurraba</u> tentaciones al oído." ¿Qué figura retórica se usa?',
        type: 'multiple',
        saKey: 'sa8',
        options: [
          { text: 'A) Hipérbole, porque es una exageración', correct: false },
          { text: 'B) Metáfora, porque identifica el anillo con un ser humano', correct: false },
          { text: 'C) Personificación, porque el Anillo realiza una acción humana', correct: true },
          { text: 'D) Comparación, porque usa "como"', correct: false }
        ],
        feedback_correct: '¡Exacto! Susurrar es una acción humana que se atribuye al Anillo (ser inanimado).',
        feedback_wrong: '¿Puede un anillo "susurrar" realmente? Está recibiendo una capacidad humana. ¿Qué figura es esa?'
      },
      {
        id: 'sa8_fig_p2',
        title: '🗡️ Enigma de Éowyn — Metáfora vs. Símil',
        question: '¿Cuál de estas frases contiene una <strong>metáfora</strong> (no un símil)?',
        type: 'multiple',
        saKey: 'sa8',
        options: [
          { text: 'A) "Sus ojos brillaban como el fuego"', correct: false },
          { text: 'B) "Era tan alto como un árbol de Fangorn"', correct: false },
          { text: 'C) "Sus ojos eran dos brasas encendidas"', correct: true },
          { text: 'D) "Parecía un árbol al caminar"', correct: false }
        ],
        feedback_correct: '¡Perfecto! "Sus ojos eran brasas" identifica directamente sin usar "como".',
        feedback_wrong: 'La metáfora no usa "como" ni "parece": simplemente dice que A ES B. ¿Cuál lo hace?'
      },
      {
        id: 'sa8_fig_p3',
        title: '🗡️ Enigma de Éowyn — Hipérbole',
        question: '"He esperado mil años para que llegara este momento." ¿Qué figura retórica contiene esta frase?',
        type: 'multiple',
        saKey: 'sa8',
        options: [
          { text: 'A) Personificación, porque humaniza el tiempo', correct: false },
          { text: 'B) Anáfora, porque repite palabras', correct: false },
          { text: 'C) Hipérbole, porque exagera para enfatizar', correct: true },
          { text: 'D) Metáfora, porque identifica el tiempo con algo', correct: false }
        ],
        feedback_correct: '¡Correcto! No han pasado mil años, es una exageración para expresar la larga espera.',
        feedback_wrong: '¿Ha esperado literalmente mil años? No. Es una exageración para dar más fuerza. ¿Qué figura es esa?'
      }
    ]
  },

  sala_sintaxis: {
    nombre: "El Archivo Real de Denethor",
    descripcion: "El Senescal Denethor guarda los secretos del análisis sintáctico en el Archivo Real...",
    gandalf_entrada: [
      "Denethor conoce la estructura de cada oración como si fuera un plano de batalla.",
      "La SINTAXIS estudia cómo se organizan las palabras para formar oraciones con sentido.",
      "Toda oración tiene un SUJETO (quién realiza la acción) y un PREDICADO (qué hace o qué le ocurre).",
      "El NÚCLEO DEL SUJETO es el sustantivo principal. El NÚCLEO DEL PREDICADO es el verbo.",
      "¡Analiza las oraciones con la precisión de un general!"
    ],

    pergamino_teoria: {
      id: 'sa8_pergamino_sintaxis',
      titulo: '⚖️ Análisis Sintáctico Básico',
      texto: `
        <strong>La oración y sus partes:</strong><br><br>
        Toda oración se divide en <strong>Sujeto</strong> y <strong>Predicado</strong>.<br><br>
        • <strong>Sujeto:</strong> indica quién realiza la acción o de quién se habla.<br>
          - Núcleo del sujeto: sustantivo o pronombre principal.<br>
          Ej.: "<em>El valiente hobbit</em>" → núcleo: "hobbit".<br><br>
        • <strong>Predicado:</strong> lo que se dice del sujeto.<br>
          - Núcleo del predicado: el verbo.<br>
          Ej.: "<em>cruzó el puente velozmente</em>" → núcleo: "cruzó".<br><br>
        • <strong>Complemento directo (CD):</strong> recibe directamente la acción del verbo.
          Se puede sustituir por "lo/la/los/las".<br>
          Ej.: "Frodo llevaba <em>el anillo</em>" → CD: "el anillo" (lo llevaba).<br><br>
        • <strong>Complemento circunstancial (CC):</strong> indica circunstancias (lugar, tiempo, modo).
      `
    },

    puzzles: [
      {
        id: 'sa8_sin_p1',
        title: '⚖️ Enigma de Denethor — Sujeto',
        question: 'En "Los Nueve Nazgûl atacaron Minas Tirith al amanecer", ¿cuál es el <strong>sujeto</strong>?',
        type: 'multiple',
        saKey: 'sa8',
        options: [
          { text: 'A) "atacaron Minas Tirith"', correct: false },
          { text: 'B) "al amanecer"', correct: false },
          { text: 'C) "Los Nueve Nazgûl"', correct: true },
          { text: 'D) "Minas Tirith"', correct: false }
        ],
        feedback_correct: '¡Correcto! "Los Nueve Nazgûl" es el sujeto: son quienes realizan la acción de atacar.',
        feedback_wrong: 'El sujeto responde a "¿quién + verbo?". ¿Quién atacó?'
      },
      {
        id: 'sa8_sin_p2',
        title: '⚖️ Enigma de Denethor — Complemento Directo',
        question: 'En "Aragorn empuñó <u>la espada ancestral</u>", ¿có puedes comprobar que la parte subrayada es Complemento Directo?',
        type: 'multiple',
        saKey: 'sa8',
        options: [
          { text: 'A) Porque puede sustituirse por "le": Aragorn le empuñó', correct: false },
          { text: 'B) Porque puede sustituirse por "lo": Aragorn la empuñó', correct: true },
          { text: 'C) Porque indica el lugar de la acción', correct: false },
          { text: 'D) Porque responde a la pregunta ¿cuándo?', correct: false }
        ],
        feedback_correct: '¡Exacto! "La empuñó" → sustituimos por "la" (pronombre de CD). Aragorn la empuñó.',
        feedback_wrong: 'El CD se puede sustituir por lo/la/los/las. Intenta: "Aragorn ___ empuñó." ¿Qué pronombre va?'
      }
    ]
  },

  puerta_final: {
    gandalf_bloqueada: [
      "Las puertas de Minas Tirith están selladas.",
      "Debes completar todos los enigmas de la ciudad blanca.",
      "¡Visita a Faramir, a Éowyn y al Senescal Denethor!"
    ],
    gandalf_abierta: [
      "¡Magnífico! Has demostrado un dominio del lenguaje digno de los reyes de Gondor.",
      "El último paso te aguarda: el Monte del Destino.",
      "Anota bien tu código, pues el destino final está cerca.",
      "¡Un lúltimo esfuerzo, viajero, y la Tierra Media será libre!"
    ]
  }
};

