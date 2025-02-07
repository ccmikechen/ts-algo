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

type IsBalancedHeightPair = [boolean, number];

export function heightBalancedBinaryTree(tree: BinaryTree) {
  const [isBalanced] = getIsBalancedHeight(tree);
  return isBalanced;
}

function getIsBalancedHeight(node: BinaryTree | null): IsBalancedHeightPair {
  if (!node) {
    return [true, 0];
  }

  const [isLeftBalanced, leftHeight] = getIsBalancedHeight(node.left);
  const [isRightBalanced, rightHeight] = getIsBalancedHeight(node.right);
  const heightDiff = Math.abs(leftHeight - rightHeight);
  const isBalanced = isLeftBalanced && isRightBalanced && heightDiff <= 1;
  const height = Math.max(leftHeight, rightHeight) + 1;

  return [isBalanced, height];
}
