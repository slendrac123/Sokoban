class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.preloadAssets();
  }
  
  preloadAssets() {
    this.boxAsset = loadImage('/assets/box_1.png');
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  draw() {
    noStroke();
    image(this.boxAsset, this.x * 50, this.y * 50);
    noFill();
    rect(this.x * 50, this.y * 50, 50, 50);
  }
}
