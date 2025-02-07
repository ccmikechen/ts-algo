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

export function splitBinaryTree(tree: BinaryTree) {
  const sums = new Set<number>();
  const sum = calculateTreeSums(tree, sums);
  if (sum % 2 === 1) return 0;
  const target = sum / 2;
  return sums.has(target) ? target : 0;
}

function calculateTreeSums(tree: BinaryTree, sums: Set<number>): number {
  const leftSum = tree.left ? calculateTreeSums(tree.left, sums) : 0;
  const rightSum = tree.right ? calculateTreeSums(tree.right, sums) : 0;
  const sum = tree.value + leftSum + rightSum;
  sums.add(sum);
  return sum;
}
