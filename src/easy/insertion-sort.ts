export function insertionSort(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = i - 1; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}
