/**
 * sa1_comarca.js
 * Contenidos de la Situación de Aprendizaje 1 — La Comarca
 * SA 1: Entrevista | Acentuación | Preposiciones y conjunciones
 *
 * ⭐ ESTE ARCHIVO ES EL QUE DEBES EDITAR para cambiar preguntas y textos
 */

const SA1_DATA = {
  saKey: 'sa1',
  dungeonName: 'La Comarca',
  dungeonEmoji: '🌿',

  // ─── INTRODUCCIÓN DE GANDALF ──────────────────────────────────────────────
  gandalf_intro: [
    "¡Ah, bienvenido a La Comarca, joven Hobbit! Soy Gandalf el Gris, y seré tu guía en este gran viaje.",
    "La Comarca es el lugar más tranquilo de la Tierra Media... pero hoy empieza tu aventura.",
    "Para partir hacia el este, primero deberás demostrar que dominas el lenguaje. La palabra es tu espada más poderosa.",
    "En esta primera etapa aprenderás sobre la ENTREVISTA, la ACENTUACIÓN y las PREPOSICIONES Y CONJUNCIONES.",
    "Explora La Comarca. Habla con los objetos que encuentres. Resuelve los enigmas. ¡El camino te espera!"
  ],

  // ─── SALA 1: TIPOLOGÍA TEXTUAL — LA ENTREVISTA ────────────────────────────
  sala_entrevista: {
    nombre: "La Taberna del Hobbit",
    descripcion: "Una acogedora taberna donde los hobbits intercambian historias...",
    gandalf_entrada: [
      "Esta es La Taberna del Hobbit. Aquí los hobbits se entrevistan unos a otros.",
      "La ENTREVISTA es un tipo de texto dialogado en el que un entrevistador hace preguntas a un entrevistado para obtener información.",
      "Tiene una estructura clara: presentación, desarrollo con preguntas y respuestas, y cierre.",
      "Lee el pergamino sobre la pared y responde a los enigmas para poder continuar."
    ],

    // PERGAMINO TEÓRICO (objeto interactivo: la pared con el pergamino)
    pergamino_teoria: {
      id: 'sa1_pergamino_entrevista',
      titulo: '📜 El Arte de la Entrevista',
      texto: `
        <strong>¿Qué es una entrevista?</strong><br><br>
        La <em>entrevista</em> es un tipo de texto dialogado donde una persona (entrevistador)
        hace preguntas a otra (entrevistado) para obtener información.<br><br>
        <strong>Estructura:</strong><br>
        • <strong>Presentación:</strong> se presenta al entrevistado y el tema.<br>
        • <strong>Desarrollo:</strong> preguntas y respuestas organizadas.<br>
        • <strong>Cierre:</strong> agradecimiento y conclusión.<br><br>
        <strong>Características:</strong><br>
        • Las preguntas van introducidas por el nombre del entrevistador.<br>
        • Las respuestas van precedidas por el nombre del entrevistado.<br>
        • Se usan signos de interrogación y exclamación.<br>
        • El lenguaje puede ser formal o informal según el contexto.
      `
    },

    // PUZZLES DE ESTA SALA
    puzzles: [
      {
        id: 'sa1_ent_p1',
        title: '🍺 Enigma de la Taberna — La Entrevista',
        question: 'El señor Bolsón ha escrito una entrevista en la pizarra, pero ha mezclado las partes. ¿Cuál es la parte de la entrevista que <strong>presenta al entrevistado</strong> y explica el tema?',
        type: 'multiple',
        saKey: 'sa1',
        options: [
          { text: 'A) El cierre, donde se despide al entrevistado', correct: false },
          { text: 'B) La presentación, al inicio de la entrevista', correct: true },
          { text: 'C) El desarrollo, con todas las preguntas', correct: false },
          { text: 'D) El titular del periódico', correct: false }
        ],
        feedback_correct: '¡Exacto! La presentación es el inicio donde se introduce al entrevistado y el tema.',
        feedback_wrong: 'Piénsalo bien... ¿en qué parte presentamos a alguien por primera vez?'
      },
      {
        id: 'sa1_ent_p2',
        title: '🍺 Enigma de la Taberna — Preguntas',
        question: 'En una entrevista, ¿cómo se señala visualmente quién hace la pregunta y quién responde?',
        type: 'multiple',
        saKey: 'sa1',
        options: [
          { text: 'A) Con asteriscos (*) antes de cada turno', correct: false },
          { text: 'B) Poniendo el nombre de cada persona antes de lo que dice', correct: true },
          { text: 'C) Escribiendo todo en mayúsculas', correct: false },
          { text: 'D) Con puntos suspensivos al final', correct: false }
        ],
        feedback_correct: '¡Muy bien! Se escribe el nombre (Entrevistador o el nombre real) antes de cada intervención.',
        feedback_wrong: '¿Cómo distingues en un guion de teatro quién habla?'
      }
    ]
  },

  // ─── SALA 2: ORTOGRAFÍA — ACENTUACIÓN ────────────────────────────────────
  sala_acentuacion: {
    nombre: "El Molino de Viento",
    descripcion: "El viejo molino donde el viejo Gaffer cuida sus palabras...",
    gandalf_entrada: [
      "¡El Molino de Viento! Aquí el viejo Gaffer guarda los secretos de la acentuación.",
      "Las palabras en español llevan tilde (´) según unas reglas concretas. ¡Escúchalas bien!",
      "Las palabras AGUDAS llevan tilde si terminan en vocal, n o s. Ejemplo: camión, café.",
      "Las LLANAS llevan tilde si NO terminan en vocal, n o s. Ejemplo: árbol, fácil.",
      "Las ESDRÚJULAS SIEMPRE llevan tilde. Ejemplo: música, pájaro.",
      "¡Ahora resuelve los enigmas del molino!"
    ],

    puzzles: [
      {
        id: 'sa1_ort_p1',
        title: '⚙️ Enigma del Molino — Agudas',
        question: '¿Cuál de estas palabras es AGUDA y lleva tilde?',
        type: 'multiple',
        saKey: 'sa1',
        options: [
          { text: 'A) casa', correct: false },
          { text: 'B) árbol', correct: false },
          { text: 'C) camión', correct: true },
          { text: 'D) música', correct: false }
        ],
        feedback_correct: '¡Correcto! "Camión" es aguda (acento en la última sílaba: ca-MIÓN) y termina en N, así que lleva tilde.',
        feedback_wrong: 'Recuerda: las agudas llevan tilde cuando terminan en vocal, N o S.'
      },
      {
        id: 'sa1_ort_p2',
        title: '⚙️ Enigma del Molino — Esdrújulas',
        question: 'Las palabras <strong>esdrújulas</strong>...',
        type: 'multiple',
        saKey: 'sa1',
        options: [
          { text: 'A) Nunca llevan tilde', correct: false },
          { text: 'B) Solo llevan tilde si terminan en vocal', correct: false },
          { text: 'C) Siempre llevan tilde, sin excepciones', correct: true },
          { text: 'D) Solo llevan tilde si terminan en consonante', correct: false }
        ],
        feedback_correct: '¡Perfecto! Las esdrújulas SIEMPRE llevan tilde. Ejemplos: pájaro, música, cómodo.',
        feedback_wrong: 'Recuerda la regla de oro: esdrújulas → tilde SIEMPRE.'
      },
      {
        id: 'sa1_ort_p3',
        title: '⚙️ Enigma del Molino — Clasifica',
        question: 'La palabra "ÁRBOL": ¿qué tipo de palabra es y por qué lleva tilde?',
        type: 'multiple',
        saKey: 'sa1',
        options: [
          { text: 'A) Es aguda y termina en L, no debería llevar tilde', correct: false },
          { text: 'B) Es llana y termina en L (consonante que no es N ni S), por eso lleva tilde', correct: true },
          { text: 'C) Es esdrújula, siempre lleva tilde', correct: false },
          { text: 'D) Es llana y termina en vocal, por eso lleva tilde', correct: false }
        ],
        feedback_correct: '¡Excelente! "Árbol" es llana (ÁR-bol), y como termina en L (no en vocal, N ni S), necesita tilde.',
        feedback_wrong: 'Divide la palabra: ÁR-bol. El acento cae en la penúltima sílaba → es llana. ¿Y termina en vocal, N o S?'
      }
    ]
  },

  // ─── SALA 3: GRAMÁTICA — PREPOSICIONES Y CONJUNCIONES ────────────────────
  sala_gramatica: {
    nombre: "La Biblioteca de Bag End",
    descripcion: "La legendaria biblioteca de Bilbo Bolsón, llena de mapas y libros...",
    gandalf_entrada: [
      "¡La biblioteca de Bag End! Bilbo Bolsón guardaba aquí sus secretos gramaticales.",
      "Hoy aprenderás sobre las PREPOSICIONES y las CONJUNCIONES.",
      "Las PREPOSICIONES son palabras invariables que unen elementos y expresan relaciones: a, ante, bajo, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, sobre, tras...",
      "Las CONJUNCIONES también unen palabras u oraciones: coordinantes (y, o, pero, sino...) y subordinantes (que, porque, si, cuando...).",
      "¡Demuestra que has aprendido resolviendo los enigmas de Bilbo!"
    ],

    puzzles: [
      {
        id: 'sa1_gram_p1',
        title: '📚 Enigma de Bag End — Preposiciones',
        question: 'En la frase "Frodo viajó <u>hacia</u> el Monte del Destino", la palabra subrayada es...',
        type: 'multiple',
        saKey: 'sa1',
        options: [
          { text: 'A) Una conjunción, porque une dos oraciones', correct: false },
          { text: 'B) Una preposición, porque indica dirección y une elementos', correct: true },
          { text: 'C) Un adverbio, porque modifica al verbo', correct: false },
          { text: 'D) Un determinante, porque acompaña al nombre', correct: false }
        ],
        feedback_correct: '¡Correcto! "Hacia" es una preposición que indica dirección.',
        feedback_wrong: '¿Qué función cumple la palabra "hacia"? ¿Une oraciones o indica una relación entre elementos?'
      },
      {
        id: 'sa1_gram_p2',
        title: '📚 Enigma de Bag End — Conjunciones',
        question: '"Gandalf <u>y</u> Frodo partieron juntos." La palabra subrayada es una conjunción...',
        type: 'multiple',
        saKey: 'sa1',
        options: [
          { text: 'A) Adversativa, porque expresa contradicción', correct: false },
          { text: 'B) Disyuntiva, porque expresa elección', correct: false },
          { text: 'C) Copulativa, porque une elementos sumándolos', correct: true },
          { text: 'D) Causal, porque expresa causa', correct: false }
        ],
        feedback_correct: '¡Muy bien! "Y" es una conjunción copulativa: une Gandalf + Frodo sumando los dos.',
        feedback_wrong: '"Y" une dos elementos sin oponer ni elegir entre ellos. ¿Cómo se llama ese tipo?'
      },
      {
        id: 'sa1_gram_p3',
        title: '📚 Enigma Final de Bag End',
        question: 'Identifica la preposición en esta frase: "El anillo fue forjado <u>en</u> el fuego del Monte del Destino"',
        type: 'multiple',
        saKey: 'sa1',
        options: [
          { text: 'A) "fue" — es el verbo principal', correct: false },
          { text: 'B) "en" — indica lugar (dentro del fuego)', correct: true },
          { text: 'C) "del" — es un artículo determinado', correct: false },
          { text: 'D) "fuego" — es un sustantivo', correct: false }
        ],
        feedback_correct: '¡Exacto! "En" es la preposición que indica el lugar donde fue forjado el anillo.',
        feedback_wrong: 'Busca la palabra invariable que indica una relación (lugar, tiempo, modo...).'
      }
    ]
  },

  // ─── PUERTA FINAL — Para salir de la Comarca ─────────────────────────────
  puerta_final: {
    gandalf_bloqueada: [
      "La puerta hacia Bree está sellada con magia antigua.",
      "Para abrirla, debes haber resuelto todos los enigmas de La Comarca.",
      "¡Vuelve a las salas y completa tu formación, joven Hobbit!"
    ],
    gandalf_abierta: [
      "¡Lo has conseguido! Has dominado la entrevista, la acentuación y las preposiciones.",
      "La puerta se abre ante ti... Bree te espera.",
      "Recuerda anotar tu código para continuar el viaje en la próxima sesión.",
      "¡El camino sigue, y yo caminaré contigo!"
    ]
  }
};
