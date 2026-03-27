/**
 * sa3_vientos.js
 * Contenidos de la Situación de Aprendizaje 3 — Cima de los Vientos
 * SA 3: Texto descriptivo | Adverbios | Uso de B y V
 *
 * ⭐ ESTE ARCHIVO ES EL QUE DEBES EDITAR para cambiar preguntas y textos
 */

const SA3_DATA = {
  saKey: 'sa3',
  dungeonName: 'Cima de los Vientos',
  dungeonEmoji: '⛰️',

  gandalf_intro: [
    "¡La Cima de los Vientos! Un lugar inhóspito donde el viento azota sin descanso.",
    "Aquí aprenderás el arte del TEXTO DESCRIPTIVO, que pinta imágenes con palabras.",
    "También dominarás los ADVERBIOS y el uso correcto de la B y la V.",
    "Busca al explorador en su tienda, al centinela en su torre y al erudito en su cueva.",
    "¡El frío de la montaña no detendrá a quien posee el don del lenguaje!"
  ],

  sala_descriptivo: {
    nombre: "La Tienda del Explorador",
    descripcion: "El explorador Arador lleva años describiendo las maravillas de las montañas...",
    gandalf_entrada: [
      "El explorador Arador conoce el texto descriptivo mejor que nadie.",
      "El TEXTO DESCRIPTIVO representa con palabras cómo son personas, lugares, objetos o sentimientos.",
      "Una buena descripción usa adjetivos precisos, comparaciones y detalles sensoriales.",
      "La descripción puede ser objetiva (datos reales) o subjetiva (impresiones personales).",
      "Lee su pergamino y responde los enigmas de la montaña."
    ],

    pergamino_teoria: {
      id: 'sa3_pergamino_descriptivo',
      titulo: '📜 El Arte de Describir',
      texto: `
        <strong>¿Qué es un texto descriptivo?</strong><br><br>
        El <em>texto descriptivo</em> representa con palabras cómo son las personas, los lugares,
        los objetos o los estados de ánimo.<br><br>
        <strong>Tipos de descripción:</strong><br>
        • <strong>Objetiva:</strong> datos precisos y verificables, sin opinión personal.
          (Ej.: descripción científica, ficha técnica).<br>
        • <strong>Subjetiva:</strong> añade impresiones y sentimientos del autor.
          (Ej.: descripción literaria).<br><br>
        <strong>Recursos descriptivos:</strong><br>
        • <strong>Adjetivos:</strong> "la torre <em>oscura</em> y <em>amenazante</em>".<br>
        • <strong>Comparaciones:</strong> "sus ojos eran como brasas encendidas".<br>
        • <strong>Detalles sensoriales:</strong> vista, oído, olfato, tacto, gusto.<br>
        • <strong>Orden:</strong> de lo general a lo particular, de arriba abajo, etc.
      `
    },

    puzzles: [
      {
        id: 'sa3_des_p1',
        title: '⛰️ Enigma del Explorador — Descripción',
        question: '¿Cuál de estos fragmentos es un ejemplo de <strong>texto descriptivo subjetivo</strong>?',
        type: 'multiple',
        saKey: 'sa3',
        options: [
          { text: 'A) "La montaña mide 3.000 metros de altura."', correct: false },
          { text: 'B) "La montaña tiene nieve en la cima y roca gris."', correct: false },
          { text: 'C) "La montaña se alzaba terrible y hermosa, como un dios dormido."', correct: true },
          { text: 'D) "La temperatura en la cima es de -10 grados."', correct: false }
        ],
        feedback_correct: '¡Exacto! La comparación "como un dios dormido" y el adjetivo "terrible y hermosa" añaden subjetividad.',
        feedback_wrong: 'La descripción subjetiva añade impresiones personales y comparaciones literarias. ¿Cuál lo hace?'
      },
      {
        id: 'sa3_des_p2',
        title: '⛰️ Enigma del Explorador — Recursos',
        question: 'En la descripción: <em>"Sus ojos brillaban como estrellas en la oscuridad"</em>, ¿qué recurso descriptivo se usa?',
        type: 'multiple',
        saKey: 'sa3',
        options: [
          { text: 'A) Un adjetivo calificativo', correct: false },
          { text: 'B) Una comparación (símil)', correct: true },
          { text: 'C) Un detalle auditivo', correct: false },
          { text: 'D) Una enumeración', correct: false }
        ],
        feedback_correct: '¡Muy bien! "Como estrellas" es una comparación que relaciona los ojos con las estrellas.',
        feedback_wrong: 'Busca la estructura "A es/está como B". ¿Qué dos cosas se comparan en la frase?'
      }
    ]
  },

  sala_adverbios: {
    nombre: "La Torre del Centinela",
    descripcion: "El centinela observa todo desde su torre y lo modifica todo con precisión...",
    gandalf_entrada: [
      "El centinela Bárbol lleva siglos observando y describiendo con precisión.",
      "Los ADVERBIOS son palabras invariables que modifican a verbos, adjetivos u otros adverbios.",
      "Expresan circunstancias de modo (bien, mal, rápidamente), lugar (aquí, allí), tiempo (ayer, hoy), cantidad (muy, bastante) y afirmación/negación.",
      "Son invariables: no cambian de gìnero ni número.",
      "¡Resuelve sus enigmas desde lo alto de la torre!"
    ],

    pergamino_teoria: {
      id: 'sa3_pergamino_adverbios',
      titulo: '🗼 Los Adverbios',
      texto: `
        <strong>¿Qué son los adverbios?</strong><br><br>
        Los <em>adverbios</em> son palabras <strong>invariables</strong> (no varían en género ni número)
        que modifican verbos, adjetivos u otros adverbios.<br><br>
        <strong>Tipos de adverbios:</strong><br>
        • <strong>Modo:</strong> bien, mal, rápidamente, despacio, así.<br>
        • <strong>Lugar:</strong> aquí, allí, arriba, abajo, cerca, lejos.<br>
        • <strong>Tiempo:</strong> hoy, ayer, mañana, siempre, nunca, ya.<br>
        • <strong>Cantidad:</strong> muy, bastante, poco, demasiado, mucho.<br>
        • <strong>Afirmación/Negación:</strong> sí, no, también, tampoco.<br><br>
        <strong>Ejemplo:</strong> "Gandalf caminó <em>lentamente</em> hacia la <em>lejana</em> montaña."
        ("lentamente" modifica al verbo; "lejana" es adjetivo, no adverbio)
      `
    },

    puzzles: [
      {
        id: 'sa3_adv_p1',
        title: '🗼 Enigma del Centinela — Tipos',
        question: 'En "Frodo caminó <u>rápidamente</u> hacia la <u>lejana</u> montaña", ¿cuál de las palabras subrayadas es un adverbio?',
        type: 'multiple',
        saKey: 'sa3',
        options: [
          { text: 'A) "lejana", porque describe la montaña', correct: false },
          { text: 'B) "rápidamente", porque modifica al verbo "caminó"', correct: true },
          { text: 'C) Las dos son adverbios', correct: false },
          { text: 'D) Ninguna es adverbio', correct: false }
        ],
        feedback_correct: '¡Correcto! "Rápidamente" modifica al verbo (¿cómo caminó?). "Lejana" es adjetivo.',
        feedback_wrong: 'El adverbio modifica verbos, no sustantivos. ¿Cuál de las dos palabras dice "cómo" se realizó la acción?'
      },
      {
        id: 'sa3_adv_p2',
        title: '🗼 Enigma del Centinela — Invariable',
        question: '¿Por qué los adverbios son palabras "invariables"?',
        type: 'multiple',
        saKey: 'sa3',
        options: [
          { text: 'A) Porque no pueden usarse en preguntas', correct: false },
          { text: 'B) Porque siempre van después del verbo', correct: false },
          { text: 'C) Porque no cambian de gìnero ni número', correct: true },
          { text: 'D) Porque solo modifican adjetivos', correct: false }
        ],
        feedback_correct: '¡Exacto! "Bien" es siempre "bien", nunca "bueno/buena/buenos".',
        feedback_wrong: 'Piensa: ¿dices "ella camina rápidam<em>a</em>" o "rápidamente" siempre igual?'
      },
      {
        id: 'sa3_adv_p3',
        title: '🗼 Enigma del Centinela — Identifica',
        question: '¿Cuál de estas palabras es un adverbio de <strong>lugar</strong>?',
        type: 'multiple',
        saKey: 'sa3',
        options: [
          { text: 'A) ayer', correct: false },
          { text: 'B) bastante', correct: false },
          { text: 'C) aquí', correct: true },
          { text: 'D) nunca', correct: false }
        ],
        feedback_correct: '¡Perfecto! "Aquí" indica el lugar. "Ayer" es de tiempo, "bastante" de cantidad, "nunca" de tiempo/negación.',
        feedback_wrong: 'Los adverbios de lugar responden a la pregunta ¿dónde? ¿Cuál de estas palabras indica un lugar?'
      }
    ]
  },

  sala_byv: {
    nombre: "La Cueva del Erudito",
    descripcion: "El erudito Celebrimbor lleva siglos descifrando el misterio de la B y la V...",
    gandalf_entrada: [
      "¡La Cueva del Erudito! Celebrimbor conoce todas las reglas de la B y la V.",
      "En español, B y V suenan igual, por eso hay que conocer las reglas para escribirlas bien.",
      "Se escribe con B: los verbos en -bir (escribir) - buir (contribuir), las sílabas bra-bro-bru, bl, y el pretérito imperfecto de indicativo (iba, ibas...).",
      "Se escribe con V: los adjetivos en -ava/-ava/-avo (nuevo, bravo), después de n (enviar), y en los verbos ir, estar y tener en presente.",
      "¡Demuestra que dominas esta regla ortográfica!"
    ],

    pergamino_teoria: {
      id: 'sa3_pergamino_byv',
      titulo: '🗿 El Uso de B y V',
      texto: `
        <strong>Se escribe con B:</strong><br>
        • Verbos terminados en <em>-bir</em>: escribir, subir, recibir.<br>
        • Verbos terminados en <em>-buir</em>: contribuir, distribuir.<br>
        • Sílabas: <em>bra, bre, bri, bro, bru, bla, ble, bli, blo, blu</em>.<br>
        • Pretérito imperfecto de <em>ir</em>: iba, ibas, iba, íbamos...<br>
        • Después de <em>m</em>: también, cambio, sombra.<br><br>
        <strong>Se escribe con V:</strong><br>
        • Adjetivos en <em>-ava, -ave, -avo, -eva, -evo, -iva, -ivo</em>:
          nuevo, bravo, activo.<br>
        • Después de <em>n</em>: enviar, invitar, convoy.<br>
        • Verbos <em>ir</em> (voy, vas), <em>estar</em> (estuvo) y <em>tener</em>
          (tuvo) en algunos tiempos.<br>
        • Palabras con <em>vice-, villa-, vis-</em>: vicepresidente, villa.
      `
    },

    puzzles: [
      {
        id: 'sa3_byv_p1',
        title: '🗿 Enigma del Erudito — B o V',
        question: '¿Cuál de estas palabras se escribe con <strong>B</strong>?',
        type: 'multiple',
        saKey: 'sa3',
        options: [
          { text: 'A) nue_o (nuevo)', correct: false },
          { text: 'B) escri_ir (escribir)', correct: true },
          { text: 'C) acti_o (activo)', correct: false },
          { text: 'D) en_iar (enviar)', correct: false }
        ],
        feedback_correct: '¡Correcto! "Escribir" termina en -bir, regla de la B. Los demás van con V.',
        feedback_wrong: 'Recuerda: los verbos en -bir llevan B. ¿Cuál de las opciones termina en -bir?'
      },
      {
        id: 'sa3_byv_p2',
        title: '🗿 Enigma del Erudito — Imperfecto',
        question: 'El pretérito imperfecto del verbo "ir" (iba, ibas, iba...) se escribe con...',
        type: 'multiple',
        saKey: 'sa3',
        options: [
          { text: 'A) V, porque el verbo ir empieza por V (voy)', correct: false },
          { text: 'B) B, es una regla específica del imperfecto de "ir"', correct: true },
          { text: 'C) Depende del contexto', correct: false },
          { text: 'D) Ambas son correctas', correct: false }
        ],
        feedback_correct: '¡Exacto! El imperfecto de "ir" (iba, ibas, íbamos...) siempre se escribe con B.',
        feedback_wrong: 'Es una excepción especial. El imperfecto de indicativo del verbo ir siempre lleva B.'
      }
    ]
  },

  puerta_final: {
    gandalf_bloqueada: [
      "El paso hacia Rivendell está bloqueado por un viento helado.",
      "Debes completar todos los enigmas de la Cima de los Vientos para avanzar.",
      "¡Visita al explorador, al centinela y al erudito!"
    ],
    gandalf_abierta: [
      "¡Impresionante! Has dominado el texto descriptivo, los adverbios y el uso de B y V.",
      "El viento amaina... el camino a Rivendell está despejado.",
      "Anota tu código para continuar en la próxima sesión.",
      "¡Los Elfos te esperan en el Valle Eterno!"
    ]
  }
};
