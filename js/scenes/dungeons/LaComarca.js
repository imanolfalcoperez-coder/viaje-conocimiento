/**
 * LaComarca.js  — SA1
 * Escena de La Comarca usando la imagen real del mapa.
 * Movimiento en cuadrícula: arriba/abajo/izquierda/derecha (sin diagonal).
 *
 * World: 800×800px  |  Tile: 32px  |  Grid: 25×25
 * Viewport (cámara): 800×600px  →  scroll vertical cuando el jugador
 * se acerca al borde superior/inferior.
 */
class LaComarcaScene extends Phaser.Scene {
  constructor() { super({ key: 'LaComarca' }); }

  // ─── PRELOAD ────────────────────────────────────────────────────────────────
  preload() {
    // MAP_TABERNA_B64 se carga en _createScene() via Image API nativa
    // (Phaser 3.60 no soporta data URIs en su loader — causa hang)
  }

  // ─── CREATE ─────────────────────────────────────────────────────────────────
  create() {
    console.log('🌿 LaComarca create() — jugador:', window.Game.player ? window.Game.player.name : 'NULL');
    try {
      this._createScene();
    } catch (err) {
      console.error('❌ Error en LaComarca.create():', err);
      // Mostrar mensaje de error sobre el canvas para diagnóstico
      this.add.text(400, 300,
        '⚠️ Error al cargar La Comarca\nRevisa la consola (F12) para detalles.',
        { fontSize: '14px', fill: '#ff4444', align: 'center', wordWrap: { width: 700 } }
      ).setOrigin(0.5);
    }
  }

  _createScene() {
    // Asegurar que WorldMap no esté renderizando en segundo plano
    if (this.scene.isActive('WorldMap')) this.scene.stop('WorldMap');

    Game.currentSA = 'sa1';
    Game.currentLocationName = '🌿 La Comarca — La Taberna del Hobbit';
    GameUI.updateHUD();

    // ── Constantes de cuadrícula ──────────────────────────────────────────────
    this.TILE  = 32;          // píxeles por celda
    this.COLS  = 25;
    this.ROWS  = 25;
    this.worldW = this.COLS * this.TILE;  // 800
    this.worldH = this.ROWS * this.TILE;  // 800

    // ── Mapa de colisiones (25×25) ────────────────────────────────────────────
    // 0 = transitable  |  1 = bloqueado
    // Basado en la imagen: borde oscuro bloqueado, hierba y interior transitable,
    // paredes del edificio y mobiliario bloqueados.
    this.collisionMap = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // 0
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // 1
      [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1], // 2
      [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1], // 3
      [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1], // 4  (piedra bienvenida col 3)
      [1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1], // 5  (pared norte edificio)
      [1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1], // 6  (sala norte)
      [1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1], // 7  (tablón col 7)
      [1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1], // 8  (barra col 11-13)
      [1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1], // 9
      [1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1], // 10
      [1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1], // 11 (mesas)
      [1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1], // 12
      [1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1], // 13 (mesa grande col 11)
      [1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1], // 14
      [1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1], // 15
      [1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1], // 16
      [1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1], // 17
      [1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1], // 18 (pared sur, puerta cols 11-12)
      [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1], // 19
      [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1], // 20
      [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1], // 21
      [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1], // 22
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // 23
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // 24
    ];

    // ── Fondo: imagen del escenario (con fallback de color) ──────────────────
    // Cargar textura desde data URI usando Image API nativa (no el loader de Phaser)
    if (!this.textures.exists('map_taberna') && typeof MAP_TABERNA_B64 !== 'undefined') {
      try {
        const img = new window.Image();
        img.src = MAP_TABERNA_B64;
        if (img.complete && img.naturalWidth > 0) {
          this.textures.addImage('map_taberna', img);
          console.log('✅ Mapa cargado directamente');
        }
      } catch(e) { console.warn('⚠️ Error cargando mapa:', e.message); }
    }
    if (this.textures.exists('map_taberna')) {
      this.add.image(this.worldW / 2, this.worldH / 2, 'map_taberna')
        .setDisplaySize(this.worldW, this.worldH)
        .setDepth(0);
      console.log('✅ Mapa cargado correctamente');
    } else {
      // Fondo verde degradado como fallback
      const bg = this.add.graphics().setDepth(0);
      bg.fillStyle(0x2d5a27);
      bg.fillRect(0, 0, this.worldW, this.worldH);
      bg.fillStyle(0x3a7a32, 0.5);
      for (let x = 0; x < this.worldW; x += 64) {
        for (let y = 0; y < this.worldH; y += 64) {
          if ((x + y) % 128 === 0) bg.fillRect(x, y, 32, 32);
        }
      }
      console.warn('⚠️ Usando fondo de color (imagen no disponible)');
    }

    // ── Cámara ────────────────────────────────────────────────────────────────
    this.cameras.main.setBounds(0, 0, this.worldW, this.worldH);

    // ── Jugador ───────────────────────────────────────────────────────────────
    createPlayerTexture(this, window.Game.player.appearance);
    // Posición de inicio: exterior sur, frente a la entrada
    this.gridX = 12;
    this.gridY = 21;
    this.player = this.add.image(
      this._tileToWorld(this.gridX),
      this._tileToWorld(this.gridY),
      'player_sprite'
    ).setScale(2.5).setDepth(10);

    this.playerLabel = this.add.text(
      this._tileToWorld(this.gridX),
      this._tileToWorld(this.gridY) - 22,
      window.Game.player.name,
      { fontSize: '9px', fill: '#ffd700', stroke: '#000', strokeThickness: 2 }
    ).setOrigin(0.5).setDepth(11);

    this.cameras.main.startFollow(this.player, true, 1, 1);

    // ── Movimiento en cuadrícula ──────────────────────────────────────────────
    this.isMoving   = false;  // bloqueado durante el tween
    this.moveDelay  = 0;      // para repetición al mantener tecla
    this.MOVE_FIRST = 220;    // ms antes de repetir
    this.MOVE_REP   = 130;    // ms entre repeticiones
    this.moveDuration = 110;  // ms del tween de movimiento

    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasd    = this.input.keyboard.addKeys({
      up:    Phaser.Input.Keyboard.KeyCodes.W,
      down:  Phaser.Input.Keyboard.KeyCodes.S,
      left:  Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    // ── Indicador de interacción (icono flotante sobre objeto) ────────────────
    this.interactIcon = this.add.text(0, 0, '[ ESPACIO ]', {
      fontSize: '9px', fill: '#ffd700',
      backgroundColor: '#1a0a00',
      padding: { x: 4, y: 2 }
    }).setOrigin(0.5).setDepth(20).setAlpha(0);

    // ── Zona de debug (celdas) — comentar en producción ───────────────────────
    // this._drawGrid();

    // ── Objetos interactivos ──────────────────────────────────────────────────
    // Cada objeto: { col, row, key, label, cb }
    this.interactables = [
      {
        col: 3, row: 4,
        key: 'bienvenida',
        label: '🪨 Piedra de\nBienvenida',
        cb: () => this._onBienvenida()
      },
      {
        col: 7, row: 7,
        key: 'tablon',
        label: '📜 Tablón de\nla Taberna',
        cb: () => this._onTablon()
      },
      {
        col: 11, row: 8,
        key: 'barra',
        label: '🍺 La Barra\ndel Tabernero',
        cb: () => this._onBarra()
      },
      {
        col: 11, row: 13,
        key: 'mesa',
        label: '📚 La Gran\nMesa',
        cb: () => this._onMesa()
      },
      {
        col: 12, row: 18,
        key: 'puerta_salida',
        label: '🚪 Salida\nhacia Bree',
        cb: () => this._onPuertaSalida()
      },
    ];

    // Dibujar etiquetas de objetos en el mapa
    this.interactables.forEach(obj => {
      this.add.text(
        this._tileToWorld(obj.col),
        this._tileToWorld(obj.row) - 20,
        obj.label,
        { fontSize: '8px', fill: '#ffd700', stroke: '#000', strokeThickness: 2, align: 'center' }
      ).setOrigin(0.5).setDepth(9);
    });

    // ── HUD controles ─────────────────────────────────────────────────────────
    // Texto fijo en la cámara (no en el mundo)
    this.controlsText = this.add.text(400, 590, '⬆⬇⬅➡  Mover  |  ESPACIO  Interactuar', {
      fontSize: '10px', fill: '#c4a35a', stroke: '#000', strokeThickness: 1
    }).setOrigin(0.5).setScrollFactor(0).setDepth(30);

    // ── Introducción ──────────────────────────────────────────────────────────
    this._gandalfDone = false;
    this.time.delayedCall(400, () => {
      DialogSystem.show([{
        speaker: '🧙 Gandalf',
        text: `Bienvenido, ${window.Game.player.name}. Muévete con las flechas o WASD. Acércate a los objetos brillantes y pulsa ESPACIO para interactuar. ¡Empieza explorando La Comarca!`
      }]);
    });
  }

  // ─── CONVERSIÓN tile→píxel (centro de la celda) ────────────────────────────
  _tileToWorld(t) { return t * this.TILE + this.TILE / 2; }

  // ─── ¿Es transitable? ───────────────────────────────────────────────────────
  _walkable(col, row) {
    if (col < 0 || col >= this.COLS || row < 0 || row >= this.ROWS) return false;
    return this.collisionMap[row][col] === 0;
  }

  // ─── MOVER AL JUGADOR (tween) ────────────────────────────────────────────────
  _movePlayer(dcol, drow) {
    if (this.isMoving) return;
    const nc = this.gridX + dcol;
    const nr = this.gridY + drow;
    if (!this._walkable(nc, nr)) {
      // Pequeño "golpe" visual contra la pared
      this.tweens.add({
        targets: this.player,
        x: this.player.x + dcol * 6,
        y: this.player.y + drow * 6,
        duration: 60, yoyo: true, ease: 'Power1'
      });
      return;
    }
    this.isMoving = true;
    this.gridX = nc;
    this.gridY = nr;
    const tx = this._tileToWorld(nc);
    const ty = this._tileToWorld(nr);

    // Voltear sprite según dirección horizontal
    if (dcol < 0) this.player.setFlipX(true);
    else if (dcol > 0) this.player.setFlipX(false);

    this.tweens.add({
      targets: this.player,
      x: tx, y: ty,
      duration: this.moveDuration,
      ease: 'Linear',
      onComplete: () => { this.isMoving = false; }
    });
    this.tweens.add({
      targets: this.playerLabel,
      x: tx, y: ty - 22,
      duration: this.moveDuration,
      ease: 'Linear'
    });

    // Comprobar si hay objeto interactivo cercano
    this._checkNearby();
  }

  // ─── DETECTAR OBJETO CERCANO ─────────────────────────────────────────────────
  _checkNearby() {
    const near = this.interactables.find(obj =>
      Math.abs(obj.col - this.gridX) <= 1 && Math.abs(obj.row - this.gridY) <= 1 &&
      !(Math.abs(obj.col - this.gridX) === 1 && Math.abs(obj.row - this.gridY) === 1) // no diagonal
    );
    if (near) {
      this.interactIcon.setPosition(
        this._tileToWorld(near.col),
        this._tileToWorld(near.row) - 30
      ).setAlpha(1);
      this._nearObject = near;
    } else {
      this.interactIcon.setAlpha(0);
      this._nearObject = null;
    }
  }

  // ─── UPDATE ──────────────────────────────────────────────────────────────────
  update(time, delta) {
    // Bloquear si hay diálogo o puzzle abierto
    if (DialogSystem.isOpen) return;
    if (document.getElementById('puzzle-overlay').classList.contains('active')) return;

    // ESPACIO / ENTER → interactuar
    if (Phaser.Input.Keyboard.JustDown(this.spaceKey) ||
        Phaser.Input.Keyboard.JustDown(this.enterKey)) {
      if (this._nearObject) {
        this._nearObject.cb();
        return;
      }
    }

    if (this.isMoving) return;

    // Leer dirección (solo 4 ejes — no diagonal)
    const left  = this.cursors.left.isDown  || this.wasd.left.isDown;
    const right = this.cursors.right.isDown || this.wasd.right.isDown;
    const up    = this.cursors.up.isDown    || this.wasd.up.isDown;
    const down  = this.cursors.down.isDown  || this.wasd.down.isDown;

    let dcol = 0, drow = 0;
    if      (left)  dcol = -1;
    else if (right) dcol =  1;
    else if (up)    drow = -1;
    else if (down)  drow =  1;

    const moving = dcol !== 0 || drow !== 0;

    if (!moving) {
      this.moveDelay = 0;
      return;
    }

    // Primera pulsación → mover inmediatamente
    // Tecla mantenida → esperar MOVE_FIRST ms, luego repetir cada MOVE_REP ms
    const justPressed =
      (dcol === -1 && Phaser.Input.Keyboard.JustDown(this.cursors.left))  ||
      (dcol ===  1 && Phaser.Input.Keyboard.JustDown(this.cursors.right)) ||
      (drow === -1 && Phaser.Input.Keyboard.JustDown(this.cursors.up))    ||
      (drow ===  1 && Phaser.Input.Keyboard.JustDown(this.cursors.down))  ||
      (dcol === -1 && Phaser.Input.Keyboard.JustDown(this.wasd.left))     ||
      (dcol ===  1 && Phaser.Input.Keyboard.JustDown(this.wasd.right))    ||
      (drow === -1 && Phaser.Input.Keyboard.JustDown(this.wasd.up))       ||
      (drow ===  1 && Phaser.Input.Keyboard.JustDown(this.wasd.down));

    if (justPressed) {
      this.moveDelay = 0;
      this._movePlayer(dcol, drow);
    } else {
      this.moveDelay += delta;
      if (this.moveDelay > this.MOVE_FIRST) {
        if ((this.moveDelay - this.MOVE_FIRST) % this.MOVE_REP < delta) {
          this._movePlayer(dcol, drow);
        }
      }
    }
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // CALLBACKS DE OBJETOS INTERACTIVOS
  // ─────────────────────────────────────────────────────────────────────────────

  _onBienvenida() {
    DialogSystem.show(
      SA1_DATA.gandalf_intro.map(t => ({ speaker: '🧙 Gandalf', text: t })),
      () => { this._gandalfDone = true; GameUI.notify('✅ ¡Empieza tu aventura!'); }
    );
  }

  _onTablon() {
    const room = SA1_DATA.sala_entrevista;
    DialogSystem.show(
      room.gandalf_entrada.map(t => ({ speaker: '🧙 Gandalf', text: t })),
      () => this._showRoomOverlay(room, 'entrevista')
    );
  }

  _onBarra() {
    const room = SA1_DATA.sala_acentuacion;
    DialogSystem.show(
      room.gandalf_entrada.map(t => ({ speaker: '🧙 Gandalf', text: t })),
      () => this._showRoomOverlay(room, 'acentuacion')
    );
  }

  _onMesa() {
    const room = SA1_DATA.sala_gramatica;
    DialogSystem.show(
      room.gandalf_entrada.map(t => ({ speaker: '🧙 Gandalf', text: t })),
      () => this._showRoomOverlay(room, 'gramatica')
    );
  }

  _onPuertaSalida() {
    const player = window.Game.player;
    const allPuzzles = [
      ...SA1_DATA.sala_entrevista.puzzles,
      ...SA1_DATA.sala_acentuacion.puzzles,
      ...SA1_DATA.sala_gramatica.puzzles
    ];
    const done = allPuzzles.filter(p => SaveSystem.isPuzzleDone(player, p.id));

    if (done.length < allPuzzles.length) {
      DialogSystem.show(
        SA1_DATA.puerta_final.gandalf_bloqueada.map(t => ({ speaker: '🧙 Gandalf', text: t }))
      );
      GameUI.notify(`🔒 Te faltan ${allPuzzles.length - done.length} enigma(s).`);
    } else {
      player.completedDungeons.push('comarca');
      player.sa_progress.sa1 = 100;
      player.currentDungeon = 'bree';
      SaveSystem.save(player);
      GameUI.updateProgressBar();
      DialogSystem.show(
        SA1_DATA.puerta_final.gandalf_abierta.map(t => ({ speaker: '🧙 Gandalf', text: t })),
        () => {
          GameUI.notify('🌟 ¡SA1 completada! Partiendo hacia el Mapa Mundial...');
          this.time.delayedCall(1200, () => this.scene.start('WorldMap'));
        }
      );
    }
  }

  // ─── OVERLAY DE SALA (teoría + puzzles) ──────────────────────────────────────
  _showRoomOverlay(room, roomKey) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:absolute;top:0;left:0;width:800px;height:600px;
      background:radial-gradient(ellipse,#1a0e00 60%,#0d0600);
      z-index:80;display:flex;flex-direction:column;align-items:center;
      overflow-y:auto;padding:20px 25px 30px;box-sizing:border-box;
    `;

    // Título
    const title = document.createElement('h2');
    title.style.cssText = 'color:#ffd700;font-family:Georgia;margin:0 0 4px;font-size:19px;text-align:center;';
    title.textContent = room.nombre;
    overlay.appendChild(title);

    const sub = document.createElement('p');
    sub.style.cssText = 'color:#c4a35a;font-size:11px;font-style:italic;margin:0 0 14px;text-align:center;';
    sub.textContent = room.descripcion;
    overlay.appendChild(sub);

    // Pergamino teórico
    if (room.pergamino_teoria) {
      const box = document.createElement('div');
      box.style.cssText = `
        background:#120800;border:2px solid #8b6914;border-radius:6px;
        padding:14px 16px;margin-bottom:16px;width:100%;box-sizing:border-box;
        color:#f0ddb0;font-family:Georgia;font-size:12px;line-height:1.75;
      `;
      box.innerHTML = `<strong style="color:#ffd700;font-size:14px;">${room.pergamino_teoria.titulo}</strong><br><br>${room.pergamino_teoria.texto}`;
      overlay.appendChild(box);
    }

    // Enigmas
    const enigmasTitle = document.createElement('p');
    enigmasTitle.style.cssText = 'color:#ffd700;font-family:Georgia;font-size:13px;margin:0 0 8px;width:100%;';
    enigmasTitle.textContent = `⚔️ Enigmas de ${room.nombre}:`;
    overlay.appendChild(enigmasTitle);

    room.puzzles.forEach((puzzle, i) => {
      const done = window.Game.player && SaveSystem.isPuzzleDone(window.Game.player, puzzle.id);
      const btn = document.createElement('button');
      btn.style.cssText = `
        display:block;width:100%;padding:11px 14px;margin:5px 0;
        background:${done ? '#0a1f0a' : '#1a0e00'};
        border:2px solid ${done ? '#4caf50' : '#8b6914'};
        color:${done ? '#4caf50' : '#f5deb3'};
        font-family:Georgia;font-size:12px;text-align:left;cursor:pointer;
        border-radius:4px;box-sizing:border-box;transition:border-color .2s;
      `;
      btn.textContent = `${done ? '✅' : '🔒'} Enigma ${i + 1}: ${puzzle.title}`;
      btn.onmouseenter = () => { if (!done) btn.style.borderColor = '#ffd700'; };
      btn.onmouseleave = () => { if (!done) btn.style.borderColor = '#8b6914'; };
      btn.onclick = () => {
        if (done) { GameUI.notify('✅ Ya resolviste este enigma.'); return; }
        PuzzleSystem.open(puzzle, () => {
          btn.style.background   = '#0a1f0a';
          btn.style.borderColor  = '#4caf50';
          btn.style.color        = '#4caf50';
          btn.textContent        = `✅ Enigma ${i + 1}: ${puzzle.title}`;
          GameUI.notify('🎉 ¡Enigma superado!');
          GameUI.updateProgressBar();
        });
      };
      overlay.appendChild(btn);
    });

    // Botón volver
    const backBtn = document.createElement('button');
    backBtn.style.cssText = `
      margin-top:18px;padding:10px 28px;background:#3d2200;
      border:2px solid #8b6914;color:#ffd700;font-family:Georgia;
      font-size:13px;cursor:pointer;border-radius:4px;
    `;
    backBtn.textContent = '← Volver al mapa';
    backBtn.onclick = () => overlay.remove();
    overlay.appendChild(backBtn);

    document.getElementById('game-container').appendChild(overlay);
  }

  // ─── (Opcional) rejilla de debug ─────────────────────────────────────────────
  _drawGrid() {
    const g = this.add.graphics().setDepth(50).setAlpha(0.25);
    g.lineStyle(1, 0xffffff);
    for (let c = 0; c <= this.COLS; c++) g.lineBetween(c * this.TILE, 0, c * this.TILE, this.worldH);
    for (let r = 0; r <= this.ROWS; r++) g.lineBetween(0, r * this.TILE, this.worldW, r * this.TILE);
    // Colorear bloqueadas
    this.collisionMap.forEach((row, r) =>
      row.forEach((v, c) => {
        if (v === 1) {
          g.fillStyle(0xff0000, 0.2);
          g.fillRect(c * this.TILE, r * this.TILE, this.TILE, this.TILE);
        }
      })
    );
  }
}
