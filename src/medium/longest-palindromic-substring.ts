export function longestPalindromicSubstring(string: string) {
  let longest: [number, number] = [0, 1];

  for (let i = 1; i < string.length; i++) {
    const odd = getPalindrom(string, i - 1, i + 1);
    const even = getPalindrom(string, i - 1, i);
    const longer = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    longest =
      longest[1] - longest[0] > longer[1] - longer[0] ? longest : longer;
  }

  return string.slice(longest[0], longest[1]);
}

function getPalindrom(
  string: string,
  left: number,
  right: number,
): [number, number] {
  while (left >= 0 && right < string.length) {
    if (string[left] !== string[right]) break;
    left--;
    right++;
  }
  return [left + 1, right];
}

console.log(longestPalindromicSubstring("abaxyzzyxf"));
