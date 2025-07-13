class Vertex {
  constructor(x, y) {
    this.adress = [x, y];
    this.rosace = this.#rosaceBuilder();
  }
  #rosaceBuilder() {
    let rosaceArray = [];
    if (this.adress[0] + 2 <= 7) {
      if (this.adress[1] + 1 <= 7) {
        rosaceArray.push([this.adress[0] + 2, this.adress[1] + 1]);
      }
      if (this.adress[1] - 1 >= 0) {
        rosaceArray.push([this.adress[0] + 2, this.adress[1] - 1]);
      }
    }
    if (this.adress[0] - 2 >= 0) {
      if (this.adress[1] + 1 <= 7) {
        rosaceArray.push([this.adress[0] - 2, this.adress[1] + 1]);
      }
      if (this.adress[1] - 1 >= 0) {
        rosaceArray.push([this.adress[0] - 2, this.adress[1] - 1]);
      }
    }
    //
    if (this.adress[1] + 2 <= 7) {
      if (this.adress[0] + 1 <= 7) {
        rosaceArray.push([this.adress[0] + 1, this.adress[1] + 2]);
      }
      if (this.adress[0] - 1 >= 0) {
        rosaceArray.push([this.adress[0] - 1, this.adress[1] + 2]);
      }
    }
    if (this.adress[1] - 2 >= 0) {
      if (this.adress[0] + 1 <= 7) {
        rosaceArray.push([this.adress[0] + 1, this.adress[1] - 2]);
      }
      if (this.adress[0] - 1 >= 0) {
        rosaceArray.push([this.adress[0] - 1, this.adress[1] - 2]);
      }
    }

    return rosaceArray;
  }
}
class Graph {
  constructor(x, y) {
    this.root = [x, y];
    // this.edgeList = [[], []];
  }

  knightMoves(target) {
    let queue = [this.root];
    let visited = [];

    let pointer = 0;
    // let steps = 0;

    while (queue[pointer]) {
      if (queue[pointer][0] === target[0] && queue[pointer][1] === target[1]) {
        console.log("x");
        return;
      } else {
        for (const vertex of new Vertex(queue[pointer][0], queue[pointer][1])
          .rosace) {
          if (!visited.includes([vertex[0], vertex[1]])) {
            visited.push([vertex[0], vertex[1]]);

            // queue.push([vertex[0], vertex[1]]);
          }
        }
        console.log(visited.includes([1, 2]));
        console.log(visited);
        console.log(pointer);
        // queue.shift();

        pointer++;
      }
    }

    // rosacebuilder(if exists add to queue BFS)
  }
}

// edge list
// adjacency list
// adjacency matrix

// -+2x -+y
// -+2y -+x

const graph = new Graph(0, 0);

graph.knightMoves([7, 7]);
