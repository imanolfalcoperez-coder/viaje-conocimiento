/**
 * Destino.js — SA9: Repaso tipología | Repaso ortográfico | Resumen y síntesis
 */
class DestinoScene extends BaseDungeonScene {
  constructor() { super('Destino'); }

  get DUNGEON_CONFIG() {
    return {
      saKey:        'sa9',
      dungeonId:    'destino',
      nextDungeon:  null,          // Fin del viaje — vuelve al mapa
      dungeonName:  'Monte del Destino',
      locationName: '🌋 Monte del Destino',

      // ── Colores: rojo volcánico ───────────────────────────────────────────
      bgColor:   0x1a0000,
      floorA:    0x4a0f0f,
      floorB:    0x3d0c0c,
      wallDark:  0x2d0000,
      wallLight: 0x7a1a1a,
      npcColor:  0xff4500,
      npcBorder: 0xff6600,

      startCol: 11, startRow: 15,
      collisionMap: STD_COLLISION_MAP,

      intro: SA9_DATA.gandalf_intro,

      saData: {
        sala_tipologia:  SA9_DATA.sala_tipologia,
        sala_ortografia: SA9_DATA.sala_ortografia,
        sala_resumen:    SA9_DATA.sala_resumen
      },

      puertaBlockedText: SA9_DATA.puerta_final.gandalf_bloqueada,
      puertaOpenText:    SA9_DATA.puerta_final.gandalf_abierta,

      interactables: [
        { col: 6,  row: 5,  key: 'npc1', emoji: '⚓', label: 'Círdan\nSeñor del Tiempo', salaKey: 'sala_tipologia'  },
        { col: 17, row: 5,  key: 'npc2', emoji: '🔮', label: 'Saruman\nOrtanca',          salaKey: 'sala_ortografia' },
        { col: 11, row: 10, key: 'npc3', emoji: '🔥', label: 'El Maestro\nFinal',          salaKey: 'sala_resumen'    },
        { col: 11, row: 16, isSalida: true, label: '🏆 Final\ndel Viaje' }
      ]
    };
  }

  // Override: al completar el Monte del Destino, pantalla de victoria
  _onSalida() {
    const cfg    = this.DUNGEON_CONFIG;
    const player = window.Game.player;
    const allPuzzles = Object.values(cfg.saData)
      .filter(s => s.puzzles).flatMap(s => s.puzzles);
    const done = allPuzzles.filter(p => SaveSystem.isPuzzleDone(player, p.id));

    if (done.length < allPuzzles.length) {
      DialogSystem.show(cfg.puertaBlockedText.map(t => ({ speaker: '🧙 Gandalf', text: t })));
      GameUI.notify(`🔒 Te faltan ${allPuzzles.length - done.length} enigma(s).`);
    } else {
      player.completedDungeons.push(cfg.dungeonId);
      player.sa_progress       = player.sa_progress || {};
      player.sa_progress[cfg.saKey] = 100;
      player.currentDungeon    = 'destino',
      SaveSystem.save(player);
      GameUI.updateProgressBar();
      DialogSystem.show(
        cfg.puertaOpenText.map(t => ({ speaker: '🧙 Gandalf', text: t })),
        () => {
          this._showVictoryScreen(player);
        }
      );
    }
  }

  _showVictoryScreen(player) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:absolute;top:0;left:0;width:800px;height:600px;
      background:radial-gradient(ellipse, #1a0000 0%, #000 70%);
      z-index:100;display:flex;flex-direction:column;align-items:center;
      justify-content:center;padding:30px;box-sizing:border-box;
    `;

    const fire = document.createElement('div');
    fire.textContent = '🌋🔥🌋';
    fire.style.cssText = 'font-size:48px;margin-bottom:16px;';
    overlay.appendChild(fire);

    const title = document.createElement('h1');
    title.textContent = '¡Misión Completada!';
    title.style.cssText = 'color:#ffd700;font-family:Georgia;font-size:28px;margin:0 0 8px;text-align:center;text-shadow:0 0 20px #ff6600;';
    overlay.appendChild(title);

    const sub = document.createElement('p');
    sub.textContent = '🧙 "No todos los que vagan están perdidos." — Tolkien';
    sub.style.cssText = 'color:#c4a35a;font-style:italic;font-family:Georgia;margin:0 0 20px;text-align:center;';
    overlay.appendChild(sub);

    const stats = document.createElement('div');
    stats.style.cssText = `
      background:#120800;border:2px solid #ffd700;border-radius:8px;
      padding:16px 24px;margin-bottom:20px;text-align:center;
      color:#f0ddb0;font-family:Georgia;font-size:13px;
    `;
    stats.innerHTML = `
      <strong style="color:#ffd700;font-size:16px;">🏆 ${player.name || 'Viajero'}</strong><br><br>
      "📋 Código: <strong style="color:#ffd700;">${player.code || '—'}</strong><br>
      ⭐ Puntuación total: <strong style="color:#ffd700;">${player.score || 0}</strong><br>
      ��️ Mazmorras completadas: <strong style="color:#4caf50;">9/9</strong>
    `;
    overlay.appendChild(stats);

    const mapBtn = document.createElement('button');
    mapBtn.textContent = '🗺️ Volver al Mapa Mundial';
    mapBtn.style.cssText = `
      padding:12px 30px;background:#3d2200;border:2px solid #ffd700;
      color:#ffd700;font-family:Georgia;font-size:14px;cursor:pointer;
      border-radius:6px;margin-top:10px;
    `;
    mapBtn.onclick = () => {
      overlay.remove();
      this.scene.start('WorldMap');
    };
    overlay.appendChild(mapBtn);

    document.getElementById('game-container').appendChild(overlay);
  }
}
