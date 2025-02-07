export function firstDuplicateValue(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    const n = Math.abs(array[i]);
    if (array[n - 1] < 0) return n;
    array[n - 1] *= -1;
  }
  return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));
