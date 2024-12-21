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
    // Verifica si la caja está encima de un checkpoint
    let isOnCheckpoint = checkpoints.some(cp => cp.x === this.x && cp.y === this.y);

    if (isOnCheckpoint) {
      fill(100, 150, 255); // Color azulado si está sobre un checkpoint
    } else {
      fill(255, 165, 0); // Color original (naranja)
    }

    rect(this.x * 50, this.y * 50, 50, 50);
  }
}
