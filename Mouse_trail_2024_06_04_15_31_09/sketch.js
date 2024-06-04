var size = 100;

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  if (mouseIsPressed){
    // Create randomly colored triangles with increasing size
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    fill(r, g, b, 50); // Semi-transparent colors
    size += 0.2; // Increment size for a dynamic effect
    triangle(mouseX, mouseY - size / 2, mouseX - size / 2, mouseY + size / 2, mouseX + size / 2, mouseY + size / 2);
  } else {
    // Reset size if it gets too big
    if (size > 300) size = 10;
    size += 0.5; // Increment size slowly

    // Generate a different set of random colors
    var r1 = random(0, 255);
    var g1 = random(0, 255);
    var b1 = random(0, 255);
    stroke(r1, g1, b1, 50); // Use colors for the stroke
    noFill(); // No fill for the lines

    // Draw lines radiating from the mouse position
    line(mouseX, mouseY, mouseX + size * cos(frameCount * 0.1), mouseY + size * sin(frameCount * 0.1));
  }
}

function mousePressed() {
  // Clear the canvas and reset size when mouse is pressed
  background(255);
  size = 10;
}


