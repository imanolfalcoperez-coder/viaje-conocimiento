/**
 * Moria.js — SA5: Texto expositivo | Los pronombres | Uso de G y J
 */
class MoriaScene extends BaseDungeonScene {
  constructor() { super('Moria'); }

  get DUNGEON_CONFIG() {
    return {
      saKey:        'sa5',
      dungeonId:    'moria',
      nextDungeon:  'lorien',
      dungeonName:  'Minas de Moria',
      locationName: '⛏️ Minas de Moria',

      // ── Colores: oscuro/piedra de mina ───────────────────────────────────
      bgColor:   0x0d0d0d,
      floorA:    0x2a2a2a,
      floorB:    0x1f1f1f,
      wallDark:  0x111111,
      wallLight: 0x444444,
      npcColor:  0x8b6914,
      npcBorder: 0xff8c00,

      startCol: 11, startRow: 15,
      collisionMap: STD_COLLISION_MAP,

      intro: SA5_DATA.gandalf_intro,

      saData: {
        sala_expositivo:  SA5_DATA.sala_expositivo,
        sala_pronombres:  SA5_DATA.sala_pronombres,
        sala_gyj:         SA5_DATA.sala_gyj
      },

      puertaBlockedText: SA5_DATA.puerta_final.gandalf_bloqueada,
      puertaOpenText:    SA5_DATA.puerta_final.gandalf_abierta,

      interactables: [
        { col: 6,  row: 5,  key: 'npc1', emoji: '📜', label: 'Escribano\nOri',       salaKey: 'sala_expositivo' },
        { col: 17, row: 5,  key: 'npc2', emoji: '👑', label: 'Rey\nBalin',            salaKey: 'sala_pronombres' },
        { col: 11, row: 10, key: 'npc3', emoji: '⚒️', label: 'Gimli\nhijo de Glóin', salaKey: 'sala_gyj'        },
        { col: 11, row: 16, isSalida: true, label: 'Lothlórien →' }
      ]
    };
  }
}
