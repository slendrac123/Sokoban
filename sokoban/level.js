class Level {
  constructor(grid) {
    this.grid = grid; // Matriz que representa el nivel
  }

  isWall(x, y) {
    return this.grid[y][x] === 1; // 1 es pared
  }

  draw() {
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[y].length; x++) {
        if (this.grid[y][x] === 1) {
          fill(100);
          rect(x * 50, y * 50, 50, 50);
        } else if (this.grid[y][x] === 6){
          fill(25,180,80);
          rect(x * 50, y * 50, 50, 50);
        }
      }
    }
  }
}
