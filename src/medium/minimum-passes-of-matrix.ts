type Position = [number, number];

export function minimumPassesOfMatrix(matrix: number[][]) {
  const steps: number[][] = Array(matrix.length);
  const queue: Position[] = [];
  let maxStep = 0;
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    steps[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      steps[i][j] = Math.sign(matrix[i][j]);
      if (steps[i][j] === 1) {
        queue.push([i, j]);
      }
      if (steps[i][j] !== 0) {
        count++;
      }
    }
  }

  while (queue.length > 0) {
    const [x, y] = queue.shift()!;
    const nextStep = steps[x][y] + 1;
    maxStep = Math.max(maxStep, steps[x][y] - 1);
    count--;

    checkAndPush(steps, queue, x - 1, y, nextStep);
    checkAndPush(steps, queue, x + 1, y, nextStep);
    checkAndPush(steps, queue, x, y - 1, nextStep);
    checkAndPush(steps, queue, x, y + 1, nextStep);
  }

  if (count > 0) return -1;
  return maxStep;
}

function checkAndPush(
  steps: number[][],
  queue: Position[],
  x: number,
  y: number,
  nextStep: number,
) {
  if (
    x >= 0 &&
    x < steps.length &&
    y >= 0 &&
    y < steps[x].length &&
    steps[x][y] === -1
  ) {
    steps[x][y] = nextStep;
    queue.push([x, y]);
  }
}
