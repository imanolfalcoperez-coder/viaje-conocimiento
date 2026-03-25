/**
 * CharacterSprite.js
 * Crea el sprite del jugador con estilo pixel art usando Phaser Graphics
 */
function createPlayerTexture(scene, appearance) {
  const key = 'player_sprite';
  if (scene.textures.exists(key)) scene.textures.remove(key);

  const g = scene.make.graphics({ x: 0, y: 0, add: false });
  const W = 16, H = 24;

  // Colores según apariencia
  const skinColor = 0xf4c07a;
  const hairColors = { curly: 0x5c3317, straight: 0xd4a017, long: 0x2c1503, short: 0xff8c00 };
  const topColors = { vest: 0x8b4513, shirt: 0xcc3300, tunic: 0x2e7d32, cloak: 0x6a0dad };
  const bottomColors = { trousers: 0x5d4037, skirt: 0xe6c229, shorts: 0x388e3c };

  const hairC = hairColors[appearance.hair] || 0x5c3317;
  const topC = topColors[appearance.top] || 0x8b4513;
  const botC = bottomColors[appearance.bottom] || 0x5d4037;

  // Cuerpo
  g.fillStyle(topC);
  g.fillRect(3, 8, 10, 8);

  // Cabeza
  g.fillStyle(skinColor);
  g.fillRect(4, 1, 8, 8);

  // Pelo
  g.fillStyle(hairC);
  g.fillRect(4, 0, 8, 3);
  if (appearance.hair === 'long') { g.fillRect(3, 3, 2, 6); g.fillRect(11, 3, 2, 6); }

  // Ojos
  const eyeC = { brown: 0x5c3317, blue: 0x1565c0, green: 0x2e7d32, gray: 0x616161 };
  g.fillStyle(eyeC[appearance.eyes] || 0x5c3317);
  g.fillRect(6, 5, 1, 1);
  g.fillRect(9, 5, 1, 1);

  // Boca
  g.fillStyle(0xcc6666);
  g.fillRect(7, 7, 2, 1);

  // Piernas
  g.fillStyle(botC);
  g.fillRect(3, 16, 4, 6);
  g.fillRect(9, 16, 4, 6);

  // Pies / calzado
  const shoeC = appearance.shoes === 'barefoot' ? skinColor : appearance.shoes === 'boots' ? 0x3e2723 : 0xd4a017;
  g.fillStyle(shoeC);
  g.fillRect(3, 20, 4, 3);
  g.fillRect(9, 20, 4, 3);

  // Brazos
  g.fillStyle(topC);
  g.fillRect(1, 9, 2, 6);
  g.fillRect(13, 9, 2, 6);

  // Manos
  g.fillStyle(skinColor);
  g.fillRect(1, 14, 2, 2);
  g.fillRect(13, 14, 2, 2);

  g.generateTexture(key, W, H);
  g.destroy();
  return key;
}
