export function staircaseTraversal(height: number, maxSteps: number) {
  const steps = Array(height + 1).fill(0);
  [steps[0], steps[1]] = [1, 1];

  for (let i = 1; i < height; i++) {
    const toReduce = i < maxSteps ? 0 : steps[i - maxSteps];
    steps[i + 1] = steps[i] * 2 - toReduce;
  }

  return steps[height];
}

console.log(staircaseTraversal(4, 3));
