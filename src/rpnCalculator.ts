import {
  calculate,
  isNumber,
  isOperator,
  invalidInputMessage,
  invalidOperationMessage,
  notEnoughOperandsMessage,
  pendingOperationMessage,
  resultMessage,
} from './calcUtils';

let stack: number[] = [];

export function calculator(input: string): string {
  const tokens: string[] = input.trim().split(' ');
  const tempStack = [...stack];

  for (const token of tokens) {
    if (isNumber(token)) {
      tempStack.push(parseFloat(token));
    } else if (isOperator(token)) {
      if (tempStack.length < 2) {
        return `${notEnoughOperandsMessage}\n${pendingOperationMessage(stack)}`;
      }

      const secondNum = tempStack.pop() as number;
      const firstNum = tempStack.pop() as number;
      const result = calculate(firstNum, token, secondNum);

      if (isNaN(result)) {
        return `${invalidOperationMessage}\n${pendingOperationMessage(stack)}`;
      }
      tempStack.push(result);
    } else {
      return `${invalidInputMessage(token)}\n${pendingOperationMessage(stack)}`;
    }
  }

  stack = tempStack;

  if (stack.length === 1) {
    return resultMessage(stack[0]);
  } else {
    return pendingOperationMessage(stack);
  }
}

export function resetCalculator(): void {
  stack = [];
}
