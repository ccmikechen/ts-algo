export function missingNumbers(nums: number[]) {
  const fullNums = new Array(nums.length + 2).fill(null).map((_, i) => i + 1);
  const set = new Set<number>(fullNums);
  nums.forEach((num) => set.delete(num));

  return Array.from(set);
}

const input = [4, 5, 1, 3];
console.log(missingNumbers(input));
