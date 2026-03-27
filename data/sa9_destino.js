/**
 * sa9_destino.js
 * Contenidos de la Situación de Aprendizaje 9 — Monte del Destino
 * SA 9: Repaso tipología textual | Repaso ortográfico | El resumen y la síntesis
 *
 * ⭐ ESTE ARCHIVO ES EL QUE DEBES EDITAR para cambiar preguntas y textos
 */

const SA9_DATA = {
  saKey: 'sa9',
  dungeonName: 'Monte del Destino',
  dungeonEmoji: '🌋',

  gandalf_intro: [
    "¡El Monte del Destino! El fin del viaje. Aquí, en las llamas del Orodruin, se forjó el Anillo.",
    "Este es el gran repaso final. Aquí demostrarás todo lo que has aprendido en el camino.",
    "Repasarás la TIPOLOGÍA TEXTUAL completa, la ORTOGRAFÍA y el arte del RESUMEN.",
    "Busca al Señor del Tiempo Círdan en la entrada, al sabio Saruman en la torre y a Sauron... digo, al Maestro en la cima.",
    "¡Un último esfuerzo, portador del Anillo! ¡El viaje llega a su fin!"
  ],

  sala_tipologia: {
    nombre: "La Entrada del Orodruin",
    descripcion: "En la entrada del Monte del Destino, Círdan repasa todas las tipologías textuales...",
    gandalf_entrada: [
      "Círdan el Carpintero de Barcos lleva siglos recopilando todos los tipos de texto.",
      "Es el momento del GRAN REPASO de tipología textual.",
      "Recuerda: narrativo (cuenta hechos), descriptivo (cómo son las cosas), instructivo (cómo hacer algo), expositivo (informa objetivamente) y argumentativo (defiende una opinión).",
      "También: teatral/dialogado (para representar) y poético (belleza y emoción).",
      "¡Demuestra que recuerdas todo el camino recorrido!"
    ],

    pergamino_teoria: {
      id: 'sa9_pergamino_tipologia',
      titulo: '🌋 Repaso de Tipología Textual',
      texto: `
        <strong>Los siete tipos de texto:</strong><br><br>
        • <strong>Narrativo:</strong> cuenta hechos. Tiene narrador, personajes, espacio y tiempo.
          Estructura: planteamiento–nudo–desenlace.<br>
        • <strong>Descriptivo:</strong> representa cómo son personas, lugares u objetos.
          Usa adjetivos y comparaciones.<br>
        • <strong>Instructivo:</strong> explica cómo hacer algo (imperativo/infinitivo, pasos numerados).<br>
        • <strong>Expositivo:</strong> informa objetivamente con datos y vocabulario técnico.<br>
        • <strong>Argumentativo:</strong> defiende una tesis con argumentos para convencer.<br>
        • <strong>Teatral/Dialogado:</strong> escrito para representarse; tiene diálogos y acotaciones.<br>
        • <strong>Poético:</strong> usa el lenguaje estéticamente; verso, estrofa, rima y figuras retóricas.
      `
    },

    puzzles: [
      {
        id: 'sa9_tip_p1',
        title: '🌋 Enigma de Círdan — Repaso I',
        question: '"Para encender el fuego de Mordor: 1. Reúne el combustible. 2. Enciende la chispa. 3. Sopla con cuidado." ¿Qué tipo de texto es?',
        type: 'multiple',
        saKey: 'sa9',
        options: [
          { text: 'A) Narrativo', correct: false },
          { text: 'B) Descriptivo', correct: false },
          { text: 'C) Instructivo', correct: true },
          { text: 'D) Argumentativo', correct: false }
        ],
        feedback_correct: '¡Exacto! Pasos numerados con verbos de acción = texto instructivo.',
        feedback_wrong: '¿Qué tipo de texto da instrucciones paso a paso para realizar una tarea?'
      },
      {
        id: 'sa9_tip_p2',
        title: '🌋 Enigma de Círdan — Repaso II',
        question: '"El Orco era enorme y aterrador: su piel verde, sus colmillos amarillentos y sus ojos rojos como brasas." ¿Qué tipo de texto es?',
        type: 'multiple',
        saKey: 'sa9',
        options: [
          { text: 'A) Expositivo, porque da información objetiva', correct: false },
          { text: 'B) Descriptivo, porque pinta cómo es el Orco', correct: true },
          { text: 'C) Narrativo, porque cuenta lo que ocurre', correct: false },
          { text: 'D) Poético, porque usa metáforas', correct: false }
        ],
        feedback_correct: '¡Correcto! Describe cómo es el Orco usando adjetivos y comparaciones.',
        feedback_wrong: '¿Este texto narra hechos o describe cómo es el personaje?'
      },
      {
        id: 'sa9_tip_p3',
        title: '🌋 Enigma de Círdan — Repaso III',
        question: '"Creo firmemente que destruir el Anillo es la única solución, porque su poder corrompe incluso al más virtuoso." ¿Qué tipo de texto es?',
        type: 'multiple',
        saKey: 'sa9',
        options: [
          { text: 'A) Expositivo, porque da información', correct: false },
          { text: 'B) Narrativo, porque cuenta una historia', correct: false },
          { text: 'C) Argumentativo, porque defiende una opinión con razones', correct: true },
          { text: 'D) Instructivo, porque dice lo que hay que hacer', correct: false }
        ],
        feedback_correct: '¡Perfecto! "Creo firmemente" (tesis) + "porque..." (argumento) = texto argumentativo.',
        feedback_wrong: '¿Este texto informa neutralmente o defiende una postura con razones?'
      }
    ]
  },

  sala_ortografia: {
    nombre: "La Torre de Ortanca",
    descripcion: "En la torre de Saruman, el repaso ortográfico final aguarda al viajero...",
    gandalf_entrada: [
      "Saruman, a pesar de todo, fue el mayor experto en reglas ortográficas de la Tierra Media.",
      "Este es el GRAN REPASO ORTOGRÁFICO: acentuación, B/V, H, G/J y tildes diacríticas.",
      "Recuerda todas las reglas aprendidas en el camino.",
      "Las palabras bien escritas son el escudo del pensamiento.",
      "¡Demuestra que has aprendido la ortografía de todo el viaje!"
    ],

    pergamino_teoria: {
      id: 'sa9_pergamino_ortografia',
      titulo: '🔮 Repaso Ortográfico',
      texto: `
        <strong>Resumen de reglas ortográficas clave:</strong><br><br>
        <strong>Acentuación:</strong><br>
        • Agudas: tilde si acaban en vocal, N o S (camión, café).<br>
        • Llanas: tilde si NO acaban en vocal, N o S (árbol, fácil).<br>
        • Esdrújulas: tilde SIEMPRE (música, pájaro).<br><br>
        <strong>B y V:</strong> -bir (escribir), -buir (contribuir), sílabas bra/bla, imperfecto "iba".<br>
        V: -ava/-ovo, después de N, terminaciones -aje/-eje.<br><br>
        <strong>H:</strong> verbo haber, palabras con F- latina (hijo, hacer), prefijos griegos (hidro-, hiper-).<br><br>
        <strong>G y J:</strong> gen/geo con G, verbos -ger/-gir con G, -aje/-eje con J.<br><br>
        <strong>Tilde diacrítica:</strong> él/el, tú/tu, mí/mi, sí/si, más/mas, té/te.
      `
    },

    puzzles: [
      {
        id: 'sa9_ort_p1',
        title: '🔮 Enigma de Saruman — Acentuación',
        question: '¿Cuál de estas palabras está <strong>correctamente</strong> acentuada?',
        type: 'multiple',
        saKey: 'sa9',
        options: [
          { text: 'A) musica (sin tilde)', correct: false },
          { text: 'B) músíca (con dos tildes)', correct: false },
          { text: 'C) música (tilde en la primera sílaba)', correct: true },
          { text: 'D) musíca (tilde en la segunda sílaba)', correct: false }
        ],
        feedback_correct: '¡Perfecto! "Música" es esdrújula (MÚ-si-ca), y las esdrújulas siempre llevan tilde en la antepenúltima sílaba.',
        feedback_wrong: 'Divide: MÚ-si-ca. El acento cae en la primera sílaba (antepenúltima). Las esdrújulas siempre llevan tilde.'
      },
      {
        id: 'sa9_ort_p2',
        title: '🔮 Enigma de Saruman — Ortografía Mixta',
        question: '"__ visto que __ espada era __ brillante como el mithril." Elige la secuencia correcta:',
        type: 'multiple',
        saKey: 'sa9',
        options: [
          { text: 'A) He / su / tan (verbo haber / posesivo / adverbio)', correct: true },
          { text: 'B) E / su / tan (sin H / posesivo / adverbio)', correct: false },
          { text: 'C) He / tú / tan (verbo haber / pronombre / adverbio)', correct: false },
          { text: 'D) Ha / su / tan (3ª persona / posesivo / adverbio)', correct: false }
        ],
        feedback_correct: '¡Exacto! "He visto" (1ª persona de haber), "su espada" (posesivo), "tan brillante" (adverbio de grado).',
        feedback_wrong: '¿Quién ha visto? "Yo he visto" → 1ª persona del verbo haber. ¿De quién es la espada? ¿Cuánto brilla?'
      },
      {
        id: 'sa9_ort_p3',
        title: '🔮 Enigma de Saruman — Repaso Final',
        question: 'Señala la oración que contiene un <strong>error ortográfico</strong>:',
        type: 'multiple',
        saKey: 'sa9',
        options: [
          { text: 'A) "Frodo llevaba una vieja cota de mithril."', correct: false },
          { text: 'B) "El árbol de Gondor ha florecido esta primavera."', correct: false },
          { text: 'C) "Gollum se abalanzó sobre Frodo y le mordio el dedo."', correct: true },
          { text: 'D) "Aragorn empuñó la espada y gritó: «¡Por la Tierra Media!»"', correct: false }
        ],
        feedback_correct: '¡Correcto! "mordio" debería llevar tilde: "mordió" (pretérito indefinido, aguda terminada en vocal).',
        feedback_wrong: 'Busca la palabra que debería llevar tilde pero no la tiene. Piensa en las reglas de acentuación.'
      }
    ]
  },

  sala_resumen: {
    nombre: "La Cima del Orodruin",
    descripcion: "En la cima ardiente, el Maestro Final pone a prueba el arte del resumen...",
    gandalf_entrada: [
      "¡Lo has conseguido! Has llegado a la cima del Monte del Destino.",
      "La última prueba: el arte del RESUMEN y la SÍNTESIS.",
      "El RESUMEN reduce un texto a sus ideas principales, manteniendo la estructura y el sentido.",
      "La SÍNTESIS reformula con tus propias palabras las ideas clave del texto original.",
      "Ambas técnicas son fundamentales para el estudio y la comunicación.",
      "¡Esta es la prueba definitiva, portador del Anillo!"
    ],

    pergamino_teoria: {
      id: 'sa9_pergamino_resumen',
      titulo: '🔥 El Resumen y la Síntesis',
      texto: `
        <strong>El Resumen</strong><br><br>
        El <em>resumen</em> reduce un texto a sus <strong>ideas principales</strong>,
        eliminando detalles secundarios, ejemplos y repeticiones.<br>
        • Respeta el orden del texto original.<br>
        • No añade información nueva ni opiniones personales.<br>
        • Usa las palabras del texto original (o muy parecidas).<br>
        • Longitud orientativa: 1/4 del texto original.<br><br>
        <strong>La Síntesis</strong><br><br>
        La <em>síntesis</em> va más allá del resumen: <strong>reformula con tus propias palabras</strong>
        las ideas esenciales, integrando la información de todo el texto.<br>
        • Puede cambiar el orden.<br>
        • Usa lenguaje propio del estudiante.<br>
        • Muestra que se ha comprendido el texto.
      `
    },

    puzzles: [
      {
        id: 'sa9_res_p1',
        title: '🔥 Enigma Final — Resumen',
        question: '¿Cuál es la principal diferencia entre un <strong>resumen</strong> y una <strong>síntesis</strong>?',
        type: 'multiple',
        saKey: 'sa9',
        options: [
          { text: 'A) El resumen es siempre más largo que la síntesis', correct: false },
          { text: 'B) El resumen mantiene el orden y palabras del original; la síntesis reformula con lenguaje propio', correct: true },
          { text: 'C) La síntesis copia literalmente el texto original', correct: false },
          { text: 'D) No hay diferencia significativa entre ambos', correct: false }
        ],
        feedback_correct: '¡Correcto! El resumen respeta el texto; la síntesis lo reinterpreta con tus propias palabras.',
        feedback_wrong: 'Piensa: ¿cuál de los dos demuestra más comprensión del texto? ¿El que copia ideas o el que las reformula?'
      },
      {
        id: 'sa9_res_p2',
        title: '🔥 Enigma Final — Técnica',
        question: 'Al hacer un resumen, ¿qué NO debes incluir?',
        type: 'multiple',
        saKey: 'sa9',
        options: [
          { text: 'A) Las ideas principales del texto', correct: false },
          { text: 'B) La estructura del texto original', correct: false },
          { text: 'C) Tu opinión personal sobre el tema', correct: true },
          { text: 'D) El tema central del texto', correct: false }
        ],
        feedback_correct: '¡Exacto! El resumen es objetivo: no incluye opiniones personales ni información nueva.',
        feedback_wrong: '¿El resumen debe ser objetivo o subjetivo? ¿Añades tus propias ideas o te limitas a las del texto?'
      },
      {
        id: 'sa9_res_p3',
        title: '🔥 La Prueba Definitiva',
        question: 'Selecciona el <strong>resumen correcto</strong> de este texto:<br><em>"Frodo Bolsón, un pequeño hobbit de la Comarca, recibió de su tío Bilbo un misterioso anillo dorado. Sin saber su verdadero poder, Frodo guardó el Anillo durante años, hasta que Gandalf le reveló que era el Anillo Único, forjado por el Señor Oscuro Sauron para dominar a todos los pueblos de la Tierra Media."</em>',
        type: 'multiple',
        saKey: 'sa9',
        options: [
          { text: 'A) "Frodo era un hobbit. Tenía un anillo bonito. Gandalf era un mago."', correct: false },
          { text: 'B) "Frodo, un hobbit, heredó de Bilbo el Anillo Único, cuyo peligroso poder le fue revelado más tarde por Gandalf."', correct: true },
          { text: 'C) "Creo que Frodo era muy valiente al guardar el Anillo. Yo en su lugar no lo habría hecho."', correct: false },
          { text: 'D) (Copia literal de todo el texto original)', correct: false }
        ],
        feedback_correct: '¡ENHORABUENA! Has completado el viaje. El resumen recoge las ideas esenciales sin opiniones ni copias literales.',
        feedback_wrong: '¿Cuál recoge solo las ideas principales, con palabras propias, sin opinar y sin copiar literalmente?'
      }
    ]
  },

  puerta_final: {
    gandalf_bloqueada: [
      "El Anillo no puede ser destruido todavía. Te faltan enigmas por resolver.",
      "Completa todas las pruebas del Monte del Destino.",
      "¡Ánimo, portador! Estás muy cerca del final."
    ],
    gandalf_abierta: [
      "¡Lo has logrado! ¡El Anillo ha sido destruido!",
      "Has demostrado un dominio del lenguaje extraordinario en todo el viaje.",
      "Desde La Comarca hasta el Monte del Destino, has aprendido todo lo necesario.",
      "¡La Tierra Media es libre, y tú eres su maestro de la palabra!",
      "Recuerda guardar tu código. ¡El viaje ha terminado, pero el aprendizaje continúa!"
    ]
  }
};
