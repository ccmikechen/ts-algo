export function arrayOfProducts(array: number[]) {
  let accLeft = 1,
    accRight = 1;
  const result: number[] = Array(array.length).fill(1);

  for (let i = 0; i < array.length; i++) {
    const r = array.length - 1 - i;
    result[i] *= accLeft;
    result[r] *= accRight;
    accLeft *= array[i];
    accRight *= array[r];
  }

  return result;
}
