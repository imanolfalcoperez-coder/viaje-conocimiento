/**
 * Bree.js — SA2: Texto narrativo | Sustantivos y adjetivos | Signos de puntuación
 */
class BreeScene extends BaseDungeonScene {
  constructor() { super('Bree'); }

  get DUNGEON_CONFIG() {
    return {
      saKey:        'sa2',
      dungeonId:    'bree',
      nextDungeon:  'vientos',
      dungeonName:  'Bree',
      locationName: '🏙️ Bree',

      // ── Colores: tonos cálidos de posada ────────────────────────────────
      bgColor:   0x2c1a0e,
      floorA:    0x6b4226,
      floorB:    0x7a5030,
      wallDark:  0x3d2200,
      wallLight: 0x8b5e2a,
      npcColor:  0xc87941,
      npcBorder: 0xffd700,

      startCol: 11, startRow: 15,
      collisionMap: STD_COLLISION_MAP,

      intro: SA2_DATA.gandalf_intro,

      saData: {
        sala_narrativo:  SA2_DATA.sala_narrativo,
        sala_sustantivos: SA2_DATA.sala_sustantivos,
        sala_puntuacion: SA2_DATA.sala_puntuacion
      },

      puertaBlockedText: SA2_DATA.puerta_final.gandalf_bloqueada,
      puertaOpenText:    SA2_DATA.puerta_final.gandalf_abierta,

      interactables: [
        { col: 6,  row: 5,  key: 'npc1', emoji: '🍺', label: 'Mantecona\nTabernero',      salaKey: 'sala_narrativo'   },
        { col: 17, row: 5,  key: 'npc2', emoji: '⚒️', label: 'Herrero\nde Bree',           salaKey: 'sala_sustantivos' },
        { col: 11, row: 10, key: 'npc3', emoji: '📋', label: 'Escribano\nRandolph',         salaKey: 'sala_puntuacion'  },
        { col: 11, row: 16, isSalida: true, label: 'Cima de\nlos Vientos →' }
      ]
    };
  }
}
