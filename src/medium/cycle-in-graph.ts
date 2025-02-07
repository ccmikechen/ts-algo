export function cycleInGraph(edges: number[][]) {
  for (let i = 0; i < edges.length; i++) {
    const visited = new Set<number>();
    const stack: number[] = [i];

    while (stack.length) {
      const node = stack.pop()!;
      visited.add(node);

      for (let next of edges[node]) {
        if (next === i) return true;
        if (!visited.has(next)) stack.push(next);
      }
    }
  }

  return false;
}
