export function stableInternships(interns: number[][], teams: number[][]) {
  const rankings: number[][] = [];

  for (let i = 0; i < teams.length; i++) {
    rankings[i] = [];
    for (let j = 0; j < teams[i].length; j++) {
      rankings[i][teams[i][j]] = j;
    }
  }

  const matchings: number[] = new Array(interns.length).fill(null);
  const free: number[] = Array.from(interns.keys());

  while (free.length > 0) {
    const intern: number = free.shift()!;
    const team: number = interns[intern].shift()!;

    if (matchings[team] === null) {
      matchings[team] = intern;
      continue;
    }

    if (rankings[team][intern] < rankings[team][matchings[team]]) {
      free.push(matchings[team]);
      matchings[team] = intern;
    } else {
      free.push(intern);
    }
  }

  return matchings.map((intern, team) => [intern, team]);
}

const interns = [
  [0, 1],
  [1, 0],
];
const teams = [
  [1, 0],
  [1, 0],
];
console.log(stableInternships(interns, teams));
