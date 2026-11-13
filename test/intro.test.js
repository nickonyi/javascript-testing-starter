import { describe, test, it, expect } from "vitest";
import { factorial, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzbuzz", () => {
  it("should return fizz buzz if the number is divisible by both 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return fizz  if the number is divisible by 3 ", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("should return buzz  if the number is divisible by 5 ", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("should return the number  if the number is indivisible by either 3 or 5 ", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});

describe("factorial", () => {
  it("should return 1 for the factorial of 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return the product of all positive numbers from 1 to that number ", () => {
    expect(factorial(3)).toBe(6);
  });
});
