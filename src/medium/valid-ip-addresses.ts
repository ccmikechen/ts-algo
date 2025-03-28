export function validIPAddresses(string: string) {
  const result: string[] = [];
  getValidIPAddresses(string, result);
  return result;
}

function getValidIPAddresses(
  string: string,
  ips: string[],
  idx: number = 0,
  array: string[] = [],
) {
  if (array.length === 4) {
    if (idx === string.length) ips.push(array.join("."));
    return;
  }

  for (let i = 1; i <= 3 && idx + i <= string.length; i++) {
    const numStr = string.slice(idx, idx + i);
    const num = parseInt(numStr);

    if (num.toString() === numStr && num < 256) {
      array.push(numStr);
      getValidIPAddresses(string, ips, idx + i, array);
      array.pop();
    }
  }
}

console.log(validIPAddresses("1921680"));
