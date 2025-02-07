type ValueIndex = [number, number];

export function taskAssignment(k: number, tasks: number[]) {
  const sortedIndexes: number[] = tasks
    .map((v, i) => [v, i] as ValueIndex)
    .sort((a, b) => (a[0] > b[0] ? 1 : -1))
    .map((item) => item[1]);

  let result: number[][] = [];

  for (let i = 0; i < k; i++) {
    result.push([sortedIndexes[i], sortedIndexes[tasks.length - 1 - i]]);
  }

  return result;
}
