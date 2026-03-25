/**
 * LaComarca.js  — SA1
 * Escena de La Comarca usando la imagen real del mapa de la Taberna.
 *
 * World: 2052×2052 px  |  Tile: 54 px  |  Grid: 38×38
 * Viewport: 800×600 con zoom 1.5  →  se ven ~9.8×7.4 tiles en pantalla
 *
 * El personaje es un Phaser Container con dos capas:
 *   – Cuerpo  (textura direccional: front/back/left/right)
 *   – Pies    (alterna feet_a / feet_b durante el movimiento)
 */
class LaComarcaScene extends Phaser.Scene {
  constructor() { super({ key: 'LaComarca' }); }

  // ─── PRELOAD ────────────────────────────────────────────────────────────────
  preload() {
    if (typeof MAP_TABERNA_B64 !== 'undefined') {
      try {
        const raw   = MAP_TABERNA_B64;
        const semi  = raw.indexOf(';');
        const mime  = semi > 0 ? raw.slice(5, semi) : 'image/jpeg';
        const b64   = raw.slice(raw.indexOf(',') + 1);
        const bin   = atob(b64);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        const blob       = new Blob([bytes], { type: mime });
        this._mapBlobUrl = URL.createObjectURL(blob);
        this.load.image('map_taberna', this._mapBlobUrl);
        console.log('🗺️ map_taberna: blob URL creada, cargando…');
      } catch (e) {
        console.warn('⚠️ preload map_taberna falló:', e.message);
      }
    }
  }

  // ─── CREATE ─────────────────────────────────────────────────────────────────
  create() {
    console.log('🌿 LaComarca create() — jugador:', window.Game.player?.name ?? 'NULL');
    try {
      this._createScene();
    } catch (err) {
      console.error('❌ Error en LaComarca.create():', err);
      this.add.text(400, 300,
        '⚠️ Error al cargar La Comarca\nRevisa la consola (F12) para detalles.',
        { fontSize: '14px', fill: '#ff4444', align: 'center', wordWrap: { width: 700 } }
      ).setOrigin(0.5);
    }
  }

  _createScene() {
    if (this.scene.isActive('WorldMap')) this.scene.stop('WorldMap');

    Game.currentSA = 'sa1';
    Game.currentLocationName = '🌿 La Comarca — La Taberna del Hobbit';
    GameUI.updateHUD();

    // ── Constantes de cuadrícula ──────────────────────────────────────────────
    this.TILE   = 54;        // px por celda (imagen 2048÷38 ≈ 53.9 → 54)
    this.COLS   = 38;
    this.ROWS   = 38;
    this.worldW = this.COLS * this.TILE;  // 2052
    this.worldH = this.ROWS * this.TILE;  // 2052

    // ── Mapa de colisiones (38×38) ────────────────────────────────────────────
    // Generado escalando el mapa 25×25 original. 0=transitable | 1=bloqueado
    this.collisionMap = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // 0
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // 1
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // 2
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // 3
      [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1], // 4
      [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1], // 5
      [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1], // 6
      [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1], // 7
      [1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1], // 8  pared norte
      [1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1], // 9
      [1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 10
      [1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 11
      [1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 12
      [1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1], // 13
      [1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 14
      [1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 15
      [1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 16
      [1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 17
      [1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 18
      [1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 19
      [1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 20
      [1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 21
      [1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 22
      [1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 23
      [1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 24
      [1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 25
      [1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 26
      [1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1], // 27
      [1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1], // 28 pared sur (puerta cols 17-19)
      [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1], // 29
      [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1], // 30
      [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1], // 31
      [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1], // 32
      [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1], // 33
      [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1], // 34
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // 35
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // 36
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // 37
    ];

    // ── Fondo: imagen del mapa ─────────────────────────────────────────────────
    if (this._mapBlobUrl) {
      URL.revokeObjectURL(this._mapBlobUrl);
      this._mapBlobUrl = null;
    }
    if (this.textures.exists('map_taberna')) {
      this.add.image(this.worldW / 2, this.worldH / 2, 'map_taberna')
        .setDisplaySize(this.worldW, this.worldH)
        .setDepth(0);
      console.log('✅ Mapa cargado correctamente');
    } else {
      const bg = this.add.graphics().setDepth(0);
      bg.fillStyle(0x2d5a27);
      bg.fillRect(0, 0, this.worldW, this.worldH);
      bg.fillStyle(0x3a7a32, 0.5);
      for (let x = 0; x < this.worldW; x += 108) {
        for (let y = 0; y < this.worldH; y += 108) {
          if ((x + y) % 216 === 0) bg.fillRect(x, y, 54, 54);
        }
      }
      console.warn('⚠️ Usando fondo de color (imagen no disponible)');
    }

    // ── Cámara ────────────────────────────────────────────────────────────────
    this.cameras.main.setBounds(0, 0, this.worldW, this.worldH);
    this.cameras.main.setZoom(1.5);

    // ── Jugador ───────────────────────────────────────────────────────────────
    const charId    = window.Game.player.appearance?.charId || 'c01';
    this._charId    = charId;
    this._facing    = 'front';
    this._feetFrame = 'a';
    this._feetTimer = 0;

    generateCharSprites(this, charId);

    this.gridX = 18;
    this.gridY = 31;   // exterior sur, frente a la entrada
    const startX = this._tileToWorld(this.gridX);
    const startY = this._tileToWorld(this.gridY);

    // Capas del personaje: pies abajo, cuerpo encima
    this._bodyImg = this.add.image(0, -5,  charId + '_front').setScale(2.5).setDepth(1);
    this._feetImg = this.add.image(0,  14, charId + '_feet_a').setScale(2.5).setDepth(0);

    this.playerLabel = this.add.text(0, -38, window.Game.player.name, {
      fontSize: '9px', fill: '#ffd700', stroke: '#000', strokeThickness: 2
    }).setOrigin(0.5).setDepth(2);

    this.player = this.add.container(startX, startY,
      [this._feetImg, this._bodyImg, this.playerLabel]
    ).setDepth(10);

    this.cameras.main.startFollow(this.player, true, 1, 1);

    // ── Movimiento en cuadrícula ──────────────────────────────────────────────
    this.isMoving     = false;
    this.moveDelay    = 0;
    this.MOVE_FIRST   = 220;
    this.MOVE_REP     = 130;
    this.moveDuration = 110;

    this.cursors  = this.input.keyboard.createCursorKeys();
    this.wasd     = this.input.keyboard.addKeys({
      up:    Phaser.Input.Keyboard.KeyCodes.W,
      down:  Phaser.Input.Keyboard.KeyCodes.S,
      left:  Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    // ── Indicador de interacción ──────────────────────────────────────────────
    this.interactIcon = this.add.text(0, 0, '[ ESPACIO ]', {
      fontSize: '9px', fill: '#ffd700',
      backgroundColor: '#1a0a00',
      padding: { x: 4, y: 2 }
    }).setOrigin(0.5).setDepth(20).setAlpha(0);

    // ── Objetos interactivos ──────────────────────────────────────────────────
    this.interactables = [
      { col:  4, row:  6, key: 'bienvenida',   label: '🪨 Piedra de\nBienvenida',  cb: () => this._onBienvenida()   },
      { col: 10, row: 10, key: 'tablon',        label: '📌 Tablón de\nla Taberna',  cb: () => this._onTablon()        },
      { col: 16, row: 12, key: 'barra',         label: '🍺 La Barra\ndel Tabernero',cb: () => this._onBarra()         },
      { col: 16, row: 19, key: 'mesa',          label: '📋 La Gran\nMesa',          cb: () => this._onMesa()          },
      { col: 18, row: 27, key: 'puerta_salida', label: '🚪 Salida\nhacia Bree',     cb: () => this._onPuertaSalida()  },
    ];

    this.interactables.forEach(obj => {
      this.add.text(
        this._tileToWorld(obj.col),
        this._tileToWorld(obj.row) - 32,
        obj.label,
        { fontSize: '7px', fill: '#ffd700', stroke: '#000', strokeThickness: 2, align: 'center' }
      ).setOrigin(0.5).setDepth(9);
    });

    // ── HUD controles (fijo en cámara) ────────────────────────────────────────
    this.controlsText = this.add.text(400, 590, '⬆⬇⬅➡  Mover  |  ESPACIO  Interactuar', {
      fontSize: '10px', fill: '#c4a35a', stroke: '#000', strokeThickness: 1
    }).setOrigin(0.5).setScrollFactor(0).setDepth(30);

    // ── Introducción de Gandalf ────────────────────────────────────────────────
    this._gandalfDone = false;
    this.time.delayedCall(400, () => {
      DialogSystem.show([{
        speaker: '🧙 Gandalf',
        text: `Bienvenido, ${window.Game.player.name}. Muévete con las flechas o WASD. Acércate a los objetos y pulsa ESPACIO para interactuar. ¡Empieza explorando La Comarca!`
      }]);
    });
  }

  // ── tile → píxel (centro de celda) ────────────────────────────────────────
  _tileToWorld(t) { return t * this.TILE + this.TILE / 2; }

  // ── ¿Es transitable la celda? ─────────────────────────────────────────────
  _walkable(col, row) {
    if (col < 0 || col >= this.COLS || row < 0 || row >= this.ROWS) return false;
    return this.collisionMap[row][col] === 0;
  }

  // ── MOVER AL JUGADOR ──────────────────────────────────────────────────────
  _movePlayer(dcol, drow) {
    if (this.isMoving) return;

    const nc = this.gridX + dcol;
    const nr = this.gridY + drow;

    // Actualizar sprite de dirección (aunque no se pueda mover)
    if      (dcol < 0) this._facing = 'left';
    else if (dcol > 0) this._facing = 'right';
    else if (drow < 0) this._facing = 'back';
    else               this._facing = 'front';
    this._bodyImg.setTexture(this._charId + '_' + this._facing);

    if (!this._walkable(nc, nr)) {
      this.tweens.add({
        targets: this.player,
        x: this.player.x + dcol * 8,
        y: this.player.y + drow * 8,
        duration: 60, yoyo: true, ease: 'Power1'
      });
      return;
    }

    this.isMoving = true;
    this.gridX = nc;
    this.gridY = nr;
    const tx = this._tileToWorld(nc);
    const ty = this._tileToWorld(nr);

    this.tweens.add({
      targets: this.player,
      x: tx, y: ty,
      duration: this.moveDuration,
      ease: 'Linear',
      onComplete: () => { this.isMoving = false; }
    });

    this._checkNearby();
  }

  // ── DETECTAR OBJETO CERCANO ───────────────────────────────────────────────
  _checkNearby() {
    const near = this.interactables.find(obj =>
      Math.abs(obj.col - this.gridX) <= 1 && Math.abs(obj.row - this.gridY) <= 1 &&
      !(Math.abs(obj.col - this.gridX) === 1 && Math.abs(obj.row - this.gridY) === 1)
    );
    if (near) {
      this.interactIcon.setPosition(
        this._tileToWorld(near.col),
        this._tileToWorld(near.row) - 42
      ).setAlpha(1);
      this._nearObject = near;
    } else {
      this.interactIcon.setAlpha(0);
      this._nearObject = null;
    }
  }

  // ── UPDATE ────────────────────────────────────────────────────────────────
  update(time, delta) {
    if (DialogSystem.isOpen) return;
    if (document.getElementById('puzzle-overlay').classList.contains('active')) return;

    // Animación de pies
    if (this.isMoving) {
      this._feetTimer += delta;
      if (this._feetTimer > 120) {
        this._feetTimer = 0;
        this._feetFrame = this._feetFrame === 'a' ? 'b' : 'a';
        this._feetImg.setTexture(this._charId + '_feet_' + this._feetFrame);
      }
    } else {
      this._feetImg.setTexture(this._charId + '_feet_a');
      this._feetTimer = 0;
    }

    // ESPACIO / ENTER → interactuar
    if (Phaser.Input.Keyboard.JustDown(this.spaceKey) ||
        Phaser.Input.Keyboard.JustDown(this.enterKey)) {
      if (this._nearObject) { this._nearObject.cb(); return; }
    }

    if (this.isMoving) return;

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
    if (!moving) { this.moveDelay = 0; return; }

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

  // ────────────────────────────────────────────────────────────────────────────
  // CALLBACKS DE OBJETOS INTERACTIVOS
  // ────────────────────────────────────────────────────────────────────────────

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

  // ── OVERLAY DE SALA (teoría + puzzles) ─────────────────────────────────────
  _showRoomOverlay(room, roomKey) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:absolute;top:0;left:0;width:800px;height:600px;
      background:radial-gradient(ellipse,#1a0e00 60%,#0d0600);
      z-index:80;display:flex;flex-direction:column;align-items:center;
      overflow-y:auto;padding:20px 25px 30px;box-sizing:border-box;
    `;

    const title = document.createElement('h2');
    title.style.cssText = 'color:#ffd700;font-family:Georgia;margin:0 0 4px;font-size:19px;text-align:center;';
    title.textContent = room.nombre;
    overlay.appendChild(title);

    const sub = document.createElement('p');
    sub.style.cssText = 'color:#c4a35a;font-size:11px;font-style:italic;margin:0 0 14px;text-align:center;';
    sub.textContent = room.descripcion;
    overlay.appendChild(sub);

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

    const enigmasTitle = document.createElement('p');
    enigmasTitle.style.cssText = 'color:#ffd700;font-family:Georgia;font-size:13px;margin:0 0 8px;width:100%;';
    enigmasTitle.textContent = `❖ Enigmas de ${room.nombre}:`;
    overlay.appendChild(enigmasTitle);

    room.puzzles.forEach((puzzle, i) => {
      const done = window.Game.player && SaveSystem.isPuzzleDone(window.Game.player, puzzle.id);
      const btn  = document.createElement('button');
      btn.style.cssText = `
        display:block;width:100%;padding:11px 14px;margin:5px 0;
        background:${done ? '#0a1f0a' : '#1a0e00'};
        border:2px solid ${done ? '#4caf50' : '#8b6914'};
        color:${done ? '#4caf50' : '#f5deb3'};
        font-family:Georgia;font-size:12px;text-align:left;cursor:pointer;
        border-radius:4px;box-sizing:border-box;transition:border-color .2s;
      `;
      btn.textContent = `${done ? '✅' : '📜'} Enigma ${i + 1}: ${puzzle.title}`;
      btn.onmouseenter = () => { if (!done) btn.style.borderColor = '#ffd700'; };
      btn.onmouseleave = () => { if (!done) btn.style.borderColor = '#8b6914'; };
      btn.onclick = () => {
        if (done) { GameUI.notify('✅ Ya resolviste este enigma.'); return; }
        PuzzleSystem.open(puzzle, () => {
          btn.style.background  = '#0a1f0a';
          btn.style.borderColor = '#4caf50';
          btn.style.color       = '#4caf50';
          btn.textContent       = `✅ Enigma ${i + 1}: ${puzzle.title}`;
          GameUI.notify('💡 ¡Enigma superado!');
          GameUI.updateProgressBar();
        });
      };
      overlay.appendChild(btn);
    });

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

  // ── Rejilla de debug (descomentar para ajustar colisiones) ─────────────────
  _drawGrid() {
    const g = this.add.graphics().setDepth(50).setAlpha(0.25);
    g.lineStyle(1, 0xffffff);
    for (let c = 0; c <= this.COLS; c++) g.lineBetween(c * this.TILE, 0, c * this.TILE, this.worldH);
    for (let r = 0; r <= this.ROWS; r++) g.lineBetween(0, r * this.TILE, this.worldW, r * this.TILE);
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
