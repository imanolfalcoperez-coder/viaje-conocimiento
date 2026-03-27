/**
 * Lorien.js — SA6: Texto argumentativo | Conectores discursivos | Sinónimos y antónimos
 */
class LorienScene extends BaseDungeonScene {
  constructor() { super('Lorien'); }

  get DUNGEON_CONFIG() {
    return {
      saKey:        'sa6',
      dungeonId:    'lorien',
      nextDungeon:  'rohan',
      dungeonName:  'Lothlórien',
      locationName: '🌿 Lothlórien',

      // ── Colores: verde-dorado del bosque élfico ───────────────────────────
      bgColor:   0x0d1f0d,
      floorA:    0x1a3d1a,
      floorB:    0x153515,
      wallDark:  0x0a1a0a,
      wallLight: 0x2d5a2d,
      npcColor:  0x68d391,
      npcBorder: 0xffd700,

      startCol: 11, startRow: 15,
      collisionMap: STD_COLLISION_MAP,

      intro: SA6_DATA.gandalf_intro,

      saData: {
        sala_argumentativo: SA6_DATA.sala_argumentativo,
        sala_conectores:    SA6_DATA.sala_conectores,
        sala_sinonimos:     SA6_DATA.sala_sinonimos
      },

      puertaBlockedText: SA6_DATA.puerta_final.gandalf_bloqueada,
      puertaOpenText:    SA6_DATA.puerta_final.gandalf_abierta,

      interactables: [
        { col: 6,  row: 5,  key: 'npc1', emoji: '🌟', label: 'Galadriel\nEspejo',     salaKey: 'sala_argumentativo' },
        { col: 17, row: 5,  key: 'npc2', emoji: '🌲', label: 'Haldir\nMallorn',        salaKey: 'sala_conectores'    },
        { col: 11, row: 10, key: 'npc3', emoji: '🌸', label: 'Celeborn\nLingüista',    salaKey: 'sala_sinonimos'     },
        { col: 11, row: 16, isSalida: true, label: 'Rohan →' }
      ]
    };
  }
}
