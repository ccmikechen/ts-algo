export function runLengthEncoding(string: string) {
  let char = string.charAt(0);
  let result = "";
  let count = 0;

  for (let i = 0; i <= string.length; i++) {
    if (string.charAt(i) !== char || count === 9) {
      result += `${count}${char}`;
      count = 1;
      char = string.charAt(i);
    } else {
      count++;
    }
  }

  return result;
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
