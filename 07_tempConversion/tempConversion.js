const roundToN = function(num, n) {
  return Math.round((num + Number.EPSILON) * 10 ** n) / 10 ** n
}

const convertToCelsius = function(tempF) {
  return roundToN((tempF - 32) * 5 / 9, 1)
};

const convertToFahrenheit = function(tempC) {
  return roundToN((tempC * 9 / 5) + 32, 1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
