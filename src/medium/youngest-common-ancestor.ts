// This is an input class. Do not edit.
class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree,
) {
  const depthOne = getDepth(descendantOne);
  const depthTwo = getDepth(descendantTwo);
  if (depthOne > depthTwo)
    descendantOne = climb(descendantOne, depthOne - depthTwo);
  if (depthTwo > depthOne)
    descendantTwo = climb(descendantTwo, depthTwo - depthOne);

  while (descendantOne !== descendantTwo) {
    descendantOne = descendantOne.ancestor!;
    descendantTwo = descendantTwo.ancestor!;
  }

  return descendantOne;
}

function getDepth(node: AncestralTree | null) {
  let depth = 0;
  while (node) {
    depth++;
    node = node.ancestor;
  }
  return depth;
}

function climb(node: AncestralTree, height: number): AncestralTree {
  if (height === 0) return node;
  return climb(node.ancestor!, height - 1);
}
