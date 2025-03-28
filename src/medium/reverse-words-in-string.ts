export function reverseWordsInString(string: string) {
  const words: string[] = [];
  let chars: string[] = [];

  for (const char of string) {
    if (char === " ") {
      if (chars.length) {
        words.unshift(chars.join(""));
        chars = [];
      }
      words.unshift(" ");
      continue;
    }
    chars.push(char);
  }

  if (chars.length) words.unshift(chars.join(""));

  return words.join("");
}

console.log(reverseWordsInString("Mike is the best!"));
