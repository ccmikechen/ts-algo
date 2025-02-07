export function optimalFreelancing(jobs: Record<string, number>[]) {
  jobs.sort((a, b) => b.payment - a.payment);
  const set = new Set<number>();
  let sum = 0;
  let daysUsed = 0;

  while (jobs.length > 0 && daysUsed < 7) {
    const job = jobs.shift()!;
    const day = Math.min(job.deadline, 7);
    if (allocate(set, day)) {
      sum += job.payment;
      daysUsed++;
    }
  }

  return sum;
}

function allocate(set: Set<number>, day: number): boolean {
  if (day <= 0) return false;
  if (set.has(day)) return allocate(set, day - 1);
  set.add(day);
  return true;
}

const input = [
  {
    deadline: 2,
    payment: 1,
  },
  {
    deadline: 1,
    payment: 4,
  },
  {
    deadline: 3,
    payment: 2,
  },
  {
    deadline: 1,
    payment: 3,
  },
  {
    deadline: 4,
    payment: 3,
  },
  {
    deadline: 4,
    payment: 2,
  },
  {
    deadline: 4,
    payment: 1,
  },
  {
    deadline: 5,
    payment: 4,
  },
  {
    deadline: 8,
    payment: 1,
  },
];
console.log(optimalFreelancing(input));
