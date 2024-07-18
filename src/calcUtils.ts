export type Operator = '+' | '-' | '*' | '/';

export function isNumber(str: string): boolean {
    const maybeNum = parseFloat(str);
    return !isNaN(maybeNum);
}

export function calculate(firstNum: number, operator: Operator, secondNum: number): number {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            if (secondNum === 0) {
                throw new Error('Division by zero');
            }
            return firstNum / secondNum;
        default:
            throw new Error('Unsupported operator');
    }
}

export function isOperator(operator: string): boolean {
    return operator === '+' || operator === '-' || operator === '*' || operator === '/';
}
