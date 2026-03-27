/**
 * BaseDungeonScene.js
 * Clase base reutilizable para las mazmorras SA2–SA9.
 * Genera el mapa de forma procedural (sin imágenes externas).
 *
 * Subclases DEBEN implementar el getter:
 *   get DUNGEON_CONFIG() { return { ... }; }
 *
 * DUNGEON_CONFIG shape:
 *   saKey, dungeonId, nextDungeon, dungeonName, locationName
 *   bgColor, floorA, floorB, wallDark, wallLight, npcColor, npcBorder
 *   startCol, startRow, collisionMap
 *   intro[]        — líneas de diálogo de apertura de Gandalf
 *   saData         — { salaKey: { nombre, descripcion, gandalf_entrada[], pergamino_teoria, puzzles[] } }
 *   puertaBlockedText[], puertaOpenText[]
 *   interactables[] — { col, row, key, emoji, label, salaKey } | { col, row, isSalida, label }
 */
class BaseDungeonScene extends Phaser.Scene {
  constructor(key) { super({ key }); }

  // ─── LIFECYCLE ──────────────────────────────────────────────────────────────
  create() {
    try { this._createScene(); }
    catch (err) {
      console.error(`❌ ${this.scene.key}.create():`, err);
      this.add.text(400, 300,
        `⚠️ Error cargando ${this.scene.key}\n${err.message}`,
        { fontSize: '13px', fill: '#ff4444', align: 'center', wordWrap: { width: 700 } }
      ).setOrigin(0.5);
    }
  }

  _createScene() {
    const cfg = this.DUNGEON_CONFIG;

    // Detener otras escenas activas
    this.scene.manager.getScenes(true)
      .filter(s => s !== this)
      .forEach(s => s.scene.stop());

    Game.currentSA           = cfg.saKey;
    Game.currentLocationName = cfg.locationName;
    GameUI.updateHUD();

    // ── Grid ────────────────────────────────────────────────────────────────
    this.TILE         = 48;
    this.collisionMap = cfg.collisionMap;
    this.COLS         = cfg.collisionMap[0].length;
    this.ROWS         = cfg.collisionMap.length;
    this.worldW       = this.COLS * this.TILE;
    this.worldH       = this.ROWS * this.TILE;

    this.interactables = cfg.interactables;

    // ── Mapa procedural ──────────────────────────────────────────────────────
    this._drawMap(cfg);

    // ── Jugador ──────────────────────────────────────────────────────────────
    this.gridX = cfg.startCol;
    this.gridY = cfg.startRow;
    this._createPlayer();

    // ── Cámara ───────────────────────────────────────────────────────────────
    this.cameras.main
      .setZoom(1.5)
      .setBounds(0, 0, this.worldW, this.worldH)
      .startFollow(this.player, true, 0.15, 0.15);

    // ── Input ─────────────────────────────────────────────────────────────────
    this.cursors  = this.input.keyboard.createCursorKeys();
    this.wasd     = {
      up:    this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      down:  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      left:  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
    };
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    // ── Icono de interacción ──────────────────────────────────────────────────
    this.interactIcon = this.add.text(0, 0, '💬', { fontSize: '18px' })
      .setDepth(20).setAlpha(0);

    // ── Estado ───────────────────────────────────────────────────────────────
    this.isMoving     = false;
    this.moveDelay    = 0;
    this.MOVE_FIRST   = 200;
    this.MOVE_REP     = 100;
    this.moveDuration = 120;
    this._nearObject  = null;
    this._feetTimer   = 0;
    this._feetFrame   = 'a';

    // ── Intro ────────────────────────────────────────────────────────────────
    this.time.delayedCall(400, () => {
      DialogSystem.show(cfg.intro.map(t => ({ speaker: '🧙 Gandalf', text: t })));
    });
  }

  // ─── MAPA PROCEDURAL ────────────────────────────────────────────────────────
  _drawMap(cfg) {
    const T = this.TILE;

    // Fondo base
    const bg = this.add.graphics().setDepth(0);
    bg.fillStyle(cfg.bgColor);
    bg.fillRect(0, 0, this.worldW, this.worldH);

    // Suelo con patrón de tablero
    const floor = this.add.graphics().setDepth(1);
    for (let r = 0; r < this.ROWS; r++) {
      for (let c = 0; c < this.COLS; c++) {
        if (this.collisionMap[r][c] === 0) {
          floor.fillStyle((r + c) % 2 === 0 ? cfg.floorA : cfg.floorB);
          floor.fillRect(c * T + 1, r * T + 1, T - 2, T - 2);
        }
      }
    }

    // Paredes con bisel
    const walls = this.add.graphics().setDepth(2);
    for (let r = 0; r < this.ROWS; r++) {
      for (let c = 0; c < this.COLS; c++) {
        if (this.collisionMap[r][c] === 1) {
          walls.fillStyle(cfg.wallDark);
          walls.fillRect(c * T, r * T, T, T);
          // Bisel superior/izquierdo más claro
          walls.fillStyle(cfg.wallLight);
          walls.fillRect(c * T,     r * T, T, 5);
          walls.fillRect(c * T,     r * T, 5, T);
          // Bisel inferior/derecho más oscuro
          walls.fillStyle(cfg.wallDark);
          walls.fillRect(c * T + T - 3, r * T,     3, T);
          walls.fillRect(c * T,         r * T + T - 3, T, 3);
        }
      }
    }

    // Puerta de salida
    const exitObj = this.interactables.find(o => o.isSalida);
    if (exitObj) {
      const dg = this.add.graphics().setDepth(3);
      dg.fillStyle(0x7a3a0a);
      dg.fillRect(exitObj.col * T + 4, exitObj.row * T + 2, T - 8, T - 4);
      dg.fillStyle(0xd4a96a, 0.6);
      dg.fillRect(exitObj.col * T + T / 2 - 3, exitObj.row * T + 4, 6, T - 8);
      this.add.text(exitObj.col * T + T / 2, exitObj.row * T + T / 2,
        '🚪', { fontSize: '20px' }).setOrigin(0.5).setDepth(5);
      this.add.text(exitObj.col * T + T / 2, exitObj.row * T + T + 6,
        exitObj.label,
        { fontSize: '7px', fill: '#ffd700', align: 'center', wordWrap: { width: T * 2.5 } }
      ).setOrigin(0.5).setDepth(5);
    }

    // NPCs con sombra + círculo + emoji + label
    this.interactables.filter(o => !o.isSalida).forEach(obj => {
      const nx = obj.col * T + T / 2;
      const ny = obj.row * T + T / 2;

      const ng = this.add.graphics().setDepth(3);
      // Sombra
      ng.fillStyle(0x000000, 0.25);
      ng.fillEllipse(nx + 3, ny + 6, T * 0.8, T * 0.35);
      // Cuerpo
      ng.fillStyle(cfg.npcColor);
      ng.fillCircle(nx, ny, T * 0.52);
      ng.lineStyle(3, cfg.npcBorder || 0xffd700);
      ng.strokeCircle(nx, ny, T * 0.52);

      this.add.text(nx, ny, obj.emoji || '👤', { fontSize: '22px' })
        .setOrigin(0.5).setDepth(5);
      this.add.text(nx, ny + T + 2, obj.label,
        { fontSize: '7px', fill: '#ffd700', align: 'center', wordWrap: { width: T * 3 } }
      ).setOrigin(0.5).setDepth(5);
    });

    // Decoraciones opcionales (subclases pueden sobreescribir)
    if (typeof this._extraDecorations === 'function') this._extraDecorations(cfg);
  }

  // ─── JUGADOR ────────────────────────────────────────────────────────────────
  _createPlayer() {
    const p      = window.Game.player;
    const charId = p?.charId || 'c01';
    this._charId  = charId;
    this._facing  = 'front';

    const px = this.gridX * this.TILE + this.TILE / 2;
    const py = this.gridY * this.TILE + this.TILE / 2;

    this.player    = this.add.container(px, py).setDepth(10);
    this._feetImg  = this.add.image(0, 8, charId + '_feet_a').setScale(1.5);
    this._bodyImg  = this.add.image(0, 0, charId + '_front').setScale(1.5);
    const nameText = this.add.text(0, -30, p?.name || 'Viajero', {
      fontSize: '9px', fill: '#ffd700', stroke: '#000', strokeThickness: 2
    }).setOrigin(0.5).setDepth(11);
    this.player.add([this._feetImg, this._bodyImg, nameText]);
  }

  // ─── MOVIMIENTO ─────────────────────────────────────────────────────────────
  _walkable(col, row) {
    if (row < 0 || row >= this.ROWS || col < 0 || col >= this.COLS) return false;
    return this.collisionMap[row][col] === 0;
  }

  _tileToWorld(n) { return n * this.TILE + this.TILE / 2; }

  _movePlayer(dcol, drow) {
    const nc = this.gridX + dcol;
    const nr = this.gridY + drow;

    if      (dcol < 0) this._facing = 'left';
    else if (dcol > 0) this._facing = 'right';
    else if (drow < 0) this._facing = 'back';
    else               this._facing = 'front';
    this._bodyImg.setTexture(this._charId + '_' + this._facing);

    if (!this._walkable(nc, nr)) {
      this.tweens.add({
        targets: this.player,
        x: this.player.x + dcol * 6, y: this.player.y + drow * 6,
        duration: 60, yoyo: true, ease: 'Power1'
      });
      return;
    }

    this.isMoving = true;
    this.gridX    = nc;
    this.gridY    = nr;
    this.tweens.add({
      targets: this.player,
      x: this._tileToWorld(nc), y: this._tileToWorld(nr),
      duration: this.moveDuration, ease: 'Linear',
      onComplete: () => { this.isMoving = false; }
    });
    this._checkNearby();
  }

  // ─── DETECCIÓN DE OBJETO CERCANO ────────────────────────────────────────────
  _checkNearby() {
    const near = this.interactables.find(obj =>
      Math.abs(obj.col - this.gridX) <= 1 && Math.abs(obj.row - this.gridY) <= 1 &&
      !(Math.abs(obj.col - this.gridX) === 1 && Math.abs(obj.row - this.gridY) === 1)
    );
    if (near) {
      this.interactIcon
        .setPosition(this._tileToWorld(near.col), this._tileToWorld(near.row) - 40)
        .setAlpha(1);
      this._nearObject = near;
    } else {
      this.interactIcon.setAlpha(0);
      this._nearObject = null;
    }
  }

  // ─── UPDATE ──────────────────────────────────────────────────────────────────
  update(time, delta) {
    if (DialogSystem.isOpen) return;
    if (document.getElementById('puzzle-overlay')?.classList.contains('active')) return;

    // Animación pies
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

    // Interacción con ESPACIO / ENTER
    if (Phaser.Input.Keyboard.JustDown(this.spaceKey) ||
        Phaser.Input.Keyboard.JustDown(this.enterKey)) {
      if (this._nearObject) { this._onInteract(this._nearObject); return; }
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

    if (dcol === 0 && drow === 0) { this.moveDelay = 0; return; }

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
      if (this.moveDelay > this.MOVE_FIRST &&
          (this.moveDelay - this.MOVE_FIRST) % this.MOVE_REP < delta) {
        this._movePlayer(dcol, drow);
      }
    }
  }

  // ─── INTERACCIONES ───────────────────────────────────────────────────────────
  _onInteract(obj) {
    if (obj.isSalida) { this._onSalida(); return; }
    const sala = this.DUNGEON_CONFIG.saData[obj.salaKey];
    if (!sala) return;
    DialogSystem.show(
      sala.gandalf_entrada.map(t => ({ speaker: '🧙 Gandalf', text: t })),
      () => this._showRoomOverlay(sala)
    );
  }

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
      player.currentDungeon    = cfg.nextDungeon;
      SaveSystem.save(player);
      GameUI.updateProgressBar();
      DialogSystem.show(
        cfg.puertaOpenText.map(t => ({ speaker: '🧙 Gandalf', text: t })),
        () => {
          GameUI.notify(`🌟 ¡${cfg.dungeonName} completada! Partiendo al Mapa Mundial…`);
          this.time.delayedCall(1200, () => this.scene.start('WorldMap'));
        }
      );
    }
  }

  _showRoomOverlay(room) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:absolute;top:0;left:0;width:800px;height:600px;
      background:radial-gradient(ellipse,#1a0e00 60%,#0d0600);
      z-index:80;display:flex;flex-direction:column;align-items:center;
      overflow-y:auto;padding:20px 25px 30px;box-sizing:border-box;
    `;

    const title = document.createElement('h2');
    title.style.cssText = 'color:#ffd700;font-family:Georgia;margin:0 0 4px;font-size:19px;text-align:center;';
    title.textContent   = room.nombre;
    overlay.appendChild(title);

    const sub = document.createElement('p');
    sub.style.cssText = 'color:#c4a35a;font-size:11px;font-style:italic;margin:0 0 14px;text-align:center;';
    sub.textContent   = room.descripcion;
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

    const enigTitle = document.createElement('p');
    enigTitle.style.cssText = 'color:#ffd700;font-family:Georgia;font-size:13px;margin:0 0 8px;width:100%;';
    enigTitle.textContent   = `❧ Enigmas de ${room.nombre}:`;
    overlay.appendChild(enigTitle);

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
    backBtn.onclick     = () => overlay.remove();
    overlay.appendChild(backBtn);

    document.getElementById('game-container').appendChild(overlay);
  }
}

// ─── MAPA DE COLISIONES ESTÁNDAR 24×18 ─────────────────────────────────────
// Puerta de salida en columnas 11-12, fila 16
const STD_COLLISION_MAP = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
