import countIncreases from '../part-1/count-increases';

export default (measurements) => {
  const slidingWindows = [];

  for (let index = 0; index < measurements.length; index++) {
    const window = measurements.slice(index, index + 3).reduce((a, b) => a + b, 0);
    slidingWindows.push(window);
  }
  return countIncreases(slidingWindows);
};
