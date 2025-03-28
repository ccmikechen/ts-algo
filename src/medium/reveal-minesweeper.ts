export function revealMinesweeper(
  board: string[][],
  row: number,
  column: number,
) {
  const queue: [number, number][] = [[row, column]];

  while (queue.length) {
    const [row, column] = queue.shift()!;
    const cell = board[row][column];

    if (cell === "M") board[row][column] = "X";
    if (cell !== "H") continue;

    const mines = adjecentMines(board, row, column);
    board[row][column] = mines.toString();

    if (mines === 0) {
      traverseSurrounding(board, row, column, (r, c) => {
        if (board[r][c] === "H") queue.push([r, c]);
      });
    }
  }

  return board;
}

function adjecentMines(board: string[][], row: number, column: number) {
  let mines = 0;

  traverseSurrounding(board, row, column, (r, c) => {
    if (board[r][c] === "M") mines++;
  });

  return mines;
}

function traverseSurrounding(
  board: string[][],
  row: number,
  column: number,
  func: (row: number, column: number) => any,
) {
  const minRow = Math.max(0, row - 1);
  const maxRow = Math.min(board.length - 1, row + 1);
  const minCol = Math.max(0, column - 1);
  const maxCol = Math.min(board[row].length - 1, column + 1);
  let mines = 0;

  for (let r = minRow; r <= maxRow; r++) {
    for (let c = minCol; c <= maxCol; c++) {
      if (r === row && c === column) continue;
      func(r, c);
    }
  }
}

const board = [
  ["H", "H", "H", "H", "M"],
  ["H", "1", "M", "H", "1"],
  ["H", "H", "H", "H", "H"],
  ["H", "H", "H", "H", "H"],
];
const row = 3;
const column = 4;
console.log(revealMinesweeper(board, row, column));
