import data from '../input.json';
import countIncreases from './count-increases';

test('should count increased measurements', () => {
  const { measurements } = data;
  const result = countIncreases(measurements);

  expect(result).toBe(1387);
});
