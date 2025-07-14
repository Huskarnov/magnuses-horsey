import { rosaceBuilder } from "./toolsModule.js";

class Vertex {
  constructor(x, y) {
    this.adress = [x, y];
    // this.rosace = this.#rosaceBuilder();
  }
  // #rosaceBuilder(a, b) {
  //   let rosaceArray = [];
  //   if (a + 2 <= 7) {
  //     if (b + 1 <= 7) {
  //       rosaceArray.push([a + 2, b + 1]);
  //     }
  //     if (b - 1 >= 0) {
  //       rosaceArray.push([a + 2, b - 1]);
  //     }
  //   }
  //   if (a - 2 >= 0) {
  //     if (b + 1 <= 7) {
  //       rosaceArray.push([a - 2, b + 1]);
  //     }
  //     if (b - 1 >= 0) {
  //       rosaceArray.push([a - 2, b - 1]);
  //     }
  //   }
  //   //
  //   if (b + 2 <= 7) {
  //     if (a + 1 <= 7) {
  //       rosaceArray.push([a + 1, b + 2]);
  //     }
  //     if (a - 1 >= 0) {
  //       rosaceArray.push([a - 1, b + 2]);
  //     }
  //   }
  //   if (b - 2 >= 0) {
  //     if (a + 1 <= 7) {
  //       rosaceArray.push([a + 1, b - 2]);
  //     }
  //     if (a - 1 >= 0) {
  //       rosaceArray.push([a - 1, b - 2]);
  //     }
  //   }

  //   return rosaceArray;
  // }
}
class Graph {
  constructor(x, y) {
    this.root = [x, y];
    // this.edgeList = [[], []];
    // this.adjacencyList = [[], []];
    // this.adjacencyMatrix = [[], []];
  }

  buildEdgeList() {
    return;
  }

  knightMoves(target) {
    let queue = [this.root];
    let visited = [this.root];

    let pointer = 0;
    // let steps = 0;

    while (queue[pointer]) {
      if (queue[pointer][0] === target[0] && queue[pointer][1] === target[1]) {
        console.log("x");
        return;
      } else {
        for (const vertex of rosaceBuilder(
          queue[pointer][0],
          queue[pointer][1]
        )) {
          if (
            !visited.some(
              (subArray) =>
                subArray[0] === vertex[0] && subArray[1] === vertex[1]
            )
          ) {
            visited.push([vertex[0], vertex[1]]);

            queue.push([vertex[0], vertex[1]]);
          }
        }
        console.log(queue);
        console.log(pointer);
        pointer++;
      }
    }

    // rosacebuilder(if exists add to queue BFS)
  }
}

const graph = new Graph(0, 0);

graph.knightMoves([3, 3]);
