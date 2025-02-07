// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BST(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BST(value);
      }
    }
    return this;
  }

  contains(value: number): boolean {
    if (value === this.value) return true;
    if (value < this.value) {
      if (this.left) return this.left.contains(value);
      return false;
    }
    if (this.right) return this.right.contains(value);
    return false;
  }

  remove(value: number): BST | null {
    if (value > this.value) {
      this.right = this.right?.remove(value) ?? null;
    } else if (value < this.value) {
      this.left = this.left?.remove(value) ?? null;
    } else if (this.right) {
      const [right, newValue] = this.right.removeMin();
      this.value = newValue;
      this.right = right;
    } else if (this.left) {
      const [left, newValue] = this.left.removeMax();
      this.value = newValue;
      this.left = left;
    } else {
      return null;
    }
    return this;
  }

  private removeMin(): [BST | null, number] {
    if (this.left) {
      const [left, minValue] = this.left.removeMin();
      this.left = left;
      return [this, minValue];
    }
    if (this.right) return [this.right, this.value];
    return [null, this.value];
  }

  private removeMax(): [BST | null, number] {
    if (this.right) {
      const [right, maxValue] = this.right.removeMax();
      this.right = right;
      return [this, maxValue];
    }
    if (this.left) return [this.left, this.value];
    return [null, this.value];
  }
}
