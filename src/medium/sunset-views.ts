export enum Direction {
  East = "EAST",
  West = "WEST",
}

export function sunsetViews(buildings: number[], direction: Direction) {
  const result: number[] = [];
  let maxHeight = 0;

  for (let i = 0; i < buildings.length; i++) {
    const idx = direction === Direction.West ? i : buildings.length - 1 - i;
    const height = buildings[idx];

    if (height > maxHeight) {
      maxHeight = height;
      if (direction === Direction.East) {
        result.unshift(idx);
      } else {
        result.push(idx);
      }
    }
  }

  return result;
}

const buildings = [3, 5, 4, 4, 3, 1, 3, 2];
const direction = Direction.West;
console.log(sunsetViews(buildings, direction));
