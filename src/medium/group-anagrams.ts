export function groupAnagrams(words: string[]) {
  const groups = new Map<string, string[]>();

  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    const group = groups.get(sortedWord) || [];
    group.push(word);
    groups.set(sortedWord, group);
  }

  return Array.from(groups.values());
}

const words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
console.log(groupAnagrams(words));
