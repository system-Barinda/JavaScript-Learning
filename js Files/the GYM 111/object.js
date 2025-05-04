// Callback function using object destructuring
function processObject({ name, age, job }, callback) {
    console.log(`Name: ${name}, Age: ${age}, Job: ${job}`);
    // Execute the callback function with the extracted properties
    callback(name, age, job);
}

// Example of using the function with an object
const person = {
    name: "John Doe",
    age: 30,
    job: "Developer"
};

processObject(person, (name, age, job) => {
    console.log(`Callback received values: ${name}, ${age}, ${job}`);
});
