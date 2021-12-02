export default (measurements) =>
  measurements.filter((currMeasurement, currIndex, array) => {
    const prevMeasurement = array[currIndex - 1];
    return currIndex > 0 && currMeasurement > prevMeasurement;
  }).length;
