// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(
    value: number,
    left: BST | null = null,
    right: BST | null = null,
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  return doReconstructBst(preOrderTraversalValues, Infinity);
}

function doReconstructBst(values: number[], max: number): BST | null {
  if (values.length === 0) {
    return null;
  }

  const value = values.shift()!;
  const node = new BST(value);

  let nextValue = values[0];

  if (nextValue === undefined) {
    return node;
  }

  if (nextValue < value) {
    node.left = doReconstructBst(values, value);
  }

  nextValue = values[0];

  if (nextValue >= value && nextValue < max) {
    node.right = doReconstructBst(values, max);
  }

  return node;
}
