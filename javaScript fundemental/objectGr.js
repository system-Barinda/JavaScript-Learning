let person = [
    {name:"barinda",type:"patatos",quantity:33},
    {name:"barinda",type:"vegatable",quantity:45},
    {name:"Gambira",type:"fluit",quantity:60},
    {name:"iradukunda",type:"apple",quantity:30},
    {name:"sandrine",type:"fluit",quantity:300},
    {name:"grace",type:"apple",quantity:200},
    {name:"system",type:"vegatable",quantity:50},
];

let result = Object.groupBy(person, ({quantity}) => 
    quantity >= 60 ? "restock":"unsiffient"

);
console.log(result);