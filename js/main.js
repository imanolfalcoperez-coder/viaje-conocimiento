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

  startPhaser() {
    if (this.phaserGame) {
      // Reanudar en la mazmorra donde el jugador lo dejó
      const scene = this._getStartScene();
      // Reiniciar escena activa
      this.phaserGame.scene.getScenes(true).forEach(s => s.scene.stop());
      this.phaserGame.scene.start(scene);
      return;
    }

    const config = {
      type: Phaser.CANVAS,
      canvas: document.getElementById('game-canvas'),
      width: 800,
      height: 600,
      backgroundColor: '#1a0a00',
      scene: [WorldMapScene, LaComarcaScene],
      input: { keyboard: true },
    };

    this.phaserGame = new Phaser.Game(config);

    this.phaserGame.events.once('ready', () => {
      const scene = this._getStartScene();
      this.phaserGame.scene.start(scene);
    });
  },

  _getStartScene() {
    if (!this.player) return 'WorldMap';
    // Si ya completó la comarca, ir al mapa mundial
    if (this.player.completedDungeons && this.player.completedDungeons.includes('comarca')) {
      return 'WorldMap';
    }
    return 'LaComarca';
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
