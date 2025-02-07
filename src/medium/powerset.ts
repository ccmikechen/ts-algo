export function powerset(array: number[]) {
  const set: number[][] = [[]];

  for (let n of array) {
    const len = set.length;
    for (let i = 0; i < len; i++) {
      set.push([...set[i], n]);
    }
  }

  return set;
}
