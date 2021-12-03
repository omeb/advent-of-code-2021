function getMostCommonDigit(numbers, digitIndex) {
  const bitSum = numbers
    .map((sample) => sample.charAt(digitIndex)).reduce((a, b) => Number(a) + Number(b), 0);
  return bitSum >= numbers.length / 2 ? '1' : '0';
}

export default (dataSamples) => {
  let oxygenGeneratorRating = dataSamples;
  let co2ScrubberRating = dataSamples;

  for (let digit = 0; oxygenGeneratorRating.length > 1; digit++) {
    const mostCommonDigit = getMostCommonDigit(oxygenGeneratorRating, digit);
    oxygenGeneratorRating = oxygenGeneratorRating
      .filter((sample) => sample[digit] === mostCommonDigit);
  }

  for (let digit = 0; co2ScrubberRating.length > 1; digit++) {
    const mostCommonDigit = getMostCommonDigit(co2ScrubberRating, digit);
    co2ScrubberRating = co2ScrubberRating.filter((sample) => sample[digit] !== mostCommonDigit);
  }

  return parseInt(oxygenGeneratorRating[0], 2) * parseInt(co2ScrubberRating[0], 2);
};
