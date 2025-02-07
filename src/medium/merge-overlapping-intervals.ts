export function mergeOverlappingIntervals(array: number[][]) {
  array.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [array[0]];

  for (let i = 1; i < array.length; i++) {
    const lastInterval = result[result.length - 1];
    if (lastInterval[1] < array[i][0]) {
      result.push(array[i]);
    } else {
      lastInterval[1] = Math.max(lastInterval[1], array[i][1]);
    }
  }

  return result;
}

const intervals = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
];
console.log(mergeOverlappingIntervals(intervals));
