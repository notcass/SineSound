/// <reference path="libraries/p5.global-mode.d.ts" />
function setup() {
  createCanvas(400, 400).parent('sketch-holder');
}

function draw() {
  background(0);
}

function keyPressed() {
  if (key === 'q') isLooping() ? noLoop() : loop();
  if (key === 'r') redraw();
}
