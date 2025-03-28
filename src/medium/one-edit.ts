export function oneEdit(stringOne: string, stringTwo: string) {
  const lenOne = stringOne.length;
  const lenTwo = stringTwo.length;

  if (Math.abs(lenOne - lenTwo) > 1) return false;
  if (lenOne < lenTwo) [stringOne, stringTwo] = [stringTwo, stringOne];

  let isEdited = false;
  let idxOne = 0;
  let idxTwo = 0;

  while (idxOne < stringOne.length && idxTwo < stringTwo.length) {
    if (stringOne[idxOne] === stringTwo[idxTwo]) {
      idxOne++;
      idxTwo++;
      continue;
    }
    if (isEdited) return false;
    isEdited = true;
    if (lenOne === lenTwo) idxTwo++;
    idxOne++;
  }

  return true;
}

const stringOne = "aa";
const stringTwo = "b";
console.log(oneEdit(stringOne, stringTwo));
