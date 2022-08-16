const add = function(...theArgs) {
  let total = 0;

  for (const arg of theArgs) {
    total += arg;
  }
  return total;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(arr) {
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }
  return sum;
	
};

const multiply = function(arr) {

  const multiplyAll= arr.reduce(
    (previousValue, currentValue) => previousValue * currentValue
    );
  return multiplyAll;
  };


const power = function(a, b) {
  return a ** b;

};

const factorial = function(n) {
  if (n===0) {
    return 1;
  } else if (n===1) {
    return n;
  }
  return n*(factorial(n-1));
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
