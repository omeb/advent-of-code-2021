export const getWinningNumbers = (numbers) =>
  numbers.split(',').map((winningNumber) => +winningNumber);

export const getBoards = (boards) =>
  boards.map((board) =>
    board.split('\n').map((row) =>
      row
        .trim()
        .split(/[ ]+/)
        .map((number) => ({ number: +number, marked: false, })),),);

export const markBoard = (board, winningNumber) => board.forEach((row) =>
  row.forEach((entry) => {
    if (entry.number === winningNumber) {
      entry.marked = true; /* eslint no-param-reassign: "error" */
    }
  }));

export const isWinner = (board) => {
  const rowBingo = board.some((row) => row.every((entry) => entry.marked));
  const colBingo = board[0].some((_, index) => board.every((row) => row[index].marked));
  return rowBingo || colBingo;
};

export const getBoardScore = (board) => board
  .reduce(
    (boardScore, row) =>
      boardScore + row.filter((entry) => !entry.marked)
        .reduce((rowScore, entry) => rowScore + +entry.number, 0),
    0
  );
