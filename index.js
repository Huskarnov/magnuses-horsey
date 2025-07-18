import { rosaceBuilder, rosaceBuilderVertex, Vertex } from "./toolsModule.js";
import { HashMap } from "./hashMapModule.js";

class Graph {
  constructor(x, y) {
    this.root = [x, y];
    this.edgeList = [];
  }

  // buildEdgeList() {
  //   return;
  // }

  knightMoves(start, target) {
    // early exit
    if (
      !(typeof target[0] === "number") ||
      target[0] < 0 ||
      target[0] > 7 ||
      !(typeof target[1] === "number") ||
      target[1] < 0 ||
      target[1] > 7
    ) {
      alert("target case outside of the table");
      return;
    }
    if (
      !(typeof start[0] === "number") ||
      start[0] < 0 ||
      start[0] > 7 ||
      !(typeof start[1] === "number") ||
      start[1] < 0 ||
      start[1] > 7
    ) {
      alert("starting case outside of the table");
      return;
    }

    // let queue = [
    //   new Vertex(this.root[0], this.root[1], this.root[0], this.root[1]),
    // ];
    let queue = [new Vertex(start[0], start[1], start[0], start[1])];
    let tempQueue = [];
    // let visited = [...queue];

    let set = new HashMap();
    set.set(new Vertex(start[0], start[1], start[0], start[1]));

    let steps = 0;

    while (true) {
      for (let vertex of queue) {
        if (vertex.adress[0] === target[0] && vertex.adress[1] === target[1]) {
          let vertexChain = [];
          let current = structuredClone(vertex);
          vertexChain.push(current.adress);

          while (
            current.adress[0] !== current.previous[0] &&
            current.adress[1] !== current.previous[1]
          ) {
            // for (let element of visited) {
            //   if (
            //     element.adress[0] === current.previous[0] &&
            //     element.adress[1] === current.previous[1]
            //   ) {
            //     current = structuredClone(element);
            //     vertexChain.push(current.adress);
            //   }
            // }

            current = set.has(
              new Vertex(current.previous[0], current.previous[1])
            );
            // console.log(current);
            vertexChain.push(current.adress);
          }

          console.log(`target found in ${vertexChain.length - 1} steps`);
          console.log(vertexChain.reverse());
          // console.log(set);
          // console.log(visited);

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
            !set.has(rosy)
            // !visited.some((element) => {
            //   return (
            //     element.adress[0] === rosy.adress[0] &&
            //     element.adress[1] === rosy.adress[1]
            //   );
            // })
          ) {
            // visited.push(rosy);
            set.set(rosy);
            // console.log(set);
            // console.log(rosy);
            // console.log(set.hash(rosy));
            // console.log(set.has(rosy));
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
  if (xx && yy) {
    graph.knightMoves([xx, yy]);
  }
});

graph.knightMoves([0, 0], [2, 2]);
