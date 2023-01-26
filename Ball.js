class Ball {
  constructor(_x, _y, _r, _velVector) {
    this.pos = createVector(_x, _y);
    this.vel = _velVector;
    this.r = _r;
    this.color = color(240);
  }
}

Ball.prototype.show = function () {
  fill(this.color);
  circle(this.pos.x, this.pos.y, this.r * 2);
};

Ball.prototype.update = function () {
  this.pos.add(this.vel);
};

Ball.prototype.flipVel = function () {
  this.vel.mult(-1);
};
