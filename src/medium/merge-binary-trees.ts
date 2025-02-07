// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function mergeBinaryTrees(tree1: BinaryTree, tree2: BinaryTree) {
  return mergeTrees(tree1, tree2);
}

function mergeTrees(tree1: BinaryTree | null, tree2: BinaryTree | null) {
  if (!tree1) return tree2!;
  if (!tree2) return tree1!;

  const tree = new BinaryTree(tree1.value + tree2.value);
  tree.left = mergeTrees(tree1.left, tree2.left);
  tree.right = mergeTrees(tree1.right, tree2.right);
  return tree;
}
