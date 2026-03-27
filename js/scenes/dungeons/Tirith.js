/**
 * Tirith.js — SA8: Texto poético | Figuras retóricas | Análisis sintáctico
 */
class TirithScene extends BaseDungeonScene {
  constructor() { super('Tirith'); }

  get DUNGEON_CONFIG() {
    return {
      saKey:        'sa8',
      dungeonId:    'tirith',
      nextDungeon:  'destino',
      dungeonName:  'Minas Tirith',
      locationName: '🏰 Minas Tirith',

      // ── Colores: blanco-plata de la ciudad ───────────────────────────────
      bgColor:   0x1a1a2e,
      floorA:    0x8a8a9a,
      floorB:    0x7a7a8a,
      wallDark:  0x4a4a5a,
      wallLight: 0xb0b0c0,
      npcColor:  0xdce8f0,
      npcBorder: 0x8080a0,

      startCol: 11, startRow: 15,
      collisionMap: STD_COLLISION_MAP,

      intro: SA8_DATA.gandalf_intro,

      saData: {
        sala_poetico:  SA8_DATA.sala_poetico,
        sala_figuras:  SA8_DATA.sala_figuras,
        sala_sintaxis: SA8_DATA.sala_sintaxis
      },

      puertaBlockedText: SA8_DATA.puerta_final.gandalf_bloqueada,
      puertaOpenText:    SA8_DATA.puerta_final.gandalf_abierta,

      interactables: [
        { col: 6,  row: 5,  key: 'npc1', emoji: '📜', label: 'Faramir\nPoeta',          salaKey: 'sala_poetico'  },
        { col: 17, row: 5,  key: 'npc2', emoji: '🗡️', label: 'Éowyn\nHospital',         salaKey: 'sala_figuras'  },
        { col: 11, row: 10, key: 'npc3', emoji: '⚖️', label: 'Denethor\nArchivo Real',  salaKey: 'sala_sintaxis' },
        { col: 11, row: 16, isSalida: true, label: 'Monte del\nDestino →' }
      ]
    };
  }
}
