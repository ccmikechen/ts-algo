export function moveElementToEnd(array: number[], toMove: number) {
  let pointer = 0;

  for (let i = pointer + 1; i < array.length; i++) {
    if (array[i] !== toMove) {
      const temp = array[i];
      array[i] = array[pointer];
      array[pointer] = temp;
      pointer++;
    }
  }

  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
