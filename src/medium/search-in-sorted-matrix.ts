type Range = [number, number];

export function searchInSortedMatrix(
  matrix: number[][],
  target: number,
): Range {
  const queue: Range[] = [[0, 0]];
  const visitedSet = new Set<number>();

  while (queue.length) {
    const [x, y] = queue.shift()!;
    const n = matrix[x][y];

    if (n === target) return [x, y];
    if (x < matrix.length - 1 && !visitedSet.has(matrix[x + 1][y])) {
      queue.push([x + 1, y]);
    }
    if (y < matrix[x].length - 1 && !visitedSet.has(matrix[x][y + 1])) {
      queue.push([x, y + 1]);
    }
  }

  return [-1, -1];
}

const matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004],
];
console.log(searchInSortedMatrix(matrix, 44));
