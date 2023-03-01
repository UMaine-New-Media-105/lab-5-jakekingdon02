let x;
let speedX;
let y;
let speedY;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  y = random(400);
  speedX = random(10);
  speedY = random(10);
}

function draw() {
  background(220);
  x = x + speedX;
  y = y + speedY;

  fill("green");
  ellipse(x, y, 50);
  if (x > 355 || x < -10) {
    speedX = speedX * -1;
    if (y > 400 || y < 0);
    speedY = speedY * -1;
  }
}
