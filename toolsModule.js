export { rosaceBuilderVertex, Vertex };

class Vertex {
  constructor(x, y, a, b) {
    this.adress = [x, y];
    this.previous = [a, b];
  }
}

function rosaceBuilderVertex(a, b) {
  let rosaceArray = [];
  if (a + 2 <= 7) {
    if (b + 1 <= 7) {
      rosaceArray.push(new Vertex(a + 2, b + 1, a, b));
    }
    if (b - 1 >= 0) {
      rosaceArray.push(new Vertex(a + 2, b - 1, a, b));
    }
  }
  if (a - 2 >= 0) {
    if (b + 1 <= 7) {
      rosaceArray.push(new Vertex(a - 2, b + 1, a, b));
    }
    if (b - 1 >= 0) {
      rosaceArray.push(new Vertex(a - 2, b - 1, a, b));
    }
  }
  //
  if (b + 2 <= 7) {
    if (a + 1 <= 7) {
      rosaceArray.push(new Vertex(a + 1, b + 2, a, b));
    }
    if (a - 1 >= 0) {
      rosaceArray.push(new Vertex(a - 1, b + 2, a, b));
    }
  }
  if (b - 2 >= 0) {
    if (a + 1 <= 7) {
      rosaceArray.push(new Vertex(a + 1, b - 2, a, b));
    }
    if (a - 1 >= 0) {
      rosaceArray.push(new Vertex(a - 1, b - 2, a, b));
    }
  }

  return rosaceArray;
}
