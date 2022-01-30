class Pipe {
    constructor() {
      this.spacing = 110;
      this.top = random(height / 6, (3 / 4) * height);
      this.bottom = height - (this.top + this.spacing);
      this.x = width;
      this.w = 80;
      this.speed = 6;
    }
  
    hits(unAgent) {
      if (unAgent.y < this.top || unAgent.y > height - this.bottom) {
        if (unAgent.x > this.x && unAgent.x < this.x + this.w) {
          return true;
        }
      }
      return false;
    }
  
    show() {
      stroke(180, 216, 54)
      fill(100, 232, 54);
      rectMode(CORNER);
      rect(this.x, 0, this.w, this.top);
      rect(this.x, height - this.bottom, this.w, this.bottom);
    }
  
    update() {
      this.x -= this.speed;
    }
  
    offscreen() {
      if (this.x < -this.w) {
        return true;
      } else {
        return false;
      }
    }
  }