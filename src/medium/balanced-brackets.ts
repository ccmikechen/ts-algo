const pairs = new Map<string, string>();
pairs.set("(", ")");
pairs.set("[", "]");
pairs.set("{", "}");
const symbols = new Set<string>(["(", "[", "{", ")", "]", "}"]);

export function balancedBrackets(string: string) {
  const stack: string[] = [];

  for (let i = 0; i < string.length; i++) {
    const c = string.charAt(i);
    if (!symbols.has(c)) continue;

    if (pairs.has(c)) {
      stack.push(c);
      continue;
    }

    const left = stack.pop()!;
    if (pairs.get(left) !== c) return false;
  }

  return stack.length === 0;
}

console.log(balancedBrackets("([])(){}(())()()"));
