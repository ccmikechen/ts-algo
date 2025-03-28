export function nextGreaterElement(array: number[]) {
  const stack: number[] = [];
  const result: number[] = Array(array.length);

  for (let i = array.length * 2 - 1; i >= 0; i--) {
    const idx = i % array.length;

    while (stack.length && stack[stack.length - 1] <= array[idx]) {
      stack.pop();
    }

    result[idx] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(array[idx]);
  }

  return result;
}

const input = [2, 5, -3, -4, 6, 7, 2];
console.log(nextGreaterElement(input));
