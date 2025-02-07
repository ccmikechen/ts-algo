export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  arrayOne = arrayOne.sort((a, b) => a - b);
  arrayTwo = arrayTwo.sort((a, b) => a - b);

  let pointA = 0;
  let pointB = 0;
  let minDiff = Infinity;
  let result: number[] = [];

  while (pointA < arrayOne.length || pointB < arrayTwo.length) {
    const diff = Math.abs(arrayOne[pointA] - arrayTwo[pointB]);
    if (diff < minDiff) {
      minDiff = diff;
      result = [arrayOne[pointA], arrayTwo[pointB]];
    }
    if (arrayOne[pointA] < arrayTwo[pointB]) {
      pointA++;
    } else {
      pointB++;
    }
  }

  return result;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
