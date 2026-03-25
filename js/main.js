/**
 * main.js
 * Configuración principal de Phaser y objeto global del juego.
 *
 * Canvas (viewport): 800x600
 * World (La Comarca): 800x800  - la camara hace scroll vertical
 */

window.Game = {
  player: null,
  currentSA: null,
  currentLocationName: '',
  phaserGame: null,

  startPhaser() {
    if (this.phaserGame) {
      const scene = this._getStartScene();
      const active = this.phaserGame.scene.getScenes(true).slice();
      active.forEach(s => s.scene.stop());
      setTimeout(() => { this.phaserGame.scene.start(scene); }, 50);
      return;
    }

    const startScene = this._getStartScene();
    const orderedScenes = startScene === 'LaComarca'
      ? [LaComarcaScene, WorldMapScene]
      : [WorldMapScene, LaComarcaScene];

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
    console.log('Phaser iniciado - escena:', startScene);
  },

  _getStartScene() {
    if (!this.player) return 'WorldMap';
    if (this.player.completedDungeons && this.player.completedDungeons.includes('comarca')) {
      return 'WorldMap';
    }
    return 'LaComarca';
  }
};

document.addEventListener('keydown', (e) => {
  if ((e.code === 'Space' || e.code === 'Enter') && DialogSystem.isOpen) {
    e.preventDefault();
    DialogSystem.advance();
  }
});

console.log('El Viaje del Conocimiento - v1.0');
