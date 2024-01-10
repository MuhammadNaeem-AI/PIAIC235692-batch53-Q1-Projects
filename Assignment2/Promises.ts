//Imagine you are building a simple quiz app. Create a TypeScript function named fetchQuestion that returns a promise. This promise should resolve with a random quiz question (string). Use the promise to display the question when it's ready.
function fetchQuestion(): Promise<string> {
    const quizQuestions: string[] = [
        "What is the capital of France?",
        "In which year did World War II end?",
        "Who wrote 'Romeo and Juliet'?",
        // Add more quiz questions as needed
    ];

    return new Promise((resolve) => {
        // Simulate an asynchronous operation (e.g., fetching a question from a server)
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * quizQuestions.length);
            console.log(randomIndex);
            const randomQuestion = quizQuestions[randomIndex];
            resolve(randomQuestion);
        }, 1000); // Simulating a delay of 1 second
    });
}

// Example usage:
fetchQuestion().then((question) => {
    console.log("Quiz Question:", question);
    // Display the question in your app
}).catch((error) => {
    console.error("Error fetching quiz question:", error);
    // Handle errors if needed
});
