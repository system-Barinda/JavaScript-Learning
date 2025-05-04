const person = {
    name: "Alice",
    age: 30
  };
  
  Object.freeze(person);
  
  person.name = "Bob";  // This won't work because the object is frozen
  person.age = 25;      // This also won't work
  
  console.log(person);  // Outputs: { name: "Alice", age: 30 }
  