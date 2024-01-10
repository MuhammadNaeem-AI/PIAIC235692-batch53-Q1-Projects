//Build a TypeScript function named waitAndGreet that takes a name (string) as a parameter. This function should use async/await to simulate a delay (e.g., 2 seconds) and then display a greeting with the provided name. Call this function from within an async function and log the result.
// Function to simulate a delay and display a greeting
async function waitAndGreet(name: string): Promise<string> {
    // Simulating a delay of 2 seconds using setTimeout
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Display a greeting with the provided name
    const greeting = `Hello, ${name}!`;
    return greeting;
}

// Async function to call waitAndGreet and log the result
async function main() {
    try {
        const result = await waitAndGreet("Naeem");
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the async function
main();
