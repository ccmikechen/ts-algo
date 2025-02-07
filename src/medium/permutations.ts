export function getPermutations(array: number[]) {
  return buildPermutations(0, array);
}

function buildPermutations(
  i: number,
  array: number[],
  permutations: number[][] = [],
): number[][] {
  if (i === array.length - 1) {
    permutations.push(array.slice());
    return permutations;
  }

  for (let j = i; j < array.length; j++) {
    swap(array, i, j);
    buildPermutations(i + 1, array, permutations);
    swap(array, i, j);
  }

  return permutations;
}

function swap(array: number[], a: number, b: number) {
  [array[a], array[b]] = [array[b], array[a]];
}

console.log(getPermutations([1, 2, 3]));
