export function getNthFib(n: number) {
  if (n <= 1) {
    return 0;
  }

  let last = 0;
  let current = 1;

  while (n > 2) {
    const temp = current;
    current += last;
    last = temp;
    n--;
  }

  return current;
}
