class Calculator {
    static add(a, b) {
        return new Promise((resolve, reject) => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject('Invalid input: Please provide numbers.');
            } else {
                resolve(a + b);
            }
        });
    }

    static subtract(a, b) {
        return new Promise((resolve, reject) => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject('Invalid input: Please provide numbers.');
            } else {
                resolve(a - b);
            }
        });
    }

    static multiply(a, b) {
        return new Promise((resolve, reject) => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject('Invalid input: Please provide numbers.');
            } else {
                resolve(a * b);
            }
        });
    }

    static divide(a, b) {
        return new Promise((resolve, reject) => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject('Invalid input: Please provide numbers.');
            } else if (b === 0) {
                reject('Error: Cannot divide by zero.');
            } else {
                resolve(a / b);
            }
        });
    }
}


Calculator.add(10, 5)
    .then(result => console.log("Addition Result: " + result))
    .catch(error => console.error(error));

Calculator.subtract(10, 5)
    .then(result => console.log("Subtraction Result: " + result))
    .catch(error => console.error(error));

Calculator.multiply(10, 5)
    .then(result => console.log("Multiplication Result: " + result))
    .catch(error => console.error(error));

Calculator.divide(10, 0)
    .then(result => console.log("Division Result: " + result))
    .catch(error => console.error(error));

Calculator.divide(10, 2)
    .then(result => console.log("Division Result: " + result))
    .catch(error => console.error(error));
