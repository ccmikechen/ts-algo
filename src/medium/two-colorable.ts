type Color = 1 | -1;
type NodeColor = [number, Color];

export function twoColorable(edges: number[][]) {
  const colors = new Map<number, Color>();
  const stack: NodeColor[] = [[0, 1]];

  while (stack.length) {
    const [node, color] = stack.pop()!;
    colors.set(node, color);
    const nextColor = -color as Color;

    for (let next of edges[node]) {
      if (!colors.has(next)) {
        stack.push([next, nextColor]);
        continue;
      }
      if (colors.get(next) !== nextColor) return false;
    }
  }

  return true;
}
