import getWinningBoardScore from './get-winning-board-score';
import getInput from '../../utils/get-input';

test('should calcaulte the winning board score for example data', () => {
  const exampleInput = getInput('4-giant-squid/example-input.txt');
  const result = getWinningBoardScore({ input: exampleInput });
  expect(result).toBe(4512);
});

test('should calcaulte the winning board score for input data', () => {
  const input = getInput('4-giant-squid/input.txt');
  const result = getWinningBoardScore({ input });

  expect(result).toBe(16716);
});
