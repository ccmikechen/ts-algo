export function isMonotonic(array: number[]) {
  if (array.length <= 1) return true;
  let sign = 0;

  for (let i = 1; i < array.length; i++) {
    const newSign = Math.sign(array[i] - array[i - 1]);
    if (newSign === 0) continue;
    if (sign === 0) sign = newSign;
    if (newSign !== sign) return false;
  }

  return true;
}

const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
console.log(isMonotonic(array));
