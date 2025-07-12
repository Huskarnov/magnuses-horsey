class Vertex {
  constructor(x, y) {
    this.adress = [x, y];
    this.rosace = this.rosaceBuilder();
  }
  rosaceBuilder() {
    let rosaceTemp = [];
    if (this.adress[0] + 2 <= 7) {
      if (this.adress[1] + 1 <= 7) {
        rosaceTemp.push([this.adress[0] + 2, this.adress[1] + 1]);
      }
      if (this.adress[1] - 1 >= 0) {
        rosaceTemp.push([this.adress[0] + 2, this.adress[1] - 1]);
      }
    }
    if (this.adress[0] - 2 >= 0) {
      if (this.adress[1] + 1 <= 7) {
        rosaceTemp.push([this.adress[0] - 2, this.adress[1] + 1]);
      }
      if (this.adress[1] - 1 >= 0) {
        rosaceTemp.push([this.adress[0] - 2, this.adress[1] - 1]);
      }
    }
    //
    if (this.adress[1] + 2 <= 7) {
      if (this.adress[0] + 1 <= 7) {
        rosaceTemp.push([this.adress[0] + 1, this.adress[1] + 2]);
      }
      if (this.adress[0] - 1 >= 0) {
        rosaceTemp.push([this.adress[0] - 1, this.adress[1] + 2]);
      }
    }
    if (this.adress[1] - 2 >= 0) {
      if (this.adress[0] + 1 <= 7) {
        rosaceTemp.push([this.adress[0] + 1, this.adress[1] - 2]);
      }
      if (this.adress[0] - 1 >= 0) {
        rosaceTemp.push([this.adress[0] - 1, this.adress[1] - 2]);
      }
    }

    return rosaceTemp;
  }
}
// class Graph {
//   constructor(x, y) {
//     this.root = new Vertex(x, y);
//     this.visited = [];
//   }

//   knightMoves(a, b) {}
// }

// edge list
// adjacency list
// adjacency matrix

// -+2x -+y
// -+2y -+x

const vertex = new Vertex(3, 3);

console.log(vertex.rosace);
