import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';

function rpnCalculator(): void {
    const input: string = question('Enter RPN expression (e.g., "5 1 2 + 4 * + 3 -"):\n');
    const result = evaluateRPN(input);
    console.log(result);
    rpnCalculator(); // Prompt for another input after showing the result
}

function evaluateRPN(expression: string): number | string {
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
            const result = calculate(firstNum, token as Operator, secondNum);
            stack.push(result);
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

function isNumber(str: string): boolean {
    const maybeNum = parseFloat(str);
    return !isNaN(maybeNum);
}

function calculate(firstNum: number, operator: Operator, secondNum: number): number {
    switch(operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
        default:
            throw new Error('Unsupported operator');
    }
}

function isOperator(operator: string): boolean {
    return operator === '+' || operator === '-' || operator === '*' || operator === '/';
}

rpnCalculator();
