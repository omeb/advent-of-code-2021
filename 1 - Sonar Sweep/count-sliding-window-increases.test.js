import data from './input.json';
import countSlidingWindowIncreases from './count-sliding-window-increases';

test('should count increased sliding window measurements', () => {
  const { measurements } = data;
  const result = countSlidingWindowIncreases(measurements);

  expect(result).toBe(1362);
});
