import { rosaceBuilder } from "./toolsModule.js";

class Vertex {
  constructor(x, y, a, b) {
    this.adress = [x, y];
    this.previous = [a, b];
  }
}
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
    let queue = [this.root];
    let tempQueue = [];
    let visited = [this.root];

    let steps = 0;

    while (true) {
      for (let vertex of queue) {
        if (vertex[0] === target[0] && vertex[1] === target[1]) {
          alert(`target Found in ${steps} steps `);
          return;
        }
      }

      for (let vertex of queue) {
        let vertexRosace = rosaceBuilder(vertex[0], vertex[1]);

        for (let rosy of vertexRosace) {
          if (
            !visited.some(
              (element) => element[0] === rosy[0] && element[1] === rosy[1]
            )
          ) {
            tempQueue.push([rosy[0], rosy[1]]);
            visited.push([rosy[0], rosy[1]]);
          }
        }
      }
      steps++;
      queue = tempQueue;
      tempQueue = [];
      console.log(queue);
    }
  }
}

const graph = new Graph(0, 0);

graph.knightMoves([0, 2]);
