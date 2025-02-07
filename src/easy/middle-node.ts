// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function middleNode(linkedList: LinkedList) {
  let node = linkedList;
  let current = linkedList;
  let index = 0;

  while (current.next) {
    current = current.next;
    index += 1;

    if (index % 2 === 1) {
      node = node.next!;
    }
  }

  return node;
}
