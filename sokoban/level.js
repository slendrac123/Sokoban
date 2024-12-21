class Level {
  
  constructor(grid) {
    this.grid = grid; // Matriz que representa el nivel
    this.preloadAssets();
  }

  preloadAssets() {
    this.wallAsset = loadImage('/assets/wall_1.png');
    this.envAsset = loadImage('/assets/env_1.png');
    this.floorAsset = loadImage('/assets/floor_1.png');
    this.floorTargetAsset = loadImage('/assets/floor_target_1.png');
  }
  
  isWall(x, y) {
    return this.grid[y][x] === 1; // 1 es pared
  }
  

  draw() {
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[y].length; x++) {
        noStroke();
        image(this.floorAsset, x * 50, y * 50);
        noFill();
        rect(x * 50, y * 50, 50, 50);
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
