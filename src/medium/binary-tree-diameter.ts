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

type DepthDiameter = [number, number];

export function binaryTreeDiameter(tree: BinaryTree) {
  const depthDiameter = binaryTreeDepthDiameter(tree);
  return depthDiameter[1];
}

function binaryTreeDepthDiameter(tree: BinaryTree): DepthDiameter {
  let leftDepthDiameter: DepthDiameter = [0, 0];
  let rightDepthDiameter: DepthDiameter = [0, 0];

  if (tree.left) {
    leftDepthDiameter = binaryTreeDepthDiameter(tree.left);
  }
  if (tree.right) {
    rightDepthDiameter = binaryTreeDepthDiameter(tree.right);
  }
  const depth = Math.max(leftDepthDiameter[0], rightDepthDiameter[0]) + 1;
  const diameters = [
    leftDepthDiameter[0] + rightDepthDiameter[0],
    leftDepthDiameter[1],
    rightDepthDiameter[1],
  ];
  const diameter = Math.max(...diameters);

  return [depth, diameter];
}
