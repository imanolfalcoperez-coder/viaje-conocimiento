/**
 * CharacterSprite.js
 * Sistema de sprites de personaje con 4 direcciones y animación de pies.
 *
 * Cada personaje genera 6 texturas Phaser:
 *   {id}_front, {id}_back, {id}_left, {id}_right  → cuerpo  16×18 px
 *   {id}_feet_a, {id}_feet_b                       → pies    16×8  px
 *
 * Para añadir más personajes: ampliar CHARACTER_PRESETS con el mismo formato.
 * Cuando el usuario suba sprites reales en PNG, sustituir generateCharSprites()
 * por this.load.image(key, 'assets/chars/' + charId + '_front.png') etc.
 */

const CHARACTER_PRESETS = [
  { id: 'c01', name: 'Bilbo',    emoji: '🧙',  skin: 0xf4c07a, hair: 0x5c3317, top: 0x8b4513, bot: 0x5d4037, shoe: 0xf4c07a  },
  { id: 'c02', name: 'Frodo',    emoji: '🌿',  skin: 0xfde0a0, hair: 0x2c1503, top: 0x2e7d32, bot: 0x4e342e, shoe: 0xfde0a0  },
  { id: 'c03', name: 'Samwise',  emoji: '🍳',  skin: 0xf0c888, hair: 0xd4a017, top: 0x795548, bot: 0x4e342e, shoe: 0x4e342e  },
  { id: 'c04', name: 'Pippin',   emoji: '🎵',  skin: 0xfde0b0, hair: 0xd4a017, top: 0xcc3300, bot: 0x5d4037, shoe: 0x3e2723  },
  { id: 'c05', name: 'Merry',    emoji: '🌾',  skin: 0xf4c07a, hair: 0xa0522d, top: 0x388e3c, bot: 0x33691e, shoe: 0xfde0b0  },
  { id: 'c06', name: 'Rosie',    emoji: '🌸',  skin: 0xfde0b0, hair: 0xd4a017, top: 0xe91e63, bot: 0xe6c229, shoe: 0xfde0b0  },
  { id: 'c07', name: 'Lobelia',  emoji: '👒',  skin: 0xf0c888, hair: 0x795548, top: 0x9c27b0, bot: 0x4a148c, shoe: 0x3e2723  },
  { id: 'c08', name: 'Gandalf',  emoji: '🔮',  skin: 0xe8d5b7, hair: 0xeeeeee, top: 0x9e9e9e, bot: 0x616161, shoe: 0x424242  },
];

/** Devuelve el preset del personaje por id (o el primero si no se encuentra) */
function getCharPreset(charId) {
  return CHARACTER_PRESETS.find(p => p.id === charId) || CHARACTER_PRESETS[0];
}

/**
 * Genera las 6 texturas Phaser del personaje indicado.
 * Llamar desde create() de la escena antes de usar el sprite.
 */
function generateCharSprites(scene, charId) {
  const preset = getCharPreset(charId);
  const BODY_W = 16, BODY_H = 18;
  const FEET_W = 16, FEET_H = 8;

  ['front', 'back', 'left', 'right'].forEach(dir => {
    const key = preset.id + '_' + dir;
    if (scene.textures.exists(key)) scene.textures.remove(key);
    const g = scene.make.graphics({ x: 0, y: 0, add: false });
    _drawBody(g, dir, preset);
    g.generateTexture(key, BODY_W, BODY_H);
    g.destroy();
  });

  ['a', 'b'].forEach(frame => {
    const key = preset.id + '_feet_' + frame;
    if (scene.textures.exists(key)) scene.textures.remove(key);
    const g = scene.make.graphics({ x: 0, y: 0, add: false });
    _drawFeet(g, frame, preset);
    g.generateTexture(key, FEET_W, FEET_H);
    g.destroy();
  });
}

// ─── DIBUJO DEL CUERPO (16×18) ────────────────────────────────────────────────
function _drawBody(g, dir, p) {
  const { skin, hair, top } = p;
  const eyeC  = 0x3d1f00;
  const mouthC = 0xcc7777;

  if (dir === 'front') {
    g.fillStyle(hair);  g.fillRect(4, 0, 8, 2);          // pelo top
    g.fillStyle(skin);  g.fillRect(4, 1, 8, 7);           // cabeza
    g.fillStyle(skin);  g.fillRect(3, 3, 1, 2);           // oreja izq
                        g.fillRect(12, 3, 1, 2);          // oreja der
    g.fillStyle(eyeC);  g.fillRect(6, 4, 1, 1);           // ojo izq
                        g.fillRect(9, 4, 1, 1);           // ojo der
    g.fillStyle(mouthC);g.fillRect(7, 6, 2, 1);           // boca

  } else if (dir === 'back') {
    g.fillStyle(hair);  g.fillRect(3, 0, 10, 3);          // pelo (más visible desde atrás)
    g.fillStyle(skin);  g.fillRect(4, 1, 8, 7);           // cabeza (parte trasera)
    g.fillStyle(hair);  g.fillRect(3, 1, 1, 5);           // pelo lateral izq
                        g.fillRect(12, 1, 1, 5);          // pelo lateral der

  } else if (dir === 'left') {
    // Cara mirando a la IZQUIERDA
    g.fillStyle(hair);  g.fillRect(6, 0, 6, 2);           // pelo (visible desde izq)
    g.fillStyle(skin);  g.fillRect(5, 1, 7, 7);           // cabeza perfil
    g.fillStyle(skin);  g.fillRect(4, 3, 1, 2);           // oreja visible
    g.fillStyle(eyeC);  g.fillRect(8, 4, 1, 1);           // único ojo
    g.fillStyle(hair);  g.fillRect(11, 1, 1, 4);          // pelo trasero

  } else { // right
    // Cara mirando a la DERECHA
    g.fillStyle(hair);  g.fillRect(4, 0, 6, 2);           // pelo
    g.fillStyle(skin);  g.fillRect(4, 1, 7, 7);           // cabeza perfil
    g.fillStyle(skin);  g.fillRect(11, 3, 1, 2);          // oreja visible
    g.fillStyle(eyeC);  g.fillRect(7, 4, 1, 1);           // único ojo
    g.fillStyle(hair);  g.fillRect(4, 1, 1, 4);           // pelo trasero
  }

  // Torso (igual en todas las direcciones)
  g.fillStyle(top);
  g.fillRect(3, 8, 10, 10);   // cuerpo central
  g.fillRect(1, 9,  2,  7);   // brazo izquierdo
  g.fillRect(13, 9, 2,  7);   // brazo derecho

  // Manos
  g.fillStyle(skin);
  g.fillRect(1, 15, 2, 2);
  g.fillRect(13, 15, 2, 2);
}

// ─── DIBUJO DE LOS PIES (16×8) ────────────────────────────────────────────────
// Frame A: pie izquierdo adelante
// Frame B: pie derecho adelante
function _drawFeet(g, frame, p) {
  const { bot, shoe } = p;

  if (frame === 'a') {
    // Piernas
    g.fillStyle(bot);
    g.fillRect(3, 0, 4, 4);   // pierna izq (adelante)
    g.fillRect(9, 1, 4, 3);   // pierna der (atrás, ligeramente más baja)
    // Pies
    g.fillStyle(shoe);
    g.fillRect(2, 4, 5, 3);   // pie izq (adelante, más visible)
    g.fillRect(9, 4, 4, 2);   // pie der (atrás, más pequeño)

  } else {
    // Piernas
    g.fillStyle(bot);
    g.fillRect(9, 0, 4, 4);   // pierna der (adelante)
    g.fillRect(3, 1, 4, 3);   // pierna izq (atrás)
    // Pies
    g.fillStyle(shoe);
    g.fillRect(9, 4, 5, 3);   // pie der (adelante)
    g.fillRect(3, 2);   // pie izq (atrás)
  }
}

// ─── PREVIEW EN CANVAS HTML (para la pantalla de selección) ──────────────────
// Dibuja una previsualización del personaje en un canvas 2D nativo (no Phaser)
function drawCharPreviewHTML(canvas, preset) {
  const ctx = canvas.getContext('2d');
  const scale = 4;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.imageSmoothingEnabled = false;

  const p = preset;
  const eyeC  = '#3d1f00';
  const mouthC = '#cc7777';
  const toHex = c => '#' + c.toString(16).padStart(6, '0');

  const fill = (color, x, y, w, h) => {
    ctx.fillStyle = toHex(color);
    ctx.fillRect(x * scale, y * scale, w * scale, h * scale);
  };

  // Pelo
  fill(p.hair, 4, 0, 8, 2);
  // Cabeza
  fill(p.skin, 4, 1, 8, 7);
  // Orejas
  fill(p.skin, 3, 3, 1, 2);
  fill(p.skin, 12, 3, 1, 2);
  // Ojos
  ctx.fillStyle = eyeC;
  ctx.fillRect(6*scale, 4*scale, scale, scale);
  ctx.fillRect(9*scale, 4*scale, scale, scale);
  // Boca
  ctx.fillStyle = mouthC;
  ctx.fillRect(7*scale, 6*scale, 2*scale, scale);
  // Torso
  fill(p.top, 3, 8, 10, 10);
  fill(p.top, 1, 9, 2, 7);
  fill(p.top, 13, 9, 2, 7);
  fill(p.skin, 1, 15, 2, 2);
  fill(p.skin, 13, 15, 2, 2);
  // Piernas
  fill(p.bot, 3, 18, 4, 4);
  fill(p.bot, 9, 18, 4, 4);
  // Pies
  fill(p.shoe, 2, 22, 5, 2);
  fill(p.shoe, 9, 22, 5, 2);
}
