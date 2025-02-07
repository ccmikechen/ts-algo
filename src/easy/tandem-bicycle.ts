export function tandemBicycle(
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean,
) {
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => (fastest ? b - a : a - b));
  let sum = 0;

  for (let i in redShirtSpeeds) {
    sum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }

  return sum;
}

const redShirtSpeeds = [5, 5, 3, 9, 2];
const blueShirtSpeeds = [3, 6, 7, 2, 1];
console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, true));
