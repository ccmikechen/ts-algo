export function minHeightBst(array: number[]) {
  array.sort((a, b) => a - b);
  return getMinHeightBst(array, 0, array.length - 1);
}

function getMinHeightBst(array: number[], start: number, end: number): BST {
  const mid = Math.floor((start + end) / 2);
  const node = new BST(array[mid]);

  if (mid > start) {
    node.left = getMinHeightBst(array, start, mid - 1);
  }

  if (mid < end) {
    node.right = getMinHeightBst(array, mid + 1, end);
  }

  return node;
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
