// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function sumOfLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList,
) {
  let nodeOne: LinkedList | null = linkedListOne;
  let nodeTwo: LinkedList | null = linkedListTwo;
  let head: LinkedList | null = null;
  let lastNode: LinkedList | null = null;
  let carry = 0;

  while (nodeOne || nodeTwo) {
    const sum = (nodeOne?.value ?? 0) + (nodeTwo?.value ?? 0) + carry;
    const num = sum % 10;
    carry = Math.floor(sum / 10);
    const newNode = new LinkedList(num);

    if (lastNode) {
      lastNode.next = newNode;
    } else {
      head = newNode;
    }
    lastNode = newNode;
    if (nodeOne) nodeOne = nodeOne.next;
    if (nodeTwo) nodeTwo = nodeTwo.next;
  }

  if (carry === 1) {
    lastNode!.next = new LinkedList(carry);
  }

  return head;
}
