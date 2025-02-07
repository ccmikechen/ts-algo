export function riverSizes(matrix: number[][]) {
  const rivers: number[] = [];

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] === 1) {
        matrix[x][y] = -1;
        const size = fillRiver(matrix, [x, y]);
        rivers.push(size);
      } else {
        matrix[x][y] = -1;
      }
    }
  }

  return rivers;
}

type Position = [number, number];

function fillRiver(matrix: number[][], p: Position) {
  const queue: Position[] = [p];
  let size = 0;

  while (queue.length) {
    const [x, y] = queue.pop()!;
    size++;

    if (x > 0 && matrix[x - 1][y] === 1) {
      matrix[x - 1][y] = -1;
      queue.push([x - 1, y]);
    }
    if (x + 1 < matrix.length && matrix[x + 1][y] === 1) {
      matrix[x + 1][y] = -1;
      queue.push([x + 1, y]);
    }
    if (y > 0 && matrix[x][y - 1] === 1) {
      matrix[x][y - 1] = -1;
      queue.push([x, y - 1]);
    }
    if (y + 1 < matrix[x].length && matrix[x][y + 1] === 1) {
      matrix[x][y + 1] = -1;
      queue.push([x, y + 1]);
    }
  }

  return size;
}

const testInput = [
  [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
];
console.log(riverSizes(testInput));
