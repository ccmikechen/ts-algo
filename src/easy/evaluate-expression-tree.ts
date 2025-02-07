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

const operators = new Map<number, (a: number, b: number) => number>();
operators.set(-1, (a: number, b: number) => a + b);
operators.set(-2, (a: number, b: number) => a - b);
operators.set(-3, (a: number, b: number) => Math.trunc(a / b));
operators.set(-4, (a: number, b: number) => a * b);

export function evaluateExpressionTree(tree: BinaryTree): number {
  if (tree.value >= 0) return tree.value;
  const left = evaluateExpressionTree(tree.left!);
  const right = evaluateExpressionTree(tree.right!);
  const operator = operators.get(tree.value)!;
  return operator(left, right);
}

const tree = new BinaryTree(-1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(-2);
tree.right.left = new BinaryTree(5);
tree.right.right = new BinaryTree(1);
console.log(evaluateExpressionTree(tree));
