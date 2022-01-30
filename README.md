# SelfDrivingCar Simulation using NEAT:
Using NEAT(Neuroevolution of Augmenting Topologies), a simulated agent learns to drive a car through a series of simple obstacles by Mutating and adopting the 'genotypes' of 'parents'. The environment is set up in such a way where the agent uses multiple copies of itself to explore the environment. The copies that do not progress further are eliminated. This process repeats through a number of generations, until the agent is able to navigate through this environment without hitting the obstacles.

## Live Demo: [Self_Driving_Car_Sim](https://anuraagrath.github.io/SelfDrivingCar-using-NEAT/)

## The Environment:

A simple environment has been created where a car just tries to avoid the generic obstacles.

![env](/img/8.png)

## The Initial State:

Multiple versions of the Agent are made to explore the environment to navigate and learn from it. 

![agentsSmith](/img/1.png)

## The Algorithm:

The Algorithm used is NEAT. Neuroevolution of Augmenting Topologies. 

Refer the paper here: [NEAT](http://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf)

- Mutation:

![agentsSmith](/img/10.png)

![code](/img/3.png)

- Basic NN Architecture - The Sequential Model:

![sequential](/img/4.png)

- 5 input Nodes, 8 Hidden Nodes and 2 output nodes:

##### The 5 input nodes take in - "the x pos from height, y pos from nearest width, top pos, bottom pos, velocity of the car"   


![basic NN architecture](/img/5.png)

![nav](/img/7.png)

## Final result:

- The Car moves independently without hitting the generic obstacles

![final](/img/2.png)

Thank you

Anuraag Rath 

:P
