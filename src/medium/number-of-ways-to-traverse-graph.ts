export function numberOfWaysToTraverseGraph(width: number, height: number) {
  const ways: number[][] = new Array(width);
  ways[0] = new Array(height).fill(1);

  for (let i = 1; i < ways.length; i++) {
    ways[i] = new Array(height);
    ways[i][0] = 1;

    for (let j = 1; j < height; j++) {
      ways[i][j] = ways[i - 1][j] + ways[i][j - 1];
    }
  }

  return ways[width - 1][height - 1];
}
