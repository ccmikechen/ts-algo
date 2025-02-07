// This is an input class. Do not edit.
class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

type ValidationTuple = [BST, number, number];

export function validateBst(tree: BST) {
  const queue: ValidationTuple[] = [[tree, -Infinity, Infinity]];

  while (queue.length > 0) {
    const [node, min, max] = queue.shift()!;

    if (node.left) {
      if (node.left.value >= node.value || node.left.value < min) {
        return false;
      }
      queue.push([node.left, min, node.value]);
    }

    if (node.right) {
      if (node.right.value < node.value || node.right.value >= max) {
        return false;
      }
      queue.push([node.right, node.value, max]);
    }
  }

  return true;
}
