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

export function invertBinaryTree(tree: BinaryTree | null) {
  if (!tree) return null;
  const queue: BinaryTree[] = [tree];
  while (queue.length > 0) {
    const node = queue.shift()!;
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return tree;
}
