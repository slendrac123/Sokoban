class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.preloadAssets();
  }
  
  preloadAssets() {
    this.boxAsset = loadImage('/assets/box_1.png');
    this.boxCheckAsset = loadImage('/assets/check_1.png');
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  draw() {
    noStroke();
    noFill();
    image(this.boxAsset, this.x * 50, this.y * 50);
    // Verifica si la caja está encima de un checkpoint
    let isOnCheckpoint = checkpoints.some(cp => cp.x === this.x && cp.y === this.y);

    if (isOnCheckpoint) {
      image(this.boxCheckAsset, this.x * 50, this.y * 50);
    } 

    rect(this.x * 50, this.y * 50, 50, 50);
  }
}
