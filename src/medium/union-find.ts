// Do not edit the class below except for
// the constructor and the createSet, find,
// and union methods. Feel free to add new
// properties and methods to the class.
export class UnionFind {
  map: Map<number, number>;

  constructor() {
    this.map = new Map();
  }

  createSet(value: number) {
    this.map.set(value, value);
  }

  find(value: number) {
    return this.map.get(value) ?? null;
  }

  union(valueOne: number, valueTwo: number) {
    const setOne = this.map.get(valueOne);
    const setTwo = this.map.get(valueTwo);

    if (setOne === undefined || setTwo === undefined) return;

    this.map.forEach((value, key) => {
      if (value === setTwo) {
        this.map.set(key, setOne);
      }
    });
  }
}
