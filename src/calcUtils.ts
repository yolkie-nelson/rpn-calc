import { calculator } from './rpnCalculator';

export function isNumber(str: string): boolean {
  return !isNaN(parseFloat(str));
}

export function calculate(
  firstNum: number,
  operator: string,
  secondNum: number,
): number {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    case '/':
      if (secondNum === 0) {
        return NaN;
      }
      return firstNum / secondNum;
    default:
      return NaN;
  }
}

export function isOperator(token: string): boolean {
  return token === '+' || token === '-' || token === '*' || token === '/';
}

export const exitMessage = '\x1b[31m\nExiting RPN Calculator......\x1b[0m';
export const resetMessage = 'Calculator has been reset';
export const invalidInputMessage = (token: string) =>
  `\x1b[31mInvalid input: ${token}\x1b[0m`;
export const invalidOperationMessage = `\x1b[31mInvalid operation: cannot divide by zero\x1b[0m`;
export const notEnoughOperandsMessage =
  '\x1b[31mInvalid input: not enough operands for operator\x1b[0m';
export const pendingOperationMessage = (stack: number[]) =>
  `\x1b[33mPending operation: ${stack.join(' ')}\x1b[0m`;
export const resultMessage = (result: number) => `Result: ${result}`;
