
// This is a simple calculator by using the inquirer and chalk libraries.
//This calculator only performed ADD, SUBTRACT, MULTIPLY, and DIVIDE operation


import inquirer from 'inquirer';
import chalk from 'chalk';

// Enumeration representing different mathematical operations
enum Operation {
  ADD = 'Addition',
  SUBTRACT = 'Subtraction',
  MULTIPLY = 'Multiplication',
  DIVIDE = 'Division',
}

// Interface for the user input when performing calculations
interface CalculatorInput {
  num1: number;
  num2: number;
  operation: Operation;
}

// Function to perform the specified mathematical operation
function performOperation(num1: number, num2: number, operation: Operation): number {
  switch (operation) {
    case Operation.ADD:
      return num1 + num2;
    case Operation.SUBTRACT:
      return num1 - num2;
    case Operation.MULTIPLY:
      return num1 * num2;
    case Operation.DIVIDE:
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error('Cannot divide by zero!');
      }
    default:
      throw new Error('Invalid operation');
  }
}

// Function to display a bold and large-size heading
function displayHeading() {
    console.log(chalk.bold.bgYellow('==================================================='));
    console.log(chalk.bold.green('           CALCULATOR  DEVELOPED BY           '));
    console.log(chalk.bold.bgYellow('==================================================='));
    console.log(chalk.bold.bgYellow('==================================================='));
    console.log(chalk.bold.green('           MUHAMMAD NAEEM           '));
    console.log(chalk.bold.bgYellow('==================================================='));
  }

// Main function to run the calculator
async function runCalculator() {
  
   // Display the heading
   displayHeading();

    // Variable to control whether to continue performing calculations
  let continueCalculations = true;

  // Main loop to repeatedly ask for user input and perform calculations
  while (continueCalculations) {
    try {
      // Get user input for numbers and operation
      const userInput: CalculatorInput = await inquirer.prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'Choose an operation:',
            choices: Object.values(Operation),
        },
        {
          type: 'number',
          name: 'num1',
          message: 'Enter the first number:',
        },
        {
          type: 'number',
          name: 'num2',
          message: 'Enter the second number:',
        },
      ]);

      // Perform the calculation based on user input
      const result = performOperation(userInput.num1, userInput.num2, userInput.operation);
      console.log(chalk.green(`Result: ${result}`));

      // Ask the user if they want to perform another operation
      const { performAnother } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'performAnother',
          message: 'Do you want to perform another operation?',
          default: true,
        },
      ]);

      // Update the control variable based on user input
      continueCalculations = performAnother;
    } catch (error) {
      // Handle errors, whether they are instances of Error or unknown types
      if (error instanceof Error) {
        console.log(chalk.red(`Error: ${error.message}`));
      } else {
        console.log(chalk.red(`Unknown error: ${error}`));
      }
    }
  }
}

// Run the calculator
runCalculator();
