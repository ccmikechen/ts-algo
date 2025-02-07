// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
export class MinHeap {
  heap: number[];

  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array: number[]) {
    for (let i = array.length - 1; i >= 0; i--) {
      this.siftDown(i, array);
    }
    return array;
  }

  siftDown(idx = 0, heap = this.heap) {
    while (this.hasLeftChild(idx, heap)) {
      let childIdx = this.getLeftChildIndex(idx);
      if (this.leftChild(idx, heap) > this.rightChild(idx, heap)) {
        childIdx = this.getRightChildIndex(idx);
      }
      if (heap[idx] < heap[childIdx]) return;
      this.swap(idx, childIdx, heap);
      idx = childIdx;
    }
  }

  siftUp() {
    let idx = this.heap.length - 1;
    while (this.hasParent(idx) && this.heap[idx] < this.parent(idx)) {
      const parentIdx = this.getParentIndex(idx);
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  peek() {
    return this.heap[0];
  }

  remove(heap = this.heap) {
    this.swap(0, heap.length - 1, heap);
    const removedValue = heap.pop();
    this.siftDown();
    return removedValue;
  }

  insert(value: number, heap = this.heap) {
    heap.push(value);
    this.siftUp();
  }

  swap(a: number, b: number, heap = this.heap) {
    [heap[a], heap[b]] = [heap[b], heap[a]];
  }

  getParentIndex(idx: number) {
    return Math.floor((idx - 1) / 2);
  }

  hasParent(idx: number) {
    return this.getParentIndex(idx) >= 0;
  }

  parent(idx: number, heap = this.heap) {
    return heap[this.getParentIndex(idx)];
  }

  getLeftChildIndex(idx: number) {
    return idx * 2 + 1;
  }

  hasLeftChild(idx: number, heap = this.heap) {
    return this.getLeftChildIndex(idx) < heap.length;
  }

  leftChild(idx: number, heap = this.heap) {
    return heap[this.getLeftChildIndex(idx)];
  }

  getRightChildIndex(idx: number) {
    return idx * 2 + 2;
  }

  rightChild(idx: number, heap = this.heap) {
    return heap[this.getRightChildIndex(idx)];
  }
}

const input = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];
const heap = new MinHeap(input);
console.log(heap.heap);
