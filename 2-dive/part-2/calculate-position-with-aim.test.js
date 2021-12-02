import data from '../input.json';
import calculatePosition from './calculate-position-with-aim';

test('should calcaulte submarine position after applying commands, using aim', () => {
  const { commands } = data;
  const result = calculatePosition(commands);

  expect(result).toBe(1604592846);
});
