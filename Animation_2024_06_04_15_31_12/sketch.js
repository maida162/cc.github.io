let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create multiple balls
  for (let i = 0; i < 20; i++) {
    balls.push(new Ball(random(width), random(height)));
  }
}

function draw() {
  background(0); // Clear the screen with a black background

  for (let ball of balls) {
    ball.update(); // Update ball position and state
    ball.display(); // Draw the ball
  }
}

class Ball {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-5, 5), random(-5, 5));
    this.color = color(random(255), random(255), random(255));
    this.size = random(10, 30);
  }

  // Update the ball's position and handle edge collisions
  update() {
    this.position.add(this.velocity);
    // Reflect off edges by reversing velocity
    if (this.position.x > width - this.size / 2 || this.position.x < this.size / 2) {
      this.velocity.x *= -1;
    }
    if (this.position.y > height - this.size / 2 || this.position.y < this.size / 2) {
      this.velocity.y *= -1;
    }
  }

  // Draw the ball
  display() {
    fill(this.color);
    noStroke();
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
