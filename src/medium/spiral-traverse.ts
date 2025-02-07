export function spiralTraverse(matrix: number[][]): number[] {
  const result: number[] = [];
  while (matrix.length) {
    result.push(...matrix.shift()!);
    if (!matrix.length) break;
    matrix = matrix[0].map((_, i) => matrix.map((row) => row[i])).reverse();
  }
  return result;
}
