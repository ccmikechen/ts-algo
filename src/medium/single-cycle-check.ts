export function hasSingleCycle(array: number[]) {
  let idx = 0;
  const visitedSet = new Set<number>();

  while (visitedSet.size < array.length) {
    idx = (idx + array[idx]) % array.length;
    if (idx < 0) idx += array.length;
    if (visitedSet.has(idx)) return false;
    visitedSet.add(idx);
  }

  return true;
}
