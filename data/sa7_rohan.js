/**
 * sa7_rohan.js
 * Contenidos de la Situación de Aprendizaje 7 — Rohan
 * SA 7: Texto teatral / dialogado | Tiempos verbales del pasado | Tilde diacrítica
 *
 * ⭐ ESTE ARCHIVO ES EL QUE DEBES EDITAR para cambiar preguntas y textos
 */

const SA7_DATA = {
  saKey: 'sa7',
  dungeonName: 'Rohan',
  dungeonEmoji: '🐴',

  gandalf_intro: [
    "¡Las llanuras de Rohan! Tierra de los Rohirrim, los hombres del caballo.",
    "En las salas de Meduseld aprenderás el TEXTO TEATRAL Y DIALOGADO.",
    "También dominarás los TIEMPOS VERBALES DEL PASADO y la TILDE DIACRÍTICA.",
    "Busca al Rey Théoden en el salón dorado, al bardo Éomund en el establo y a la maestra Éowyn en los jardines.",
    "¡El galope del lenguaje te llevará lejos, jinete!"
  ],

  sala_teatral: {
    nombre: "El Salón Dorado de Meduseld",
    descripcion: "El Rey Théoden preside las grandes obras de teatro de Rohan...",
    gandalf_entrada: [
      "El salón de Meduseld ha sido escenario de grandes obras teatrales.",
      "El TEXTO TEATRAL está escrito para ser representado. Sus elementos son: diálogos, acotaciones y actos/escenas.",
      "Las ACOTACIONES son indicaciones del autor sobre cómo deben actuar los personajes o cómo es el escenario.",
      "El texto dramático tiene una estructura: planteamiento, conflicto (clímax) y desenlace.",
      "¡Lee el pergamino real y responde los enigmas del rey!"
    ],

    pergamino_teoria: {
      id: 'sa7_pergamino_teatral',
      titulo: '🎭 El Texto Teatral',
      texto: `
        <strong>¿Qué es el texto teatral?</strong><br><br>
        El <em>texto teatral</em> está escrito para ser <strong>representado</strong> en un escenario.
        A diferencia de la novela, no hay narrador: los personajes hablan directamente.<br><br>
        <strong>Elementos:</strong><br>
        • <strong>Diálogos:</strong> las intervenciones de los personajes, precedidas por su nombre.<br>
        • <strong>Acotaciones:</strong> instrucciones del autor entre paréntesis o corchetes:
          <em>(Entra Gandalf, apoyado en su bastón)</em>.<br>
        • <strong>Actos y escenas:</strong> divisiones de la obra (como los capítulos de un libro).<br><br>
        <strong>Estructura dramática:</strong><br>
        • <strong>Planteamiento:</strong> presentación del conflicto.<br>
        • <strong>Nudo/Clímax:</strong> punto de mayor tensión.<br>
        • <strong>Desenlace:</strong> resolución del conflicto.
      `
    },

    puzzles: [
      {
        id: 'sa7_tea_p1',
        title: '🎭 Enigma de Théoden — Acotaciones',
        question: 'En este fragmento: <em>FRODO: Ya no puedo más. (Cae de rodillas, agotado.) SAM: ¡Yo te llevo, señor Frodo!</em><br>¿Qué parte es una acotación?',
        type: 'multiple',
        saKey: 'sa7',
        options: [
          { text: 'A) "Ya no puedo más"', correct: false },
          { text: 'B) "¡Yo te llevo, señor Frodo!"', correct: false },
          { text: 'C) "(Cae de rodillas, agotado.)"', correct: true },
          { text: 'D) "FRODO:" y "SAM:"', correct: false }
        ],
        feedback_correct: '¡Correcto! Las acotaciones van entre paréntesis e indican acciones o estados.',
        feedback_wrong: 'Las acotaciones son las instrucciones del autor sobre lo que hacen los personajes. ¿Cuál va entre paréntesis?'
      },
      {
        id: 'sa7_tea_p2',
        title: '🎭 Enigma de Théoden — Texto Teatral',
        question: '¿Qué diferencia principal existe entre el texto teatral y el texto narrativo?',
        type: 'multiple',
        saKey: 'sa7',
        options: [
          { text: 'A) El teatral no tiene personajes', correct: false },
          { text: 'B) El teatral no tiene un narrador: los personajes hablan directamente', correct: true },
          { text: 'C) El narrativo nunca tiene diálogos', correct: false },
          { text: 'D) No existe diferencia significativa', correct: false }
        ],
        feedback_correct: '¡Exacto! En el teatro no hay narrador que cuente la historia; son los personajes quienes la desarrollan.',
        feedback_wrong: '¿Quién cuenta la historia en una novela? ¿Y en una obra de teatro?'
      }
    ]
  },

  sala_tiempos: {
    nombre: "El Establo del Bardo",
    descripcion: "El bardo Éomund canta las gestas del pasado conociendo todos los tiempos verbales...",
    gandalf_entrada: [
      "Éomund canta las historias pasadas de Rohan. Para narrar el pasado, hay tres tiempos fundamentales.",
      "El PRETÉRITO INDEFINIDO (o pasado simple) indica acciones pasadas y terminadas: Aragorn llegó a Minas Tirith.",
      "El PRETÉRITO IMPERFECTO indica acciones pasadas habituales o que duraban en el tiempo: Los Rohirrim cabalgaban cada día.",
      "El PRETÉRITO PERFECTO COMPUESTO indica acciones del pasado reciente o vinculadas al presente: He visto las llanuras.",
      "¡Aprende a usar estos tiempos correctamente!"
    ],

    pergamino_teoria: {
      id: 'sa7_pergamino_tiempos',
      titulo: '🐴 Tiempos del Pasado',
      texto: `
        <strong>Los tres tiempos principales del pasado:</strong><br><br>
        • <strong>Pretérito Indefinido</strong> (pasado simple):<br>
          Acción pasada y terminada en un momento concreto.<br>
          Ej.: "Aragorn <em>llegó</em> a Minas Tirith" (ocurrió y acabó).<br><br>
        • <strong>Pretérito Imperfecto:</strong><br>
          Acción pasada habitual, continua o que describe el pasado.<br>
          Ej.: "Los hobbits <em>vivían</em> en la Comarca y <em>comían</em> seis veces al día."<br><br>
        • <strong>Pretérito Perfecto Compuesto</strong> (he/has/ha + participio):<br>
          Acción del pasado reciente o que tiene relación con el presente.<br>
          Ej.: "Esta semana <em>he leído</em> el Rojo Libro de la Frontera Oeste."<br><br>
        <strong>Truco:</strong> el indefinido va con marcadores como "ayer, el año pasado";
        el perfecto con "hoy, esta semana, ya".
      `
    },

    puzzles: [
      {
        id: 'sa7_tie_p1',
        title: '🐴 Enigma del Bardo — Tiempos',
        question: '"Cuando era joven, Aragorn <u>viajaba</u> por toda la Tierra Media." El verbo subrayado está en...',
        type: 'multiple',
        saKey: 'sa7',
        options: [
          { text: 'A) Pretérito indefinido', correct: false },
          { text: 'B) Pretérito imperfecto', correct: true },
          { text: 'C) Pretérito perfecto compuesto', correct: false },
          { text: 'D) Futuro simple', correct: false }
        ],
        feedback_correct: '¡Correcto! "Viajaba" es imperfecto: acción pasada habitual durante su juventud.',
        feedback_wrong: '"Cuando era joven" indica una acción que se repetía o duraba en el tiempo. ¿Qué tiempo es ese?'
      },
      {
        id: 'sa7_tie_p2',
        title: '🐴 Enigma del Bardo — Indefinido vs. Perfecto',
        question: '¿En qué oración se usa correctamente el pretérito perfecto compuesto?',
        type: 'multiple',
        saKey: 'sa7',
        options: [
          { text: 'A) "Ayer he visto a Gandalf en la posada."', correct: false },
          { text: 'B) "Esta mañana he leído las noticias del frente."', correct: true },
          { text: 'C) "El año pasado he viajado a Rivendell."', correct: false },
          { text: 'D) "Hace cinco años he conocido a los Elfos."', correct: false }
        ],
        feedback_correct: '¡Exacto! "Esta mañana" es un marcador de pasado reciente, propio del perfecto compuesto.',
        feedback_wrong: 'El perfecto compuesto va con marcadores de pasado reciente (hoy, esta mañana, ya). ¿Cuál los tiene?'
      },
      {
        id: 'sa7_tie_p3',
        title: '🐴 Enigma del Bardo — Uso Correcto',
        question: '"Bilbo <u>escribió</u> el Rojo Libro en el año 3001 de la Tercera Edad." ¿Qué tiempo es el verbo subrayado?',
        type: 'multiple',
        saKey: 'sa7',
        options: [
          { text: 'A) Pretérito imperfecto, acción habitual del pasado', correct: false },
          { text: 'B) Pretérito perfecto compuesto (ha escrito)', correct: false },
          { text: 'C) Pretérito indefinido, acción pasada concluida', correct: true },
          { text: 'D) Presente histórico', correct: false }
        ],
        feedback_correct: '¡Perfecto! "Escribió" es indefinido: acción pasada, acabada, en un momento concreto (año 3001).',
        feedback_wrong: 'Se indica un año concreto del pasado, una acción ya terminada. ¿Qué tiempo expresa eso?'
      }
    ]
  },

  sala_tilde: {
    nombre: "Los Jardines de Éowyn",
    descripcion: "Éowyn cultiva las tildes diacríticas con la misma precisión que empuña una espada...",
    gandalf_entrada: [
      "Éowyn, la Dama de Rohan, domina la tilde diacrítica con maestría.",
      "La TILDE DIACRÍTICA diferencia palabras que se escriben igual pero tienen distinto significado.",
      "Ejemplos clave: él (pronombre) / el (artículo); tú (pronombre) / tu (posesivo); sí (afirmación/reflexivo) / si (condicional).",
      "También: más (cantidad) / mas (pero); té (infusión) / te (pronombre); mí (pronombre) / mi (posesivo o nota musical).",
      "¡Demuestra que sabes cuándo llevan tilde estas palabras!"
    ],

    pergamino_teoria: {
      id: 'sa7_pergamino_tilde',
      titulo: '⚔️ La Tilde Diacrítica',
      texto: `
        <strong>¿Qué es la tilde diacrítica?</strong><br><br>
        La <em>tilde diacrítica</em> diferencia palabras que se escriben igual
        pero tienen diferente función o significado.<br><br>
        <strong>Pares principales:</strong><br>
        • <strong>él</strong> (pronombre: <em>Él vino</em>) / <strong>el</strong> (artículo: <em>el anillo</em>).<br>
        • <strong>tú</strong> (pronombre: <em>tú decides</em>) / <strong>tu</strong> (posesivo: <em>tu espada</em>).<br>
        • <strong>mí</strong> (pronombre: <em>para mí</em>) / <strong>mi</strong> (posesivo: <em>mi espada</em>; nota: <em>un mi bemol</em>).<br>
        • <strong>sí</strong> (afirmación/reflexivo: <em>dijo que sí; lo hizo por sí mismo</em>)
          / <strong>si</strong> (condicional: <em>si quieres</em>; nota musical).<br>
        • <strong>más</strong> (cantidad: <em>quiero más</em>) / <strong>mas</strong> (pero: <em>quiso mas no pudo</em>).<br>
        • <strong>té</strong> (infusión: <em>un té caliente</em>) / <strong>te</strong> (pronombre: <em>te digo</em>).
      `
    },

    puzzles: [
      {
        id: 'sa7_til_p1',
        title: '⚔️ Enigma de Éowyn — Tilde Diacrítica',
        question: 'Elige la opción correcta: "__ llamó a la puerta y entregó __ espada."',
        type: 'multiple',
        saKey: 'sa7',
        options: [
          { text: 'A) El / su (artículo y posesivo)', correct: false },
          { text: 'B) Él / su (pronombre y posesivo)', correct: true },
          { text: 'C) El / tú (artículo y pronombre)', correct: false },
          { text: 'D) Él / tu (pronombre y posesivo sin tilde)', correct: false }
        ],
        feedback_correct: '¡Perfecto! "Él" (pronombre, sujeto que llama) y "su" (posesivo de tercera persona).',
        feedback_wrong: '"__ llamó": ¿quién llamó? Es el sujeto → pronombre. "__espada": ¿de quién es? → posesivo de 3ª persona.'
      },
      {
        id: 'sa7_til_p2',
        title: '⚔️ Enigma de Éowyn — Sí / Si',
        question: '"Frodo dijo que __ y que lo haría por __ mismo, __ las circunstancias lo permitían."<br>¿Qué forma corresponde a cada hueco?',
        type: 'multiple',
        saKey: 'sa7',
        options: [
          { text: 'A) si / si / si (todas sin tilde)', correct: false },
          { text: 'B) sí / sí / si (afirmación / reflexivo / condicional)', correct: true },
          { text: 'C) sí / si / sí (afirmación / condicional / afirmación)', correct: false },
          { text: 'D) si / sí / sí (todas igual)', correct: false }
        ],
        feedback_correct: '¡Exacto! "Sí" (afirmación), "sí mismo" (reflexivo), "si las circunstancias" (condicional, sin tilde).',
        feedback_wrong: '"Dijo que sí" → afirmación. "Por sí mismo" → reflexivo. "Si las circunstancias" → condición.'
      }
    ]
  },

  puerta_final: {
    gandalf_bloqueada: [
      "¡El camino a Minas Tirith está bloqueado por los jinetes de Sauron!",
      "Solo el dominio del lenguaje puede abrirte paso.",
      "¡Completa todos los enigmas de Rohan!"
    ],
    gandalf_abierta: [
      "¡Rohirrim! ¡A las espadas! Has conquistado Rohan con tu dominio del lenguaje.",
      "El camino a Minas Tirith está libre. La gran ciudad blanca te aguarda.",
      "Anota tu código antes de cabalgar hacia el este.",
      "¡Por Rohan y por la Tierra Media, adelante!"
    ]
  }
};
