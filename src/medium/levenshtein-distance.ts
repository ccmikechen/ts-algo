export function levenshteinDistance(str1: string, str2: string) {
  const distances: number[][] = new Array(str1.length + 1)
    .fill(null)
    .map(() => new Array(str2.length + 1).fill(0));

  for (let i = 0; i <= str1.length; i++) {
    distances[i][0] = i;
  }
  for (let i = 0; i <= str2.length; i++) {
    distances[0][i] = i;
  }

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
        distances[i][j] = distances[i - 1][j - 1];
        continue;
      }
      distances[i][j] =
        Math.min(
          distances[i - 1][j - 1],
          distances[i][j - 1],
          distances[i - 1][j],
        ) + 1;
    }
  }

  return distances[str1.length][str2.length];
}
