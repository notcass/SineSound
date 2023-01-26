class Ball {
  constructor(_x, _y, _r) {
    this.pos = createVector(_x, _y);
    this.vel = createVector(-1, 0);
    this.r = _r;
    this.color = color(40);
  }
}

Ball.prototype.show = function () {
  fill(this.color);
  circle(this.pos.x, this.pos.y, this.r * 2);
};

Ball.prototype.update = function () {
  this.pos.add(this.vel);
};
