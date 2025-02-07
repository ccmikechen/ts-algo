class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function nodeDepths(root: BinaryTree): number {
  const depths: number[] = [];
  getNodeDepths(root, 0, depths);
  return depths.reduce((a, b) => a + b, 0);
}

function getNodeDepths(tree: BinaryTree, depth: number, depths: number[]) {
  depths.push(depth);
  if (tree.left) getNodeDepths(tree.left, depth + 1, depths);
  if (tree.right) getNodeDepths(tree.right, depth + 1, depths);
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);
console.log(nodeDepths(root));
