export function kadanesAlgorithm(array: number[]) {
  let maxSum = array[0];

  for (let i = 1; i < array.length; i++) {
    array[i] += Math.max(0, array[i - 1]);
    maxSum = Math.max(maxSum, array[i]);
  }

  return maxSum;
}

const input = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
console.log(kadanesAlgorithm(input));
