function* greatPerson() {
    const item = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    let name = [];
    for (let i of item) {
        name.push(yield i);  
    }
    return name;
}
let barinda = greatPerson();

let system = barinda.next(); 
console.log("Yielded:", system.value);  

system = barinda.next(`Hi, ${system.value}`);  
console.log("Yielded:", system.value);  // -> Diego

system = barinda.next(`Hello, ${system.value}`);
console.log("Yielded:", system.value);  // -> Farrin

system = barinda.next(`Greetings, ${system.value}`);
console.log("Yielded:", system.value);  // -> James

system = barinda.next(`Yo, ${system.value}`);
console.log("Yielded:", system.value);  // -> Kagure

system = barinda.next(`What's up, ${system.value}`);
console.log("Yielded:", system.value);  // -> Kavita

system = barinda.next(`Hey, ${system.value}`);
console.log("Yielded:", system.value);  // -> Orit

system = barinda.next(`Salutations, ${system.value}`);
console.log("Yielded:", system.value);  // -> Richard

// Final value returned when generator finishes
system = barinda.next(`Peace, ${system.value}`);
console.log("Final Collected Names:", system.value);  // -> Array of all responses
