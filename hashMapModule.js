export { HashMap };

class LinkedList {
  constructor() {
    this.head = null;
  }

  skipIfFoundOrAppend(vertex) {
    let current = this.head;
    let previous;

    while (current) {
      if (
        vertex.adress[0] === current.value.adress[0] &&
        vertex.adress[1] === current.value.adress[1]
      ) {
        return;
      } else {
        previous = current;
        current = current.next;
      }
    }
    previous.next = { value: vertex, next: null };
  }

  has(vertex) {
    let current = this.head;
    while (current) {
      if (
        current.value.adress[0] === vertex.adress[0] &&
        current.value.adress[1] === vertex.adress[1]
      ) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  entries() {
    let entriesArray = [];
    let current = this.head;
    while (current) {
      entriesArray.push(current.value);
      current = current.next;
    }

    return entriesArray;
  }
}
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class HashMap {
  constructor() {
    this.buckets = Array(16);
    this.capacity = 16;
    this.actual_content = 0;
    this.load_factor = 0.75;
  }

  hash(vertex) {
    // let hashCode = (31 * vertex.adress[0] + vertex.adress[1]) % this.capacity;
    // return hashCode;
    // return (vertex.adress[0] << vertex.adress[1]) | y;
    return (vertex.adress[0] << 3) | vertex.adress[1];
  }

  set_no_enlarge(vertex) {
    let hash = this.hash(vertex);

    if (!this.buckets[hash]) {
      this.buckets[hash] = new LinkedList();
      this.buckets[hash].head = new Node(vertex, null);
      this.actual_content++;
    } else {
      this.buckets[hash].skipIfFoundOrAppend(vertex);
    }
  }

  enlarge() {
    if (this.actual_content / this.capacity >= this.load_factor) {
      let entriesArray = this.entries().flat();

      this.capacity *= 2;
      this.buckets = Array(this.capacity);
      this.actual_content = 0;

      entriesArray.forEach((element) => {
        this.set_no_enlarge(element);
      });
    }
  }

  set(vertex) {
    this.set_no_enlarge(vertex);
    this.enlarge();
  }

  has(vertex) {
    let hash = this.hash(vertex);

    // for (let i = 0; i < this.capacity; i++) {
    //   if (this.buckets[i]) {
    //     if (this.buckets[i].has(vertex)) {
    //       return true;
    //     }
    //   }
    // }

    if (this.buckets[hash]) {
      if (this.buckets[hash].has(vertex)) {
        return true;
      }
    }

    return false;
  }

  entries() {
    let entriesArray = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.buckets[i]) {
        entriesArray.push(this.buckets[i].entries());
      }
    }

    return entriesArray;
  }
}
