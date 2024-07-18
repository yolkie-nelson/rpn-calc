import { question } from 'readline-sync';
import { calculatorArt } from './calculatorArt';
import { calculator } from './rpnCalculator';
import { resetCalculator } from './rpnCalculator';

console.log(calculatorArt);

export function runCalculatorApp(): void {
  resetCalculator();
  let runningCalc = true;
  while (runningCalc) {
    const input: string = question('Enter RPN expression:\n');
    const result = calculator(input);
    console.log(`\x1b[33m${result}\x1b[0m`);
    if (result.includes('Exiting RPN Calculator......')) {
      runningCalc = false;
    }
  }
}

runCalculatorApp();
