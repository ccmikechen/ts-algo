export function sortStack(stack: number[]) {
  if (stack.length <= 1) return stack;
  const value = stack.pop()!;
  sortStack(stack);
  insert(stack, value);
  return stack;
}

function insert(stack: number[], value: number) {
  const tempStack: number[] = [];
  while (stack.length && stack[stack.length - 1] > value) {
    tempStack.push(stack.pop()!);
  }
  stack.push(value);
  while (tempStack.length) {
    stack.push(tempStack.pop()!);
  }
}

console.log(sortStack([-5, 2, -2, 4, 3, 1]));
