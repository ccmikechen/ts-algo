export function reversePolishNotation(tokens: string[]) {
  const stack: number[] = [];

  for (const token of tokens) {
    let result = 0;

    switch (token) {
      case "+":
        result = calc(stack, (a, b) => a + b);
        break;
      case "-":
        result = calc(stack, (a, b) => a - b);
        break;
      case "*":
        result = calc(stack, (a, b) => a * b);
        break;
      case "/":
        result = calc(stack, (a, b) => Math.trunc(a / b));
        break;
      default:
        result = parseInt(token);
    }

    stack.push(result);
  }

  return stack[0];
}

function calc(stack: number[], func: (n1: number, n2: number) => number) {
  const n2 = stack.pop()!;
  const n1 = stack.pop()!;
  return func(n1, n2);
}

console.log(
  reversePolishNotation([
    "4",
    "-7",
    "2",
    "6",
    "+",
    "10",
    "-",
    "/",
    "*",
    "2",
    "+",
    "3",
    "*",
  ]),
);
