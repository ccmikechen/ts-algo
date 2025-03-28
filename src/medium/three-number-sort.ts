export function threeNumberSort(array: number[], order: number[]) {
  const counts = new Map<number, number>();

  for (let n of array) {
    const counter = counts.get(n) || 0;
    counts.set(n, counter + 1);
  }

  let pointer = 0;
  for (let n of order) {
    let counter = counts.get(n) || 0;
    while (counter > 0) {
      array[pointer++] = n;
      counter--;
    }
  }

  return array;
}

const array = [1, 0, 0, -1, -1, 0, 1, 1];
const order = [0, 1, -1];
console.log(threeNumberSort(array, order));
