let numCols, numRows;
let elementSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  background(0, 0, 90); // Light gray background
  noStroke();
  numCols = 10; // Number of columns
  numRows = 10; // Number of rows
  elementSize = windowWidth / numCols; // Size of each element based on screen width
}

function draw() {
  background(0, 0, 90);
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      push();
      translate(x * elementSize + elementSize / 2, y * elementSize + elementSize / 2);
      let size = elementSize * 0.8; // Base size of the shapes
      let hue = map(x, 0, numCols - 1, 0, 360); // Color changes across columns
      let saturation = map(y, 0, numRows - 1, 30, 100); // Saturation changes down rows

      fill(hue, saturation, 100);
      ellipse(0, 0, size, size);
      pop();
    }
  }
  noLoop(); // No need to loop unless interaction is required
}

function mousePressed() {
  loop(); // Redraw when the mouse is pressed
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  elementSize = windowWidth / numCols; // Recalculate element size when window is resized
}


