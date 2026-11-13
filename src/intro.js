// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

export function factorial(n) {
  if (n === 0 || n == 1) return 1;

  let prod = 1;

  for (let i = n; i >= 1; i--) {
    prod *= i;
  }

  return prod;
}

console.log(factorial(3));
