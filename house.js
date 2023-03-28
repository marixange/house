let sunSize = 30;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  // draw sun
  fill(255, 255, 0);
  ellipse(60, 60, sunSize, sunSize);
  
  // check if sun takes up whole canvas
  if (sunSize >= min(width, height)) {
    // if sun takes up whole canvas, trigger an action
    textSize(32);
    fill(255);
    text("the sun has taken over!", 50, height/2);
  }
  else {
    // draw the rest of the scene
    // draw roof
    stroke(0);
    fill(100, 100, 0);
    triangle(75, 150, 327, 152, 200, 40);

    // draw house
    fill(0, 255, 0);
    rect(75, 150, 250, 250);

    // draw door
    fill(0, 180, 0);
    rect(150, 250, 75, 150); 

    // draw door knob
    fill(255, 255, 0);
    noStroke();
    ellipse(160, 330, 10, 10);
  }
} 

function keyPressed() {
  if (keyCode === 32) { // spacebar
    sunSize += 20 ;
  }
}
