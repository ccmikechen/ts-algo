// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findKthLargestValueInBst(tree: BST, k: number) {
  const stack: (BST | number)[] = [tree];

  while (stack.length > 0) {
    const item = stack.pop()!;
    if (typeof item === "number") {
      if (--k === 0) return item as number;
      continue;
    }
    const node = item as BST;
    if (node.left) stack.push(node.left);
    stack.push(node.value);
    if (node.right) stack.push(node.right);
  }

  return null;
}
