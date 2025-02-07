export function bubbleSort(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (array[j] < array[j - 1]) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }

  return array;
}
