export function numberOfWaysToMakeChange(n: number, denoms: number[]) {
  const ways: number[] = new Array<number>(n + 1).fill(0);
  ways[0] = 1;

  for (let d of denoms) {
    for (let i = 0; i < ways.length; i++) {
      if (d <= i) {
        ways[i] += ways[i - d];
      }
    }
  }

  return ways[n];
}
