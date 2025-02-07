export function sweetAndSavory(dishes: number[], target: number) {
  dishes.sort((a, b) => a - b);

  let left = 0;
  let right = dishes.length - 1;
  let result: number[] = [0, 0];
  let resultDiff = Infinity;

  while (dishes[left] < 0 && dishes[right] > 0) {
    const sum = dishes[left] + dishes[right];
    const diff = target - sum;

    if (diff < resultDiff && diff >= 0) {
      result = [dishes[left], dishes[right]];
      resultDiff = diff;
    }

    if (diff < 0) {
      right--;
    } else {
      left++;
    }
  }

  return result;
}

const dishes = [-3, -5, 1, 7];
const target = 8;
console.log(sweetAndSavory(dishes, target));
