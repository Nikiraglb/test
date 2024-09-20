// Тесты с использованием Jest
const { describe, expect, test } = require('jest');

describe('Calculator', () => {
  const calculator = new Calculator();

  test('add should return the sum of two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('subtract should return the difference of two numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test('multiply should return the product of two numbers', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });

  test('divide should return the quotient of two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('divide should throw an error for division by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrowError("Division by zero is not allowed.");
  });
});