/**
 * main.js
 * Configuración principal de Phaser y objeto global del juego.
 *
 * Canvas (viewport): 800×600
 * World (La Comarca): 800×800  →  la cámara hace scroll vertical
 */

window.Game = {
  player: null,
  currentSA: null,
  currentLocationName: '',
  phaserGame: null,

  // ── Mapa: ID de mazmorra → clave de escena Phaser ──────────────────────
  _dungeonSceneMap: {
    comarca:   'LaComarca',
    bree:      'Bree',
    vientos:   'Vientos',
    rivendell: 'Rivendell',
    moria:     'Moria',
    lorien:    'Lorien',
    rohan:     'Rohan',
    tirith:    'Tirith',
    destino:   'Destino'
  },

  startPhaser() {
    if (this.phaserGame) {
      // Reanudar en la mazmorra donde el jugador lo dejó (partida cargada)
      const scene = this._getStartScene();
      // Detener todas las escenas activas y arrancar la correcta
      const active = this.phaserGame.scene.getScenes(true).slice();
      active.forEach(s => s.scene.stop());
      // Pequeño delay para que el stop() se procese antes del start()
      setTimeout(() => { this.phaserGame.scene.start(scene); }, 50);
      return;
    }

    // ── Primera vez: crear el juego Phaser ────────────────────────────────────
    const startScene = this._getStartScene();

    // Todas las clases de escena registradas
    const allSceneClasses = [
      LaComarcaScene,
      BreeScene, VientosScene, RivendellScene,
      MoriaScene, LorienScene, RohanScene,
      TirithScene, DestinoScene,
      WorldMapScene
    ];

    // Poner la escena de inicio PRIMERA para que Phaser la auto-inicie
    const startClass = allSceneClasses.find(s => s.name.replace('Scene','') === startScene
      || (startScene === 'LaComarca' && s === LaComarcaScene)
      || (startScene === 'WorldMap'  && s === WorldMapScene));
    const orderedScenes = startClass
      ? [startClass, ...allSceneClasses.filter(s => s !== startClass)]
      : allSceneClasses;

    const config = {
      type: Phaser.CANVAS,
      canvas: document.getElementById('game-canvas'),
      width: 800,
      height: 600,
      backgroundColor: '#1a0a00',
      scene: orderedScenes,
      input: { keyboard: true },
    };

    this.phaserGame = new Phaser.Game(config);
    console.log('🎮 Phaser iniciado → escena:', startScene);
  },

  _getStartScene() {
    if (!this.player) return 'WorldMap';
    const p = this.player;
    // Determinar la siguiente mazmorra no completada
    const order = ['comarca','bree','vientos','rivendell','moria','lorien','rohan','tirith','destino'];
    const next   = order.find(id => !(p.completedDungeons || []).includes(id));
    if (!next) return 'WorldMap'; // Todo completado
    return this._dungeonSceneMap[next] || 'WorldMap';
  }
};

// ── Tecla ESPACIO global para avanzar diálogos ─────────────────────────────
document.addEventListener('keydown', (e) => {
  if ((e.code === 'Space' || e.code === 'Enter') && DialogSystem.isOpen) {
    e.preventDefault();
    DialogSystem.advance();
  }
});

console.log('🧙 El Viaje del Conocimiento — v1.0');
