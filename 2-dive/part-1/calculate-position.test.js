import data from '../input.json';
import calculatePosition from './calculate-position';

test('should calcaulte submarine position after applying commands', () => {
  const { commands } = data;
  const result = calculatePosition(commands);

  expect(result).toBe(1660158);
});
