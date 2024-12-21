class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.preloadAssets();
  }
  
  preloadAssets() {
    this.playerAsset = loadImage('/assets/player_1.png');
  }

  move(dx, dy, level) {
    let newX = this.x + dx;
    let newY = this.y + dy;

    // Comprueba si hay una caja en la dirección de movimiento
    let box = boxes.find(b => b.x === newX && b.y === newY);

    if (box) {
      // Si hay una caja, comprueba si puede moverse
      let boxNewX = box.x + dx;
      let boxNewY = box.y + dy;

      // Solo mueve la caja si no hay una pared u otra caja en la nueva posición
      if (!level.isWall(boxNewX, boxNewY) && !boxes.some(b => b.x === boxNewX && b.y === boxNewY)) {
        box.move(dx, dy); // Mueve la caja
        this.x = newX;    // Mueve el jugador
        this.y = newY;
      }
    } else if (!level.isWall(newX, newY)) {
      // Si no hay una caja, el jugador puede moverse si no hay una pared
      this.x = newX;
      this.y = newY;
    }
  }

  draw() {
    noStroke();
    image(this.playerAsset, this.x * 50, this.y * 50);
    noFill();
    rect(this.x * 50, this.y * 50, 50, 50);
  }
}
