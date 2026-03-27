/**
 * sa4_rivendell.js
 * Contenidos de la Situación de Aprendizaje 4 — Rivendell
 * SA 4: Texto instructivo | Los verbos | Uso de H
 *
 * ⭐ ESTE ARCHIVO ES EL QUE DEBES EDITAR para cambiar preguntas y textos
 */

const SA4_DATA = {
  saKey: 'sa4',
  dungeonName: 'Rivendell',
  dungeonEmoji: '🌟',

  gandalf_intro: [
    "¡Rivendell, el Valle Eterno! Hogar de los Elfos más sabios de la Tierra Media.",
    "Aquí aprenderás el TEXTO INSTRUCTIVO: el arte de dar instrucciones claras y precisas.",
    "También descubrirás los secretos de LOS VERBOS y dominarás el uso correcto de la H.",
    "Busca a Lord Elrond en su biblioteca, a la maestra Arwen en los jardines y al archivista en la sala de mapas.",
    "¡Que la luz de los Elfos guíe tu aprendizaje!"
  ],

  sala_instructivo: {
    nombre: "La Biblioteca de Elrond",
    descripcion: "Lord Elrond guarda instrucciones precisas para todos los grandes viajes...",
    gandalf_entrada: [
      "Lord Elrond ha recopilado miles de textos instructivos en su biblioteca.",
      "El TEXTO INSTRUCTIVO explica cómo realizar una acción paso a paso.",
      "Sus características: usa verbos en imperativo o infinitivo, ordena los pasos numerados, emplea vocabulario preciso.",
      "Lo encontramos en recetas, manuales, instrucciones de uso e itinerarios.",
      "¡Lee el pergamino de Elrond y responde sus enigmas!"
    ],

    pergamino_teoria: {
      id: 'sa4_pergamino_instructivo',
      titulo: '📜 El Texto Instructivo',
      texto: `
        <strong>¿Qué es un texto instructivo?</strong><br><br>
        El <em>texto instructivo</em> guía al lector para realizar una tarea o actividad,
        paso a paso.<br><br>
        <strong>Características:</strong><br>
        • Usa verbos en <strong>imperativo</strong> ("mezcla", "añade") o <strong>infinitivo</strong> ("mezclar", "añadir").<br>
        • Los pasos aparecen <strong>numerados o con marcadores</strong> (primero, luego, finalmente).<br>
        • El lenguaje es <strong>claro, preciso y directo</strong>.<br>
        • Suele incluir una lista de materiales al principio.<br><br>
        <strong>Ejemplos:</strong><br>
        • Receta de cocina.<br>
        • Manual de instrucciones.<br>
        • Itinerario de viaje.<br>
        • Reglas de un juego.
      `
    },

    puzzles: [
      {
        id: 'sa4_ins_p1',
        title: '📚 Enigma de Elrond — Instructivo',
        question: '¿Cuál de estos ejemplos es un <strong>texto instructivo</strong>?',
        type: 'multiple',
        saKey: 'sa4',
        options: [
          { text: 'A) "El hobbit era un ser pequeño y amante de la comodidad."', correct: false },
          { text: 'B) "Para preparar lembas: 1. Mezcla la harina. 2. Añade miel élfica. 3. Hornea."', correct: true },
          { text: 'C) "Rivendell es un valle rodeado de montañas nevadas."', correct: false },
          { text: 'D) "El señor oscuro forjC� el Anillo Único para dominar a todos."', correct: false }
        ],
        feedback_correct: '¡Exacto! La receta del lembas es un texto instructivo: pasos numerados con verbos de acción.',
        feedback_wrong: 'Busca el texto que explica cómo hacer algo paso a paso con verbos de acción.'
      },
      {
        id: 'sa4_ins_p2',
        title: '📚 Enigma de Elrond — Verbos Instructivos',
        question: '¿Qué modo verbal es más característico del texto instructivo?',
        type: 'multiple',
        saKey: 'sa4',
        options: [
          { text: 'A) El subjuntivo, para expresar deseos', correct: false },
          { text: 'B) El condicional, para hablar de posibilidades', correct: false },
          { text: 'C) El imperativo o el infinitivo, para dar órdenes e indicaciones', correct: true },
          { text: 'D) El pasado, para narrar lo que ocurrió', correct: false }
        ],
        feedback_correct: '¡Perfecto! "Mezcla / mezclar", "añade / añadir" son imperativos e infinitivos instructivos.',
        feedback_wrong: '¿Qué modo usas cuando le dices a alguien cómo hacer algo? "Coge esto, pon aquello..."'
      }
    ]
  },

  sala_verbos: {
    nombre: "Los Jardines de Arwen",
    descripcion: "Arwen cultiva verbos de todos los tiempos y modos en sus jardines eternos...",
    gandalf_entrada: [
      "Arwen, la Doncella del Atardecer, conoce los verbos en todos sus tiempos y modos.",
      "El VERBO es la categoría gramatical que expresa acción, estado o proceso.",
      "Los verbos se conjugan: cambian según la persona (yo, tú, él), el número, el tiempo (presente, pasado, futuro) y el modo (indicativo, subjuntivo, imperativo).",
      "Las conjugaciones regulares siguen modelos fijos; las irregulares tienen formas propias.",
      "¡Aprende los secretos de los verbos en los jardines élficos!"
    ],

    pergamino_teoria: {
      id: 'sa4_pergamino_verbos',
      titulo: '🌿 Los Verbos',
      texto: `
        <strong>¿Qué es un verbo?</strong><br><br>
        El <em>verbo</em> expresa acción (correr, hablar), estado (ser, estar) o proceso (crecer, envejecer).<br><br>
        <strong>Conjugación verbal:</strong><br>
        • <strong>Persona y número:</strong> yo como / tú comes / ellos comen.<br>
        • <strong>Tiempos:</strong> presente, pretérito (imperfecto, indefinido, perfecto), futuro, condicional.<br>
        • <strong>Modos:</strong> indicativo (hechos reales), subjuntivo (posibilidades/deseos),
          imperativo (órdenes).<br><br>
        <strong>Verbos regulares vs. irregulares:</strong><br>
        • <strong>Regulares:</strong> siguen el modelo de su conjugación (amar, temer, partir).<br>
        • <strong>Irregulares:</strong> tienen formas propias (ir → voy, saber → sé, poder → puedo).
      `
    },

    puzzles: [
      {
        id: 'sa4_ver_p1',
        title: '🌿 Enigma de Arwen — Tiempos',
        question: '"Frodo <u>llevaba</u> el anillo durante meses." El verbo subrayado está en...',
        type: 'multiple',
        saKey: 'sa4',
        options: [
          { text: 'A) Presente de indicativo', correct: false },
          { text: 'B) Pretérito indefinido (pasado simple)', correct: false },
          { text: 'C) Pretérito imperfecto de indicativo', correct: true },
          { text: 'D) Futuro simple', correct: false }
        ],
        feedback_correct: '¡Correcto! "Llevaba" es pretérito imperfecto, que indica una acción pasada habitual o continua.',
        feedback_wrong: 'El imperfecto describe acciones pasadas que duraban en el tiempo o eran habituales: ¿cuándo "llevaba" el anillo?'
      },
      {
        id: 'sa4_ver_p2',
        title: '🌿 Enigma de Arwen — Irregular',
        question: '¿Cuál de estos verbos es <strong>irregular</strong>?',
        type: 'multiple',
        saKey: 'sa4',
        options: [
          { text: 'A) cantar (yo canto, tú cantas...)', correct: false },
          { text: 'B) correr (yo corro, tú corres...)', correct: false },
          { text: 'C) poder (yo puedo, tú puedes...)', correct: true },
          { text: 'D) vivir (yo vivo, tú vives...)', correct: false }
        ],
        feedback_correct: '¡Exacto! "Poder" cambia la "o" por "ue" (puedo), algo que no ocurre en los verbos regulares.',
        feedback_wrong: 'Un verbo irregular cambia su raíz. Conjuga cada uno: ¿cuál cambia de forma inesperada?'
      },
      {
        id: 'sa4_ver_p3',
        title: '🌿 Enigma de Arwen — Modo Imperativo',
        question: 'En la frase "¡<u>Corre</u>, Frodo, <u>corre</u>!", ¿en qué modo están los verbos?',
        type: 'multiple',
        saKey: 'sa4',
        options: [
          { text: 'A) Indicativo, porque narran un hecho real', correct: false },
          { text: 'B) Subjuntivo, porque expresan un deseo', correct: false },
          { text: 'C) Imperativo, porque expresan una orden o petición', correct: true },
          { text: 'D) Infinitivo, porque son la forma no conjugada', correct: false }
        ],
        feedback_correct: '¡Perfecto! El imperativo sirve para dar órdenes, peticiones o ruegos.',
        feedback_wrong: '¿Cuándo usamos ese modo verbal? "¡Corre!" es una orden, ¿verdad?'
      }
    ]
  },

  sala_hache: {
    nombre: "La Sala de Mapas",
    descripcion: "El archivista élfico custodia pergaminos con las reglas de la H...",
    gandalf_entrada: [
      "El archivista Glorfindel conoce todos los secretos de la H en español.",
      "La H es una letra muda en español (no suena), pero hay reglas para saber cuándo escribirla.",
      "Se escribe con H: las formas del verbo haber (he, has, ha, hay...), palabras que empezaban con F en latín (hijo, hija, hacer...) y muchas palabras de origen griego (hipopótamo, historia...).",
      "¡Recuerda: la H no se pronuncia pero es obligatoria en muchas palabras!"
    ],

    pergamino_teoria: {
      id: 'sa4_pergamino_hache',
      titulo: '🗺️ El Uso de la H',
      texto: `
        <strong>¿Cuándo se escribe H?</strong><br><br>
        • <strong>Verbo haber:</strong> he, has, ha, hemos, habéis, han, había, hubo, habrá...<br>
        • <strong>Palabras con F- latina:</strong> hacer (facere), hijo (filius),
          hablar (fabulare), hierro (ferrum).<br>
        • <strong>Prefijos griegos:</strong> hiper-, hidro-, hemo-, hecto-, helio-.<br>
          Ej.: hipermercado, hidrógeno, hemisferio.<br>
        • <strong>Interjecciones:</strong> ¡ah!, ¡eg!, ¡oh!, ¡hola!<br>
        • <strong>Palabras con diptongo ie, ue al inicio:</strong>
          huevo, hueso, hielo, hierba.<br><br>
        <strong>Recuerda:</strong> H es muda, pero su ausencia es una falta ortográfica.
      `
    },

    puzzles: [
      {
        id: 'sa4_hac_p1',
        title: '🗺️ Enigma del Archivista — Haber',
        question: '¿Cuál de estas formas del verbo <strong>haber</strong> está bien escrita?',
        type: 'multiple',
        saKey: 'sa4',
        options: [
          { text: 'A) "A llegado Gandalf" (sin H)', correct: false },
          { text: 'B) "Ha llegado Gandalf" (con H)', correct: true },
          { text: 'C) "Á llegado Gandalf" (con tilde)', correct: false },
          { text: 'D) "Hà llegado Gandalf" (con acento grave)', correct: false }
        ],
        feedback_correct: '¡Correcto! La forma "ha" del verbo haber siempre se escribe con H.',
        feedback_wrong: 'El verbo haber siempre lleva H: he, has, ha, hemos... ¿cuál está bien escrita?'
      },
      {
        id: 'sa4_hac_p2',
        title: '🗺️ Enigma del Archivista — Reglas',
        question: '¿Por qué "huevo" se escribe con H?',
        type: 'multiple',
        saKey: 'sa4',
        options: [
          { text: 'A) Porque es una palabra de origen árabe', correct: false },
          { text: 'B) Porque empieza con el prefijo griego hue-', correct: false },
          { text: 'C) Porque las palabras con diptongo "ue" al inicio llevan H', correct: true },
          { text: 'D) Porque contiene la letra v', correct: false }
        ],
        feedback_correct: '¡Exacto! Las palabras que empiezan por el diptongo "ue" o "ie" llevan H: huevo, hueso, hielo, hierba.',
        feedback_wrong: 'Piensa en otras palabras: hielo, hueso, hierba... ¿qué tienen en común con "huevo"?'
      }
    ]
  },

  puerta_final: {
    gandalf_bloqueada: [
      "Los Elfos no permitirán el paso hasta que hayas completado todos los enigmas.",
      "Visita a Lord Elrond, a Arwen y al archivista.",
      "¡La sabiduría élfica no se concede a medias!"
    ],
    gandalf_abierta: [
      "¡Maravilloso! Has demostrado un dominio digno de los Elfos de Rivendell.",
      "El camino hacia las Minas de Moria está abierto... pero sé prudente.",
      "Anota tu código, pues las profundidades de Moria son peligrosas.",
      "¡Que la luz de Eärendil ilumine tu camino!"
    ]
  }
};
