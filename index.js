import { rosaceBuilder, rosaceBuilderVertex, Vertex } from "./toolsModule.js";

class Graph {
  constructor(x, y) {
    this.root = [x, y];
    this.edgeList = [];
  }

  buildEdgeList() {
    return;
  }

  knightMoves(target) {
    // early exit
    if (target[0] < 0 || target[0] > 7 || target[1] < 0 || target[1] > 7) {
      alert("target case outside of the table");
      return;
    }

    let queue = [
      new Vertex(this.root[0], this.root[1], this.root[0], this.root[1]),
    ];
    let tempQueue = [];
    let visited = [...queue];

    let steps = 0;

    while (true) {
      for (let vertex of queue) {
        if (vertex.adress[0] === target[0] && vertex.adress[1] === target[1]) {
          // alert(`target Found in ${steps} steps `);
          let vertexChain = [];
          let current = structuredClone(vertex);
          vertexChain.push(current.adress);

          while (
            current.adress[0] !== current.previous[0] &&
            current.adress[1] !== current.previous[1]
          ) {
            for (let element of visited) {
              if (
                element.adress[0] === current.previous[0] &&
                element.adress[1] === current.previous[1]
              ) {
                current = structuredClone(element);
                vertexChain.push(current.adress);
              }
            }
          }
          console.log(`target found in ${vertexChain.length - 1} steps`);
          console.log(vertexChain.reverse());

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
            !visited.some((element) => {
              return (
                element.adress[0] === rosy.adress[0] &&
                element.adress[1] === rosy.adress[1]
              );
            })
          ) {
            visited.push(rosy);
            tempQueue.push(rosy);
          }
        }
      }
      steps++;
      queue = [...tempQueue];
      tempQueue = [];
    }
  }
}

const graph = new Graph(0, 0);

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const xx = parseInt(formData.get("x"));
  const yy = parseInt(formData.get("y"));
  console.log(xx, yy);
  graph.knightMoves([xx, yy]);
});
// graph.knightMoves([2, 2]);
