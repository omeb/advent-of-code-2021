import exampleData from '../example-input.json';
import data from '../input.json';
import calculatePowerConsumption from './calculate-power-consumption';

test('should calcaulte the power consumption of the submarine using example data', () => {
  const { diagnostics } = exampleData;
  const result = calculatePowerConsumption(diagnostics);

  expect(result).toBe(198);
});

test('should calcaulte the power consumption of the submarine', () => {
  const { diagnostics } = data;
  const result = calculatePowerConsumption(diagnostics);

  expect(result).toBe(2972336);
});
