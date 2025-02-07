export function removeIslands(matrix: number[][]) {
  const borderMatrix: number[][] = Array(matrix.length + 2)
    .fill(null)
    .map(() => Array(matrix[0].length + 2).fill(1));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      borderMatrix[i + 1][j + 1] = matrix[i][j];
    }
  }

  fill(borderMatrix);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (borderMatrix[i + 1][j + 1] === 1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

type Position = [number, number];

function fill(matrix: number[][]) {
  const queue: Position[] = [[0, 0]];

  while (queue.length > 0) {
    const [x, y] = queue.shift()!;
    find(matrix, queue, x, y, 1);
    find(matrix, queue, x - 1, y, -1);
  }
}

function find(
  matrix: number[][],
  queue: Position[],
  x: number,
  y: number,
  c: number,
) {
  while (x >= 0 && x < matrix.length && matrix[x][y] === 1) {
    matrix[x][y] = 2;

    if (y > 0 && matrix[x][y - 1] === 1) {
      queue.push([x, y - 1]);
    }

    if (y < matrix[x].length - 1 && matrix[x][y + 1] === 1) {
      queue.push([x, y + 1]);
    }

    x += c;
  }
}
