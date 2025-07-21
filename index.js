import { rosaceBuilderVertex, Vertex } from "./toolsModule.js";
import { HashMap } from "./hashMapModule.js";

// change vertex class: only adress
// replace vertex.previous with edge list or adjacency list

function knightMoves(start, target) {
  console.time();
  // validation----------------------------------
  if (start[0] === target[0] && start[1] === target[1]) {
    alert("same starting and target boxes");
    return;
  }
  
  if (
    !(typeof target[0] === "number") ||
    target[0] < 0 ||
    target[0] > 7 ||
    !(typeof target[1] === "number") ||
    target[1] < 0 ||
    target[1] > 7 ||
    !(typeof start[0] === "number") ||
    start[0] < 0 ||
    start[0] > 7 ||
    !(typeof start[1] === "number") ||
    start[1] < 0 ||
    start[1] > 7
  ) {
    alert("target case outside of the table");
    return;
  }

  //------------------------------------------

  let queue = [new Vertex(start[0], start[1], start[0], start[1])];
  let tempQueue = [];

  let set = new HashMap();
  set.set(new Vertex(start[0], start[1], null, null));

  let steps = 0;
  let found = false;

  function checkIfFound(vertex) {
    if (vertex.adress[0] === target[0] && vertex.adress[1] === target[1]) {
      found = true;
      x;
      let vertexChain = [];
      let current = structuredClone(vertex);
      vertexChain.push(current.adress);

      //loop if not start
      while (current.previous[0] && current.previous[1]) {
        current = set.has(new Vertex(current.previous[0], current.previous[1]));

        vertexChain.push(current.adress);
      }

      console.log(`target found in ${vertexChain.length - 1} steps`);
      console.log(vertexChain.reverse());
      console.timeEnd();
      // return;
    }
  }

  while (!found) {
    for (let vertex of queue) {
      let vertexRosace = rosaceBuilderVertex(
        vertex.adress[0],
        vertex.adress[1]
      );

      for (let rosy of vertexRosace) {
        if (!set.has(rosy)) {
          set.set(rosy);
          checkIfFound(rosy);

          tempQueue.push(rosy);
        }
      }
    }
    steps++;
    queue = [...tempQueue];
    tempQueue = [];
  }
}

knightMoves([0, 0], [7, 7]);
