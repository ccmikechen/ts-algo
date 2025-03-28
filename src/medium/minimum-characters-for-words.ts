export function minimumCharactersForWords(words: string[]) {
  const charCountMap = new Map<string, number>();

  for (const word of words) {
    const map = getCharCounts(word);
    for (const [char, count] of map) {
      const currentCount = charCountMap.get(char) || 0;
      charCountMap.set(char, Math.max(currentCount, count));
    }
  }

  const chars: string[] = [];
  for (let [char, count] of charCountMap) {
    while (count > 0) {
      chars.push(char);
      count--;
    }
  }

  return chars;
}

function getCharCounts(word: string) {
  const map = new Map<string, number>();
  for (const char of word) {
    const count = map.get(char) || 0;
    map.set(char, count + 1);
  }
  return map;
}

const input = ["this", "that", "did", "deed", "them!", "a"];
console.log(minimumCharactersForWords(input));
