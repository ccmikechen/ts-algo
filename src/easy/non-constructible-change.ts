export function nonConstructibleChange(coins: number[]) {
  const set = new Set<number>();

  for (let coin of coins) {
    Array.from(set).forEach((key) => set.add(key + coin));
    set.add(coin);
  }

  let n = 1;
  while (true) {
    if (!set.has(n)) return n;
    n++;
  }
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
