// This is the class of the input root.
// Do not edit it.
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

export function branchSums(root: BinaryTree): number[] {
  const result: number[] = [];
  getBranchSums(root, 0, result);
  return result;
}

function getBranchSums(tree: BinaryTree, sum: number, result: number[]) {
  const newSum = sum + tree.value;
  if (!tree.left && !tree.right) {
    result.push(newSum);
    return;
  }
  if (tree.left) getBranchSums(tree.left, newSum, result);
  if (tree.right) getBranchSums(tree.right, newSum, result);
}
