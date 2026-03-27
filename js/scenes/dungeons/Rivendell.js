/**
 * Rivendell.js — SA4: Texto instructivo | Los verbos | Uso de H
 */
class RivendellScene extends BaseDungeonScene {
  constructor() { super('Rivendell'); }

  get DUNGEON_CONFIG() {
    return {
      saKey:        'sa4',
      dungeonId:    'rivendell',
      nextDungeon:  'moria',
      dungeonName:  'Rivendell',
      locationName: '🌟 Rivendell',

      // ── Colores: azul-plata élfico ────────────────────────────────────────
      bgColor:   0x0d1a2e,
      floorA:    0x2a4a6b,
      floorB:    0x1e3a5a,
      wallDark:  0x1a2a3d,
      wallLight: 0x4a7aab,
      npcColor:  0x90c4e8,
      npcBorder: 0xc9e8ff,

      startCol: 11, startRow: 15,
      collisionMap: STD_COLLISION_MAP,

      intro: SA4_DATA.gandalf_intro,

      saData: {
        sala_instructivo: SA4_DATA.sala_instructivo,
        sala_verbos:      SA4_DATA.sala_verbos,
        sala_hache:       SA4_DATA.sala_hache
      },

      puertaBlockedText: SA4_DATA.puerta_final.gandalf_bloqueada,
      puertaOpenText:    SA4_DATA.puerta_final.gandalf_abierta,

      interactables: [
        { col: 6,  row: 5,  key: 'npc1', emoji: '📚', label: 'Lord Elrond\nBiblioteca',  salaKey: 'sala_instructivo' },
        { col: 17, row: 5,  key: 'npc2', emoji: '🌿', label: 'Arwen\nJardines',           salaKey: 'sala_verbos'      },
        { col: 11, row: 10, key: 'npc3', emoji: '🗺️', label: 'Archivista\nGlorfindel',   salaKey: 'sala_hache'       },
        { col: 11, row: 16, isSalida: true, label: 'Minas de\nMoria →' }
      ]
    };
  }
}
