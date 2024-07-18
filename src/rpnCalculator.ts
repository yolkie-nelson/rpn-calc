import { calculate, isNumber, isOperator, Operator } from './calcUtils';

export function calculator(expression: string): number | string {
    const tokens = expression.split(' ');
    const stack: number[] = [];

    for (const token of tokens) {
        if (isNumber(token)) {
            stack.push(parseFloat(token));
        } else if (isOperator(token)) {
            if (stack.length < 2) {
                return 'Invalid input: not enough operands for operator';
            }
            const secondNum = stack.pop()!;
            const firstNum = stack.pop()!;
            try {
                const result = calculate(firstNum, token as Operator, secondNum);
                stack.push(result);
            } catch (error) {
                return (error as Error).message;
            }
        } else {
            return `Invalid input: ${token}`;
        }
    }

    if (stack.length === 1) {
        return stack[0];
    } else {
        return 'Invalid input: too many operands';
    }
}
