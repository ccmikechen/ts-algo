// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function mergingLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList,
) {
  let countOne = getLength(linkedListOne);
  let countTwo = getLength(linkedListTwo);
  let nodeOne: LinkedList | null = linkedListOne;
  let nodeTwo: LinkedList | null = linkedListTwo;

  while (nodeOne !== nodeTwo) {
    if (countOne >= countTwo) nodeOne = nodeOne ? nodeOne.next : nodeTwo;
    if (countTwo >= countOne) nodeTwo = nodeTwo ? nodeTwo.next : nodeOne;
    if (countOne > countTwo) countOne--;
    if (countTwo > countOne) countTwo--;
  }

  return nodeOne;
}

function getLength(linkedList: LinkedList) {
  let length = 0;
  let node: LinkedList | null = linkedList;
  while (node) {
    length++;
    node = node.next;
  }
  return length;
}
