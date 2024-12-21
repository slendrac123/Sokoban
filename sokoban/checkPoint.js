class Checkpoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    let hasBox = boxes.some(box => box.x === this.x && box.y === this.y);
    if (hasBox) {
      fill(0, 255, 0, 150); // Verde translúcido si tiene una caja
    } else {
      fill(0, 0, 255, 100); // Azul translúcido si está vacío
    }
    ellipse(this.x * 50 + 25, this.y * 50 + 25, 40, 40);
  }
}
