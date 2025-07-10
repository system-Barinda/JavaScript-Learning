const inventery = [
    {name:"barinda", type:"students",trade:9},
    {name:"system", type:"hasband",trade:2},
    {name:"sylvere", type:"umuyede",trade:4},
    {name:"Gambira", type:"students",trade:1},
    {name:"cyubahiro", type:"preacher",trade:19},
    {name:"cyubahiro", type:"hasband",trade:19},
    {name:"cyubahiro", type:"preacher",trade:19},
];

const result = Object.groupBy(inventery, ({ trade}) => 
    trade > 10 ? "thebest" : " sorry you are the little",  
);
console.table(inventery);
console.log(result.thebest);

