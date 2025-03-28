export function bestDigits(number: string, numDigits: number) {
  const digits: string[] = [];

  for (const digit of number) {
    while (
      numDigits > 0 &&
      digits.length > 0 &&
      digit > digits[digits.length - 1]
    ) {
      digits.pop();
      numDigits--;
    }
    digits.push(digit);
  }

  while (numDigits > 0) {
    numDigits--;
    digits.pop();
  }

  return digits.join("");
}

const number = "11111111119999999999";
const numDigits = 10;
console.log(bestDigits(number, numDigits));
