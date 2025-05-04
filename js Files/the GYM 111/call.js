// Callback function using array destructuring
function processArray([first, second, third], callback) {
    console.log(`First: ${first}, Second: ${second}, Third: ${third}`);
    // Execute the callback function with the extracted values
    callback(first, second, third);
}

// Example of using the function with an array
const numbers = [10, 20, 30];
processArray(numbers, (first, second, third) => {
    console.log(`Callback received values: ${first}, ${second}, ${third}`);
});
