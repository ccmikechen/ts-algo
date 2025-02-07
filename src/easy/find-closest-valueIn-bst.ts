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

export function findClosestValueInBst(tree: BST, target: number) {
  return findClosestValue(tree, target, tree.value);
}

function findClosestValue(tree: BST, target: number, current: number): number {
  if (Math.abs(current - target) > Math.abs(tree.value - target)) {
    current = tree.value;
  }
  if (tree.left && tree.value > target)
    return findClosestValue(tree.left, target, current);
  if (tree.right && tree.value < target)
    return findClosestValue(tree.right, target, current);
  return current;
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);
console.log(findClosestValueInBst(root, 12));
