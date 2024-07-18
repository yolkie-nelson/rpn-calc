import { calculator } from './rpnCalculator';

export function isNumber(str: string): boolean {
  return !isNaN(parseFloat(str));
}

export function calculate(
  firstNum: number,
  operator: string,
  secondNum: number
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

export function handleCalculation(values: string[]): string {
  const combinedInput = values.join(' ');
  return calculator(combinedInput);
}
