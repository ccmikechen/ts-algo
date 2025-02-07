export function zeroSumSubarray(nums: number[]) {
  const set = new Set<number>();
  let sum = 0;

  for (let num of nums) {
    sum += num;

    if (set.has(sum) || sum === 0) {
      return true;
    }

    set.add(sum);
  }

  return false;
}

const input = [1, 3, 5, -6, 3, 3];
console.log(zeroSumSubarray(input));
