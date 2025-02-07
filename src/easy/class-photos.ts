export function classPhotos(
  redShirtHeights: number[],
  blueShirtHeights: number[],
) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  return redShirtHeights[0] < blueShirtHeights[0]
    ? isCorrect(redShirtHeights, blueShirtHeights)
    : isCorrect(blueShirtHeights, redShirtHeights);
}

function isCorrect(shortHeights: number[], tallHeights: number[]) {
  for (let i in shortHeights) {
    if (shortHeights[i] >= tallHeights[i]) return false;
  }
  return true;
}

const redShirtHeights = [5, 8, 1, 3, 4];
const blueShirtHeights = [6, 9, 2, 4, 5];
console.log(classPhotos(redShirtHeights, blueShirtHeights));
