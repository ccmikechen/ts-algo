export function bestSeat(seats: number[]) {
  let pointer = 0;
  let space = 0;
  let maxSpace = 0;
  let result = -1;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      pointer = i;
      space = 0;
      continue;
    }

    if (++space > maxSpace) {
      result = pointer + Math.ceil(space / 2);
      maxSpace = space;
    }
  }

  return result;
}

const input = [1, 0, 1, 0, 0, 0, 1];
console.log(bestSeat(input));
