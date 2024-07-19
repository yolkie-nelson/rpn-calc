import * as readline from 'readline';
import { calculatorArt } from './calculatorArt';
import { calculator, resetCalculator } from './rpnCalculator';
import { exitMessage, resetMessage } from './calcUtils';

console.log(calculatorArt);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function runCalculatorApp(): void {
  resetCalculator();

  rl.on('line', (input: string) => {
    if (input.trim().toLowerCase() === 'q') {
      rl.close();
    } else if (input.trim().toLowerCase() === 'reset') {
      resetCalculator();
      console.log(resetMessage);
      console.log('Enter RPN expression:');
    } else {
      const result = calculator(input);
      console.log(`\x1b[33m${result}\x1b[0m`);
      console.log('Enter RPN expression:');
    }
  });

  rl.on('close', () => {
    console.log(exitMessage);
    process.exit(0);
  });

  console.log('Enter RPN expression:');
}

runCalculatorApp();
