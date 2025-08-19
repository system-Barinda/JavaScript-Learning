let persons = {
    name: "barinda system sylvere",
    age: 23,
    location: "Muhanga",
    univeresity: "tumba college"
};
const barinda = new Map(Object.entries(persons).map(([key,value]) => {
    return [key, typeof value === 'string' ? value.toUpperCase() : value];
}));

console.log(Array.of(barinda.keys()))
