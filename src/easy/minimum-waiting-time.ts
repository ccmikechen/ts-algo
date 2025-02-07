export function minimumWaitingTime(queries: number[]) {
  queries.sort((a, b) => a - b);
  let t = 0;
  let sum = 0;

  for (let n of queries) {
    sum += t;
    t += n;
  }

  return sum;
}

const queries = [3, 2, 1, 2, 6];
console.log(minimumWaitingTime(queries));
