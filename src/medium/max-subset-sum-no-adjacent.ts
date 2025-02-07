export function maxSubsetSumNoAdjacent(array: number[]) {
  let lastMax = 0;
  let currentMax = 0;

  for (let n of array) {
    const sumWithLastMax = lastMax + n;
    lastMax = currentMax;
    currentMax = Math.max(sumWithLastMax, currentMax);
  }

  return currentMax;
}
