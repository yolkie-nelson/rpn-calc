"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function rpnCalculator() {
    var input = (0, readline_sync_1.question)('Enter RPN expression (e.g., "5 1 2 + 4 * + 3 -"):\n');
    var result = evaluateRPN(input);
    console.log(result);
    rpnCalculator(); // Prompt for another input after showing the result
}
function evaluateRPN(expression) {
    var tokens = expression.split(' ');
    var stack = [];
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (isNumber(token)) {
            stack.push(parseFloat(token));
        }
        else if (isOperator(token)) {
            if (stack.length < 2) {
                return 'Invalid input: not enough operands for operator';
            }
            var secondNum = stack.pop();
            var firstNum = stack.pop();
            var result = calculate(firstNum, token, secondNum);
            stack.push(result);
        }
        else {
            return "Invalid input: ".concat(token);
        }
    }
    if (stack.length === 1) {
        return stack[0];
    }
    else {
        return 'Invalid input: too many operands';
    }
}
function isNumber(str) {
    var maybeNum = parseFloat(str);
    return !isNaN(maybeNum);
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
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
function isOperator(operator) {
    return operator === '+' || operator === '-' || operator === '*' || operator === '/';
}
rpnCalculator();
