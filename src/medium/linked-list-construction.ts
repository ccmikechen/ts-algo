// This is an input class. Do not edit.
export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node: Node) {
    if (this.head) {
      this.insertBefore(this.head, node);
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  setTail(node: Node) {
    if (this.tail) {
      this.insertAfter(this.tail, node);
    } else {
      this.setHead(node);
    }
  }

  insertBefore(node: Node, nodeToInsert: Node) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);

    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;

    if (node.prev) {
      node.prev.next = nodeToInsert;
    } else {
      this.head = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node: Node, nodeToInsert: Node) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);

    nodeToInsert.next = node.next;
    nodeToInsert.prev = node;

    if (node.next) {
      node.next.prev = nodeToInsert;
    } else {
      this.tail = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position: number, nodeToInsert: Node) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let node = this.head;
    let pos = 1;

    while (node) {
      if (pos === position) {
        this.insertBefore(node, nodeToInsert);
        return;
      }
      pos++;
      node = node.next;
    }

    this.setTail(nodeToInsert);
  }

  removeNodesWithValue(value: number) {
    let node = this.head;
    while (node) {
      const nextNode = node.next;
      if (node.value === value) this.remove(node);
      node = nextNode;
    }
  }

  remove(node: Node) {
    if (node === this.head) this.head = node.next;
    if (node === this.tail) this.tail = node.prev;
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }

  containsNodeWithValue(value: number) {
    let node = this.head;
    while (node) {
      if (node.value === value) return true;
      node = node.next;
    }
    return false;
  }
}
