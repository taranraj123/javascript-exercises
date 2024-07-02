const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(arr) {
	return arr.reduce((acc, val) => add(acc, val), 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, val) => acc * val, 1)
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(val) {
  while (val > 0) {
    return val * factorial(val - 1)
  }
  return 1
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
