type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
export function productSum(array: SpecialArray) {
  let depth = 1;
  let mul = 1;
  let queue: SpecialArray = [];
  let sum = 0;

  while (true) {
    while (array.length > 0) {
      const val = array.shift();
      if (typeof val === "number") {
        sum += val * mul;
      } else {
        queue = queue.concat(val as SpecialArray);
      }
    }

    if (queue.length === 0) break;
    depth++;
    mul *= depth;
    array = queue;
    queue = [];
  }

  return sum;
}

const test: SpecialArray = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
console.log(productSum(test));
