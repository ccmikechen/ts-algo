export function tournamentWinner(competitions: string[][], results: number[]) {
  const map = new Map<string, number>();
  let maxScore = 0;
  let maxWinner = "";

  for (const i in results) {
    const winner = results[i] === 0 ? competitions[i][1] : competitions[i][0];
    const score = (map.get(winner) || 0) + 3;
    map.set(winner, score);

    if (maxScore < score) {
      maxScore = score;
      maxWinner = winner;
    }
  }

  return maxWinner;
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1],
  ),
);
