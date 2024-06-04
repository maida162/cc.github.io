function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240); // Light gray background
}

function draw() {
  background(240);
  let phrase = "BATH SPA UNIVERSITY";
  let spacing = width / (phrase.length + 1);
  let yPos = height / 2;

  noLoop(); // Draw once
  textSize(32);
  textStyle(BOLD);

  // Loop over each character in the phrase
  for (let i = 0; i < phrase.length; i++) {
    let xOffset = spacing * (i + 1);
    let hue = random(0, 360);
    fill(color(hue, 80, 100)); // Colorful letters
    let charSize = random(24, 48); // Random size for each character
    textSize(charSize);
    text(phrase[i], xOffset, yPos + random(-10, 10)); // Random vertical position shift
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
