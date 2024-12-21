class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  draw() {
    fill(255, 165, 0);
    rect(this.x * 50, this.y * 50, 50, 50);
  }
}
