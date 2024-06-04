var img, x, y; //declaring the vaiables
function preload() {
img = loadImage("ben.jpg");
}
function setup() {
createCanvas (400, 400);
background(0);
noStroke();
}
function draw() {
x = random(width);
y = random(height);
var c = img.get(x, y);
fill(c[0], c[1], c[2], 50);
ellipse (x, y, 30, 30);
}