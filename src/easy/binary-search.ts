export function binarySearch(array: number[], target: number): number {
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    const value = array[mid];

    if (value === target) {
      return mid;
    } else if (value > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
