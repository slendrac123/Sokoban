// 0 = Espacio vacio
// 1 = Pared
// 2 = Caja
// 3 = CheckPoint
// 4 = Player (solo uno)
// 5 = Exterior

class Scene {
  constructor() {
    this.levels = [];
    this.currentLevelIndex = 0;

    // Define los niveles como matrices
  this.levels.push([
      [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 1, 3, 1, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 1, 0, 1, 1, 1, 1, 5, 5, 5, 5],
      [5, 5, 5, 1, 1, 1, 2, 0, 2, 3, 1, 5, 5, 5, 5],
      [5, 5, 5, 1, 3, 0, 2, 4, 1, 1, 1, 5, 5, 5, 5],
      [5, 5, 5, 1, 1, 1, 1, 2, 1, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 5, 1, 3, 1, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 5, 1, 1, 1, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
]);

    this.levels.push([
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 4, 0, 0, 0, 0, 0, 0, 0, 2, 1],
      [1, 0, 2, 0, 0, 0, 0, 0, 3, 0, 1],
      [1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1],
      [1, 0, 0, 2, 0, 3, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]);

    this.levels.push([
      [1, 1, 1, 1, 1, 1],
      [1, 4, 0, 0, 0, 1],
      [1, 0, 3, 2, 0, 1],
      [1, 0, 2, 3, 0, 1],
      [1, 1, 1, 1, 1, 1],
    ]);
  }

  getCurrentLevel() {
    return this.levels[this.currentLevelIndex];
  }

  nextLevel() {
    if (this.currentLevelIndex < this.levels.length - 1) {
      this.currentLevelIndex++;
      return true;
    }
    return false;
  }

  resetLevel() {
    // Restaura el nivel actual al estado inicial
    return this.getCurrentLevel();
  }
}