import { calculate, isNumber, isOperator } from '../src/calcUtils';

describe('Calculator Utils', () => {
  test('isOperator identifies operators correctly', () => {
    expect(isOperator('+')).toBe(true);
    expect(isOperator('-')).toBe(true);
    expect(isOperator('*')).toBe(true);
    expect(isOperator('/')).toBe(true);
    expect(isOperator('^')).toBe(false);
  });

  test('isNumber identifies numbers correctly', () => {
    expect(isNumber('123')).toBe(true);
    expect(isNumber('123.45')).toBe(true);
    expect(isNumber('abc')).toBe(false);
    expect(isNumber('')).toBe(false);
  });

  test('calculate performs addition correctly', () => {
    expect(calculate(1, '+', 2)).toBe(3);
  });
});
