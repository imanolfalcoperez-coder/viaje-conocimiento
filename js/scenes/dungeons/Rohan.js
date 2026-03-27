/**
 * Rohan.js — SA7: Texto teatral | Tiempos del pasado | Tilde diacrítica
 */
class RohanScene extends BaseDungeonScene {
  constructor() { super('Rohan'); }

  get DUNGEON_CONFIG() {
    return {
      saKey:        'sa7',
      dungeonId:    'rohan',
      nextDungeon:  'tirith',
      dungeonName:  'Rohan',
      locationName: '🐴 Rohan',

      // ── Colores: dorado-marrón de las llanuras ───────────────────────────
      bgColor:   0x1f1a0d,
      floorA:    0x6b5e2a,
      floorB:    0x5a4f23,
      wallDark:  0x3d3000,
      wallLight: 0x8b7a30,
      npcColor:  0xd4a017,
      npcBorder: 0xffa500,

      startCol: 11, startRow: 15,
      collisionMap: STD_COLLISION_MAP,

      intro: SA7_DATA.gandalf_intro,

      saData: {
        sala_teatral:  SA7_DATA.sala_teatral,
        sala_tiempos:  SA7_DATA.sala_tiempos,
        sala_tilde:    SA7_DATA.sala_tilde
      },

      puertaBlockedText: SA7_DATA.puerta_final.gandalf_bloqueada,
      puertaOpenText:    SA7_DATA.puerta_final.gandalf_abierta,

      interactables: [
        { col: 6,  row: 5,  key: 'npc1', emoji: '🎭', label: 'Rey Théoden\nSalón Dorado', salaKey: 'sala_teatral' },
        { col: 17, row: 5,  key: 'npc2', emoji: '🐴', label: 'Bardo\nÉomund',              salaKey: 'sala_tiempos' },
        { col: 11, row: 10, key: 'npc3', emoji: '⚔️', label: 'Éowyn\nJardines',            salaKey: 'sala_tilde'   },
        { col: 11, row: 16, isSalida: true, label: 'Minas Tirith →' }
      ]
    };
  }
}
