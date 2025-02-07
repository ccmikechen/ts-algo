export function commonCharacters(strings: string[]) {
  const map: Map<string, number> = new Map();
  const result: string[] = [];

  for (let i = 0; i < strings.length; i++) {
    const s = strings[i];
    for (let j = 0; j < s.length; j++) {
      const c = s.charAt(j);
      const count = map.get(c) || 0;
      if (count === i) map.set(c, count + 1);
    }
  }

  map.forEach((count, char) => {
    if (count === strings.length) {
      result.push(char);
    }
  });

  return result;
}

const input = ["abc", "bcd", "cbad"];
console.log(commonCharacters(input));
