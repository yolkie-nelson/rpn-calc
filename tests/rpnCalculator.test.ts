import { calculator, resetCalculator } from '../src/rpnCalculator';
import { resultMessage, pendingOperationMessage } from '../src/calcUtils';

describe('RPN Calculator', () => {
  beforeEach(() => {
    resetCalculator();
  });

  test('Test Case 01', () => {
    let result = calculator('5');
    expect(result).toBe(resultMessage(5));

    result = calculator('8');
    expect(result).toBe(pendingOperationMessage([5, 8]));

    result = calculator('+');
    expect(result).toBe(resultMessage(13));
  });

  test('Test Case 02', () => {
    let result = calculator('5 5 5 8 + + -');
    expect(result).toBe(resultMessage(-13));

    result = calculator('13 +');
    expect(result).toBe(resultMessage(0));
  });

  test('Test Case 03', () => {
    let result = calculator('-3');
    expect(result).toBe(resultMessage(-3));

    result = calculator('-2');
    expect(result).toBe(pendingOperationMessage([-3, -2]));

    result = calculator('*');
    expect(result).toBe(resultMessage(6));

    result = calculator('5');
    expect(result).toBe(pendingOperationMessage([6, 5]));

    result = calculator('+');
    expect(result).toBe(resultMessage(11));
  });

  test('Test Case 04', () => {
    let result = calculator('5');
    expect(result).toBe(resultMessage(5));

    result = calculator('9');
    expect(result).toBe(pendingOperationMessage([5, 9]));

    result = calculator('1');
    expect(result).toBe(pendingOperationMessage([5, 9, 1]));

    result = calculator('-');
    expect(result).toBe(pendingOperationMessage([5, 8]));

    result = calculator('/');
    expect(result).toBe(resultMessage(0.625));
  });
});
