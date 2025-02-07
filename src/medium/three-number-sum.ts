type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  const result: Triplet[] = [];
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const sum = array[i] + array[left] + array[right];
      if (sum === targetSum) result.push([array[i], array[left], array[right]]);
      if (sum <= targetSum) left++;
      if (sum >= targetSum) right--;
    }
  }

  return result;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
