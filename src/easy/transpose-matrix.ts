export function transposeMatrix(matrix: number[][]) {
  const width = matrix.length;
  const height = matrix[0].length;
  const newMatrix: number[][] = Array(height)
    .fill(null)
    .map((array) => Array(width));

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      newMatrix[j][i] = matrix[i][j];
    }
  }

  return newMatrix;
}

console.log(
  transposeMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
