export default (dataSamples) => {
  let gamaRate = '';
  let epsilonRate = '';

  const bitLength = dataSamples[0].length;
  const iterator = Array.from(Array(bitLength));
  iterator.forEach((_, index) => {
    const bitSum = dataSamples
      .map((sample) => sample.charAt(index)).reduce((a, b) => Number(a) + Number(b), 0);
    if (bitSum >= dataSamples.length / 2) {
      gamaRate += '1';
      epsilonRate += '0';
    } else {
      gamaRate += '0';
      epsilonRate += '1';
    }
  });

  return parseInt(gamaRate, 2) * parseInt(epsilonRate, 2);
};
