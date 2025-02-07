export function majorityElement(array: number[]) {
  let counter = 0;
  let result = 0;

  for (let n of array) {
    if (counter === 0) {
      result = n;
    }

    if (n === result) {
      counter++;
    } else {
      counter--;
    }
  }

  return result;
}

const input = [1, 2, 3, 2, 2, 1, 2];
console.log(majorityElement(input));
