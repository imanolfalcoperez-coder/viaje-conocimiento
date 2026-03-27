/**
 * sa6_lorien.js
 * Contenidos de la Situación de Aprendizaje 6 — Lothlórien
 * SA 6: Texto argumentativo | Conectores discursivos | Sinónimos y antónimos
 *
 * ⭐ ESTE ARCHIVO ES EL QUE DEBES EDITAR para cambiar preguntas y textos
 */

const SA6_DATA = {
  saKey: 'sa6',
  dungeonName: 'Lothlórien',
  dungeonEmoji: '🌿',

  gandalf_intro: [
    "Lothlórien... el bosque dorado de los Elfos. Un lugar de belleza y sabiduría infinitas.",
    "Aquí, bajo la luz de Galadriel, aprenderás el TEXTO ARGUMENTATIVO.",
    "También dominarás los CONECTORES DISCURSIVOS y los SINÓNIMOS Y ANTÓNIMOS.",
    "Busca a Galadriel en el Espejo, al cronista Haldir en los mallorn y al lingüista en la pradera.",
    "¡Que la luz de Lothlórien ilumine tu razonamiento!"
  ],

  sala_argumentativo: {
    nombre: "El Espejo de Galadriel",
    descripcion: "Galadriel usa argumentos poderosos para convencer y reflexionar sobre la verdad...",
    gandalf_entrada: [
      "El Espejo de Galadriel refleja la verdad. Y la verdad se defiende con argumentos.",
      "El TEXTO ARGUMENTATIVO defiende una tesis u opinión mediante argumentos y razonamientos.",
      "Estructura: tesis (idea que se defiende), argumentos (razones que la apoyan) y conclusión.",
      "Para convencer hay que usar argumentos sólidos: datos, ejemplos, citas de autoridad.",
      "¡Lee el pergamino y responde los enigmas de Galadriel!"
    ],

    pergamino_teoria: {
      id: 'sa6_pergamino_argumentativo',
      titulo: '🌟 El Texto Argumentativo',
      texto: `
        <strong>¿Qué es un texto argumentativo?</strong><br><br>
        El <em>texto argumentativo</em> defiende una <strong>tesis</strong> (opinión o idea)
        mediante <strong>argumentos</strong> (razones) para convencer al lector.<br><br>
        <strong>Estructura:</strong><br>
        • <strong>Introducción/Tesis:</strong> presenta la opinión que se va a defender.<br>
        • <strong>Desarrollo/Argumentos:</strong> razones que apoyan la tesis
          (datos, ejemplos, citas, hechos).<br>
        • <strong>Conclusión:</strong> reafirma la tesis con las ideas principales.<br><br>
        <strong>Tipos de argumentos:</strong><br>
        • <strong>De autoridad:</strong> citar a expertos ("Según los estudios...").<br>
        • <strong>De ejemplo:</strong> ilustrar con casos concretos.<br>
        • <strong>De causa-efecto:</strong> relacionar hechos.<br>
        • <strong>De comparación:</strong> comparar situaciones similares.
      `
    },

    puzzles: [
      {
        id: 'sa6_arg_p1',
        title: '🌟 Enigma de Galadriel — Tesis',
        question: 'En un texto argumentativo, ¿qué es la <strong>tesis</strong>?',
        type: 'multiple',
        saKey: 'sa6',
        options: [
          { text: 'A) Una narración de hechos pasados', correct: false },
          { text: 'B) La opinión o idea principal que se defiende', correct: true },
          { text: 'C) Los ejemplos que ilustran el tema', correct: false },
          { text: 'D) El resumen final del texto', correct: false }
        ],
        feedback_correct: '¡Correcto! La tesis es la idea central que el autor quiere defender y demostrar.',
        feedback_wrong: 'La tesis es la idea principal, lo que el autor quiere demostrar. ¿Cuál lo describe mejor?'
      },
      {
        id: 'sa6_arg_p2',
        title: '🌟 Enigma de Galadriel — Argumentos',
        question: '"Según estudios de la Universidad de Gondor, el 90% de los hobbits son excelentes cocineros." Este argumento es de tipo...',
        type: 'multiple',
        saKey: 'sa6',
        options: [
          { text: 'A) De ejemplo, porque pone un caso concreto', correct: false },
          { text: 'B) De comparación, porque compara dos situaciones', correct: false },
          { text: 'C) De autoridad, porque cita una fuente experta', correct: true },
          { text: 'D) De causa-efecto, porque relaciona causas y consecuencias', correct: false }
        ],
        feedback_correct: '¡Exacto! Citar una institución o estudio ("Según...") es un argumento de autoridad.',
        feedback_wrong: '¿Cuándo dices "según los expertos" o "según estudios", qué tipo de autoridad invocas?'
      },
      {
        id: 'sa6_arg_p3',
        title: '🌟 Enigma Final de Galadriel',
        question: '¿Cuál es la diferencia principal entre un texto expositivo y uno argumentativo?',
        type: 'multiple',
        saKey: 'sa6',
        options: [
          { text: 'A) El expositivo usa imágenes y el argumentativo no', correct: false },
          { text: 'B) El expositivo informa objetivamente; el argumentativo defiende una opinión', correct: true },
          { text: 'C) El argumentativo es siempre más corto', correct: false },
          { text: 'D) No hay diferencia real entre ambos', correct: false }
        ],
        feedback_correct: '¡Perfecto! El expositivo informa sin opinar; el argumentativo defiende una postura.',
        feedback_wrong: 'Piensa: ¿cuál presenta hechos objetivos y cuál intenta convencerte de algo?'
      }
    ]
  },

  sala_conectores: {
    nombre: "Los Mallorn de Haldir",
    descripcion: "Haldir conecta los árboles mallorn igual que los conectores unen las ideas...",
    gandalf_entrada: [
      "Haldir conoce el bosque como nadie, y sabe que los árboles se conectan por las raíces.",
      "Los CONECTORES DISCURSIVOS son palabras o expresiones que unen ideas y muestran la relación lógica entre ellas.",
      "Los hay aditivos (además, también), adversativos (pero, sin embargo), causales (porque, ya que) y consecutivos (por tanto, así que).",
      "También hay ordenadores del discurso: primero, luego, finalmente.",
      "¡Usa los conectores correctos para hilar tus ideas como los árboles del bosque!"
    ],

    pergamino_teoria: {
      id: 'sa6_pergamino_conectores',
      titulo: '🌲 Los Conectores Discursivos',
      texto: `
        <strong>¿Qué son los conectores discursivos?</strong><br><br>
        Los <em>conectores</em> unen ideas y muestran la relación lógica entre oraciones o párrafos.<br><br>
        <strong>Tipos:</strong><br>
        • <strong>Aditivos</strong> (suman ideas): además, también, igualmente, asimismo.<br>
        • <strong>Adversativos</strong> (oponen ideas): pero, sin embargo, no obstante, aunque.<br>
        • <strong>Causales</strong> (expresan causa): porque, ya que, puesto que, debido a.<br>
        • <strong>Consecutivos</strong> (expresan consecuencia): por tanto, así que, en consecuencia, de modo que.<br>
        • <strong>Concesivos</strong> (reconocen pero no ceden): aunque, a pesar de, pese a.<br>
        • <strong>Ordenadores</strong> (organizan el texto): primero, luego, a continuación, finalmente.
      `
    },

    puzzles: [
      {
        id: 'sa6_con_p1',
        title: '🌲 Enigma de Haldir — Conectores',
        question: '"Frodo estaba cansado; <u>sin embargo</u>, siguió caminando." El conector subrayado es...',
        type: 'multiple',
        saKey: 'sa6',
        options: [
          { text: 'A) Aditivo, porque suma ideas', correct: false },
          { text: 'B) Adversativo, porque opone ideas contrarias', correct: true },
          { text: 'C) Causal, porque indica la causa', correct: false },
          { text: 'D) Consecutivo, porque indica la consecuencia', correct: false }
        ],
        feedback_correct: '¡Correcto! "Sin embargo" opone el cansancio con continuar caminando.',
        feedback_wrong: 'El cansancio y seguir caminando se contradicen. ¿Qué conector une ideas contrarias?'
      },
      {
        id: 'sa6_con_p2',
        title: '🌲 Enigma de Haldir — Relaciones',
        question: '¿Qué conector usarías en: "Llevaba el anillo; ___ le daba mucho miedo"?',
        type: 'multiple',
        saKey: 'sa6',
        options: [
          { text: 'A) "además", que añade información', correct: false },
          { text: 'B) "finalmente", que ordena el texto', correct: false },
          { text: 'C) "por tanto", que expresa consecuencia', correct: false },
          { text: 'D) "aunque", que expresa concesión', correct: true }
        ],
        feedback_correct: '¡Exacto! "Llevaba el anillo aunque le daba mucho miedo" expresa que lo hacía a pesar del miedo.',
        feedback_wrong: 'El miedo es un obstáculo que no le impidió llevarlo. ¿Qué conector expresa "a pesar de"?'
      }
    ]
  },

  sala_sinonimos: {
    nombre: "La Pradera del Lingüista",
    descripcion: "El lingüista élfico Celeborn conoce todas las palabras y sus equivalentes...",
    gandalf_entrada: [
      "Celeborn ha estudiado el idioma durante miles de años.",
      "Los SINÓNIMOS son palabras con significado igual o similar: valiente / intrépido / osado.",
      "Los ANTÓNIMOS son palabras con significado contrario: valiente / cobarde, luz / oscuridad.",
      "Usar sinónimos evita la repetición y enriquece el vocabulario.",
      "¡Resuelve los enigmas lingüísticos de Celeborn!"
    ],

    pergamino_teoria: {
      id: 'sa6_pergamino_sinonimos',
      titulo: '🌸 Sinónimos y Antónimos',
      texto: `
        <strong>Sinónimos</strong><br><br>
        Los <em>sinónimos</em> son palabras con el mismo o similar significado.<br>
        • Ejemplos: feliz = alegre = contento; caminar = andar = marchar.<br>
        • Nunca son exactamente iguales: el contexto determina cuál usar.<br>
        • Ayudan a evitar repeticiones en el texto.<br><br>
        <strong>Antónimos</strong><br><br>
        Los <em>antónimos</em> son palabras con significado contrario u opuesto.<br>
        • Ejemplos: bueno ↔ malo, grande ↔ pequeño, rápido ↔ lento.<br>
        • Pueden formarse añadiendo prefijos negativos: feliz → infeliz, posible → imposible.<br><br>
        <strong>Familias léxicas:</strong> palabras que comparten la misma raíz:
        mar → marino, submarino, marítimo, maremoto.
      `
    },

    puzzles: [
      {
        id: 'sa6_sin_p1',
        title: '🌸 Enigma de Celeborn — Sinónimos',
        question: '¿Cuál es un sinónimo de la palabra <strong>"valiente"</strong>?',
        type: 'multiple',
        saKey: 'sa6',
        options: [
          { text: 'A) cobarde', correct: false },
          { text: 'B) intrépido', correct: true },
          { text: 'C) débil', correct: false },
          { text: 'D) miedoso', correct: false }
        ],
        feedback_correct: '¡Correcto! "Intrépido" significa valiente, audaz, sin miedo.',
        feedback_wrong: '¿Cuál de las opciones tiene un significado parecido a "valiente"? Piensa en sinónimos.'
      },
      {
        id: 'sa6_sin_p2',
        title: '🌸 Enigma de Celeborn — Antónimos',
        question: '¿Cuál es el antónimo de la palabra <strong>"oscuridad"</strong>?',
        type: 'multiple',
        saKey: 'sa6',
        options: [
          { text: 'A) noche', correct: false },
          { text: 'B) sombra', correct: false },
          { text: 'C) tiniebla', correct: false },
          { text: 'D) luz', correct: true }
        ],
        feedback_correct: '¡Exacto! "Luz" es el antónimo perfecto de "oscuridad".',
        feedback_wrong: 'Un antónimo es lo contrario. ¿Qué es lo opuesto a la oscuridad?'
      },
      {
        id: 'sa6_sin_p3',
        title: '🌸 Enigma de Celeborn — Prefijos',
        question: '¿Cuál es el antónimo de "posible" formado con un prefijo negativo?',
        type: 'multiple',
        saKey: 'sa6',
        options: [
          { text: 'A) desposible', correct: false },
          { text: 'B) imposible', correct: true },
          { text: 'C) exposible', correct: false },
          { text: 'D) inposible', correct: false }
        ],
        feedback_correct: '¡Perfecto! El prefijo "im-" (ante p y b) forma el antónimo: imposible.',
        feedback_wrong: 'El prefijo negativo "in-" cambia a "im-" ante b y p. ¿Cuál es correcto?'
      }
    ]
  },

  puerta_final: {
    gandalf_bloqueada: [
      "Los Elfos de Lothlórien no te dejarán pasar todavía.",
      "Completa todos los enigmas del bosque dorado para continuar.",
      "¡Visita a Galadriel, a Haldir y a Celeborn!"
    ],
    gandalf_abierta: [
      "¡Galadriel te bendice con su luz! Has demostrado una sabiduría extraordinaria.",
      "El camino hacia las llanuras de Rohan está abierto.",
      "Anota tu código, pues el viaje aún es largo.",
      "¡Los Rohirrim te esperan en las grandes llanuras!"
    ]
  }
};
