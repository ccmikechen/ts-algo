export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  const numbers: number[] = new Array(n + 1).fill(-1);
  numbers[0] = 0;

  for (let d of denoms) {
    for (let i = d; i <= n; i++) {
      const r = i - d;
      if (numbers[r] < 0 || (numbers[i] > 0 && numbers[r] >= numbers[i]))
        continue;
      numbers[i] = numbers[r] + 1;
    }
  }

  return numbers[n];
}
