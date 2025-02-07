const KEYPAD = [
  ["0"],
  ["1"],
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "z"],
];

export function phoneNumberMnemonics(phoneNumber: string) {
  const codes: string[] = [];
  helper(0, phoneNumber, "", codes);
  return codes;
}

function helper(i: number, phoneNumber: string, code: string, codes: string[]) {
  if (i === phoneNumber.length) {
    codes.push(code);
    return;
  }

  const number = parseInt(phoneNumber[i]!);
  const chars: string[] = KEYPAD[number]!;

  for (let j = 0; j < chars.length; j++) {
    helper(i + 1, phoneNumber, code + chars[j], codes);
  }
}
