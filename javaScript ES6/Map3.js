let persons = {
    name: "barinda system sylvere",
    age: 23,
    location: "Muhanga",
    univeresity: "tumba college"
};

let barinda = new Map(Object.entries(persons).map(([key,valuee]) => [key.toUpperCase(),valuee]));
console.log(barinda)

