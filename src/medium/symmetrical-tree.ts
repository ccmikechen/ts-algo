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

export function symmetricalTree(tree: BinaryTree) {
  if (!tree.left && !tree.right) return true;
  if (!tree.left || !tree.right) return false;
  const leftQueue: BinaryTree[] = [tree.left];
  const rightQueue: BinaryTree[] = [tree.right];

  while (leftQueue.length > 0 && rightQueue.length > 0) {
    const leftNode = leftQueue.shift()!;
    const rightNode = rightQueue.shift()!;
    if (leftNode.value !== rightNode.value) return false;
    if (leftNode.left) leftQueue.push(leftNode.left);
    if (leftNode.right) leftQueue.push(leftNode.right);
    if (rightNode.right) rightQueue.push(rightNode.right);
    if (rightNode.left) rightQueue.push(rightNode.left);
  }

  return leftQueue.length === rightQueue.length;
}
