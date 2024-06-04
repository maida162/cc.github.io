function setup() {
  createCanvas(500, 500);
  background(250);
}

function draw() {
  // Antenna
  stroke(0, 0, 255); // Antenna color
  strokeWeight(4); // Antenna line thickness
  line(255, 85, 255, 55);
  stroke(0, 0, 255);
  noStroke(); // No border for the circle
  circle(255, 55, 10);
  
  // Head
  fill(255, 0, 0);
  ellipse(255, 150, 110, 140); // Tall oval head

  // Eyes
  fill(2, 2, 2);
  ellipse(230, 140, 30, 60); // Left eye
  ellipse(280, 140, 30, 60); // Right eye
  
  // Pupils
  fill(255); // White pupils
  ellipse(230, 140, 10, 20); // Left pupil
  ellipse(280, 140, 10, 20); // Right pupil

  // Mouth
  fill(0);
  arc(255, 180, 50, 20, 0, PI); // Smiling mouth
  
  // Body
  fill(255, 0, 0);
  rect(205, 200, 100, 100, 20); // Rounded rectangle body
  
  // Hands
  fill(255, 0, 0);
  ellipse(175, 240, 30, 80); // Left hand
  ellipse(335, 240, 30, 80); // Right hand
  
  // Legs
  fill(255, 0, 0);
  ellipse(225, 320, 50, 80); // Left leg
  ellipse(285, 320, 50, 80); // Right leg
  
  // Belly button
 stroke(0, 0, 255);
  ellipse(255, 250, 10, 10); // Small belly button
}

