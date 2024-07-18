// src/index.ts
import { question } from 'readline-sync';
import { calculator } from './rpnCalculator';

function runCalc(): void {
    while (true) {
        const input: string = question('Enter RPN expression:');

        if (input.trim().toLowerCase() === 'q') {
            console.log('Exiting RPN Calculator...');
            break;
        }

        const result = calculator(input);
        console.log(result);
    }
}

runCalc();
