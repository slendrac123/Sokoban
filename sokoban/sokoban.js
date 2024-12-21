let startTime;
let player, boxes = [], checkpoints = [], level, scene;
let transitionMessage = null, showTransition = false, gameSoundtrack;

function preload() {

}

function setup() {
  createCanvas(800, 800);

  // Inicializa la escena, musica y carga el nivel inicial
  scene = new Scene();
  loadLevel(scene.getCurrentLevel());
  
  // Configura el tiempo inicial
  startTime = millis();
  
  // Muestra el mensaje inicial "Nivel 1"
  transitionMessage = "Nivel 1";
  showTransition = true;

  // Oculta el mensaje después de 2 segundos
  setTimeout(() => {
    showTransition = false;
  }, 2000);
}

function draw() {
  background(220);

  // Dibuja el nivel, jugador y cajas
  level.draw();
  player.draw();
  for (let box of boxes) {
    box.draw();
  }
  
   // Muestra el mensaje de transición si está activo
  if (showTransition && transitionMessage) {
    fill(0, 0, 0, 200); // Fondo negro translúcido
    rect(50, height / 2 - 50, width - 100, 100, 10);

    fill(255); // Texto blanco
    textAlign(CENTER, CENTER);
    textSize(32);
    text(transitionMessage, width / 2, height / 2);
  }
  
  drawBottomText();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW){
    player.move(-1, 0, level);
    }
  if (keyCode === RIGHT_ARROW){
    player.move(1, 0, level);
    }
  if (keyCode === UP_ARROW){
    player.move(0, -1, level);
    }
  if (keyCode === DOWN_ARROW){
    player.move(0, 1, level);
    }
    
   // Reinicia el nivel actual con la tecla R
  if (key === 'r' || key === 'R') {
    loadLevel(scene.getCurrentLevel());
  }

  // Verificar si se completó el nivel
  if (isLevelCompleted() && !showTransition) {
    showLevelTransition(scene.currentLevelIndex + 2);
  }
}

function loadLevel(grid) {
  level = new Level(grid);
  boxes = [];
  checkpoints = [];
  
  // Encuentra la posición inicial del jugador y las cajas
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 4) {
        player = new Player(x, y);
      } else if (grid[y][x] === 2) {
        boxes.push(new Box(x, y));
      } else if (grid[y][x] === 3) {
        checkpoints.push(new Checkpoint(x, y));
      } else if (grid[y][x] === 5) {
        checkpoints.push(new Checkpoint(x, y));
        boxes.push(new Box(x, y));
      }
    }
  }
}

function isLevelCompleted() {
  // Verifica que cada checkpoint tiene una caja encima
  for (let checkpoint of checkpoints) {
    let isBoxOnCheckpoint = boxes.some(box => box.x === checkpoint.x && box.y === checkpoint.y);
    if (!isBoxOnCheckpoint) {
      return false; // Si algún checkpoint no tiene una caja, no se completa el nivel
    }
  }
  return true; // Todos los checkpoints tienen una caja
}

function showLevelTransition(nextLevel) {
  showTransition = true;

  // Determina el mensaje según si hay más niveles
  if (scene.currentLevelIndex < scene.levels.length - 1) {
    transitionMessage = `Nivel ${nextLevel}`; // Mensaje para el siguiente nivel
    setTimeout(() => {
      if (scene.nextLevel()) {
        loadLevel(scene.getCurrentLevel());
        showTransition = false;
      }
    }, 2000); // Muestra el mensaje durante 2 segundos
  } else {
    // Mensaje final al terminar el juego
    transitionMessage = "¡Juego completado!";
    setTimeout(() => {
      noLoop(); // Detiene el juego después de mostrar el mensaje
    }, 10); // Muestra el mensaje durante 1 segundo
  }
}

function drawBottomText() {
  // Calcula el tiempo transcurrido en segundos
  let elapsedTime = floor((millis() - startTime) / 1000);

  // Dibuja un rectángulo en la parte inferior
  fill(50, 50, 50, 200);
  rect(0, height - 50, width, 50);

  // Texto blanco
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);

  // Mensaje del nivel, tiempo y reinicio
  text(
    `Nivel ${scene.currentLevelIndex + 1}  |  Tiempo: ${elapsedTime} s  |  R para reiniciar nivel`,
    width / 2,
    height - 25
  );
}

function playSoundtrack(){
  const song = loadSound('/assets/music/soundtrack.mp3');
  song.play();
}
