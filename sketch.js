/// <reference path="libraries/p5.global-mode.d.ts" />
/**
 *
 *  TODO:
 *    -Setup a way to load scales etc into trigger zones quickly
 *      Ex: let cScale = [0,2,4]
 *
 *
 *
 *
 *
 */

const balls = [];
let trigs = [];
const soundFiles = [];

const SCALES = {
  // Indices of the notes in the soundFiles array
  C_MAJ: [0, 2, 4, 5, 7, 9, 11],
  D_MAJ: [2, 4, 6, 7, 9, 13, 14],
  E_MAJ: [4, 6, 8, 9, 11, 13, 15],
  F_MAJ: [5, 7, 9, 10, 12, 14, 16, 17],
};

function preload() {
  for (let i = 40; i < 65; i++) {
    soundFiles.push(loadSound(`soundFiles/${i}.mp3`));
  }
}

function setup() {
  createCanvas(400, 400).parent('sketch-holder');
  setupTriggers(12, 'C_MAJ');
}

function draw() {
  background(0);
  stroke(140);

  // Handle balls
  balls.forEach((b) => {
    b.show();
    b.update();
  });

  // Handle Trigger Zones
  handleTriggers();
}

function handleTriggers() {
  trigs.forEach((t) => {
    t.show();
    balls.forEach((b) => {
      if (t.isHit(b)) b.flipVel();
    });
  });
}

function setupTriggers(count, scaleName) {
  trigs = [];
  const tWidth = 20;
  const scaleIndices = SCALES[scaleName];
  if (scaleIndices) {
    // console.log('found me');
    // console.log(scaleIndices);

    // If count is set too high, fix it
    count = count <= scaleIndices.length ? count : scaleIndices.length;
    const divider = height / count;

    for (let i = 0; i < count; i++) {
      // Left side
      let x = 0;
      let y = divider * i;
      let index = scaleIndices[i];
      let t = new TriggerZone(x, y, tWidth, divider, soundFiles[index]);
      trigs.push(t);

      // Right side
      x = width - tWidth;
      t = new TriggerZone(x, y, tWidth, divider, soundFiles[index]);
      trigs.push(t);
    }
  }
}
function keyPressed() {
  if (key === 'q') isLooping() ? noLoop() : loop();
  if (key === 'r') redraw();
}

function mousePressed() {
  trigs.every((t) => !t.isClicked());
}
