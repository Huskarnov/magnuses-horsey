export { rosaceBuilder };

function rosaceBuilder(a, b) {
  let rosaceArray = [];
  if (a + 2 <= 7) {
    if (b + 1 <= 7) {
      rosaceArray.push([a + 2, b + 1]);
    }
    if (b - 1 >= 0) {
      rosaceArray.push([a + 2, b - 1]);
    }
  }
  if (a - 2 >= 0) {
    if (b + 1 <= 7) {
      rosaceArray.push([a - 2, b + 1]);
    }
    if (b - 1 >= 0) {
      rosaceArray.push([a - 2, b - 1]);
    }
  }
  //
  if (b + 2 <= 7) {
    if (a + 1 <= 7) {
      rosaceArray.push([a + 1, b + 2]);
    }
    if (a - 1 >= 0) {
      rosaceArray.push([a - 1, b + 2]);
    }
  }
  if (b - 2 >= 0) {
    if (a + 1 <= 7) {
      rosaceArray.push([a + 1, b - 2]);
    }
    if (a - 1 >= 0) {
      rosaceArray.push([a - 1, b - 2]);
    }
  }

  return rosaceArray;
}
