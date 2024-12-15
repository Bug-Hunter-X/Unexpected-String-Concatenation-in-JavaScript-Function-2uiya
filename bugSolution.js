function foo(a, b) {
  // Explicit type checking and conversion
  a = Number(a);
  b = Number(b);

  // Check for NaN (Not a Number)
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: parameters must be numbers";
  }

  return a + b;
}

let x = foo(2, 3); // Output: 5
console.log(x);

let y = foo('2', '3'); // Output: 5
console.log(y);

let z = foo('abc', 3); // Output: Invalid input: parameters must be numbers
console.log(z);
