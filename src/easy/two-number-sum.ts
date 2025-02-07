export function twoNumberSum(array: number[], targetSum: number) {
  const set = new Set();

  for (let i in array) {
    const r = targetSum - array[i];
    if (set.has(r)) return [array[i], r];
    set.add(array[i]);
  }

  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
