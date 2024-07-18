import { calculator, resetCalculator } from '../src/rpnCalculator';

describe('RPN Calculator', () => {
  beforeEach(() => {
    resetCalculator();
  });

  test('Test Case 01', () => {
    let result = calculator('5');
    expect(result).toBe('Result: 5');

    result = calculator('8');
    expect(result).toBe('Pending operation: 5 8');

    result = calculator('+');
    expect(result).toBe('Result: 13');
  });

  test('Test Case 02', () => {
    let result = calculator('5 5 5 8 + + -');
    expect(result).toBe('Result: -13');

    result = calculator('13 +');
    expect(result).toBe('Result: 0');
  });

  test('Test Case 03', () => {
    let result = calculator('-3');
    expect(result).toBe('Result: -3');

    result = calculator('-2');
    expect(result).toBe('Pending operation: -3 -2');

    result = calculator('*');
    expect(result).toBe('Result: 6');

    result = calculator('5');
    expect(result).toBe('Pending operation: 6 5');

    result = calculator('+');
    expect(result).toBe('Result: 11');
  });

  test('Test Case 04', () => {
    let result = calculator('5');
    expect(result).toBe('Result: 5');

    result = calculator('9');
    expect(result).toBe('Pending operation: 5 9');

    result = calculator('1');
    expect(result).toBe('Pending operation: 5 9 1');

    result = calculator('-');
    expect(result).toBe('Pending operation: 5 8');

    result = calculator('/');
    expect(result).toBe('Result: 0.625');
  });
});
