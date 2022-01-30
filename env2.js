const TOTAL = 250;
let agentSmith = [];
let savedSmiths = [];
let pipes = [];
let counter = 0;
let slider;

function keyPressed() {
  if (key === 'q') {
    let laAgent = agentSmith[0];
    saveJSON(laAgent.evolve, 'laAgent.json');
  }
}

let img;
function preload() {
  img = loadImage('https://ak.picdn.net/shutterstock/videos/15953695/thumb/1.jpg');
}

function setup() {
  createCanvas(640, 480);
  tf.setBackend('cpu');
  slider = createSlider(1, 10, 1);
  for (let i = 0; i < TOTAL; i++) {
    agentSmith[i] = new LaAgent();
  }
  image(img, 0, 0);
}

function draw() {
  for (let n = 0; n < slider.value(); n++) {
    if (counter % 75 == 0) {
      pipes.push(new Pipe());
    }
    counter++;

    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update();

      for (let j = agentSmith.length - 1; j >= 0; j--) {
        if (pipes[i].hits(agentSmith[j])) {
          savedSmiths.push(agentSmith.splice(j, 1)[0]);
        }
      }

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }

    for (let i = agentSmith.length - 1; i >= 0; i--) {
      if (agentSmith[i].offScreen()) {
        savedSmiths.push(agentSmith.splice(i, 1)[0]);
      }
    }

    for (let laAgent of agentSmith) {
      laAgent.think(pipes);
      laAgent.update();
    }

    if (agentSmith.length === 0) {
      counter = 0;
      nextGeneration();
      pipes = [];
    }
  }

  // All the drawing stuff
  background(img);

  for (let laAgent of agentSmith) {
    laAgent.show();
  }

  for (let pipe of pipes) {
    pipe.show();
  }
}
    