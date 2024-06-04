// Data to be visualized
let data = [45, 73, 91, 115, 140, 167, 198, 214, 232, 255];

function setup() {
  createCanvas(800, 400); // Create a canvas
  background(240); // Set background color

  let barWidth = width / data.length; // Calculate the width of each bar
  let maxData = max(data); // Find the maximum value in the data array

  // Iterate over the data array to draw each bar
  for (let i = 0; i < data.length; i++) {
    let x = i * barWidth; // Calculate the x-coordinate of the bar
    let y = map(data[i], 0, maxData, height, 0); // Map the data value to the y-coordinate
    let barHeight = height - y; // Calculate the height of the bar

    fill(0, 128, 255); // Set fill color for the bar
    rect(x, y, barWidth, barHeight); // Draw the bar

    fill(0); // Set fill color for text
    textAlign(CENTER, CENTER); // Set text alignment
    text(data[i], x + barWidth / 2, y - 10); // Display the data value above the bar
  }
}



