/// <reference path="libraries/p5.global-mode.d.ts" />

// Testing
let trig, ball;
let trigs = [];

function setup() {
  createCanvas(400, 400).parent('sketch-holder');
  trigs.push(new TriggerZone(0, 0, 50, height, null));
  trigs.push(new TriggerZone(width - 50, 0, width, height, null));
  ball = new Ball(200, 200, 10);
}

function draw() {
  background(0);
  stroke(140);
  ball.show();
  ball.update();
  handleTriggers();
}

function handleTriggers() {
  trigs.forEach((t) => {
    t.show();
    if (t.isHit(ball)) {
      ball.vel.mult(-1);
    }
  });
}

function keyPressed() {
  if (key === 'q') isLooping() ? noLoop() : loop();
  if (key === 'r') redraw();
}
