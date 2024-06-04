let character;
let obstacles = [];
let score = 0;
let isGameOver = false;

function setup() {
  createCanvas(400, 400);
  character = new Character();
  obstacles.push(new Obstacle());
  textSize(20);
}

function draw() {
  background(220);

  if (!isGameOver) {
    // Update and display character
    character.update();
    character.display();

    // Update and display obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
      obstacles[i].update();
      obstacles[i].display();

      // Check for collision
      if (character.hits(obstacles[i])) {
        isGameOver = true;
      }

      // Remove off-screen obstacles
      if (obstacles[i].offscreen()) {
        obstacles.splice(i, 1);
      }
    }

    // Add new obstacles
    if (frameCount % 60 == 0) {
      obstacles.push(new Obstacle());
      score++;
    }

    // Display score
    text("Score: " + score, 10, 30);
  } else {
    // Game over message
    text("Game Over! Press R to restart", 100, height / 2);
  }
}

function keyPressed() {
  if (isGameOver && keyCode === 82) {
    // Restart the game
    obstacles = [];
    score = 0;
    isGameOver = false;
    character = new Character();
  }
}

class Character {
  constructor() {
    this.size = 20;
    this.x = width / 2;
    this.y = height - this.size * 2;
    this.speed = 5;
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    this.x = constrain(this.x, 0, width - this.size);
  }

  display() {
    fill(0);
    rect(this.x, this.y, this.size, this.size);
  }

  hits(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.size > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.size > obstacle.y
    );
  }
}

class Obstacle {
  constructor() {
    this.width = random(20, 50);
    this.height = 20;
    this.x = random(width - this.width);
    this.y = -this.height;
    this.speed = 3;
  }

  update() {
    this.y += this.speed;
  }

  display() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
  }

  offscreen() {
    return this.y > height;
  }
}