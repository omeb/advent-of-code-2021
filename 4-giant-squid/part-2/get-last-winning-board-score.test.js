import getLastWinningBoardScore from './get-last-winning-board-score';
import getInput from '../../utils/get-input';

test('should calcaulte the last winning board score for example data', () => {
  const exampleInput = getInput('4-giant-squid/example-input.txt');
  const result = getLastWinningBoardScore(exampleInput);
  expect(result).toBe(1924);
});

test('should calcaulte the last winning board score for the given input', () => {
  const input = getInput('4-giant-squid/input.txt');
  const result = getLastWinningBoardScore(input);

  expect(result).toBe(4880);
});
