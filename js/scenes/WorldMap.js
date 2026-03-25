/**
 * WorldMap.js
 * Mapa mundial de La Tierra Media mostrando el progreso del viaje
 */
class WorldMapScene extends Phaser.Scene {
  constructor() { super({ key: 'WorldMap' }); }

  create() {
    // Parar cualquier escena de mazmorra activa
    if (this.scene.isActive('LaComarca')) this.scene.stop('LaComarca');

    Game.currentLocationName = '🗺️ La Tierra Media';
    Game.currentSA = null;
    GameUI.updateHUD();

    const W = this.scale.width;
    const H = this.scale.height;

    // Fondo pergamino
    const g = this.add.graphics();
    g.fillStyle(0xd4a96a);
    g.fillRect(0, 0, W, H);
    // Textura pergamino
    g.fillStyle(0xc49a55, 0.3);
    for (let x = 0; x < W; x += 60) {
      for (let y = 0; y < H; y += 60) {
        if ((x * y) % 180 < 60) g.fillRect(x, y, 30, 30);
      }
    }
    // Borde
    g.lineStyle(4, 0x6b3e0f);
    g.strokeRect(10, 10, W - 20, H - 20);
    g.lineStyle(2, 0x8b5e2a);
    g.strokeRect(16, 16, W - 32, H - 32);

    // Título
    this.add.text(W / 2, 30, 'La Tierra Media', {
      fontSize: '22px', fill: '#3d1a00',
      fontFamily: 'Georgia', fontStyle: 'italic',
      stroke: '#d4a96a', strokeThickness: 1
    }).setOrigin(0.5);

    // ── PARADAS DEL VIAJE ──────────────────────────────────────────
    // Coordenadas basadas en el mapa real de La Tierra Media
    const stops = [
      { id: 'comarca',  name: 'La Comarca',          sa: 'sa1', x: 155, y: 175, emoji: '🌿' },
      { id: 'bree',     name: 'Bree',                sa: 'sa2', x: 235, y: 195, emoji: '🏙️' },
      { id: 'vientos',  name: 'Cima de los Vientos', sa: 'sa3', x: 300, y: 180, emoji: '⛰️' },
      { id: 'rivendell',name: 'Rivendell',            sa: 'sa4', x: 355, y: 170, emoji: '🌟' },
      { id: 'moria',    name: 'Minas de Moria',       sa: 'sa5', x: 370, y: 260, emoji: '⛏️' },
      { id: 'lorien',   name: 'Lothlórien',           sa: 'sa6', x: 415, y: 290, emoji: '🌿' },
      { id: 'rohan',    name: 'Rohan',                sa: 'sa7', x: 450, y: 340, emoji: '🐴' },
      { id: 'tirith',   name: 'Minas Tirith',         sa: 'sa8', x: 515, y: 380, emoji: '🏰' },
      { id: 'destino',  name: 'Monte del Destino',    sa: 'sa9', x: 590, y: 390, emoji: '🌋' }
    ];

    const player = window.Game.player;

    // Dibujar línea del camino
    g.lineStyle(2, 0x6b3e0f, 0.6);
    for (let i = 0; i < stops.length - 1; i++) {
      g.lineBetween(stops[i].x, stops[i].y, stops[i + 1].x, stops[i + 1].y);
    }

    // Dibujar paradas
    stops.forEach((stop, i) => {
      const isDone = player && player.completedDungeons.includes(stop.id);
      const isCurrent = player && !isDone &&
        (i === 0 || player.completedDungeons.includes(stops[i - 1]?.id));

      // Círculo de la parada
      g.fillStyle(isDone ? 0x4caf50 : isCurrent ? 0xffd700 : 0x8b7355);
      g.fillCircle(stop.x, stop.y, isCurrent ? 14 : 10);
      g.lineStyle(2, isDone ? 0x2e7d32 : 0x3d1a00);
      g.strokeCircle(stop.x, stop.y, isCurrent ? 14 : 10);

      // Emoji
      this.add.text(stop.x, stop.y, stop.emoji, {
        fontSize: isCurrent ? '16px' : '12px'
      }).setOrigin(0.5);

      // Nombre
      this.add.text(stop.x, stop.y + (isCurrent ? 20 : 16), stop.name, {
        fontSize: '9px', fill: '#3d1a00', fontFamily: 'Georgia',
        stroke: '#d4a96a', strokeThickness: 2
      }).setOrigin(0.5);

      // SA label
      this.add.text(stop.x, stop.y - (isCurrent ? 22 : 18),
        isDone ? '✅' : isCurrent ? '▶' : `SA${i + 1}`, {
        fontSize: '10px', fill: isDone ? '#4caf50' : '#6b3e0f'
      }).setOrigin(0.5);

      // Click en parada accesible
      if (isCurrent || isDone) {
        const zone = this.add.zone(stop.x, stop.y, 40, 40).setInteractive();
        zone.on('pointerover', () => {
          this.add.text(stop.x, stop.y - 35, stop.name, {
            fontSize: '11px', fill: '#ffd700', backgroundColor: '#1a0a00',
            padding: { x: 4, y: 2 }
          }).setOrigin(0.5).setDepth(20).setName('tooltip');
        });
        zone.on('pointerdown', () => {
          if (stop.id === 'comarca') this.scene.start('LaComarca');
          // Próximamente: otras mazmorras
          else GameUI.notify(`🔒 ${stop.name} — ¡Próximamente!`);
        });
      }
    });

    // Personaje del jugador en su posición actual
    if (player) {
      const currentStopId = player.currentDungeon || 'comarca';
      const currentStop = stops.find(s => s.id === currentStopId) || stops[0];
      this.add.text(currentStop.x + 5, currentStop.y - 12,
        player.appearance.sex === 'female' ? '👧' : '👦', {
        fontSize: '14px'
      }).setOrigin(0.5).setDepth(15);
    }

    // Panel inferior de info
    const panel = this.add.graphics();
    panel.fillStyle(0x1a0a00, 0.85);
    panel.fillRoundedRect(10, H - 90, W - 20, 80, 8);
    panel.lineStyle(2, 0x8b6914);
    panel.strokeRoundedRect(10, H - 90, W - 20, 80, 8);

    this.add.text(W / 2, H - 80, `${player?.name || 'Viajero'} | Código: ${player?.code || '—'} | Puntuación: ${player?.score || 0}`, {
      fontSize: '11px', fill: '#ffd700', fontFamily: 'Georgia'
    }).setOrigin(0.5);

    // Botones
    this._addButton(W / 2 - 120, H - 55, '⚔️ Ir a La Comarca', () => this.scene.start('LaComarca'));
    this._addButton(W / 2 + 120, H - 55, '💾 Guardar', () => {
      if (window.Game.player) { SaveSystem.save(window.Game.player); GameUI.notify('💾 Partida guardada.'); }
    });

    this.add.text(W / 2, H - 25, '🧙 "No todos los que vagan están perdidos." — Tolkien', {
      fontSize: '10px', fill: '#c4a35a', fontFamily: 'Georgia', fontStyle: 'italic'
    }).setOrigin(0.5);
  }

  _addButton(x, y, label, cb) {
    const btn = this.add.text(x, y, label, {
      fontSize: '12px', fill: '#ffd700', fontFamily: 'Georgia',
      backgroundColor: '#3d2200', padding: { x: 10, y: 6 },
      stroke: '#8b6914', strokeThickness: 1
    }).setOrigin(0.5).setInteractive();
    btn.on('pointerover', () => btn.setStyle({ fill: '#fff' }));
    btn.on('pointerout', () => btn.setStyle({ fill: '#ffd700' }));
    btn.on('pointerdown', cb);
    return btn;
  }
}
