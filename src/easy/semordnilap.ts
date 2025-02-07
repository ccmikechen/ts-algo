export function semordnilap(words: string[]) {
  const checkedSet = new Set<string>();
  const result: string[][] = [];

  for (let word of words) {
    const reversedWord = Array.from(word).reverse().join("");

    if (checkedSet.has(reversedWord)) {
      result.push([word, reversedWord]);
    }

    checkedSet.add(word);
  }

  return result;
}
