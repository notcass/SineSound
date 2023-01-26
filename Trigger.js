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
    let oRHalf = o.r / 2;

    // // If object is ROUGHLY in Y range
    // if (oY > this.y && oY < this.y + this.h) {
    //   // If object is in X range
    //   if (
    //     // Left side of ball hits trigger
    //     (oX - oRHalf > this.x && oX - oRHalf < this.x + this.w) ||
    //     // Right side of ball hits trigger
    //     (oX + oRHalf > this.x && oX + oRHalf < this.x + this.w)
    //   ) {
    //     return true;
    //   }
    // }
    // return false;

    //TESTING
    // If in Y
    if (oY > this.y && oY < this.y + this.h) {
      // Left side of ball hits trigger
      if (oX - oRHalf > this.x && oX - oRHalf < this.x + this.w) {
        console.log('Left side of ball');
        return true;
      }

      // Right side of ball hits trigger
      if (oX + oRHalf > this.x && oX + oRHalf < this.x + this.w) {
        console.log('Right side of ball');
        return true;
      }
    }
    return false;
  }

  lightUp(color) {}
}
