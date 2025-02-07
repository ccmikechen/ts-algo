export function validStartingCity(
  distances: number[],
  fuel: number[],
  mpg: number,
) {
  let result = 0;
  let minFuel = Infinity;
  let remaining = 0;

  for (let i = 0; i < distances.length; i++) {
    remaining += fuel[i] * mpg - distances[i];
    if (remaining < minFuel) {
      result = (i + 1) % distances.length;
      minFuel = remaining;
    }
  }

  return result;
}

const distances = [5, 25, 15, 10, 15];
const fuel = [1, 2, 1, 0, 3];
const mpg = 10;
console.log(validStartingCity(distances, fuel, mpg));
