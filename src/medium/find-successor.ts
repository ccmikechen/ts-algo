// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  if (node.right) return firstChild(node.right);
  if (!node.parent) return null;
  const parent = node.parent;
  if (node.value === parent.left?.value) return parent;
  return parent.parent;
}

function firstChild(tree: BinaryTree): BinaryTree {
  if (tree.left) return firstChild(tree.left);
  return tree;
}
