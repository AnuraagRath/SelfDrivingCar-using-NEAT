class LaAgent {
  constructor(evolve) {
    this.y = height / 2;
    this.x = 64;

    this.gravity = 0.8;
    this.lift = -12;
    this.velocity = 0;

    this.score = 0;
    this.fitness = 0;
    if (evolve) {
      this.evolve = evolve.copy();
    } else {
      this.evolve = new NeuralNetwork(5, 8, 2);
    }
  }

  dispose() {
    this.evolve.dispose();
  }

  show() {
    stroke(254, 217, 90);
    fill(254, 2, 90);
    rect(this.x, this.y, 50, 30);
  }

  up() {
    this.velocity += this.lift;
  }

  mutate() {
    this.evolve.mutate(0.1);
  }

  think(pipes) {
    let closest = null;
    let closestD = Infinity;
    for (let i = 0; i < pipes.length; i++) {
      let d = pipes[i].x + pipes[i].w - this.x;
      if (d < closestD && d > 0) {
        closest = pipes[i];
        closestD = d;
      }
    }

    let inputs = [];
    inputs[0] = this.y / height;
    inputs[1] = closest.top / height;
    inputs[2] = closest.bottom / height;
    inputs[3] = closest.x / width;
    inputs[4] = this.velocity / 10;
    let output = this.evolve.predict(inputs);
    if (output[0] > output[1]) {
      this.up();
    }
  }

  offScreen() {
    return this.y > height || this.y < 0;
  }

  update() {
    this.score++;
    this.velocity += this.gravity;
    this.y += this.velocity;
  }
}