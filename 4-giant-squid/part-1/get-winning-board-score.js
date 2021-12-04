import {
  getWinningNumbers, getBoards, markBoard, isWinner, getBoardScore
} from './utils';

export default ({ input, useLastBoard = false }) => {
  let score = 0;
  const [numbersInput, ...boardsInput] = input.split('\n\n');

  const winningNumbers = getWinningNumbers(numbersInput);
  const boards = getBoards(boardsInput);

  winningNumbers.forEach((winningNumber) => {
    boards.forEach((board) => {
      if (board.winner) {
        return;
      }
      markBoard(board, winningNumber);
      if (isWinner(board) && (useLastBoard || !score)) {
        board.winner = true; /* eslint no-param-reassign: "error" */
        score = getBoardScore(board) * winningNumber;
      }
    });
  });

  return score;
};
