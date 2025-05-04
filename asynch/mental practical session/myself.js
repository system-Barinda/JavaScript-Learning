// Async function to divide two numbers
async function divideNumbers(numerator, denominator) {
    try {
        if (denominator === 0) {
            throw new Error("Cannot divide by zero");
        }
        const result = numerator / denominator;
        return result;  // If no error, return the division result
    } catch (error) {
        // Handle the error gracefully
        console.error("Error:", error.message);
    }
}

// Example usage
async function run() {
    const result1 = await divideNumbers(10, 2);  // This will succeed
    console.log("Result of division:", result1);

    const result2 = await divideNumbers(10, 0);  // This will throw an error
    console.log("Result of division:", result2);
}

run();
