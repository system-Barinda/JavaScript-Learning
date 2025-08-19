let persons = {
    name: "barinda system sylvere",
    age: 23,
    location: "Muhanga",
    univeresity: "tumba college"
};

let barinda = new Map(Object.entries(persons).map(([key,value]) => {
    return [key, typeof value === 'string' ? value.toUpperCase() : value];
}));
console.log(barinda)

