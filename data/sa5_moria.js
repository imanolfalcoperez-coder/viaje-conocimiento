/**
 * sa5_moria.js
 * Contenidos de la Situación de Aprendizaje 5 — Minas de Moria
 * SA 5: Texto expositivo | Los pronombres | Uso de G y J
 *
 * ⭐ ESTE ARCHIVO ES EL QUE DEBES EDITAR para cambiar preguntas y textos
 */

const SA5_DATA = {
  saKey: 'sa5',
  dungeonName: 'Minas de Moria',
  dungeonEmoji: '⛏️',

  gandalf_intro: [
    "Las Minas de Moria... aquí los Enanos extrajeron mithril durante siglos.",
    "En estas oscuras profundidades aprenderás el TEXTO EXPOSITIVO.",
    "También dominarás LOS PRONOMBRES y el uso correcto de la G y la J.",
    "Busca al historiador Ori en los archivos, al maestro Balin en la sala del trono y al experto Gimli en la galería.",
    "¡Avanza con cautela, que en Moria las palabras son tan valiosas como el mithril!"
  ],

  sala_expositivo: {
    nombre: "Los Archivos de Ori",
    descripcion: "El escribano Ori registró todo el conocimiento de los Enanos de Moria...",
    gandalf_entrada: [
      "Los archivos de Ori guardan miles de textos expositivos sobre la historia de Moria.",
      "El TEXTO EXPOSITIVO transmite información de forma objetiva y ordenada sobre un tema.",
      "Su estructura: introducción (presenta el tema), desarrollo (explica y argumenta) y conclusión.",
      "No expresa opiniones; usa vocabulario preciso y técnico.",
      "¡Lee el pergamino y resuelve los enigmas de Ori!"
    ],

    pergamino_teoria: {
      id: 'sa5_pergamino_expositivo',
      titulo: '📜 El Texto Expositivo',
      texto: `
        <strong>¿Qué es un texto expositivo?</strong><br><br>
        El <em>texto expositivo</em> informa sobre un tema de forma <strong>objetiva y ordenada</strong>,
        sin expresar opiniones personales.<br><br>
        <strong>Estructura:</strong><br>
        • <strong>Introducción:</strong> presenta el tema del que se va a hablar.<br>
        • <strong>Desarrollo:</strong> explica el tema con datos, ejemplos y definiciones.<br>
        • <strong>Conclusión:</strong> resume las ideas principales.<br><br>
        <strong>Características:</strong><br>
        • Lenguaje objetivo y preciso (vocabulario técnico).<br>
        • Uso de conectores explicativos: "es decir", "esto es", "por ejemplo".<br>
        • Oraciones afirmativas, claras y directas.<br><br>
        <strong>Ejemplos:</strong> artículos de enciclopedia, libros de texto, documentales.
      `
    },

    puzzles: [
      {
        id: 'sa5_exp_p1',
        title: '⛏️ Enigma de Ori — Expositivo',
        question: '¿Cuál de estos textos es un ejemplo de <strong>texto expositivo</strong>?',
        type: 'multiple',
        saKey: 'sa5',
        options: [
          { text: 'A) "Creo que los dragones son los seres más fascinantes de la Tierra Media."', correct: false },
          { text: 'B) "El mithril es un metal élfico de gran resistencia y ligereza, empleado en cotas de malla."', correct: true },
          { text: 'C) "El dragón rugió y lanzó fuego contra la ciudad mientras los aldeanos huían."', correct: false },
          { text: 'D) "Para forjar mithril: 1. Calienta el metal. 2. Golpea con el martillo."', correct: false }
        ],
        feedback_correct: '¡Exacto! La definición del mithril es objetiva, informativa y usa vocabulario técnico.',
        feedback_wrong: 'Busca el texto que informa objetivamente, sin narrar ni opinar ni dar instrucciones.'
      },
      {
        id: 'sa5_exp_p2',
        title: '⛏️ Enigma de Ori — Conectores',
        question: '¿Cuál de estos conectores es típico del texto expositivo?',
        type: 'multiple',
        saKey: 'sa5',
        options: [
          { text: 'A) "aunque", que expresa concesión', correct: false },
          { text: 'B) "pero", que expresa contrariedad', correct: false },
          { text: 'C) "es decir", que introduce una aclaración', correct: true },
          { text: 'D) "¡ojalá!", que expresa deseo', correct: false }
        ],
        feedback_correct: '¡Perfecto! Los conectores expositivos como "es decir", "esto es", "por ejemplo" aclaran y explican.',
        feedback_wrong: 'Los textos expositivos usan conectores que explican o clarifican. ¿Cuál sirve para aclarar?'
      }
    ]
  },

  sala_pronombres: {
    nombre: "La Sala del Trono de Balin",
    descripcion: "El rey Balin conoce el poder de los pronombres para no repetir palabras...",
    gandalf_entrada: [
      "La sala del trono de Balin... aquí los pronombres reemplazan a los nombres para evitar repeticiones.",
      "Los PRONOMBRES sustituyen a los sustantivos para no repetirlos.",
      "Hay pronombres personales (yo, tú, él...), posesivos (mío, tuyo...), demostrativos (este, ese, aquel...) e indefinidos (alguien, nadie...).",
      "Los pronombres personales de objeto directo (lo, la, los, las) e indirecto (le, les) son especialmente importantes.",
      "¡Resuelve los enigmas del trono real!"
    ],

    pergamino_teoria: {
      id: 'sa5_pergamino_pronombres',
      titulo: '👑 Los Pronombres',
      texto: `
        <strong>¿Qué son los pronombres?</strong><br><br>
        Los <em>pronombres</em> sustituyen a los sustantivos para evitar repeticiones.<br><br>
        <strong>Tipos principales:</strong><br>
        • <strong>Personales:</strong> yo, tú, él/ella, nosotros, vosotros, ellos.<br>
          Obj. directo: me, te, lo/la, nos, os, los/las.<br>
          Obj. indirecto: me, te, le, nos, os, les.<br>
        • <strong>Posesivos:</strong> mío, tuyo, suyo, nuestro, vuestro.<br>
        • <strong>Demostrativos:</strong> este/esta (cerca), ese/esa (lejos medio),
          aquel/aquella (lejos).<br>
        • <strong>Relativos:</strong> que, quien, cuyo, donde, cuando.<br>
        • <strong>Indefinidos:</strong> alguien, nadie, algo, nada, cada uno.<br><br>
        <strong>Ejemplo:</strong> "Frodo cogió el anillo y <em>lo</em> guardó" — "lo" sustituye a "el anillo".
      `
    },

    puzzles: [
      {
        id: 'sa5_pro_p1',
        title: '👑 Enigma de Balin — Pronombres',
        question: 'En la oración "Sam encontró el lembas y <u>lo</u> guardó en la mochila", ¿a qué sustituye el pronombre "lo"?',
        type: 'multiple',
        saKey: 'sa5',
        options: [
          { text: 'A) A "Sam"', correct: false },
          { text: 'B) A "la mochila"', correct: false },
          { text: 'C) Al "lembas"', correct: true },
          { text: 'D) A la acción de "guardar"', correct: false }
        ],
        feedback_correct: '¡Correcto! "Lo" es pronombre de objeto directo y sustituye a "el lembas".',
        feedback_wrong: '¿Qué es lo que Sam guardó en la mochila? Eso es lo que "lo" reemplaza.'
      },
      {
        id: 'sa5_pro_p2',
        title: '👑 Enigma de Balin — Demostrativos',
        question: '¿Cuál es la diferencia entre los demostrativos "este", "ese" y "aquel"?',
        type: 'multiple',
        saKey: 'sa5',
        options: [
          { text: 'A) Solo expresan diferencias de género', correct: false },
          { text: 'B) Expresan la distancia del hablante respecto al objeto', correct: true },
          { text: 'C) Solo se usan en oraciones interrogativas', correct: false },
          { text: 'D) No hay diferencia, son sinónimos', correct: false }
        ],
        feedback_correct: '¡Exacto! "Este" (cerca de mí), "ese" (cerca de ti), "aquel" (lejos de los dos).',
        feedback_wrong: 'Piensa: ¿dices lo mismo señalando algo a 1 metro que algo a 100 metros?'
      },
      {
        id: 'sa5_pro_p3',
        title: '👑 Enigma Final de Balin',
        question: '"<u>Nadie</u> pudo resistir el poder del Anillo." La palabra subrayada es un pronombre...',
        type: 'multiple',
        saKey: 'sa5',
        options: [
          { text: 'A) Personal, porque sustituye a una persona', correct: false },
          { text: 'B) Demostrativo, porque indica distancia', correct: false },
          { text: 'C) Indefinido, porque no especifica a quién se refiere', correct: true },
          { text: 'D) Relativo, porque introduce una oración subordinada', correct: false }
        ],
        feedback_correct: '¡Perfecto! Los pronombres indefinidos (nadie, alguien, nada, algo...) son imprecisos.',
        feedback_wrong: '¿"Nadie" especifica a una persona concreta o es vago e impreciso?'
      }
    ]
  },

  sala_gyj: {
    nombre: "La Galería de Gimli",
    descripcion: "Gimli conoce las reglas de la G y la J grabadas en las paredes de Moria...",
    gandalf_entrada: [
      "¡Gimli, hijo de Glóin! Conoce las reglas de G y J mejor que nadie.",
      "La G suena diferente según la vocal que la sigue: suave (ga, go, gu) o fuerte (ge, gi).",
      "Para el sonido suave ante E e I se escribe GU: guerra, guitarra.",
      "La J siempre suena fuerte, sin importar qué vocal la sigue.",
      "Hay reglas para saber cuándo escribir G y cuándo J. ¡Presta atención!"
    ],

    pergamino_teoria: {
      id: 'sa5_pergamino_gyj',
      titulo: '⚒️ Uso de G y J',
      texto: `
        <strong>La G tiene dos sonidos:</strong><br>
        • Sonido suave (como en "gato"): <em>ga, go, gu, gue, gui</em>.<br>
        • Sonido fuerte (como en "jota"): <em>ge, gi</em>.<br><br>
        <strong>Se escribe G (sonido suave) en:</strong><br>
        • Palabras con <em>gen, geo, gest, geni</em>: gente, geografía, gesto.<br>
        • Verbos en <em>-ger, -gir</em>: coger, dirigir (excepto: tejer, crujir).<br>
        • Palabras con <em>-gio, -gía, -gio</em>: magia, fisiología, cirugía.<br><br>
        <strong>Se escribe J en:</strong><br>
        • Palabras con el sonido fuerte ante <em>a, o, u</em>: jardín, joven, jugar.<br>
        • Formas verbales de <em>traer, decir</em> y similares: traje, dije.<br>
        • Palabras terminadas en <em>-aje, -eje</em>: viaje, mensaje.
      `
    },

    puzzles: [
      {
        id: 'sa5_gyj_p1',
        title: '⚒️ Enigma de Gimli — G o J',
        question: '¿Cuál de estas palabras se escribe con <strong>G</strong>?',
        type: 'multiple',
        saKey: 'sa5',
        options: [
          { text: 'A) _ardín (jardín)', correct: false },
          { text: 'B) _oven (joven)', correct: false },
          { text: 'C) _ente (gente)', correct: true },
          { text: 'D) _ugar (jugar)', correct: false }
        ],
        feedback_correct: '¡Correcto! "Gente" lleva G porque la terminación "gen" se escribe con G.',
        feedback_wrong: 'Recuerda: "gen" y "geo" llevan G. ¿Cuál de las opciones sigue esa regla?'
      },
      {
        id: 'sa5_gyj_p2',
        title: '⚒️ Enigma de Gimli — Terminaciones',
        question: 'Las palabras terminadas en <strong>-aje</strong> (viaje, equipaje...) se escriben con...',
        type: 'multiple',
        saKey: 'sa5',
        options: [
          { text: 'A) G siempre', correct: false },
          { text: 'B) J siempre', correct: true },
          { text: 'C) Depende de la palabra', correct: false },
          { text: 'D) Indistintamente G o J', correct: false }
        ],
        feedback_correct: '¡Exacto! Las palabras en -aje y -eje siempre llevan J: viaje, mensaje, hereje.',
        feedback_wrong: 'Es una regla fija: -aje y -eje llevan siempre la misma letra. ¿Cuál es?'
      }
    ]
  },

  puerta_final: {
    gandalf_bloqueada: [
      "¡El Balrog bloquea el camino! Solo el conocimiento puede apartarlo.",
      "Completa todos los enigmas de las Minas de Moria para seguir adelante.",
      "¡Visita a Ori, a Balin y a Gimli!"
    ],
    gandalf_abierta: [
      "¡Has demostrado más sabiduría que los propios Enanos de Moria!",
      "El puente de Khazad-dûm es tuyo... Lothlórien te espera al otro lado.",
      "Anota tu código antes de cruzar el puente.",
      "¡El bosque dorado de Galadriel te aguarda!"
    ]
  }
};
