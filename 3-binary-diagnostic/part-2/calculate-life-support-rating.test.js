import exampleData from '../example-input.json';
import data from '../input.json';
import calculateLifSupportRating from './calculate-life-support-rating';

test('should calcaulte the life support rating of the submarine using example data', () => {
  const { diagnostics } = exampleData;
  const result = calculateLifSupportRating(diagnostics);

  expect(result).toBe(230);
});

test('should calcaulte the life support rating of the submarine', () => {
  const { diagnostics } = data;
  const result = calculateLifSupportRating(diagnostics);

  expect(result).toBe(3368358);
});
