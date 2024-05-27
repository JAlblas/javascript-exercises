const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  return array.reduce((sum, i) => sum += i, 0)
};

const multiply = function (array) {
  return array.reduce((sum, i) => sum *= i, 1)
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  let factorial = 1;
  for (let index = 1; index <= x; index++) {
    factorial *= index;

  }
  return factorial;
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
