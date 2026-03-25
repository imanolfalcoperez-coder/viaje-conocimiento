/**
 * SaveSystem.js
 * Gestiona el guardado y carga de progreso del jugador
 * Los datos se guardan en localStorage con un código único por personaje
 */
const SaveSystem = {

  // Genera un código único para el personaje
  generateCode(name) {
    const prefix = name.substring(0, 5).toUpperCase().replace(/[^A-Z]/g, 'X').padEnd(5, 'X');
    const num = Math.floor(Math.random() * 9000) + 1000;
    return `${prefix}-${num}`;
  },

  // Guarda el estado del jugador
  save(playerData) {
    try {
      const key = `viaje_${playerData.code}`;
      playerData.lastSaved = new Date().toISOString();
      localStorage.setItem(key, JSON.stringify(playerData));
      return true;
    } catch(e) {
      console.error('Error al guardar:', e);
      return false;
    }
  },

  // Carga el estado del jugador por código
  load(code) {
    try {
      const key = `viaje_${code.toUpperCase()}`;
      const data = localStorage.getItem(key);
      if (!data) return null;
      return JSON.parse(data);
    } catch(e) {
      console.error('Error al cargar:', e);
      return null;
    }
  },

  // Crea datos iniciales para un personaje nuevo
  createNewPlayer(name, appearance) {
    const code = this.generateCode(name);
    return {
      code: code,
      name: name,
      appearance: appearance,
      currentDungeon: 'comarca',   // mazmorra actual
      currentRoom: 'entrada',       // sala actual
      completedDungeons: [],        // mazmorras completadas
      completedPuzzles: [],         // puzzles resueltos (por ID)
      unlockedDoors: [],            // puertas abiertas
      inventory: [],                // objetos recogidos
      score: 0,
      sa_progress: {               // progreso por SA (0-100)
        sa1: 0, sa2: 0, sa3: 0, sa4: 0, sa5: 0,
        sa6: 0, sa7: 0, sa8: 0, sa9: 0
      },
      createdAt: new Date().toISOString(),
      lastSaved: null
    };
  },

  // Marca un puzzle como completado y actualiza progreso
  completePuzzle(playerData, puzzleId, saKey) {
    if (!playerData.completedPuzzles.includes(puzzleId)) {
      playerData.completedPuzzles.push(puzzleId);
      playerData.score += 10;
      // Actualizar progreso SA
      if (saKey && playerData.sa_progress[saKey] !== undefined) {
        playerData.sa_progress[saKey] = Math.min(100, playerData.sa_progress[saKey] + 33);
      }
    }
    this.save(playerData);
    return playerData;
  },

  // Desbloquea una puerta
  unlockDoor(playerData, doorId) {
    if (!playerData.unlockedDoors.includes(doorId)) {
      playerData.unlockedDoors.push(doorId);
    }
    this.save(playerData);
    return playerData;
  },

  // Comprueba si un puzzle ya fue resuelto
  isPuzzleDone(playerData, puzzleId) {
    return playerData.completedPuzzles.includes(puzzleId);
  },

  // Comprueba si una puerta está desbloqueada
  isDoorUnlocked(playerData, doorId) {
    return playerData.unlockedDoors.includes(doorId);
  }
};
