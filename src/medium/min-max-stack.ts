export class MinMaxStack {
  private stack: number[];
  private minStack: number[];
  private maxStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
    this.maxStack = [];
  }

  peek() {
    return this.getLast(this.stack);
  }

  pop() {
    const value = this.stack.pop();
    if (value === undefined) return value;
    if (this.getMin() === value) this.minStack.pop();
    if (this.getMax() === value) this.maxStack.pop();
    return value;
  }

  push(number: number) {
    this.stack.push(number);

    if (!this.minStack.length || this.getMin() >= number) {
      this.minStack.push(number);
    }
    if (!this.maxStack.length || this.getMax() <= number) {
      this.maxStack.push(number);
    }
  }

  getMin() {
    return this.getLast(this.minStack);
  }

  getMax() {
    return this.getLast(this.maxStack);
  }

  private getLast(array: number[]) {
    return array[array.length - 1];
  }
}
