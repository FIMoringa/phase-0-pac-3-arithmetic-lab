// basic math functions
// 1) 'add()' is a valid function
function add(a, b) {
  return a + b;
}

// 2) 'subtract()' is a valid function

function subtract(a, b) {
  return a - b;
}

// 3) 'multiply()' is a valid function

function multiply(a, b) {
  return a * b;
}

// 4) 'divide()' is a valid function
function divide(a, b) {
  return a / b;
}

// 9) increment(n) increments n and returns the result

function increment(n) {
  // n++;
  // return n;

  // return n + 1;

  return ++n;
}

// 10) decrement(n) decrements n and returns the result

function decrement(n) {
  n--;
  return n;
}

// makeInt(n)
//     1) parses n as an integer and returns the parsed integer
//     2) assumes base 10
//     3) returns NaN as appropriate

function makeInt(n) {
  return parseInt(n, 10);
}

//   preserveDecimal(n)
//     4) preserves n's decimals (it parses n as a floating point number) and returns the parsed number
// 5) returns NaN as appropriate

function preserveDecimal(n) {
  return parseFloat(n);
}
