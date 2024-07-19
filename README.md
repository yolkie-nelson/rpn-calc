# RPN Calculator

```
     _____________________
    |  _________________  |    Welcome to the Łukasiewicz Calculator
    | |              RPN| |
    | |_________________| |    This project is an implementation
    |  ___ ___ ___   ___  |    of a Reverse Polish Notation (RPN)
    | | 7 | 8 | 9 | | + | |    CLI calculator in TypeScript.
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |    Features include:
    | |___|___|___| |___| |    -basic arithmetic operations: +, -, *, /
    | | 1 | 2 | 3 | | x | |    -handles complex RPN expressions
    | |___|___|___| |___| |    -CLI for interactive use
    | | . | 0 | = | | / | |    -unit tests using Jest
    | |___|___|___| |___| |
    |_____________________|
```

## Prerequisites

To run this project, you need to have the following installed:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Getting Started

Follow these steps to clone the repository and spin up the project:

### Clone the Repository

```
git clone https://github.com/yolkie-nelson/rpn-calc.git
cd rpn-calc
```

### Install Dependencies

```
npm install
```

### Build the Project

```
npm run build
```

### Run The RPN Calculator

```
npm run calc
```

## Example Inputs

As the user, you have the flexibility to enter the RPN expression as a single input, by inputting operands and operators individually, or a combination of both.

### Single Input Example

```
> 5 4 3 + *
Result: 35
```

### Individual Inputs Example

```
> 5
Result: 5
> 4
Pending operation: 5 4
> 3
Pending operation: 5 4 3
> +
Pending operation: 5 7
> *
Result: 35
>
```

### Combination Example

```
> 4
Result: 4
> 3
Pending operation: 4 3
> + 5 *
Result: 35
```

### Reset the Calculator

When a result is returned, it will be used as the first number in the stack for subsequent operations. To start a new computation, type `reset` to clear the stack.

```
reset
```

### Exit Calculator

To exit the calculator, input q or enter CTRL+D

```
q
```

### Run Tests

```
npm test
```

## Understanding Reverse Polish Notation (RPN)

Reverse Polish Notation (RPN), also known as postfix notation, was developed by the Polish mathematician Jan Łukasiewicz in the 1920s. This notation system eliminates the need for parentheses that are required by standard infix notation, making it easier for computers to parse mathematical expressions.

### How RPN Works

In RPN, every operator follows all of its operands. This means that instead of writing the operator between the operands as in standard notation, you write the operands first followed by the operator.

### Example: RPN vs Standard Notation

Consider the following expression in standard notation:

```
5 * (4 + 3)
```

In RPN, the same expression is written as:

```
5 4 3 + *
```

To learn more, please visit the [RPN Wikipedia](https://en.wikipedia.org/wiki/Reverse_Polish_notation)

## Reasoning Behind Technical Choices

### Language: `TypeScript`

TypeScript was chosen for this project due to its static typing, which helps catch errors early during development. Additionally, TypeScript's clean and organized syntax promotes maintainable and readable code, enhancing overall project tidiness.

### CLI: `readline-sync`

The `readline-sync` library was used to handle synchronous user input in the CLI, which simplifies the interaction model and makes the implementation straightforward.

### Testing: `Jest`

Jest is a comprehensive testing framework that provides a robust environment for writing and running tests.

### Modular Design

The project is structured in a modular way, separating concerns between different components (e.g., calculator logic, utility functions, user interactions). This makes the codebase more maintainable and extensible.

## Trade-offs and Future Improvements

### Trade-offs

- **Modular Input/Output Handling**: If I had gone further with the implementation, I would have created separate input/output modules. This would allow for easier integration of future interfaces such as WebSockets, file-based I/O, or TCP sockets.
- **Flexible Operator Handling**: To better accommodate additional operators and custom plugins, I would have developed the isOperator function further. This would involve a more flexible system for registering and managing operators, making it easier to extend the calculator's functionality with new features.

### Future Improvements

- **Additional Operators**: Implementing additional mathematical operators (e.g., exponentiation, modulus) and more complex functions (e.g., trigonometric functions).
- **Alternative Interfaces**: Extending the calculator to support WebSocket, file-based, or TCP socket interfaces.
- **Configuration and Plugin System**: Designing the calculator to accept plugins or configuration for additional operators, making it more flexible and extensible.

## Acknowledgements

This project was inspired by the highly intellegent and exceedingly kind people at Snap! Raise.
