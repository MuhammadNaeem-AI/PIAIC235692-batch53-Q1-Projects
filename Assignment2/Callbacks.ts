//You are creating a basic calculator application. Write a TypeScript function named calculate that takes two numbers and an operation (add, subtract, multiply, or divide) as parameters. Implement a callback function to handle the calculation and display the result.

//Define the Operations
type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

//Declare a function with callback
function calculate(num1: number, num2: number, operation: Operation, callback: (result: number) => void): void {
    let result: number;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.error('Cannot divide by zero.');
                return;
            }
            break;
        default:
            console.error('Invalid operation.');
            return;
    }

    callback(result);
}

// Pre-deinfe values for num1 and num2 variable:
const num1 = 10;
const num2 = 5;

// Addition
calculate(num1, num2, 'add', (result) => {
    console.log(`Addition Result: ${result}`);
});

// Subtraction
calculate(num1, num2, 'subtract', (result) => {
    console.log(`Subtraction Result: ${result}`);
});

// Multiplication
calculate(num1, num2, 'multiply', (result) => {
    console.log(`Multiplication Result: ${result}`);
});

// Division
calculate(num1, num2, 'divide', (result) => {
    console.log(`Division Result: ${result}`);
});
