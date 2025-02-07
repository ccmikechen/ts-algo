export function findThreeLargestNumbers(array: number[]) {
  const result: number[] = [-Infinity, -Infinity, -Infinity];

  for (let n of array) {
    if (n > result[0]) result[0] = n;
    swap(result, 1);
    swap(result, 2);
  }

  return result;
}

function swap(array: number[], i: number) {
  if (array[i] >= array[i - 1]) return;
  const t = array[i];
  array[i] = array[i - 1];
  array[i - 1] = t;
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]),
);
