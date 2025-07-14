import { rosaceBuilder, rosaceBuilderVertex, Vertex } from "./toolsModule.js";

class Graph {
  constructor(x, y) {
    this.root = [x, y];
    this.edgeList = [];
    // this.adjacencyList = [[], []];
    // this.adjacencyMatrix = [[], []];
  }

  buildEdgeList() {
    return;
  }

  knightMoves(target) {
    // let queue = [this.root];
    let queue = [
      new Vertex(this.root[0], this.root[1], this.root[0], this.root[1]),
    ];
    let tempQueue = [];
    let visited = queue;

    let steps = 0;

    while (steps < 44) {
      for (let vertex of queue) {
        if (vertex.adress[0] === target[0] && vertex.adress[1] === target[1]) {
          alert(`target Found in ${steps} steps `);
          return;
        }
      }

      for (let vertex of queue) {
        let vertexRosace = rosaceBuilderVertex(
          vertex.adress[0],
          vertex.adress[1]
        );

        for (let rosy of vertexRosace) {
          if (
            !visited.some(
              (element) =>
                element.adress[0] === rosy.adress[0] &&
                element.adress[1] === rosy.adress[1]
            )
          ) {
            tempQueue.push(rosy);
            visited.push(rosy);
          }
        }
      }
      steps++;
      queue = tempQueue;
      tempQueue = [];
      console.log(steps);
    }
  }
}

const graph = new Graph(0, 0);

graph.knightMoves([3, 3]);
