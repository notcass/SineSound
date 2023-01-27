/// <reference path="libraries/p5.global-mode.d.ts" />
/**
 *
 *  TODO:
 *    -Add more scales
 *
 *    -TRIM SOUND FILES ?
 *      Distortion seems to stack up after a while depending on spacing between hits?
 *      Pausing the sketch for a sec fixes this temporarily
 *
 *
 *
 *
 */

let balls = [];
let trigs = [];
const soundFiles = [];
const scaleButtons = [];

//Move this function to bottom of file when done
function setupUI() {
  document.querySelectorAll('.btn').forEach((b) => {
    b.addEventListener('click', (e) => {
      console.log(b.id);
    });
  });
}
const SCALES = {
  // Indices of the notes in the soundFiles array
  C_MAJ: [
    0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23, 24, 26, 28, 29, 31, 33,
    35, 36,
  ],

  D_MAJ: [2, 4, 6, 7, 9, 11, 13, 14],
  E_MAJ: [4, 6, 8, 9, 11, 13, 15],
  F_MAJ: [5, 7, 9, 10, 12, 14, 16, 17],
  CUSTOM: [0, 3, 6, 8],
};

function preload() {
  for (let i = 40; i < 77; i++) {
    soundFiles.push(loadSound(`soundFiles/${i}.mp3`));
  }
}

function setup() {
  createCanvas(400, 400).parent('sketch-holder');
  setupUI();
  setupTriggers(8, 'C_MAJ', 25);
  // setupTriggers(10, 'CUSTOM', 150);
  noLoop();
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

// Tweak values in here
function setupBalls(count) {
  balls = [];
  let divider = height / count;
  for (let i = 0; i < count; i++) {
    let x = width / 2;
    let y = divider * i + divider / 2;
    let speed = createVector(1 + i / 5, 0);
    let b = new Ball(x, y, 5, speed, speed);
    balls.push(b);
  }
}

function setupTriggers(count, scaleName, tWidth) {
  trigs = [];
  const scaleIndices = SCALES[scaleName];

  if (scaleIndices) {
    // If count is set too high fix it
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
    // Create balls
    this.setupBalls(count);
  }
}
function keyPressed() {
  if (key === 'q') isLooping() ? noLoop() : loop();
  if (key === 'r') redraw();
}

function mousePressed() {
  trigs.every((t) => !t.isClicked());
}

/**
 *
 * @param {Number} startNote the index for which note to start on. C4 = 0,
 *                            See Onenote doc for visual aid of notes
 */
function genMajScale(startNote) {
  let majorIntervals = [2, 2, 1, 2, 2, 2, 1];
  let newScale = [];

  let index = startNote;
  for (let i = 0; i < 8; i++) {
    newScale.push(index);
    index += majorIntervals[i];
  }
  console.log(newScale);
  return newScale;
}
