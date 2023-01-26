class TriggerZone {
  constructor(_x, _y, _w, _h, _noteFile) {
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.note = _noteFile;
  }

  show() {
    noFill();
    stroke(100);
    rect(this.x, this.y, this.w, this.h);
  }

  isHit(o) {
    let oX = o.pos.x;
    let oY = o.pos.y;
    let oR = o.r;

    // If object is ROUGHLY in Y range
    if (oY > this.y && oY < this.y + this.h) {
      // If object is in X range
      if (
        // Left side of ball hits trigger
        (oX - oR > this.x && oX - oR < this.x + this.w) ||
        // Right side of ball hits trigger
        (oX + oR > this.x && oX + oR < this.x + this.w)
      ) {
        // this.lightUp();
        this.note.play();
        return true;
      }
    }
    return false;
  }

  lightUp(color) {}

  /* TESTING */
  isClicked() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      this.note.play();
      return true;
    }
    return false;
  }
}
