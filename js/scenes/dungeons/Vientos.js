/**
 * Vientos.js — SA3: Texto descriptivo | Adverbios | Uso de B y V
 */
class VientosScene extends BaseDungeonScene {
  constructor() { super('Vientos'); }

  get DUNGEON_CONFIG() {
    return {
      saKey:        'sa3',
      dungeonId:    'vientos',
      nextDungeon:  'rivendell',
      dungeonName:  'Cima de los Vientos',
      locationName: '⛰️ Cima de los Vientos',

      // ── Colores: gris-azul de montaña ────────────────────────────────────
      bgColor:   0x1a1f2e,
      floorA:    0x4a5568,
      floorB:    0x3d4a5c,
      wallDark:  0x2d3748,
      wallLight: 0x718096,
      npcColor:  0x63b3ed,
      npcBorder: 0xe2e8f0,

      startCol: 11, startRow: 15,
      collisionMap: STD_COLLISION_MAP,

      intro: SA3_DATA.gandalf_intro,

      saData: {
        sala_descriptivo: SA3_DATA.sala_descriptivo,
        sala_adverbios:   SA3_DATA.sala_adverbios,
        sala_byv:         SA3_DATA.sala_byv
      },

      puertaBlockedText: SA3_DATA.puerta_final.gandalf_bloqueada,
      puertaOpenText:    SA3_DATA.puerta_final.gandalf_abierta,

      interactables: [
        { col: 6,  row: 5,  key: 'npc1', emoji: '🗺️', label: 'Explorador\nArador',   salaKey: 'sala_descriptivo' },
        { col: 17, row: 5,  key: 'npc2', emoji: '🗼', label: 'Centinela\nBárbol',     salaKey: 'sala_adverbios'   },
        { col: 11, row: 10, key: 'npc3', emoji: '🗿', label: 'Erudito\nCelebrimbor', salaKey: 'sala_byv'         },
        { col: 11, row: 16, isSalida: true, label: 'Rivendell →' }
      ]
    };
  }
}
