// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeKthNodeFromEnd(head: LinkedList, k: number) {
  let parentNode: LinkedList | null = null;
  let nodeA: LinkedList | null = head;
  let nodeB: LinkedList | null = head;

  let i = 0;
  while (nodeA && nodeB) {
    if (i >= k) {
      parentNode = nodeA;
      nodeA = nodeA.next;
    }
    nodeB = nodeB.next;
    i++;
  }

  if (nodeA) removeNodeHelper(parentNode, nodeA);
}

function removeNodeHelper(parent: LinkedList | null, node: LinkedList): void {
  if (node.next) {
    node.value = node.next.value;
    return removeNodeHelper(node, node.next);
  }
  if (parent) parent.next = null;
}
