export function longestPeak(array: number[]) {
  let increasing = false;
  let decreasing = false;
  let maxPeak = 0;
  let peak = 0;

  for (let i = 0; i < array.length; i++) {
    peak++;
    const sign =
      i === array.length - 1 ? 0 : Math.sign(array[i + 1] - array[i]);

    if (
      sign === 0 ||
      (decreasing && sign === 1) ||
      (!increasing && sign === -1)
    ) {
      if (decreasing && peak >= 3 && peak > maxPeak) {
        maxPeak = peak;
      }
      peak = sign === 1 ? 1 : 0;
      increasing = false;
      decreasing = false;
    }

    increasing = increasing || sign === 1;
    decreasing = decreasing || sign === -1;
  }

  return maxPeak;
}
