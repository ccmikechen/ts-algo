// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let parent = linkedList;
  let node = linkedList.next;

  while (node) {
    if (node.value === parent.value) {
      parent.next = node.next;
    } else {
      parent = node;
    }
    node = node.next;
  }

  return linkedList;
}
