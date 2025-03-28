export function blackjackProbability(target: number, startingHand: number) {
  if (startingHand >= target - 4) return 0.0;
  const probabilities: number[] = Array(target + 1).fill(.0);

  for (let i = target - 5; i >= startingHand; i--) {
    let prob = 0.0;

    for (let j = 1; j <= 10; j++) {
      const next = i + j;
      if (next > target) {
        prob += 0.1;
      } else {
        prob += 0.1 * probabilities[next];
      }
    }

    probabilities[i] = prob;
  }

  return Math.round(probabilities[startingHand] * 1000) / 1000;
}

console.log(blackjackProbability(21, 15));
