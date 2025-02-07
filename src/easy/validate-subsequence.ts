export function isValidSubsequence(array: number[], sequence: number[]) {
  for (let i in sequence) {
    if (array.length === 0) return false;
    while (array.length > 0) {
      const n = array.shift();
      if (n === sequence[i]) break;
      if (array.length === 0) return false;
    }
  }

  return true;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
