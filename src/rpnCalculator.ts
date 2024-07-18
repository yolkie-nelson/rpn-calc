import { calculate, isNumber, isOperator } from './calcUtils';

let stack: number[] = [];

export function calculator(input: string): string {
  if (input.trim().toLowerCase() === 'reset') {
    resetCalculator();
    return 'Calculator has been reset';
  }

  if (input.trim() === '') {
    return '\nExiting RPN Calculator......';
  }

  if (input.trim().toLowerCase() === 'q') {
    return '\nExiting RPN Calculator......';
  }

  const tokens: string[] = input.split(' ');
  const tempStack = [...stack];

  for (const token of tokens) {
    if (isNumber(token)) {
      tempStack.push(parseFloat(token));
    } else if (isOperator(token)) {
      if (tempStack.length < 2) {
        const message = 'Invalid input: not enough operands for operator';
        return `${message}\nPending operation: ${stack.join(' ')}`;
      }

      const secondNum = tempStack.pop() as number;
      const firstNum = tempStack.pop() as number;
      const result = calculate(firstNum, token, secondNum);

      if (isNaN(result)) {
        const message = `Invalid operation: cannot divide by zero`;
        return `${message}\nPending operation: ${stack.join(' ')}`;
      }
      tempStack.push(result);
    } else {
      const message = `Invalid input: ${token}`;
      return `${message}\nPending operation: ${stack.join(' ')}`;
    }
  }

  stack = tempStack;

  if (stack.length === 1) {
    const resultMessage = `Result: ${stack[0]}`;
    return resultMessage;
  } else {
    const stackMessage = `Pending operation: ${stack.join(' ')}`;
    return stackMessage;
  }
}

export function resetCalculator(): void {
  stack = [];
}
