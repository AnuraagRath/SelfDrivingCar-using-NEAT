function nextGeneration() {
  console.log('next generation');
  calculateFitness();
  for (let i = 0; i < TOTAL; i++) {
    agentSmith[i] = pickOne();
  }
  for (let i = 0; i < TOTAL; i++) {
    savedSmiths[i].dispose();
  }
  savedSmiths = [];
}

function pickOne() {
  let index = 0;
  let r = random(1);
  while (r > 0) {
    r = r - savedSmiths[index].fitness;
    index++;
  }
  index--;
  let bird = savedSmiths[index];
  let child = new LaAgent(bird.evolve);
  child.mutate();
  return child;
}

function calculateFitness() {
  let sum = 0;
  for (let bird of savedSmiths) {
    sum += bird.score;
  }
  for (let bird of savedSmiths) {
    bird.fitness = bird.score / sum;
  }
}