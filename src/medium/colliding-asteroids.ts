export function collidingAsteroids(asteroids: number[]) {
  const stack: number[] = [];

  for (const asteroid of asteroids) {
    if (!stack.length || asteroid > 0) {
      stack.push(asteroid);
      continue;
    }

    while (true) {
      const lastIdx = stack.length - 1;
      if (stack[lastIdx] < 0 || !stack.length) {
        stack.push(asteroid);
        break;
      }

      const size = Math.abs(asteroid);
      if (stack[lastIdx] > size) break;
      if (stack.pop()! === size) break;
    }
  }

  return stack;
}

console.log(collidingAsteroids([-3, 5, -8, 6, 7, -4, -7]));
