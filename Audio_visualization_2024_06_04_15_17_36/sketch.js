// Declare microphone input and Fast Fourier Transform (FFT) analyzer objects
let mic, fft;

// Create an array to hold the particles
let particles = [];

function setup() {
  // Create canvas sized to the window dimensions
  createCanvas(windowWidth, windowHeight);

  // Create the microphone input object and start it
  mic = new p5.AudioIn();
  mic.start();

  // Create the FFT object and set its input to the microphone input object
  fft = new p5.FFT();
  fft.setInput(mic);

  // Initialize particles
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  // Clear background with a slight opacity for motion trails
  background(0, 0, 0, 25);

  // Draw particles
  particles.forEach(particle => {
    particle.update();
    particle.display();
  });

  // Get waveform data from FFT
  let waveform = fft.waveform();
  
  // Draw waveform
  noFill();
  beginShape();
  stroke(255);
  strokeWeight(2);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
  }
  endShape();
}

// Particle class
class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.size = random(5, 15);
  }

  update() {
    let waveform = fft.waveform();
    let index = int(random(waveform.length));
    let force = map(waveform[index], -1, 1, -5, 5);
    this.acc = p5.Vector.random2D().mult(force);
    this.vel.add(this.acc);
    this.vel.limit(5);  // Limit the velocity to avoid overly chaotic movement
    this.pos.add(this.vel);
    this.edges();
  }

  display() {
    noStroke();
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  edges() {
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

