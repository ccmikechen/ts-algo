export function firstNonRepeatingCharacter(string: string) {
  const map = new Map<string, number>();

  for (let c of string) {
    const counter = map.get(c) || 0;
    map.set(c, counter + 1);
  }

  for (let i = 0; i < string.length; i++) {
    if (map.get(string[i]) === 1) {
      return i;
    }
  }

  return -1;
}
