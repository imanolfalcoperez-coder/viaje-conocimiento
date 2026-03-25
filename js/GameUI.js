/**
 * GameUI.js
 * Gestiona la interfaz de usuario, creación de personaje y transiciones
 */
const GameUI = {
  // charId seleccionado en la pantalla de selección de personaje
  _selectedCharId: 'c01',

  // Inicializa los canvas de previsualización en la pantalla de selección
  initCharSelection() {
    if (typeof CHARACTER_PRESETS === 'undefined') return;
    CHARACTER_PRESETS.forEach(preset => {
      const canvas = document.getElementById('char-canvas-' + preset.id);
      if (canvas) drawCharPreviewHTML(canvas, preset);
    });
    this.selectChar('c01');
  },

  selectChar(charId) {
    this._selectedCharId = charId;
    // Resaltar el seleccionado
    document.querySelectorAll('.char-card').forEach(card => {
      card.classList.toggle('selected', card.dataset.charId === charId);
    });
  },

  // NUEVA PARTIDA
  newGame() {
    document.getElementById('main-menu').classList.remove('active');
    document.getElementById('character-creation').classList.add('active');
    // Renderizar previsualizaciones (diferido para asegurar que el DOM está visible)
    setTimeout(() => this.initCharSelection(), 50);
  },

  // INICIAR VIAJE con el personaje creado
  startJourney() {
    const name = document.getElementById('char-name').value.trim();
    if (!name) {
      alert('ʡPonle nombre a tu Hobbit antes de partir!');
      return;
    }
    const preset   = typeof getCharPreset !== 'undefined' ? getCharPreset(this._selectedCharId) : { id: 'c01' };
    const appearance = { charId: preset.id, emoji: preset.emoji || '🧑' };
    const player = SaveSystem.createNewPlayer(name, appearance);
    window.Game.player = player;
    SaveSystem.save(player);

    document.getElementById('character-creation').classList.remove('active');
    this.showCodeScreen(player.code);
  },

  showCodeScreen(code) {
    // Mostrar el código al alumno para que lo anote
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:absolute;top:0;left:0;width:800px;height:600px;
      background:radial-gradient(ellipse,#2d1500,#0d0600);
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      z-index:200;color:#f5deb3;
    `;
    overlay.innerHTML = `
      <div style="font-size:50px;margin-bottom:15px">🧙</div>
      <h2 style="color:#ffd700;font-size:22px;margin-bottom:10px">¡Tu aventura comienza!</h2>
      <p style="color:#c4a35a;font-size:13px;margin-bottom:25px;text-align:center;max-width:400px">
        Este es tu <strong style="color:#ffd700">código de personaje</strong>.<br>
        <em>¡Anótalo! Lo necesitarás para continuar tu viaje en otra sesión.</em>
      </p>
      <div style="font-size:28px;font-family:monospace;letter-spacing:6px;color:#ffd700;
                  background:#0d0600;border:3px solid #8b6914;padding:15px 30px;border-radius:8px;
                  margin-bottom:25px;">${code}</div>
      <button onclick="GameUI.enterGame()" style="
        padding:12px 40px;background:linear-gradient(180deg,#8b6914,#5a4200);
        border:2px solid #ffd700;color:#ffd700;font-family:Georgia,serif;
        font-size:16px;cursor:pointer;border-radius:6px;letter-spacing:1px;">
        ⚔️ ¡Partir hacia La Comarca!
      </button>
    `;
    document.getElementById('game-container').appendChild(overlay);
    this._codeOverlay = overlay;
  },

  enterGame() {
    if (this._codeOverlay) {
      this._codeOverlay.remove();
      this._codeOverlay = null;
    }
    this.showHUD();
    // Iniciar Phaser
    window.Game.startPhaser();
  },

  // CARGAR PARTIDA
  showLoadScreen() {
    document.getElementById('main-menu').classList.remove('active');
    document.getElementById('load-screen').style.display = 'block';
  },

  hideLoadScreen() {
    document.getElementById('load-screen').style.display = 'none';
    document.getElementById('main-menu').classList.add('active');
  },

  loadGame() {
    const code = document.getElementById('load-code').value.trim();
    const player = SaveSystem.load(code);
    if (!player) {
      document.getElementById('load-error').textContent = '❌ Código no encontrado. Verifica e inténtalo de nuevo.';
      return;
    }
    window.Game.player = player;
    document.getElementById('load-screen').style.display = 'none';
    this.showHUD();
    window.Game.startPhaser();
  },

  // HUD
  showHUD() {
    document.getElementById('hud').style.display = 'block';
    document.getElementById('progress-bar-container').style.display = 'block';
    this.updateHUD();
    this.updateProgressBar();
  },

  updateHUD() {
    const p = window.Game.player;
    if (!p) return;
    document.getElementById('hud-name').textContent = `${GameUI.getPlayerEmoji()} ${p.name}`;
    document.getElementById('hud-location').textContent = Game.currentLocationName || 'La Comarca';
  },

  getPlayerEmoji() {
    const p = window.Game.player;
    if (!p) return '🧑';
    return p.appearance.emoji || p.appearance.charId || '🧑';
  },

  updateProgressBar() {
    const p = window.Game.player;
    if (!p) return;
    const sa = Game.currentSA || 'sa1';
    const val = p.sa_progress[sa] || 0;
    document.getElementById('progress-fill').style.width = val + '%';
    document.getElementById('progress-label').textContent = `Progreso — ${sa.toUpperCase().replace('SA', 'SA ')}`;
  },

  // NOTIFICACIÓN flotante
  notify(text, duration = 2500) {
    const el = document.getElementById('notification');
    el.textContent = text;
    el.style.display = 'block';
    clearTimeout(this._notifTimer);
    this._notifTimer = setTimeout(() => { el.style.display = 'none'; }, duration);
  },

  // CERRAR PUZZLE
  closePuzzle() {
    PuzzleSystem.close();
    GameUI.updateProgressBar();
  }
};
