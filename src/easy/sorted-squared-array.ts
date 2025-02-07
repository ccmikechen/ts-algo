export function sortedSquaredArray(array: number[]) {
  const result = [];
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const leftNumber = Math.pow(array[left], 2);
    const rightNumber = Math.pow(array[right], 2);
    if (leftNumber > rightNumber) {
      result.unshift(leftNumber);
      left++;
    } else {
      result.unshift(rightNumber);
      right--;
    }
  }

  return result;
}

console.log(sortedSquaredArray([-4, -3, 1, 2, 3, 5, 6, 8, 9]));
